import { useNavigate } from "react-router-dom";

export default function MediaCard({ item }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blogs/news/${item.id}`)}
      className="
        cursor-pointer
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-[0_10px_30px_rgba(0,0,0,0.12)]
        hover:shadow-[0_18px_45px_rgba(0,0,0,0.18)]
        hover:-translate-y-1
        transition-all duration-300
      "
    >
      {/* IMAGE WRAPPER */}
      <div className="bg-[#f4f4f4] p-3">
        <img
          src={item.image?.[0]}
          alt={item.heading}
          className="
            w-full h-48 object-cover
            bg-white
            rounded-md
            shadow-inner
            ring-1 ring-black/10
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-[#1f2d3d] leading-snug">
          {item.heading}
        </h3>

        <p className="text-sm italic text-[#d7a48f]">
          by {item.author} | {item.category}
        </p>
      </div>
    </div>
  );
}
