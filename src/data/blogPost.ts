import 'server-only';
import { prisma } from '../lib/prisma';

export const createPost = async (data: {title: string, content: string}) => {
  return await prisma.post.create({
    data: {
       title: data.title, 
       content: data.content
    },
  });
};
