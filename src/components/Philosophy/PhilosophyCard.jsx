import { useState } from "react";
import { posts } from "./posts";
import { Link } from "react-router-dom";

export default function PhilosophyCard() {
  const POSTS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const reversedPosts = [...posts].reverse();
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = reversedPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );


  return (
    <div className="relative z-10 w-full">

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {currentPosts.map((post) => (
          <article
            key={post.id}
            className="
              bg-white
              rounded-xl
              px-10 py-8
              flex flex-col
              leading-relaxed
              relative
            "
          >
            {/* TITLE */}
            <h3
              className="
                font-serif
                text-[22px]
                font-normal
                text-[#1f2d3d]
                leading-snug
                mb-2
              "
            >
              {post.title}
            </h3>

            {/* META */}
            <p className="font-serif text-[13px] italic text-[#c45d3c] mb-3">
              by {post.author} | {post.date}
            </p>

            {/* DESCRIPTION */}
            <p className="font-serif text-[15px] text-[#2f2f2f]">
              {post.description}
            </p>

            {/* READ MORE — tighter spacing */}
            <Link
              to={`/philosophy/${post.id}`}
              className="
                mt-2
                font-serif
                text-[14px]
                text-[#1f2d3d]
                underline
                underline-offset-4
                self-start
                hover:text-[#c45d3c]
                transition-colors
              "
            >
              read more
            </Link>

            {/* BLUE STRIP */}
            <span className="absolute bottom-0 left-0 w-full h-[10px] bg-[#b7d2db] rounded-b-xl" />
          </article>
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-14 font-serif">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-md bg-white/80 text-sm disabled:opacity-40"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-md text-sm ${
                currentPage === i + 1
                  ? "bg-[#1f2d3d] text-white"
                  : "bg-white/80"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-md bg-white/80 text-sm disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
