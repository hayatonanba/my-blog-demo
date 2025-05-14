import { blogGet } from "@/data/blogGet";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request, { params }: { params: { id: string } }
) {
  const post = await blogGet(Number(params.id))

  if (!post) {
    return new NextResponse('Not found', { status: 404 });
  }

  return NextResponse.json(post);
}