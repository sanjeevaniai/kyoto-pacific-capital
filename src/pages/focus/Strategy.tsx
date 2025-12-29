import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Rocket, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Strategy = () => {
  const { t } = useLanguage();

  const strategies = [
    {
      icon: Rocket,
      title: t("strategy.stages.title"),
      description: t("strategy.stages.description"),
      items: t("strategy.stages.items") as unknown as string[],
    },
    {
      icon: MapPin,
      title: t("strategy.geographies.title"),
      description: t("strategy.geographies.description"),
      items: t("strategy.geographies.items") as unknown as string[],
    },
    {
      icon: Sparkles,
      title: t("strategy.themes.title"),
      description: t("strategy.themes.description"),
      items: t("strategy.themes.items") as unknown as string[],
    },
  ];

  return (
    <Layout>
      <section className="pb-24 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-light text-foreground mb-6 animate-fade-up">
              {t("strategy.title")}
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-gold to-gold-light mb-8 animate-fade-up delay-100" />
            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
              {t("strategy.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => (
              <GlassCard
                key={index}
                className="p-8 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <strategy.icon className="w-7 h-7 text-gold" />
                </div>
                
                <h3 className="text-xl font-display font-normal text-foreground mb-4">
                  {strategy.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {strategy.description}
                </p>
                
                <ul className="space-y-3">
                  {Array.isArray(strategy.items) && strategy.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Strategy;
