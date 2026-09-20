import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/services';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Before & After', href: '#before-after' },
    { label: 'Areas', href: '#areas' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification Bar for Ad Traffic */}
      <div className="bg-[#050E1D] border-b border-cyan-900/40 text-xs py-1.5 px-4 text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-slate-200">
              Serving Karachi, Hyderabad, Lahore, Islamabad &amp; Rawalpindi
            </span>
          </div>
          <a
            href={`tel:${COMPANY_CONFIG.phoneDisplay}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{COMPANY_CONFIG.phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full backdrop-blur-md transition-colors duration-300 border-b ${
          isScrolled
            ? 'bg-[#0B1E38]/95 border-slate-700/60 shadow-lg shadow-black/30'
            : 'bg-[#0A192F]/90 border-slate-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          {/* Logo Section */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden bg-white p-1 shadow-sm flex items-center justify-center">
              <img
                src={COMPANY_CONFIG.logoUrl}
                alt="Dust Remover Cleaning Services Official Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors leading-tight">
                Dust Remover
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-cyan-400 uppercase">
                Cleaning Services
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="whatsapp-header"
              href={COMPANY_CONFIG.defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-semibold px-4 py-2.5 rounded-lg text-sm shadow-md shadow-[#25D366]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <a
              id="whatsapp-header-mobile"
              href={COMPANY_CONFIG.defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] text-slate-950 font-semibold px-3 py-2 rounded-md text-xs shadow-sm"
              aria-label="WhatsApp Quick Chat"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A192F] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800">
            <a
              id="whatsapp-mobile-drawer"
              href={COMPANY_CONFIG.defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-slate-950 font-bold py-3 px-4 rounded-lg text-sm shadow-md"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Book Service on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
