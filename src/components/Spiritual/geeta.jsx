import React from "react";
import { useNavigate } from "react-router-dom";

export default function Spiritual() {
  const bgUrl =
    "https://basavapurushottam.com/wp-content/uploads/2024/07/wwback-scaled.jpg";

  const imgUrl =
    "https://basavapurushottam.com/wp-content/uploads/2024/07/kr3.jpg";

  const navigate = useNavigate();

  const chapters = [
    { title: "Chapter 1: Vishada Yoga", link: "1", img: "https://basavapurushottam.com/wp-content/uploads/2024/07/TT3.jpg" },
    { title: "Chapter 2 – Sankhya Yoga", link: "2", img: "https://basavapurushottam.com/wp-content/uploads/2024/07/TT1.jpg" },
    { title: "Chapter 3 – Karma Yoga", link: "3", img: "https://basavapurushottam.com/wp-content/uploads/2024/07/TT15.jpg" },
    { title: "Chapter 4 – Jnana Yoga", link: "4", img: "https://basavapurushottam.com/wp-content/uploads/2024/07/TT8.jpg" },
    { title: "Chapter 5 – Karma Vairagya Yoga", link: "5", img: "https://basavapurushottam.com/wp-content/uploads/2024/07/TT2.jpg" },
    { title: "Chapter 6 – Abhyasa Yoga", link: "6", img: "https://basavapurushottam.com/wp-content/uploads/2024/07/TT7.jpg" },
    { title: "Chapter 7 – Paramahamsa Vijnana Yoga", link: "7", img: "https://basavapurushottam.com/wp-content/uploads/2024/07/TT10.jpg" },
    { title: "Chapter 8 – Akshara-Parabrahman Yoga", link: "8", img: "https://basavapurushottam.com/wp-content/uploads/2024/07/TT10.jpg" },
    { title: "Chapter 9 – Raja-Vidya-Guhya Yoga", link: "9", img: "https://basavapurushottam.com/wp-content/uploads/2024/07/TT4.jpg" },
    { title: "Chapter 10 – Vibhuti-Vistara Yoga", link: "10", img: "https://basavapurushottam.com/wp-content/uploads/2024/07/TT9.jpg" },
    { title: "Chapter 11 – Vishwaroopa-Darshana Yoga", link: "11", img: "https://basavapurushottam.com/wp-content/uploads/2024/07/TT6.jpg" },
    { title: "Chapter 12 – Bhakti Yoga", link: "12", img: "https://basavapurushottam.com/wp-content/uploads/2024/07/TT18.jpg" },
    { title: "Chapter 13 – Kshetra – Kshetrajna Vibhaga Yoga", link: "13", img: "https://basavapurushottam.com/wp-content/uploads/2024/07/TT5.jpg" },
    { title: "Chapter 14 – Gunatraya – Vibhaga Yoga", link: "14", img: "https://basavapurushottam.com/wp-content/uploads/2024/07/TT13.jpg" },
    { title: "Chapter 15 – Purushottama Yoga", link: "15", img: "https://basavapurushottam.com/wp-content/uploads/2024/07/TT14.jpg" },
    { title: "Chapter 16 – Daivasura – Sampad – Vibhaga Yoga", link: "16", img: "https://basavapurushottam.com/wp-content/uploads/2024/07/TT17.jpg" },
    { title: "Chapter 17 – Shraddhatraya – Vibhaga Yoga", link: "17", img: "https://basavapurushottam.com/wp-content/uploads/2024/07/TT8.jpg" },
    { title: "Chapter 18 – Moksha – Upadesha Yoga", link: "18", img: "https://basavapurushottam.com/wp-content/uploads/2024/07/TT2.jpg" },
  ];

  return (
    <section
      className="font-[Times_New_Roman] w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center py-24 relative"
      style={{ backgroundImage: `url('${bgUrl}')` }}
      aria-label="My Spiritual Journey hero"
    >
      {/* translucent overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

      {/* Main Heading */}
      <h1 className="relative z-10 text-5xl md:text-4xl font-bold text-white mb-10 text-center">
        Explore the Depths of Bhagwat Geeta
      </h1>

      {/* First card */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full mb-12">
        <div className="bg-[#f4dbcf] backdrop-blur-lg rounded-2xl p-6 md:p-10 lg:p-12 shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex-shrink-0 w-full md:w-1/3">
            <img
              src={imgUrl}
              alt="Bhagwat Geeta"
              className="w-full h-auto rounded-xl"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 text-center md:text-left">
              Bhagwat Geeta My Commentary
            </h2>

            <div className="prose prose-sm md:prose-base max-w-none text-gray-800">
              <p className="text-xl">
                Welcome to an in-depth exploration of the Bhagwat Geeta. This commentary delves into the profound teachings and timeless wisdom encapsulated in this sacred text. Join us as we unravel the spiritual and philosophical insights that have guided countless souls through the ages.
              </p>

              <p className="text-xl mt-4">
                Love, trust, and forgiveness are important in your search for meaning within relationships. Healthy spirituality gives a sense of peace, wholeness and balance among the physical, emotional, social and spiritual aspects of our lives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="bg-[#f4dbcf] backdrop-blur-lg rounded-2xl flex flex-col gap-6 ml-0 md:ml-6 p-6 md:p-10 lg:p-12 shadow-2xl">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Chapters of Bhagwat Geeta
            </h2>
            <p className="text-gray-800 text-lg md:text-xl">
              Dive into the Wisdom of Bhagwat Geeta
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {chapters.map((chapter) => (
              <div
                key={chapter.link}
                className="cursor-pointer text-center"
                onClick={() => navigate(`/spiritual/geeta/chapter/${chapter.link}`)}
              >
                <img
                  src={chapter.img}
                  alt={chapter.title}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className="text-gray-900 font-semibold mb-1">{chapter.title}</h3>
                <p className="text-gray-600  font-medium">Read Chapter {chapter.link}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
