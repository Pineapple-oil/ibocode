import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { CheckCircle } from 'lucide-react';

const FactoryOverview: React.FC = () => {
  return (
    <div>
      <Section light>
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
            <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">Factory Overview</h1>
                <div className="prose prose-lg text-slate-600">
                    <p className="text-xl leading-relaxed">
                        Factory-direct manufacturing is only valuable if it delivers what overseas buyers actually need: consistent batches, stable lead times, and communication you can rely on.
                    </p>
                    <p>
                        Since 2010, COSUN has built our production flow around repeatability - from disciplined assembly standards to export-ready packing checks.
                    </p>
                </div>
                <div className="mt-8 space-y-3">
                    {[
                      'Faster launch cycles (prototype -> validation -> mass production)',
                      'Stable replenishment (repeatable process + controlled revisions)',
                      'Practical quality evidence (inspection checklists, test logic, photo confirmations)',
                      'Export-ready packing and carton marking',
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                            <CheckCircle size={20} className="text-brand mt-1 flex-shrink-0" /> <span className="text-slate-700 font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid gap-4">
                <img src="https://picsum.photos/seed/factory_1/800/600" alt="Factory Floor" className="rounded-xl shadow-lg w-full h-64 object-cover" />
                <div className="grid grid-cols-2 gap-4">
                    <img src="https://picsum.photos/seed/factory_2/400/300" alt="Assembly" className="rounded-xl shadow-md w-full h-40 object-cover" />
                    <img src="https://picsum.photos/seed/factory_3/400/300" alt="Testing" className="rounded-xl shadow-md w-full h-40 object-cover" />
                </div>
            </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">10 Production Lines & Work Cells</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand">
                        <h3 className="font-bold text-lg text-slate-900">SMT / PCBA Line</h3>
                        <p className="text-sm text-slate-600">Controlled PCB assembly including placement + soldering profiles, with SPI/AOI.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand">
                        <h3 className="font-bold text-lg text-slate-900">THT / Hand-Solder & Rework Cell</h3>
                        <p className="text-sm text-slate-600">Manual refinement and controlled rework to keep yield stable.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand">
                        <h3 className="font-bold text-lg text-slate-900">Cable & Harness Prep</h3>
                        <p className="text-sm text-slate-600">Cutting, stripping, crimping, and continuity checks.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand">
                        <h3 className="font-bold text-lg text-slate-900">Plastic Parts Fit Control</h3>
                        <p className="text-sm text-slate-600">Incoming checks + fit verification for housings and clips.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand">
                        <h3 className="font-bold text-lg text-slate-900">Metal Parts Processing / Hardware Prep</h3>
                        <p className="text-sm text-slate-600">Metal part checks and assembly preparation for stable mechanical tolerances.</p>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand">
                        <h3 className="font-bold text-lg text-slate-900">Car Charger Assembly Line</h3>
                        <p className="text-sm text-slate-600">Process checkpoints aimed at reducing heat and connection complaints.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand">
                        <h3 className="font-bold text-lg text-slate-900">Cigarette Lighter Socket Assembly</h3>
                        <p className="text-sm text-slate-600">Contact stability, assembly consistency, and packaging protection.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand">
                        <h3 className="font-bold text-lg text-slate-900">Phone Holder Assembly</h3>
                        <p className="text-sm text-slate-600">Clamp stability, surface protection, and holding performance.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-600">
                        <h3 className="font-bold text-lg text-slate-900">100% Functional Test Line</h3>
                        <p className="text-sm text-slate-600">Functional checks plus visual inspection before outgoing shipment.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-600">
                        <h3 className="font-bold text-lg text-slate-900">Aging / Burn-In Line</h3>
                        <p className="text-sm text-slate-600">Detect early failures before products ship.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Quality Discipline That Protects Your Brand</h2>
                <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3"><CheckCircle size={18} className="text-brand mt-1" /> ESD control where it matters to protect sensitive electronics.</li>
                    <li className="flex items-start gap-3"><CheckCircle size={18} className="text-brand mt-1" /> Inspection logic aligned to buyer expectations (AQL-aligned sampling where applicable).</li>
                    <li className="flex items-start gap-3"><CheckCircle size={18} className="text-brand mt-1" /> Documented checkpoints and photo confirmations when needed.</li>
                </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What You Can Expect</h2>
                <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3"><CheckCircle size={18} className="text-brand mt-1" /> Clear checkpoints, clear revision control, clear next steps.</li>
                    <li className="flex items-start gap-3"><CheckCircle size={18} className="text-brand mt-1" /> Production photos or videos when needed for alignment.</li>
                    <li className="flex items-start gap-3"><CheckCircle size={18} className="text-brand mt-1" /> Stable execution designed for repeat orders, not one-time wins.</li>
                </ul>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Export-Ready Packing & Shipping Support</h2>
                <p className="text-slate-600 text-lg mb-6">A good product can still fail if packing fails. We support channel-appropriate packaging (bulk vs retail), carton marking, and protection planning.</p>
                <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand rounded-full"></div> Custom Carton Marking</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand rounded-full"></div> Palletization Support</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand rounded-full"></div> Drop-Test Compliant Packing</li>
                </ul>
             </div>
             <img src="https://picsum.photos/seed/packing/800/500" alt="Packing" className="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>

        <CtaBlock
          title="Next Step"
          primary={{
            title: "Request Factory Photos & Videos",
            description: "We will send real production visuals and a capability overview relevant to your product category.",
            linkLabel: "Request Media",
            href: "/contact",
          }}
          secondary={{
            title: "Request Samples",
            description: "Stock samples or branded samples to verify fit, finish, and performance before you scale.",
            linkLabel: "Request Samples",
            href: "/contact",
          }}
        />
      </Section>
    </div>
  );
};

export default FactoryOverview;

