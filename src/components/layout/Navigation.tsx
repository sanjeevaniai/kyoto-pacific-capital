import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const { t, language } = useLanguage();

  const navItems = [
    { label: t("nav.bio"), href: "/bio" },
    { label: t("nav.strategy"), href: "/strategy" },
    { label: t("nav.investments"), href: "/investments" },
    { label: t("nav.contact"), href: "/contact" },
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
            <span className="text-2xl font-logo font-bold text-logo tracking-wide group-hover:text-gold transition-colors duration-300">
              {language === "jp" ? "京都パシフィックキャピタル" : "Kyoto Pacific Capital"}
            </span>
            <span className="text-xs font-logo font-light text-gold/80 tracking-widest uppercase group-hover:text-gold transition-colors duration-300">
              {language === "jp" ? "野心と資本が出会う場所" : "Where ambition meets capital"}
            </span>
          </Link>

          {/* Right side icons */}
          <div className="flex items-center gap-1">
            <LanguageToggle />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-gold"
            >
              <User className="h-5 w-5" />
            </Button>
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
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block py-2 text-foreground/80 hover:text-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
