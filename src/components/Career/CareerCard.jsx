export default function CareerCard({ item }) {

  // ✅ Normalize data safely
  const positions = item.positions
    ? item.positions
    : [
        {
          designation: item.designation,
          duration: item.duration,
          responsibilities: item.responsibilities || []
        }
      ];

  return (
    <div className="flex gap-6 bg-[#2f3136] rounded-2xl p-6 text-white">
      
      {/* Image */}
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={item.image}
          alt={item.organization}
          className="w-full h-full object-contain rounded-lg bg-white p-2"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-sky-200 mb-4">
          {item.organization}
        </h3>

        <div className="space-y-6">
          {positions.map((pos, idx) => (
            <div
              key={idx}
              className="border-l-2 border-sky-400 pl-4"
            >
              <h4 className="font-semibold text-white">
                {pos.designation}
              </h4>

              <p className="text-xs text-[#d7a48f] mb-2">
                {pos.duration}
              </p>

              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-200">
                {pos.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
