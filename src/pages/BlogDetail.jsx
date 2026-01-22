import { useParams } from "react-router-dom";
import { blogData } from "../components/Blogs/BlogData";

import BlogHero from "../components/Blogs/BlogHero";
import BlogMetaSection from "../components/Blogs/BlogMetaSection";
import BlogContent from "../components/Blogs/BlogContent";
import ReaderResponse from "../components/Blogs/ReaderResponse";

export default function BlogDetail() {
  const { category, id } = useParams();

  const section = blogData.find(section => {
    if (category === "work") return section.title === "Work and Office";
    if (category === "personal") return section.title === "Personal";
    if (category === "news") return section.title === "News and Media";
    return false;
  });

  const blog = section?.slides.find(item => item.id === id);

  if (!blog) return <p className="text-center">Blog not found</p>;

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#b7d2db] to-[#d7a48f] pt-24 pb-16 px-6">
      <BlogHero blog={blog} />
      <BlogMetaSection blog={blog} />
      <BlogContent blog={blog} />
      <ReaderResponse />
    </section>
  );
}
