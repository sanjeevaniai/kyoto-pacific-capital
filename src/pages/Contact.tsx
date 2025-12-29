import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success(String(t("contactPage.successTitle")), {
      description: String(t("contactPage.successDescription")),
    });
    
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <SEO
        title="Contact | Kyoto Pacific Capital"
        description="Get in touch with Kyoto Pacific Capital. Offices in Japan and India."
        canonicalUrl="https://kyotopacific.com/contact"
      />

      <section className="pb-24 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Hero */}
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-light text-foreground mb-4 animate-fade-up">
              {String(t("contactPage.title"))}
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up delay-100">
              {String(t("contactPage.subtitle"))}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl">
            {/* Contact Info */}
            <div className="space-y-8">
              <GlassCard className="p-8 animate-fade-up delay-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-light text-foreground mb-2">
                      {String(t("contactPage.email"))}
                    </h3>
                    <a
                      href="mailto:info@kyotopacific.com"
                      className="text-primary hover:underline transition-colors duration-300"
                    >
                      info@kyotopacific.com
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8 animate-fade-up delay-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-light text-foreground mb-2">
                      {String(t("contactPage.offices"))}
                    </h3>
                    <p className="text-muted-foreground">
                      {String(t("contactPage.officeLocations"))}
                    </p>
                  </div>
                </div>
              </GlassCard>

              <div className="p-6 animate-fade-up delay-400">
                <p className="text-muted-foreground leading-relaxed">
                  {String(t("contactPage.pitch"))}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <GlassCard className="p-8 animate-fade-up delay-300">
              <h2 className="text-2xl font-display font-light text-foreground mb-6">
                {String(t("contactPage.formTitle"))}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground/80 mb-2"
                  >
                    {String(t("contactPage.name"))} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                    placeholder={String(t("contactPage.namePlaceholder"))}
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground/80 mb-2"
                  >
                    {String(t("contactPage.emailLabel"))} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                    placeholder={String(t("contactPage.emailPlaceholder"))}
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground/80 mb-2"
                  >
                    {String(t("contactPage.company"))}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                    placeholder={String(t("contactPage.companyPlaceholder"))}
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground/80 mb-2"
                  >
                    {String(t("contactPage.message"))} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 resize-none"
                    placeholder={String(t("contactPage.messagePlaceholder"))}
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    String(t("contactPage.sending"))
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {String(t("contactPage.send"))}
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  {String(t("contactPage.responseTime"))}
                </p>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;