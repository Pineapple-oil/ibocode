'use client';

import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { useSiteContent } from '../../content/SiteContentContext';

const Reliability: React.FC = () => {
  const { pages } = useSiteContent();
  const content = pages.quality.reliability;
  const checksTitle = content.checksTitle || content.intro.title;

  return (
    <div>
      <Section light>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
             <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">{content.intro.title}</h1>
                <p className="text-xl text-slate-600 mb-8">{content.intro.description}</p>
                
                <div className="bg-white shadow-lg border border-slate-200 rounded-xl p-8">
                    <h2 className="text-2xl font-bold mb-6">{checksTitle}</h2>
                    <ul className="space-y-4">
                        {content.checks.map((item, index) => (
                            <li key={`${item.title}-${index}`} className="flex flex-col border-b border-slate-100 pb-3 last:border-0">
                                <span className="font-bold text-slate-900">{item.title}</span>
                                <span className="text-slate-600 text-sm">{item.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
             </div>
             <div className="grid grid-cols-2 gap-4">
                 {content.images.map((image, index) => (
                   <img
                     key={`${image}-${index}`}
                     src={image}
                     className={`rounded-xl shadow-lg w-full h-80 object-cover${index === 1 ? ' mt-12' : ''}`}
                     alt={`Test ${index + 1}`}
                   />
                 ))}
             </div>
        </div>

        <div className="p-8 bg-slate-900 text-white rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">{content.highlight.title}</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">{content.highlight.description}</p>
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

export default Reliability;
