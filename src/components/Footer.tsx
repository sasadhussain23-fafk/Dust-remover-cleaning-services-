import React from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/services';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Before & After', href: '#before-after' },
    { label: 'Areas', href: '#areas' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050E1D] border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-1 flex items-center justify-center shrink-0">
                <img
                  src={COMPANY_CONFIG.logoUrl}
                  alt="Dust Remover Cleaning Services Official Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {COMPANY_CONFIG.name}
                </h3>
                <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                  Professional Cleaning Services
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Premium doorstep deep cleaning, sofa washing, carpet extraction, and fumigation solutions for homes and offices across Pakistan.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors py-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct WhatsApp & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">
              WhatsApp Booking
            </h4>
            <p className="text-xs text-slate-300">
              For instant rates, service scheduling, and quotes:
            </p>
            <a
              id="whatsapp-footer"
              href={COMPANY_CONFIG.defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold px-4 py-2.5 rounded-xl text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp: {COMPANY_CONFIG.phoneDisplay}</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            © 2026 Dust Remover Cleaning Services. All Rights Reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
