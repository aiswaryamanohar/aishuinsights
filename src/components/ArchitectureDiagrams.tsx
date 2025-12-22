import { useState } from "react";
import { Database, BarChart3, Building2 } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const diagrams = [
  {
    id: "lakehouse",
    title: "Azure Lakehouse Architecture",
    company: "Petrofac",
    icon: Database,
    description: "Medallion architecture pattern with Bronze → Silver → Gold data layers",
  },
  {
    id: "analytics",
    title: "Enterprise Analytics Platform",
    company: "Procter & Gamble",
    icon: BarChart3,
    description: "End-to-end analytics pipeline from data sources to business insights",
  },
  {
    id: "governance",
    title: "Data Governance Framework",
    company: "Cross-Industry",
    icon: Building2,
    description: "Enterprise data governance model with quality, lineage, and cataloging",
  },
];

// Mobile-friendly card-based diagram component
const MobileDiagramCard = ({ title, items, color }: { title: string; items: string[]; color: string }) => (
  <div className={`p-4 rounded-lg border-2 ${color}`}>
    <h4 className="font-semibold text-sm mb-2">{title}</h4>
    <ul className="text-xs text-muted-foreground space-y-1">
      {items.map((item, i) => (
        <li key={i}>• {item}</li>
      ))}
    </ul>
  </div>
);

