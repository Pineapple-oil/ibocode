import React from 'react';
import { ArrowLeft } from 'lucide-react';
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

interface BlogSingleProps {
  post: WpPost;
}

const BlogSingle: React.FC<BlogSingleProps> = ({ post }) => {
  const title = stripHtml(post.title.rendered);
  const featuredImage = getFeaturedImage(post);
  const featuredAlt = getFeaturedAlt(post);
  const { categories, tags } = getTerms(post);
  const tagItems = (tags.length ? tags : categories).slice(0, 6);
  const categoryLabel = categories[0]?.name ?? 'Updates';
  const meta = `${formatDate(post.date)} | ${getReadTime(post.content.rendered)}`;

  return (
    <div className="bg-paper text-ink">
      <section className="bg-ink text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">{categoryLabel}</p>
          <h1 className="font-display text-3xl md:text-5xl mt-4">{title}</h1>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mt-3">{meta}</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.18)] border border-white/80 bg-white">
          {featuredImage ? (
            <img
              src={featuredImage}
              alt={featuredAlt}
              className="w-full h-[260px] sm:h-[320px] md:h-[380px] object-cover"
            />
          ) : (
            <div className="w-full h-[260px] sm:h-[320px] md:h-[380px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex items-center justify-center text-white text-xl font-semibold">
              {categoryLabel}
            </div>
          )}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div
          className="text-base text-slate-700 leading-7 [&>p]:mt-5 [&>h2]:mt-8 [&>h2]:text-2xl [&>h2]:font-display [&>h3]:mt-6 [&>h3]:text-xl [&>h3]:font-display [&>ul]:mt-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:mt-5 [&>ol]:list-decimal [&>ol]:pl-6 [&_a]:text-brand-text [&_a]:font-semibold [&_a:hover]:underline [&_img]:rounded-2xl [&_img]:mt-6 [&_blockquote]:border-l-4 [&_blockquote]:border-brand [&_blockquote]:pl-4 [&_blockquote]:text-slate-600"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        <div className="mt-10 border-t border-ink/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-slate-500">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-400">Tags:</span>
            {tagItems.length === 0 ? (
              <span>General</span>
            ) : (
              tagItems.map((tag) => (
                <span
                  key={tag.id}
                  className="px-3 py-1 rounded-full border border-ink/10 bg-white text-slate-600 text-xs font-semibold"
                >
                  {tag.name}
                </span>
              ))
            )}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Share:</span>
            {['in', 'x', 'fb'].map((label) => (
              <span
                key={label}
                className="w-8 h-8 rounded-full bg-ink text-white flex items-center justify-center text-xs font-semibold"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-brand-text font-semibold hover:underline">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogSingle;
