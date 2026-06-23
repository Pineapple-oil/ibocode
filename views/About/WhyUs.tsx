'use client';

import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { TrendingDown, Clock, Repeat, MessageSquare } from 'lucide-react';
import { useSiteContent } from '../../content/SiteContentContext';

const WhyUs: React.FC = () => {
  const { pages } = useSiteContent();
  const content = pages.about.whyUs;
  const pillarIcons = [TrendingDown, Clock, Repeat, MessageSquare];

  return (
    <div>
       <Section light>
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">{content.intro.title}</h1>
            <p className="text-xl text-slate-600">{content.intro.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {content.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index] ?? TrendingDown;
              return (
                <div key={`${pillar.title}-${index}`} className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 flex flex-col md:flex-row">
                  <div className="md:w-2/5 h-48 md:h-auto bg-slate-100 relative">
                     <img src={pillar.image} alt={pillar.title} className="absolute inset-0 w-full h-full object-cover"/>
                  </div>
                  <div className="p-8 md:w-3/5">
                      <Icon className="text-brand mb-4" size={32} />
                      <h3 className="text-2xl font-bold mb-2">{pillar.title}</h3>
                      <h4 className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-wider">{pillar.subtitle}</h4>
                      <p className="text-slate-600 mb-4 text-sm">{pillar.description}</p>
                      <ul className="list-disc ml-5 text-slate-600 text-sm">
                        {pillar.items.map((item, itemIndex) => (
                          <li key={`${item}-${itemIndex}`}>{item}</li>
                        ))}
                      </ul>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl font-bold mb-6">{content.factoryStrength.title}</h2>
            <p className="text-slate-600 mb-6 max-w-3xl">{content.factoryStrength.description}</p>
            <ul className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                {content.factoryStrength.items.map((item, index) => (
                  <li key={`${item}-${index}`} className="flex items-start gap-3">
                    <TrendingDown size={18} className="text-brand mt-1" /> {item}
                  </li>
                ))}
            </ul>
            <p className="text-xs text-slate-500 mt-6">{content.factoryStrength.note}</p>
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl font-bold mb-6">{content.priceAdvantage.title}</h2>
            <p className="text-slate-300 mb-6 max-w-3xl">{content.priceAdvantage.description}</p>
            <ul className="grid md:grid-cols-2 gap-4 text-sm text-slate-200">
                {content.priceAdvantage.items.map((item, index) => (
                  <li key={`${item}-${index}`} className="flex items-start gap-3">
                    <Repeat size={18} className="text-blue-400 mt-1" /> {item}
                  </li>
                ))}
            </ul>
        </div>

        <div className="bg-slate-50 p-8 md:p-12 rounded-2xl relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6">{content.marketCompetitiveness.title}</h2>
                <p className="mb-8 text-slate-700 max-w-2xl">{content.marketCompetitiveness.description}</p>
                <div className="grid md:grid-cols-2 gap-8">
                    {content.marketCompetitiveness.cards.map((card, index) => (
                      <div key={`${card.title}-${index}`} className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-2">{card.title}</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                          {card.items.map((item, itemIndex) => (
                            <li key={`${item}-${itemIndex}`}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
            </div>
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

export default WhyUs;