const LakehouseDiagram = () => (
  <>
    {/* Mobile Version - Stacked Cards */}
    <div className="block md:hidden space-y-4">
      <h3 className="text-center font-semibold text-sm text-foreground mb-4">Azure Databricks Lakehouse Architecture</h3>
      
      <div className="grid grid-cols-2 gap-3">
        <MobileDiagramCard 
          title="Data Sources" 
          items={["SAP / ERP", "APIs / REST", "Files / SFTP", "Kafka Streams"]}
          color="border-border bg-secondary/50"
        />
        <MobileDiagramCard 
          title="Ingestion" 
          items={["ADF", "Event Hub", "Databricks", "Autoloader"]}
          color="border-primary bg-primary/10"
        />
      </div>
      
      <div className="flex justify-center">
        <span className="text-muted-foreground text-lg">↓</span>
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        <div className="p-3 rounded-lg border-2 border-amber-500/50 bg-amber-500/10 text-center">
          <h4 className="font-bold text-xs text-amber-600 dark:text-amber-400">BRONZE</h4>
          <p className="text-[10px] text-muted-foreground mt-1">Raw Data</p>
        </div>
        <div className="p-3 rounded-lg border-2 border-slate-400/50 bg-slate-400/10 text-center">
          <h4 className="font-bold text-xs text-slate-600 dark:text-slate-400">SILVER</h4>
          <p className="text-[10px] text-muted-foreground mt-1">Cleansed</p>
        </div>
        <div className="p-3 rounded-lg border-2 border-yellow-500/50 bg-yellow-500/10 text-center">
          <h4 className="font-bold text-xs text-yellow-600 dark:text-yellow-400">GOLD</h4>
          <p className="text-[10px] text-muted-foreground mt-1">Business-Ready</p>
        </div>
      </div>
      
      <div className="flex justify-center">
        <span className="text-muted-foreground text-lg">↓</span>
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        <div className="p-2 rounded border border-accent bg-accent/20 text-center">
          <span className="text-[10px] font-medium text-accent">Power BI</span>
        </div>
        <div className="p-2 rounded border border-accent bg-accent/20 text-center">
          <span className="text-[10px] font-medium text-accent">APIs</span>
        </div>
        <div className="p-2 rounded border border-accent bg-accent/20 text-center">
          <span className="text-[10px] font-medium text-accent">ML Models</span>
        </div>
      </div>
      
      <div className="p-3 rounded-lg bg-primary/5 border border-primary/30 text-center mt-4">
        <p className="text-xs text-primary font-medium">Data Governance Layer</p>
        <p className="text-[10px] text-muted-foreground">Unity Catalog • Quality Rules • Lineage • Access Control</p>
      </div>
    </div>

    {/* Desktop Version - SVG */}
    <div className="hidden md:block">
      <svg viewBox="0 0 800 400" className="w-full h-auto" style={{ minHeight: '300px' }}>
        {/* Background */}
        <rect width="800" height="400" fill="transparent" />
        
        {/* Data Sources */}
        <g>
          <rect x="20" y="40" width="100" height="50" rx="6" className="fill-secondary stroke-border" strokeWidth="1.5" />
          <text x="70" y="70" textAnchor="middle" className="fill-foreground text-xs font-medium">SAP / ERP</text>
        </g>
        <g>
          <rect x="20" y="110" width="100" height="50" rx="6" className="fill-secondary stroke-border" strokeWidth="1.5" />
          <text x="70" y="140" textAnchor="middle" className="fill-foreground text-xs font-medium">APIs / REST</text>
        </g>
        <g>
          <rect x="20" y="180" width="100" height="50" rx="6" className="fill-secondary stroke-border" strokeWidth="1.5" />
          <text x="70" y="210" textAnchor="middle" className="fill-foreground text-xs font-medium">Files / SFTP</text>
        </g>
        <g>
          <rect x="20" y="250" width="100" height="50" rx="6" className="fill-secondary stroke-border" strokeWidth="1.5" />
          <text x="70" y="280" textAnchor="middle" className="fill-foreground text-xs font-medium">Kafka Streams</text>
        </g>
        
        {/* Ingestion Layer */}
        <g>
          <rect x="170" y="120" width="90" height="120" rx="8" className="fill-primary/10 stroke-primary" strokeWidth="2" />
          <text x="215" y="150" textAnchor="middle" className="fill-primary text-xs font-semibold">Ingestion</text>
          <text x="215" y="170" textAnchor="middle" className="fill-muted-foreground text-[10px]">ADF</text>
          <text x="215" y="185" textAnchor="middle" className="fill-muted-foreground text-[10px]">Event Hub</text>
          <text x="215" y="200" textAnchor="middle" className="fill-muted-foreground text-[10px]">Databricks</text>
          <text x="215" y="215" textAnchor="middle" className="fill-muted-foreground text-[10px]">Autoloader</text>
        </g>
        
        {/* Bronze Layer */}
        <g>
          <rect x="300" y="100" width="110" height="160" rx="8" fill="hsl(30 60% 50% / 0.15)" stroke="hsl(30 60% 45%)" strokeWidth="2" />
          <text x="355" y="130" textAnchor="middle" className="text-xs font-bold" fill="hsl(30 60% 40%)">BRONZE</text>
          <text x="355" y="150" textAnchor="middle" className="fill-muted-foreground text-[10px]">Raw Data</text>
          <line x1="320" y1="165" x2="390" y2="165" stroke="hsl(30 60% 45% / 0.3)" strokeWidth="1" />
          <text x="355" y="185" textAnchor="middle" className="fill-muted-foreground text-[10px]">• Schema Detection</text>
          <text x="355" y="200" textAnchor="middle" className="fill-muted-foreground text-[10px]">• CDC Tracking</text>
          <text x="355" y="215" textAnchor="middle" className="fill-muted-foreground text-[10px]">• Delta Tables</text>
          <text x="355" y="230" textAnchor="middle" className="fill-muted-foreground text-[10px]">• Metadata Capture</text>
        </g>
        
        {/* Silver Layer */}
        <g>
          <rect x="450" y="100" width="110" height="160" rx="8" fill="hsl(200 30% 50% / 0.15)" stroke="hsl(200 30% 45%)" strokeWidth="2" />
          <text x="505" y="130" textAnchor="middle" className="text-xs font-bold" fill="hsl(200 30% 40%)">SILVER</text>
          <text x="505" y="150" textAnchor="middle" className="fill-muted-foreground text-[10px]">Cleansed Data</text>
          <line x1="470" y1="165" x2="540" y2="165" stroke="hsl(200 30% 45% / 0.3)" strokeWidth="1" />
          <text x="505" y="185" textAnchor="middle" className="fill-muted-foreground text-[10px]">• Data Quality</text>
          <text x="505" y="200" textAnchor="middle" className="fill-muted-foreground text-[10px]">• Transformations</text>
          <text x="505" y="215" textAnchor="middle" className="fill-muted-foreground text-[10px]">• DBT Models</text>
          <text x="505" y="230" textAnchor="middle" className="fill-muted-foreground text-[10px]">• Spark Processing</text>
        </g>
        
        {/* Gold Layer */}
        <g>
          <rect x="600" y="100" width="110" height="160" rx="8" fill="hsl(45 80% 50% / 0.15)" stroke="hsl(45 80% 40%)" strokeWidth="2" />
          <text x="655" y="130" textAnchor="middle" className="text-xs font-bold" fill="hsl(45 80% 35%)">GOLD</text>
          <text x="655" y="150" textAnchor="middle" className="fill-muted-foreground text-[10px]">Business-Ready</text>
          <line x1="620" y1="165" x2="690" y2="165" stroke="hsl(45 80% 40% / 0.3)" strokeWidth="1" />
          <text x="655" y="185" textAnchor="middle" className="fill-muted-foreground text-[10px]">• Aggregations</text>
          <text x="655" y="200" textAnchor="middle" className="fill-muted-foreground text-[10px]">• KPIs & Metrics</text>
          <text x="655" y="215" textAnchor="middle" className="fill-muted-foreground text-[10px]">• Curated Views</text>
          <text x="655" y="230" textAnchor="middle" className="fill-muted-foreground text-[10px]">• Analytics Ready</text>
        </g>
        
        {/* Consumers */}
        <g>
          <rect x="740" y="80" width="50" height="40" rx="4" className="fill-accent/20 stroke-accent" strokeWidth="1.5" />
          <text x="765" y="105" textAnchor="middle" className="fill-accent text-[9px] font-medium">Power BI</text>
        </g>
        <g>
          <rect x="740" y="140" width="50" height="40" rx="4" className="fill-accent/20 stroke-accent" strokeWidth="1.5" />
          <text x="765" y="165" textAnchor="middle" className="fill-accent text-[9px] font-medium">APIs</text>
        </g>
        <g>
          <rect x="740" y="200" width="50" height="40" rx="4" className="fill-accent/20 stroke-accent" strokeWidth="1.5" />
          <text x="765" y="225" textAnchor="middle" className="fill-accent text-[9px] font-medium">ML Models</text>
        </g>
        
        {/* Arrows */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" className="fill-muted-foreground/50" />
          </marker>
        </defs>
        
        {/* Connection arrows */}
        <line x1="120" y1="65" x2="165" y2="140" stroke="hsl(var(--muted-foreground) / 0.3)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        <line x1="120" y1="135" x2="165" y2="160" stroke="hsl(var(--muted-foreground) / 0.3)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        <line x1="120" y1="205" x2="165" y2="185" stroke="hsl(var(--muted-foreground) / 0.3)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        <line x1="120" y1="275" x2="165" y2="210" stroke="hsl(var(--muted-foreground) / 0.3)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        
        <line x1="260" y1="180" x2="295" y2="180" stroke="hsl(var(--muted-foreground) / 0.3)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        <line x1="410" y1="180" x2="445" y2="180" stroke="hsl(var(--muted-foreground) / 0.3)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        <line x1="560" y1="180" x2="595" y2="180" stroke="hsl(var(--muted-foreground) / 0.3)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        
        <line x1="710" y1="140" x2="735" y2="100" stroke="hsl(var(--muted-foreground) / 0.3)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        <line x1="710" y1="180" x2="735" y2="160" stroke="hsl(var(--muted-foreground) / 0.3)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        <line x1="710" y1="220" x2="735" y2="220" stroke="hsl(var(--muted-foreground) / 0.3)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        
        {/* Governance Layer */}
        <g>
          <rect x="300" y="300" width="410" height="50" rx="6" className="fill-primary/5 stroke-primary/30" strokeWidth="1.5" strokeDasharray="4 2" />
          <text x="505" y="325" textAnchor="middle" className="fill-primary text-xs font-medium">Data Governance Layer</text>
          <text x="505" y="340" textAnchor="middle" className="fill-muted-foreground text-[10px]">Unity Catalog • Data Quality Rules • Lineage Tracking • Access Control</text>
        </g>
        
        {/* Title */}
        <text x="400" y="20" textAnchor="middle" className="fill-foreground text-sm font-semibold">Azure Databricks Lakehouse Architecture</text>
      </svg>
    </div>
  </>
);

const AnalyticsDiagram = () => (
  <>
    {/* Mobile Version */}
    <div className="block md:hidden space-y-4">
      <h3 className="text-center font-semibold text-sm text-foreground mb-4">Enterprise Analytics Pipeline</h3>
      
      <MobileDiagramCard 
        title="Data Sources" 
        items={["Sales Systems", "Distributor Data", "Market Research", "External APIs"]}
        color="border-border bg-secondary/50"
      />
      
      <div className="flex justify-center">
        <span className="text-muted-foreground text-lg">↓</span>
      </div>
      
      <MobileDiagramCard 
        title="ETL Processing" 
        items={["SSIS", "Knime", "Python", "Trifacta"]}
        color="border-primary bg-primary/10"
      />
      
      <div className="flex justify-center">
        <span className="text-muted-foreground text-lg">↓</span>
      </div>
      
      <MobileDiagramCard 
        title="Data Warehouse" 
        items={["Fact Tables", "Dimensions", "SSAS Cubes"]}
        color="border-accent bg-accent/10"
      />
      
      <div className="flex justify-center">
        <span className="text-muted-foreground text-lg">↓</span>
      </div>
      
      <MobileDiagramCard 
        title="Semantic Layer" 
        items={["Measures", "Hierarchies", "Calculations", "Row-Level Security"]}
        color="border-purple-500/50 bg-purple-500/10"
      />
      
      <div className="flex justify-center">
        <span className="text-muted-foreground text-lg">↓</span>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <div className="p-3 rounded-lg border-2 border-green-500/50 bg-green-500/10 text-center">
          <span className="text-xs font-medium text-green-600 dark:text-green-400">Power BI</span>
        </div>
        <div className="p-3 rounded-lg border-2 border-green-500/50 bg-green-500/10 text-center">
          <span className="text-xs font-medium text-green-600 dark:text-green-400">Tableau</span>
        </div>
        <div className="p-3 rounded-lg border-2 border-green-500/50 bg-green-500/10 text-center">
          <span className="text-xs font-medium text-green-600 dark:text-green-400">Excel</span>
        </div>
        <div className="p-3 rounded-lg border-2 border-green-500/50 bg-green-500/10 text-center">
          <span className="text-xs font-medium text-green-600 dark:text-green-400">API Access</span>
        </div>
      </div>
      
      <div className="p-3 rounded-lg bg-primary/5 border border-primary/30 text-center mt-4">
        <p className="text-xs text-primary font-medium">Key Deliverables</p>
        <p className="text-[10px] text-muted-foreground">Size of Prize • Distributor KPIs • Market Analytics</p>
      </div>
    </div>

    {/* Desktop Version */}
    <div className="hidden md:block">
      <svg viewBox="0 0 800 350" className="w-full h-auto" style={{ minHeight: '280px' }}>
        {/* Title */}
        <text x="400" y="25" textAnchor="middle" className="fill-foreground text-sm font-semibold">Enterprise Analytics Pipeline</text>
        
        {/* Data Sources Layer */}
        <g>
          <rect x="30" y="60" width="140" height="230" rx="8" className="fill-secondary/50 stroke-border" strokeWidth="1.5" />
          <text x="100" y="85" textAnchor="middle" className="fill-foreground text-xs font-semibold">Data Sources</text>
          
          <rect x="45" y="100" width="110" height="35" rx="4" className="fill-card stroke-border" strokeWidth="1" />
          <text x="100" y="122" textAnchor="middle" className="fill-muted-foreground text-[10px]">Sales Systems</text>
          
          <rect x="45" y="145" width="110" height="35" rx="4" className="fill-card stroke-border" strokeWidth="1" />
          <text x="100" y="167" textAnchor="middle" className="fill-muted-foreground text-[10px]">Distributor Data</text>
          
          <rect x="45" y="190" width="110" height="35" rx="4" className="fill-card stroke-border" strokeWidth="1" />
          <text x="100" y="212" textAnchor="middle" className="fill-muted-foreground text-[10px]">Market Research</text>
          
          <rect x="45" y="235" width="110" height="35" rx="4" className="fill-card stroke-border" strokeWidth="1" />
          <text x="100" y="257" textAnchor="middle" className="fill-muted-foreground text-[10px]">External APIs</text>
        </g>
        
        {/* ETL Layer */}
        <g>
          <rect x="210" y="100" width="100" height="150" rx="8" className="fill-primary/10 stroke-primary" strokeWidth="2" />
          <text x="260" y="130" textAnchor="middle" className="fill-primary text-xs font-semibold">ETL</text>
          <text x="260" y="155" textAnchor="middle" className="fill-muted-foreground text-[10px]">SSIS</text>
          <text x="260" y="175" textAnchor="middle" className="fill-muted-foreground text-[10px]">Knime</text>
          <text x="260" y="195" textAnchor="middle" className="fill-muted-foreground text-[10px]">Python</text>
          <text x="260" y="215" textAnchor="middle" className="fill-muted-foreground text-[10px]">Trifacta</text>
        </g>
        
        {/* Data Warehouse */}
        <g>
          <rect x="350" y="80" width="120" height="190" rx="8" className="fill-accent/10 stroke-accent" strokeWidth="2" />
          <text x="410" y="110" textAnchor="middle" className="fill-accent text-xs font-semibold">Data Warehouse</text>
          
          <rect x="365" y="125" width="90" height="30" rx="4" className="fill-card stroke-border" strokeWidth="1" />
          <text x="410" y="145" textAnchor="middle" className="fill-muted-foreground text-[10px]">Fact Tables</text>
          
          <rect x="365" y="165" width="90" height="30" rx="4" className="fill-card stroke-border" strokeWidth="1" />
          <text x="410" y="185" textAnchor="middle" className="fill-muted-foreground text-[10px]">Dimensions</text>
          
          <rect x="365" y="205" width="90" height="30" rx="4" className="fill-card stroke-border" strokeWidth="1" />
          <text x="410" y="225" textAnchor="middle" className="fill-muted-foreground text-[10px]">SSAS Cubes</text>
        </g>
        
        {/* Semantic Layer */}
        <g>
          <rect x="510" y="100" width="100" height="150" rx="8" fill="hsl(270 50% 50% / 0.1)" stroke="hsl(270 50% 50%)" strokeWidth="2" />
          <text x="560" y="130" textAnchor="middle" className="text-xs font-semibold" fill="hsl(270 50% 45%)">Semantic</text>
          <text x="560" y="155" textAnchor="middle" className="fill-muted-foreground text-[10px]">Measures</text>
          <text x="560" y="175" textAnchor="middle" className="fill-muted-foreground text-[10px]">Hierarchies</text>
          <text x="560" y="195" textAnchor="middle" className="fill-muted-foreground text-[10px]">Calculations</text>
          <text x="560" y="215" textAnchor="middle" className="fill-muted-foreground text-[10px]">Row-Level Security</text>
        </g>
        
        {/* Visualization Layer */}
        <g>
          <rect x="650" y="60" width="120" height="230" rx="8" fill="hsl(145 50% 45% / 0.1)" stroke="hsl(145 50% 40%)" strokeWidth="2" />
          <text x="710" y="85" textAnchor="middle" className="text-xs font-semibold" fill="hsl(145 50% 35%)">Visualization</text>
          
          <rect x="665" y="100" width="90" height="40" rx="4" className="fill-card stroke-border" strokeWidth="1" />
          <text x="710" y="118" textAnchor="middle" className="fill-muted-foreground text-[10px]">Power BI</text>
          <text x="710" y="132" textAnchor="middle" className="fill-muted-foreground text-[9px]">Dashboards</text>
          
          <rect x="665" y="150" width="90" height="40" rx="4" className="fill-card stroke-border" strokeWidth="1" />
          <text x="710" y="168" textAnchor="middle" className="fill-muted-foreground text-[10px]">Tableau</text>
          <text x="710" y="182" textAnchor="middle" className="fill-muted-foreground text-[9px]">Analytics</text>
          
          <rect x="665" y="200" width="90" height="40" rx="4" className="fill-card stroke-border" strokeWidth="1" />
          <text x="710" y="218" textAnchor="middle" className="fill-muted-foreground text-[10px]">Excel</text>
          <text x="710" y="232" textAnchor="middle" className="fill-muted-foreground text-[9px]">Reports</text>
          
          <rect x="665" y="250" width="90" height="30" rx="4" className="fill-card stroke-border" strokeWidth="1" />
          <text x="710" y="270" textAnchor="middle" className="fill-muted-foreground text-[10px]">API Access</text>
        </g>
        
        {/* Arrows */}
        <defs>
          <marker id="arrow2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" className="fill-muted-foreground/50" />
          </marker>
        </defs>
        
        <line x1="170" y1="175" x2="205" y2="175" stroke="hsl(var(--muted-foreground) / 0.3)" strokeWidth="2" markerEnd="url(#arrow2)" />
        <line x1="310" y1="175" x2="345" y2="175" stroke="hsl(var(--muted-foreground) / 0.3)" strokeWidth="2" markerEnd="url(#arrow2)" />
        <line x1="470" y1="175" x2="505" y2="175" stroke="hsl(var(--muted-foreground) / 0.3)" strokeWidth="2" markerEnd="url(#arrow2)" />
        <line x1="610" y1="175" x2="645" y2="175" stroke="hsl(var(--muted-foreground) / 0.3)" strokeWidth="2" markerEnd="url(#arrow2)" />
        
        {/* Bottom KPIs */}
        <g>
          <rect x="350" y="300" width="270" height="40" rx="6" className="fill-primary/5 stroke-primary/30" strokeWidth="1.5" />
          <text x="485" y="325" textAnchor="middle" className="fill-primary text-xs font-medium">Key Deliverables: Size of Prize • Distributor KPIs • Market Analytics</text>
        </g>
      </svg>
    </div>
  </>
);

const GovernanceDiagram = () => (
  <>
    {/* Mobile Version */}
    <div className="block md:hidden space-y-4">
      <h3 className="text-center font-semibold text-sm text-foreground mb-4">Enterprise Data Governance Framework</h3>
      
      {/* Central Hub */}
      <div className="p-4 rounded-full border-2 border-primary bg-primary/10 text-center mx-auto w-32 h-32 flex items-center justify-center">
        <div>
          <p className="font-bold text-xs text-primary">DATA</p>
          <p className="font-bold text-xs text-primary">GOVERNANCE</p>
          <p className="font-bold text-xs text-primary">HUB</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <MobileDiagramCard 
          title="Data Quality" 
          items={["Validation Rules", "Profiling", "Monitoring"]}
          color="border-green-500/50 bg-green-500/10"
        />
        <MobileDiagramCard 
          title="Metadata" 
          items={["Business Glossary", "Data Dictionary", "Catalog"]}
          color="border-blue-500/50 bg-blue-500/10"
        />
        <MobileDiagramCard 
          title="Data Lineage" 
          items={["Source Tracking", "Impact Analysis", "Transformations"]}
          color="border-purple-500/50 bg-purple-500/10"
        />
        <MobileDiagramCard 
          title="Access Control" 
          items={["Role-Based Access", "Data Masking", "Audit Trails"]}
          color="border-orange-500/50 bg-orange-500/10"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-lg border border-accent bg-accent/10 text-center">
          <span className="text-xs font-semibold text-accent">Ownership</span>
          <p className="text-[10px] text-muted-foreground">Data Stewards</p>
        </div>
        <div className="p-3 rounded-lg border border-accent bg-accent/10 text-center">
          <span className="text-xs font-semibold text-accent">Standards</span>
          <p className="text-[10px] text-muted-foreground">Naming Conventions</p>
        </div>
        <div className="p-3 rounded-lg border border-accent bg-accent/10 text-center">
          <span className="text-xs font-semibold text-accent">Compliance</span>
          <p className="text-[10px] text-muted-foreground">Policy Enforcement</p>
        </div>
        <div className="p-3 rounded-lg border border-accent bg-accent/10 text-center">
          <span className="text-xs font-semibold text-accent">Lifecycle</span>
          <p className="text-[10px] text-muted-foreground">Retention Policies</p>
        </div>
      </div>
      
      <div className="p-3 rounded-lg bg-primary/5 border border-primary/30 text-center">
        <p className="text-[10px] text-primary font-medium">CDMP Framework • DAMA-DMBOK • Enterprise Data Management</p>
      </div>
    </div>

    {/* Desktop Version */}
    <div className="hidden md:block">
      <svg viewBox="0 0 800 380" className="w-full h-auto" style={{ minHeight: '300px' }}>
        {/* Title */}
        <text x="400" y="25" textAnchor="middle" className="fill-foreground text-sm font-semibold">Enterprise Data Governance Framework</text>
        
        {/* Central Governance Hub */}
        <g>
          <circle cx="400" cy="190" r="70" className="fill-primary/10 stroke-primary" strokeWidth="2" />
          <text x="400" y="180" textAnchor="middle" className="fill-primary text-xs font-bold">DATA</text>
          <text x="400" y="195" textAnchor="middle" className="fill-primary text-xs font-bold">GOVERNANCE</text>
          <text x="400" y="210" textAnchor="middle" className="fill-primary text-xs font-bold">HUB</text>
        </g>
        
        {/* Data Quality */}
        <g>
          <rect x="80" y="50" width="130" height="90" rx="8" fill="hsl(145 50% 45% / 0.1)" stroke="hsl(145 50% 40%)" strokeWidth="2" />
          <text x="145" y="75" textAnchor="middle" className="text-xs font-semibold" fill="hsl(145 50% 35%)">Data Quality</text>
          <text x="145" y="95" textAnchor="middle" className="fill-muted-foreground text-[10px]">• Validation Rules</text>
          <text x="145" y="110" textAnchor="middle" className="fill-muted-foreground text-[10px]">• Profiling</text>
          <text x="145" y="125" textAnchor="middle" className="fill-muted-foreground text-[10px]">• Monitoring</text>
        </g>
        
        {/* Metadata Management */}
        <g>
          <rect x="590" y="50" width="130" height="90" rx="8" fill="hsl(200 50% 45% / 0.1)" stroke="hsl(200 50% 40%)" strokeWidth="2" />
          <text x="655" y="75" textAnchor="middle" className="text-xs font-semibold" fill="hsl(200 50% 35%)">Metadata</text>
          <text x="655" y="95" textAnchor="middle" className="fill-muted-foreground text-[10px]">• Business Glossary</text>
          <text x="655" y="110" textAnchor="middle" className="fill-muted-foreground text-[10px]">• Data Dictionary</text>
          <text x="655" y="125" textAnchor="middle" className="fill-muted-foreground text-[10px]">• Catalog</text>
        </g>
        
        {/* Data Lineage */}
        <g>
          <rect x="80" y="240" width="130" height="90" rx="8" fill="hsl(270 50% 45% / 0.1)" stroke="hsl(270 50% 40%)" strokeWidth="2" />
          <text x="145" y="265" textAnchor="middle" className="text-xs font-semibold" fill="hsl(270 50% 35%)">Data Lineage</text>
          <text x="145" y="285" textAnchor="middle" className="fill-muted-foreground text-[10px]">• Source Tracking</text>
          <text x="145" y="300" textAnchor="middle" className="fill-muted-foreground text-[10px]">• Impact Analysis</text>
          <text x="145" y="315" textAnchor="middle" className="fill-muted-foreground text-[10px]">• Transformations</text>
        </g>
        
        {/* Access Control */}
        <g>
          <rect x="590" y="240" width="130" height="90" rx="8" fill="hsl(30 60% 45% / 0.1)" stroke="hsl(30 60% 40%)" strokeWidth="2" />
          <text x="655" y="265" textAnchor="middle" className="text-xs font-semibold" fill="hsl(30 60% 35%)">Access Control</text>
          <text x="655" y="285" textAnchor="middle" className="fill-muted-foreground text-[10px]">• Role-Based Access</text>
          <text x="655" y="300" textAnchor="middle" className="fill-muted-foreground text-[10px]">• Data Masking</text>
          <text x="655" y="315" textAnchor="middle" className="fill-muted-foreground text-[10px]">• Audit Trails</text>
        </g>
        
        {/* Ownership */}
        <g>
          <rect x="250" y="50" width="110" height="70" rx="8" className="fill-accent/10 stroke-accent" strokeWidth="2" />
          <text x="305" y="75" textAnchor="middle" className="fill-accent text-xs font-semibold">Ownership</text>
          <text x="305" y="95" textAnchor="middle" className="fill-muted-foreground text-[10px]">Data Stewards</text>
          <text x="305" y="108" textAnchor="middle" className="fill-muted-foreground text-[10px]">Domain Owners</text>
        </g>
        
        {/* Standards */}
        <g>
          <rect x="440" y="50" width="110" height="70" rx="8" className="fill-accent/10 stroke-accent" strokeWidth="2" />
          <text x="495" y="75" textAnchor="middle" className="fill-accent text-xs font-semibold">Standards</text>
          <text x="495" y="95" textAnchor="middle" className="fill-muted-foreground text-[10px]">Naming Conventions</text>
          <text x="495" y="108" textAnchor="middle" className="fill-muted-foreground text-[10px]">Data Formats</text>
        </g>
        
        {/* Compliance */}
        <g>
          <rect x="250" y="260" width="110" height="70" rx="8" className="fill-accent/10 stroke-accent" strokeWidth="2" />
          <text x="305" y="285" textAnchor="middle" className="fill-accent text-xs font-semibold">Compliance</text>
          <text x="305" y="305" textAnchor="middle" className="fill-muted-foreground text-[10px]">Policy Enforcement</text>
          <text x="305" y="318" textAnchor="middle" className="fill-muted-foreground text-[10px]">Regulations</text>
        </g>
        
        {/* Lifecycle */}
        <g>
          <rect x="440" y="260" width="110" height="70" rx="8" className="fill-accent/10 stroke-accent" strokeWidth="2" />
          <text x="495" y="285" textAnchor="middle" className="fill-accent text-xs font-semibold">Lifecycle</text>
          <text x="495" y="305" textAnchor="middle" className="fill-muted-foreground text-[10px]">Retention Policies</text>
          <text x="495" y="318" textAnchor="middle" className="fill-muted-foreground text-[10px]">Archival</text>
        </g>
        
        {/* Connecting Lines */}
        <line x1="210" y1="95" x2="330" y2="160" stroke="hsl(var(--primary) / 0.3)" strokeWidth="1.5" />
        <line x1="590" y1="95" x2="470" y2="160" stroke="hsl(var(--primary) / 0.3)" strokeWidth="1.5" />
        <line x1="210" y1="285" x2="330" y2="220" stroke="hsl(var(--primary) / 0.3)" strokeWidth="1.5" />
        <line x1="590" y1="285" x2="470" y2="220" stroke="hsl(var(--primary) / 0.3)" strokeWidth="1.5" />
        
        <line x1="305" y1="120" x2="360" y2="160" stroke="hsl(var(--primary) / 0.3)" strokeWidth="1.5" />
        <line x1="495" y1="120" x2="440" y2="160" stroke="hsl(var(--primary) / 0.3)" strokeWidth="1.5" />
        <line x1="305" y1="260" x2="360" y2="220" stroke="hsl(var(--primary) / 0.3)" strokeWidth="1.5" />
        <line x1="495" y1="260" x2="440" y2="220" stroke="hsl(var(--primary) / 0.3)" strokeWidth="1.5" />
        
        {/* Bottom Framework */}
        <g>
          <rect x="200" y="350" width="400" height="25" rx="4" className="fill-primary/5 stroke-primary/30" strokeWidth="1" />
          <text x="400" y="368" textAnchor="middle" className="fill-primary text-[10px] font-medium">CDMP Framework • DAMA-DMBOK • Enterprise Data Management</text>
        </g>
      </svg>
    </div>
  </>
);

const ArchitectureDiagrams = () => {
  const [activeDiagram, setActiveDiagram] = useState("lakehouse");

  const renderDiagram = () => {
    switch (activeDiagram) {
      case "lakehouse":
        return <LakehouseDiagram />;
      case "analytics":
        return <AnalyticsDiagram />;
      case "governance":
        return <GovernanceDiagram />;
      default:
        return <LakehouseDiagram />;
    }
  };

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  return (
    <section id="architecture" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div 
            ref={headerRef}
            className={`text-center mb-8 sm:mb-12 reveal ${headerVisible ? 'visible' : ''}`}
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              <span className="text-gradient">Technical Architecture</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
              Visual representation of key data architectures and frameworks I've designed and implemented
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full mt-4" />
          </div>

          {/* Diagram selector tabs - scrollable on mobile */}
          <div className={`mb-6 sm:mb-8 reveal stagger-1 ${headerVisible ? 'visible' : ''}`}>
            <div className="flex overflow-x-auto gap-2 sm:gap-3 pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide">
              {diagrams.map((diagram) => (
                <button
                  key={diagram.id}
                  onClick={() => setActiveDiagram(diagram.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all duration-200 whitespace-nowrap shrink-0 ${
                    activeDiagram === diagram.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  <diagram.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">{diagram.title}</span>
                  <span className="sm:hidden">{diagram.title.split(" ").slice(0, 2).join(" ")}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active diagram info */}
          <div className={`text-center mb-4 sm:mb-6 reveal stagger-2 ${headerVisible ? 'visible' : ''}`}>
            <p className="text-xs sm:text-sm text-muted-foreground px-2">
              {diagrams.find((d) => d.id === activeDiagram)?.company} • {diagrams.find((d) => d.id === activeDiagram)?.description}
            </p>
          </div>

          {/* Diagram container */}
          <div 
            ref={contentRef}
            className={`bg-gradient-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 card-shadow border border-border gradient-border reveal-scale ${contentVisible ? 'visible' : ''}`}
          >
            {renderDiagram()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureDiagrams;