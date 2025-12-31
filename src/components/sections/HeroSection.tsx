import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBgEn from "@/assets/hero-bg-premium.png";
import heroBgJp from "@/assets/hero-bg-japan.png";

export const HeroSection = () => {
  const { t, language } = useLanguage();
  const heroBg = language === "jp" ? heroBgJp : heroBgEn;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const rotatingWords = language === "jp" 
    ? ["資本", "インテリジェント成長", "グローバル化", "戦略的イノベーション"]
    : ["Capital", "Intelligent Growth", "Globalization", "Strategic Innovation"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Purple overlay */}
      <div className="absolute inset-0 bg-[hsl(271,85%,15%)]/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-light leading-tight animate-fade-up cursor-default">
            <span className="block text-7xl md:text-8xl lg:text-9xl text-gold">
              {language === "jp" ? "パートナー" : "Partners"}
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-foreground">
              {language === "jp" ? "のために" : "for"}
            </span>
            <span 
              className={`block text-4xl md:text-5xl lg:text-6xl text-gold transition-all duration-500 mt-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              {rotatingWords[currentIndex]}
            </span>
          </h1>
          
          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-up delay-200 transition-colors duration-300 hover:text-primary cursor-default">
            {t("hero.subheadline")}
          </p>

          {/* CTA Button */}
          <div className="mt-12 flex items-center justify-center animate-fade-up delay-300">
            <Button asChild variant="heroOutline" size="xl" className="group">
              <Link to="/company">
                {t("hero.learnMore")}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};