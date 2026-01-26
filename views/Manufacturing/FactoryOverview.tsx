'use client';

import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { CheckCircle } from 'lucide-react';
import { useSiteContent } from '../../content/SiteContentContext';

const FactoryOverview: React.FC = () => {
    const { pages } = useSiteContent();
    const content = pages.manufacturing.factory;

    return (
        <div>
            <Section light>
                <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
                    <div>
                        <h1 className="text-4xl font-bold text-slate-900 mb-6">{content.intro.title}</h1>
                        <div className="prose prose-lg text-slate-600">
                            <p className="text-xl leading-relaxed">
                                {content.intro.lead}
                            </p>
                            <p>{content.intro.paragraph}</p>
                        </div>
                        <div className="mt-8 space-y-3">
                            {content.intro.highlights.map((item, index) => (
                                <div key={`${item}-${index}`} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                    <CheckCircle size={20} className="text-brand mt-1 flex-shrink-0" /> <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <img src={content.images.main} alt={content.intro.title} className="rounded-xl shadow-lg w-full h-64 object-cover" />
                        <div className="grid grid-cols-2 gap-4">
                            {content.images.secondary.map((image, index) => (
                              <img key={`${image}-${index}`} src={image} alt={content.intro.title} className="rounded-xl shadow-md w-full h-40 object-cover" />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">{content.lines.title}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            {content.lines.left.map((line, index) => (
                                <div key={`${line.title}-${index}`} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand">
                                    <h3 className="font-bold text-lg text-slate-900">{line.title}</h3>
                                    <p className="text-sm text-slate-600">{line.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-6">
                            {content.lines.right.map((line, index) => {
                              const accentClass = line.accent === 'green' ? 'border-green-600' : 'border-brand';
                              return (
                                <div key={`${line.title}-${index}`} className={`bg-white p-6 rounded-lg shadow-sm border-l-4 ${accentClass}`}>
                                    <h3 className="font-bold text-lg text-slate-900">{line.title}</h3>
                                    <p className="text-sm text-slate-600">{line.description}</p>
                                </div>
                              );
                            })}
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">{content.qualityDiscipline.title}</h2>
                        <ul className="space-y-3 text-slate-600">
                            {content.qualityDiscipline.items.map((item, index) => (
                              <li key={`${item}-${index}`} className="flex items-start gap-3">
                                <CheckCircle size={18} className="text-brand mt-1" /> {item}
                              </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white rounded-2xl p-8 border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">{content.expectations.title}</h2>
                        <ul className="space-y-3 text-slate-600">
                            {content.expectations.items.map((item, index) => (
                              <li key={`${item}-${index}`} className="flex items-start gap-3">
                                <CheckCircle size={18} className="text-brand mt-1" /> {item}
                              </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">{content.packing.title}</h2>
                        <p className="text-slate-600 text-lg mb-6">{content.packing.description}</p>
                        <ul className="space-y-2 text-slate-600">
                            {content.packing.items.map((item, index) => (
                              <li key={`${item}-${index}`} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-brand rounded-full"></div> {item}
                              </li>
                            ))}
                        </ul>
                    </div>
                    <img src={content.packing.image} alt={content.packing.title} className="rounded-xl shadow-lg w-full h-64 object-cover" />
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

export default FactoryOverview;
