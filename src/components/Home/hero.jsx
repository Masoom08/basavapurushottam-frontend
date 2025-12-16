import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#b7d2db] to-[#d7a48f]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-16">
        
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src="https://basavapurushottam.com/wp-content/uploads/2025/12/sqq.jpg"   // replace with your image
            className="rounded-xl shadow-2xl w-full max-w-xl"
            alt="Mountain"
          />
        </div>

        {/* Right Side Quote */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-serif font-bold mb-6 text-gray-900">
            Dr. B.V.R.C Purushottam
          </h1>

          <p className="text-2xl italic text-gray-700 leading-relaxed">
            “If you want to find the secrets of the universe, think in terms of <br />
            <span className="text-3xl font-semibold">
              Energy, Frequency and Vibration”
            </span>
          </p>

          <p className="mt-4 text-lg text-gray-900 font-semibold">
            — Nikola Tesla
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a href="#" className="bg-white shadow-lg p-3 rounded-full"><FaFacebookF size={20} /></a>
            <a href="#" className="bg-white shadow-lg p-3 rounded-full"><FaTwitter size={20} /></a>
            <a href="#" className="bg-white shadow-lg p-3 rounded-full"><FaLinkedinIn size={20} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
