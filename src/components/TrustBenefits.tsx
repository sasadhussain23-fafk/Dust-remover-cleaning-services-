import React from 'react';
import { Sparkles, Receipt, MessageCircle, ShieldCheck } from 'lucide-react';

export const TrustBenefits: React.FC = () => {
  const benefits = [
    {
      title: 'Professional Service',
      description: 'Dedicated cleaning personnel equipped with specialized machinery and safe cleaning solutions.',
      icon: ShieldCheck,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20',
    },
    {
      title: 'Transparent Pricing',
      description: 'Clearly stated rates per seat, per sq ft, or fixed starting prices with zero hidden charges.',
      icon: Receipt,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
    },
    {
      title: 'Easy WhatsApp Booking',
      description: 'Instant communication and hassle-free scheduling directly through our direct WhatsApp line.',
      icon: MessageCircle,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      title: 'Quality Cleaning',
      description: 'Deep extraction and thorough surface attention that lifts embedded dust, stains, and odors.',
      icon: Sparkles,
      color: 'text-teal-400',
      bg: 'bg-teal-500/10 border-teal-500/20',
    },
  ];

  return (
    <section className="py-10 bg-[#0A192F] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 sm:p-6 rounded-2xl bg-[#0F243E]/70 border border-slate-700/60 hover:border-slate-600 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.bg} border`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
