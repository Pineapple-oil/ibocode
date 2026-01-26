'use client';

import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { useSiteContent } from '../../content/SiteContentContext';

const Certifications: React.FC = () => {
  const { pages } = useSiteContent();
  const content = pages.quality.certifications;

  return (
    <div>
      <Section light>
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">{content.intro.title}</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{content.intro.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
            {content.cards.map((card, index) => (
              <div key={`${card.title}-${index}`} className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all flex flex-col md:flex-row gap-6">
                <div className="w-24 h-24 bg-slate-100 rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-slate-400 text-xl">
                  {card.label}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">{card.title}</h2>
                  <p className="text-slate-600">{card.description}</p>
                </div>
              </div>
            ))}
        </div>
        
        <div className="relative rounded-2xl overflow-hidden h-64 bg-slate-900 flex items-center justify-center">
             <img src={content.callout.image} className="absolute inset-0 w-full h-full object-cover opacity-30" alt={content.callout.title}/>
             <div className="relative z-10 text-center px-4">
                 <h3 className="text-2xl font-bold text-white mb-2">{content.callout.title}</h3>
                 <p className="text-slate-300">{content.callout.description}</p>
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

export default Certifications;
