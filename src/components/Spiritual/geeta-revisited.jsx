import React from "react";
import Revisited from "../../assets/Banner.jpg";

export default function GeetaRevisited() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden">
      
      <img
        src={Revisited}
        alt="revisited background"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Heading */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh]">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          The Geeta Revisited
        </h1>
      </div>

    </section>
  );
}