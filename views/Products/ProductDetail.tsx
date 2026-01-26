'use client';

import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useQuoteModal } from '../../components/QuoteModal';
import { useSiteContent } from '../../content/SiteContentContext';

const ProductDetail: React.FC = () => {
  const { pages } = useSiteContent();
  const content = pages.products.detail;
  const quoteModal = useQuoteModal();
  const [activeImage, setActiveImage] = useState(content.gallery[0] || '');

  useEffect(() => {
    if (content.gallery.length) {
      setActiveImage(content.gallery[0]);
    }
  }, [content.gallery]);

  const isExternalLink = (href: string) => /^https?:\/\//i.test(href);
  const primaryUsesModal = content.primaryCta.action === 'quoteModal' && quoteModal;
  const secondaryUsesModal = content.secondaryCta.action === 'quoteModal' && quoteModal;

  return (
    <div className="bg-paper text-ink">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          {content.breadcrumbs.map((crumb, index) => {
            const isLast = index === content.breadcrumbs.length - 1;
            const label = crumb.label;
            const href = crumb.href;

            return (
              <React.Fragment key={`${label}-${index}`}>
                {href ? (
                  isExternalLink(href) ? (
                    <a href={href} className="hover:text-ink">
                      {label}
                    </a>
                  ) : (
                    <Link href={href} className="hover:text-ink">
                      {label}
                    </Link>
                  )
                ) : (
                  <span className="text-slate-400">{label}</span>
                )}
                {!isLast && <ChevronRight size={14} />}
              </React.Fragment>
            );
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10">
          <div>
            <div className="relative rounded-2xl overflow-hidden bg-white border border-ink/10 shadow-sm">
              {activeImage ? (
                <img src={activeImage} alt={content.title} className="w-full h-[360px] md:h-[420px] object-cover" />
              ) : null}
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 mt-4">
              {content.gallery.map((img) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActiveImage(img)}
                  className={`rounded-xl overflow-hidden border ${activeImage === img ? 'border-brand' : 'border-ink/10'}`}
                >
                  <img src={img} alt={content.title} className="w-full h-16 object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white border border-ink/10 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h1 className="font-display text-2xl md:text-3xl text-ink">{content.title}</h1>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{content.itemNumber}</span>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              {content.details.map((detail) => (
                <div key={detail.label} className="flex items-start justify-between gap-4 border-b border-slate-100 pb-2">
                  <span className="text-slate-500">{detail.label}</span>
                  <span className="text-ink font-medium text-right">{detail.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              {primaryUsesModal ? (
                <button
                  type="button"
                  onClick={() => quoteModal?.open()}
                  className="flex-1 bg-brand text-ink font-semibold py-3 rounded-full"
                >
                  {content.primaryCta.label}
                </button>
              ) : content.primaryCta.href ? (
                isExternalLink(content.primaryCta.href) ? (
                  <a href={content.primaryCta.href} className="flex-1 bg-brand text-ink font-semibold py-3 rounded-full text-center">
                    {content.primaryCta.label}
                  </a>
                ) : (
                  <Link href={content.primaryCta.href} className="flex-1 bg-brand text-ink font-semibold py-3 rounded-full text-center">
                    {content.primaryCta.label}
                  </Link>
                )
              ) : (
                <span className="flex-1 bg-brand text-ink font-semibold py-3 rounded-full text-center">
                  {content.primaryCta.label}
                </span>
              )}
              {secondaryUsesModal ? (
                <button
                  type="button"
                  onClick={() => quoteModal?.open()}
                  className="flex-1 bg-slate-900 text-white font-semibold py-3 rounded-full"
                >
                  {content.secondaryCta.label}
                </button>
              ) : content.secondaryCta.href ? (
                isExternalLink(content.secondaryCta.href) ? (
                  <a href={content.secondaryCta.href} className="flex-1 bg-slate-900 text-white font-semibold py-3 rounded-full text-center">
                    {content.secondaryCta.label}
                  </a>
                ) : (
                  <Link href={content.secondaryCta.href} className="flex-1 bg-slate-900 text-white font-semibold py-3 rounded-full text-center">
                    {content.secondaryCta.label}
                  </Link>
                )
              ) : (
                <span className="flex-1 bg-slate-900 text-white font-semibold py-3 rounded-full text-center">
                  {content.secondaryCta.label}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white border border-ink/10 rounded-2xl p-8 shadow-sm">
          <h2 className="font-display text-2xl mb-4">{content.description.title}</h2>
          <p className="text-sm text-slate-600 leading-7 max-w-3xl">{content.description.text}</p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {content.description.images.map((img) => (
              <img key={img} src={img} alt={content.description.title} className="rounded-2xl object-cover h-48 w-full" />
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg">{content.features.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc list-inside">
                {content.features.items.map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">{content.oemSupport.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc list-inside">
                {content.oemSupport.items.map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-ink text-white rounded-2xl p-8 md:p-10 shadow-[0_25px_60px_rgba(15,23,42,0.4)]">
          <h3 className="font-display text-2xl md:text-3xl mb-6">{content.bottomCta.title}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {content.bottomCta.items.map((item, index) => {
              const usesModal = item.action === 'quoteModal' && quoteModal;
              const iconText = item.icon || '>';
              const iconClassName = index === 0 ? 'bg-brand text-ink' : 'bg-white/10 text-white';

              return (
                <div key={`${item.title}-${index}`} className="flex gap-4">
                  <div className={`w-10 h-10 rounded-full ${iconClassName} flex items-center justify-center font-bold`}>{iconText}</div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-white/70 mt-1">{item.description}</p>
                    {usesModal ? (
                      <button type="button" onClick={() => quoteModal?.open()} className="text-brand font-semibold text-sm mt-2">
                        {item.linkLabel} &gt;
                      </button>
                    ) : item.href ? (
                      isExternalLink(item.href) ? (
                        <a href={item.href} className="text-white/80 font-semibold text-sm mt-2 inline-block">
                          {item.linkLabel} &gt;
                        </a>
                      ) : (
                        <Link href={item.href} className="text-white/80 font-semibold text-sm mt-2 inline-block">
                          {item.linkLabel} &gt;
                        </Link>
                      )
                    ) : (
                      <span className="text-white/80 font-semibold text-sm mt-2 inline-block">{item.linkLabel}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;


