import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Newsletter() {
  return (
    <div className="w-full">

      {/* BLUE NEWSLETTER SECTION */}
      <div className="w-full bg-[#c4dce6] px-6 md:px-20 py-16">

        {/* Title */}
        <h2 className="text-4xl font-bold text-[#ffb7a8] mb-10">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT FORM */}
          <form className="flex flex-col gap-6">

            <div className="flex gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 rounded-xl bg-white shadow-md outline-none text-gray-700"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl bg-white shadow-md outline-none text-gray-700"
              />
            </div>

            <textarea
              placeholder="Message"
              rows={6}
              className="w-full p-4 rounded-xl bg-white shadow-md outline-none text-gray-700"
            />

            {/* Simple Math Captcha */}
            <div className="flex items-center gap-4 text-gray-700">
              <span className="text-lg font-medium">5 + 3 =</span>
              <input
                type="text"
                className="w-16 p-2 rounded-xl bg-white shadow-md outline-none"
              />
            </div>

            {/* Button */}
            <button className="bg-[#4a5568] text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-md w-fit hover:bg-[#2d3748] transition">
              Send Message
            </button>
          </form>

          {/* RIGHT TEXT */}
          <div className="text-gray-800 text-lg leading-relaxed">

            <p className="mb-8">
              I’m passionate about using data, analytics, and AI to fix today’s headaches —
              because tomorrow’s utopia won’t build itself! With stints in the Government of
              India and Government of Uttarakhand across five central ministries, I’m all in
              on smart public administration that actually makes citizens smile.
              I love mentoring the next gen of policy enthusiasts.
              Fancy a chat about the future? Drop me a line: basava.ias@gmail.com. Let’s connect!
            </p>

            <div className="flex flex-col gap-4 text-xl">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-gray-700" />
                <span>basava.ias@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-gray-700" />
                <span>+91 70421 20001</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* WAVE SECTION */}
      <div className=" bg-[#c4dce6] mt-0 -mb-1">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 L80,50 L160,40 L240,48 L320,35 L400,50 L480,35 L560,50 L640,40 L720,60 L800,55 L880,70 L960,64 L1040,80 L1120,75 L1200,85 L1280,78 L1360,100 L1440,80 L1440,120 L0,120 Z"
            fill="#ffb7a8"
            opacity="1"
          />

          <path
            d="M0,40 L80,32 L160,22 L240,30 L320,18 L400,32 L480,18 L560,28 L640,18 L720,40 L800,35 L880,50 L960,45 L1040,60 L1120,55 L1200,64 L1280,58 L1360,80 L1440,60 L1440,80 L0,80 Z"
            fill="#e0bfb7"
            opacity="0.85"
          />
        </svg>
      </div>

    </div>
  );
}
