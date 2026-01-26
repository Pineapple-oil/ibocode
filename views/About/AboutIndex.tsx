'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Target, Users } from 'lucide-react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { useSiteContent } from '../../content/SiteContentContext';

const AboutIndex: React.FC = () => {
  const { pages } = useSiteContent();
  const content = pages.about.index;
  const cardIcons = [Target, Shield, Users];

  return (
    <div className="bg-paper text-ink">
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <img
            src={content.hero.image}
            alt={content.hero.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 pattern-grid opacity-25" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-brand/80">{content.hero.eyebrow}</p>
          <h1 className="font-display text-4xl md:text-5xl mt-4 mb-6">{content.hero.title}</h1>
          <p className="text-lg text-slate-200 max-w-3xl">{content.hero.description}</p>
        </div>
      </section>

      <Section>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{content.intro.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-3">{content.intro.title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {content.intro.cards.map((card, index) => {
            const Icon = cardIcons[index] ?? Target;
            return (
              <div key={`${card.title}-${index}`} className="bg-white border border-ink/10 rounded-2xl overflow-hidden hover:shadow-lg transition-all group">
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <Icon className="text-brand mb-4" size={30} />
                  <h3 className="font-display text-xl mb-2">{card.title}</h3>
                  <p className="text-slate-600 mb-6">{card.description}</p>
                  <Link href={card.linkHref} className="text-brand-text font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    {card.linkLabel} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <CtaBlock
          title={content.cta.title}
          primary={content.cta.primary}
          secondary={content.cta.secondary}
        />
      </Section>
    </div>
  );
};

export default AboutIndex;


