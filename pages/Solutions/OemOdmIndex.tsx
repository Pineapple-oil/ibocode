import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { Link } from 'react-router-dom';
import { PenTool, Box, Settings, Sliders, ArrowRight, FileText, TrendingUp } from 'lucide-react';

const OemOdmIndex: React.FC = () => {
  return (
    <div>
        <div className="relative bg-slate-900 text-white py-20 lg:py-28">
             <div className="absolute inset-0 overflow-hidden">
                <img 
                    src="https://picsum.photos/seed/design/1920/800" 
                    alt="Design" 
                    className="w-full h-full object-cover opacity-20"
                />
             </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">OEM & ODM Solutions</h1>
            <p className="text-xl text-slate-300 max-w-3xl">
                OEM/ODM should not feel like a gamble. Buyers hesitate after missed deadlines, vague updates, and quality drift after the sample stage.
                Our program is built around clear checkpoints, documented revisions, and predictable execution - so you stay in control from prototype to mass production.
            </p>
            </div>
        </div>

        <Section light>
            <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold mb-4">Engagement Models</h2>
                 <p className="text-slate-600 max-w-2xl mx-auto">Flexible ways to work with us, depending on your design readiness.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-20">
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                    <div className="h-48 bg-slate-100 relative">
                        <img src="https://picsum.photos/seed/oem/600/400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="OEM"/>
                         <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Most Popular</div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-xl font-bold mb-2">OEM (Build-to-Print)</h3>
                        <p className="text-slate-600 mb-4">You specify; we execute. Perfect for brands with existing designs needing manufacturing discipline.</p>
                        <span className="text-brand-text text-sm font-bold">Best for: Established Brands</span>
                    </div>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                     <div className="h-48 bg-slate-100 relative">
                        <img src="https://picsum.photos/seed/odm/600/400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="ODM"/>
                    </div>
                    <div className="p-8">
                        <h3 className="text-xl font-bold mb-2">ODM (Design + Build)</h3>
                        <p className="text-slate-600 mb-4">You select a base platform; we tailor appearance, specs, and packaging to make it yours.</p>
                        <span className="text-brand-text text-sm font-bold">Best for: Fast Launch</span>
                    </div>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                     <div className="h-48 bg-slate-100 relative">
                        <img src="https://picsum.photos/seed/hybrid/600/400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Hybrid"/>
                    </div>
                    <div className="p-8">
                        <h3 className="text-xl font-bold mb-2">Hybrid</h3>
                        <p className="text-slate-600 mb-4">Start from an existing design for speed, then evolve into deeper customization over time.</p>
                        <span className="text-brand-text text-sm font-bold">Best for: Startups</span>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                     <h2 className="text-3xl font-bold mb-6">What We Support</h2>
                     <div className="grid gap-6">
                        <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
                             <div className="bg-white p-3 rounded-full h-fit shadow-sm"><Box size={24} className="text-brand"/></div>
                             <div>
                                <h3 className="font-bold text-lg mb-1">Private Label Programs</h3>
                                <p className="text-slate-600 text-sm">Logo application, retail packaging options, barcodes, inserts, QR cards, and listing-ready support.</p>
                             </div>
                        </div>
                        <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
                             <div className="bg-white p-3 rounded-full h-fit shadow-sm"><Sliders size={24} className="text-brand"/></div>
                             <div>
                                <h3 className="font-bold text-lg mb-1">Product Customization</h3>
                                <p className="text-slate-600 text-sm">Port mix, output tiers, materials and finish, structure options, and usability details.</p>
                             </div>
                        </div>
                        <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
                             <div className="bg-white p-3 rounded-full h-fit shadow-sm"><PenTool size={24} className="text-brand"/></div>
                             <div>
                                <h3 className="font-bold text-lg mb-1">Engineering Collaboration</h3>
                                <p className="text-slate-600 text-sm">DFM review, rapid prototyping, performance tuning, and failure-mode thinking.</p>
                             </div>
                        </div>
                        <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
                             <div className="bg-white p-3 rounded-full h-fit shadow-sm"><TrendingUp size={24} className="text-brand"/></div>
                             <div>
                                <h3 className="font-bold text-lg mb-1">Supply Chain & Cost Engineering</h3>
                                <p className="text-slate-600 text-sm">Multi-tier BOM options, packaging optimization, pricing ladders, and forecast-friendly replenishment.</p>
                             </div>
                        </div>
                        <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
                             <div className="bg-white p-3 rounded-full h-fit shadow-sm"><FileText size={24} className="text-brand"/></div>
                             <div>
                                <h3 className="font-bold text-lg mb-1">Documentation & Compliance Planning</h3>
                                <p className="text-slate-600 text-sm">CE and RoHS readiness, FCC pathways, ISO 9001 aligned QMS documentation, and labeling planning.</p>
                             </div>
                        </div>
                        <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
                             <div className="bg-white p-3 rounded-full h-fit shadow-sm"><Settings size={24} className="text-brand"/></div>
                             <div>
                                <h3 className="font-bold text-lg mb-1">Repeat-Order Stability</h3>
                                <p className="text-slate-600 text-sm">Revision control, aligned inspection standards, lot traceability, and locked packaging specs.</p>
                             </div>
                        </div>
                     </div>
                     <div className="flex gap-6 mt-8">
                        <Link to="/oem-odm/customization" className="text-brand-text font-bold hover:underline flex items-center gap-2">View Customization Options <ArrowRight size={16}/></Link>
                        <Link to="/oem-odm/process" className="text-brand-text font-bold hover:underline flex items-center gap-2">View Process Steps <ArrowRight size={16}/></Link>
                    </div>
                </div>
                <img src="https://picsum.photos/seed/custom_product/800/800" className="rounded-2xl shadow-xl w-full object-cover h-[600px]" alt="Custom Product" />
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 md:p-12 mb-12">
                <h2 className="text-2xl font-bold mb-4">Where Buyers Win</h2>
                <p className="text-slate-600 mb-6 max-w-3xl">
                    You win when your SKU earns positive reviews, stays in stock, and scales without surprises.
                </p>
                <ul className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                    <li className="flex items-start gap-3"><ArrowRight size={16} className="text-brand mt-1" /> Launch faster with prototyping support and practical engineering feedback</li>
                    <li className="flex items-start gap-3"><ArrowRight size={16} className="text-brand mt-1" /> Reduce returns by addressing fit, heat, durability, and packaging protection up front</li>
                    <li className="flex items-start gap-3"><ArrowRight size={16} className="text-brand mt-1" /> Protect brand reputation through consistent batches and controlled revisions</li>
                    <li className="flex items-start gap-3"><ArrowRight size={16} className="text-brand mt-1" /> Build a long-term supply chain partner instead of switching factories</li>
                </ul>
            </div>

            <CtaBlock
              title="Next Step"
              primary={{
                title: "Start an OEM/ODM RFQ",
                description:
                  "Tell us your target market, quantity, and customization needs. We respond within 24 hours with a practical quote and clear next steps.",
                linkLabel: "Start RFQ",
                href: "/contact",
              }}
              secondary={{
                title: "Request a Prototype Plan",
                description: "Share your reference product and timeline. We propose the fastest path from sample to stable mass production.",
                linkLabel: "Request Plan",
                href: "/contact",
              }}
            />
        </Section>
    </div>
  );
};

export default OemOdmIndex;
