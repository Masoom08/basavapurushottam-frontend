const Hero = () => {
  return (
    <div >
        <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-14 items-start">

        {/* LEFT IMAGE */}
        <div className="md:col-span-2 flex justify-center md:justify-start">
            <div className="bg-white p-2 rounded-[2.75rem] shadow-xl">
          <img
            src="https://basavapurushottam.com/wp-content/uploads/2025/12/58afd779-211f-45fe-92df-1278162004e3-1280x853.png"
            alt="Learn AI"
            className="w-[360px] object-cover rounded-[2.5rem] "
          />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-3 font-serif text-[#1f2d3d]">
          <h1 className="text-4xl font-bold mb-6">
            Learn AI with me
          </h1>

          <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Welcome to <strong>Learn AI With Me</strong>—a space created for
                absolute beginners who want to enter the world of Artificial
                Intelligence but feel overwhelmed by where to start. I am
                beginning this journey myself, and I’m inviting you to learn
                alongside me, step by step, in the simplest and most relatable
                way possible.
              </p>

              <p>
                This is a <em>learn-while-you-teach</em> approach: as I understand
                new concepts, tools, and techniques, I will break them down into
                clear, beginner-friendly posts. No jargon, no assumptions, no
                prior knowledge required. Every blog comes from real learning—my
                notes, my struggles, my experiments, and my small victories.
              </p>

              <p>
                The goal is simple: to make AI easy, unintimidating, and
                accessible to anyone who is curious. If you’ve ever felt lost
                trying to understand AI, this page is built exactly for you.
              </p>

              <p>
                Join me as we build confidence, explore the foundations of
                Python, machine learning, data, and AI step by step, and grow
                together—one concept at a time.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Hero;
