import MediaCard from "./MediaCard";
import { mediaData } from "./mediaData";

export default function MediaGrid() {
  return (
    <div className=" pt-24 min-h-screen px-6 md:px-20 py-12 max-w-6xl mx-auto leading-relaxed text-gray-800">
      <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-8 text-left tracking-wide">
        Media
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mediaData.map((item, index) => (
          <MediaCard key={index} item={item} />
        ))}
      </div>
    </div>
    </div>
  );
}
