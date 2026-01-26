import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { useSiteContent } from '../../content/SiteContentContext';

const QualityControl: React.FC = () => {
  const { pages } = useSiteContent();
  const content = pages.quality.process;

  return (
    <div>
      <Section light>
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">{content.intro.title}</h1>
                <p className="text-xl text-slate-600 mb-8">{content.intro.description}</p>
                <div className="space-y-8">
                    {content.steps.map((step, index) => (
                      <div key={`${step.title}-${index}`} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 border-l-4 border-brand">
                          <h2 className="text-2xl font-bold text-slate-900">{step.title}</h2>
                          <p className="text-slate-600 mt-2">{step.description}</p>
                      </div>
                    ))}
                </div>
            </div>
            <div className="grid gap-6">
                 {content.images.map((image, index) => (
                   <img key={`${image}-${index}`} src={image} className="rounded-xl shadow-lg w-full h-64 object-cover" alt={`QC ${index + 1}`}/>
                 ))}
            </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-xl text-center border border-slate-100">
            <h3 className="font-bold text-2xl mb-4">{content.note.title}</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">{content.note.description}</p>
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

export default QualityControl;
