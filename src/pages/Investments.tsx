import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Investments = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "20", label: String(t("investmentsPage.stats.investments")) },
    { value: "$4.1B", label: String(t("investmentsPage.stats.capitalInvested")) },
    { value: "3.0x", label: String(t("investmentsPage.stats.grossMoic")) },
    { value: "26%", label: String(t("investmentsPage.stats.grossIrr")) },
  ];

  const investments = [
    {
      name: String(t("investmentsPage.items.usj.name")),
      tag: String(t("investmentsPage.items.usj.tag")),
      description: String(t("investmentsPage.items.usj.description")),
      metric: "15x MOIC",
      outcome: String(t("investmentsPage.items.usj.outcome")),
    },
    {
      name: String(t("investmentsPage.items.renew.name")),
      tag: String(t("investmentsPage.items.renew.tag")),
      description: String(t("investmentsPage.items.renew.description")),
      metric: "4.3x MOIC",
      outcome: String(t("investmentsPage.items.renew.outcome")),
    },
    {
      name: String(t("investmentsPage.items.jre.name")),
      tag: String(t("investmentsPage.items.jre.tag")),
      description: String(t("investmentsPage.items.jre.description")),
      metric: "4.3x MOIC",
      outcome: String(t("investmentsPage.items.jre.outcome")),
    },
    {
      name: String(t("investmentsPage.items.sanyo.name")),
      tag: String(t("investmentsPage.items.sanyo.tag")),
      description: String(t("investmentsPage.items.sanyo.description")),
      metric: "2.0x MOIC",
      outcome: String(t("investmentsPage.items.sanyo.outcome")),
    },
    {
      name: String(t("investmentsPage.items.emobile.name")),
      tag: String(t("investmentsPage.items.emobile.tag")),
      description: String(t("investmentsPage.items.emobile.description")),
      metric: "1.6x MOIC",
      outcome: String(t("investmentsPage.items.emobile.outcome")),
    },
    {
      name: String(t("investmentsPage.items.antuit.name")),
      tag: String(t("investmentsPage.items.antuit.tag")),
      description: String(t("investmentsPage.items.antuit.description")),
      metric: "2.1x MOIC",
      outcome: String(t("investmentsPage.items.antuit.outcome")),
    },
  ];

  return (
    <Layout>
      <SEO
        title="Track Record | $21B+ Value Created | Kyoto Pacific Capital"
        description="Kyoto Pacific Capital's investment track record includes Universal Studios Japan, ReNew Power, Sanyo Electric, and more. 3.0x MOIC, 26% IRR across 20+ investments."
        canonicalUrl="https://kyotopacific.com/investments"
      />

      <section className="pb-24 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Hero */}
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-light text-foreground mb-4 animate-fade-up">
              {String(t("investmentsPage.title"))}
            </h1>
            <p className="text-xl text-primary animate-fade-up delay-100">
              {String(t("investmentsPage.subtitle"))}
            </p>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 py-12 border-y border-border/50">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-display font-light text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Investments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {investments.map((investment, index) => (
              <GlassCard
                key={investment.name}
                className="p-8 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
                  {investment.tag}
                </span>
                <h3 className="text-xl font-display font-light text-foreground mb-3">
                  {investment.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {investment.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-display font-light text-primary">
                    {investment.metric}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {investment.outcome}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground/60 mb-12 max-w-3xl">
            {String(t("investmentsPage.disclaimer"))}
          </p>

          {/* CTA */}
          <div className="animate-fade-up">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group">
                {String(t("investmentsPage.cta"))}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Investments;