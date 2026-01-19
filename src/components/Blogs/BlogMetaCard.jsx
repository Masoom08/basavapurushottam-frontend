export default function BlogMetaCard({ blog }) {
  return (
    <div className=" rounded-xl shadow-md p-6">
      {/* ICON / LOGO */}
      <div className="flex justify-center mb-6">
        <img
          src="https://basavapurushottam.com/wp-content/uploads/2025/12/css.png" // replace with your actual logo path
          alt="Blog logo"
          className="h-40 object-contain"
        />
      </div>

      {/* CATEGORY LINE */}
      <p className="text-center font-serif text-lg text-gray-700 mb-6">
        {blog.category} | The Office | Uncategorized | Uttarakhand Cooperative Development Project
      </p>

      {/* TAGS */}
      <div className="mt-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xl">🏷️</span>
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
