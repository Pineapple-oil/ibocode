import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';

const Reliability: React.FC = () => {
  return (
    <div>
      <Section light>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
             <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">Reliability Testing</h1>
                <p className="text-xl text-slate-600 mb-8">
                    Cars are harsh environments: heat, vibration, and daily plugging. Reliability testing helps you reduce the most expensive issues - returns, bad reviews, and warranty claims.
                </p>
                
                <div className="bg-white shadow-lg border border-slate-200 rounded-xl p-8">
                    <h2 className="text-2xl font-bold mb-6">Common Reliability Checks</h2>
                    <ul className="space-y-4">
                        {[
                            { title: "High/low temperature exposure", desc: "Interior heat resistance." },
                            { title: "Vibration or shake tests", desc: "Mount stability and connector integrity." },
                            { title: "Aging/burn-in", desc: "Stability over time (where applicable)." },
                            { title: "Insertion cycle checks", desc: "Ports, plugs, and moving joints." },
                            { title: "Packaging drop tests", desc: "Reduce transit damage and DOA issues." }
                        ].map((item, i) => (
                            <li key={i} className="flex flex-col border-b border-slate-100 pb-3 last:border-0">
                                <span className="font-bold text-slate-900">{item.title}</span>
                                <span className="text-slate-600 text-sm">{item.desc}</span>
                            </li>
                        ))}
                    </ul>
                </div>
             </div>
             <div className="grid grid-cols-2 gap-4">
                 <img src="https://picsum.photos/seed/test1/400/600" className="rounded-xl shadow-lg w-full h-80 object-cover" alt="Test 1"/>
                 <img src="https://picsum.photos/seed/test2/400/600" className="rounded-xl shadow-lg w-full h-80 object-cover mt-12" alt="Test 2"/>
             </div>
        </div>

        <div className="p-8 bg-slate-900 text-white rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Why Buyers Like This</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">Testing is not just for engineers - it's a risk-reduction tool for procurement. It gives you evidence to defend your brand.</p>
        </div>

        <CtaBlock
          title="Next Step"
          primary={{
            title: "Ask for a Test Plan Recommendation",
            description:
              "Tell us your target market, quantity, and customization needs. We respond within 24 hours with a practical test plan and next steps.",
            linkLabel: "Request Test Plan",
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

export default Reliability;
