import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';

const OemOdmProcess: React.FC = () => {
  return (
    <div>
      <Section light>
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
             <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">OEM & ODM Process</h1>
                <p className="text-xl text-slate-600 mb-8">
                    Your biggest risk is not the first sample - it is what happens after. Our process protects you from silent changes,
                    unclear decisions, and quality drift between sample and mass production.
                </p>
                <div className="space-y-8">
                    {[
                        { step: 1, title: "Requirements & Market Alignment", desc: "Confirm destination market, sales channel, compliance needs, target price, and customer expectations to prevent redesign loops." },
                        { step: 2, title: "DFM Review & Prototyping", desc: "Propose structure and BOM direction, then build prototypes to validate fit, finish, and user experience." },
                        { step: 3, title: "Testing & Validation", desc: "Validate performance factors that drive returns: heat behavior, stability, repeated use cycles, and packaging protection." },
                        { step: 4, title: "Mass Production with Checkpoints", desc: "Incoming checks, in-process inspection, and final functional testing with aligned inspection standards." },
                        { step: 5, title: "Delivery & Repeat-Order Support", desc: "Export packing, carton marking, shipping coordination, and revision control for repeat orders." }
                    ].map((item) => (
                        <div key={item.step} className="flex gap-6 relative">
                            {/* Vertical line connecting steps */}
                            {item.step !== 5 && <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-slate-200 -ml-px h-full"></div>}
                            
                            <div className="flex-shrink-0 w-12 h-12 bg-brand text-slate-900 rounded-full flex items-center justify-center font-bold text-lg shadow-sm z-10">
                                {item.step}
                            </div>
                            <div className="pb-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
             <div className="sticky top-24">
                <img src="https://picsum.photos/seed/process_chart/800/1000" alt="Process Flow" className="rounded-xl shadow-xl w-full h-auto object-cover" />
                
                <div className="bg-slate-50 p-8 rounded-xl mt-8 border border-slate-100">
                    <h2 className="text-2xl font-bold mb-4">RFQ Checklist (What We Need)</h2>
                     <ul className="list-disc pl-5 space-y-3 text-slate-600">
                        <li>Product type + reference links/photos</li>
                        <li>Target market (EU/US/UK) and required labels or marks</li>
                        <li>Quantity (trial + forecast)</li>
                        <li>Customization scope (logo, packaging, structure, spec)</li>
                        <li>Timeline and delivery destination</li>
                    </ul>
                </div>
             </div>
        </div>

        <CtaBlock
          title="Next Step"
          primary={{
            title: "Request a Quote",
            description:
              "Tell us your target market, quantity, and customization needs. We respond within 24 hours with a practical quote and clear next steps.",
            linkLabel: "Request Quote",
            href: "/contact",
          }}
          secondary={{
            title: "Ask for a Prototype Timeline",
            description: "Share your reference product and timeline. We will propose the fastest path from sample to stable mass production.",
            linkLabel: "Request Timeline",
            href: "/contact",
          }}
        />
      </Section>
    </div>
  );
};

export default OemOdmProcess;
