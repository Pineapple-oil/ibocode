import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { TrendingDown, Clock, Repeat, MessageSquare } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <div>
       <Section light>
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Why COSUN</h1>
            <p className="text-xl text-slate-600">
                Your customers do not blame the factory - they blame your brand. COSUN is built around what protects your reputation
                in North America and Europe: repeatable quality, practical validation, compliance-ready planning, and buyer-friendly execution.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 flex flex-col md:flex-row">
                <div className="md:w-2/5 h-48 md:h-auto bg-slate-100 relative">
                   <img src="https://picsum.photos/seed/qc_check/600/800" alt="QC" className="absolute inset-0 w-full h-full object-cover"/>
                </div>
                <div className="p-8 md:w-3/5">
                    <TrendingDown className="text-brand mb-4" size={32} />
                    <h3 className="text-2xl font-bold mb-2">1) Fewer Returns</h3>
                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-wider">Built for Real Car Conditions</h4>
                    <p className="text-slate-600 mb-4 text-sm">
                        Returns usually come from fit problems, unstable connections, heat issues, weak mounts, or packaging damage.
                        We reduce those risks by treating mass production as a controlled system.
                    </p>
                    <ul className="list-disc ml-5 text-slate-600 text-sm">
                        <li>Fit validation and assembly checkpoints reduce sample vs bulk drift</li>
                        <li>Functional testing aligned to common failure modes</li>
                        <li>Packaging protection planning to reduce transit damage and DOA issues</li>
                        <li>Revision control so the approved version stays the approved version</li>
                    </ul>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 flex flex-col md:flex-row">
                <div className="md:w-2/5 h-48 md:h-auto bg-slate-100 relative">
                   <img src="https://picsum.photos/seed/speed/600/800" alt="Speed" className="absolute inset-0 w-full h-full object-cover"/>
                </div>
                <div className="p-8 md:w-3/5">
                    <Clock className="text-brand mb-4" size={32} />
                    <h3 className="text-2xl font-bold mb-2">2) Faster Launches</h3>
                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-wider">Speed Without Chaos</h4>
                    <p className="text-slate-600 mb-4 text-sm">
                        Speed-to-market matters - but only if you do not pay for it later with defects and rework.
                    </p>
                    <ul className="list-disc ml-5 text-slate-600 text-sm">
                        <li>Quick RFQ review with clear questions</li>
                        <li>Prototype plan and timeline you can share internally</li>
                        <li>Engineering support for DFM and manufacturable decisions</li>
                        <li>Photo or video confirmation at key points when needed</li>
                    </ul>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 flex flex-col md:flex-row">
                <div className="md:w-2/5 h-48 md:h-auto bg-slate-100 relative">
                   <img src="https://picsum.photos/seed/stock/600/800" alt="Stock" className="absolute inset-0 w-full h-full object-cover"/>
                </div>
                <div className="p-8 md:w-3/5">
                    <Repeat className="text-brand mb-4" size={32} />
                    <h3 className="text-2xl font-bold mb-2">3) Stable Replenishment</h3>
                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-wider">Predictable Repeat Orders</h4>
                    <p className="text-slate-600 mb-4 text-sm">
                        A supplier can win the first order. A real partner helps you scale repeat orders smoothly.
                    </p>
                    <ul className="list-disc ml-5 text-slate-600 text-sm">
                        <li>Inspection checkpoints that support consistent batches</li>
                        <li>Repeat-order documentation for spec, packaging, and labeling</li>
                        <li>Forecast-friendly scheduling and replenishment planning</li>
                    </ul>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 flex flex-col md:flex-row">
                <div className="md:w-2/5 h-48 md:h-auto bg-slate-100 relative">
                   <img src="https://picsum.photos/seed/comm/600/800" alt="Communication" className="absolute inset-0 w-full h-full object-cover"/>
                </div>
                <div className="p-8 md:w-3/5">
                    <MessageSquare className="text-brand mb-4" size={32} />
                    <h3 className="text-2xl font-bold mb-2">4) Clear Communication</h3>
                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-wider">The Hidden Cost Saver</h4>
                    <p className="text-slate-600 mb-4 text-sm">
                        Most B2B sourcing problems are communication problems. We keep it simple and decision-ready.
                    </p>
                    <ul className="list-disc ml-5 text-slate-600 text-sm">
                        <li>Clear updates, documented next steps, and controlled revisions</li>
                        <li>Fast answers that help you decide, not vague replies</li>
                        <li>A project rhythm designed for overseas buyers and tight launch windows</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl font-bold mb-6">Factory Strength (What Buyers Want to See)</h2>
            <p className="text-slate-600 mb-6 max-w-3xl">
                Factory-direct only matters if it creates repeatability and accountability. Here is what keeps batches consistent.
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                <li className="flex items-start gap-3"><TrendingDown size={18} className="text-brand mt-1" /> Multi-line production setup covering assembly, testing, and packing</li>
                <li className="flex items-start gap-3"><TrendingDown size={18} className="text-brand mt-1" /> Standardized work instructions and process checkpoints</li>
                <li className="flex items-start gap-3"><TrendingDown size={18} className="text-brand mt-1" /> Dedicated functional testing and final inspection flow</li>
                <li className="flex items-start gap-3"><TrendingDown size={18} className="text-brand mt-1" /> Export-ready packing discipline and carton marking</li>
            </ul>
            <p className="text-xs text-slate-500 mt-6">We can provide a factory capability pack with photos and line breakdowns.</p>
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl font-bold mb-6">Price Advantage (Competitive Without Quality Surprises)</h2>
            <p className="text-slate-300 mb-6 max-w-3xl">
                Cheap becomes expensive when returns hit. Our pricing advantage comes from factory-direct efficiency and value engineering, not corner cutting.
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-sm text-slate-200">
                <li className="flex items-start gap-3"><Repeat size={18} className="text-brand mt-1" /> Factory-direct pricing structure with clear cost logic</li>
                <li className="flex items-start gap-3"><Repeat size={18} className="text-brand mt-1" /> Multi-tier BOM options (entry / mainstream / premium)</li>
                <li className="flex items-start gap-3"><Repeat size={18} className="text-brand mt-1" /> Cost-down roadmap for scale once sales are proven</li>
                <li className="flex items-start gap-3"><Repeat size={18} className="text-brand mt-1" /> Stable repeat orders reduce rework, claims, and delays</li>
            </ul>
        </div>

        <div className="bg-slate-50 p-8 md:p-12 rounded-2xl relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6">How We Compete in North America & Europe</h2>
                <p className="mb-8 text-slate-700 max-w-2xl">
                    Mature markets reward consistency. We prioritize repeatability and documentation readiness because that is what helps buyers win long term.
                    Tell us your destination market and channel, and we will propose a practical checklist for labeling and documentation planning.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-2">EU Readiness</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li>Manufacturer responsibility for CE readiness and documentation.</li>
                            <li>RoHS substance restrictions for electronic equipment.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-2">US Readiness</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li>FCC authorization pathways (Certification or SDoC).</li>
                            <li>ISO 9001 aligned QMS documentation when required.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <CtaBlock
          title="Next Step"
          primary={{
            title: "Request a Capability Proposal",
            description:
              "Share your target market, product type, quantity (trial + forecast), and customization needs. We return with a practical quote, lead time, and next steps.",
            linkLabel: "Request Proposal",
            href: "/contact",
          }}
          secondary={{
            title: "Get Samples",
            description: "Validate fit, finish, and performance before you scale. Stock samples or branded samples are both available.",
            linkLabel: "Request Samples",
            href: "/contact",
          }}
        />
       </Section>
    </div>
  );
};

export default WhyUs;
