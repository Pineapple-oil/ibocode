'use client';

import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import Link from 'next/link';
import { ShieldCheck, Activity, FileCheck, ArrowRight } from 'lucide-react';
import { useSiteContent } from '../../content/SiteContentContext';

const QualityIndex: React.FC = () => {
  const { pages } = useSiteContent();
  const content = pages.quality.index;
  const cardIcons = [Activity, ShieldCheck, FileCheck];

  return (
    <div>
        <div className="relative bg-slate-900 text-white py-20 lg:py-28">
             <div className="absolute inset-0 overflow-hidden">
                <img 
                    src={content.hero.image} 
                    alt={content.hero.title} 
                    className="w-full h-full object-cover opacity-20"
                />
             </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">{content.hero.title}</h1>
            <p className="text-xl text-slate-300 max-w-3xl">{content.hero.description}</p>
            </div>
        </div>

        <Section light>
            <div className="grid md:grid-cols-3 gap-8">
                 {content.cards.map((card, index) => {
                   const Icon = cardIcons[index] ?? Activity;
                   return (
                     <Link key={`${card.title}-${index}`} href={card.href} className="block bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                        <div className="h-48 bg-slate-100 relative">
                            <img src={card.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={card.title}/>
                        </div>
                        <div className="p-8">
                            <Icon className="text-brand mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                            <p className="text-slate-600 mb-6">{card.description}</p>
                             <span className="text-yellow-700 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                               {card.linkLabel} <ArrowRight size={16}/>
                             </span>
                        </div>
                     </Link>
                   );
                 })}
            </div>

            <div className="mt-16 bg-slate-50 p-8 rounded-xl text-center max-w-4xl mx-auto">
                <p className="text-xl text-slate-800 font-medium">{content.highlight}</p>
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

export default QualityIndex;


