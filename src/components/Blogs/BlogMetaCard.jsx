export default function BlogMetaCard({ blog }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 rounded-xl shadow-md overflow-hidden max-w-3xl w-full mx-auto">

      {/* ICON / LOGO */}
      <div className="flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-gray-300">
        <img
          src="https://basavapurushottam.com/wp-content/uploads/2025/12/css.png" // replace with your actual logo path
          alt="Blog logo"
          className="h-28 mb-6 object-contain"
        />
        {/* CATEGORY LINE */}
        <p className="text-center font-serif text-lg text-gray-700 mb-6">
          {blog.category} 
        </p>
      </div>

      {/* RIGHT SECTION */}
      <div className="p-8 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🏷️</span>
          <span className="font-semibold uppercase">Tags</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag, i) => (
            <span key={i} className="text-blue-600 text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
