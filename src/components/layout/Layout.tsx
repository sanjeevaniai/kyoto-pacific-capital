import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { CookieConsent } from "@/components/ui/CookieConsent";
// import { FallingCoins } from "@/components/ui/FallingCoins";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {

  return (
    <div className="min-h-screen bg-background relative">
      {/* <FallingCoins /> */}
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};
