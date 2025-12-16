import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const bgUrl =
    "https://basavapurushottam.com/wp-content/uploads/2024/07/wwback-scaled.jpg";

    const navigate = useNavigate();

  return (
    <section
      className="font-[Times_New_Roman] w-full min-h-screen bg-cover bg-center flex items-center justify-center py-24 relative"
      style={{ backgroundImage: `url('${bgUrl}')` }}
      aria-label="My Spiritual Journey hero"
    >
      {/* translucent overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 md:p-10 lg:p-12 shadow-2xl">
          <h1 className="text-4xl md:text-3xl font-semibold text-gray-900 mb-4 text-center">
            My Spiritual Journey
          </h1>

          <div className="prose prose-sm md:prose-base max-w-none text-gray-800">
            <p className="text-xl">
              Every person has spirituality. Whatever moves or expresses your spirit or inner energy is part of your spirituality. In some senses your spirituality is expressed in every aspect of your personal and public life. It is just part of who you are – woven into and expressed through every thought, feeling, and action. The way we express our spirituality is shaped by our personal, family, and cultural experiences. Some people express their spirituality in a religious way. This usually includes religious language, beliefs and symbols.
            </p>

            <p className="text-xl mt-4">
              Love, trust, and forgiveness are important in your search for meaning within relationships. Healthy spirituality gives a sense of peace, wholeness and balance among the physical, emotional, social and spiritual aspects of our lives.
            </p>
          </div>

          {/* BUTTONS - same width */}
          <div className="flex flex-col gap-4 mt-10 items-center">
            <button 
            onClick={() => navigate("/spiritual/geeta")}
            className="w-64 px-6 py-3 rounded-xl font-medium text-gray-900 bg-gradient-to-r from-[#325876] via-[#D1C4E9] to-[#F8BBD0] shadow-md hover:opacity-90 transition">
              Geeta
            </button>

            <button className="w-64 px-6 py-3 rounded-xl font-medium text-gray-900 bg-gradient-to-r from-[#325876] via-[#D1C4E9] to-[#F8BBD0] shadow-md hover:opacity-90 transition">
              Patanjali Yog Sutras
            </button>

            <button className="w-64 px-6 py-3 rounded-xl font-medium text-gray-900 bg-gradient-to-r from-[#325876] via-[#D1C4E9] to-[#F8BBD0] shadow-md hover:opacity-90 transition">
              The Geeta Revisited
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
