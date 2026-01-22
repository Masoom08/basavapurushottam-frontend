export default function BlogContent({ blog }) {
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div
        className="blog-content font-serif text-[17px]"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
