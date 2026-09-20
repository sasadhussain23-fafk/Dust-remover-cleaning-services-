import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { HOW_IT_WORKS_STEPS, COMPANY_CONFIG } from '../data/services';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0A192F] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            How It Works
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Booking your professional cleaning service takes less than 2 minutes on WhatsApp.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#071326] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-black text-cyan-500/30 mb-4 font-mono">
                  {step.stepNumber}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < 2 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-cyan-500/40">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick WhatsApp Action below steps */}
        <div className="mt-10 text-center">
          <a
            id="whatsapp-how-it-works"
            href={COMPANY_CONFIG.defaultWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Start Step 01 on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
