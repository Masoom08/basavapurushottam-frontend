import { useState, useRef } from "react";

export default function SwipeCard({ title, slides }) {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX.current - endX > 50) next();
    if (endX - startX.current > 50) prev();
  };

  return (
    <div className="text-center">
      {/* ✅ TITLE OUTSIDE CARD */}
      <h2 className="font-[Time-New-Roman] text-3xl font-bold text-[#b7d2db] mb-6">
        {title}
      </h2>

      {/* CARD */}
      <div
        className="bg-[#2f3136] rounded-3xl px-8 py-10 relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d7a48f] text-3xl"
        >
          &#10094;
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#d7a48f] text-3xl"
        >
          &#10095;
        </button>

        {/* Content */}
        <h3 className="text-xl text-white font-semibold mb-2">
          {slides[index].heading}
        </h3>

        <p className="font-[Time-New-Roman] text-xs text-[#d7a48f] mb-4">
          {slides[index].sub}
        </p>

        <p className="font-[Time-New-Roman] text-base text-white leading-relaxed mb-6">
          {slides[index].desc}
        </p>

        <button className="font-[Time-New-Roman] bg-[#d7a48f] text-black px-5 py-2 rounded-full text-sm font-semibold">
          Read More
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
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
