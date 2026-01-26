'use client';

import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { CheckCircle, ClipboardList, Factory, FileText, Globe, ShieldCheck, Users, Wrench } from 'lucide-react';
import { useSiteContent } from '../../content/SiteContentContext';

const CompanyProfile: React.FC = () => {
  const { pages } = useSiteContent();
  const content = pages.about.profile;
  const advantageIcons = [Factory, Users, Wrench];
  const complianceIcons = [ShieldCheck, FileText, Globe, ClipboardList];

  return (
    <div className="bg-paper text-ink">
      <Section light>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">{content.hero.title}</h1>
            <div className="prose prose-lg text-slate-600">
              <p className="lead text-xl font-medium text-slate-800 mb-4">
                {content.hero.lead}
              </p>
              {content.hero.paragraphs.map((paragraph, index) => (
                <p key={`${paragraph}-${index}`} className={index < content.hero.paragraphs.length - 1 ? 'mb-4' : undefined}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
             <img src={content.hero.image} alt={content.hero.title} className="absolute inset-0 w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-lg">{content.hero.imageOverlayTitle}</p>
                  <p className="text-sm opacity-90">{content.hero.imageOverlaySubtitle}</p>
                </div>
             </div>
          </div>
        </div>
          
        <div className="grid md:grid-cols-2 gap-12 mb-16">
             <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-4"><Globe size={24} className="text-brand"/> {content.mission.title}</h3>
                  <p className="text-slate-700 text-lg">{content.mission.description}</p>
                </div>
                <img src={content.mission.image} alt={content.mission.title} className="mt-8 rounded-lg w-full object-cover h-48"/>
             </div>
             <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-4"><Factory size={24} className="text-brand"/> {content.vision.title}</h3>
                  <p className="text-slate-700 text-lg">{content.vision.description}</p>
                </div>
                <img src={content.vision.image} alt={content.vision.title} className="mt-8 rounded-lg w-full object-cover h-48"/>
             </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
               <div className="grid grid-cols-2 gap-4">
                  {content.products.gallery.map((image, index) => (
                    <img
                      key={`${image}-${index}`}
                      src={image}
                      className={`rounded-lg shadow-sm w-full h-48 object-cover ${index % 2 === 1 ? 'translate-y-4' : ''}`}
                    />
                  ))}
               </div>
            </div>
            <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{content.products.title}</h2>
                <p className="text-lg text-slate-600 mb-6">{content.products.description}</p>
                <ul className="space-y-3">
                  {content.products.items.map((item, index) => (
                    <li key={`${item}-${index}`} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-brand rounded-full flex-shrink-0"></span>
                        <span className="text-slate-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
            </div>
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-8 lg:p-12 mb-16">
           <h2 className="text-3xl font-bold mb-8 text-center">{content.audience.title}</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {content.audience.items.map((item, index) => (
               <div key={`${item.title}-${index}`} className="flex items-start gap-3">
                 <CheckCircle size={24} className="text-brand mt-1 flex-shrink-0"/>
                 <div>
                   <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                   <p className="text-slate-300 text-sm">{item.description}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">{content.whyCosun.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {content.whyCosun.cards.map((card, index) => {
              const Icon = advantageIcons[index] ?? Factory;
              return (
                <div key={`${card.title}-${index}`} className="bg-slate-50 border border-slate-100 rounded-xl p-6">
                  <Icon size={24} className="text-brand mb-4" />
                  <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                  <ul className="text-sm text-slate-600 space-y-2">
                    {card.items.map((item, itemIndex) => (
                      <li key={`${item}-${itemIndex}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{content.compliance.title}</h3>
            <p className="text-slate-600 mb-6">{content.compliance.description}</p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600">
              {content.compliance.items.map((item, index) => {
                const Icon = complianceIcons[index] ?? ShieldCheck;
                return (
                  <div key={`${item}-${index}`} className="flex items-start gap-3">
                    <Icon size={18} className="text-brand mt-1" /> {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{content.howWeWork.title}</h3>
            <ol className="space-y-3 text-sm text-slate-600">
              {content.howWeWork.steps.map((step, index) => (
                <li key={`${step}-${index}`}>
                  <span className="font-semibold text-slate-800">{String(index + 1).padStart(2, '0')}.</span> {step}
                </li>
              ))}
            </ol>
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

export default CompanyProfile;
