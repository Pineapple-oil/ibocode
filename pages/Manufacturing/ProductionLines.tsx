import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';

const ProductionLines: React.FC = () => {
  return (
    <div>
      <Section light>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">Production Lines & Equipment</h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    Buyers in mature markets care about process discipline. When you scale from 500 units to 50,000 units, you need the product to stay the same. We use automated and semi-automated lines to ensure consistency.
                </p>
            </div>
             <img src="https://picsum.photos/seed/equip/800/600" alt="Equipment" className="rounded-xl shadow-lg w-full h-80 object-cover" />
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-8 lg:p-12 shadow-sm mb-12">
            <h2 className="text-2xl font-bold mb-8">Process Control Focus</h2>
            <div className="grid md:grid-cols-2 gap-8 relative">
                 {/* Connecting line for desktop could go here, but keeping it simple for now */}
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 text-brand-text font-bold text-xl flex items-center justify-center rounded-lg">01</div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">Assembly Fixtures</h3>
                            <p className="text-slate-600">Fit controls and jigs for repeatable installation, reducing operator error.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 text-brand-text font-bold text-xl flex items-center justify-center rounded-lg">02</div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">ESD Protection</h3>
                            <p className="text-slate-600">Static control flooring and wrist straps for electronic component handling.</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 text-brand-text font-bold text-xl flex items-center justify-center rounded-lg">03</div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">Functional Testing</h3>
                            <p className="text-slate-600">Test checks designed around real failure causes, not just appearance.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 text-brand-text font-bold text-xl flex items-center justify-center rounded-lg">04</div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">Final Packing Check</h3>
                            <p className="text-slate-600">Packing verification to prevent shipping damage and receiving errors.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
             <img src="https://picsum.photos/seed/line1/600/400" alt="Line 1" className="rounded-lg shadow-sm w-full h-48 object-cover"/>
             <img src="https://picsum.photos/seed/line2/600/400" alt="Line 2" className="rounded-lg shadow-sm w-full h-48 object-cover"/>
             <img src="https://picsum.photos/seed/line3/600/400" alt="Line 3" className="rounded-lg shadow-sm w-full h-48 object-cover"/>
        </div>

        <div className="p-8 bg-yellow-50 rounded-xl border border-yellow-100">
            <h3 className="font-bold text-yellow-900 text-lg mb-2">Why It Matters</h3>
            <p className="text-yellow-800">This reduces variation, rework, and customer complaints - helping your SKU stay profitable at scale.</p>
        </div>

        <CtaBlock
          title="Next Step"
          primary={{
            title: "Request a Process Flow Snapshot",
            description:
              "Tell us your target market, quantity, and customization needs. We respond within 24 hours with a practical process view and next steps.",
            linkLabel: "Request Snapshot",
            href: "/contact",
          }}
          secondary={{
            title: "Request Samples",
            description: "Verify fit, finish, and performance before you scale. Stock samples or branded samples are both available.",
            linkLabel: "Request Samples",
            href: "/contact",
          }}
        />
      </Section>
    </div>
  );
};

export default ProductionLines;
