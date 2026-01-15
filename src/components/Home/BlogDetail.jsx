import { useParams } from "react-router-dom";
import { blogData } from "./SwipeCardsSection"; // same data file
import React from "react";
import ReaderResponse from "./Blogs/ReaderResponse";
import Footer from "../Footer";
import BlogMetaCard from "./Blogs/BlogMetaCard";

export default function BlogDetail() {
  const { id } = useParams();

  const blog = blogData
    .flatMap(section => section.slides)
    .find(item => item.id === id);

  if (!blog) return <p className="text-center">Blog not found</p>;

   return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-[#b7d2db] to-[#d7a48f] pt-24 pb-16 px-6">

        {/* 🔹 MAIN HEADING (OUTSIDE BOX) */}
        <h1 className="max-w-5xl mx-auto text-4xl font-bold text-center mb-12">
          {blog.heading}
        </h1>

        <div className="max-w-5xl mx-auto">

          {/* 🔹 TWO COLUMN SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">

            {/* LEFT META */}
            <BlogMetaCard blog={blog} />

            {/* RIGHT IMAGES */}
            <div className=" rounded-xl shadow-md p-6 space-y-6">
              {blog.image?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${blog.heading}-${i}`}
                  className="w-full rounded-lg object-cover"
                />
              ))}
            </div>
          </div>

          {/* 🔹 BLOG CONTENT BELOW (SAME WIDTH AS BEFORE) */}
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <p className="text-sm text-gray-600 mb-6 text-center">
              by {blog.author} | {blog.date}
            </p>

            <div
              className="prose prose-lg font-serif max-w-none 
                        prose-p:leading-relaxed
                        prose-p:mb-0
                        prose-p:not(:last-child):mb-8"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

        </div>
      </section>

      {/* READER RESPONSE */}
      <ReaderResponse />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
