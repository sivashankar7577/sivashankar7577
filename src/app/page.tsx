import Navbar from "../components/Navbar";
import HeroSection from "../components/sections/HeroSection";
import TechnologySection from "../components/sections/TechnologySection";
import VisionSection from "../components/sections/VisionSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TechnologySection />
      <VisionSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
