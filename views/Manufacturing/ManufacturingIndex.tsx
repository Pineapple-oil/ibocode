'use client';

import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import Link from 'next/link';
import { Factory, Truck, Settings, PenTool, ArrowRight } from 'lucide-react';
import { useSiteContent } from '../../content/SiteContentContext';

const ManufacturingIndex: React.FC = () => {
  const { pages } = useSiteContent();
  const content = pages.manufacturing.index;
  const capabilityIcons = [Factory, Settings, Truck, PenTool];

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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{content.capabilities.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{content.capabilities.description}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {content.capabilities.cards.map((card, index) => {
            const Icon = capabilityIcons[index] ?? Factory;
            return (
              <Link key={`${card.title}-${index}`} href={card.href} className="group block bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
                <div className="h-64 relative overflow-hidden">
                    <img src={card.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={card.title}/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                        <Icon size={48} className="text-brand mb-2" />
                    </div>
                </div>
                <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-700 transition-colors flex items-center justify-between">
                        {card.title} <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0"/>
                    </h3>
                    <p className="text-slate-600 text-lg">{card.description}</p>
                </div>
              </Link>
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

export default ManufacturingIndex;


