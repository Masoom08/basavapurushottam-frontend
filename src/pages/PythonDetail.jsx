import { useParams } from "react-router-dom";
import { pythonData } from "../components/Python/pythonData";
import ReaderResponse from "../components/Blogs/ReaderResponse";
import BlogMetaCard from "../components/Blogs/BlogMetaCard";

export default function PythonDetail() {
  const { id } = useParams();
  const article = pythonData.find((item) => item.id === id);

  if (!article) {
    return <p className="text-center pt-32">Article not found</p>;
  }

  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-[#b7d2db] to-[#d7a48f] pt-24 pb-16 px-6">

        {/* MAIN HEADING */}
        <h1 className="max-w-5xl mx-auto text-4xl font-bold text-center mb-12">
          {article.heading}
        </h1>

        <div className="max-w-5xl mx-auto">

          {/* TWO COLUMN */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">

            {/* META */}
            <BlogMetaCard
              blog={{
                category: "Python",
                tags: article.tags,
              }}
            />

            
          </div>

          {/* CONTENT */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-sm text-gray-600 mb-6 text-center">
              by {article.author} | {article.date}
            </p>

            <div
              className="blog-content font-serif text-[17px]"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

        </div>
      </section>

      <ReaderResponse />
    </>
  );
}
