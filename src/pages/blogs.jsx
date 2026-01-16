import Footer from "../components/Footer.jsx";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";


export default function Blog() {
  return (
    <div>
      <div className="pt-24 min-h-screen bg-gradient-to-b from-[#b7d2db] to-[#d7a48f] px-6 py-12">
        {/* Main Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Profile Card */}
          <div className="bg-white/40 rounded-[3rem] px-5 pt-5 pb-4 flex flex-col items-center shadow-lg self-start">
            <img
              src="https://basavapurushottam.com/wp-content/uploads/2024/04/cropped-bvv1.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white mb-3"
            />

            <h2 className="text-lg font-semibold tracking-wide mb-3">
              MY BLOG
            </h2>

            <div className="flex gap-4 justify-center">
              <a href="#" className="bg-white shadow-lg p-3 rounded-full">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="bg-white shadow-lg p-3 rounded-full">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="bg-white shadow-lg p-3 rounded-full">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>


          {/* Blog Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {[
              {
                title: "The Second Chapter: Of the Three Metamorphoses",
                date: "Dec 24, 2025 | Personal Blog",
                desc:
                  "After the Prologue, Friedrich Nietzsche's Thus Spoke Zarathustra transitions into the first of Zarathustra’s discourses...",
              },
              {
                title:
                  "Three Wills, Two Systems: When Philosophy Meets Cognitive Science",
                date: "Dec 16, 2025 | Personal Blog",
                desc:
                  "What drives human behavior? Three German philosophers offered distinct answers...",
              },
              {
                title:
                  "White Gold and Hard Choices: Policy Analysis for Uttarakhand’s Dairy Future",
                date: "Dec 14, 2025 | Personal Blog",
                desc:
                  "Stories Through Data week 7. Characters: Dr. Meera Rawat, Joint Director...",
              },
              {
                title: "Visualizing Correlation: A Practical Guide",
                date: "Dec 6, 2025 | Dairy, Stories through Data",
                desc:
                  "How two dairy officers discovered the power of good graphs...",
              },
            ].map((blog, index) => (
              <div
                key={index}
                className="bg-[#232427] border-2 border-[#b7d2db] rounded-2xl p-6 text-white
                          hover:translate-y-[-6px] hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-[#d7a48f] text-lg font-semibold leading-snug mb-2">
                  {blog.title}
                </h3>

                <p className="text-xs text-[#b7d2db] mb-4">
                  {blog.date}
                </p>

                <p className="text-sm leading-relaxed mb-6">
                  {blog.desc}
                </p>

                <span className="text-[#d7a48f] text-sm font-medium cursor-pointer hover:underline">
                  read more →
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
