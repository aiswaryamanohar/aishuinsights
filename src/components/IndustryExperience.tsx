import { Landmark, ShoppingCart, Factory, Fuel } from "lucide-react";

const industries = [
  {
    icon: Landmark,
    name: "Banking & Financial Services",
    focus: "Regulatory compliance, financial accuracy, treasury analytics",
    description: "Built reporting systems for cash analysis, liquidity management, and regulatory controls."
  },
  {
    icon: ShoppingCart,
    name: "FMCG",
    focus: "GTM analytics, speed-to-insight, business-driven decisions",
    description: "Delivered market potential analysis and distributor performance dashboards for strategic planning."
  },
  {
    icon: Factory,
    name: "Manufacturing & Industrial",
    focus: "CFO reporting, operational finance, executive dashboards",
    description: "Created integrated financial and operational reporting for executive decision-making."
  },
  {
    icon: Fuel,
    name: "EPC & Oil & Gas",
    focus: "Large-scale platforms, governance, cost optimization",
    description: "Modernizing legacy data infrastructure into governed, scalable cloud architecture."
  }
];

const IndustryExperience = () => {
  return (
    <section id="industries" className="py-20 bg-gradient-hero relative">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Industry Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cross-sector expertise enabling tailored data solutions for diverse business challenges.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full mt-4" />
          </div>
          
          {/* Industry cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={industry.name}
                className="bg-gradient-card rounded-xl p-6 card-shadow border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                    <industry.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-primary/80 font-medium mb-2">
                      {industry.focus}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryExperience;
