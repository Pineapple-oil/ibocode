'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Globe,
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  MessageCircle,
} from 'lucide-react';
import { Logo } from './Logo';
import { useQuoteModal } from './QuoteModal';
import { useSiteContent } from '../content/SiteContentContext';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const currentPath = pathname || '/';
  const quoteModal = useQuoteModal();
  const { global } = useSiteContent();
  const navItems = global.navigation.items;
  const footer = global.footer;
  const footerColumns = footer.columns ?? [];
  const primaryFooterColumn = footerColumns[0];
  const secondaryFooterColumn = footerColumns[1];
  const ctaLabel = global.navigation.ctaLabel || 'Request Quote';
  const topBarLeft = global.topBar?.left ?? [];
  const topBarRight = global.topBar?.right ?? [];
  const branding = (global.branding ?? {}) as {
    logoUrl?: string;
    logoAlt?: string;
  };
  const logoUrl = branding.logoUrl;
  const logoAlt = branding.logoAlt || 'Ibocode logo';

  const getSocialIcon = (label: string) => {
    const normalized = label.toLowerCase();
    if (normalized.includes('facebook')) return Facebook;
    if (normalized.includes('linkedin')) return Linkedin;
    if (normalized.includes('youtube')) return Youtube;
    if (normalized.includes('instagram')) return Instagram;
    if (normalized.includes('whatsapp')) return MessageCircle;
    return Globe;
  };

  const isExternalLink = (href: string) => /^https?:\/\//i.test(href);

  const handleQuoteClick = () => {
    if (quoteModal) {
      quoteModal.open();
      setIsMobileMenuOpen(false);
    }
  };

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink font-sans">
      {/* Top Bar */}
      <div className="bg-ink text-white/70 text-[11px] py-2 px-4 sm:px-8 hidden md:flex justify-between items-center uppercase tracking-[0.2em]">
        <div className="flex space-x-6">
          {topBarLeft.map((item, index) => {
            const Icon = index === 0 ? Globe : index === 1 ? MapPin : Globe;
            return (
              <span key={`${item}-${index}`} className="flex items-center gap-1">
                <Icon size={12} /> {item}
              </span>
            );
          })}
        </div>
        <div className="flex space-x-6">
          {topBarRight.map((item, index) => (
            <span key={`${item}-${index}`} className="hover:text-white cursor-pointer transition-colors">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-paper/90 backdrop-blur border-b border-ink/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-3 text-ink">
                {logoUrl ? (
                  <img src={logoUrl} alt={logoAlt} className="h-10 w-auto" />
                ) : (
                  <Logo className="h-10 w-auto" />
                )}
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.subItems ? (
                    <button
                      className={`px-3 py-2 rounded-md text-sm font-semibold flex items-center gap-1 tracking-wide hover:text-ink transition-colors ${currentPath.startsWith(item.path) ? 'text-ink' : 'text-ink/60'}`}
                    >
                      {item.label}
                      <ChevronDown size={14} />
                    </button>
                  ) : (
                    <Link
                      href={item.path}
                      className={`px-3 py-2 rounded-md text-sm font-semibold tracking-wide hover:text-ink transition-colors ${currentPath === item.path ? 'text-ink' : 'text-ink/60'}`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.subItems && (
                    <div className="absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      <div className="py-1" role="menu">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.path}
                            href={subItem.path}
                            className="block px-4 py-3 text-sm text-ink/80 hover:bg-brand/15 hover:text-ink border-l-4 border-transparent hover:border-brand"
                            role="menuitem"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {quoteModal ? (
                <button
                  type="button"
                  onClick={handleQuoteClick}
                  className="ml-4 bg-brand text-ink px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-hover transition-colors shadow-sm"
                >
                  {ctaLabel}
                </button>
              ) : (
                <Link href="/contact" className="ml-4 bg-brand text-ink px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-hover transition-colors shadow-sm">
                  {ctaLabel}
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-ink/70 hover:text-ink focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-paper border-t border-ink/10 h-screen overflow-y-auto pb-20">
            <div className="pt-2 pb-3 space-y-1 px-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="w-full text-left px-3 py-3 rounded-md text-base font-semibold text-ink hover:bg-white/70 flex justify-between items-center"
                      >
                        {item.label}
                        <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="pl-6 space-y-1 bg-white/60 py-2 rounded-md">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.path}
                              href={subItem.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-3 py-2 rounded-md text-sm font-medium text-ink/70 hover:text-ink"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-3 rounded-md text-base font-medium text-ink/80 hover:bg-white/70"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-4">
                {quoteModal ? (
                  <button
                    type="button"
                    onClick={handleQuoteClick}
                    className="block w-full text-center bg-brand text-ink px-5 py-3 rounded-md text-base font-bold hover:bg-brand-hover"
                  >
                    {ctaLabel}
                  </button>
                ) : (
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center bg-brand text-ink px-5 py-3 rounded-md text-base font-bold hover:bg-brand-hover"
                  >
                    {ctaLabel}
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-ink text-white/70">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 right-[-5%] text-[18vw] font-display text-white/5 tracking-[0.18em]">
            IBOCODE
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div>
              <div className="mb-5">
                {logoUrl ? (
                  <img src={logoUrl} alt={logoAlt} className="h-10 w-auto" />
                ) : (
                  <Logo className="h-10 w-auto text-white" variant="dark" />
                )}
              </div>
              <p className="text-sm leading-relaxed text-white/70 max-w-md">
                {footer.aboutText}
              </p>
              <div className="flex items-center gap-3 mt-6">
                {footer.socialLinks.map((link, index) => {
                  const Icon = getSocialIcon(link.label);
                  return (
                    <a
                      key={`${link.label}-${index}`}
                      href={link.href}
                      aria-label={link.label}
                      className="w-10 h-10 rounded-full bg-brand text-ink flex items-center justify-center shadow-sm hover:bg-brand-hover transition-colors"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="text-sm text-white/60">
              {footer.responseNote}
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {primaryFooterColumn && (
              <div>
                <h4 className="text-white text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                  {primaryFooterColumn.title}
                </h4>
                <ul className="space-y-3 text-sm">
                  {primaryFooterColumn.links.map((link, linkIndex) => (
                    <li key={`${link.label}-${linkIndex}`}>
                      {link.href ? (
                        isExternalLink(link.href) ? (
                          <a href={link.href} className="hover:text-white transition-colors">
                            {link.label}
                          </a>
                        ) : (
                          <Link href={link.href} className="hover:text-white transition-colors">
                            {link.label}
                          </Link>
                        )
                      ) : (
                        <span className="text-white/70">{link.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {secondaryFooterColumn && (
              <div>
                <h4 className="text-white text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                  {secondaryFooterColumn.title}
                </h4>
                <ul className="space-y-3 text-sm">
                  {secondaryFooterColumn.links.map((link, linkIndex) => (
                    <li key={`${link.label}-${linkIndex}`}>
                      {link.href ? (
                        isExternalLink(link.href) ? (
                          <a href={link.href} className="hover:text-white transition-colors">
                            {link.label}
                          </a>
                        ) : (
                          <Link href={link.href} className="hover:text-white transition-colors">
                            {link.label}
                          </Link>
                        )
                      ) : (
                        <span className="text-white/70">{link.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                {footer.contact.title}
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-full bg-brand text-ink flex items-center justify-center">
                    <Phone size={16} />
                  </span>
                  <div>
                    <p className="text-white">{footer.contact.phone.value}</p>
                    <p className="text-xs text-white/50">{footer.contact.phone.note}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-full bg-brand text-ink flex items-center justify-center">
                    <Mail size={16} />
                  </span>
                  <div>
                    <p className="text-white">{footer.contact.email.value}</p>
                    <p className="text-xs text-white/50">{footer.contact.email.note}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-full bg-brand text-ink flex items-center justify-center">
                    <MapPin size={16} />
                  </span>
                  <div>
                    <p className="text-white">{footer.contact.address.value}</p>
                    <p className="text-xs text-white/50">{footer.contact.address.note}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                {footer.newsletter.title}
              </h4>
              <p className="text-sm text-white/60 mb-4">{footer.newsletter.description}</p>
              <ul className="space-y-3 text-sm">
                {footer.newsletter.links.map((link, linkIndex) => (
                  <li key={`${link.label}-${linkIndex}`}>
                    {link.href ? (
                      isExternalLink(link.href) ? (
                        <a href={link.href} className="hover:text-white transition-colors">
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className="hover:text-white transition-colors">
                          {link.label}
                        </Link>
                      )
                    ) : (
                      <span className="text-white/70">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-xs text-center text-white/40">
            {footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
};

