import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box } from 'lucide-react';
import { useQuoteModal } from './QuoteModal';
import { useSiteContent } from '../content/SiteContentContext';

interface CtaBlockProps {
  title?: string;
  primary?: {
    title: string;
    description: string;
    linkLabel: string;
    href?: string;
    action?: 'quoteModal';
  };
  secondary?: {
    title: string;
    description: string;
    linkLabel: string;
    href?: string;
    action?: 'quoteModal';
  };
}

export const CtaBlock: React.FC<CtaBlockProps> = ({ title, primary, secondary }) => {
  const quoteModal = useQuoteModal();
  const { global } = useSiteContent();
  const defaults = global.ctaDefaults;
  const resolvedTitle = title ?? defaults.title ?? 'Next Steps';
  const primaryCta = primary ?? defaults.primary;
  const secondaryCta = secondary ?? defaults.secondary;
  const primaryHref = primaryCta.href ?? '/contact';
  const secondaryHref = secondaryCta.href ?? '/contact';
  const primaryUsesModal = primaryCta.action === 'quoteModal' || primaryHref === '/contact';
  const secondaryUsesModal = secondaryCta.action === 'quoteModal' || secondaryHref === '/contact';

  return (
    <div className="relative overflow-hidden bg-ink rounded-2xl p-8 md:p-12 text-white mt-12">
      <div className="absolute inset-0 pattern-grid opacity-15" />
      <div className="absolute -top-24 -right-24 h-56 w-56 bg-brand/25 blur-[120px]" />
      <div className="relative">
        <h3 className="font-display text-2xl md:text-3xl mb-6">{resolvedTitle}</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-brand p-2 rounded-full mt-1 text-ink">
                <ArrowRight size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-white">{primaryCta.title}</h4>
                <p className="text-white/70 text-sm mt-1">{primaryCta.description}</p>
                {quoteModal && primaryUsesModal ? (
                  <button
                    type="button"
                    onClick={() => quoteModal.open()}
                    className="inline-block mt-3 text-brand font-semibold hover:text-white transition-colors"
                  >
                    {primaryCta.linkLabel} &rarr;
                  </button>
                ) : (
                  <Link to={primaryHref} className="inline-block mt-3 text-brand font-semibold hover:text-white transition-colors">
                    {primaryCta.linkLabel} &rarr;
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-white/10 p-2 rounded-full mt-1">
                <Box size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-white">{secondaryCta.title}</h4>
                <p className="text-white/70 text-sm mt-1">{secondaryCta.description}</p>
                {quoteModal && secondaryUsesModal ? (
                  <button
                    type="button"
                    onClick={() => quoteModal.open()}
                    className="inline-block mt-3 text-white/70 font-semibold hover:text-white transition-colors"
                  >
                    {secondaryCta.linkLabel} &rarr;
                  </button>
                ) : (
                  <Link to={secondaryHref} className="inline-block mt-3 text-white/70 font-semibold hover:text-white transition-colors">
                    {secondaryCta.linkLabel} &rarr;
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
