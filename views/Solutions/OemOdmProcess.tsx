'use client';

import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { useSiteContent } from '../../content/SiteContentContext';

const OemOdmProcess: React.FC = () => {
  const { pages } = useSiteContent();
  const content = pages.solutions.process;

  return (
    <div>
      <Section light>
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">{content.intro.title}</h1>
            <p className="text-xl text-slate-600 mb-8">{content.intro.description}</p>
            <div className="space-y-8">
              {content.intro.steps.map((item) => (
                <div key={item.step} className="flex gap-6 relative">
                  {item.step !== content.intro.steps.length && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-slate-200 -ml-px h-full"></div>
                  )}

                  <div className="flex-shrink-0 w-12 h-12 bg-brand text-slate-900 rounded-full flex items-center justify-center font-bold text-lg shadow-sm z-10">
                    {item.step}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sticky top-24">
            <img src={content.sideImage} alt={content.intro.title} className="rounded-xl shadow-xl w-full h-auto object-cover" />

            <div className="bg-slate-50 p-8 rounded-xl mt-8 border border-slate-100">
              <h2 className="text-2xl font-bold mb-4">{content.rfqChecklist.title}</h2>
              <ul className="list-disc pl-5 space-y-3 text-slate-600">
                {content.rfqChecklist.items.map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <CtaBlock title={content.cta.title} primary={content.cta.primary} secondary={content.cta.secondary} />
      </Section>
    </div>
  );
};

export default OemOdmProcess;
