import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { useSiteContent } from '../../content/SiteContentContext';

const ProductionLines: React.FC = () => {
  const { pages } = useSiteContent();
  const content = pages.manufacturing.lines;
  const midpoint = Math.ceil(content.processControl.items.length / 2);
  const leftItems = content.processControl.items.slice(0, midpoint);
  const rightItems = content.processControl.items.slice(midpoint);

  return (
    <div>
      <Section light>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">{content.intro.title}</h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">{content.intro.description}</p>
            </div>
             <img src={content.intro.image} alt={content.intro.title} className="rounded-xl shadow-lg w-full h-80 object-cover" />
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-8 lg:p-12 shadow-sm mb-12">
            <h2 className="text-2xl font-bold mb-8">{content.processControl.title}</h2>
            <div className="grid md:grid-cols-2 gap-8 relative">
                 {/* Connecting line for desktop could go here, but keeping it simple for now */}
                <div className="space-y-8">
                    {leftItems.map((item, index) => (
                      <div key={`${item.title}-${index}`} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 text-brand-text font-bold text-xl flex items-center justify-center rounded-lg">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                          <p className="text-slate-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="space-y-8">
                    {rightItems.map((item, index) => (
                      <div key={`${item.title}-${index}`} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 text-brand-text font-bold text-xl flex items-center justify-center rounded-lg">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                          <p className="text-slate-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
             {content.gallery.map((image, index) => (
               <img key={`${image}-${index}`} src={image} alt={`Production line ${index + 1}`} className="rounded-lg shadow-sm w-full h-48 object-cover"/>
             ))}
        </div>

        <div className="p-8 bg-yellow-50 rounded-xl border border-yellow-100">
            <h3 className="font-bold text-yellow-900 text-lg mb-2">{content.highlight.title}</h3>
            <p className="text-yellow-800">{content.highlight.description}</p>
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

export default ProductionLines;
