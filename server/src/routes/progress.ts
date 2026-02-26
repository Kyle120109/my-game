import { FastifyPluginAsync } from 'fastify';
import { z } from 'zod';
import { prisma } from '../db.js';

const updateSchema = z.object({
  campaignLv: z.number().int().min(1).max(999).optional(),
  unlocked: z.record(z.string(), z.any()).optional(),
  inventory: z.record(z.string(), z.any()).optional(),
});

export const progressRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get('/me', { preHandler: [fastify.authenticate] }, async (request) => {
    const userId = (request.user as any).userId as string;
    return prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, nickname: true, email: true, progress: true, mmr: true },
    });
  });

  fastify.put('/progress', { preHandler: [fastify.authenticate] }, async (request, reply) => {
    const body = updateSchema.parse(request.body);
    const userId = (request.user as any).userId as string;

    const existing = await prisma.playerProgress.findUnique({ where: { userId } });
    if (!existing) return reply.status(404).send({ message: 'Progress not found' });

    const updated = await prisma.playerProgress.update({
      where: { userId },
      data: {
        campaignLv: body.campaignLv ?? existing.campaignLv,
        unlocked: (body.unlocked ?? existing.unlocked) as any,
        inventory: (body.inventory ?? existing.inventory) as any,
      },
    });

    return updated;
  });
};
