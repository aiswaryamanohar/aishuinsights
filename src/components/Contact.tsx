import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, GraduationCap, Languages } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCard, StaggerContainer, StaggerItem, AnimatedSection } from "@/components/ui/motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            title="Let's Connect" 
            subtitle="Open to discussing new opportunities in Data Engineering, Architecture, and Governance roles."
          />
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Contact Links */}
            <StaggerItem>
              <AnimatedCard className="bg-gradient-card rounded-2xl p-6 card-shadow border border-border h-full">
                <a 
                  href="mailto:aysswarya137@gmail.com"
                  className="flex flex-col items-center text-center gap-3 group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="text-foreground font-medium text-sm">aysswarya137@gmail.com</p>
                  </div>
                </a>
              </AnimatedCard>
            </StaggerItem>
            
            <StaggerItem>
              <AnimatedCard className="bg-gradient-card rounded-2xl p-6 card-shadow border border-border h-full">
                <a 
                  href="https://linkedin.com/in/aishu-mano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center gap-3 group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                    <p className="text-foreground font-medium text-sm">aishu-mano</p>
                  </div>
                </a>
              </AnimatedCard>
            </StaggerItem>
            
            <StaggerItem>
              <AnimatedCard className="bg-gradient-card rounded-2xl p-6 card-shadow border border-border h-full">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="text-foreground font-medium text-sm">Dubai, UAE</p>
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>
          
          {/* Education & Languages */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <StaggerItem>
              <AnimatedCard className="bg-gradient-card rounded-2xl p-6 card-shadow border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">Education</h3>
                </div>
                <p className="text-foreground font-medium">B.Tech in Information Technology</p>
                <p className="text-muted-foreground text-sm">Anna University, Chennai • 2015</p>
              </AnimatedCard>
            </StaggerItem>
            
            <StaggerItem>
              <AnimatedCard className="bg-gradient-card rounded-2xl p-6 card-shadow border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Languages className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["English", "Tamil", "Malayalam"].map((lang) => (
                    <span 
                      key={lang}
                      className="px-3 py-1.5 rounded-lg bg-secondary text-foreground font-medium text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>
          
          {/* CTA */}
          <AnimatedSection delay={0.3} className="text-center mt-12">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:aysswarya137@gmail.com">
                <Mail className="w-5 h-5" />
                Start a Conversation
              </a>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;