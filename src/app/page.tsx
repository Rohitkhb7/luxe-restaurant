import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedDishes from "@/components/sections/FeaturedDishes";
import ChefsSpecials from "@/components/sections/ChefsSpecials";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Reservation from "@/components/sections/Reservation";
import Location from "@/components/sections/Location";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden selection:bg-gold/30 selection:text-gold">
      {/* Structural layout: Main Shell */}
      <Navbar />
      <main>
        <Hero />
        <FeaturedDishes />
        <ChefsSpecials />
        <About />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
