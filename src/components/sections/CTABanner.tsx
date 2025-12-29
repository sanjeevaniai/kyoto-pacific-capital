import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const CTABanner = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-light text-foreground mb-4">
            {t("home.ctaBanner.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t("home.ctaBanner.subtitle")}
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="group">
              {t("home.ctaBanner.cta")}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
