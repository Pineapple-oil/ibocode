import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';

const Certifications: React.FC = () => {
  return (
    <div>
      <Section light>
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Certifications & Compliance</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Compliance is part of your brand promise. The right labeling and documentation pathway protects your listings and builds confidence.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all flex flex-col md:flex-row gap-6">
                <div className="w-24 h-24 bg-slate-100 rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-slate-400 text-xl">CE</div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">CE Marking Readiness (EU)</h2>
                    <p className="text-slate-600">
                        We support documentation planning and labeling preparation based on your product type and destination market. Manufacturers must indicate conformity with applicable EU rules.
                    </p>
                </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all flex flex-col md:flex-row gap-6">
                <div className="w-24 h-24 bg-slate-100 rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-slate-400 text-xl">RoHS</div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">RoHS Compliance</h2>
                    <p className="text-slate-600">
                        For electrical equipment, we align materials and documentation pathways to support RoHS compliance expectations regarding hazardous substances.
                    </p>
                </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all flex flex-col md:flex-row gap-6">
                <div className="w-24 h-24 bg-slate-100 rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-slate-400 text-xl">FCC</div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">FCC Authorization (U.S.)</h2>
                    <p className="text-slate-600">
                        FCC recognizes pathways such as Certification and SDoC. Tell us your product configuration and we will suggest a practical next step.
                    </p>
                </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all flex flex-col md:flex-row gap-6">
                <div className="w-24 h-24 bg-slate-100 rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-slate-400 text-xl">ISO</div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">ISO 9001 (Optional)</h2>
                    <p className="text-slate-600">
                        If your sourcing process requires QMS documentation (like ISO 9001), tell us what your vendor onboarding needs include.
                    </p>
                </div>
            </div>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden h-64 bg-slate-900 flex items-center justify-center">
             <img src="https://picsum.photos/seed/cert_docs/1200/400" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Docs"/>
             <div className="relative z-10 text-center px-4">
                 <h3 className="text-2xl font-bold text-white mb-2">Tell us your configuration</h3>
                 <p className="text-slate-300">Share your product type and target market and we will suggest a practical next step for testing and documentation planning.</p>
             </div>
        </div>

        <CtaBlock
          title="Next Step"
          primary={{
            title: "Request a Compliance Checklist",
            description:
              "Tell us your target market, quantity, and customization needs. We respond within 24 hours with a practical checklist and next steps.",
            linkLabel: "Request Checklist",
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

export default Certifications;
