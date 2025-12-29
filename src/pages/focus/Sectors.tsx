import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Laptop, ShoppingBag, Heart, Factory } from "lucide-react";

const sectors = [
  {
    icon: Laptop,
    title: "Technology",
    description: "Software, SaaS, AI/ML, and digital infrastructure companies driving the next wave of innovation.",
  },
  {
    icon: ShoppingBag,
    title: "Consumer",
    description: "Brands and platforms that resonate with evolving consumer preferences across Asia and beyond.",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Healthcare services, medtech, and life sciences companies addressing critical needs.",
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "Manufacturing excellence, supply chain innovation, and infrastructure enablers.",
  },
];

const Sectors = () => {
  return (
    <Layout>
      <section className="pb-24 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-light text-foreground mb-6 animate-fade-up">
              Sector Themes
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-gold to-gold-light mb-8 animate-fade-up delay-100" />
            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
              We invest across sectors where our experience and network can drive meaningful value creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sectors.map((sector, index) => (
              <GlassCard
                key={sector.title}
                className="p-8 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <sector.icon className="w-7 h-7 text-gold" />
                </div>
                
                <h3 className="text-xl font-display font-normal text-foreground mb-3">
                  {sector.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {sector.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sectors;
