export default function YogaHero() {
  return (
    <div className="pt-24 bg-gradient-to-b from-[#b7d2db] to-white px-6 md:px-20 mx-auto leading-relaxed text-gray-800">

      <div className="max-w-5xl mx-auto space-y-6 font-serif">

        {/* Title */}
        <h1 className="text-3xl font-bold mb-8 text-left tracking-wide">
          Patanjali Yoga Sutras
        </h1>

        <h2 className="text-lg md:text-xl text-gray-700 mb-10 font-medium">
          My interpretation of the sacred text
        </h2>

        {/* First card */}
        <div className="mb-12">
          <div className="bg-[#f4dbcf] backdrop-blur-lg rounded-2xl p-6 md:p-10 lg:p-12 shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-6">

            <div className="flex-1">
              <div className="prose prose-sm md:prose-base max-w-none text-gray-800">

                <p>
                Welcome to our exploration of the Patanjali Yoga Sutras, a timeless
                guide to the philosophy and practice of yoga. The Yoga Sutras,
                composed by the sage Patanjali, are a collection of 196 aphorisms
                that delve into the theory and application of yoga, aiming to
                achieve spiritual enlightenment and inner peace.
                </p>

                <p className="mt-4">
                In this interpretation, we journey through these profound
                teachings, offering a contemporary perspective that resonates with
                the modern seeker. Each sutra is not only a reflection of ancient
                wisdom but also a practical tool for personal growth and
                self-realization.
                </p>

              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
