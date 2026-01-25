import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';

const CapacityLeadTime: React.FC = () => {
  return (
    <div>
      <Section light>
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
            <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">Capacity & Lead Time</h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    Lead time is where many sourcing projects fail. Our goal is to make timelines predictable - by confirming specs early, controlling revisions, and planning production to match your launch schedule.
                </p>
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-brand">
                    <h3 className="font-bold text-yellow-900 mb-2">Our Promise</h3>
                    <p className="text-yellow-800">We don't over-promise. You get a realistic schedule based on current line capacity and material availability.</p>
                </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl h-80 relative">
                 <img src="https://picsum.photos/seed/warehouse/800/600" alt="Warehouse" className="absolute inset-0 w-full h-full object-cover" />
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold mb-6">Typical Planning Factors</h2>
                <ul className="list-disc pl-5 space-y-3 text-slate-600">
                    <li><strong className="text-slate-900">Customization depth:</strong> Logo only (fast) vs structure changes (requires tooling).</li>
                    <li><strong className="text-slate-900">Quantity:</strong> Trial order (flexible) vs scaling orders (scheduled).</li>
                    <li><strong className="text-slate-900">Documentation:</strong> Labeling requirements for EU/US.</li>
                    <li><strong className="text-slate-900">Packaging style:</strong> Bulk export vs retail-ready.</li>
                </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold mb-6">What We Can Provide</h2>
                <ul className="list-disc pl-5 space-y-3 text-slate-600">
                    <li>Sampling timeline proposal (with checkpoints)</li>
                    <li>Mass production schedule aligned to your PO and forecast</li>
                    <li>Replenishment plan suggestions for repeat orders</li>
                </ul>
            </div>
        </div>

        <div className="bg-slate-900 text-white p-8 lg:p-12 rounded-2xl mt-12 relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-8 text-white">Standard Estimates (Placeholders)</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-slate-800 p-6 rounded-lg text-center border border-slate-700">
                        <div className="text-slate-400 text-sm mb-2 uppercase tracking-wide">Sample Lead Time</div>
                        <div className="text-xl font-extrabold text-brand">[Insert Data] days</div>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-lg text-center border border-slate-700">
                        <div className="text-slate-400 text-sm mb-2 uppercase tracking-wide">Mass Production</div>
                        <div className="text-xl font-extrabold text-brand">[Insert Data] days</div>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-lg text-center border border-slate-700">
                        <div className="text-slate-400 text-sm mb-2 uppercase tracking-wide">MOQ</div>
                        <div className="text-xl font-extrabold text-brand">[Insert Data]</div>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-lg text-center border border-slate-700">
                        <div className="text-slate-400 text-sm mb-2 uppercase tracking-wide">Incoterms</div>
                        <div className="text-xl font-extrabold text-brand mt-1">EXW / FOB / CIF / DDP</div>
                    </div>
                </div>
                <p className="text-xs text-slate-400 mt-6 text-center opacity-70">* Estimates vary based on project complexity and customization.</p>
            </div>
        </div>

        <CtaBlock
          title="Next Step"
          primary={{
            title: "Request a Lead-Time Plan",
            description:
              "Tell us your target market, quantity, and customization needs. We respond within 24 hours with a practical schedule and next steps.",
            linkLabel: "Request Plan",
            href: "/contact",
          }}
          secondary={{
            title: "Start with a Pilot Order",
            description: "Verify fit, finish, and performance before you scale. Stock samples or branded samples are both available.",
            linkLabel: "Start Pilot",
            href: "/contact",
          }}
        />
      </Section>
    </div>
  );
};

export default CapacityLeadTime;

