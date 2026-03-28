import { posts } from "../data/posts";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Recent Posts</h1>

      {posts.slice(0, 5).map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      <Footer />
    </div>
  );
}

export default Home;
