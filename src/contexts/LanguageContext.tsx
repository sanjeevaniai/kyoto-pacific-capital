import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "jp";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Content imports
import { content as enContent } from "@/content/en";
import { content as jpContent } from "@/content/jp";

const contentMap = {
  en: enContent,
  jp: jpContent,
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Initialize from localStorage
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("kpc-language");
      return (saved === "jp" ? "jp" : "en") as Language;
    }
    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("kpc-language", lang);
    }
  };

  const t = (key: string): string | string[] => {
    const keys = key.split(".");
    let value: any = contentMap[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};