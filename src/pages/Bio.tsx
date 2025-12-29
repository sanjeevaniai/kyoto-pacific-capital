import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ankurPhoto from "@/assets/ankur.png";

const Bio = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <SEO
        title="Ankur Sahu | Founder & Managing Partner | Kyoto Pacific Capital"
        description="Ankur Sahu is the Founder of Kyoto Pacific Capital. Former Co-Head of Private Equity Asia-Pacific at Goldman Sachs with $21B+ in value creation."
        canonicalUrl="https://kyotopacific.com/bio"
        includePersonSchema={true}
      />

      <section className="pb-24 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
            {/* Photo Placeholder */}
            <div className="lg:col-span-2 animate-fade-up flex justify-center lg:justify-start">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-primary via-primary/80 to-primary/60 shadow-gold-glow">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={ankurPhoto} 
                    alt="Ankur Sahu - Founder & Managing Partner" 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-3">
              <h1 className="text-4xl md:text-5xl font-display font-light text-foreground mb-2 animate-fade-up">
                {String(t("bio.title"))}
              </h1>
              <p className="text-xl text-primary mb-8 animate-fade-up delay-100">
                {String(t("bio.role"))}
              </p>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="animate-fade-up delay-200">
                  {String(t("bio.paragraph1"))}
                </p>

                <p className="animate-fade-up delay-300">
                  {String(t("bio.paragraph2"))}
                </p>

                <p className="animate-fade-up delay-400">
                  {String(t("bio.paragraph3"))}
                </p>

                <p className="animate-fade-up delay-500">
                  {String(t("bio.paragraph4"))}
                </p>
              </div>
            </div>
          </div>

          {/* Education & Personal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <GlassCard className="p-8 animate-fade-up">
              <h2 className="text-xl font-display font-light text-foreground mb-4">
                {String(t("bio.education.title"))}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {String(t("bio.education.text"))}
              </p>
            </GlassCard>

            <GlassCard className="p-8 animate-fade-up delay-100">
              <h2 className="text-xl font-display font-light text-foreground mb-4">
                {String(t("bio.personal.title"))}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {String(t("bio.personal.text"))}
              </p>
            </GlassCard>
          </div>

          {/* Media Recognition */}
          <div className="mb-16 animate-fade-up">
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 text-center">
              {String(t("bio.press"))}
            </h2>
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground/60 text-sm">
              <span>Nikkei</span>
              <span>Financial Times</span>
              <span>Forbes</span>
              <span>Economic Times</span>
              <span>Times of India</span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-up">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group">
                {String(t("bio.cta"))}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Bio;