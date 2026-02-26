import { randomUUID } from 'node:crypto';
import { WebSocket } from '@fastify/websocket';

export type PlayerSocket = {
  userId: string;
  nickname: string;
  socket: WebSocket;
};

export type Room = {
  id: string;
  a: PlayerSocket;
  b: PlayerSocket;
  createdAt: number;
  dbMatchId?: string;
};

export class MatchmakingService {
  private queue: PlayerSocket[] = [];
  private rooms = new Map<string, Room>();

  enqueue(player: PlayerSocket): Room | null {
    const existsInQueue = this.queue.find((x) => x.userId === player.userId);
    const existsInRoom = this.roomForUser(player.userId);
    if (existsInQueue || existsInRoom) return null;

    this.queue.push(player);
    if (this.queue.length < 2) return null;

    const a = this.queue.shift();
    const b = this.queue.shift();
    if (!a || !b) return null;

    const room: Room = { id: randomUUID(), a, b, createdAt: Date.now() };
    this.rooms.set(room.id, room);
    return room;
  }

  setDbMatchId(roomId: string, dbMatchId: string) {
    const room = this.rooms.get(roomId);
    if (!room) return;
    room.dbMatchId = dbMatchId;
  }

  removeFromQueue(userId: string) {
    this.queue = this.queue.filter((x) => x.userId !== userId);
  }

  roomForUser(userId: string) {
    for (const room of this.rooms.values()) {
      if (room.a.userId === userId || room.b.userId === userId) return room;
    }
    return null;
  }

  roomById(roomId: string) {
    return this.rooms.get(roomId) ?? null;
  }

  opponent(roomId: string, userId: string): PlayerSocket | null {
    const room = this.rooms.get(roomId);
    if (!room) return null;
    if (room.a.userId === userId) return room.b;
    if (room.b.userId === userId) return room.a;
    return null;
  }

  replaceSocket(roomId: string, userId: string, socket: WebSocket) {
    const room = this.rooms.get(roomId);
    if (!room) return null;

    if (room.a.userId === userId) {
      room.a = { ...room.a, socket };
      return room;
    }
    if (room.b.userId === userId) {
      room.b = { ...room.b, socket };
      return room;
    }
    return null;
  }

  closeRoom(roomId: string) {
    this.rooms.delete(roomId);
  }
}
