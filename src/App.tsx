import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Layout from "./components/Layout.tsx";
import About from "./pages/About.tsx";
import Category from "./pages/Category";
import Archive from "./pages/Archive.tsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/archive/:date" element={<Archive />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
