import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Target, Users } from 'lucide-react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';

const AboutIndex: React.FC = () => {
  return (
    <div className="bg-paper text-ink">
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/factory_team/1920/600"
            alt="About COSUN"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 pattern-grid opacity-25" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-brand/80">About</p>
          <h1 className="font-display text-4xl md:text-5xl mt-4 mb-6">About COSUN</h1>
          <p className="text-lg text-slate-200 max-w-3xl">
            Behind every reliable accessory is a manufacturer that respects the buyer risk. Since 2010, COSUN has focused on one
            mission: make in-vehicle accessories that feel right, perform consistently, and scale cleanly.
          </p>
        </div>
      </section>

      <Section>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Explore</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-3">Three ways to know us fast</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-ink/10 rounded-2xl overflow-hidden hover:shadow-lg transition-all group">
            <div className="h-48 overflow-hidden bg-slate-100">
              <img
                src="https://picsum.photos/seed/profile/800/600"
                alt="Company Profile"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <Target className="text-brand mb-4" size={30} />
              <h3 className="font-display text-xl mb-2">Company Profile</h3>
              <p className="text-slate-600 mb-6">Our story, focus, and mission built for global B2B buyers who value predictability.</p>
              <Link to="/about/profile" className="text-brand-text font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Read Profile <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="bg-white border border-ink/10 rounded-2xl overflow-hidden hover:shadow-lg transition-all group">
            <div className="h-48 overflow-hidden bg-slate-100">
              <img
                src="https://picsum.photos/seed/whyus/800/600"
                alt="Why Us"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <Shield className="text-brand mb-4" size={30} />
              <h3 className="font-display text-xl mb-2">Why Us</h3>
              <p className="text-slate-600 mb-6">What buyers gain when they partner with COSUN, from repeatability to compliance planning.</p>
              <Link to="/about/why-us" className="text-brand-text font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                See Advantages <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="bg-white border border-ink/10 rounded-2xl overflow-hidden hover:shadow-lg transition-all group">
            <div className="h-48 overflow-hidden bg-slate-100">
              <img
                src="https://picsum.photos/seed/team/800/600"
                alt="Our Team"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <Users className="text-brand mb-4" size={30} />
              <h3 className="font-display text-xl mb-2">Our Team</h3>
              <p className="text-slate-600 mb-6">Practical, fast communication and execution with clear handoffs.</p>
              <Link to="/about/team" className="text-brand-text font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Meet the Team <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <CtaBlock
          title="Next Step"
          primary={{
            title: "Download a Company Introduction Pack",
            description:
              "Tell us your target market, quantity, and customization needs. We respond within 24 hours with a practical quote and clear next steps.",
            linkLabel: "Request the Pack",
            href: "/contact",
          }}
          secondary={{
            title: "Get Samples",
            description: "Verify fit, finish, and performance before you scale. Stock samples or branded samples are both available.",
            linkLabel: "Request Samples",
            href: "/contact",
          }}
        />
      </Section>
    </div>
  );
};

export default AboutIndex;
