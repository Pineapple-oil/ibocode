import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { Link } from 'react-router-dom';
import { PenTool, Box, Settings, Sliders, ArrowRight, FileText, TrendingUp } from 'lucide-react';
import { useSiteContent } from '../../content/SiteContentContext';

const OemOdmIndex: React.FC = () => {
  const { pages } = useSiteContent();
  const content = pages.solutions.index;
  const supportIcons = [Box, Sliders, PenTool, TrendingUp, FileText, Settings];

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
                 <h2 className="text-3xl font-bold mb-4">{content.engagementModels.title}</h2>
                 <p className="text-slate-600 max-w-2xl mx-auto">{content.engagementModels.description}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-20">
                {content.engagementModels.cards.map((card, index) => (
                  <div key={`${card.title}-${index}`} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                      <div className="h-48 bg-slate-100 relative">
                          <img src={card.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={card.title}/>
                          {card.badge ? (
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                              {card.badge}
                            </div>
                          ) : null}
                      </div>
                      <div className="p-8">
                          <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                          <p className="text-slate-600 mb-4">{card.description}</p>
                          <span className="text-brand-text text-sm font-bold">{card.bestFor}</span>
                      </div>
                  </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                     <h2 className="text-3xl font-bold mb-6">{content.support.title}</h2>
                     <div className="grid gap-6">
                        {content.support.items.map((item, index) => {
                          const Icon = supportIcons[index] ?? Box;
                          return (
                            <div key={`${item.title}-${index}`} className="flex gap-4 p-4 bg-slate-50 rounded-lg">
                                 <div className="bg-white p-3 rounded-full h-fit shadow-sm"><Icon size={24} className="text-brand"/></div>
                                 <div>
                                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                    <p className="text-slate-600 text-sm">{item.description}</p>
                                 </div>
                            </div>
                          );
                        })}
                     </div>
                     <div className="flex gap-6 mt-8">
                        {content.support.links.map((link, index) => (
                          <Link key={`${link.label}-${index}`} to={link.href} className="text-brand-text font-bold hover:underline flex items-center gap-2">
                            {link.label} <ArrowRight size={16}/>
                          </Link>
                        ))}
                    </div>
                </div>
                <img src={content.support.image} className="rounded-2xl shadow-xl w-full object-cover h-[600px]" alt={content.support.title} />
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 md:p-12 mb-12">
                <h2 className="text-2xl font-bold mb-4">{content.buyerWins.title}</h2>
                <p className="text-slate-600 mb-6 max-w-3xl">{content.buyerWins.description}</p>
                <ul className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                    {content.buyerWins.items.map((item, index) => (
                      <li key={`${item}-${index}`} className="flex items-start gap-3">
                        <ArrowRight size={16} className="text-brand mt-1" /> {item}
                      </li>
                    ))}
                </ul>
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

export default OemOdmIndex;
