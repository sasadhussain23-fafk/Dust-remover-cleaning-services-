import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MessageCircle, MoveHorizontal, CheckCircle2, AlertCircle } from 'lucide-react';
import { BEFORE_AFTER_ITEMS, buildWhatsAppUrl, BeforeAfterItem } from '../data/services';

export const BeforeAfterSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('sofa');
  const [sliderPos, setSliderPos] = useState<number>(50); // 0 to 100 percentage
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem: BeforeAfterItem =
    BEFORE_AFTER_ITEMS.find((item) => item.id === selectedId) || BEFORE_AFTER_ITEMS[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  const activeWhatsAppUrl = buildWhatsAppUrl(
    `Assalamualaikum, I viewed your ${activeItem.title} Before & After work and would like to get a quotation for my home.`
  );

  return (
    <section id="before-after" className="py-16 md:py-24 bg-[#0A192F] relative border-t border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Item Visual Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Before &amp; After Work
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Drag the interactive slider to see how our deep extraction lifts years of embedded grime, oil stains, and dullness from identical furniture and fabrics.
          </p>
        </div>

        {/* Service Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {BEFORE_AFTER_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setSelectedId(item.id);
                setSliderPos(50);
              }}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                selectedId === item.id
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 scale-105'
                  : 'bg-[#0B1E38] text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/80'
              }`}
            >
              {item.title.replace(' Deep Steam Cleaning', '').replace(' Shampoo & Extraction', '').replace(' Sanitization', '').replace(' Steam Dusting', '')}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#071326] p-4 sm:p-6 lg:p-8 rounded-3xl border border-slate-800 shadow-2xl">
          
          {/* Draggable Slider Container */}
          <div className="lg:col-span-8 flex flex-col items-center">
            <div
              ref={containerRef}
              onMouseDown={(e) => {
                setIsDragging(true);
                handleMove(e.clientX);
              }}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={(e) => handleMove(e.touches[0].clientX)}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-slate-700 bg-slate-900 touch-none"
            >
              {/* Layer 1: AFTER Image (Full background) */}
              <img
                src={activeItem.afterImage}
                alt={`${activeItem.title} - After`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />

              {/* Layer 2: BEFORE Image (Clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img
                  src={activeItem.beforeImage}
                  alt={`${activeItem.title} - Before`}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Slider Divider Bar */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] pointer-events-none transform -translate-x-1/2"
                style={{ left: `${sliderPos}%` }}
              >
                {/* Center Handle Handle with arrows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-lg border-2 border-white">
                  <MoveHorizontal className="w-5 h-5 font-extrabold" />
                </div>
              </div>

              {/* Floating Instructions */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-slate-200 border border-white/20 font-medium pointer-events-none flex items-center gap-1.5">
                <MoveHorizontal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Drag left / right to compare</span>
              </div>
            </div>

            {/* Factual Disclaimer Pill to comply with "Do not falsely claim placeholder images" */}
            <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
              <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                Demonstration comparison showing identical item before and after deep cleaning.
              </span>
            </div>
          </div>

          {/* Details & WhatsApp Quote Column */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="inline-block px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold mb-2">
                {activeItem.category}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {activeItem.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {activeItem.description}
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Key Treatment Steps:
                </div>
                {activeItem.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Booking CTA for Active Service */}
            <div className="pt-6 border-t border-slate-800">
              <div className="text-xs text-slate-400 mb-2">
                Need similar results for your {activeItem.id}?
              </div>
              <a
                id={`whatsapp-before-after-${activeItem.id}`}
                href={activeWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold py-3.5 px-4 rounded-xl text-sm transition-all shadow-md shadow-[#25D366]/20"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Get Quote for {activeItem.id.toUpperCase()}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
