import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Kyoto Pacific Capital | Private Equity for Growth, Globalization & Digital Transformation"
        description="Kyoto Pacific Capital partners with exceptional founders across Japan and India. $21B+ value created. Led by former Goldman Sachs Partner Ankur Sahu."
        keywords="private equity Japan, PE firm India, growth capital Asia, digital transformation investment"
        canonicalUrl="https://kyotopacific.com"
        includeFAQSchema={true}
      />
      <HeroSection />
    </Layout>
  );
};

export default Index;
