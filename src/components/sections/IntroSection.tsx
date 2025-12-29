import { GlassCard } from "@/components/ui/GlassCard";
import { TrendingUp, Globe, Cpu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const IntroSection = () => {
  const { t } = useLanguage();

  const valueProps = [
    {
      icon: TrendingUp,
      title: t("intro.growth.title"),
      description: t("intro.growth.description"),
    },
    {
      icon: Globe,
      title: t("intro.globalisation.title"),
      description: t("intro.globalisation.description"),
    },
    {
      icon: Cpu,
      title: t("intro.digital.title"),
      description: t("intro.digital.description"),
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12">
        {/* Intro Text */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-light text-foreground leading-tight animate-fade-up">
            {t("intro.headline")}
          </h2>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <GlassCard
              key={index}
              className="p-8 text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gold/10 mb-6">
                <prop.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-display font-normal text-foreground mb-4">
                {prop.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {prop.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
