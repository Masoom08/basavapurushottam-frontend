import Footer from "../components/Footer.jsx";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { blogData } from "../components/Blogs/BlogData";
import { Link } from "react-router-dom";

export default function Blog() {
  const personalBlogs =
  blogData.find(section => section.title === "Personal")?.slides;
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
            
            {personalBlogs?.map((blog) => (
  <Link
    key={blog.id}
    to={`/blogs/personal/${blog.id}`}   // IMPORTANT for routing
  >
    <div
      className="bg-[#232427] border-2 border-[#b7d2db] rounded-2xl p-6 text-white
                hover:translate-y-[-6px] hover:shadow-2xl transition duration-300"
    >
      <h3 className="text-[#d7a48f] text-lg font-semibold leading-snug mb-2">
        {blog.heading}
      </h3>

      <p className="text-xs text-[#b7d2db] mb-4">
        {blog.date} | {blog.category}
      </p>

      <p className="text-sm leading-relaxed mb-6">
        {blog.desc?.slice(0, 120)}...
      </p>

      <span className="text-[#d7a48f] text-sm font-medium cursor-pointer hover:underline">
        read more →
      </span>
    </div>
  </Link>
))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
