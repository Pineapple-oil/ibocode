'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { CtaBlock } from '../components/CtaBlock';
import { useQuoteModal } from '../components/QuoteModal';
import { useSiteContent } from '../content/SiteContentContext';
import {
  AlertTriangle,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Clock,
  FileText,
  Globe,
  Layout,
  Layers,
  MessageCircle,
  Package,
  PenTool,
  Settings,
  ShieldCheck,
  ShoppingBag,
  TrendingUp,
  Truck,
  Users,
  Zap,
} from 'lucide-react';

interface FeaturedCategoryCard {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
}

interface HomeProps {
  featuredCategoryCards?: FeaturedCategoryCard[];
  featuredProducts?: FeaturedCategoryCard[];
}

const FadeInSection = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const Home: React.FC<HomeProps> = ({ featuredCategoryCards = [], featuredProducts = [] }) => {
  const quoteModal = useQuoteModal();
  const { pages } = useSiteContent();
  const home = pages.home;
  const heroBgRef = useRef<HTMLImageElement | null>(null);
  const [featuredStartIndex, setFeaturedStartIndex] = useState(0);
  const [featuredCardsPerView, setFeaturedCardsPerView] = useState(3);
  const processIcons = [MessageCircle, FileText, PenTool, Package, Settings, ShieldCheck, Truck];
  const problemIcons = [AlertTriangle, FileText, Clock];
  const whyIcons = [Truck, Layout, Zap, Users];
  const audienceIcons = [Package, Layers, ShoppingBag, Globe, Users];
  const pilotIcons = [ClipboardList, CheckCircle, TrendingUp];
  const complianceIcons = [ShieldCheck, Globe, CheckCircle];
  const processSteps = home.ordering.steps.map((step, index) => ({
    title: step.title,
    desc: step.description,
    Icon: processIcons[index] ?? Package,
  }));
  const proTipParts = home.ordering.proTip.split(':');
  const proTipLabel = proTipParts[0];
  const proTipText = proTipParts.length > 1 ? proTipParts.slice(1).join(':').trim() : '';
  const heroPrimaryCta = home.hero.primaryCta;
  const heroSecondaryCta = home.hero.secondaryCta;
  const heroPrimaryUsesModal = Boolean(quoteModal) && heroPrimaryCta.href === '/contact';
  const featuredCards = featuredCategoryCards.length
    ? featuredCategoryCards.map((item, index) => ({
        ...item,
        image: item.image || home.featuredProducts.items[index]?.image || '',
        description: item.description || home.featuredProducts.items[index]?.description || '',
      }))
    : home.featuredProducts.items.map((item, index) => ({
        id: index,
        title: item.title,
        description: item.description,
        image: item.image,
        href: item.linkHref,
      }));
  const maxFeaturedStart = Math.max(0, featuredProducts.length - featuredCardsPerView);
  const visibleFeaturedProducts = featuredProducts.slice(
    featuredStartIndex,
    featuredStartIndex + featuredCardsPerView,
  );

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        if (heroBgRef.current) {
          const offset = Math.min(window.scrollY * 0.2, 120);
          heroBgRef.current.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
        }
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1280) {
        setFeaturedCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setFeaturedCardsPerView(2);
      } else {
        setFeaturedCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  useEffect(() => {
    setFeaturedStartIndex((current) => Math.min(current, Math.max(0, featuredProducts.length - featuredCardsPerView)));
  }, [featuredProducts.length, featuredCardsPerView]);

  return (
    <div className="bg-paper text-ink">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <img
            src={home.hero.backgroundImage}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            ref={heroBgRef}
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="absolute inset-0 pattern-grid opacity-20" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand/30 blur-[120px] float-soft" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-white/10 blur-[140px] float-soft" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-brand/50 text-brand text-xs uppercase tracking-[0.28em]">
                {home.hero.eyebrow}
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight reveal-up">
                {home.hero.title}
              </h1>
              <p className="text-lg text-slate-200 max-w-2xl reveal-up" style={{ animationDelay: '0.1s' }}>
                {home.hero.description}
              </p>
              <div className="border-l-2 border-brand/60 pl-4 text-slate-200 reveal-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-xs uppercase tracking-[0.22em] text-brand/80 mb-2">{home.hero.buyerRealityLabel}</p>
                <p className="text-base">{home.hero.buyerRealityText}</p>
              </div>
              <p className="text-sm text-slate-300 max-w-2xl reveal-up" style={{ animationDelay: '0.3s' }}>
                {home.hero.supportText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 reveal-up" style={{ animationDelay: '0.4s' }}>
                {heroPrimaryUsesModal ? (
                  <button
                    type="button"
                    onClick={() => quoteModal?.open()}
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-full text-ink bg-brand hover:bg-brand-hover transition-colors"
                  >
                    {heroPrimaryCta.label}
                  </button>
                ) : (
                  <Link
                    href={heroPrimaryCta.href}
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-full text-ink bg-brand hover:bg-brand-hover transition-colors"
                  >
                    {heroPrimaryCta.label}
                  </Link>
                )}
                <Link
                  href={heroSecondaryCta.href}
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white border border-white/30 hover:bg-white/10 transition-colors"
                >
                  {heroSecondaryCta.label}
                </Link>
              </div>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-white/70">
                {home.hero.highlights.map((item, index) => (
                  <span key={`${item}-${index}`} className="px-3 py-2 border border-white/15">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-white/20 shadow-[0_35px_90px_rgba(2,6,23,0.55)]">
                <img
                  src={home.hero.heroImage}
                  alt={home.hero.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-8 bg-paper text-ink p-6 rounded-2xl shadow-xl border border-ink/10 w-64">
                <h3 className="font-display text-lg mb-3">{home.hero.checklist.title}</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {home.hero.checklist.items.map((item, index) => (
                    <li key={`${item}-${index}`} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -top-6 right-6 bg-slate-900/80 text-white/90 px-4 py-3 rounded-xl border border-white/10 text-xs uppercase tracking-[0.18em]">
                {home.hero.cornerLabel}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-brand text-ink py-8 border-b border-ink/10">
        <FadeInSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {home.stats.map((stat, index) => (
                <div key={`${stat.value}-${index}`} className="border border-ink/10 rounded-2xl py-4 bg-white/20">
                  <div className="text-3xl font-display">{stat.value}</div>
                  <div className="text-xs font-semibold uppercase tracking-[0.25em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* What We Manufacture */}
      <Section>
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl text-ink mb-4">{home.featuredProducts.title}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">{home.featuredProducts.description}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCards.map((item, index) => (
              <div key={`${item.id}-${item.title}-${index}`} className="group border border-ink/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all bg-white">
                <div className="h-48 bg-slate-100 relative overflow-hidden">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex items-center justify-center px-6 text-center text-white text-lg font-display">
                      {item.title}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg mb-2 text-ink">{item.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{item.description}</p>
                  <Link href={item.href} className="text-brand-text font-semibold text-sm hover:underline">
                    {home.featuredProducts.items[index]?.linkLabel || 'View capabilities'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </Section>

      {/* Problems We Remove */}
      <Section className="bg-white">
        <FadeInSection>
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{home.problems.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink mt-4">{home.problems.title}</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">{home.problems.description}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {home.problems.items.map((item, index) => {
              const Icon = problemIcons[index] ?? AlertTriangle;
              return (
                <div key={`${item.title}-${index}`} className="p-7 rounded-2xl border border-ink/10 bg-paper shadow-sm">
                  <div className="bg-ink text-brand w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-xl mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </FadeInSection>
      </Section>

      {/* Why Choose COSUN */}
      <Section>
        <FadeInSection>
          <div className="text-center mb-14">
            {home.whyChoose.eyebrow ? (
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{home.whyChoose.eyebrow}</p>
            ) : null}
            <h2 className="font-display text-3xl md:text-4xl text-ink">{home.whyChoose.title}</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">{home.whyChoose.description}</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {home.whyChoose.cards.map((card, index) => {
              const Icon = whyIcons[index] ?? Truck;
              const cardItems = 'items' in card && Array.isArray(card.items) ? card.items : [];
              return (
                <div key={`${card.title}-${index}`} className="bg-white p-8 rounded-2xl border border-ink/10 hover:shadow-lg transition-shadow">
                  <div className="bg-brand/40 p-3 rounded-full w-fit mb-6 text-ink">
                    <Icon size={30} />
                  </div>
                  <h3 className="font-display text-xl mb-2">{card.title}</h3>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-4">{card.subtitle}</h4>
                  {card.description ? <p className="text-sm leading-7 text-slate-600">{card.description}</p> : null}
                  {cardItems.length > 0 ? (
                    <ul className="space-y-3 text-slate-600 text-sm">
                      {cardItems.map((item, itemIndex) => (
                        <li key={`${item}-${itemIndex}`} className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-brand mt-1" /> {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}
          </div>
          {home.whyChoose.glance?.items?.length ? (
            <div className="mt-12 rounded-[28px] border border-ink/10 bg-white overflow-hidden">
              <div className="border-b border-ink/10 px-6 py-5 bg-paper">
                <h3 className="font-display text-2xl text-ink">{home.whyChoose.glance.title}</h3>
              </div>
              <div className="divide-y divide-ink/10">
                {home.whyChoose.glance.items.map((item, index) => (
                  <div key={`${item.feature}-${index}`} className="grid gap-2 px-6 py-5 md:grid-cols-[240px_1fr] md:gap-8">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">{item.feature}</div>
                    <div className="text-sm text-slate-600">{item.benefit}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </FadeInSection>
      </Section>

      {/* For Whom We Build */}
      <Section className="bg-white">
        <FadeInSection>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl text-ink mb-6">{home.audience.title}</h2>
              <p className="text-slate-600 text-lg mb-8">{home.audience.description}</p>
              <div className="grid sm:grid-cols-2 gap-6">
                {home.audience.items.map((item, index) => {
                  const Icon = audienceIcons[index] ?? Package;
                  return (
                    <div key={`${item.title}-${index}`} className="flex gap-4">
                      <div className="bg-paper p-3 h-fit rounded text-ink"><Icon /></div>
                      <div>
                        <h4 className="font-semibold text-ink">{item.title}</h4>
                        <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-paper rounded-2xl p-8 h-full flex flex-col justify-center border border-ink/10">
              <h3 className="font-display text-2xl text-ink mb-4">{home.audience.highlight.title}</h3>
              <ul className="space-y-4">
                {home.audience.highlight.items.map((item, index) => (
                  <li key={`${item}-${index}`} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand rounded-full" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href={home.audience.highlight.linkHref} className="text-brand-text font-semibold hover:underline inline-flex items-center gap-2">
                  {home.audience.highlight.linkLabel} <PenTool size={16} />
                </Link>
              </div>
            </div>
          </div>
        </FadeInSection>
      </Section>

      {/* Pilot to Scale */}
      <Section className="bg-white">
        <FadeInSection>
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{home.pilotToScale.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink mt-4">{home.pilotToScale.title}</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">{home.pilotToScale.description}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {home.pilotToScale.cards.map((card, index) => {
              const Icon = pilotIcons[index] ?? ClipboardList;
              return (
                <div key={`${card.title}-${index}`} className="p-7 rounded-2xl border border-ink/10 bg-paper">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-ink text-brand w-11 h-11 rounded-xl flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-lg">{card.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{card.description}</p>
                </div>
              );
            })}
          </div>
        </FadeInSection>
      </Section>

      {/* Featured Products Strip */}
      <div className="bg-ink py-16 text-white">
        <FadeInSection>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.3em] text-brand/75">WooCommerce Selection</p>
                <h2 className="font-display text-2xl md:text-3xl mt-4">Featured Products</h2>
                <p className="text-slate-300 max-w-3xl mt-4">
                  Featured products pulled directly from WooCommerce. Up to three are shown at once, and larger sets can be browsed with the slider controls.
                </p>
              </div>
              {featuredProducts.length > featuredCardsPerView ? (
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setFeaturedStartIndex((current) => Math.max(0, current - 1))}
                    disabled={featuredStartIndex === 0}
                    className="w-11 h-11 rounded-full border border-white/15 bg-white/5 text-white disabled:opacity-35 disabled:cursor-not-allowed hover:bg-white/10 transition-colors flex items-center justify-center"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setFeaturedStartIndex((current) => Math.min(maxFeaturedStart, current + 1))}
                    disabled={featuredStartIndex >= maxFeaturedStart}
                    className="w-11 h-11 rounded-full border border-white/15 bg-white/5 text-white disabled:opacity-35 disabled:cursor-not-allowed hover:bg-white/10 transition-colors flex items-center justify-center"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              ) : null}
            </div>
            {visibleFeaturedProducts.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {visibleFeaturedProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={product.href}
                      className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_24px_60px_rgba(2,6,23,0.35)]"
                    >
                      <div className="relative h-56 overflow-hidden bg-slate-900">
                        {product.image ? (
                          <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center px-8 text-center text-white font-display text-2xl">
                            {product.title}
                          </div>
                        )}
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent" />
                      </div>
                      <div className="p-6">
                        <div className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
                          Featured
                        </div>
                        <h3 className="mt-4 font-display text-2xl text-white leading-snug">{product.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{product.description}</p>
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                          View Product <ChevronRight size={16} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
                {featuredProducts.length > featuredCardsPerView ? (
                  <p className="text-center text-xs text-slate-400 mt-8">
                    Showing {featuredStartIndex + 1}-{Math.min(featuredStartIndex + featuredCardsPerView, featuredProducts.length)} of {featuredProducts.length} featured products.
                  </p>
                ) : null}
              </>
            ) : (
              <div className="rounded-[28px] border border-dashed border-white/15 bg-white/[0.03] px-6 py-12 text-center">
                <h3 className="font-display text-2xl text-white">No featured products yet</h3>
                <p className="mt-3 text-sm text-slate-300">
                  Mark products as Featured in WooCommerce and they will appear here automatically.
                </p>
              </div>
            )}
          </div>
        </FadeInSection>
      </div>

      {/* Ordering Process */}
      <Section>
        <FadeInSection>
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{home.ordering.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink mt-4">{home.ordering.title}</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">{home.ordering.description}</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-6 right-6 top-7 h-px bg-ink/10" />
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-4 text-center">
              {processSteps.map((step) => {
                const Icon = step.Icon;
                return (
                  <div key={step.title} className="flex flex-col items-center gap-3">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full border-2 border-brand/40 bg-white flex items-center justify-center text-ink shadow-sm">
                        <Icon size={22} />
                      </div>
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand" />
                    </div>
                    <h3 className="font-semibold text-sm text-ink">{step.title}</h3>
                    <p className="text-xs text-slate-500">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-10 max-w-3xl mx-auto">
            <div className="bg-white border border-ink/10 rounded-2xl px-6 py-5 shadow-sm text-center">
              <p className="text-sm text-slate-600">
                {proTipText ? (
                  <>
                    <span className="font-semibold text-ink">{proTipLabel}:</span> {proTipText}
                  </>
                ) : (
                  home.ordering.proTip
                )}
              </p>
            </div>
          </div>
        </FadeInSection>
      </Section>

      <Section>
        <CtaBlock />
      </Section>
    </div>
  );
};

export default Home;


