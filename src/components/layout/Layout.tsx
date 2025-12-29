import { ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { CookieConsent } from "@/components/ui/CookieConsent";
// import { FallingCoins } from "@/components/ui/FallingCoins";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background relative">
      {/* <FallingCoins /> */}
      <Navigation />
      <main>
        {!isHomePage && (
          <div className="container mx-auto px-6 lg:px-12 pt-24 pb-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>{t("backToHome")}</span>
            </Link>
          </div>
        )}
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};
