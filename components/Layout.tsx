import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
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

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  {
    label: 'About',
    path: '/about',
    subItems: [
      { label: 'Company Profile', path: '/about/profile' },
      { label: 'Why Us', path: '/about/why-us' },
      { label: 'Our Team', path: '/about/team' },
    ],
  },
  {
    label: 'Manufacturing',
    path: '/manufacturing',
    subItems: [
      { label: 'Factory Overview', path: '/manufacturing/factory' },
      { label: 'Production Lines', path: '/manufacturing/lines' },
      { label: 'Capacity & Lead Time', path: '/manufacturing/capacity' },
      { label: 'Engineering & Lab', path: '/manufacturing/engineering' },
    ],
  },
  {
    label: 'OEM & ODM',
    path: '/oem-odm',
    subItems: [
      { label: 'Solutions Overview', path: '/oem-odm' },
      { label: 'Customization Options', path: '/oem-odm/customization' },
      { label: 'Process', path: '/oem-odm/process' },
    ],
  },
  {
    label: 'Quality',
    path: '/quality',
    subItems: [
      { label: 'Overview', path: '/quality' },
      { label: 'QC Process', path: '/quality/process' },
      { label: 'Reliability Testing', path: '/quality/reliability' },
      { label: 'Certifications', path: '/quality/certifications' },
    ],
  },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
  { label: 'Blog', path: '/blog' },
];

export const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const quoteModal = useQuoteModal();

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
          <span className="flex items-center gap-1"><Globe size={12} /> Global Electronic Manufacturing</span>
          <span className="flex items-center gap-1"><MapPin size={12} /> Factory Direct</span>
        </div>
        <div className="flex space-x-6">
          <span className="hover:text-white cursor-pointer transition-colors">North America</span>
          <span className="hover:text-white cursor-pointer transition-colors">Europe</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-paper/90 backdrop-blur border-b border-ink/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-3 text-ink">
                <Logo className="h-10 w-auto" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.subItems ? (
                    <button
                      className={`px-3 py-2 rounded-md text-sm font-semibold flex items-center gap-1 tracking-wide hover:text-ink transition-colors ${location.pathname.startsWith(item.path) ? 'text-ink' : 'text-ink/60'}`}
                    >
                      {item.label}
                      <ChevronDown size={14} />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-3 py-2 rounded-md text-sm font-semibold tracking-wide hover:text-ink transition-colors ${location.pathname === item.path ? 'text-ink' : 'text-ink/60'}`}
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
                            to={subItem.path}
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
                  Request Quote
                </button>
              ) : (
                <Link to="/contact" className="ml-4 bg-brand text-ink px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-hover transition-colors shadow-sm">
                  Request Quote
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
                              to={subItem.path}
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
                      to={item.path}
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
                    Request Quote
                  </button>
                ) : (
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center bg-brand text-ink px-5 py-3 rounded-md text-base font-bold hover:bg-brand-hover"
                  >
                    Request Quote
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-ink text-white/70">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 right-[-5%] text-[18vw] font-display text-white/5 tracking-[0.18em]">
            COSUN
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div>
              <div className="mb-5">
                <Logo className="h-10 w-auto text-white" variant="dark" />
              </div>
              <p className="text-sm leading-relaxed text-white/70 max-w-md">
                Your trusted partner for reliable, export-ready in-vehicle accessories. Built for compliance, repeat orders, and
                long-term scale.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-brand text-ink flex items-center justify-center shadow-sm hover:bg-brand-hover transition-colors"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-brand text-ink flex items-center justify-center shadow-sm hover:bg-brand-hover transition-colors"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://youtube.com"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full bg-brand text-ink flex items-center justify-center shadow-sm hover:bg-brand-hover transition-colors"
                >
                  <Youtube size={16} />
                </a>
                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-brand text-ink flex items-center justify-center shadow-sm hover:bg-brand-hover transition-colors"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://wa.me/8613189394111"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full bg-brand text-ink flex items-center justify-center shadow-sm hover:bg-brand-hover transition-colors"
                >
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>
            <div className="text-sm text-white/60">
              We respond within 24 hours on most RFQs. Share target market, MOQ, and deadlines to speed up quotations.
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-[0.2em] mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/manufacturing" className="hover:text-white transition-colors">Manufacturing</a></li>
                <li><a href="/quality" className="hover:text-white transition-colors">Quality</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-[0.2em] mb-4">Follow Us</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/oem-odm" className="hover:text-white transition-colors">OEM & ODM Programs</a></li>
                <li><a href="/oem-odm/customization" className="hover:text-white transition-colors">Customization Options</a></li>
                <li><a href="/manufacturing/factory" className="hover:text-white transition-colors">Factory Overview</a></li>
                <li><a href="/quality/certifications" className="hover:text-white transition-colors">Compliance Updates</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog Insights</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-[0.2em] mb-4">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-full bg-brand text-ink flex items-center justify-center">
                    <Phone size={16} />
                  </span>
                  <div>
                    <p className="text-white">+86-13189394111</p>
                    <p className="text-xs text-white/50">Mon - Fri, 9am - 6pm</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-full bg-brand text-ink flex items-center justify-center">
                    <Mail size={16} />
                  </span>
                  <div>
                    <p className="text-white">info@cosunglobal.com</p>
                    <p className="text-xs text-white/50">Response within 24h</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-full bg-brand text-ink flex items-center justify-center">
                    <MapPin size={16} />
                  </span>
                  <div>
                    <p className="text-white">Industrial Zone, Dongguan</p>
                    <p className="text-xs text-white/50">Guangdong, China</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-[0.2em] mb-4">Subscribe Our Newsletter</h4>
              <p className="text-sm text-white/60 mb-4">Latest blog posts and compliance updates for global buyers.</p>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/blog" className="hover:text-white transition-colors">
                    The Shift to USB-C PD in Automotive
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white transition-colors">
                    EU RoHS vs. REACH: Compliance Checklist
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white transition-colors">
                    Choosing the Right OEM Partner in China
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-xs text-center text-white/40">
            © 2026 COSUN Global Electronic Manufacturing. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
