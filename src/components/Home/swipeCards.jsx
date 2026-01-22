import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { categorySlugMap } from "../Blogs/category";

export default function SwipeCard({ title, slides }) {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX.current - endX > 50) next();
    if (endX - startX.current > 50) prev();
  };

  const current = slides[index];

  return (
    <div className="text-center h-full flex flex-col">
      {/* TITLE */}
      <h2 className="font-[Time-New-Roman] text-3xl font-bold text-[#b7d2db] mb-6">
        {title}
      </h2>

      {/* CARD */}
      <div
        className="
          bg-[#2f3136]
          rounded-3xl
          px-8 py-10
          relative
          border-2 border-[#b7d2db]
          flex flex-col
          h-full
        "
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="
            absolute left-4
            top-1/2 -translate-y-1/2
            text-[#d7a48f]
            text-3xl
            leading-none
          "
        >
          &#10094;
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="
            absolute right-4
            top-1/2 -translate-y-1/2
            text-[#d7a48f]
            text-3xl
            leading-none
          "
        >
          &#10095;
        </button>

        {/* CONTENT BLOCK (flex-grow keeps arrows aligned) */}
        <div className="flex-grow">
          {current.image?.[0] && (
            <img
              src={current.image[0]}
              alt={current.heading}
              className="h-40 mx-auto mb-4 rounded-md object-cover"
            />
          )}

          <h3 className="text-xl text-white font-semibold mb-2">
            {current.heading}
          </h3>

          <p className="text-xs text-[#d7a48f] mb-4">
            {current.sub}
          </p>

          <p className="text-base text-white leading-relaxed">
            {current.desc}
          </p>
        </div>

        {/* READ MORE */}
        <button
          onClick={() =>
            navigate(`/blogs/${categorySlugMap[title]}/${current.id}`)
          }
          className="mt-6 bg-[#d7a48f] px-5 py-2 rounded-full font-semibold"
        >
          Read More
        </button>

        {/* DOTS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
