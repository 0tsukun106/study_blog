import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import PostCard from "../components/PostCard";

function Category() {
  const { name } = useParams();

  const filteredPosts = posts.filter((post) => post.category === name);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">{name}</h1>

      {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Category;
