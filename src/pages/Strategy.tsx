import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Strategy = () => {
  const { t } = useLanguage();

  const sectors = [
    {
      title: String(t("strategyPage.sectors.technology.title")),
      description: String(t("strategyPage.sectors.technology.description")),
    },
    {
      title: String(t("strategyPage.sectors.sustainability.title")),
      description: String(t("strategyPage.sectors.sustainability.description")),
    },
    {
      title: String(t("strategyPage.sectors.healthcare.title")),
      description: String(t("strategyPage.sectors.healthcare.description")),
    },
    {
      title: String(t("strategyPage.sectors.consumer.title")),
      description: String(t("strategyPage.sectors.consumer.description")),
    },
  ];

  return (
    <Layout>
      <SEO
        title="Investment Strategy | Buy & Build | Kyoto Pacific Capital"
        description="Kyoto Pacific Capital's Buy & Build strategy partners with exceptional management teams to create leading companies in Japan and India."
        canonicalUrl="https://kyotopacific.com/strategy"
      />

      <section className="pb-24 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Hero */}
          <div className="max-w-4xl mb-20">
            <h1 className="text-4xl md:text-5xl font-display font-light text-foreground mb-4 animate-fade-up">
              {String(t("strategyPage.title"))}
            </h1>
            <p className="text-xl text-primary animate-fade-up delay-100">
              {String(t("strategyPage.subtitle"))}
            </p>
          </div>

          {/* Philosophy */}
          <div className="max-w-4xl mb-20">
            <h2 className="text-2xl font-display font-light text-foreground mb-6 animate-fade-up">
              {String(t("strategyPage.approach.title"))}
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="animate-fade-up delay-100">
                {String(t("strategyPage.approach.paragraph1"))}
              </p>
              <p className="animate-fade-up delay-200">
                {String(t("strategyPage.approach.paragraph2"))}
              </p>
              <p className="animate-fade-up delay-300">
                {String(t("strategyPage.approach.paragraph3"))}
              </p>
            </div>
          </div>

          {/* Investment Criteria */}
          <div className="max-w-4xl mb-20">
            <h2 className="text-2xl font-display font-light text-foreground mb-6 animate-fade-up">
              {String(t("strategyPage.criteria.title"))}
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="animate-fade-up delay-100">
                {String(t("strategyPage.criteria.paragraph1"))}
              </p>
              <p className="animate-fade-up delay-200">
                {String(t("strategyPage.criteria.paragraph2"))}
              </p>
            </div>
          </div>

          {/* Target Sectors */}
          <div className="mb-20">
            <h2 className="text-2xl font-display font-light text-foreground mb-8 animate-fade-up">
              {String(t("strategyPage.sectors.title"))}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectors.map((sector, index) => (
                <div
                  key={sector.title}
                  className="animate-fade-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <h3 className="text-lg font-display font-light text-foreground mb-2">
                    {sector.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {sector.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Geographic Focus */}
          <div className="max-w-4xl mb-16">
            <h2 className="text-2xl font-display font-light text-foreground mb-6 animate-fade-up">
              {String(t("strategyPage.geography.title"))}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 animate-fade-up delay-100">
              {String(t("strategyPage.geography.text"))}
            </p>
            <p className="text-primary font-medium animate-fade-up delay-200">
              {String(t("strategyPage.geography.locations"))}
            </p>
          </div>

          {/* CTA */}
          <div className="animate-fade-up">
            <Link to="/investments">
              <Button variant="hero" size="lg" className="group">
                {String(t("strategyPage.cta"))}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Strategy;