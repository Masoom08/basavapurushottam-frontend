export default function ReaderResponse() {
  return (
    <section className="relative bg-[#d7a48f] py-6 px-6"> {/* bg-[#f7b190] */}
      {/* LEFT SOCIAL ICON BAR */}
      <div className="hidden md:flex flex-col absolute left-0 top-1/2 -translate-y-1/2">
        <a className="bg-[#3b5998] text-white w-12 h-12 flex items-center justify-center">f</a>
        <a className="bg-[#1da1f2] text-white w-12 h-12 flex items-center justify-center">t</a>
        <a className="bg-[#0077b5] text-white w-12 h-12 flex items-center justify-center">in</a>
        <a className="bg-[#ff5a5f] text-white w-12 h-12 flex items-center justify-center">♥</a>
      </div>

      <div className="max-w-5xl mx-auto">

        {/* HEADING */}
        <h2 className="text-center font-serif text-xl md:text-2xl text-[#1f2d3d] mb-14">
          Reader Response: Use the form below to share observations, corrections,
          or relevant insights related to this article.
        </h2>

        {/* FORM */}
        <form className="space-y-10">

          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <input
              type="text"
              placeholder="Name"
             className="bg-[#f2f2f2] font-serif px-6 py-4 rounded-xl shadow-md focus:outline-none max-w-sm w-full mx-auto"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-[#f2f2f2] font-serif px-6 py-4 rounded-xl shadow-md focus:outline-none max-w-sm w-full mx-auto"

            />
          </div>

          {/* MESSAGE */}
          <textarea
            rows="7"
            placeholder="Message"
            className="bg-[#f2f2f2] font-serif px-6 py-4 rounded-xl shadow-md focus:outline-none resize-none max-w-4xl w-full mx-auto block"

          />

          {/* SUBMIT */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#b7d2db] text-[#1f2d3d] font-serif px-8 py-3 rounded-2xl shadow-lg flex items-center gap-2"
            >
              Submit
              <span className="text-lg">↗</span>
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
