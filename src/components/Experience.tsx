import { Briefcase, MapPin, Calendar, Building2, Users } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const experiences = [
  {
    title: "Senior Data Specialist",
    company: "Petrofac",
    domain: "EPC, Oil & Gas",
    location: "UAE",
    period: "May 2022 – Present",
    reportingTo: "Technical Manager",
    context: "Enterprise-wide Lakehouse modernization initiative",
    highlights: [
      "Key contributor to Lakehouse Migration, modernizing legacy data pipelines into scalable Azure + Databricks architecture",
      "Designed and implemented ingestion, transformation, and curation pipelines using Spark and Delta Lake",
      "Built modular frameworks for data ingestion, schema management, orchestration, and quality validation",
      "Established governance standards: data quality rules, lineage tracking, metadata management, and naming conventions",
      "Delivered curated Gold layer datasets for HR, Finance, and Operations, enabling enterprise-wide reporting and analytics"
    ]
  },
  {
    title: "Analytics & Insights Lead",
    company: "Procter & Gamble",
    domain: "FMCG",
    location: "Dubai, UAE",
    period: "Feb 2020 – May 2022",
    reportingTo: "Director – Strategy & Insights",
    context: "Go-To-Market (GTM) and Size of Prize analytics",
    highlights: [
      "Delivered 'Size of Prize' dashboards enabling strategic market potential analysis for leadership",
      "Built real-time distributor analytics, KPIs, and governance frameworks to support GTM decisions",
      "Proposed and implemented data-driven use cases that improved organizational growth and data maturity"
    ]
  },
  {
    title: "Data Lead",
    company: "Ernst & Young (EY)",
    domain: "Manufacturing / Industrial Finance",
    client: "Vale Oman (Iron Pelletizing Company)",
    location: "Oman",
    period: "Jul 2019 – Dec 2019",
    reportingTo: "Client-side Head of Finance",
    context: "CFO dashboards and executive reporting",
    highlights: [
      "Built CFO dashboards integrating financial, HR, and operational metrics for executive decision-making",
      "Developed unit-level and service-line reporting to support strategic finance operations"
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Infosys",
    domain: "Finance & Enterprise Analytics",
    location: "Chennai",
    period: "Oct 2018 – Jun 2019",
    reportingTo: "Data Science Manager",
    context: "Integrated data platforms and enterprise reporting",
    highlights: [
      "Built 'Your Data, Your Decisions' portal consolidating multi-domain metrics for enterprise visibility",
      "Developed governance models and metadata standards for the Hadoop ecosystem",
      "Created Big Data pipelines using Hive, Sqoop, Spark, and HDFS for large-scale data processing"
    ]
  },
  {
    title: "Software Engineer",
    company: "Virtusa Polaris",
    domain: "Banking & Financial Services",
    client: "BMO (Bank of Montreal), Canada",
    location: "Chennai",
    period: "Aug 2016 – Oct 2018",
    reportingTo: "Technical Lead",
    context: "Cash analysis, liquidity reporting, treasury analytics",
    highlights: [
      "Developed Cash Analysis & Projection dashboards for treasury operations supporting financial planning",
      "Built SSIS/SSAS pipelines, SQL procedures, and Power BI reporting layers for regulatory compliance"
    ]
  }
];

const Experience = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-24 bg-card relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 reveal ${headerVisible ? 'visible' : ''}`}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Professional Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              10 years of experience delivering enterprise data solutions across Banking, FMCG, Manufacturing, and Oil & Gas sectors.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full mt-4" />
          </div>
          
          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative mb-10 last:mb-0 pl-8 md:pl-20 reveal stagger-${Math.min(index + 1, 5)} ${timelineVisible ? 'visible' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-0 w-4 h-4 rounded-full bg-primary glow -translate-x-1/2 transition-transform hover:scale-125" />
                
                {/* Content card */}
                <div className="bg-gradient-card rounded-xl p-6 card-shadow border border-border hover:border-primary/30 transition-all duration-300 card-lift gradient-border">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {exp.title}
                        </h3>
                      </div>
                      <h4 className="text-primary font-semibold">{exp.company}</h4>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  {/* Context info */}
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-4 pb-4 border-b border-border">
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-primary/70" />
                      <span className="text-muted-foreground">Domain:</span>
                      <span className="text-foreground">{exp.domain}</span>
                    </span>
                    {exp.client && (
                      <span className="flex items-center gap-1.5">
                        <span className="text-muted-foreground">Client:</span>
                        <span className="text-foreground">{exp.client}</span>
                      </span>
                    )}
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-primary/70" />
                      <span className="text-muted-foreground">Reported to:</span>
                      <span className="text-foreground">{exp.reportingTo}</span>
                    </span>
                  </div>
                  
                  {/* Project context */}
                  <p className="text-sm text-primary/80 font-medium mb-3">
                    Focus: {exp.context}
                  </p>
                  
                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-0.5">→</span>
                        <span>{highlight}</span>
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
