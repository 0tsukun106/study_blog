import { Link } from "react-router-dom";
import type { Post } from "../data/posts";

type Props = {
  post: Post;
};

function PostCard({ post }: Props) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition mb-6">
      {/* 日付 */}
      <p className="text-sm text-gray-400">
        {post.date}-{post.day}
      </p>

      {/* タイトル */}
      <h2 className="text-xl font-bold mt-1">{post.title}</h2>

      {/* リンク */}
      <Link
        to={`/post/${post.id}`}
        className="text-blue-500 text-sm mt-3 inline-block hover:underline"
      >
        続きを読む →
      </Link>
    </div>
  );
}

export default PostCard;
