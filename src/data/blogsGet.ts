import 'server-only';
import { prisma } from "@/lib/prisma"

export const blogsGet = async () => {
  return await prisma.post.findMany({
    orderBy: {
      createdAt: "desc"
    }
  })
}