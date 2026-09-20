import React, { useState } from 'react';
import {
  MessageCircle,
  Armchair,
  Layers,
  Sparkles,
  Sofa,
  BedDouble,
  Columns2,
  Sun,
  CookingPot,
  Bath,
  Building2,
  Grid,
  Home,
  ShieldAlert,
  Info,
} from 'lucide-react';
import { SERVICES_DATA, buildWhatsAppUrl, ServiceItem } from '../data/services';

const iconMap: Record<string, React.ElementType> = {
  Armchair,
  Layers,
  Sparkles,
  Sofa,
  BedDouble,
  Columns2,
  Sun,
  CookingPot,
  Bath,
  Building2,
  Grid,
  Home,
  ShieldAlert,
};

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Upholstery & Fabrics', 'Deep Cleaning', 'Commercial & Specialized'];

  const filteredServices =
    activeCategory === 'All'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-16 md:py-24 bg-[#071326] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Rates &amp; Doorstep Booking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            High-grade machinery, specialized fabric-safe cleaning agents, and transparent pricing across Pakistan. Click any service to start an instant WhatsApp inquiry.
          </p>
        </div>

        {/* Category Filters (Mobile Horizontal Scroll / Desktop Centered) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-[#0B1E38] text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service: ServiceItem) => {
            const Icon = iconMap[service.iconName] || Sparkles;
            const waUrl = buildWhatsAppUrl(service.whatsappMessage);

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group flex flex-col rounded-2xl bg-[#0B1E38] border border-slate-700/70 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden shadow-lg shadow-black/40 hover:-translate-y-1"
              >
                {/* Service Card Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={`/images/services/${service.id}.jpg`}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image load fails
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&auto=format&fit=crop&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E38] via-[#0B1E38]/30 to-transparent" />

                  {/* Category Chip */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#071326]/90 backdrop-blur-sm border border-slate-700 text-xs font-medium text-slate-300">
                    {service.category}
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-cyan-500/90 text-slate-950 flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>

                    {/* Service Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Specific Pricing Breakdown (for items like Mattress with King/Queen/Single) */}
                    {service.tiers && (
                      <div className="mb-4 p-3 rounded-xl bg-[#071326]/80 border border-slate-800 space-y-1.5 text-xs">
                        <div className="font-semibold text-slate-300 mb-1 flex items-center gap-1">
                          <Info className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Size breakdown:</span>
                        </div>
                        {service.tiers.map((tier) => (
                          <div key={tier.name} className="flex justify-between items-center text-slate-300">
                            <span>{tier.name}</span>
                            <span className="font-bold text-amber-400">{tier.price}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Price & Action Section */}
                  <div className="pt-4 border-t border-slate-800/90 mt-2">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wider text-slate-400 block">
                          {service.unit.startsWith('per ') ? 'Fixed Rate' : 'Starting Price'}
                        </span>
                        <div className="flex items-baseline gap-1.5 mt-0.5">
                          {service.unit.startsWith('per ') ? (
                            <>
                              <span className="text-2xl font-extrabold text-amber-400 tracking-tight">
                                {service.priceDisplay}
                              </span>
                              <span className="text-xs font-semibold text-slate-300">
                                / {service.unit.replace('per ', '')}
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="text-sm font-semibold text-slate-300">
                                Starting
                              </span>
                              <span className="text-2xl font-extrabold text-amber-400 tracking-tight">
                                {service.priceDisplay.replace('From ', '')}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Service WhatsApp CTA */}
                    <a
                      id={service.trackingId}
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold py-2.5 px-4 rounded-xl text-sm transition-colors shadow-md shadow-[#25D366]/15 group/btn"
                    >
                      <MessageCircle className="w-4 h-4 fill-current group-hover/btn:scale-110 transition-transform" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
