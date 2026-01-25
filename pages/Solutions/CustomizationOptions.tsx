import React from 'react';
import { Section } from '../../components/Section';
import { CtaBlock } from '../../components/CtaBlock';
import { Layers, Package, FileText } from 'lucide-react';

const CustomizationOptions: React.FC = () => {
  return (
    <div>
      <Section light>
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Customization Options</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Customization is not about adding complexity - it's about adding value buyers can see and feel.
            </p>
            <p className="text-sm text-slate-500 mt-4 max-w-3xl mx-auto">
                The strongest private-label SKUs share three traits: a distinct look, reliable performance, and packaging that communicates value instantly.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all bg-white">
                <div className="h-48 bg-slate-100">
                    <img src="https://picsum.photos/seed/product_finish/600/400" alt="Product" className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Layers className="text-brand" size={28} />
                        <h3 className="text-xl font-bold">Product</h3>
                    </div>
                    <ul className="space-y-3 text-slate-600 text-sm">
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5 flex-shrink-0"></div> <span><strong>Housing & Finish:</strong> Color, texture, coating, logo placement.</span></li>
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5 flex-shrink-0"></div> <span><strong>Port Config:</strong> USB-A/C mix, PD/QC protocols.</span></li>
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5 flex-shrink-0"></div> <span><strong>Structure:</strong> Mount geometry, base stability, cable length.</span></li>
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5 flex-shrink-0"></div> <span><strong>UX:</strong> Indicator lights, one-hand operation.</span></li>
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5 flex-shrink-0"></div> <span><strong>Project:</strong> Custom molds and structure changes for true differentiation.</span></li>
                    </ul>
                </div>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all bg-white">
                <div className="h-48 bg-slate-100">
                    <img src="https://picsum.photos/seed/retail_box/600/400" alt="Packaging" className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Package className="text-brand" size={28} />
                        <h3 className="text-xl font-bold">Packaging</h3>
                    </div>
                    <ul className="space-y-3 text-slate-600 text-sm">
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5 flex-shrink-0"></div> <span>Retail color boxes, blister packs, window boxes, gift sets, or bulk export cartons.</span></li>
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5 flex-shrink-0"></div> <span>SKU labeling: barcodes, QR instructions, inserts, multilingual warnings.</span></li>
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5 flex-shrink-0"></div> <span>Photography support for listings.</span></li>
                    </ul>
                </div>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all bg-white">
                <div className="h-48 bg-slate-100">
                    <img src="https://picsum.photos/seed/docs/600/400" alt="Docs" className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <FileText className="text-brand" size={28} />
                        <h3 className="text-xl font-bold">Compliance</h3>
                    </div>
                    <ul className="space-y-3 text-slate-600 text-sm">
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5 flex-shrink-0"></div> <span>CE and RoHS planning for EU and UK markets.</span></li>
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5 flex-shrink-0"></div> <span>FCC authorization planning for US products with RF energy.</span></li>
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5 flex-shrink-0"></div> <span>Destination-market documentation and labeling checklist.</span></li>
                    </ul>
                    <p className="text-xs text-slate-500 mt-4">Tell us your destination market and product type and we will recommend a practical checklist.</p>
                </div>
            </div>
        </div>

        <CtaBlock
          title="Next Step"
          primary={{
            title: "Request a Customization Proposal",
            description:
              "Tell us your target market, quantity, and customization needs. We respond within 24 hours with a practical quote and clear next steps.",
            linkLabel: "Request Proposal",
            href: "/contact",
          }}
          secondary={{
            title: "Get a Branded Sample",
            description: "Verify fit, finish, and performance before you scale. Stock samples or branded samples are both available.",
            linkLabel: "Request Samples",
            href: "/contact",
          }}
        />
      </Section>
    </div>
  );
};

export default CustomizationOptions;
