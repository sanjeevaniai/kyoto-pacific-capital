import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";

const teamMembers = [
  {
    name: "Ankur Sahu",
    title: "Managing Partner",
    bio: "Two decades of experience at Goldman Sachs, where he helped build and lead the private equity business across Asia. Ankur brings deep expertise in cross-border transactions and value creation.",
    image: null,
  },
];

const Team = () => {
  return (
    <Layout>
      <section className="pb-24 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-light text-foreground mb-6 animate-fade-up">
              Our Team
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-gold to-gold-light mb-8 animate-fade-up delay-100" />
            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
              Experienced investors and operators who understand what it takes to build enduring businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <GlassCard
                key={member.name}
                className="p-8 text-center animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Avatar Placeholder */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-purple-mid border-2 border-gold/30 flex items-center justify-center">
                  <span className="text-3xl font-display text-gold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <h3 className="text-xl font-display font-normal text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gold mb-4">{member.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
