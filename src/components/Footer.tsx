import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* CTA section */}
          <div className="text-center mb-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Interested in working together?
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" size="default" asChild>
                <a href="/Aiswarya_Manoharan_Resume.pdf" download>
                  <Download className="w-4 h-4" />
                  Download Resume (PDF)
                </a>
              </Button>
              <Button variant="outline" size="default" asChild>
                <a href="mailto:aysswarya137@gmail.com">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" size="default" asChild>
                <a href="https://linkedin.com/in/aishu-mano" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center pt-6 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} <span className="text-gradient font-semibold">Aiswarya Manoharan</span>. Built with passion for data.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
