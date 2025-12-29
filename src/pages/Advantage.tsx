import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Network, Wrench, Globe } from "lucide-react";

const advantages = [
  {
    icon: Network,
    title: "Market Access",
    description: "Deep networks across Japan and India built over decades. We open doors that matter—to customers, partners, regulators, and talent.",
    details: [
      "Established relationships with leading corporations",
      "Access to top-tier management talent",
      "Regulatory and government connections",
    ],
  },
  {
    icon: Wrench,
    title: "Operating Support",
    description: "Hands-on value creation, not passive capital. We roll up our sleeves to help portfolio companies execute on their strategic priorities.",
    details: [
      "Strategic planning and execution",
      "Digital transformation initiatives",
      "Performance improvement programs",
    ],
  },
  {
    icon: Globe,
    title: "Cross-border Scale",
    description: "Helping Asian businesses go global—and global businesses succeed in Asia. We bridge cultures, markets, and opportunities.",
    details: [
      "Japan-India business corridor expertise",
      "Global expansion strategy",
      "Cross-border M&A support",
    ],
  },
];

const Advantage = () => {
  return (
    <Layout>
      <section className="pb-24 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-light text-foreground mb-6 animate-fade-up">
              Strategic Advantage
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-gold to-gold-light mb-8 animate-fade-up delay-100" />
            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
              More than capital—a partnership that accelerates growth and creates lasting value.
            </p>
          </div>

          <div className="space-y-8">
            {advantages.map((advantage, index) => (
              <GlassCard
                key={advantage.title}
                className="p-8 lg:p-12 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center">
                      <advantage.icon className="w-8 h-8 text-gold" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-display font-normal text-foreground mb-4">
                      {advantage.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {advantage.description}
                    </p>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {advantage.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-3 text-sm text-foreground/80"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Advantage;
