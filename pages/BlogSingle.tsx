import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteContent } from '../content/SiteContentContext';

const BlogSingle: React.FC = () => {
  const { pages } = useSiteContent();
  const content = pages.blogSingle;

  return (
    <div className="bg-paper text-ink">
      <section className="bg-ink text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">{content.hero.eyebrow}</p>
          <h1 className="font-display text-3xl md:text-5xl mt-4">{content.hero.title}</h1>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mt-3">{content.hero.meta}</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.18)] border border-white/80 bg-white">
          <img
            src={content.heroImage}
            alt={content.hero.title}
            className="w-full h-[260px] sm:h-[320px] md:h-[380px] object-cover"
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {content.body.paragraphs.map((paragraph, index) => (
          <p key={`${paragraph}-${index}`} className={`${index === 0 ? '' : 'mt-5 '}text-base text-slate-700 leading-7`}>
            {paragraph}
          </p>
        ))}

        <div className="mt-8 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.12)] border border-white/80 bg-white">
          <img
            src={content.body.midImage}
            alt={content.body.sectionTitle}
            className="w-full h-[320px] object-cover"
          />
        </div>

        <h2 className="font-display text-2xl md:text-3xl mt-8">{content.body.sectionTitle}</h2>
        <p className="mt-4 text-base text-slate-700 leading-7">{content.body.sectionParagraph}</p>

        <h3 className="font-display text-xl md:text-2xl mt-8">{content.body.subheading}</h3>
        {content.body.subParagraphs.map((paragraph, index) => (
          <p key={`${paragraph}-${index}`} className={`${index === 0 ? 'mt-4' : 'mt-5'} text-base text-slate-700 leading-7`}>
            {paragraph}
          </p>
        ))}

        <div className="mt-10 border-t border-ink/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-slate-500">
          <div>
            <span className="text-slate-400">{content.footer.tagsLabel}</span> {content.footer.tags.join(' , ')}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">{content.footer.shareLabel}</span>
            {content.footer.shareItems.map((label) => (
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
          <Link to={content.footer.backHref} className="inline-flex items-center gap-2 text-brand-text font-semibold hover:underline">
            <ArrowLeft size={16} /> {content.footer.backLabel}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogSingle;
