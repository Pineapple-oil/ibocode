import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { CheckCircle, ClipboardList, Factory, FileText, Globe, ShieldCheck, Users, Wrench } from 'lucide-react';

const CompanyProfile: React.FC = () => {
  return (
    <div className="bg-paper text-ink">
      <Section light>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Company Profile</h1>
            <div className="prose prose-lg text-slate-600">
              <p className="lead text-xl font-medium text-slate-800 mb-4">
                Cosun Global Electronic Manufacturing (COSUN) was built for global B2B buyers who want less drama and more predictable outcomes. 
              </p>
              <p className="mb-4">
                Since 2010, we've grown by solving the problems procurement teams remember most: inconsistent batches, unclear specs, slow replies, and shipments that don't match the approved sample.
              </p>
              <p>
                Today, COSUN supports wholesalers, brand owners, retailers, and importers across North America and Europe with a simple promise: stable quality, factory-direct efficiency, and clear communication.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
             <img src="https://picsum.photos/seed/building/800/800" alt="COSUN Headquarters" className="absolute inset-0 w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-lg">Founded 2010</p>
                  <p className="text-sm opacity-90">Dongguan, China</p>
                </div>
             </div>
          </div>
        </div>
          
        <div className="grid md:grid-cols-2 gap-12 mb-16">
             <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-4"><Globe size={24} className="text-brand"/> Our Mission</h3>
                  <p className="text-slate-700 text-lg">To power the driving experience with practical in-vehicle accessories - built to survive real use, not just pass a photo test.</p>
                </div>
                <img src="https://picsum.photos/seed/mission/600/300" alt="Mission" className="mt-8 rounded-lg w-full object-cover h-48"/>
             </div>
             <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-4"><Factory size={24} className="text-brand"/> Our Vision</h3>
                  <p className="text-slate-700 text-lg">To become a long-term manufacturing partner for automotive accessory brands worldwide - helping customers launch faster, reduce returns, and scale repeat orders.</p>
                </div>
                <img src="https://picsum.photos/seed/vision/600/300" alt="Vision" className="mt-8 rounded-lg w-full object-cover h-48"/>
             </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
               <div className="grid grid-cols-2 gap-4">
                  <img src="https://picsum.photos/seed/prod1/400/400" className="rounded-lg shadow-sm w-full h-48 object-cover"/>
                  <img src="https://picsum.photos/seed/prod2/400/400" className="rounded-lg shadow-sm w-full h-48 object-cover translate-y-4"/>
                  <img src="https://picsum.photos/seed/prod3/400/400" className="rounded-lg shadow-sm w-full h-48 object-cover"/>
                  <img src="https://picsum.photos/seed/prod4/400/400" className="rounded-lg shadow-sm w-full h-48 object-cover translate-y-4"/>
               </div>
            </div>
            <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">What We Make</h2>
                <p className="text-lg text-slate-600 mb-6">We focus on high-velocity automotive accessories that solve everyday needs and perform consistently in real car environments:</p>
                <ul className="space-y-3">
                  {[
                    'Car cigarette lighter sockets (12V/24V replacement and panel-mount)',
                    'USB car chargers (USB-A/USB-C; PD/QC options by project)',
                    'Magnetic phone mounts and car holders',
                    'Temporary parking number plates',
                    'Car cup holders and ashtrays',
                    'In-vehicle power adapters and splitters',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-brand rounded-full flex-shrink-0"></span>
                        <span className="text-slate-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
            </div>
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-8 lg:p-12 mb-16">
           <h2 className="text-3xl font-bold mb-8 text-center">Who We Serve</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               { t: "Wholesalers & Importers", d: "Stable replenishment and fewer receiving surprises." },
               { t: "Brand Owners", d: "Private-label lines with differentiation customers can feel." },
               { t: "Retailers", d: "Shelf presentation, packaging clarity, and defect control." },
               { t: "E-commerce Sellers", d: "Fighting return rates, reviews, and listing compliance." },
               { t: "Fleet / Commercial", d: "Reliability and repeatable supply." }
             ].map((item, i) => (
               <div key={i} className="flex items-start gap-3">
                 <CheckCircle size={24} className="text-brand mt-1 flex-shrink-0"/>
                 <div>
                   <h4 className="font-bold text-lg mb-1">{item.t}</h4>
                   <p className="text-slate-300 text-sm">{item.d}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why COSUN</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
              <Factory size={24} className="text-brand mb-4" />
              <h3 className="text-lg font-bold mb-3">Factory Advantages</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>10 structured production lines or work cells for scale-ready workflow</li>
                <li>Standardized work instructions and checkpoints reduce variation</li>
                <li>Functional testing aligned to common failure causes</li>
                <li>Revision control so approved stays approved</li>
              </ul>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
              <Users size={24} className="text-brand mb-4" />
              <h3 className="text-lg font-bold mb-3">Company Advantages</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>Clear RFQ inputs for faster, accurate quotes</li>
                <li>Faster decisions with engineering and production aligned</li>
                <li>Photo or video confirmations during pilot runs</li>
                <li>Export-ready communication that respects your timeline</li>
              </ul>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
              <Wrench size={24} className="text-brand mb-4" />
              <h3 className="text-lg font-bold mb-3">Pricing Advantage</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>Factory-direct efficiency with clear cost structure</li>
                <li>Value engineering tiers to hit target price</li>
                <li>Stable repeat orders reduce rework and claims</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Quality and Compliance Mindset</h3>
            <p className="text-slate-600 mb-6">
              Compliance planning protects your listings, reduces customs delays, and strengthens buyer confidence. We align
              documentation and labeling based on your product configuration and destination market.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600">
              <div className="flex items-start gap-3"><ShieldCheck size={18} className="text-brand mt-1" /> EU Declaration of Conformity and CE readiness</div>
              <div className="flex items-start gap-3"><FileText size={18} className="text-brand mt-1" /> RoHS substance restrictions for electronics</div>
              <div className="flex items-start gap-3"><Globe size={18} className="text-brand mt-1" /> FCC equipment authorization pathways</div>
              <div className="flex items-start gap-3"><ClipboardList size={18} className="text-brand mt-1" /> ISO 9001 aligned QMS documentation if required</div>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">How We Work</h3>
            <ol className="space-y-3 text-sm text-slate-600">
              <li><span className="font-semibold text-slate-800">01.</span> Confirm market requirements, channel expectations, and reliability specs.</li>
              <li><span className="font-semibold text-slate-800">02.</span> Prototype quickly to validate fit, finish, and user experience.</li>
              <li><span className="font-semibold text-slate-800">03.</span> Lock spec, packaging, and labeling before mass production.</li>
              <li><span className="font-semibold text-slate-800">04.</span> Run production with checkpoints and documented revisions.</li>
              <li><span className="font-semibold text-slate-800">05.</span> Support export packing and repeat-order stability as you scale.</li>
            </ol>
          </div>
        </div>

        <CtaBlock
          title="Next Step"
          primary={{
            title: "Start an RFQ",
            description:
              "Share target market, quantity, and customization needs. We respond within 24 hours with a practical quote and clear next steps.",
            linkLabel: "Start RFQ",
            href: "/contact",
          }}
          secondary={{
            title: "Request Samples",
            description: "Validate fit, finish, and performance before you scale. Stock samples or branded samples are both available.",
            linkLabel: "Request Samples",
            href: "/contact",
          }}
        />
      </Section>
    </div>
  );
};

export default CompanyProfile;

