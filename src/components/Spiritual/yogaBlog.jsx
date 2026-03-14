import Yoga from "./../../assets/yoga.png";
import { useNavigate } from "react-router-dom";

export default function YogaBlog() {

  const navigate = useNavigate();

  // add link/id (VERY IMPORTANT for routing)
  const chapters = [
    {
      link: 1,
      title: "Chapter 1 : Samadhi Pada",
      image: "https://basavapurushottam.com/wp-content/uploads/2024/07/P1.jpg",
    },
    {
      link: 2,
      title: "Chapter 2 : Sadhana Pada",
      image: "https://basavapurushottam.com/wp-content/uploads/2024/07/P2.jpg",
    },
    {
      link: 3,
      title: "Chapter 3 : Vibhooti Pada",
      image: "https://basavapurushottam.com/wp-content/uploads/2024/07/P3.jpg",
    },
    {
      link: 4,
      title: "Chapter 4 : Kaivalya Pada",
      image: "https://basavapurushottam.com/wp-content/uploads/2024/07/P4.jpg",
    },
  ];

  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden">

      {/* Background image */}
      <img
        src={Yoga}
        alt="yoga background"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Overlay content */}
      <div className="relative z-10 px-6 md:px-20 py-20">

        <div className="max-w-5xl mx-auto">

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {chapters.map((chapter) => (
              <div
                key={chapter.link}
                onClick={() => navigate(`/yoga/${chapter.link}`)}
                className="relative h-[320px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
              >

                {/* Card background image */}
                <img
                  src={chapter.image}
                  alt={chapter.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Text */}
                <div className="relative z-10 h-full flex items-end p-6">
                  <h3 className="text-white text-lg font-semibold">
                    {chapter.title}
                  </h3>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
