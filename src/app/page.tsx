import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5e6d3]">
      <Navbar />
      <HeroSection />
    </div>
  );
}
