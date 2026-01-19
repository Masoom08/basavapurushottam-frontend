import Hero from "../components/Home/hero.jsx";
import Highlights from "../components/Home/highlights.jsx";
import Recommendations from "../components/Home/recommendations.jsx";
import SwipeCardsSection from "../components/Home/SwipeCardsSection.jsx";
import Newsletter from "../components/Home/newsletter.jsx";

export default function Home() {
  return (
    <div>
      <Hero />
      <Highlights />
      <Recommendations />
      <SwipeCardsSection />
      <Newsletter />
    </div>
    
  );
}
