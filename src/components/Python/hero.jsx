const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-14 items-start">

        
        <div className="md:col-span-2 flex justify-center md:justify-start">
          <div className="bg-white p-2 rounded-[2.75rem] shadow-xl">
          <img
            src="https://basavapurushottam.com/wp-content/uploads/2025/12/fcd1be17-026a-472f-acf1-b3bed4e67e32.png"
            alt="Learn Python"
            className="w-[360px] object-cover rounded-[2.5rem]"
          />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-3 font-serif text-[#1f2d3d]">
          <h1 className="text-4xl font-bold mb-6">
            Learn Python with me
          </h1>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Welcome to <strong>Learn Python with Me</strong>—a space where I’m
              starting as a complete beginner and inviting you to learn right
              alongside me. My motivation is simple: Python is the doorway to
              Artificial Intelligence, and this is where the journey begins.
            </p>

            <p>
              As I take my first steps, I’ll share everything I learn—my
              struggles, small wins, experiments, and the resources that help
              me move forward. No assumptions, no shortcuts, and no pressure to
              already know anything.
            </p>

            <p>
              This page is built for anyone who feels overwhelmed at the start
              and wants a slow, clear, beginner-friendly path into programming.
            </p>

            <p>
              Think of this as a shared journey where we grow together, one
              concept at a time.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
