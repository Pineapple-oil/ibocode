'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Section } from '../components/Section';
import { CtaBlock } from '../components/CtaBlock';
import { useQuoteModal } from '../components/QuoteModal';
import { useSiteContent } from '../content/SiteContentContext';
import {
  AlertTriangle,
  CheckCircle,
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

const Home: React.FC = () => {
  const quoteModal = useQuoteModal();
  const { pages } = useSiteContent();
  const home = pages.home;
  const heroBgRef = useRef<HTMLImageElement | null>(null);
  const processIcons = [MessageCircle, FileText, PenTool, Package, Settings, ShieldCheck, Truck];
  const problemIcons = [AlertTriangle, FileText, Clock];
  const whyIcons = [Truck, Layout, Zap];
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
      </div>

      {/* What We Manufacture */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl text-ink mb-4">{home.featuredProducts.title}</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">{home.featuredProducts.description}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {home.featuredProducts.items.map((item, index) => (
            <div key={`${item.title}-${index}`} className="group border border-ink/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all bg-white">
              <div className="h-48 bg-slate-100 relative overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg mb-2 text-ink">{item.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{item.description}</p>
                <Link href={item.linkHref} className="text-brand-text font-semibold text-sm hover:underline">
                  {item.linkLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Problems We Remove */}
      <Section className="bg-white">
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
      </Section>

      {/* Why Choose COSUN */}
      <Section>
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl text-ink">{home.whyChoose.title}</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">{home.whyChoose.description}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {home.whyChoose.cards.map((card, index) => {
            const Icon = whyIcons[index] ?? Truck;
            return (
              <div key={`${card.title}-${index}`} className="bg-white p-8 rounded-2xl border border-ink/10 hover:shadow-lg transition-shadow">
                <div className="bg-brand/40 p-3 rounded-full w-fit mb-6 text-ink">
                  <Icon size={30} />
                </div>
                <h3 className="font-display text-xl mb-2">{card.title}</h3>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-4">{card.subtitle}</h4>
                <ul className="space-y-3 text-slate-600 text-sm">
                  {card.items.map((item, itemIndex) => (
                    <li key={`${item}-${itemIndex}`} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-brand mt-1" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      {/* For Whom We Build */}
      <Section className="bg-white">
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
      </Section>

      {/* Pilot to Scale */}
      <Section className="bg-white">
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
      </Section>

      {/* Compliance Strip */}
      <div className="bg-ink py-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl mb-4">{home.compliance.title}</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">{home.compliance.description}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {home.compliance.cards.map((card, index) => {
              const Icon = complianceIcons[index] ?? ShieldCheck;
              return (
                <div key={`${card.title}-${index}`} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <Icon size={48} className="text-brand mx-auto mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
                  <p className="text-slate-300 text-sm">{card.description}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-slate-400 mt-8">
            {home.compliance.note}
          </p>
        </div>
      </div>

      {/* Ordering Process */}
      <Section>
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
      </Section>

      <Section>
        <CtaBlock />
      </Section>
    </div>
  );
};

export default Home;


