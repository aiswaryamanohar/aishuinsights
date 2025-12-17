import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, GraduationCap, Languages } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 bg-card relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 reveal ${headerVisible ? 'visible' : ''}`}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Let's Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Open to discussing new opportunities in Data Engineering, Architecture, and Governance roles.
            </p>
          </div>
          
          <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className={`bg-gradient-card rounded-2xl p-8 card-shadow border border-border gradient-border reveal ${contentVisible ? 'visible' : ''}`}>
              <h3 className="font-display text-xl font-bold text-foreground mb-6">Contact Info</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:aysswarya137@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 group card-lift"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">aysswarya137@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://linkedin.com/in/aishu-mano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 group card-lift"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="text-foreground font-medium">linkedin.com/in/aishu-mano</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Dubai, UAE</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="space-y-6">
              {/* Education */}
              <div className={`bg-gradient-card rounded-2xl p-8 card-shadow border border-border gradient-border reveal stagger-1 ${contentVisible ? 'visible' : ''}`}>
                <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Education
                </h3>
                <p className="text-foreground font-medium">Bachelor of Technology (IT)</p>
                <p className="text-muted-foreground">Anna University, Chennai, India</p>
                <p className="text-primary text-sm font-mono mt-2">2015 | 74%</p>
              </div>
              
              {/* Languages */}
              <div className={`bg-gradient-card rounded-2xl p-8 card-shadow border border-border gradient-border reveal stagger-2 ${contentVisible ? 'visible' : ''}`}>
                <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Languages className="w-5 h-5 text-primary" />
                  Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["English", "Tamil", "Malayalam"].map((lang) => (
                    <span 
                      key={lang}
                      className="px-4 py-2 rounded-lg bg-secondary text-foreground font-medium text-sm hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className={`text-center mt-12 reveal stagger-3 ${contentVisible ? 'visible' : ''}`}>
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="mailto:aysswarya137@gmail.com">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Start a Conversation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
