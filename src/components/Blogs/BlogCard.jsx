import { useNavigate } from "react-router-dom";
import { blogData } from "../Home/SwipeCardsSection";

function BlogCard({ section }) {
  const navigate = useNavigate();

  const data = blogData.find(s => {
    if (section === "personal") return s.title === "Personal";
    if (section === "news") return s.title === "News and Media";
    return false;
  });

  const blog = data.slides[0]; // only first card like original UI

  return (
    <CardWrapper>
      {/* IMAGE */}
      {blog.image && (
        <img
          src={blog.image[0]}
          className="rounded-xl mb-6 object-cover h-48 w-full"
        />
      )}

      {/* TITLE */}
      <h2 className="text-xl font-semibold text-center mb-2">
        {blog.heading}
      </h2>

      {/* META */}
      <p className="text-sm text-[#d7a48f] text-center mb-4">
        {blog.sub}
      </p>

      {/* DESC */}
      <p className="text-sm leading-relaxed text-gray-300 mb-6 text-center">
        {blog.desc}
      </p>

      {/* CTA */}
      <button
        onClick={() => navigate(`/blogs/${section}/${blog.id}`)}
        className="mx-auto bg-[#d7a48f] text-black px-6 py-2 rounded-full font-semibold"
      >
        Read More
      </button>
    </CardWrapper>
  );
}
