import BlogMetaCard from "./BlogMetaCard";

export default function BlogMetaSection({ blog }) {
  return (
    <div className="max-w-5xl mx-auto mb-16">
      <BlogMetaCard blog={blog} />
    </div>
  );
}
