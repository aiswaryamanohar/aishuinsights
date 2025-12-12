import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow delay-500" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="animate-fade-in mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-mono">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to opportunities
            </span>
          </div>
          
          {/* Name */}
          <h1 className="animate-slide-up font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">Aishu</span>
            <span className="text-gradient"> Mano</span>
          </h1>
          
          {/* Title */}
          <p className="animate-slide-up delay-100 font-display text-xl md:text-2xl text-primary mb-4">
            Senior Data Engineer
          </p>
          
          {/* Subtitle */}
          <p className="animate-slide-up delay-200 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-6 font-body leading-relaxed">
            8+ years building enterprise-scale data platforms across 
            <span className="text-foreground"> Azure</span>, 
            <span className="text-foreground"> Databricks</span> & 
            <span className="text-foreground"> Modern Lakehouse</span> architectures
          </p>
          
          {/* Location */}
          <div className="animate-slide-up delay-300 flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Dubai, UAE</span>
          </div>
          
          {/* CTA Buttons */}
          <div className="animate-slide-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:aysswarya137@gmail.com">
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://linkedin.com/in/aishu-mano" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
