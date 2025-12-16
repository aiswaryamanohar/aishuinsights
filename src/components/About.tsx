import { Badge } from "@/components/ui/badge";
import { Database, Cloud, BarChart3, Shield, Layers, Code } from "lucide-react";

const skillCategories = [
  {
    title: "Data Strategy & Governance",
    icon: Shield,
    skills: ["Data Governance", "Metadata Management", "Data Quality", "Lineage Tracking", "Compliance", "CDMP (In Progress)"]
  },
  {
    title: "Cloud & Lakehouse Platforms",
    icon: Cloud,
    skills: ["Azure", "Databricks", "ADLS", "ADF", "Delta Lake", "DBT"]
  },
  {
    title: "Analytics & BI",
    icon: BarChart3,
    skills: ["Power BI", "Tableau", "Executive Dashboards", "KPI Reporting"]
  },
  {
    title: "Big Data & Engineering",
    icon: Database,
    skills: ["Spark", "Hadoop", "Hive", "Kafka", "SSIS", "SSAS", "HDFS"]
  },
  {
    title: "Data Architecture",
    icon: Layers,
    skills: ["Lakehouse", "Star Schema", "Snowflake Schema", "Medallion Architecture", "CI/CD"]
  },
  {
    title: "Languages & Tools",
    icon: Code,
    skills: ["SQL", "Python", "Scala", "Trifacta", "Knime"]
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-hero relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
          </div>
          
          {/* Bio */}
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 card-shadow border border-border mb-16">
            <p className="text-foreground text-lg leading-relaxed mb-6">
              I am a <span className="text-primary font-semibold">Senior Data Engineer</span> with 10 years of experience specializing in <span className="text-primary font-semibold">Data Strategy</span>, <span className="text-primary font-semibold">Data Governance</span>, and <span className="text-primary font-semibold">Lakehouse Architecture</span>. I have delivered enterprise-scale data solutions across FMCG, Oil & Gas, Banking, and EPC sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Currently, I am a key contributor to <span className="text-foreground">Petrofac's Lakehouse Migration</span> initiative, transforming legacy data pipelines into modern, scalable Azure + Databricks architecture with robust governance frameworks. I am also preparing for the <span className="text-foreground">Certified Data Management Professional (CDMP)</span> certification.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My focus is on enabling organizations to make data-driven decisions by building reliable, governed data platforms — transforming raw data into trusted, actionable insights.
            </p>
          </div>
          
          {/* Skills Grid */}
          <h3 className="font-display text-2xl font-bold text-center mb-8 text-foreground">
            Skills & Expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="bg-gradient-card rounded-xl p-6 card-shadow border border-border hover:border-primary/30 hover:card-shadow-hover transition-all duration-300 group"
              >
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
