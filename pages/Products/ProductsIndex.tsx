import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuoteModal } from '../../components/QuoteModal';
import { useSiteContent } from '../../content/SiteContentContext';

const ProductsIndex: React.FC = () => {
  const quoteModal = useQuoteModal();
  const { pages } = useSiteContent();
  const content = pages.products.index;

  const isExternalLink = (href: string) => /^https?:\/\//i.test(href);

  return (
    <div className="bg-paper text-ink">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
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
                    <Link to={href} className="hover:text-ink">
                      {label}
                    </Link>
                  )
                ) : (
                  <span className={isLast ? 'text-slate-400' : undefined}>{label}</span>
                )}
                {!isLast && <ChevronRight size={14} />}
              </React.Fragment>
            );
          })}
        </div>
        <div className="mt-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <h1 className="font-display text-3xl md:text-4xl text-ink">{content.title}</h1>
            <p className="mt-3 text-slate-600 max-w-2xl">{content.description}</p>
          </div>
          <div className="text-xs text-slate-500 uppercase tracking-[0.2em]">{content.countLabel}</div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10">
          <aside className="space-y-6">
            <div className="bg-white border border-ink/10 rounded-2xl p-5 shadow-sm">
              <h3 className="text-xs uppercase tracking-[0.28em] text-slate-500 mb-4">Categories</h3>
              <ul className="space-y-3 text-sm">
                {content.categories.map((category, index) => (
                  <li
                    key={`${category.label}-${index}`}
                    className={`flex items-center justify-between ${category.active ? 'text-ink font-semibold' : 'text-slate-500 hover:text-ink transition-colors'}`}
                  >
                    {category.label}
                    {category.active ? <ChevronRight size={14} /> : null}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-ink/10 rounded-2xl p-5 shadow-sm">
              <h3 className="text-xs uppercase tracking-[0.28em] text-slate-500 mb-4">New Arrivals</h3>
              <div className="space-y-4">
                {content.newArrivals.map((item) => (
                  <div key={item.code} className="flex items-center gap-3">
                    <img src={item.image} alt={item.title} className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <p className="text-sm font-semibold text-ink">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.code}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {content.products.map((product) => (
              <div key={product.code} className="bg-white border border-ink/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                <div className="relative h-44 overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                  {product.badges.map((badge) => (
                    <span
                      key={badge}
                      className="absolute top-3 left-3 bg-brand text-ink text-[11px] font-semibold uppercase px-2 py-1 rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">{product.code}</p>
                  <h3 className="font-display text-lg text-ink">{product.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {isExternalLink(product.href) ? (
                    <a href={product.href} className="inline-flex items-center gap-2 text-brand-text text-sm font-semibold">
                      View Detail <ChevronRight size={14} />
                    </a>
                  ) : (
                    <Link to={product.href} className="inline-flex items-center gap-2 text-brand-text text-sm font-semibold">
                      View Detail <ChevronRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-ink text-white rounded-2xl p-8 md:p-10 shadow-[0_25px_60px_rgba(15,23,42,0.4)]">
          <h3 className="font-display text-2xl md:text-3xl mb-6">{content.catalogCta.title}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {content.catalogCta.items.map((item, index) => {
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
                        <Link to={item.href} className="text-white/80 font-semibold text-sm mt-2 inline-block">
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

export default ProductsIndex;
