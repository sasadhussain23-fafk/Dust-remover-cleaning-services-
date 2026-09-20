import React from 'react';
import { MessageCircle, Phone, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/services';

export const WhatsAppCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#0B1E38] via-[#0F2A4D] to-[#0B1E38] relative overflow-hidden border-y border-cyan-900/50">
      {/* Background elements */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Quick Response Operations Team</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Need Professional Cleaning?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Tell us what you need cleaned and our team will help you with the details and quotation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="whatsapp-cta-bottom"
            href={COMPANY_CONFIG.quoteWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold px-8 py-4 rounded-xl text-base sm:text-lg shadow-xl shadow-[#25D366]/25 transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Get a Quote on WhatsApp</span>
          </a>

          <a
            href={`tel:${COMPANY_CONFIG.phoneDisplay}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold px-6 py-4 rounded-xl text-base border border-slate-700 transition-colors"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>Call {COMPANY_CONFIG.phoneDisplay}</span>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Experienced Mobile Technicians</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>Fast Turnaround &amp; Punctual Arrival</span>
          </div>
        </div>
      </div>
    </section>
  );
};
