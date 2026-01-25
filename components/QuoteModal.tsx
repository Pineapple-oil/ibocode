import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Send } from 'lucide-react';

interface QuoteModalContextValue {
  open: () => void;
  close: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export const useQuoteModal = () => useContext(QuoteModalContext);

export const QuoteModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const value = useMemo(
    () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    []
  );

  return (
    <QuoteModalContext.Provider value={value}>
      <div className={isOpen ? 'blur-sm' : ''}>{children}</div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Request a quote"
            className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-ink/10 overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <h3 className="text-lg font-semibold text-ink">Request a Quote</h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full border border-slate-200 text-slate-500 hover:text-ink hover:border-slate-300 transition-colors flex items-center justify-center"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="px-6 py-6">
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-sm text-slate-600 mb-6">
                Tell us about your project. We aim to respond within 24 hours with pricing and lead time.
              </div>
              <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="text-sm font-medium text-ink">
                    Name <span className="text-red-500">*</span>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand/70 focus:ring-2 focus:ring-brand/40 outline-none"
                    />
                  </label>
                  <label className="text-sm font-medium text-ink">
                    Email <span className="text-red-500">*</span>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand/70 focus:ring-2 focus:ring-brand/40 outline-none"
                    />
                  </label>
                </div>
                <label className="text-sm font-medium text-ink">
                  Company Name
                  <input
                    type="text"
                    placeholder="Company Ltd."
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand/70 focus:ring-2 focus:ring-brand/40 outline-none"
                  />
                </label>
                <label className="text-sm font-medium text-ink">
                  Product Interest <span className="text-red-500">*</span>
                  <input
                    type="text"
                    placeholder="e.g., USB Car Charger, 3000 units"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand/70 focus:ring-2 focus:ring-brand/40 outline-none"
                  />
                </label>
                <label className="text-sm font-medium text-ink">
                  Message / Requirements
                  <textarea
                    rows={4}
                    placeholder="Describe customization needs, target market, or timeline..."
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand/70 focus:ring-2 focus:ring-brand/40 outline-none resize-none"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand text-ink font-bold py-3 hover:bg-brand-hover transition-colors inline-flex items-center justify-center gap-2"
                >
                  Send Request <Send size={18} />
                </button>
              </form>
              <p className="text-center text-xs text-slate-500 mt-4">
                We respect your privacy. Your information is only used for this inquiry.
              </p>
            </div>
          </div>
        </div>
      )}
    </QuoteModalContext.Provider>
  );
};
