import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaRss,
} from "react-icons/fa";

export default function Hero() {
  return (
    <div >
     <footer className="bg-[#222] text-[#ffb7a8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">

          {/* Left: Copyright / name */}
          <div className="text-sm md:text-base">
            © Dr. B.V.R.C. Purushottam IAS
          </div>

          {/* Right: social icons */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              aria-label="facebook"
              className="p-2 rounded-full bg-[#222] hover:bg-[#2b2b2b] transition"
            >
              <FaFacebookF className="text-[#ffb7a8] text-xl" />
            </a>

            <a
              href="#"
              aria-label="x"
              className="p-2 rounded-full bg-[#222] hover:bg-[#2b2b2b] transition"
            >
              <FaTwitter className="text-[#ffb7a8] text-xl" />
            </a>

            <a
              href="#"
              aria-label="instagram"
              className="p-2 rounded-full bg-[#222] hover:bg-[#2b2b2b] transition"
            >
              <FaInstagram className="text-[#ffb7a8] text-xl" />
            </a>

            <a
              href="#"
              aria-label="rss"
              className="p-2 rounded-full bg-[#222] hover:bg-[#2b2b2b] transition"
            >
              <FaRss className="text-[#ffb7a8] text-xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
