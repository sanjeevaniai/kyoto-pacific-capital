import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface StatCardProps {
  value: string;
  label: string;
  delay: number;
  backImage: string;
}

const StatCard = ({ value, label, delay, backImage }: StatCardProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [isVisible, setIsVisible] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const numMatch = value.match(/[\d.]+/);
      if (!numMatch) {
        setDisplayValue(value);
        return;
      }

      const targetNum = parseFloat(numMatch[0]);
      const prefix = value.slice(0, value.indexOf(numMatch[0]));
      const suffix = value.slice(value.indexOf(numMatch[0]) + numMatch[0].length);

      let current = 0;
      const duration = 1500;
      const steps = 60;
      const increment = targetNum / steps;
      const stepTime = duration / steps;

      const counter = setInterval(() => {
        current += increment;
        if (current >= targetNum) {
          setDisplayValue(value);
          clearInterval(counter);
        } else {
          const displayNum = targetNum >= 10 
            ? Math.round(current).toString() 
            : current.toFixed(1);
          setDisplayValue(`${prefix}${displayNum}${suffix}`);
        }
      }, stepTime);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <div 
      ref={ref}
      className="group"
      style={{ perspective: "1000px" }}
    >
      <div 
        className="relative w-full h-48 md:h-56"
        style={{ 
          transformStyle: "preserve-3d",
        }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Front of card */}
        <div 
          className="absolute inset-0 w-full h-full rounded-xl glass-card flex flex-col items-center justify-center p-6"
          style={{ 
            backfaceVisibility: "hidden",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 800ms cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          <div className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-gold mb-3">
            {displayValue}
          </div>
          <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider text-center">
            {label}
          </div>
        </div>

        {/* Back of card - Image only */}
        <div 
          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden"
          style={{ 
            backfaceVisibility: "hidden",
            transform: isFlipped ? "rotateY(0deg)" : "rotateY(-180deg)",
            transition: "transform 800ms cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backImage})` }}
          />
        </div>
      </div>
    </div>
  );
};

export const StatsBar = () => {
  const { t } = useLanguage();
  
  const stats = [
    { 
      value: "$21B+", 
      label: String(t("home.stats.valueCreated")),
      backImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop"
    },
    { 
      value: "20+", 
      label: String(t("home.stats.yearsExperience")),
      backImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop"
    },
    { 
      value: "3.0x", 
      label: String(t("home.stats.grossMoic")),
      backImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    { 
      value: "26%", 
      label: String(t("home.stats.grossIrr")),
      backImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={index * 150}
              backImage={stat.backImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
