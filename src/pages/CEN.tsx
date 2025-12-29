import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";

const networkMembers = [
  {
    name: "Sarah Chen",
    expertise: "Technology & Digital Transformation",
    geography: "Asia-Pacific",
  },
  {
    name: "Takeshi Yamamoto",
    expertise: "Japan Market Entry",
    geography: "Japan",
  },
  {
    name: "Priya Sharma",
    expertise: "Consumer & Retail",
    geography: "India",
  },
  {
    name: "Michael Roberts",
    expertise: "M&A & Capital Markets",
    geography: "Global",
  },
  {
    name: "Kenji Tanaka",
    expertise: "Industrial Operations",
    geography: "Japan",
  },
  {
    name: "Ananya Patel",
    expertise: "Healthcare & Life Sciences",
    geography: "India",
  },
];

const CEN = () => {
  return (
    <Layout>
      <section className="pb-24 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-light text-foreground mb-6 animate-fade-up">
              Co-Entrepreneur Network
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-gold to-gold-light mb-8 animate-fade-up delay-100" />
            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
              Our network of operators, advisors, and co-investors who help portfolio companies succeed.
            </p>
          </div>

          {/* Network Introduction */}
          <GlassCard className="max-w-4xl mx-auto p-8 lg:p-12 mb-16 animate-fade-up delay-300">
            <h2 className="text-2xl font-display font-normal text-gold mb-6">Who We Work With</h2>
            <p className="text-foreground/90 leading-relaxed mb-6">
              The CEN brings together seasoned executives, industry experts, and successful entrepreneurs who share our commitment to building great companies. They provide portfolio companies with hands-on support, strategic guidance, and access to invaluable networks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our collaborators work alongside management teams to accelerate growth, navigate challenges, and capture opportunities—bringing real-world experience and proven playbooks to every engagement.
            </p>
          </GlassCard>

          {/* Network Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {networkMembers.map((member, index) => (
              <GlassCard
                key={member.name}
                className="p-6 animate-fade-up"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                {/* Avatar Placeholder */}
                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-gold/20 to-purple-mid border border-gold/30 flex items-center justify-center">
                  <span className="text-lg font-display text-gold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <h3 className="text-lg font-display font-normal text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gold mb-2">{member.expertise}</p>
                <p className="text-xs text-muted-foreground">{member.geography}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CEN;
