import { FastifyPluginAsync } from 'fastify';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { prisma } from '../db.js';

const registerSchema = z.object({
  email: z.string().email(),
  nickname: z.string().min(3).max(20),
  password: z.string().min(6).max(100),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

export const authRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.post('/register', async (request, reply) => {
    const body = registerSchema.parse(request.body);
    const passwordHash = await bcrypt.hash(body.password, 10);

    const user = await prisma.user.create({
      data: {
        email: body.email,
        nickname: body.nickname,
        passwordHash,
        progress: {
          create: {
            unlocked: { plants: ['peashooter', 'sunflower'] },
            inventory: { sun: 50, coins: 0 },
          },
        },
        mmr: { create: {} },
      },
      select: { id: true, nickname: true, email: true },
    });

    const token = fastify.jwt.sign({ userId: user.id, nickname: user.nickname });
    return reply.send({ token, user });
  });

  fastify.post('/login', async (request, reply) => {
    const body = loginSchema.parse(request.body);
    const user = await prisma.user.findUnique({ where: { email: body.email } });
    if (!user) {
      return reply.status(401).send({ message: 'Invalid credentials' });
    }

    const ok = await bcrypt.compare(body.password, user.passwordHash);
    if (!ok) {
      return reply.status(401).send({ message: 'Invalid credentials' });
    }

    const token = fastify.jwt.sign({ userId: user.id, nickname: user.nickname });
    return reply.send({ token, user: { id: user.id, nickname: user.nickname, email: user.email } });
  });
};
