import React from 'react';
import { Section } from '../components/Section';
import { CtaBlock } from '../components/CtaBlock';
import { HelpCircle } from 'lucide-react';

const Faq: React.FC = () => {
  const faqs = [
    { q: "What's your MOQ?", a: "MOQ depends on product type and customization depth. Share your target SKU and sales channel, and we will propose a practical MOQ that supports your launch." },
    { q: "Can I get samples before placing an order?", a: "Yes. We offer stock samples for quick evaluation and branded samples for private-label validation." },
    { q: "What is your typical lead time?", a: "Lead time depends on customization, quantity, and documentation needs. We can provide a sampling plan and a mass production schedule aligned to your launch date." },
    { q: "Do you support OEM/ODM projects?", a: "Yes. We support everything from logo + packaging to structural customization and project-based molds." },
    { q: "Do you provide CE/RoHS/FCC documentation?", a: "We support documentation and labeling planning based on product type and destination market requirements. Tell us where you will sell and what marks your channel requires." },
    { q: "How do you ensure batch consistency?", a: "Through material control, process checkpoints (IQC/IPQC/FQC), and revision control so repeat orders stay consistent." },
    { q: "What's your warranty policy?", a: "Warranty depends on product category and destination market. We align inspection standards and provide practical support to reduce claims." },
    { q: "What payment terms do you accept?", a: "Common options include T/T and other terms depending on project type and order history. We confirm terms during RFQ." },
    { q: "Can you do custom packaging and barcodes?", a: "Yes. We support private label packaging, inserts, barcodes, and QR instruction cards for e-commerce and retail." },
    { q: "How do you handle quality issues?", a: "We rely on evidence, traceability, and root-cause analysis. Practical solutions can include replacement, credit, or corrective actions as agreed." },
    { q: "Can you ship to my forwarder or provide DDP?", a: "We can ship to your forwarder and support common Incoterms (EXW/FOB/CIF). DDP options can be discussed by destination and order size." },
    { q: "Can you help with product photos?", a: "We can provide clean product and packaging photos. Share your platform requirements and we will confirm what's available." }
  ];

  return (
    <div>
      <Section light>
        <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
                 <div className="sticky top-24">
                     <img src="https://picsum.photos/seed/support/600/800" className="rounded-xl shadow-lg w-full h-auto object-cover mb-8" alt="Support" />
                     <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <HelpCircle className="text-brand" size={32}/> FAQ
                        </h1>
                        <p className="text-lg text-slate-600">
                            These are the questions buyers ask before they trust a new supplier. If you do not see yours here, send it and we will answer directly.
                        </p>
                    </div>
                 </div>
            </div>
            
            <div className="lg:col-span-2">
                <div className="grid gap-6">
                    {faqs.map((item, index) => (
                        <div key={index} className="bg-slate-50 p-6 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.q}</h3>
                            <p className="text-slate-600">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <CtaBlock
          title="Next Step"
          primary={{
            title: "Still Have a Question? Request a Quote",
            description:
              "Tell us your target market, quantity, and customization needs. We respond within 24 hours with a practical quote and clear next steps.",
            linkLabel: "Request Quote",
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

export default Faq;

