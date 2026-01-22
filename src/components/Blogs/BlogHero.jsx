export default function BlogHero({ blog }) {
  return (
    <>
      <h1 className="max-w-5xl mx-auto text-4xl font-bold text-center mb-6">
        {blog.heading}
      </h1>

      <p className="max-w-5xl mx-auto text-center text-sm italic text-black mb-12">
        by {blog.author} | {blog.date}
      </p>
    </>
  );
}
