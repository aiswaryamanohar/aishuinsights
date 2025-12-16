import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import IndustryExperience from "@/components/IndustryExperience";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ArchitectureDiagrams from "@/components/ArchitectureDiagrams";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <IndustryExperience />
        <Experience />
        <Projects />
        <ArchitectureDiagrams />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
