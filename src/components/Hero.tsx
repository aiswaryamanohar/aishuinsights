import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, ChevronDown, Download, Phone } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "+", label: "Industries" },
  { value: 15, suffix: "+", label: "Enterprise Projects" },
];

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden px-4">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow delay-500" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="animate-fade-in mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs sm:text-sm font-mono shimmer">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to opportunities
            </span>
          </div>
          
          {/* Name */}
          <h1 className="animate-slide-up font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="text-foreground">Aiswarya</span>
            <span className="text-gradient"> Manoharan</span>
          </h1>
          
          {/* Title */}
          <p className="animate-slide-up delay-100 font-display text-lg sm:text-xl md:text-2xl text-primary mb-3 sm:mb-4">
            Senior Data Engineer
          </p>
          
          {/* Subtitle */}
          <p className="animate-slide-up delay-200 text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-4 sm:mb-6 font-body leading-relaxed">
            Specializing in enterprise data platforms, governance, and analytics strategy across global enterprises. 10 years of experience in
            <span className="text-foreground font-medium"> Azure</span>, 
            <span className="text-foreground font-medium"> Databricks</span>, 
            <span className="text-foreground font-medium"> Lakehouse Architecture</span> &
            <span className="text-foreground font-medium"> Data Governance</span>.
          </p>
          
          {/* Industry tags */}
          <p className="animate-slide-up delay-250 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
            <span className="font-medium text-foreground/80">Industries:</span> FMCG • Banking • Oil & Gas • EPC
          </p>
          
          {/* Location */}
          <div className="animate-slide-up delay-300 flex items-center justify-center gap-2 text-muted-foreground mb-6 sm:mb-8">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm sm:text-base">Dubai, UAE</span>
          </div>
          
          {/* Stats */}
          <div className="animate-slide-up delay-350 flex justify-center gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="animate-slide-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            <Button variant="hero" size="lg" className="group w-full sm:w-auto" asChild>
              <a href="/Aiswarya_Manoharan_Resume.pdf" download>
                <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
                <span className="hidden sm:inline">Download Resume</span>
                <span className="sm:hidden">Resume</span>
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="mailto:aishuinsights@gmail.com">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Get in Touch</span>
                <span className="sm:hidden">Email</span>
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="tel:+971509461995">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Call Me</span>
                <span className="sm:hidden">Call</span>
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="https://linkedin.com/in/aishu-mano" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
    </section>
  );
};

export default Hero;
