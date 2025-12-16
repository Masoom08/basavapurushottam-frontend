export default function MediaCard({ item }) {
  return (
    <div className="bg-[#2f3136] rounded-2xl overflow-hidden text-white shadow-lg hover:scale-[1.02] transition">
      
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-2 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-xs text-gray-400">
          {item.meta}
        </p>
      </div>
    </div>
  );
}
