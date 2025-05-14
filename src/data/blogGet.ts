import 'server-only';
import { prisma } from "@/lib/prisma"

export const blogGet = async (id: number) => {
  return await prisma.post.findUnique({
    where: { id }
  })
}