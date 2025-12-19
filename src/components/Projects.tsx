import { Badge } from "@/components/ui/badge";
import { Layers, BarChart3, PieChart, Database, TrendingUp, Truck, Users, ShoppingCart } from "lucide-react";
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
  },
  {
    title: "Supply Chain Control Tower",
    company: "Global Manufacturing",
    icon: Truck,
    description: "Developed comprehensive Power BI dashboard solution integrating Oracle ERP data for end-to-end supply chain visibility. Created real-time KPIs for inventory, procurement, logistics, and supplier performance monitoring.",
    impact: "30% improvement in supply chain visibility, 20% reduction in stockouts",
    tech: ["Power BI", "Oracle ERP", "Azure Data Factory", "SQL Server", "DAX"]
  },
  {
    title: "Customer 360 Analytics",
    company: "Retail Enterprise",
    icon: Users,
    description: "Built unified customer data platform consolidating CRM, POS, and web analytics data. Enabled personalized marketing campaigns and customer lifetime value predictions through advanced segmentation.",
    impact: "25% increase in customer retention, 40% improvement in campaign ROI",
    tech: ["Azure Synapse", "Power BI", "Python", "Azure ML", "Databricks"]
  },
  {
    title: "Revenue Forecasting Pipeline",
    company: "Financial Services",
    icon: ShoppingCart,
    description: "Designed automated data pipeline for real-time revenue forecasting and variance analysis. Integrated multiple sales channels and provided executives with predictive insights for strategic planning.",
    impact: "95% forecast accuracy, reduced reporting time from days to hours",
    tech: ["Azure Data Factory", "Databricks", "Power BI", "Python", "SQL Server"]
  }
];

const Projects = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 bg-gradient-hero relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div 
            ref={headerRef}
            className={`text-center mb-8 sm:mb-12 md:mb-16 reveal ${headerVisible ? 'visible' : ''}`}
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
          </div>
          
          {/* Projects grid */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`bg-gradient-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 card-shadow border border-border hover:border-primary/30 hover:card-shadow-hover transition-all duration-300 group card-lift gradient-border reveal stagger-${Math.min(index + 1, 5)} ${gridVisible ? 'visible' : ''} ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                    <project.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-primary text-xs sm:text-sm font-medium">{project.company}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  {project.description}
                </p>
                
                {project.impact && (
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 shimmer">
                    <p className="text-xs sm:text-sm">
                      <span className="text-primary font-semibold">Impact:</span>{" "}
                      <span className="text-muted-foreground">{project.impact}</span>
                    </p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="skill" className="hover:bg-primary/20 transition-colors cursor-default text-xs px-2 py-0.5 sm:px-2.5 sm:py-1">
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
