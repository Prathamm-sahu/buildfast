import AboutSection from "@/components/AboutSection";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5e6d3]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Events />
      <Gallery />
      <Newsletter />
      <Footer />
    </div>
  );
}
