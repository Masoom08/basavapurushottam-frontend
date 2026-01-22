import { useParams } from "react-router-dom";
import { pythonData } from "../components/Python/pythonData";

import BlogHero from "../components/Blogs/BlogHero";
import BlogMetaSection from "../components/Blogs/BlogMetaSection";
import BlogContent from "../components/Blogs/BlogContent";
import ReaderResponse from "../components/Blogs/ReaderResponse";

export default function PythonDetail() {
  const { id } = useParams();
  const article = pythonData.find(item => item.id === id);

  if (!article) {
    return <p className="text-center pt-32">Article not found</p>;
  }

  // 🔁 Normalize Python article → Blog-compatible shape
  const blogLikeData = {
    heading: article.heading,
    author: article.author,
    date: article.date,
    content: article.content,
    category: "Python",
    tags: article.tags || [],
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#b7d2db] to-[#d7a48f] pt-24 pb-16 px-6">
      <BlogHero blog={blogLikeData} />
      <BlogMetaSection blog={blogLikeData} />
      <BlogContent blog={blogLikeData} />
      <ReaderResponse />
    </section>
  );
}
