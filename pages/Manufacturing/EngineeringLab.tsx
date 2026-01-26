import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { useSiteContent } from '../../content/SiteContentContext';

const EngineeringLab: React.FC = () => {
  const { pages } = useSiteContent();
  const content = pages.manufacturing.engineering;

  return (
    <div>
      <Section light>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">{content.intro.title}</h1>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">{content.intro.description}</p>
            <img src={content.intro.image} alt={content.intro.title} className="rounded-xl shadow-lg w-full h-64 object-cover" />
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h2 className="text-2xl font-bold mb-6">{content.supportAreas.title}</h2>
            <ul className="space-y-6">
              {content.supportAreas.items.map((item, index) => (
                <li key={`${item.title}-${index}`} className="pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                  <strong className="block text-lg text-slate-900 mb-1">{item.title}</strong>
                  <span className="text-slate-600">{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold mb-4">{content.whatYouSend.title}</h2>
            <ul className="space-y-3 list-disc pl-5 text-slate-600">
              {content.whatYouSend.items.map((item, index) => (
                <li key={`${item}-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
          <img src={content.labImage} alt={content.intro.title} className="rounded-xl shadow-lg w-full h-full object-cover min-h-[300px]" />
        </div>

        <CtaBlock title={content.cta.title} primary={content.cta.primary} secondary={content.cta.secondary} />
      </Section>
    </div>
  );
};

export default EngineeringLab;
