import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';

const QualityControl: React.FC = () => {
  return (
    <div>
      <Section light>
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">Quality Control Process</h1>
                <p className="text-xl text-slate-600 mb-8">
                    Batch consistency is what separates a one-time supplier from a long-term factory partner. Our QC process is structured
                    to keep small variations from becoming big problems.
                </p>
                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 border-l-4 border-brand">
                        <h2 className="text-2xl font-bold text-slate-900">IQC  -  Incoming Quality Control</h2>
                        <p className="text-slate-600 mt-2">
                            Key materials and components are verified before they enter production to prevent hidden defects from surfacing after shipping.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 border-l-4 border-brand">
                        <h2 className="text-2xl font-bold text-slate-900">IPQC  -  In-Process Quality Control</h2>
                        <p className="text-slate-600 mt-2">
                            Critical points are checked during assembly to reduce rework, protect timelines, and improve repeatability.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 border-l-4 border-brand">
                        <h2 className="text-2xl font-bold text-slate-900">FQC/OQC  -  Final & Outgoing Check</h2>
                        <p className="text-slate-600 mt-2">
                            Functional checks, appearance inspections, and packing verification to ensure the product you approved is the product you receive.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid gap-6">
                 <img src="https://picsum.photos/seed/iqc/600/400" className="rounded-xl shadow-lg w-full h-64 object-cover" alt="IQC"/>
                 <img src="https://picsum.photos/seed/ipqc/600/400" className="rounded-xl shadow-lg w-full h-64 object-cover" alt="IPQC"/>
                 <img src="https://picsum.photos/seed/fqc/600/400" className="rounded-xl shadow-lg w-full h-64 object-cover" alt="FQC"/>
            </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-xl text-center border border-slate-100">
            <h3 className="font-bold text-2xl mb-4">Optional: Inspection Standards Agreement</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
                For buyers who need stronger control, we can align on inspection items, photo checklists, and acceptance criteria (AQL).
            </p>
        </div>

        <CtaBlock
          title="Next Step"
          primary={{
            title: "Ask for a QC Checklist Sample",
            description:
              "Tell us your target market, quantity, and customization needs. We respond within 24 hours with a practical checklist and next steps.",
            linkLabel: "Request Checklist",
            href: "/contact",
          }}
          secondary={{
            title: "Start a Pilot Order",
            description: "Verify fit, finish, and performance before you scale. Stock samples or branded samples are both available.",
            linkLabel: "Start Pilot",
            href: "/contact",
          }}
        />
      </Section>
    </div>
  );
};

export default QualityControl;
