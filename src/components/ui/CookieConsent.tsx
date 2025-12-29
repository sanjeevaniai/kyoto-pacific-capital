import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { Cookie, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isExpanded ? (
        <div className="backdrop-blur-xl bg-card border border-border rounded-xl p-4 shadow-lg max-w-sm animate-fade-up">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={String(t("cookie.close"))}
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-sm text-foreground mb-4 pr-4">
            {t("cookie.message")}{" "}
            <Link
              to="/privacy"
              className="text-primary hover:underline transition-colors"
            >
              {t("cookie.learnMore")}
            </Link>
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecline}
              className="text-xs"
            >
              {t("cookie.decline")}
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="text-xs bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {t("cookie.accept")}
            </Button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-primary hover:bg-card/80 transition-all hover:scale-105"
          aria-label={String(t("cookie.preferences"))}
        >
          <Cookie className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
