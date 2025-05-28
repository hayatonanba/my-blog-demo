import { blogsGet } from "@/data/blogsGet";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await blogsGet();

  return (
    <div className="space-y-6 p-4">
      <h1 className="text-2xl font-bold">ブログ一覧</h1>
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="mt-2 text-gray-700">{post.content}</p>
          <p className="mt-1 text-sm text-gray-500">
            投稿日: {new Date(post.createdAt).toLocaleDateString()}
          </p>
          <Link href={`/blogs/${post.id}`} className="text-blue-600 underline">
            記事を読む
          </Link>
        </div>
      ))}
    </div>
  );
}