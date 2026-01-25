import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useQuoteModal } from '../../components/QuoteModal';

const gallery = [
  'https://picsum.photos/seed/detail-1/1000/800',
  'https://picsum.photos/seed/detail-2/1000/800',
  'https://picsum.photos/seed/detail-3/1000/800',
  'https://picsum.photos/seed/detail-4/1000/800',
  'https://picsum.photos/seed/detail-5/1000/800',
];

const ProductDetail: React.FC = () => {
  const [activeImage, setActiveImage] = useState(gallery[0]);
  const quoteModal = useQuoteModal();

  return (
    <div className="bg-paper text-ink">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <a href="/" className="hover:text-ink">Home</a>
          <ChevronRight size={14} />
          <a href="/products" className="hover:text-ink">Products</a>
          <ChevronRight size={14} />
          <span className="text-slate-400">Phone Mounts & Holders</span>
          <ChevronRight size={14} />
          <span className="text-slate-400">Magnetic Wireless Charger Pro</span>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10">
          <div>
            <div className="relative rounded-2xl overflow-hidden bg-white border border-ink/10 shadow-sm">
              <img src={activeImage} alt="Product" className="w-full h-[360px] md:h-[420px] object-cover" />
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 mt-4">
              {gallery.map((img) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActiveImage(img)}
                  className={`rounded-xl overflow-hidden border ${activeImage === img ? 'border-brand' : 'border-ink/10'}`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-16 object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white border border-ink/10 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h1 className="font-display text-2xl md:text-3xl text-ink">Magnetic Wireless Charger Pro</h1>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Item #: CS-M15-PRO</span>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              {[
                ['Brand', 'COSUN'],
                ['Model', 'CS-M15-PRO'],
                ['Size', '65 x 65 x 90 mm'],
                ['Weight', '125 g'],
                ['Packaging', 'Color Box / Blister (100 pcs/carton)'],
                ['Material', 'Zinc Alloy + Tempered Glass + Silicone'],
                ['Customized', 'Logo, Color, Packaging'],
                ['Shipping', 'Air / Sea / Express (EXW/FOB)'],
                ['Accessories', 'Air Vent Clip, USB-C Cable, User Manual'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-start justify-between gap-4 border-b border-slate-100 pb-2">
                  <span className="text-slate-500">{label}</span>
                  <span className="text-ink font-medium text-right">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => quoteModal?.open()}
                className="flex-1 bg-brand text-ink font-semibold py-3 rounded-full"
              >
                Get a Quote
              </button>
              <a
                href="/contact"
                className="flex-1 bg-slate-900 text-white font-semibold py-3 rounded-full text-center"
              >
                Customization
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white border border-ink/10 rounded-2xl p-8 shadow-sm">
          <h2 className="font-display text-2xl mb-4">Product Description</h2>
          <p className="text-sm text-slate-600 leading-7 max-w-3xl">
            The Magnetic Wireless Charger Pro (CS-M15-PRO) is designed for B2B procurement, offering reliable performance and
            customizable options for your brand. Built with Zinc Alloy + Tempered Glass + Silicone, it ensures durability and
            heat control. We support full OEM customization including logo placement, packaging design, and specific functions.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {['https://picsum.photos/seed/desc-1/600/420', 'https://picsum.photos/seed/desc-2/600/420', 'https://picsum.photos/seed/desc-3/600/420'].map((img) => (
              <img key={img} src={img} alt="Detail" className="rounded-2xl object-cover h-48 w-full" />
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg">Key Features</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc list-inside">
                <li>15W wireless fast charging</li>
                <li>N52 magnet stability</li>
                <li>Heat dissipation structure</li>
                <li>Factory-direct pricing and QC control</li>
                <li>Low MOQ for pilot orders</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">OEM Support</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc list-inside">
                <li>Logo and color matching</li>
                <li>Packaging design and inserts</li>
                <li>Compliance planning (CE, RoHS, FCC)</li>
                <li>Performance tuning for target markets</li>
                <li>Private-label barcode & labeling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-ink text-white rounded-2xl p-8 md:p-10 shadow-[0_25px_60px_rgba(15,23,42,0.4)]">
          <h3 className="font-display text-2xl md:text-3xl mb-6">Ready to start your order?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-brand text-ink flex items-center justify-center font-bold">→</div>
              <div>
                <h4 className="font-semibold text-white">Request a Quote</h4>
                <p className="text-sm text-white/70 mt-1">
                  Tell us your target market, quantity, and customization needs. We aim to respond within 24 hours.
                </p>
                <button type="button" onClick={() => quoteModal?.open()} className="text-brand font-semibold text-sm mt-2">
                  Start RFQ →
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center font-bold">□</div>
              <div>
                <h4 className="font-semibold text-white">Request Samples</h4>
                <p className="text-sm text-white/70 mt-1">
                  Verify fit, finish, and performance before you scale. Stock samples or branded samples are both available.
                </p>
                <a href="/contact" className="text-white/80 font-semibold text-sm mt-2 inline-block">Get Samples →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
