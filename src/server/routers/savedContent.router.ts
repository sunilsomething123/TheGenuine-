import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { prisma } from '../prisma';

// Initialize tRPC
const t = initTRPC.create();

// Saved Content Router
export const savedContentRouter = t.router({
  saveContent: t.procedure
      .input(z.object({
            contentType: z.enum(['QUOTE', 'IMAGE', 'VIDEO']),
                  contentId: z.string(),
                        userId: z.string(),
                            }))
                                .mutation(async ({ input }) => {
                                      const { contentType, contentId, userId } = input;
                                            
                                                  const savedContent = await prisma.savedContent.create({
                                                          data: {
                                                                    contentType,
                                                                              contentId,
                                                                                        userId,
                                                                                                },
                                                                                                      });

                                                                                                            return savedContent;
                                                                                                                }),

                                                                                                                  getSavedContents: t.procedure
                                                                                                                      .input(z.object({
                                                                                                                            userId: z.string(),
                                                                                                                                }))
                                                                                                                                    .query(async ({ input }) => {
                                                                                                                                          const { userId } = input;

                                                                                                                                                const savedContents = await prisma.savedContent.findMany({
                                                                                                                                                        where: { userId },
                                                                                                                                                              });

                                                                                                                                                                    return savedContents;
                                                                                                                                                                        }),
                                                                                                                                                                        });