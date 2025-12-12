import { Badge } from "@/components/ui/badge";
import { Database, Cloud, BarChart3, Shield, Code, Workflow } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud & Big Data",
    icon: Cloud,
    skills: ["Azure", "Databricks", "ADLS", "ADF", "DBT", "Delta Lake", "Spark", "Kafka", "Event Hub"]
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: ["SSIS", "SSAS", "Hadoop", "Hive", "Sqoop", "HDFS", "Trifacta", "Knime"]
  },
  {
    title: "Languages",
    icon: Code,
    skills: ["SQL", "Scala", "Python"]
  },
  {
    title: "BI & Visualization",
    icon: BarChart3,
    skills: ["Power BI", "Tableau"]
  },
  {
    title: "Data Governance",
    icon: Shield,
    skills: ["MDM", "Metadata Management", "Data Quality", "Lineage Tracking", "Compliance"]
  },
  {
    title: "Architecture",
    icon: Workflow,
    skills: ["Star Schema", "Snowflake Schema", "Lakehouse", "CI/CD", "Data Modeling"]
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
              I am a <span className="text-primary font-semibold">Data Engineering Specialist</span> with 8+ years of experience delivering enterprise-scale solutions across FMCG, Oil & Gas, and Banking sectors. I specialize in building modern cloud data platforms, implementing enterprise data governance frameworks, and driving data strategy initiatives.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Currently, I am part of <span className="text-foreground">Petrofac's Lakehouse Migration</span> initiative, transforming legacy pipelines into modern, scalable Azure + Databricks Lakehouse architecture. I am preparing for the <span className="text-foreground">Certified Data Management Professional (CDMP)</span> certification to strengthen my expertise in enterprise data governance and management.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about enabling organizations to make data-driven decisions by building reliable data platforms from the ground up — transforming raw data into valuable insights.
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
                style={{ animationDelay: `${index * 100}ms` }}
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
