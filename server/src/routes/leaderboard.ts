import { FastifyPluginAsync } from 'fastify';
import { z } from 'zod';
import { prisma } from '../db.js';
import { redis } from '../redis.js';

const submitSchema = z.object({
  mapCode: z.string().min(2).max(50),
  mapName: z.string().min(2).max(100).optional(),
  score: z.number().int().min(0).max(10_000_000),
  durationMs: z.number().int().min(1).max(10_000_000),
});

const rankingKey = (mapCode: string) => `pvz:lb:${mapCode}`;

type RankingEntry = {
  userId: string;
  nickname: string;
  score: number;
  durationMs: number;
};

export const leaderboardRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.post('/submit', {
    preHandler: [fastify.authenticate],
    config: { rateLimit: { max: 20, timeWindow: '1 minute' } },
  }, async (request) => {
    const body = submitSchema.parse(request.body);
    const userId = (request.user as any).userId as string;

    const map = await prisma.map.upsert({
      where: { code: body.mapCode },
      update: {},
      create: { code: body.mapCode, name: body.mapName ?? body.mapCode },
    });

    const existing = await prisma.mapBestScore.findUnique({
      where: { userId_mapId: { userId, mapId: map.id } },
      include: { user: { select: { nickname: true } } },
    });

    const isBetter =
      !existing ||
      body.score > existing.score ||
      (body.score === existing.score && body.durationMs < existing.durationMs);

    if (!isBetter) return { updated: false, best: existing };

    const best = await prisma.mapBestScore.upsert({
      where: { userId_mapId: { userId, mapId: map.id } },
      update: { score: body.score, durationMs: body.durationMs },
      create: { userId, mapId: map.id, score: body.score, durationMs: body.durationMs },
      include: { user: { select: { nickname: true } } },
    });

    if (redis) {
      const payload: RankingEntry = {
        userId,
        nickname: best.user.nickname,
        score: best.score,
        durationMs: best.durationMs,
      };
      await redis.hset(rankingKey(body.mapCode), userId, JSON.stringify(payload));
      await redis.expire(rankingKey(body.mapCode), 3600);
    }

    return { updated: true, best };
  });

  fastify.get('/:mapCode', async (request, reply) => {
    const paramSchema = z.object({ mapCode: z.string() });
    const querySchema = z.object({ limit: z.coerce.number().int().min(1).max(100).default(20) });
    const { mapCode } = paramSchema.parse(request.params);
    const { limit } = querySchema.parse(request.query ?? {});

    if (redis) {
      const cached = await redis.hgetall(rankingKey(mapCode));
      const entries = Object.values(cached)
        .map((v) => {
          try {
            return JSON.parse(v) as RankingEntry;
          } catch {
            return null;
          }
        })
        .filter((v): v is RankingEntry => !!v)
        .sort((a, b) => (b.score - a.score) || (a.durationMs - b.durationMs))
        .slice(0, limit);

      if (entries.length > 0) {
        return { map: { code: mapCode, name: mapCode }, top: entries, source: 'redis_cache' };
      }
    }

    const map = await prisma.map.findUnique({ where: { code: mapCode } });
    if (!map) return reply.status(404).send({ message: 'Map not found' });

    const top = await prisma.mapBestScore.findMany({
      where: { mapId: map.id },
      orderBy: [{ score: 'desc' }, { durationMs: 'asc' }],
      take: limit,
      include: { user: { select: { id: true, nickname: true } } },
    });

    if (redis && top.length > 0) {
      const kv: Record<string, string> = {};
      for (const row of top) {
        kv[row.userId] = JSON.stringify({
          userId: row.userId,
          nickname: row.user.nickname,
          score: row.score,
          durationMs: row.durationMs,
        } satisfies RankingEntry);
      }
      await redis.hset(rankingKey(mapCode), kv);
      await redis.expire(rankingKey(mapCode), 3600);
    }

    return { map: { code: map.code, name: map.name }, top, source: 'postgres' };
  });
};
