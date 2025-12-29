import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Star, TrendingUp, Users, Zap } from "lucide-react";

const criteria = [
  {
    icon: Users,
    title: "Exceptional Founders",
    description: "We seek visionary leaders with integrity, ambition, and the resilience to build lasting enterprises.",
  },
  {
    icon: Star,
    title: "Market Leadership",
    description: "Businesses with strong competitive positions, defensible moats, and clear paths to category leadership.",
  },
  {
    icon: TrendingUp,
    title: "Growth Potential",
    description: "Companies poised to scale significantly—whether through geographic expansion, digital transformation, or market consolidation.",
  },
  {
    icon: Zap,
    title: "Transformation Readiness",
    description: "Organizations open to embracing technology, operational improvements, and strategic evolution.",
  },
];

const Criteria = () => {
  return (
    <Layout>
      <section className="pb-24 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-light text-foreground mb-6 animate-fade-up">
              What We Look For
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-gold to-gold-light mb-8 animate-fade-up delay-100" />
            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
              We partner with businesses that share our commitment to excellence and long-term value creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {criteria.map((item, index) => (
              <GlassCard
                key={item.title}
                className="p-8 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-normal text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
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

export default Criteria;
