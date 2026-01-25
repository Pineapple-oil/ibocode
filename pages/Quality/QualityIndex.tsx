import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { Link } from 'react-router-dom';
import { ShieldCheck, Activity, FileCheck, ArrowRight } from 'lucide-react';

const QualityIndex: React.FC = () => {
  return (
    <div>
        <div className="relative bg-slate-900 text-white py-20 lg:py-28">
             <div className="absolute inset-0 overflow-hidden">
                <img 
                    src="https://picsum.photos/seed/inspection/1920/800" 
                    alt="Quality Inspection" 
                    className="w-full h-full object-cover opacity-20"
                />
             </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Quality & Compliance</h1>
            <p className="text-xl text-slate-300 max-w-3xl">
                In B2B, quality is not a nice-to-have - it is the cost of staying in business. Our approach is built around
                consistent batches, documented checkpoints, and destination-market readiness.
            </p>
            </div>
        </div>

        <Section light>
            <div className="grid md:grid-cols-3 gap-8">
                 <Link to="/quality/process" className="block bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                    <div className="h-48 bg-slate-100 relative">
                        <img src="https://picsum.photos/seed/qc_process/600/400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Process"/>
                    </div>
                    <div className="p-8">
                        <Activity className="text-brand mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-2">Quality Control Process</h3>
                        <p className="text-slate-600 mb-6">IQC to IPQC to FQC/OQC workflows designed to prevent hidden defects.</p>
                         <span className="text-yellow-700 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Explore Process <ArrowRight size={16}/></span>
                    </div>
                 </Link>
                 <Link to="/quality/reliability" className="block bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                     <div className="h-48 bg-slate-100 relative">
                        <img src="https://picsum.photos/seed/reliability/600/400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Reliability"/>
                    </div>
                    <div className="p-8">
                        <ShieldCheck className="text-brand mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-2">Reliability Testing</h3>
                        <p className="text-slate-600 mb-6">Heat, vibration, aging, and insertion cycle checks to reduce returns.</p>
                        <span className="text-yellow-700 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">View Tests <ArrowRight size={16}/></span>
                    </div>
                 </Link>
                 <Link to="/quality/certifications" className="block bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                     <div className="h-48 bg-slate-100 relative">
                        <img src="https://picsum.photos/seed/certs/600/400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Certs"/>
                    </div>
                    <div className="p-8">
                        <FileCheck className="text-brand mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-2">Certifications & Compliance</h3>
                        <p className="text-slate-600 mb-6">Planning for CE, RoHS, FCC pathways and destination labeling.</p>
                        <span className="text-yellow-700 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Check Compliance <ArrowRight size={16}/></span>
                    </div>
                 </Link>
            </div>

            <div className="mt-16 bg-slate-50 p-8 rounded-xl text-center max-w-4xl mx-auto">
                <p className="text-xl text-slate-800 font-medium">We provide decision-ready materials: spec sheets, packaging specs, inspection checklists, and clear revision control.</p>
            </div>

            <CtaBlock
              title="Next Step"
              primary={{
                title: "Request Quality Documentation Checklist",
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

export default QualityIndex;
