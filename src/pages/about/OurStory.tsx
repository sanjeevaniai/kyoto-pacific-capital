import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { useLanguage } from "@/contexts/LanguageContext";

const OurStory = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="pb-24 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-light text-foreground mb-6 animate-fade-up">
              {t("story.title")}
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-gold to-gold-light mb-12 animate-fade-up delay-100" />

            {/* Founder's Letter */}
            <GlassCard className="p-8 lg:p-12 animate-fade-up delay-200">
              <h2 className="text-2xl font-display font-normal text-gold mb-8">
                {t("story.letterTitle")}
              </h2>
              
              <div className="space-y-6 text-foreground/90 leading-relaxed">
                <p>{t("story.paragraph1")}</p>
                <p>{t("story.paragraph2")}</p>
                <p>{t("story.paragraph3")}</p>
                <p>{t("story.paragraph4")}</p>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10">
                <p className="font-display text-lg text-gold">{t("story.signature")}</p>
                <p className="text-sm text-muted-foreground mt-1">{t("story.role")}</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurStory;
