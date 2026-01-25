import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box } from 'lucide-react';
import { useQuoteModal } from './QuoteModal';

interface CtaBlockProps {
  title?: string;
  primary?: {
    title: string;
    description: string;
    linkLabel: string;
    href: string;
  };
  secondary?: {
    title: string;
    description: string;
    linkLabel: string;
    href: string;
  };
}

export const CtaBlock: React.FC<CtaBlockProps> = ({ title = "Next Steps", primary, secondary }) => {
  const quoteModal = useQuoteModal();
  const primaryCta = primary ?? {
    title: "Request a Quote",
    description:
      "Tell us your target market, quantity, and customization needs. We aim to respond within 24 hours with a practical quote and clear next steps.",
    linkLabel: "Start RFQ",
    href: "/contact",
  };

  const secondaryCta = secondary ?? {
    title: "Request Samples",
    description: "Verify fit, finish, and performance before you scale. Stock samples or branded samples are both available.",
    linkLabel: "Get Samples",
    href: "/contact",
  };

  return (
    <div className="relative overflow-hidden bg-ink rounded-2xl p-8 md:p-12 text-white mt-12">
      <div className="absolute inset-0 pattern-grid opacity-15" />
      <div className="absolute -top-24 -right-24 h-56 w-56 bg-brand/25 blur-[120px]" />
      <div className="relative">
        <h3 className="font-display text-2xl md:text-3xl mb-6">{title}</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-brand p-2 rounded-full mt-1 text-ink">
                <ArrowRight size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-white">{primaryCta.title}</h4>
                <p className="text-white/70 text-sm mt-1">{primaryCta.description}</p>
                {quoteModal && primaryCta.href === '/contact' ? (
                  <button
                    type="button"
                    onClick={() => quoteModal.open()}
                    className="inline-block mt-3 text-brand font-semibold hover:text-white transition-colors"
                  >
                    {primaryCta.linkLabel} &rarr;
                  </button>
                ) : (
                  <Link to={primaryCta.href} className="inline-block mt-3 text-brand font-semibold hover:text-white transition-colors">
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
                {quoteModal && secondaryCta.href === '/contact' ? (
                  <button
                    type="button"
                    onClick={() => quoteModal.open()}
                    className="inline-block mt-3 text-white/70 font-semibold hover:text-white transition-colors"
                  >
                    {secondaryCta.linkLabel} &rarr;
                  </button>
                ) : (
                  <Link to={secondaryCta.href} className="inline-block mt-3 text-white/70 font-semibold hover:text-white transition-colors">
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
