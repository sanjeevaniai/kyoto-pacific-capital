import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  includePersonSchema?: boolean;
  includeFAQSchema?: boolean;
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ankur Sahu",
  jobTitle: "Founder & Managing Partner",
  worksFor: {
    "@type": "Organization",
    name: "Kyoto Pacific Capital",
  },
  description: "Founder of Kyoto Pacific Capital. Former Co-Head of Private Equity Asia-Pacific at Goldman Sachs with $21B+ in value creation across Universal Studios Japan, ReNew Power, Sanyo Electric and more.",
  knowsAbout: [
    "Private Equity",
    "Investment Banking",
    "Japan Business",
    "India Investment",
    "Digital Transformation",
    "Renewable Energy",
    "Growth Capital",
    "M&A",
    "Corporate Turnaround"
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Harvard Business School"
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Tufts University"
    }
  ],
  nationality: "Indian",
  knowsLanguage: ["English", "Japanese", "Hindi"]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Kyoto Pacific Capital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kyoto Pacific Capital is a private equity firm focused on Japan and India, founded by Ankur Sahu, former Co-Head of Private Equity Asia-Pacific at Goldman Sachs. The firm partners with exceptional management teams to create leading companies through long-term growth strategies."
      }
    },
    {
      "@type": "Question",
      name: "Who is Ankur Sahu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ankur Sahu is the Founder and Managing Partner of Kyoto Pacific Capital. He was formerly Co-Head of Private Equity for Asia-Pacific at Goldman Sachs from 2011 to 2018, where he led investments including Universal Studios Japan, ReNew Power, and Japan Renewable Energy, generating over $21 billion in shareholder value."
      }
    },
    {
      "@type": "Question",
      name: "What is Kyoto Pacific Capital's investment strategy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kyoto Pacific Capital follows a Buy & Build strategy, partnering with companies primarily in Japan to accelerate growth through organic and inorganic strategies. The firm focuses on long-term value creation through transformation and digital enablement, rather than financial engineering."
      }
    },
    {
      "@type": "Question",
      name: "What sectors does Kyoto Pacific Capital invest in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kyoto Pacific Capital focuses on Technology (AI, SaaS, digital transformation), Sustainability (renewable energy), Healthcare (services and pharmaceuticals), and Consumer (brands and services) sectors."
      }
    },
    {
      "@type": "Question",
      name: "What is Kyoto Pacific Capital's track record?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kyoto Pacific Capital's leadership has created over $21 billion in value across 20+ investments, achieving a 3.0x gross MOIC and 26% gross IRR. Notable investments include Universal Studios Japan (15x MOIC), ReNew Power (NASDAQ listed), and Japan Renewable Energy (4.3x MOIC)."
      }
    }
  ]
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kyoto Pacific Capital",
  description: "Private equity firm focused on Japan and India, founded by former Goldman Sachs Partner Ankur Sahu",
  url: "https://kyotopacific.com",
  foundingDate: "2018",
  founder: {
    "@type": "Person",
    name: "Ankur Sahu",
    jobTitle: "Founder & Managing Partner",
  },
  address: [
    { "@type": "PostalAddress", addressLocality: "Singapore", addressCountry: "SG" },
    { "@type": "PostalAddress", addressLocality: "Tokyo", addressCountry: "JP" },
    { "@type": "PostalAddress", addressCountry: "US" },
  ],
  knowsAbout: [
    "Private Equity",
    "Japan Investment",
    "India Investment",
    "Growth Capital",
    "Digital Transformation",
    "Renewable Energy Investment"
  ]
};

export const SEO = ({
  title,
  description,
  keywords = "private equity, Japan, India, growth capital, digital transformation, Ankur Sahu, Goldman Sachs, buy and build, Asia investment",
  canonicalUrl,
  ogImage = "https://kyotopacific.com/og-image.jpg",
  ogType = "website",
  includePersonSchema = false,
  includeFAQSchema = false,
}: SEOProps) => {
  const fullTitle = title.includes("Kyoto Pacific Capital")
    ? title
    : `${title} | Kyoto Pacific Capital`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Kyoto Pacific Capital" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="author" content="Kyoto Pacific Capital" />
      <meta name="geo.region" content="JP" />
      <meta name="geo.placename" content="Tokyo" />

      {/* Organization Schema - always included */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Person Schema for Bio page */}
      {includePersonSchema && (
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      )}

      {/* FAQ Schema for Homepage */}
      {includeFAQSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};