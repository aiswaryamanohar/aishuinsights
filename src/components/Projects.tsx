import { Badge } from "@/components/ui/badge";
import { Layers, BarChart3, PieChart, Database, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { StaggerContainer, StaggerItem, AnimatedCard } from "@/components/ui/motion";

const projects = [
  {
    title: "Azure Lakehouse Migration",
    company: "Petrofac",
    icon: Layers,
    description: "Modern Lakehouse architecture (Bronze → Silver → Gold) with modular pipelines for ingestion, transformation, and metadata capture.",
    impact: "Improved scalability, reduced maintenance, strengthened enterprise roadmap",
    tech: ["Azure", "Databricks", "Spark", "Delta Lake", "ADF", "DBT"]
  },
  {
    title: "Size of Prize Analytics",
    company: "Procter & Gamble",
    icon: TrendingUp,
    description: "Strategic analytics dashboards for market potential assessment and distributor performance.",
    tech: ["SSAS", "Power BI", "Tableau", "Knime"]
  },
  {
    title: "CFO Dashboard",
    company: "Ernst & Young",
    icon: PieChart,
    description: "Executive dashboards unifying financial, HR, and operational metrics for C-level visibility.",
    tech: ["SSIS", "SSAS", "Power BI"]
  },
  {
    title: "yDyD Analytics Platform",
    company: "Infosys",
    icon: Database,
    description: "Enterprise portal consolidating Sales, Finance, HR data with Big Data governance.",
    tech: ["Hadoop", "Hive", "Spark", "Power BI"]
  },
  {
    title: "Cash Analysis & Projection",
    company: "BMO Canada",
    icon: BarChart3,
    description: "Automated daily cash and liquidity reporting for treasury operations.",
    tech: ["SSIS", "SSAS", "SQL Server", "Power BI"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-hero relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Featured Projects" />
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <StaggerItem 
                key={index}
                className={index === 0 ? 'md:col-span-2' : ''}
              >
                <AnimatedCard className="bg-gradient-card rounded-2xl p-6 md:p-8 card-shadow border border-border hover:border-primary/30 transition-all duration-300 group h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                      <project.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-1">
                        {project.title}
                      </h3>
                      <p className="text-primary text-sm font-medium">{project.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {project.impact && (
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
                      <p className="text-sm">
                        <span className="text-primary font-semibold">Impact:</span>{" "}
                        <span className="text-muted-foreground">{project.impact}</span>
                      </p>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="skill">
                        {tech}
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

export default Projects;