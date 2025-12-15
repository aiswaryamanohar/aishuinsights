import { Badge } from "@/components/ui/badge";
import { Database, Cloud, BarChart3, Shield, Code, Workflow } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedSection, AnimatedCard, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const skillCategories = [
  {
    title: "Cloud & Big Data",
    icon: Cloud,
    skills: ["Azure", "Databricks", "Delta Lake", "Spark", "Kafka", "ADF", "DBT"]
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: ["SSIS", "SSAS", "Hadoop", "Hive", "HDFS"]
  },
  {
    title: "Languages",
    icon: Code,
    skills: ["SQL", "Python", "Scala"]
  },
  {
    title: "BI & Visualization",
    icon: BarChart3,
    skills: ["Power BI", "Tableau"]
  },
  {
    title: "Data Governance",
    icon: Shield,
    skills: ["MDM", "Data Quality", "Lineage", "Metadata"]
  },
  {
    title: "Architecture",
    icon: Workflow,
    skills: ["Lakehouse", "Star Schema", "Data Modeling", "CI/CD"]
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-hero relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="About Me" />
          
          {/* Bio */}
          <AnimatedSection delay={0.1} className="bg-gradient-card rounded-2xl p-8 md:p-12 card-shadow border border-border mb-16">
            <p className="text-foreground text-lg leading-relaxed mb-6">
              I am a <span className="text-primary font-semibold">Data Engineering Specialist</span> with 8+ years of experience delivering enterprise-scale solutions across FMCG, Oil & Gas, and Banking sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently leading <span className="text-foreground">Petrofac's Lakehouse Migration</span>, transforming legacy pipelines into modern Azure + Databricks architecture. Passionate about enabling data-driven decisions through reliable platforms.
            </p>
          </AnimatedSection>
          
          {/* Skills Grid */}
          <AnimatedSection delay={0.2}>
            <h3 className="font-display text-2xl font-bold text-center mb-8 text-foreground">
              Technical Expertise
            </h3>
          </AnimatedSection>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <StaggerItem key={category.title}>
                <AnimatedCard className="bg-gradient-card rounded-xl p-6 card-shadow border border-border hover:border-primary/30 transition-all duration-300 group h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <category.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-display text-sm font-semibold text-foreground">
                      {category.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="skill">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default About;