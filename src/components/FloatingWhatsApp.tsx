import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/services';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Desktop Floating Button (sm screens and above) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 items-center gap-3">
        {/* Tooltip */}
        {showTooltip && (
          <div className="relative flex items-center gap-2 bg-[#0B1E38] text-slate-100 text-xs font-semibold py-2 px-3 rounded-xl border border-cyan-500/40 shadow-xl shadow-black/40">
            <span>Chat with us on WhatsApp</span>
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white p-0.5 rounded focus:outline-none"
              aria-label="Close tooltip"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0B1E38] border-t border-r border-cyan-500/40 transform rotate-45" />
          </div>
        )}

        {/* Floating Action Button */}
        <a
          id="whatsapp-floating"
          href={COMPANY_CONFIG.defaultWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 shadow-2xl shadow-[#25D366]/40 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
          aria-label="Chat with us on WhatsApp at 03003486603"
        >
          {/* Pulsing Ripple Rings */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10 transition-transform group-hover:scale-110" />

          {/* Online Indicator Badge */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#071326]" />
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Conversion Bar (Screens < sm, ideal for Meta ads) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#071326]/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-3 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${COMPANY_CONFIG.phoneDisplay}`}
          className="flex-1 flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-3 rounded-xl text-xs border border-slate-700 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-cyan-400" />
          <span>Call Now</span>
        </a>

        <a
          id="whatsapp-floating-mobile"
          href={COMPANY_CONFIG.defaultWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold py-3 px-3 rounded-xl text-xs shadow-md shadow-[#25D366]/20 transition-colors"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp Quote</span>
        </a>
      </div>
    </>
  );
};

