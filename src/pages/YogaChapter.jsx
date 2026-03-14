import React from "react";
import { useParams } from "react-router-dom";
import { chapters } from "../components/Spiritual/yogaData";
import YogaOverlay from "../assets/yoga.png";

export default function YogaChapter() {

  const { id } = useParams();

  const chapter = chapters.find(
    (c) => String(c.link) === id
  );

  if (!chapter) {
    return <div>Chapter not found</div>;
  }

  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[80vh] overflow-hidden">

        <img
          src={chapter.heroImg}
          alt={chapter.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <img
          src={YogaOverlay}
          alt="overlay"
          className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none"
        />

        <div className="relative z-10 flex items-center justify-end h-full text-white px-6 md:px-16">

          <div className="flex flex-col text-right max-w-xl">

            <p className="uppercase tracking-widest text-sm mb-2">
              My interpretation of the sacred text
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">
              Patanjali Yoga Sutras
            </h1>

            <p className="mt-3 text-sm tracking-wider">
              CHAPTER {chapter.link} — {chapter.title}
            </p>

          </div>
        </div>

      </section>

      {/* CONTENT */}
      <section className="bg-white py-14">

        <div
          className="geeta-content max-w-4xl mx-auto px-6"
          dangerouslySetInnerHTML={{ __html: chapter.content }}
        />

      </section>
    </>
  );
}
