import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SkillsAndCP from "@/components/SkillsAndCP";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-8">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Experience />
      <Projects />
      <SkillsAndCP />
      <Contact />
      <Footer />
    </main>
  );
}
