import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { CtaBlock } from '../components/CtaBlock';
import { useQuoteModal } from '../components/QuoteModal';
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
  const heroBgRef = useRef<HTMLImageElement | null>(null);
  const processSteps = [
    { title: 'Inquiry', desc: 'Requirements & Specs', Icon: MessageCircle },
    { title: 'Quote', desc: 'Price & Timeline', Icon: FileText },
    { title: 'Artwork', desc: 'Design Confirmation', Icon: PenTool },
    { title: 'Sample', desc: 'Prototype Approval', Icon: Package },
    { title: 'Production', desc: 'Mass Manufacturing', Icon: Settings },
    { title: 'QC', desc: 'Quality Check', Icon: ShieldCheck },
    { title: 'Shipment', desc: 'Delivery & Support', Icon: Truck },
  ];

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
            src="https://server.cosunglobal.com/wp-content/uploads/2026/01/v2-e65250fb080106460193cb2195311779_1440w.jpg"
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
                Factory-direct OEM / ODM
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight reveal-up">
                In-Vehicle Power, Built for Real Roads -- and Real Buyers.
              </h1>
              <p className="text-lg text-slate-200 max-w-2xl reveal-up" style={{ animationDelay: '0.1s' }}>
                COSUN (Cosun Global Electronic Manufacturing) is a factory-direct manufacturer of car power accessories and
                in-vehicle electronics. Since 2010, we have helped wholesalers, brand owners, retailers, and importers launch
                reliable SKUs that earn repeat orders -- not return tickets.
              </p>
              <div className="border-l-2 border-brand/60 pl-4 text-slate-200 reveal-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-xs uppercase tracking-[0.22em] text-brand/80 mb-2">Buyer reality</p>
                <p className="text-base">
                  If you have ever been burned by inconsistent batches, unclear specs, or last-minute delays, you are not alone.
                </p>
              </div>
              <p className="text-sm text-slate-300 max-w-2xl reveal-up" style={{ animationDelay: '0.3s' }}>
                B2B buyers in North America and Europe need three things: predictable quality, compliance-ready planning, and
                communication that does not waste time. That is exactly what our operation is built to deliver.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 reveal-up" style={{ animationDelay: '0.4s' }}>
                <button
                  type="button"
                  onClick={() => quoteModal?.open()}
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-full text-ink bg-brand hover:bg-brand-hover transition-colors"
                >
                  Request a Quote
                </button>
                <Link
                  to="/manufacturing/factory"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white border border-white/30 hover:bg-white/10 transition-colors"
                >
                  Explore Factory
                </Link>
              </div>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-white/70">
                <span className="px-3 py-2 border border-white/15">Repeat orders</span>
                <span className="px-3 py-2 border border-white/15">Real-road reliability</span>
                <span className="px-3 py-2 border border-white/15">No guessing games</span>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-white/20 shadow-[0_35px_90px_rgba(2,6,23,0.55)]">
                <img
                  src="https://server.cosunglobal.com/wp-content/uploads/2026/01/yunwu-edited-571-20260123-124836.jpg"
                  alt="Automotive manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-8 bg-paper text-ink p-6 rounded-2xl shadow-xl border border-ink/10 w-64">
                <h3 className="font-display text-lg mb-3">Consistency checklist</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
                    Incoming checks and in-process controls
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
                    Final function and appearance verification
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
                    Export-ready packaging discipline
                  </li>
                </ul>
              </div>
              <div className="absolute -top-6 right-6 bg-slate-900/80 text-white/90 px-4 py-3 rounded-xl border border-white/10 text-xs uppercase tracking-[0.18em]">
                OEM / ODM ready
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-brand text-ink py-8 border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border border-ink/10 rounded-2xl py-4 bg-white/20">
              <div className="text-3xl font-display">15+ Years</div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em]">Manufacturing exp.</div>
            </div>
            <div className="border border-ink/10 rounded-2xl py-4 bg-white/20">
              <div className="text-3xl font-display">200+</div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em]">Employees</div>
            </div>
            <div className="border border-ink/10 rounded-2xl py-4 bg-white/20">
              <div className="text-3xl font-display">OEM / ODM</div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em]">Full capability</div>
            </div>
            <div className="border border-ink/10 rounded-2xl py-4 bg-white/20">
              <div className="text-3xl font-display">Global</div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em]">Export support</div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Manufacture */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl text-ink mb-4">Featured Product Entrances</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We focus on everyday automotive accessories that sell fast because they solve everyday problems.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group border border-ink/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all bg-white">
            <div className="h-48 bg-slate-100 relative overflow-hidden">
              <img src="https://picsum.photos/seed/socket/600/400" alt="Socket" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg mb-2 text-ink">Car cigarette lighter sockets</h3>
              <p className="text-sm text-slate-600 mb-4">12V/24V replacement and panel-mount. Stable contact design with heat-resistant options.</p>
              <Link to="/oem-odm" className="text-brand-text font-semibold text-sm hover:underline">View capabilities</Link>
            </div>
          </div>
          <div className="group border border-ink/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all bg-white">
            <div className="h-48 bg-slate-100 relative overflow-hidden">
              <img src="https://picsum.photos/seed/charger/600/400" alt="Charger" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg mb-2 text-ink">USB car chargers</h3>
              <p className="text-sm text-slate-600 mb-4">USB-A/USB-C and PD/QC options with protection design to reduce overheating complaints.</p>
              <Link to="/oem-odm" className="text-brand-text font-semibold text-sm hover:underline">View capabilities</Link>
            </div>
          </div>
          <div className="group border border-ink/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all bg-white">
            <div className="h-48 bg-slate-100 relative overflow-hidden">
              <img src="https://picsum.photos/seed/mount/600/400" alt="Mount" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg mb-2 text-ink">Phone holders and mounts</h3>
              <p className="text-sm text-slate-600 mb-4">Magnetic and clamp styles built to hold steady over bumps and summer heat.</p>
              <Link to="/oem-odm" className="text-brand-text font-semibold text-sm hover:underline">View capabilities</Link>
            </div>
          </div>
          <div className="group border border-ink/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all bg-white">
            <div className="h-48 bg-slate-100 relative overflow-hidden">
              <img src="https://picsum.photos/seed/interior/600/400" alt="Interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg mb-2 text-ink">Interior accessories</h3>
              <p className="text-sm text-slate-600 mb-4">Cup holders, ashtrays, and organizers designed for high-velocity retail SKUs.</p>
              <Link to="/oem-odm" className="text-brand-text font-semibold text-sm hover:underline">View capabilities</Link>
            </div>
          </div>
          <div className="group border border-ink/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all bg-white">
            <div className="h-48 bg-slate-100 relative overflow-hidden">
              <img src="https://picsum.photos/seed/parking/600/400" alt="Parking plate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg mb-2 text-ink">Temporary parking plates</h3>
              <p className="text-sm text-slate-600 mb-4">Premium feel and clean visibility, ideal for high-velocity retail programs.</p>
              <Link to="/oem-odm" className="text-brand-text font-semibold text-sm hover:underline">View capabilities</Link>
            </div>
          </div>
          <div className="group border border-ink/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all bg-white">
            <div className="h-48 bg-slate-100 relative overflow-hidden">
              <img src="https://picsum.photos/seed/cable/600/400" alt="Adapter" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg mb-2 text-ink">Power adapters, splitters, and cables</h3>
              <p className="text-sm text-slate-600 mb-4">Multi-port expansion designed for safety and stability in daily use.</p>
              <Link to="/oem-odm" className="text-brand-text font-semibold text-sm hover:underline">View capabilities</Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Problems We Remove */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Built for overseas B2B buyers</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-4">The Problems We Remove</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            If you have dealt with unstable batches or slow feedback, our process is designed to make each run feel repeatable
            and predictable.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl border border-ink/10 bg-paper shadow-sm">
            <div className="bg-ink text-brand w-12 h-12 rounded-xl flex items-center justify-center mb-5">
              <AlertTriangle size={22} />
            </div>
            <h3 className="font-display text-xl mb-3">Inconsistent batches</h3>
            <p className="text-sm text-slate-600">
              Process checkpoints protect batch consistency, so the product you approve is the product your customers receive.
            </p>
          </div>
          <div className="p-7 rounded-2xl border border-ink/10 bg-paper shadow-sm">
            <div className="bg-ink text-brand w-12 h-12 rounded-xl flex items-center justify-center mb-5">
              <FileText size={22} />
            </div>
            <h3 className="font-display text-xl mb-3">Unclear specs</h3>
            <p className="text-sm text-slate-600">
              Buyer-first execution means clear specs, clear revisions, and clear next steps without guesswork.
            </p>
          </div>
          <div className="p-7 rounded-2xl border border-ink/10 bg-paper shadow-sm">
            <div className="bg-ink text-brand w-12 h-12 rounded-xl flex items-center justify-center mb-5">
              <Clock size={22} />
            </div>
            <h3 className="font-display text-xl mb-3">Last-minute delays</h3>
            <p className="text-sm text-slate-600">
              Fast response culture and launch support keep packaging, labeling, and timelines on track.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Choose COSUN */}
      <Section>
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl text-ink">Why Buyers Choose COSUN</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            A supplier can make a good sample. A factory partner can make the same product again and again at scale.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-ink/10 hover:shadow-lg transition-shadow">
            <div className="bg-brand/40 p-3 rounded-full w-fit mb-6 text-ink"><Truck size={30} /></div>
            <h3 className="font-display text-xl mb-2">1) Company Advantages</h3>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-4">Built for overseas B2B</h4>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-brand mt-1" /> Buyer-first execution with clear specs and revisions.</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-brand mt-1" /> Launch support for packaging, labeling, and listing details.</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-brand mt-1" /> Fast response culture on quotes, samples, and feedback.</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-ink/10 hover:shadow-lg transition-shadow">
            <div className="bg-brand/40 p-3 rounded-full w-fit mb-6 text-ink"><Layout size={30} /></div>
            <h3 className="font-display text-xl mb-2">2) Factory Advantages</h3>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-4">Built for repeatability</h4>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-brand mt-1" /> Incoming checks, in-process controls, and final verification.</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-brand mt-1" /> Production flow designed for heat, vibration, and daily use.</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-brand mt-1" /> Export-ready packaging options for bulk or retail-ready channels.</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-ink/10 hover:shadow-lg transition-shadow">
            <div className="bg-brand/40 p-3 rounded-full w-fit mb-6 text-ink"><Zap size={30} /></div>
            <h3 className="font-display text-xl mb-2">3) Price Advantage</h3>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-4">Competitive without surprises</h4>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-brand mt-1" /> Factory-direct pricing with faster decisions and transparency.</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-brand mt-1" /> Multiple spec tiers to hit target price without killing reliability.</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-brand mt-1" /> Stable cost control that reduces rework and replacement costs.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* For Whom We Build */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl text-ink mb-6">For Whom We Build</h2>
            <p className="text-slate-600 text-lg mb-8">
              Whether you sell through Amazon, regional retail, automotive distributors, or fleet channels, the expectations are
              the same: the product must look right, fit right, and work reliably every time.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="bg-paper p-3 h-fit rounded text-ink"><Package /></div>
                <div>
                  <h4 className="font-semibold text-ink">Wholesalers and importers</h4>
                  <p className="text-sm text-slate-600 mt-1">Need stable replenishment and export-ready packaging.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-paper p-3 h-fit rounded text-ink"><Layers /></div>
                <div>
                  <h4 className="font-semibold text-ink">Brand owners</h4>
                  <p className="text-sm text-slate-600 mt-1">Building private-label programs with differentiated designs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-paper p-3 h-fit rounded text-ink"><ShoppingBag /></div>
                <div>
                  <h4 className="font-semibold text-ink">Retailers</h4>
                  <p className="text-sm text-slate-600 mt-1">Demanding consistent appearance and fewer complaints.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-paper p-3 h-fit rounded text-ink"><Globe /></div>
                <div>
                  <h4 className="font-semibold text-ink">E-commerce sellers</h4>
                  <p className="text-sm text-slate-600 mt-1">Who live and die by reviews and return rates.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-paper p-3 h-fit rounded text-ink"><Users /></div>
                <div>
                  <h4 className="font-semibold text-ink">Fleet and commercial buyers</h4>
                  <p className="text-sm text-slate-600 mt-1">Need stable performance in daily use and harsh conditions.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-paper rounded-2xl p-8 h-full flex flex-col justify-center border border-ink/10">
            <h3 className="font-display text-2xl text-ink mb-4">Factory strength you can show your team</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand rounded-full" />
                <span className="text-slate-700 font-medium">15+ years in automotive accessory manufacturing</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand rounded-full" />
                <span className="text-slate-700 font-medium">200+ employees with factory-direct production and QC</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand rounded-full" />
                <span className="text-slate-700 font-medium">Export support for North America and Europe</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand rounded-full" />
                <span className="text-slate-700 font-medium">OEM/ODM: design, prototyping, testing, mass production, delivery</span>
              </li>
            </ul>
            <div className="mt-8">
              <Link to="/about/profile" className="text-brand-text font-semibold hover:underline inline-flex items-center gap-2">
                Read full company profile <PenTool size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Pilot to Scale */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Pricing that scales with you</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-4">Pilot to Scale, Without Quality Surprises</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Cheap is expensive when returns start coming in. We help you validate early and unlock better pricing as volumes grow.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl border border-ink/10 bg-paper">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-ink text-brand w-11 h-11 rounded-xl flex items-center justify-center">
                <ClipboardList size={20} />
              </div>
              <h3 className="font-display text-lg">Pilot order</h3>
            </div>
            <p className="text-sm text-slate-600">Start with a pilot order to verify fit, finish, and market response.</p>
          </div>
          <div className="p-7 rounded-2xl border border-ink/10 bg-paper">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-ink text-brand w-11 h-11 rounded-xl flex items-center justify-center">
                <CheckCircle size={20} />
              </div>
              <h3 className="font-display text-lg">Revision control</h3>
            </div>
            <p className="text-sm text-slate-600">Lock specs and revisions after validation to protect repeat orders.</p>
          </div>
          <div className="p-7 rounded-2xl border border-ink/10 bg-paper">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-ink text-brand w-11 h-11 rounded-xl flex items-center justify-center">
                <TrendingUp size={20} />
              </div>
              <h3 className="font-display text-lg">Tiered pricing for scale</h3>
            </div>
            <p className="text-sm text-slate-600">Unlock better pricing as volumes grow, without cutting reliability.</p>
          </div>
        </div>
      </Section>

      {/* Compliance Strip */}
      <div className="bg-ink py-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl mb-4">Compliance-ready planning (for EU and US buyers)</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              If you sell under your own brand, your business may be treated as the manufacturer for certain market requirements.
              We align documentation and labeling planning early.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <ShieldCheck size={48} className="text-brand mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">EU RoHS and CE</h3>
              <p className="text-slate-300 text-sm">Documentation pathways restricting hazardous substances and indicating conformity.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <Globe size={48} className="text-brand mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">US FCC pathways</h3>
              <p className="text-slate-300 text-sm">Support for Certification and Supplier Declaration of Conformity depending on product type.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <CheckCircle size={48} className="text-brand mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">ISO 9001 aligned</h3>
              <p className="text-slate-300 text-sm">Quality management system support for vendor onboarding requirements.</p>
            </div>
          </div>
          <p className="text-center text-xs text-slate-400 mt-8">
            We align documentation and labeling planning based on destination market and product configuration.
          </p>
        </div>
      </div>

      {/* Ordering Process */}
      <Section>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Simple ordering path</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-4">A Simple, Supplier-Friendly Process</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Streamlined for global buyers who need clear steps, reliable timing, and transparent follow-through.
          </p>
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
              <span className="font-semibold text-ink">Pro Tip:</span> Include MOQ, target deadline, and artwork status in your RFQ
              to help us return a faster, comparable quotation.
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
