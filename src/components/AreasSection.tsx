import React from 'react';
import { MapPin, MessageCircle, Navigation } from 'lucide-react';
import { SERVED_AREAS, COMPANY_CONFIG, buildWhatsAppUrl } from '../data/services';

export const AreasSection: React.FC = () => {
  return (
    <section id="areas" className="py-16 md:py-24 bg-[#071326] border-t border-slate-800 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Nationwide On-Demand Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Areas We Serve
          </h2>
          <p className="text-lg sm:text-xl font-medium text-cyan-300 mb-2">
            Cleaning services available across Pakistan.
          </p>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Our mobile cleaning units bring professional extraction machines, specialized cleaning solutions, and experienced crew directly to your doorstep.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {SERVED_AREAS.map((area) => {
            const cityWaUrl = buildWhatsAppUrl(
              `Assalamualaikum, I am in ${area.city} and would like to get a cleaning service quotation for my location.`
            );

            return (
              <div
                key={area.city}
                className="group p-5 rounded-2xl bg-[#0B1E38] border border-slate-700/80 hover:border-cyan-500/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {area.city}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {area.tagline}
                  </p>
                </div>

                <a
                  href={cityWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 group-hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Inquire for {area.city}</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Note on Custom/Other Locations */}
        <div className="mt-8 p-4 rounded-xl bg-[#0B1E38]/60 border border-slate-800 text-center max-w-2xl mx-auto text-xs sm:text-sm text-slate-300">
          <span>Located in a nearby vicinity or neighboring town? </span>
          <a
            href={COMPANY_CONFIG.defaultWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 font-semibold underline hover:text-cyan-300 ml-1"
          >
            Message us on WhatsApp ({COMPANY_CONFIG.phoneDisplay})
          </a>
          <span> to confirm mobile team schedule.</span>
        </div>

      </div>
    </section>
  );
};
