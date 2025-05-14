import { createPost } from "@/data/blogPost";
import { blogsGet } from "@/data/blogsGet";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await blogsGet()
  return NextResponse.json(posts)
}

export async function POST(req: Request) {
  const body = await req.json();
  const post = await createPost(body.title, body.content);
  return Response.json(post);
}