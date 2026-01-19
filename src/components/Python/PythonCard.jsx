import { Link } from "react-router-dom";
import { pythonData } from "./pythonData";

export default function PythonCard() {
  return (
    <div className="max-w-6xl mx-auto px-6 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {pythonData.map((item) => (
          <article
            key={item.id}
            className="
            bg-white
            rounded-xl
            px-8 py-7
            flex flex-col
            relative
            shadow-[0_10px_30px_rgba(0,0,0,0.08)]
            hover:shadow-[0_14px_40px_rgba(0,0,0,0.12)]
            transition-shadow
            duration-300
            "
          >
            <h3 className="font-serif text-[22px] text-[#1f2d3d] mb-2">
              {item.heading}
            </h3>

            <p className="font-serif text-[13px] italic text-[#c45d3c] mb-3">
              by {item.author} | {item.date}
            </p>

            <p className="font-serif text-[15px] text-[#2f2f2f] flex-grow">
              {item.description}
            </p>

            <Link
              to={`/python/${item.id}`}
              className="mt-3 font-serif text-[14px] underline underline-offset-4 text-[#1f2d3d]"
            >
              read more
            </Link>

            {/* Bottom strip */}
            <span className="absolute bottom-0 left-0 w-full h-[8px] bg-[#b7d2db] rounded-b-xl" />
          </article>
        ))}
      </div>
    </div>
  );
}
