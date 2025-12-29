import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Entrepreneur-First",
    description: "We think and act like entrepreneurs ourselves, understanding the challenges and aspirations of the founders we partner with.",
  },
  {
    icon: Heart,
    title: "Trust & Integrity",
    description: "Long-term relationships built on transparency, respect, and unwavering ethical standards.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing technology and new ideas to create value and drive transformation across our portfolio.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working as true partners—with founders, teams, and our network—to achieve shared success.",
  },
];

const Vision = () => {
  return (
    <Layout>
      <section className="pb-24 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-light text-foreground mb-6 animate-fade-up">
              Vision & Values
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-gold to-gold-light mb-12 animate-fade-up delay-100" />
          </div>

          {/* Mission Statement */}
          <GlassCard className="max-w-4xl mx-auto p-8 lg:p-12 mb-16 animate-fade-up delay-200">
            <h2 className="text-2xl font-display font-normal text-gold mb-6">Our Mission</h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              To be the partner of choice for exceptional entrepreneurs and management teams across Asia, helping them build enduring businesses that create lasting value for all stakeholders—while achieving world-class returns for our investors.
            </p>
          </GlassCard>

          {/* Core Values */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-normal text-foreground mb-8 text-center animate-fade-up delay-300">
              Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <GlassCard
                  key={value.title}
                  className="p-8 animate-fade-up"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-normal text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Vision;
