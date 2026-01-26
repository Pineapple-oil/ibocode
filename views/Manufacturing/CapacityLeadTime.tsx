'use client';

import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { useSiteContent } from '../../content/SiteContentContext';

const CapacityLeadTime: React.FC = () => {
  const { pages } = useSiteContent();
  const content = pages.manufacturing.capacity;

  return (
    <div>
      <Section light>
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
            <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">{content.intro.title}</h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">{content.intro.description}</p>
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-brand">
                    <h3 className="font-bold text-yellow-900 mb-2">{content.intro.promiseTitle}</h3>
                    <p className="text-yellow-800">{content.intro.promiseText}</p>
                </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl h-80 relative">
                 <img src={content.intro.image} alt={content.intro.title} className="absolute inset-0 w-full h-full object-cover" />
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold mb-6">{content.planningFactors.title}</h2>
                <ul className="list-disc pl-5 space-y-3 text-slate-600">
                    {content.planningFactors.items.map((item, index) => (
                      <li key={`${item.label}-${index}`}>
                        <strong className="text-slate-900">{item.label}:</strong> {item.text}
                      </li>
                    ))}
                </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold mb-6">{content.whatWeProvide.title}</h2>
                <ul className="list-disc pl-5 space-y-3 text-slate-600">
                    {content.whatWeProvide.items.map((item, index) => (
                      <li key={`${item}-${index}`}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="bg-slate-900 text-white p-8 lg:p-12 rounded-2xl mt-12 relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-8 text-white">{content.estimates.title}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {content.estimates.cards.map((card, index) => (
                      <div key={`${card.label}-${index}`} className="bg-slate-800 p-6 rounded-lg text-center border border-slate-700">
                        <div className="text-slate-400 text-sm mb-2 uppercase tracking-wide">{card.label}</div>
                        <div className="text-xl font-extrabold text-brand">{card.value}</div>
                      </div>
                    ))}
                </div>
                <p className="text-xs text-slate-400 mt-6 text-center opacity-70">{content.estimates.note}</p>
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

export default CapacityLeadTime;
