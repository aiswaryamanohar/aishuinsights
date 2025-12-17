import { Badge } from "@/components/ui/badge";
import { Layers, BarChart3, PieChart, Database, TrendingUp } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "Azure Lakehouse Migration",
    company: "Petrofac",
    icon: Layers,
    description: "Migrated legacy pipelines to modern Lakehouse architecture (Bronze → Silver → Gold). Designed modular pipelines for ingestion, transformation, quality checks, and metadata capture.",
    impact: "Improved platform scalability, reliability, and maintainability; reduced maintenance effort; strengthened enterprise Lakehouse roadmap.",
    tech: ["Azure", "Databricks", "Spark", "Delta Lake", "ADF", "DBT", "Kafka", "Event Hub"]
  },
  {
    title: "Size of Prize Analytics",
    company: "Procter & Gamble",
    icon: TrendingUp,
    description: "Built analytics dashboards assessing market potential and supporting strategic business decisions. Enabled real-time distributor analytics and governance framework implementation.",
    tech: ["SSAS", "Power BI", "Tableau", "Knime"]
  },
  {
    title: "CFO Dashboard",
    company: "Vale Oman / Ernst & Young",
    icon: PieChart,
    description: "Unified multiple financial and HR metrics into executive dashboards. Improved access to key insights and financial performance visibility for C-level executives.",
    tech: ["SSIS", "SSAS", "Power BI"]
  },
  {
    title: "yDyD Analytics Platform",
    company: "Infosys",
    icon: Database,
    description: "Developed a unified portal consolidating Sales, Finance, HR data for enterprise insights. Implemented Big Data governance and metadata standards across the organization.",
    tech: ["Hadoop", "Hive", "Spark", "MS PDW", "Power BI"]
  },
  {
    title: "Cash Analysis & Projection",
    company: "Virtusa Polaris / BMO Canada",
    icon: BarChart3,
    description: "Automated daily cash and liquidity reporting for treasury operations. Delivered optimized SQL pipelines and dashboards for decision-making.",
    tech: ["SSIS", "SSAS", "SQL Server", "Power BI"]
  }
];

const Projects = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 bg-gradient-hero relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 reveal ${headerVisible ? 'visible' : ''}`}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
          </div>
          
          {/* Projects grid */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`bg-gradient-card rounded-2xl p-6 md:p-8 card-shadow border border-border hover:border-primary/30 hover:card-shadow-hover transition-all duration-300 group card-lift gradient-border reveal stagger-${Math.min(index + 1, 5)} ${gridVisible ? 'visible' : ''} ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shrink-0">
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
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4 shimmer">
                    <p className="text-sm">
                      <span className="text-primary font-semibold">Impact:</span>{" "}
                      <span className="text-muted-foreground">{project.impact}</span>
                    </p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="skill" className="hover:bg-primary/20 transition-colors cursor-default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
