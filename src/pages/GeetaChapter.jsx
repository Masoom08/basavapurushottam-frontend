import React from "react";
import { useParams } from "react-router-dom";
import { chapters } from "../components/Spiritual/geeta";
import GeetaOverlay from "../assets/geeta.png";

export default function GeetaChapter() {

  const { id } = useParams();

  // find selected chapter
  const chapter = chapters.find(
    (c) => String(c.link) === id
  );

  if (!chapter) {
    return <div>Chapter not found</div>;
  }

  return (
    <>
    <section className="relative w-full h-[80vh] overflow-hidden">

      {/* Background Image */}
      <img
        src={chapter.heroImg}   // each chapter can have hero image
        alt={chapter.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Image Overlay */}
      <img
        src={GeetaOverlay}
        alt="overlay"
        className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-end h-full text-white px-6 md:px-16">

        <div className="flex flex-col text-right max-w-xl">

        <p className="uppercase tracking-widest text-sm mb-2">
          My interpretation of the sacred text
        </p>

        <h1 className="text-4xl md:text-6xl font-bold">
          Bhagwad Geeta
        </h1>

        <p className="mt-3 text-sm tracking-wider">
          CHAPTER {chapter.link} — {chapter.title}
        </p>
        </div>

      </div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="relative block w-full h-[80px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,100 900,0 1440,80 L1440,120 L0,120 Z"
            className="fill-white"
          />
        </svg>
      </div>

    </section>

    <section className="bg-white py-14">

      <div
        className="geeta-content max-w-4xl mx-auto px-6"
        dangerouslySetInnerHTML={{ __html: chapter.content }}
      />

    </section>
    </>
  );
}
