import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const investments = [
  {
    name: "Universal Studios Japan",
    description: "One of the most successful PE investments globally",
    metric: "15x MOIC",
  },
  {
    name: "ReNew Power",
    description: "India's largest renewable energy company",
    metric: "NASDAQ Listed",
  },
  {
    name: "Japan Renewable Energy",
    description: "Japan's largest diversified renewable platform",
    metric: "4.3x MOIC",
  },
];

export const FeaturedInvestments = () => {
  const { t } = useLanguage();

  const investments = [
    {
      key: "usj",
      name: t("home.featuredInvestments.items.usj.name"),
      description: t("home.featuredInvestments.items.usj.description"),
      metric: "15x MOIC",
    },
    {
      key: "renew",
      name: t("home.featuredInvestments.items.renew.name"),
      description: t("home.featuredInvestments.items.renew.description"),
      metric: t("home.featuredInvestments.items.renew.metric"),
    },
    {
      key: "jre",
      name: t("home.featuredInvestments.items.jre.name"),
      description: t("home.featuredInvestments.items.jre.description"),
      metric: "4.3x MOIC",
    },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-light text-foreground mb-4">
            {t("home.featuredInvestments.title")}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {investments.map((investment, index) => (
            <GlassCard
              key={investment.key}
              className="p-8 text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-display font-light text-foreground mb-3">
                {investment.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {investment.description}
              </p>
              <span className="text-2xl font-display font-light text-primary">
                {investment.metric}
              </span>
            </GlassCard>
          ))}
        </div>

        <div className="text-center">
          <Link to="/investments">
            <Button variant="outline" size="lg" className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              {t("home.featuredInvestments.cta")}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
