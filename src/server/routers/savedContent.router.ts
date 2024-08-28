import { z } from 'zod';
import { createRouter } from '../createRouter';
import { prisma } from '../prisma';

export const savedContentRouter = createRouter()
  .mutation('saveContent', {
    input: z.object({
      contentType: z.enum(['QUOTE', 'IMAGE', 'VIDEO']),
      contentId: z.string(),
      userId: z.string(),
    }),
    resolve: async ({ input }) => {
      const { contentType, contentId, userId } = input;

      const savedContent = await prisma.savedContent.create({
        data: {
          contentType,
          contentId,
          userId,
        },
      });

      return savedContent;
    },
  })
  .query('getSavedContents', {
    input: z.object({
      userId: z.string(),
    }),
    resolve: async ({ input }) => {
      const { userId } = input;

      const savedContents = await prisma.savedContent.findMany({
        where: { userId },
      });

      return savedContents;
    },
  });
