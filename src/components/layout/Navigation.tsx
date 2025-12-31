import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import kpcLogoJp from "@/assets/kpc-logo-jp-gold.png";
import kpcLogoEn from "@/assets/kpc-logo-jp.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();
  const { t, language } = useLanguage();
  console.log("Current language:", language);

  const navItems = [
    { label: language === "jp" ? "創業者の経歴" : "Founder's Bio", href: "/bio" },
    { label: t("nav.strategy"), href: "/strategy" },
    { label: t("nav.investments"), href: "/investments" },
    { label: language === "jp" ? "お問い合わせ" : "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl",
        isScrolled
          ? "bg-background/70 shadow-silk"
          : "bg-background/50"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col group"
          >
            {language === "jp" ? (
              <img src={kpcLogoJp} alt="京都パシフィックキャピタル" className="h-12 group-hover:opacity-80 transition-opacity duration-300" />
            ) : (
              <img src={kpcLogoEn} alt="Kyoto Pacific Capital" className="h-16 group-hover:opacity-80 transition-opacity duration-300" />
            )}
          </Link>

          {/* Right side icons */}
          <div className="flex items-center gap-1">
            <LanguageToggle />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-gold"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Menu Dropdown */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 backdrop-blur-xl bg-background/80 transition-all duration-300 overflow-hidden shadow-silk",
          isMobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-6 py-6 space-y-4">
          <div>
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className="flex items-center justify-between w-full py-2 text-foreground/80 hover:text-gold transition-colors"
            >
              <span>{language === "jp" ? "会社概要" : "About Us"}</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isAboutOpen ? "rotate-180" : "")} />
            </button>

            <div className={cn("pl-4 space-y-2 overflow-hidden transition-all duration-300", isAboutOpen ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0")}>
              {navItems.map((item) => (
                <Link key={item.href} to={item.href} className="block py-2 text-foreground/60 hover:text-gold transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
