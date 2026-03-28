import { posts } from "../data/posts";
import { Link } from "react-router-dom";

function Footer() {
  const months = [...new Set(posts.map((post) => post.date))];

  return (
    <footer className="mt-16 bg-gray-100 border-t">
      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* タイトル */}
        <h2 className="text-lg font-bold mb-4 text-gray-700">アーカイブ</h2>

        {/* グリッド化 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {months.map((month) => (
            <Link
              key={month}
              to={`/archive/${month}`}
              className="
                block text-center px-4 py-2 rounded-lg
                bg-white shadow-sm border
                hover:bg-blue-50 hover:text-blue-600 hover:shadow-md
                transition-all duration-200
              "
            >
              {month}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
