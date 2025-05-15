import { createPost } from "@/data/blogPost";
import { redirect } from "next/navigation";

export default function NewBlogPage() {
  async function createBlog(formData: FormData) {
    "use server";

    const title = formData.get("title")?.toString() || "";
    const content = formData.get("content")?.toString() || "";

    if (!title || !content) {
      throw new Error("タイトルと本文は必須です");
    }

    await createPost({ title, content });

    redirect("/blogs"); // 投稿後に一覧ページへ移動
  }

  return (
    <form action={createBlog} className="space-y-4 p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">新規ブログ投稿</h1>

      <div>
        <label htmlFor="title" className="block font-medium">
          タイトル
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full border rounded p-2"
          required
        />
      </div>

      <div>
        <label htmlFor="content" className="block font-medium">
          内容
        </label>
        <textarea
          id="content"
          name="content"
          className="w-full border rounded p-2"
          rows={6}
          required
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        投稿する
      </button>
    </form>
  );
}
