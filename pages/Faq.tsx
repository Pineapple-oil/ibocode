import React from 'react';
import { Section } from '../components/Section';
import { CtaBlock } from '../components/CtaBlock';
import { HelpCircle } from 'lucide-react';
import { useSiteContent } from '../content/SiteContentContext';

const Faq: React.FC = () => {
  const { pages } = useSiteContent();
  const content = pages.faq;

  return (
    <div>
      <Section light>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <img
                src={content.intro.image}
                className="rounded-xl shadow-lg w-full h-auto object-cover mb-8"
                alt={content.intro.title}
              />
              <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <HelpCircle className="text-brand" size={32} /> {content.intro.title}
                </h1>
                <p className="text-lg text-slate-600">{content.intro.description}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-6">
              {content.items.map((item, index) => (
                <div
                  key={`${item.question}-${index}`}
                  className="bg-slate-50 p-6 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CtaBlock title={content.cta.title} primary={content.cta.primary} secondary={content.cta.secondary} />
      </Section>
    </div>
  );
};

export default Faq;
