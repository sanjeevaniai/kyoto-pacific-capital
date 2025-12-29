import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const BriefIntro = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-8 pb-16 lg:pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="text-base uppercase tracking-[0.2em] text-gold mb-4 block">
            {t("home.briefIntro.kicker")}
          </span>
          <p className="text-xl md:text-[28px] text-foreground leading-[1.5] mb-8">
            {t("home.briefIntro.text")}
          </p>
          <Link to="/strategy">
            <Button variant="hero" size="lg" className="group">
              {t("home.briefIntro.cta")}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
