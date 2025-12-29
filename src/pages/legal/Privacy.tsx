import { Layout } from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6">
          <article className="max-w-[800px] mx-auto">
            <p className="text-muted-foreground mb-8 font-body">
              Last updated: December 16, 2024
            </p>
            
            <h1 className="text-[36px] font-display font-semibold text-foreground mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none space-y-8 text-foreground/90 font-body text-[16px] leading-[1.8]">
              <div className="p-4 border border-gold/30 rounded-lg bg-gold/5 mb-8">
                <p className="text-sm text-gold">
                  <strong>Note:</strong> This is a template privacy policy. Please consult with legal counsel to ensure compliance with applicable laws and regulations.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  1. Information We Collect
                </h2>
                <p className="mb-4">
                  We may collect information about you in a variety of ways. The information we may collect includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number that you voluntarily give to us when you contact us or register on our site.</li>
                  <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access our site, such as your IP address, browser type, operating system, access times, and the pages you have viewed.</li>
                  <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method, that we may collect when you engage our services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  2. How We Use Information
                </h2>
                <p className="mb-4">
                  Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Create and manage your account</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you marketing and promotional communications (with your consent)</li>
                  <li>Respond to your inquiries and offer support</li>
                  <li>Improve our website and services</li>
                  <li>Monitor and analyze usage and trends</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  3. Cookies and Tracking
                </h2>
                <p className="mb-4">
                  We may use cookies, web beacons, tracking pixels, and other tracking technologies to help customize our site and improve your experience. When you access our site, your personal information is not collected through the use of tracking technology unless you voluntarily submit such information.
                </p>
                <p>
                  Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of our site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  4. Third-Party Services
                </h2>
                <p className="mb-4">
                  We may share information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, and customer service.
                </p>
                <p>
                  We are not responsible for the actions of third parties with whom you share personal or sensitive data, and we have no authority to manage or control third-party solicitations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  5. Data Retention
                </h2>
                <p>
                  We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  6. Your Rights
                </h2>
                <p className="mb-4">
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to access the personal data we hold about you</li>
                  <li>The right to request correction of inaccurate data</li>
                  <li>The right to request deletion of your data</li>
                  <li>The right to object to processing of your data</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  7. Contact for Privacy Concerns
                </h2>
                <p>
                  If you have questions or comments about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-card/50 rounded-lg">
                  <p><strong>Kyoto Pacific Capital</strong></p>
                  <p>Email: privacy@kyotopacificcapital.com</p>
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
