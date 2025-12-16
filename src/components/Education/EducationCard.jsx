export default function EducationCard({ image, title, institute, grade }) {
  return (
    <div className="flex items-center gap-6 bg-[#2f3136] rounded-2xl p-6">
      
      {/* Left Image */}
      <div className="w-20 h-20 flex-shrink-0 bg-white rounded-xl flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 object-contain"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white leading-snug">
          {title}
        </h3>

        <p className="text-sm text-[#d7a48f] mt-1">
          {institute}
        </p>

        {grade && (
          <p className="text-sm text-sky-200 mt-2 font-medium">
            {grade}
          </p>
        )}
      </div>
    </div>
  );
}
