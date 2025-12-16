import React from "react";

export default function Philosophy() {
  const bgUrl = "https://basavapurushottam.com/wp-content/uploads/2025/12/bn3.jpg";
  const leftImgUrl = "https://basavapurushottam.com/wp-content/uploads/2025/12/po.png";

  const posts = [
    {
      title: "Amor Fati: Loving Your Fate",
      author: "BVRC Purushottam",
      date: "Dec 11, 2025",
      description:
        "“Amor fati” is Latin for 'love of fate.' Nietzsche's idea is simple but profound: don't just accept what happens to you—actively love it. Embrace everything in your life, including suffering and setbacks, as necessary parts of your story. The Core Idea Instead of...",
    },
    {
      title: "Philosophies of Arthur Schopenhauer, Friedrich Nietzsche, Victor Frankl",
      author: "BVRC Purushottam",
      date: "Dec 10, 2025",
      description:
        "1. SCHOPENHAUER: The Will to Live (Wille zum Leben) Core Concept : Will Blind, irrational cosmic force driving all existence Unconscious and purposeless striving Source of all suffering Key Characteristics Universal: One undivided Will manifesting in all things...",
    },
    {
      title: "René Girard’s Mimetic Desire: The Hidden Force Behind India’s Competitive Exam Culture",
      author: "BVRC Purushottam",
      date: "Dec 9, 2025",
      description:
        "René Girard's theory of mimetic desire reveals a profound truth about human motivation: we don't desire things independently, but rather imitate the desires of others whom we consider models. This phenomenon illuminates the intense competitive culture surrounding...",
    },
  ];

  return (
    <section
      className="w-full min-h-screen bg-cover bg-center py-24 relative font-[Times_New_Roman]"
      style={{ backgroundImage: `url('${bgUrl}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col gap-12">
        {/* Main Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex flex-col md:flex-row p-6 md:p-10 gap-6">
          {/* Left Image */}
          <div className="md:w-1/3 w-full flex-shrink-0">
            <img
              src={leftImgUrl}
              alt="Philosophy"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Right Text */}
          <div className="md:w-2/3 w-full text-black flex flex-col justify-start">
            <p className="text-lg md:text-base">
              This space is my sanctuary for exploring the profound wisdom of thinkers who have shaped my understanding of existence. Through these pages, I delve into the timeless teachings of Lord Shri Krishna, whose Bhagavad Gita illuminates the path of dharma and detachment. I examine René Girard’s mimetic theory and its revelations about human desire and violence. Arthur Schopenhauer’s pessimism and emphasis on compassion resonate deeply, while Albert Camus teaches me to embrace life’s absurdity with defiant joy.
            </p>

            <p className="mt-4 text-lg md:text-base">
              Søren Kierkegaard’s leap of faith and authentic existence challenge my notions of certainty. Buddhist philosophy offers liberation through understanding suffering and impermanence. Osho’s provocative insights strip away societal conditioning, while Mahaveer’s principle of non-violence extends compassion to all living beings. Friedrich Nietzsche’s call to transcend conventional morality and embrace the will to power inspires me to question inherited values and create my own meaning.
            </p>

            <p className="mt-4 text-lg md:text-base">
              Each philosopher contributes a unique thread to the tapestry of my worldview—one that seeks meaning in paradox, finds peace in acceptance, and discovers freedom in surrender. Here, I synthesize these diverse traditions, exploring how ancient wisdom and modern existentialism converge to address the eternal questions: How should we live? What gives life meaning? And how do we face suffering with grace? I will also write about other philosophers I encounter along this journey, those whose thoughts resonate with my evolving understanding and whose insights align with my worldview.
            </p>

            <p className="mt-4 text-red-600 font-semibold">
              Disclaimer : Content will be AI generated but thoughts and prompts are mine. Please feel free to leave if you do not want to read AI generated content.
            </p>
          </div>
        </div>

        {/* Posts Cards */}
        <div className="flex flex-col md:flex-row gap-6">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex-1">
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-1 text-sm">
                by {post.author} | {post.date}
              </p>
              <p className="text-gray-800 mt-2">{post.description}</p>
              <button className="mt-4 text-blue-600 font-semibold underline">
                read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
