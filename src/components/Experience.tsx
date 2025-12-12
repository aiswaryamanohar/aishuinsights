import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Data Specialist",
    company: "Petrofac",
    location: "UAE",
    period: "May 2022 – Present",
    highlights: [
      "Key contributor to Lakehouse Migration, moving legacy pipelines into modern Azure + Databricks architecture",
      "Designed scalable ingestion, transformation, and curation pipelines using Spark and Delta Lake",
      "Built modular frameworks for ingestion, schema management, orchestration, and quality checks",
      "Implemented governance: data quality rules, lineage tracking, metadata standards, naming conventions",
      "Delivered curated Gold layer datasets for HR, Finance, and Operations, enabling enterprise reporting"
    ]
  },
  {
    title: "Analytics & Insights Lead",
    company: "Procter & Gamble",
    location: "Dubai, UAE",
    period: "Feb 2020 – May 2022",
    highlights: [
      "Delivered 'Size of Prize' dashboards for strategic business decision-making",
      "Built real-time distributor analytics, KPIs, and governance frameworks",
      "Proposed data-driven use cases improving organizational growth and data maturity"
    ]
  },
  {
    title: "Data Lead",
    company: "Ernst & Young",
    location: "Oman",
    period: "Jul 2019 – Dec 2019",
    highlights: [
      "Built CFO dashboards integrating financial, HR, and operational metrics for CXOs",
      "Developed unit-level and service-line reporting to support executive decision-making"
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Infosys",
    location: "Chennai",
    period: "Oct 2018 – Jun 2019",
    highlights: [
      "Built 'Your Data, Your Decisions' portal consolidating multi-domain metrics",
      "Developed governance models and metadata standards for Hadoop ecosystem",
      "Created Big Data pipelines using Hive, Sqoop, Spark, and HDFS"
    ]
  },
  {
    title: "Software Engineer",
    company: "Virtusa Polaris",
    location: "Chennai",
    period: "Aug 2016 – Oct 2018",
    highlights: [
      "Developed Cash Analysis & Projection dashboards for treasury operations (BMO Canada)",
      "Built SSIS/SSAS pipelines, SQL procedures, and Power BI reporting layers"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-card relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-0 md:mr-auto md:w-1/2' : 'md:pl-8 md:text-left md:mr-0 md:ml-auto md:w-1/2'
                } pl-8 md:pl-0`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-0 w-4 h-4 rounded-full bg-primary glow left-0 md:left-auto ${
                  index % 2 === 0 ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'
                } -translate-x-1/2`} />
                
                {/* Content card */}
                <div className="bg-gradient-card rounded-xl p-6 card-shadow border border-border hover:border-primary/30 transition-all duration-300 group">
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                    <Briefcase className="w-4 h-4 text-primary" />
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {exp.title}
                    </h3>
                  </div>
                  
                  <h4 className="text-primary font-semibold mb-2">{exp.company}</h4>
                  
                  <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-sm text-muted-foreground leading-relaxed">
                        <span className="text-primary">→</span> {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
