import 'dotenv/config';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import websocket from '@fastify/websocket';
import rateLimit from '@fastify/rate-limit';
import fastifyStatic from '@fastify/static';
import { z } from 'zod';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { authRoutes } from './routes/auth.js';
import { progressRoutes } from './routes/progress.js';
import { leaderboardRoutes } from './routes/leaderboard.js';
import { pvpRoutes } from './routes/pvp.js';
import { prisma } from './db.js';
import { redis } from './redis.js';

const envSchema = z.object({
  PORT: z.coerce.number().int().min(1).max(65535).default(3000),
  HOST: z.string().default('0.0.0.0'),
  JWT_SECRET: z.string().min(16, 'JWT_SECRET must be at least 16 chars in non-dev'),
});

const env = envSchema.safeParse(process.env);
if (!env.success) {
  console.error('Invalid env:', env.error.flatten().fieldErrors);
  process.exit(1);
}

const app = Fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: { translateTime: 'SYS:standard', ignore: 'pid,hostname' },
    },
  },
});

await app.register(cors, { origin: true });
await app.register(jwt, { secret: env.data.JWT_SECRET });
await app.register(websocket);
await app.register(rateLimit, {
  global: true,
  max: 120,
  timeWindow: '1 minute',
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
await app.register(fastifyStatic, {
  root: path.join(__dirname, '..', '..', 'dist'),
  prefix: '/',
});

app.decorate('authenticate', async (request: any, reply: any) => {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.send(err);
  }
});

app.get('/', async (_req, reply) => reply.sendFile('index.html'));
app.get('/health', async () => ({ ok: true, ts: Date.now() }));

app.get('/health/deps', async (_request, reply) => {
  const report: Record<string, any> = {
    ok: true,
    ts: Date.now(),
    deps: {
      postgres: { ok: false },
      redis: { ok: redis ? false : null },
    },
  };

  try {
    await prisma.$queryRaw`SELECT 1`;
    report.deps.postgres.ok = true;
  } catch (err: any) {
    report.ok = false;
    report.deps.postgres.error = err?.message ?? 'unknown';
  }

  if (redis) {
    try {
      const pong = await redis.ping();
      report.deps.redis.ok = pong === 'PONG';
      if (!report.deps.redis.ok) report.ok = false;
    } catch (err: any) {
      report.ok = false;
      report.deps.redis.error = err?.message ?? 'unknown';
    }
  }

  if (!report.ok) return reply.status(503).send(report);
  return report;
});

await app.register(authRoutes, { prefix: '/auth' });
await app.register(progressRoutes, { prefix: '/player' });
await app.register(leaderboardRoutes, { prefix: '/leaderboard' });
await app.register(pvpRoutes, { prefix: '/pvp' });

const shutdown = async (signal: string) => {
  app.log.info({ signal }, 'shutting down');
  await app.close();
  await prisma.$disconnect();
  if (redis) redis.disconnect();
  process.exit(0);
};

process.on('SIGINT', () => void shutdown('SIGINT'));
process.on('SIGTERM', () => void shutdown('SIGTERM'));

app.listen({ port: env.data.PORT, host: env.data.HOST }).catch((err) => {
  app.log.error(err);
  process.exit(1);
});
