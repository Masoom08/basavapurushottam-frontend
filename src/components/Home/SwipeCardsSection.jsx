import SwipeCard from "./swipeCards";
import { blogData } from "../Blogs/BlogData";

export default function SwipeCardsSection() {
  return (
    <section className="bg-[#232427] py-6 px-6">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {blogData.map((item, i) => (
          <SwipeCard 
          key={i} 
          title={item.title} 
          slides={item.slides} 
          />
        ))}
      </div>
    </section>

    // <section className="bg-[#232427] py-6 px-6">
    //   <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
    //     {data.map((item, i) => (
    //       <SwipeCard
    //         key={i}
    //         title={item.title}
    //         slides={item.slides}
    //       />
    //     ))}
    //   </div>
    // </section>
  
  );
}
