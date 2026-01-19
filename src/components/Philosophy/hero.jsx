import philosophyHero from "../../assets/philosophy.png";

export default function Hero() {
  return (
    <div>
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-10">

        {/* HEADING INSIDE CARD */}
        <h1
          className="
            font-serif
            text-3xl md:text-4xl
            font-semibold
            text-[#1f2d3d]
            mb-6
            text-center
          "
        >
          Random Thoughts About Philosophy
        </h1>

        {/* CONTENT */}
        <div className="flex flex-col md:flex-row gap-8">

          {/* Left Image */}
          <div className="md:w-1/3 w-full flex-shrink-0">
            <img
              src={philosophyHero}
              alt="Philosophy"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Right Text */}
          <div className="md:w-2/3 w-full text-black flex flex-col justify-start font-serif">
            <p className="text-[17px] leading-relaxed">
              This space is my sanctuary for exploring the profound wisdom of thinkers who have shaped my understanding of existence. Through these pages, I delve into the timeless teachings of Lord Shri Krishna, whose Bhagavad Gita illuminates the path of dharma and detachment. I examine René Girard’s mimetic theory and its revelations about human desire and violence. Arthur Schopenhauer’s pessimism and emphasis on compassion resonate deeply, while Albert Camus teaches me to embrace life’s absurdity with defiant joy.
            </p>

            <p className="mt-4 text-[17px] leading-relaxed">
              Søren Kierkegaard’s leap of faith and authentic existence challenge my notions of certainty. Buddhist philosophy offers liberation through understanding suffering and impermanence. Osho’s provocative insights strip away societal conditioning, while Mahaveer’s principle of non-violence extends compassion to all living beings. Friedrich Nietzsche’s call to transcend conventional morality and embrace the will to power inspires me to question inherited values and create my own meaning.
            </p>

            <p className="mt-4 text-[17px] leading-relaxed">
              Each philosopher contributes a unique thread to the tapestry of my worldview—one that seeks meaning in paradox, finds peace in acceptance, and discovers freedom in surrender.
            </p>

            <p className="mt-5 text-red-600 text-sm font-semibold">
              Disclaimer: Content will be AI generated but thoughts and prompts are mine.
              Please feel free to leave if you do not want to read AI generated content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
