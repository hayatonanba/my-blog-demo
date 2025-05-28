import { blogGet } from "@/data/blogGet";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function BlogDetailPage({ params }: Props) {
  const id = Number(params.id);

  if (Number.isNaN(id)) {
    notFound();
  }

  const post = await blogGet(id);

  if (!post) {
    notFound(); // IDが存在しない場合は404ページへ
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
      <p className="text-sm text-gray-500">
        投稿日: {new Date(post.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}
