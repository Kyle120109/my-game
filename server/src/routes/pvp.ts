import { FastifyPluginAsync } from 'fastify';
import { z } from 'zod';
import { MatchStatus } from '@prisma/client';
import { MatchmakingService, PlayerSocket } from '../services/matchmaking.js';
import { prisma } from '../db.js';

const matchmaking = new MatchmakingService();
const disconnectTimers = new Map<string, NodeJS.Timeout>();

const disconnectKey = (roomId: string, userId: string) => `${roomId}:${userId}`;

export const pvpRoutes: FastifyPluginAsync = async (fastify) => {
  const bindSocketEvents = (player: PlayerSocket) => {
    player.socket.on('message', (raw: Buffer) => {
      const roomNow = matchmaking.roomForUser(player.userId);
      if (!roomNow) return;
      const opponent = matchmaking.opponent(roomNow.id, player.userId);
      if (!opponent) return;

      const textPayload = raw.toString();
      opponent.socket.send(
        JSON.stringify({
          type: 'peer_event',
          from: player.userId,
          payload: textPayload,
          ts: Date.now(),
        }),
      );

      if (roomNow.dbMatchId) {
        void prisma.matchEvent.create({
          data: {
            matchId: roomNow.dbMatchId,
            senderId: player.userId,
            payload: textPayload,
          },
        });
      }
    });

    player.socket.on('close', () => {
      matchmaking.removeFromQueue(player.userId);
      const roomNow = matchmaking.roomForUser(player.userId);
      if (!roomNow) return;

      const key = disconnectKey(roomNow.id, player.userId);
      const existing = disconnectTimers.get(key);
      if (existing) clearTimeout(existing);

      const opponent = matchmaking.opponent(roomNow.id, player.userId);
      if (opponent) {
        opponent.socket.send(JSON.stringify({ type: 'opponent_disconnected', graceSeconds: 30 }));
      }

      const t = setTimeout(async () => {
        const stillInRoom = matchmaking.roomForUser(player.userId);
        if (!stillInRoom || stillInRoom.id !== roomNow.id) return;

        if (roomNow.dbMatchId) {
          await prisma.match.update({
            where: { id: roomNow.dbMatchId },
            data: {
              status: MatchStatus.CANCELED,
              endedAt: new Date(),
              winnerId: opponent?.userId,
            },
          });
        }

        if (opponent) {
          opponent.socket.send(JSON.stringify({ type: 'match_ended', reason: 'opponent_timeout' }));
        }

        matchmaking.closeRoom(roomNow.id);
        disconnectTimers.delete(key);
      }, 30_000);

      disconnectTimers.set(key, t);
    });
  };

  fastify.get('/queue', { websocket: true }, async (socket, req) => {
    try {
      const token = (req.query as Record<string, string | undefined>)?.token;
      if (!token) {
        socket.send(JSON.stringify({ type: 'error', message: 'missing token' }));
        socket.close();
        return;
      }

      const payload = await fastify.jwt.verify<{ userId: string; nickname: string }>(token);
      const player: PlayerSocket = { userId: payload.userId, nickname: payload.nickname, socket };

      const room = matchmaking.enqueue(player);
      socket.send(JSON.stringify({ type: 'queued' }));
      bindSocketEvents(player);

      if (room) {
        const dbMatch = await prisma.match.create({
          data: {
            playerAId: room.a.userId,
            playerBId: room.b.userId,
            status: MatchStatus.LIVE,
            startedAt: new Date(),
          },
        });
        matchmaking.setDbMatchId(room.id, dbMatch.id);

        const reconnectA = fastify.jwt.sign(
          {
            type: 'pvp_reconnect',
            userId: room.a.userId,
            roomId: room.id,
            matchId: dbMatch.id,
          },
          { expiresIn: '20m' },
        );

        const reconnectB = fastify.jwt.sign(
          {
            type: 'pvp_reconnect',
            userId: room.b.userId,
            roomId: room.id,
            matchId: dbMatch.id,
          },
          { expiresIn: '20m' },
        );

        room.a.socket.send(
          JSON.stringify({
            type: 'match_found',
            roomId: room.id,
            matchId: dbMatch.id,
            reconnectToken: reconnectA,
            you: { id: room.a.userId, nickname: room.a.nickname },
            opponent: { id: room.b.userId, nickname: room.b.nickname },
          }),
        );

        room.b.socket.send(
          JSON.stringify({
            type: 'match_found',
            roomId: room.id,
            matchId: dbMatch.id,
            reconnectToken: reconnectB,
            you: { id: room.b.userId, nickname: room.b.nickname },
            opponent: { id: room.a.userId, nickname: room.a.nickname },
          }),
        );
      }
    } catch {
      socket.send(JSON.stringify({ type: 'error', message: 'invalid token' }));
      socket.close();
    }
  });

  fastify.get('/reconnect', { websocket: true }, async (socket, req) => {
    try {
      const token = (req.query as Record<string, string | undefined>)?.token;
      if (!token) {
        socket.send(JSON.stringify({ type: 'error', message: 'missing reconnect token' }));
        socket.close();
        return;
      }

      const payload = await fastify.jwt.verify<{
        type: string;
        userId: string;
        roomId: string;
        matchId: string;
      }>(token);
      if (payload.type !== 'pvp_reconnect') {
        socket.send(JSON.stringify({ type: 'error', message: 'invalid reconnect token type' }));
        socket.close();
        return;
      }

      const room = matchmaking.replaceSocket(payload.roomId, payload.userId, socket);
      if (!room) {
        socket.send(JSON.stringify({ type: 'error', message: 'room not found or expired' }));
        socket.close();
        return;
      }

      const key = disconnectKey(payload.roomId, payload.userId);
      const t = disconnectTimers.get(key);
      if (t) {
        clearTimeout(t);
        disconnectTimers.delete(key);
      }

      const currentPlayer = room.a.userId === payload.userId ? room.a : room.b;
      const opponent = room.a.userId === payload.userId ? room.b : room.a;

      bindSocketEvents(currentPlayer);

      currentPlayer.socket.send(
        JSON.stringify({
          type: 'reconnected',
          roomId: room.id,
          matchId: payload.matchId,
        }),
      );
      opponent.socket.send(JSON.stringify({ type: 'opponent_reconnected' }));
    } catch {
      socket.send(JSON.stringify({ type: 'error', message: 'invalid reconnect token' }));
      socket.close();
    }
  });

  fastify.get('/events/:matchId', { preHandler: [fastify.authenticate] }, async (request, reply) => {
    const params = z.object({ matchId: z.string() }).parse(request.params);
    const query = z
      .object({
        after: z.coerce.number().int().min(0).default(0),
        limit: z.coerce.number().int().min(1).max(500).default(200),
      })
      .parse(request.query ?? {});

    const callerId = (request.user as any).userId as string;
    const match = await prisma.match.findUnique({ where: { id: params.matchId } });
    if (!match) return reply.status(404).send({ message: 'Match not found' });
    if (callerId !== match.playerAId && callerId !== match.playerBId) {
      return reply.status(403).send({ message: 'Not your match' });
    }

    const events = await prisma.matchEvent.findMany({
      where: { matchId: params.matchId },
      orderBy: { createdAt: 'asc' },
      skip: query.after,
      take: query.limit,
    });

    return { items: events, nextOffset: query.after + events.length };
  });

  fastify.get('/result/status/:matchId', { preHandler: [fastify.authenticate] }, async (request, reply) => {
    const { matchId } = z.object({ matchId: z.string() }).parse(request.params);
    const callerId = (request.user as any).userId as string;

    const match = await prisma.match.findUnique({ where: { id: matchId } });
    if (!match) return reply.status(404).send({ message: 'Match not found' });
    if (callerId !== match.playerAId && callerId !== match.playerBId) {
      return reply.status(403).send({ message: 'Not your match' });
    }

    const reports = await prisma.matchResultReport.findMany({ where: { matchId } });
    return {
      matchId,
      matchStatus: match.status,
      winnerId: match.winnerId,
      reports: reports.map((r) => ({ userId: r.userId, claimedWinnerId: r.claimedWinnerId })),
    };
  });

  fastify.post(
    '/result/claim',
    {
      preHandler: [fastify.authenticate],
      config: { rateLimit: { max: 30, timeWindow: '1 minute' } },
    },
    async (request, reply) => {
      const schema = z.object({ matchId: z.string(), winnerId: z.string() });
      const { matchId, winnerId } = schema.parse(request.body);

      const callerId = (request.user as any).userId as string;
      const match = await prisma.match.findUnique({ where: { id: matchId } });
      if (!match) return reply.status(404).send({ message: 'Match not found' });

      const players = new Set([match.playerAId, match.playerBId]);
      if (!players.has(callerId)) return reply.status(403).send({ message: 'Not your match' });
      if (!players.has(winnerId)) return reply.status(400).send({ message: 'winnerId not in this match' });

      if (match.status === MatchStatus.FINISHED) {
        return { ok: true, finalized: true, winnerId: match.winnerId };
      }
      if (match.status !== MatchStatus.LIVE) {
        return reply.status(409).send({ message: `Match is not live: ${match.status}` });
      }

      await prisma.matchResultReport.upsert({
        where: { matchId_userId: { matchId, userId: callerId } },
        update: { claimedWinnerId: winnerId },
        create: { matchId, userId: callerId, claimedWinnerId: winnerId },
      });

      const reports = await prisma.matchResultReport.findMany({ where: { matchId } });
      if (reports.length < 2) {
        return { ok: true, finalized: false, pending: true };
      }

      const [r1, r2] = reports;
      if (r1.claimedWinnerId !== r2.claimedWinnerId) {
        return { ok: true, finalized: false, conflict: true };
      }

      const agreedWinner = r1.claimedWinnerId;
      const loserId = match.playerAId === agreedWinner ? match.playerBId : match.playerAId;

      await prisma.$transaction([
        prisma.match.update({
          where: { id: matchId },
          data: { status: MatchStatus.FINISHED, winnerId: agreedWinner, endedAt: new Date() },
        }),
        prisma.mmrRating.update({
          where: { userId: agreedWinner },
          data: { rating: { increment: 20 }, games: { increment: 1 }, wins: { increment: 1 } },
        }),
        prisma.mmrRating.update({
          where: { userId: loserId },
          data: { rating: { decrement: 20 }, games: { increment: 1 }, losses: { increment: 1 } },
        }),
      ]);

      const room = matchmaking.roomForUser(agreedWinner) ?? matchmaking.roomForUser(loserId);
      if (room) matchmaking.closeRoom(room.id);

      return { ok: true, finalized: true, winnerId: agreedWinner };
    },
  );
};
