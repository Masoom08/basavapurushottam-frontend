import { useParams } from "react-router-dom";
import { posts } from "../components/Philosophy/posts";

import BlogHero from "../components/Blogs/BlogHero";
import BlogMetaSection from "../components/Blogs/BlogMetaSection";
import BlogContent from "../components/Blogs/BlogContent";
import ReaderResponse from "../components/Blogs/ReaderResponse";

export default function PhilosophyDetail() {
  const { id } = useParams();

  const post = posts.find(item => item.id === id);

  if (!post) {
    return <p className="text-center pt-32">Post not found</p>;
  }

  // Normalize Philosophy post → Blog shape
  const blogLikeData = {
    heading: post.title,
    author: post.author,
    date: post.date,
    content: post.content,
    category: "Philosophy",
    tags: post.tags || [],
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
