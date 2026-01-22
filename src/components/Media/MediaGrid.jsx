import MediaCard from "./MediaCard";
import { blogData } from "../Blogs/BlogData";

export default function MediaGrid() {

  const mediaSection = blogData.find(
    section => section.title === "News and Media"
  );

  const mediaPosts = mediaSection?.slides || [];

  return (
    <div className="pt-24 bg-gradient-to-b from-[#b7d2db] to-[#d7a48f] min-h-screen px-6 md:px-20 py-12">
      <div className="max-w-6xl mx-auto font-serif">

        <h1 className="text-3xl font-bold mb-10 tracking-wide">
          Media
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mediaPosts.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
}

