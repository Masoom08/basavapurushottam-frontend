import { useParams } from "react-router-dom";
import { posts } from "../components/Philosophy/posts";
import ReaderResponse from "../components/Blogs/ReaderResponse";
import BlogMetaCard from "../components/Blogs/BlogMetaCard";

export default function PhilosophyDetail() {
  const { id } = useParams();

  const post = posts.find(item => item.id === id);

  if (!post) {
    return <p className="text-center pt-32">Post not found</p>;
  }

  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-[#b7d2db] to-[#d7a48f] pt-24 pb-16 px-6">

        {/* TITLE */}
        <h1 className="max-w-5xl mx-auto text-4xl font-bold text-center mb-12">
          {post.title}
        </h1>

        <div className="max-w-5xl mx-auto">

          {/* TWO COLUMN */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">

            {/* META */}
            <BlogMetaCard
              blog={{
                category: "Philosophy",
                tags: post.tags || []
              }}
            />

            {/* OPTIONAL IMAGE / EMPTY PLACEHOLDER
            <div className="rounded-xl shadow-md p-6 flex items-center justify-center text-gray-400 italic">
              Philosophy is visualized through thought.
            </div> */}
          </div>

          {/* CONTENT */}
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <p className="text-sm text-gray-600 mb-6 text-center">
              by {post.author} | {post.date}
            </p>

            <div
              className="blog-content font-serif text-[17px]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

        </div>
      </section>

      {/* READER RESPONSE */}
      <ReaderResponse />
    </>
  );
}
