import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteContent } from '../content/SiteContentContext';

const Blog: React.FC = () => {
  const { pages } = useSiteContent();
  const content = pages.blog;

  return (
    <div className="bg-paper text-ink">
      <section className="relative overflow-hidden bg-white border-b border-ink/10">
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="absolute -top-20 -right-12 h-60 w-60 rounded-full bg-brand/30 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{content.hero.eyebrow}</p>
            <h1 className="font-display text-4xl md:text-5xl text-ink mt-4">{content.hero.title}</h1>
            <p className="mt-5 text-lg text-slate-600">{content.hero.description}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {content.posts.map((post) => (
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
                <h2 className="font-display text-xl text-ink mt-4 leading-snug">{post.title}</h2>
                <p className="text-sm text-slate-600 mt-3">{post.excerpt}</p>
                <Link
                  to="/blog/single"
                  className="inline-flex items-center gap-2 text-brand-text font-semibold text-sm mt-5 hover:underline"
                >
                  Read Full Article <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-white border border-ink/10 rounded-full px-3 py-2 shadow-sm">
            {content.pagination.pages.map((page) => {
              const isActive = page === content.pagination.active;
              return (
                <button
                  key={page}
                  type="button"
                  className={`w-9 h-9 rounded-full font-semibold ${isActive ? 'bg-brand text-ink' : 'text-slate-500 hover:text-ink hover:bg-slate-100'}`}
                >
                  {page}
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
