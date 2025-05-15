import Link from "next/link";

export default function Page() {
    return (
        <div>
          <h1>ホーム</h1>
          <Link href="/blogs">全体</Link>
          <Link href="/blogs/{id}">個別</Link>
          <Link href="/new">投稿</Link>
        </div>
    );
}

