import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type InvestmentStatus = "current" | "past" | "all";

const portfolioCompanies = [
  {
    name: "ReNew",
    description: "Leading renewable energy company in India, powering a cleaner future through wind and solar.",
    descriptionJp: "インドをリードする再生可能エネルギー企業。風力と太陽光でクリーンな未来を実現。",
    status: "current" as const,
    sector: "Energy",
    sectorJp: "エネルギー",
  },
  {
    name: "USJ",
    description: "Universal Studios Japan—one of Asia's most iconic entertainment destinations.",
    descriptionJp: "ユニバーサル・スタジオ・ジャパン—アジアを代表するエンターテインメント施設。",
    status: "past" as const,
    sector: "Entertainment",
    sectorJp: "エンターテインメント",
  },
  {
    name: "IWA",
    description: "Premium sake brand bridging traditional craftsmanship with global markets.",
    descriptionJp: "伝統的な職人技とグローバル市場を結ぶプレミアム日本酒ブランド。",
    status: "current" as const,
    sector: "Consumer",
    sectorJp: "消費財",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState<InvestmentStatus>("all");
  const { t, language } = useLanguage();

  const filteredCompanies = portfolioCompanies.filter(
    (company) => filter === "all" || company.status === filter
  );

  return (
    <Layout>
      <section className="pb-24 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-light text-foreground mb-6 animate-fade-up">
              {t("portfolio.title")}
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-gold to-gold-light mb-8 animate-fade-up delay-100" />
            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
              {t("portfolio.subtitle")}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-4 mb-12 animate-fade-up delay-300">
            {[
              { value: "all", label: t("portfolio.all") },
              { value: "current", label: t("portfolio.current") },
              { value: "past", label: t("portfolio.past") },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value as InvestmentStatus)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === tab.value
                    ? "bg-gold text-purple-deep"
                    : "bg-white/5 text-foreground/70 hover:bg-white/10 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCompanies.map((company, index) => (
              <GlassCard
                key={company.name}
                className="p-8 animate-fade-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                {/* Logo Placeholder */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-purple-mid border border-gold/30 flex items-center justify-center mb-6">
                  <span className="text-xl font-display font-medium text-gold">
                    {company.name[0]}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-display font-normal text-foreground">
                    {company.name}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-medium ${
                      company.status === "current"
                        ? "bg-gold/20 text-gold"
                        : "bg-white/10 text-muted-foreground"
                    }`}
                  >
                    {company.status === "current" ? t("portfolio.current") : t("portfolio.past")}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {language === "jp" ? company.descriptionJp : company.description}
                </p>

                <span className="text-xs text-gold/80">
                  {language === "jp" ? company.sectorJp : company.sector}
                </span>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
