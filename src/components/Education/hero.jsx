import EducationCard from "./EducationCard";
import { educationData } from "./educationData";

export default function Hero() {
  return (
    <div className="pt-24 bg-gradient-to-b from-[#b7d2db] to-[#d7a48f] min-h-screen px-6 md:px-20 py-12 mx-auto leading-relaxed text-gray-800">
      <div className="max-w-4xl mx-auto space-y-6 font-serif ">
        <h1 className="text-3xl font-bold mb-8 text-left tracking-wide">
            Education
        </h1>
        {educationData.map((item, index) => (
          <EducationCard key={index} {...item} />
        ))}
      </div>

    </div>
  );
}
