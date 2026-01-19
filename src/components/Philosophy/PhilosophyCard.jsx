import { useState } from "react";
import { posts } from "./posts";

export default function PhilosophyCard() {
  const POSTS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  return (
    <div className="relative z-10 max-w-6xl mx-auto px-6">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-2">
              {post.title}
            </h3>

            <p className="text-gray-700 mb-1 text-sm">
              by {post.author} | {post.date}
            </p>

            <p className="text-gray-800 mt-2 flex-grow">
              {post.description}
            </p>

            <button className="mt-4 text-blue-600 font-semibold underline self-start">
              read more
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-10">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-white shadow disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg shadow ${
                currentPage === i + 1
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(p + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-white shadow disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
