import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/services';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-[#071326] via-[#0A1A32] to-[#071326]">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-5 w-fit shadow-sm">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Verified On-Site Deep Cleaning in Pakistan</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
              Professional Cleaning Services <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">
                You Can Trust
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Professional cleaning solutions for homes, offices and more. Quality service, transparent pricing and easy WhatsApp booking.
            </p>

            {/* Conversion CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
              <a
                id="whatsapp-hero"
                href={COMPANY_CONFIG.defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold px-7 py-4 rounded-xl text-base sm:text-lg shadow-lg shadow-[#25D366]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Book on WhatsApp</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold px-6 py-4 rounded-xl text-base border border-slate-700 hover:border-slate-600 transition-all text-center"
              >
                <span>View Services</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Meta Ad Key Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Instant Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Fixed Rate Units</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Doorstep Service</span>
              </div>
            </div>
          </div>

          {/* Hero Media Column */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl shadow-black/60 bg-slate-900 group">
              <img
                src={COMPANY_CONFIG.heroImageUrl}
                alt="Dust Remover Professional Cleaning Services - Clean Living Space"
                className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="eager"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-black/20" />

              {/* Floating Highlight Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#0B1E38]/90 backdrop-blur-md border border-cyan-500/30 text-white flex items-center justify-between">
                <div>
                  <div className="text-xs text-cyan-300 font-medium">Fast Mobile Dispatch</div>
                  <div className="text-sm font-bold text-slate-100">WhatsApp: {COMPANY_CONFIG.phoneDisplay}</div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                  Online Now
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
