import Hero from '../components/Philosophy/hero';
import PhilosophyCard from "../components/Philosophy/PhilosophyCard";

export default function Philosophy() {
  const bgUrl = "https://basavapurushottam.com/wp-content/uploads/2025/12/bn3.jpg";
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center py-24 relative font-[Times_New_Roman]"
      style={{ backgroundImage: `url('${bgUrl}')` }}
    >
      <div className = "relative z-10 max-w-6xl mx-auto px-6 flex flex-col gap-12">
        
        <Hero />
        <PhilosophyCard />
      </div>
    </section>
  );
}
