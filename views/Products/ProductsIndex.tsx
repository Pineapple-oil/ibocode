'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useQuoteModal } from '../../components/QuoteModal';
import { useSiteContent } from '../../content/SiteContentContext';

interface CategoryItem {
  id?: number;
  label: string;
  slug?: string;
  count?: number;
  image?: string;
  active?: boolean;
}

interface ProductCard {
  id?: number;
  title: string;
  slug?: string;
  code?: string;
  image?: string;
  badges?: string[];
  tags?: string[];
  href: string;
}

interface NewArrivalItem {
  title: string;
  code?: string;
  image?: string;
  href?: string;
}

interface ProductsIndexProps {
  categories?: CategoryItem[];
  products?: ProductCard[];
  newArrivals?: NewArrivalItem[];
  activeCategory?: string;
  title?: string;
  description?: string;
  countLabel?: string;
  error?: string;
}

const ProductsIndex: React.FC<ProductsIndexProps> = ({
  categories,
  products,
  newArrivals,
  activeCategory,
  title,
  description,
  countLabel,
  error,
}) => {
  const quoteModal = useQuoteModal();
  const { pages } = useSiteContent();
  const content = pages.products.index;

  const isExternalLink = (href: string) => /^https?:\/\//i.test(href);
  const hasOverrides = Boolean(categories || products || title || description || countLabel);
  const useFallback = !error && !hasOverrides;
  const categoryItems = useFallback ? (content.categories as CategoryItem[]) : categories ?? [];
  const productItems = useFallback ? (content.products as ProductCard[]) : products ?? [];
  const newArrivalItems = useFallback ? ((content.newArrivals as NewArrivalItem[]) ?? []) : newArrivals ?? [];
  const resolvedTitle = title ?? content.title;
  const resolvedDescription = description ?? content.description;
  const resolvedCountLabel = error ? '' : countLabel ?? content.countLabel;

  return (
    <div className="bg-paper text-ink overflow-x-hidden">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 min-w-0">
          {content.breadcrumbs.map((crumb, index) => {
            const isLast = index === content.breadcrumbs.length - 1;
            const label = crumb.label;
            const href = crumb.href;

            return (
              <React.Fragment key={`${label}-${index}`}>
                {href ? (
                  isExternalLink(href) ? (
                    <a href={href} className="hover:text-ink break-words">
                      {label}
                    </a>
                  ) : (
                    <Link href={href} className="hover:text-ink break-words">
                      {label}
                    </Link>
                  )
                ) : (
                  <span className={`break-words ${isLast ? 'text-slate-400' : ''}`.trim()}>{label}</span>
                )}
                {!isLast && <ChevronRight size={14} />}
              </React.Fragment>
            );
          })}
        </div>
        <div className="mt-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="min-w-0">
            <h1 className="font-display text-3xl md:text-4xl text-ink break-words">{resolvedTitle}</h1>
            <p className="mt-3 text-slate-600 max-w-2xl">{resolvedDescription}</p>
          </div>
          {resolvedCountLabel ? (
            <div className="text-xs text-slate-500 uppercase tracking-[0.2em]">{resolvedCountLabel}</div>
          ) : null}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {error ? (
          <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900">
            <p className="font-semibold">WooCommerce data failed to load</p>
            <p className="mt-1 text-amber-700">{error}</p>
            <p className="mt-2 text-amber-700">
              Check <span className="font-semibold">WC_API_BASE / WC_CONSUMER_KEY / WC_CONSUMER_SECRET</span> and restart the dev server.
            </p>
          </div>
        ) : null}
        <div className="grid lg:grid-cols-[280px_minmax(0,1fr)] gap-10">
          <aside className="space-y-6 min-w-0">
            <div className="bg-white border border-ink/10 rounded-2xl p-5 shadow-sm">
              <h3 className="text-xs uppercase tracking-[0.28em] text-slate-500 mb-4">Categories</h3>
              <ul className="space-y-3 text-sm">
                {categoryItems.map((category, index) => {
                  const isActive = activeCategory ? category.slug === activeCategory : category.active;
                  const href =
                    category.slug === 'all'
                      ? '/products'
                      : category.slug
                        ? `/products?category=${category.slug}`
                        : undefined;

                  const contentNode = (
                    <>
                      <span className="min-w-0 pr-3 break-words">{category.label}</span>
                      <span className="flex items-center gap-2 text-slate-400 flex-shrink-0">
                        {typeof category.count === 'number' ? <span>{category.count}</span> : null}
                        {isActive ? <ChevronRight size={14} /> : null}
                      </span>
                    </>
                  );

                  return (
                    <li
                      key={`${category.label}-${index}`}
                      className={`flex items-center justify-between ${isActive ? 'text-ink font-semibold' : 'text-slate-500 hover:text-ink transition-colors'}`}
                    >
                      {href ? (
                        <Link href={href} className="flex w-full items-center justify-between">
                          {contentNode}
                        </Link>
                      ) : (
                        contentNode
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-white border border-ink/10 rounded-2xl p-5 shadow-sm">
              <h3 className="text-xs uppercase tracking-[0.28em] text-slate-500 mb-4">New Arrivals</h3>
              <div className="space-y-4">
                {newArrivalItems.map((item, index) => {
                  const itemKey = item.code ?? `${item.title}-${index}`;
                  const contentNode = (
                    <div className="flex items-center gap-3">
                      {item.image ? (
                        <img src={item.image} alt={item.title} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 text-[10px] text-slate-400 text-center leading-tight px-1">
                          {item.title.slice(0, 2)}
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-ink truncate">{item.title}</p>
                        <p className="text-xs text-slate-500">{item.code}</p>
                      </div>
                    </div>
                  );

                  if (!item.href) {
                    return <div key={itemKey}>{contentNode}</div>;
                  }

                  return isExternalLink(item.href) ? (
                    <a key={itemKey} href={item.href} className="block hover:opacity-85 transition-opacity">
                      {contentNode}
                    </a>
                  ) : (
                    <Link key={itemKey} href={item.href} className="block hover:opacity-85 transition-opacity">
                      {contentNode}
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 min-w-0">
            {productItems.map((product) => (
              <div key={product.slug ?? product.code ?? product.title} className="bg-white border border-ink/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                <div className="relative w-full aspect-square overflow-hidden">
                  {isExternalLink(product.href) ? (
                    <a href={product.href} className="block h-full w-full" aria-label={product.title}>
                      {product.image ? (
                        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white text-sm font-semibold">
                          {product.title}
                        </div>
                      )}
                    </a>
                  ) : (
                    <Link href={product.href} className="block h-full w-full" aria-label={product.title}>
                      {product.image ? (
                        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white text-sm font-semibold">
                          {product.title}
                        </div>
                      )}
                    </Link>
                  )}
                  {(product.badges ?? []).map((badge) => (
                    <span
                      key={badge}
                      className="absolute top-3 left-3 bg-brand text-ink text-[11px] font-semibold uppercase px-2 py-1 rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="p-5 space-y-3">
                  {product.code ? (
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">{product.code}</p>
                  ) : null}
                  <h3 className="font-display text-lg text-ink break-words">
                    {isExternalLink(product.href) ? (
                      <a href={product.href} className="hover:text-brand-text transition-colors">
                        {product.title}
                      </a>
                    ) : (
                      <Link href={product.href} className="hover:text-brand-text transition-colors">
                        {product.title}
                      </Link>
                    )}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(product.tags ?? []).map((tag) => (
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
                    <Link href={product.href} className="inline-flex items-center gap-2 text-brand-text text-sm font-semibold">
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

export default ProductsIndex;
