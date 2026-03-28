import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <h1 className="web-title">しがない大学生の勉強ブログ</h1>

          <nav className="space-x-4 text-sm text-center">
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link className="hover:font-bold" to="/category/心理学">
              心理学
            </Link>
            <Link className="hover:font-bold" to="/category/工学部">
              工学部
            </Link>
            <Link className="hover:font-bold" to="/category/プログラミング">
              プログラミング
            </Link>
            <Link className="hover:font-bold" to="/category/読書">
              読書
            </Link>
            <Link to="/about" className="hover:text-blue-500">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* メイン */}
      <main className="max-w-4xl mx-auto px-6 py-10">{children}</main>
    </div>
  );
}

export default Layout;
