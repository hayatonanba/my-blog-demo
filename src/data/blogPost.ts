import 'server-only';
import { prisma } from '../lib/prisma';

export const createPost = async (title: string, content: string) => {
  return await prisma.post.create({
    data: { title, content },
  });
};
