import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { Layers, Package, FileText } from 'lucide-react';
import { useSiteContent } from '../../content/SiteContentContext';

const CustomizationOptions: React.FC = () => {
  const { pages } = useSiteContent();
  const content = pages.solutions.customization;
  const cardIcons = [Layers, Package, FileText];

  return (
    <div>
      <Section light>
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">{content.intro.title}</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{content.intro.description}</p>
            <p className="text-sm text-slate-500 mt-4 max-w-3xl mx-auto">{content.intro.note}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {content.cards.map((card, index) => {
              const Icon = cardIcons[index] ?? Layers;
              return (
                <div key={`${card.title}-${index}`} className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all bg-white">
                    <div className="h-48 bg-slate-100">
                        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <Icon className="text-brand" size={28} />
                            <h3 className="text-xl font-bold">{card.title}</h3>
                        </div>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            {card.items.map((item, itemIndex) => (
                              <li key={`${item.text}-${itemIndex}`} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>
                                  {item.label ? <strong>{item.label}:</strong> : null} {item.text}
                                </span>
                              </li>
                            ))}
                        </ul>
                        {card.note ? <p className="text-xs text-slate-500 mt-4">{card.note}</p> : null}
                    </div>
                </div>
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

export default CustomizationOptions;
