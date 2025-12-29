import { Layout } from "@/components/layout/Layout";

const Disclaimer = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6">
          <article className="max-w-[800px] mx-auto">
            <p className="text-muted-foreground mb-8 font-body">
              Last updated: December 16, 2024
            </p>
            
            <h1 className="text-[36px] font-display font-semibold text-foreground mb-8">
              Investment Disclaimer
            </h1>

            <div className="prose prose-lg max-w-none space-y-8 text-foreground/90 font-body text-[16px] leading-[1.8]">
              <div className="p-4 border border-gold/30 rounded-lg bg-gold/5 mb-8">
                <p className="text-sm text-gold">
                  <strong>Important Notice:</strong> Please read this disclaimer carefully before using this website or any materials provided by Kyoto Pacific Capital.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Not an Offer or Solicitation
                </h2>
                <p>
                  This website and any materials contained herein do not constitute an offer to sell or a solicitation of an offer to buy any securities in any jurisdiction to any person. The information provided is for general informational purposes only and should not be construed as investment, legal, tax, or other professional advice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Past Performance
                </h2>
                <p>
                  Past performance is not indicative of future results. Any historical returns, expected returns, or probability projections may not reflect actual future performance. Investments in private equity and venture capital involve substantial risks, including the potential loss of all invested capital.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Information for Discussion Purposes Only
                </h2>
                <p className="mb-4">
                  The information presented on this website and in any related materials is provided solely for informational and discussion purposes. It is not intended to provide the sole basis for any investment decision and is subject to change without notice.
                </p>
                <p>
                  No representation or warranty, express or implied, is made as to the accuracy, completeness, or reliability of the information contained herein. Kyoto Pacific Capital expressly disclaims any and all liability for any loss or damage arising from reliance on such information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Confidentiality Notice
                </h2>
                <p>
                  Certain information made available through this website or through direct communications may be confidential and proprietary to Kyoto Pacific Capital and its affiliates. Such information is provided solely for the intended recipient and may not be reproduced, disclosed, or distributed to any other party without the prior written consent of Kyoto Pacific Capital.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Forward-Looking Statements
                </h2>
                <p className="mb-4">
                  This website may contain forward-looking statements that involve risks and uncertainties. These statements may include projections, forecasts, and estimates of market trends, returns, and other financial metrics. Such forward-looking statements are based on current expectations and assumptions that are subject to risks and uncertainties that could cause actual results to differ materially.
                </p>
                <p>
                  Forward-looking statements speak only as of the date they are made, and Kyoto Pacific Capital undertakes no obligation to update or revise any forward-looking statements, whether as a result of new information, future events, or otherwise.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Consult Professional Advisors
                </h2>
                <p className="mb-4">
                  Before making any investment decision, you should consult with your own legal, tax, financial, and other professional advisors to determine the suitability of any investment for your particular circumstances and financial situation.
                </p>
                <p>
                  Kyoto Pacific Capital does not provide legal, tax, or accounting advice. Nothing on this website or in any materials should be construed as constituting such advice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Risk Factors
                </h2>
                <p className="mb-4">
                  Investments in private markets involve significant risks, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Illiquidity and restrictions on transferability</li>
                  <li>Long-term commitment of capital</li>
                  <li>Loss of entire investment</li>
                  <li>Market and economic volatility</li>
                  <li>Regulatory and political risks</li>
                  <li>Currency exchange rate fluctuations</li>
                  <li>Limited operating history of portfolio companies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Regulatory Status
                </h2>
                <p>
                  Kyoto Pacific Capital Pte. Ltd. is not a registered investment advisor, broker-dealer, or investment company. The firm conducts its activities in accordance with applicable exemptions and regulations in the jurisdictions where it operates.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Contact
                </h2>
                <p>
                  If you have any questions regarding this disclaimer, please contact:
                </p>
                <div className="mt-4 p-4 bg-card/50 rounded-lg">
                  <p><strong>Kyoto Pacific Capital Pte. Ltd.</strong></p>
                  <p>Email: compliance@kyotopacificcapital.com</p>
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default Disclaimer;
