import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useQuoteModal } from '../../components/QuoteModal';

const products = [
  {
    title: 'Magnetic Wireless Charger Pro',
    code: 'CS-M15-PRO',
    image: 'https://picsum.photos/seed/product-1/600/420',
    badges: ['Hot'],
    tags: ['15W Wireless', 'N52 Magnets'],
    href: '/#/products/phone-mounts/magnetic-wireless-charger-pro',
  },
  {
    title: 'Gravity Linkage Mount',
    code: 'CS-G10-STD',
    image: 'https://picsum.photos/seed/product-2/600/420',
    badges: [],
    tags: ['Auto-Lock', 'Silicone Grip'],
    href: '/#/products/phone-mounts/magnetic-wireless-charger-pro',
  },
  {
    title: 'Heavy Duty Suction Mount',
    code: 'CS-S20-MAX',
    image: 'https://picsum.photos/seed/product-3/600/420',
    badges: ['New'],
    tags: ['Telescopic Arm', 'Sticky Gel Base'],
    href: '/#/products/phone-mounts/magnetic-wireless-charger-pro',
  },
  {
    title: 'MagSafe Dashboard Mount',
    code: 'CS-M12-DASH',
    image: 'https://picsum.photos/seed/product-4/600/420',
    badges: [],
    tags: ['Zinc Alloy', 'Minimalist Design'],
    href: '/#/products/phone-mounts/magnetic-wireless-charger-pro',
  },
];

const newArrivals = [
  { title: 'Heavy Duty Suction Mount', code: 'CS-S20-MAX', image: 'https://picsum.photos/seed/new-1/200/160' },
  { title: 'Transparent 30W Charger', code: 'CS-TR30-TECH', image: 'https://picsum.photos/seed/new-2/200/160' },
  { title: 'OBD Power Adapter', code: 'CS-OBD-AIR', image: 'https://picsum.photos/seed/new-3/200/160' },
];

const ProductsIndex: React.FC = () => {
  const quoteModal = useQuoteModal();

  return (
    <div className="bg-paper text-ink">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <a href="/#/" className="hover:text-ink">Home</a>
          <ChevronRight size={14} />
          <a href="/#/products" className="hover:text-ink">Products</a>
          <ChevronRight size={14} />
          <span className="text-slate-400">Phone Mounts & Holders</span>
        </div>
        <div className="mt-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <h1 className="font-display text-3xl md:text-4xl text-ink">Phone Mounts & Holders</h1>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Magnetic, gravity, and clamp-style mounts with industrial-grade suction and vent clips. Designed for stability on rough terrain.
            </p>
          </div>
          <div className="text-xs text-slate-500 uppercase tracking-[0.2em]">4 Products Available</div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10">
          <aside className="space-y-6">
            <div className="bg-white border border-ink/10 rounded-2xl p-5 shadow-sm">
              <h3 className="text-xs uppercase tracking-[0.28em] text-slate-500 mb-4">Categories</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center justify-between text-ink font-semibold">
                  Phone Mounts & Holders <ChevronRight size={14} />
                </li>
                <li className="text-slate-500 hover:text-ink transition-colors">USB Car Chargers</li>
                <li className="text-slate-500 hover:text-ink transition-colors">Cables & Adapters</li>
                <li className="text-slate-500 hover:text-ink transition-colors">Interior Accessories</li>
              </ul>
            </div>

            <div className="bg-white border border-ink/10 rounded-2xl p-5 shadow-sm">
              <h3 className="text-xs uppercase tracking-[0.28em] text-slate-500 mb-4">New Arrivals</h3>
              <div className="space-y-4">
                {newArrivals.map((item) => (
                  <div key={item.code} className="flex items-center gap-3">
                    <img src={item.image} alt={item.title} className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <p className="text-sm font-semibold text-ink">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.code}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.code} className="bg-white border border-ink/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                <div className="relative h-44 overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                  {product.badges.map((badge) => (
                    <span
                      key={badge}
                      className="absolute top-3 left-3 bg-brand text-ink text-[11px] font-semibold uppercase px-2 py-1 rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">{product.code}</p>
                  <h3 className="font-display text-lg text-ink">{product.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={product.href} className="inline-flex items-center gap-2 text-brand-text text-sm font-semibold">
                    View Detail <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-ink text-white rounded-2xl p-8 md:p-10 shadow-[0_25px_60px_rgba(15,23,42,0.4)]">
          <h3 className="font-display text-2xl md:text-3xl mb-6">Request a Full Catalog PDF</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-brand text-ink flex items-center justify-center font-bold">→</div>
              <div>
                <h4 className="font-semibold text-white">Request a Quote</h4>
                <p className="text-sm text-white/70 mt-1">
                  Tell us your target market, quantity, and customization needs. We respond within 24 hours with a practical quote.
                </p>
                <button
                  type="button"
                  onClick={() => quoteModal?.open()}
                  className="text-brand font-semibold text-sm mt-2"
                >
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
                <a href="/#/contact" className="text-white/80 font-semibold text-sm mt-2 inline-block">Get Samples →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsIndex;
