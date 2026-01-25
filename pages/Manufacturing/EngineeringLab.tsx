import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';

const EngineeringLab: React.FC = () => {
  return (
    <div>
      <Section light>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">Engineering & Lab</h1>
                <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                    Speed to market doesn't come from rushing - it comes from reducing revision loops. Our engineering support helps you move from concept to manufacturable product with fewer surprises.
                </p>
                <img src="https://picsum.photos/seed/circuit/800/400" alt="PCB Design" className="rounded-xl shadow-lg w-full h-64 object-cover" />
            </div>
             <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h2 className="text-2xl font-bold mb-6">Engineering Support Areas</h2>
                <ul className="space-y-6">
                    <li className="pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                        <strong className="block text-lg text-slate-900 mb-1">DFM Review (Design for Manufacturing)</strong>
                        <span className="text-slate-600">Prevent tooling mistakes and reduce cost risk before we cut steel.</span>
                    </li>
                    <li className="pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                        <strong className="block text-lg text-slate-900 mb-1">Rapid Prototyping</strong>
                        <span className="text-slate-600">Confirm fit, finish, and user experience with 3D prints or CNC samples.</span>
                    </li>
                    <li className="pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                        <strong className="block text-lg text-slate-900 mb-1">Performance Tuning</strong>
                        <span className="text-slate-600">Power profiles, charging protocols, and circuit protection design.</span>
                    </li>
                    <li className="pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                        <strong className="block text-lg text-slate-900 mb-1">Validation Planning</strong>
                        <span className="text-slate-600">Define test items that match your target market expectations.</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
             <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
                <h2 className="text-2xl font-bold mb-4">What You Send Us</h2>
                <ul className="space-y-3 list-disc pl-5 text-slate-600">
                    <li>Reference link or competitor SKU</li>
                    <li>Target market and channel (Amazon, retail, fleet)</li>
                    <li>Desired differentiation (look, spec, packaging)</li>
                    <li>Launch timeline and forecast</li>
                </ul>
            </div>
             <img src="https://picsum.photos/seed/lab_test/800/500" alt="Lab Testing" className="rounded-xl shadow-lg w-full h-full object-cover min-h-[300px]" />
        </div>

        <CtaBlock
          title="Next Step"
          primary={{
            title: "Request an Engineering Review",
            description:
              "Tell us your target market, quantity, and customization needs. We respond within 24 hours with practical guidance and next steps.",
            linkLabel: "Request Review",
            href: "/contact",
          }}
          secondary={{
            title: "Request a Prototype Plan",
            description: "Verify fit, finish, and performance before you scale. Stock samples or branded samples are both available.",
            linkLabel: "Request Plan",
            href: "/contact",
          }}
        />
      </Section>
    </div>
  );
};

export default EngineeringLab;
