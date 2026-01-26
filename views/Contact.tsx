'use client';

import React from 'react';
import { Section } from '../components/Section';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useSiteContent } from '../content/SiteContentContext';

const Contact: React.FC = () => {
  const { pages } = useSiteContent();
  const content = pages.contact;
  const detailIcons = [Mail, Phone, MapPin];
  const isExternalLink = (href: string) => /^https?:\/\//i.test(href);

  return (
    <div>
      <div className="relative bg-slate-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img src={content.hero.image} className="w-full h-full object-cover opacity-20" alt={content.hero.title} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{content.hero.title}</h1>
          <p className="text-xl text-slate-300">{content.hero.description}</p>
          <p className="text-sm text-slate-400 mt-4">{content.hero.note}</p>
        </div>
      </div>

      <Section light>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{content.rfq.title}</h2>
            <div className="bg-white p-8 border border-slate-200 rounded-xl shadow-lg">
              <p className="mb-4 text-sm text-slate-500">{content.rfq.note}</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-8 text-sm">
                {content.rfq.items.map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>
                ))}
              </ul>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={content.rfq.form.namePlaceholder}
                    className="w-full p-3 border border-gray-300 rounded focus:border-brand outline-none focus:ring-1 focus:ring-brand"
                  />
                  <input
                    type="email"
                    placeholder={content.rfq.form.emailPlaceholder}
                    className="w-full p-3 border border-gray-300 rounded focus:border-brand outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
                <input
                  type="text"
                  placeholder={content.rfq.form.productPlaceholder}
                  className="w-full p-3 border border-gray-300 rounded focus:border-brand outline-none focus:ring-1 focus:ring-brand"
                />
                <textarea
                  placeholder={content.rfq.form.messagePlaceholder}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded focus:border-brand outline-none focus:ring-1 focus:ring-brand"
                ></textarea>
                <button className="bg-brand text-slate-900 px-8 py-4 rounded font-bold hover:bg-brand-hover w-full transition-colors text-lg shadow-md">
                  {content.rfq.form.submitLabel}
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{content.details.title}</h2>
              <div className="space-y-6">
                {content.details.items.map((item, index) => {
                  const Icon = detailIcons[index] ?? Mail;
                  return (
                    <div key={`${item.title}-${index}`} className="flex items-start gap-4">
                      <div className="bg-yellow-100 p-4 rounded-full text-brand-text"><Icon /></div>
                      <div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-slate-600 text-lg">{item.value}</p>
                        {item.note ? <p className="text-xs text-slate-500 mt-1">{item.note}</p> : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex-grow rounded-xl overflow-hidden shadow-lg min-h-[300px] relative">
              <img src={content.map.image} alt={content.hero.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <MapPin size={48} className="text-brand drop-shadow-lg" fill="currentColor" />
              </div>
            </div>

            <div className="mt-8 bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-lg mb-2">{content.samples.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{content.samples.description}</p>
              {isExternalLink(content.samples.buttonHref) ? (
                <a
                  href={content.samples.buttonHref}
                  className="text-yellow-700 font-bold border-2 border-yellow-600 px-6 py-2 rounded hover:bg-yellow-50 transition-colors inline-block"
                >
                  {content.samples.buttonLabel}
                </a>
              ) : (
                <Link
                  href={content.samples.buttonHref}
                  className="text-yellow-700 font-bold border-2 border-yellow-600 px-6 py-2 rounded hover:bg-yellow-50 transition-colors inline-block"
                >
                  {content.samples.buttonLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;


