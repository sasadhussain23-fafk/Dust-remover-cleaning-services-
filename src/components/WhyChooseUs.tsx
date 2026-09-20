import React from 'react';
import {
  BadgeCheck,
  Receipt,
  MessageCircle,
  Building,
  CheckCircle2,
  CalendarCheck,
  Sparkles,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/services';

const iconMap: Record<string, React.ElementType> = {
  BadgeCheck,
  Receipt,
  MessageCircle,
  Building,
  CheckCircle2,
  CalendarCheck,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#071326] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Factual Standards &amp; Reliability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Choose Dust Remover Cleaning Services?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We focus on clean execution, direct communication, and honest pricing for all residential and commercial customers.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.icon] || BadgeCheck;
            return (
              <div
                key={item.title}
                className="p-6 sm:p-7 rounded-2xl bg-[#0B1E38] border border-slate-700/70 hover:border-cyan-500/40 transition-all duration-300 shadow-md flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
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
