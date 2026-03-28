import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import PostCard from "../components/PostCard";

function Archive() {
  const { date } = useParams();

  const filteredPosts = posts.filter((post) => post.date === date);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">{date} の記事</h1>

      {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Archive;
