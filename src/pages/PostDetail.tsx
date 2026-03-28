import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import rehypeRaw from "rehype-raw";

function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  const [content, setContent] = useState("");

  useEffect(() => {
    if (post) {
      fetch(`${import.meta.env.BASE_URL}posts/${post.file}`)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }
  }, [post]);

  if (!post) return <div>記事が見つかりません</div>;

  return (
    <div className="bg-white p-8 rounded-xl shadow">
      <p className="text-sm text-gray-400">
        {post.date}-{post.day}
      </p>
      <h1 className="text-3xl font-bold mb-6 border-b">{post.title}</h1>

      <div className="prose lg:prose-lg mx-auto">
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || "");

              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className="bg-gray-200 px-1 rounded" {...props}>
                  {children}
                </code>
              );
            },
          }}
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default PostDetail;
