import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  WpPost,
  formatDate,
  getFeaturedAlt,
  getFeaturedImage,
  getReadTime,
  getTerms,
  stripHtml,
} from '../lib/wp';

interface BlogProps {
  posts: WpPost[];
  pagination: {
    page: number;
    totalPages: number;
    total: number;
  };
}

const buildExcerpt = (post: WpPost, maxLength = 160) => {
  const raw = stripHtml(post.excerpt.rendered) || stripHtml(post.content.rendered);
  if (raw.length <= maxLength) {
    return raw;
  }
  return `${raw.slice(0, maxLength).trim()}...`;
};

const Blog: React.FC<BlogProps> = ({ posts, pagination }) => {
  const heroPost = posts[0];
  const heroCategory = heroPost ? getTerms(heroPost).categories[0]?.name : undefined;
  const heroTitle = heroPost ? stripHtml(heroPost.title.rendered) : 'Blog';
  const heroDescription = heroPost ? buildExcerpt(heroPost, 200) : 'No posts published yet.';
  const pages = Array.from({ length: pagination.totalPages }, (_, index) => index + 1);

  return (
    <div className="bg-paper text-ink">
      <section className="relative overflow-hidden bg-white border-b border-ink/10">
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="absolute -top-20 -right-12 h-60 w-60 rounded-full bg-brand/30 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              {heroCategory ?? 'Updates'}
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-ink mt-4">{heroTitle}</h1>
            <p className="mt-5 text-lg text-slate-600">{heroDescription}</p>
            {heroPost ? (
              <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <Calendar size={14} /> {formatDate(heroPost.date)}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={14} /> {getReadTime(heroPost.content.rendered)}
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {posts.length === 0 ? (
          <div className="rounded-3xl border border-ink/10 bg-white p-10 text-center text-slate-600">
            No posts found. Publish posts in WordPress to populate this page.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {posts.map((post) => {
              const { categories } = getTerms(post);
              const categoryLabel = categories[0]?.name ?? 'Updates';
              const imageUrl = getFeaturedImage(post);
              const imageAlt = getFeaturedAlt(post);
              const excerpt = buildExcerpt(post, 150);
              return (
                <article
                  key={post.id}
                  className="group bg-white border border-ink/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-52 overflow-hidden">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white text-lg font-semibold">
                        {categoryLabel}
                      </div>
                    )}
                    <span className="absolute top-4 left-4 bg-white/90 text-ink text-[11px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-white/60">
                      {categoryLabel}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={14} /> {formatDate(post.date)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={14} /> {getReadTime(post.content.rendered)}
                      </span>
                    </div>
                    <h2 className="font-display text-xl text-ink mt-4 leading-snug">
                      {stripHtml(post.title.rendered)}
                    </h2>
                    <p className="text-sm text-slate-600 mt-3">{excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-brand-text font-semibold text-sm mt-5 hover:underline"
                    >
                      Read Full Article <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {pagination.totalPages > 1 ? (
          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-2 bg-white border border-ink/10 rounded-full px-3 py-2 shadow-sm">
              {pages.map((page) => {
                const isActive = page === pagination.page;
                return (
                  <Link
                    key={page}
                    href={`/blog?page=${page}`}
                    className={`w-9 h-9 rounded-full font-semibold inline-flex items-center justify-center ${
                      isActive ? 'bg-brand text-ink' : 'text-slate-500 hover:text-ink hover:bg-slate-100'
                    }`}
                  >
                    {page}
                  </Link>
                );
              })}
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default Blog;
