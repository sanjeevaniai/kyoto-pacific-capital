import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { GlassCard } from "@/components/ui/GlassCard";
import { useLanguage } from "@/contexts/LanguageContext";

const Strategy = () => {
  const { language } = useLanguage();

  const geographicFocus = [
    {
      title: language === "jp" ? "日本" : "Japan",
      description: language === "jp" 
        ? "深いローカルネットワークと運営ノウハウを持つ主要市場。成長と拡大のポジションにある企業に焦点を当てています。"
        : "Our primary market with deep local networks and operational expertise. We focus on companies positioned for growth and expansion.",
    },
    {
      title: language === "jp" ? "インド" : "India",
      description: language === "jp"
        ? "大きな成長ポテンシャルを持つ戦略的拡大市場。多様な市場でビジネスを拡大する経験を活用します。"
        : "Strategic expansion market with significant growth potential. We leverage our experience in scaling businesses across diverse markets.",
    },
    {
      title: language === "jp" ? "アメリカ" : "United States",
      description: language === "jp"
        ? "ポートフォリオ戦略に合致する技術とイノベーションセクターでの選択的機会。"
        : "Selective opportunities in technology and innovation sectors that align with our portfolio strategy.",
    },
    {
      title: language === "jp" ? "ヨーロッパ" : "Europe",
      description: language === "jp"
        ? "グローバルネットワークと専門知識を通じて戦略的価値を付加できるセクターへのターゲット投資。"
        : "Targeted investments in sectors where we can add strategic value through our global network and expertise.",
    },
  ];

  const whatWeLookFor = language === "jp" 
    ? [
        "優れた経営陣",
        "長期的成長を遂げる魅力的なセクター",
        "変革と価値創造の機会",
        "国境を越えた拡大の恩恵を受けることができる企業",
      ]
    : [
        "Exceptional management teams",
        "Attractive sectors with long-term growth",
        "Opportunities for transformation and value creation",
        "Companies that can benefit from cross-border expansion",
      ];

  return (
    <Layout>
      <SEO
        title="Investment Strategy | Buy & Build | Kyoto Pacific Capital"
        description="Kyoto Pacific Capital's Buy & Build strategy partners with exceptional management teams to create leading companies in Japan and India."
        canonicalUrl="https://kyotopacific.com/strategy"
      />

      <section className="pb-24 min-h-screen pt-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-light text-foreground mb-4 animate-fade-up">
              {language === "jp" ? "投資戦略" : "Investment Strategy"}
            </h1>
          </div>

          {/* Section 1: Our Focus */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl md:text-3xl font-display font-light text-foreground mb-6 animate-fade-up">
              {language === "jp" ? "私たちの焦点" : "Our Focus"}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up delay-100">
              {language === "jp" 
                ? "KPCのビジョンは、日本とインドに焦点を当てたアジアを代表する投資会社となり、優れたビジネスの変革と創造に貢献することです。"
                : "KPC's vision is to become the preeminent Asian investment firm focused on Japan and India, committed to the transformation and creation of leading businesses."}
            </p>
          </div>

          {/* Section 2: Geographic Focus */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-display font-light text-foreground mb-8 text-center animate-fade-up">
              {language === "jp" ? "地理的フォーカス" : "Geographic Focus"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {geographicFocus.map((region, index) => (
                <GlassCard
                  key={region.title}
                  className="p-6 animate-fade-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <h3 className="text-xl font-display font-light text-foreground mb-3">
                    {region.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {region.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Section 3: What We Look For */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl md:text-3xl font-display font-light text-foreground mb-6 animate-fade-up">
              {language === "jp" ? "投資基準" : "What We Look For"}
            </h2>
            <ul className="space-y-4">
              {whatWeLookFor.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-lg text-muted-foreground leading-relaxed animate-fade-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <span className="text-gold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Our Approach */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-light text-foreground mb-6 animate-fade-up">
              {language === "jp" ? "私たちのアプローチ" : "Our Approach"}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up delay-100">
              {language === "jp"
                ? "財務工学ではなく、変革を通じた長期的な成長に焦点を当てています。経営陣とパートナーシップを組み、リーディングカンパニーを創出します。"
                : "We focus on long-term growth through transformation, not financial engineering. We partner with management teams to create leading companies."}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Strategy;
