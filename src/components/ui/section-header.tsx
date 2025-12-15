import { AnimatedSection } from "./motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <AnimatedSection className="text-center mb-16">
    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
      <span className="text-gradient">{title}</span>
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
    {subtitle && (
      <p className="text-muted-foreground text-lg max-w-xl mx-auto mt-6">
        {subtitle}
      </p>
    )}
  </AnimatedSection>
);