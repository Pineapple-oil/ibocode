import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    category: 'Market Trends',
    title: 'The Shift to USB-C PD in Automotive: What Wholesalers Need to Know',
    excerpt:
      'As EU mandates USB-C for consumer electronics, the automotive aftermarket is racing to catch up. Here is why high-wattage PD matters.',
    date: 'Oct 12, 2023',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/blog-trends/900/620',
  },
  {
    category: 'Engineering & Quality',
    title: 'Reducing Return Rates: Why Heat Dissipation Matters in Car Chargers',
    excerpt:
      'High return rates often stem from a single invisible factor: heat. Learn how material choice and circuit design impact longevity.',
    date: 'Sep 28, 2023',
    readTime: '4 min read',
    image: 'https://picsum.photos/seed/blog-quality/900/620',
  },
  {
    category: 'Compliance',
    title: 'EU RoHS vs. REACH: Compliance Checklist for Auto Accessories',
    excerpt:
      'Navigating European compliance can be tricky. We break down the essential documentation you need before importing into the EU.',
    date: 'Sep 15, 2023',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/blog-compliance/900/620',
  },
  {
    category: 'Sourcing Strategy',
    title: 'Packaging for Retail vs. E-commerce: A Cost Analysis',
    excerpt:
      'Retail boxes need to sell. E-commerce boxes need to survive. How to choose the right packaging strategy for your channel.',
    date: 'Aug 22, 2023',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/blog-packaging/900/620',
  },
  {
    category: 'Product News',
    title: '2025 Trend Report: Magnetic Mounts and MagSafe Ecosystems',
    excerpt:
      'The magnetic ecosystem is expanding beyond phones. See how new magnetic standards are influencing car mount designs.',
    date: 'Aug 10, 2023',
    readTime: '3 min read',
    image: 'https://picsum.photos/seed/blog-product/900/620',
  },
  {
    category: 'Sourcing Strategy',
    title: 'How to Choose the Right OEM Partner in China',
    excerpt:
      'Beyond the price tag: assessing communication, IP protection, and crisis management capabilities for long-term stability.',
    date: 'Jul 05, 2023',
    readTime: '7 min read',
    image: 'https://picsum.photos/seed/blog-partner/900/620',
  },
];

const Blog: React.FC = () => {
  return (
    <div className="bg-paper text-ink">
      <section className="relative overflow-hidden bg-white border-b border-ink/10">
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="absolute -top-20 -right-12 h-60 w-60 rounded-full bg-brand/30 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Insights for global buyers</p>
            <h1 className="font-display text-4xl md:text-5xl text-ink mt-4">
              COSUN Blog: Market, Engineering, and Compliance Updates
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Practical insights for B2B buyers in auto accessories. Read about market shifts, QC tactics, and compliance checklists.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group bg-white border border-ink/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/90 text-ink text-[11px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-white/60">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={14} /> {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={14} /> {post.readTime}
                  </span>
                </div>
                <h2 className="font-display text-xl text-ink mt-4 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-600 mt-3">{post.excerpt}</p>
                <a
                  href="/blog/single"
                  className="inline-flex items-center gap-2 text-brand-text font-semibold text-sm mt-5 hover:underline"
                >
                  Read Full Article <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-white border border-ink/10 rounded-full px-3 py-2 shadow-sm">
            <button type="button" className="w-9 h-9 rounded-full bg-brand text-ink font-semibold">1</button>
            <button type="button" className="w-9 h-9 rounded-full text-slate-500 hover:text-ink hover:bg-slate-100">2</button>
            <button type="button" className="w-9 h-9 rounded-full text-slate-500 hover:text-ink hover:bg-slate-100">3</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
