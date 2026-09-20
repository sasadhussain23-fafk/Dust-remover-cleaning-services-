import React from 'react';
import { MessageCircle, Phone, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/services';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0A192F] border-t border-slate-800 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Contact Us
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Reach out directly for quotes, booking inquiries, or scheduling requests.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-[#071326] rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Left: Official Company Info */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                  Cleaning Service Provider
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {COMPANY_CONFIG.name}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Professional on-site residential and commercial cleaning solutions across Pakistan.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* WhatsApp Contact Item */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0B1E38] border border-slate-700">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">WhatsApp / Direct Line</div>
                    <div className="text-lg font-bold text-white tracking-wide">
                      {COMPANY_CONFIG.phoneDisplay}
                    </div>
                  </div>
                </div>

                {/* Service Availability Item */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0B1E38] border border-slate-700">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Service Coverage</div>
                    <div className="text-sm font-semibold text-slate-200">
                      Karachi, Hyderabad, Islamabad, Rawalpindi &amp; Lahore
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Direct WhatsApp Chat CTA Box */}
            <div className="flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-2xl bg-[#0B1E38] border border-cyan-500/30">
              <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mb-4">
                <MessageCircle className="w-9 h-9 fill-current" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Chat Directly on WhatsApp
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-xs leading-relaxed">
                Connect instantly with our dispatch team on <strong>{COMPANY_CONFIG.phoneDisplay}</strong> for quotes and quick scheduling.
              </p>

              <a
                id="whatsapp-contact-cta"
                href={COMPANY_CONFIG.defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold py-3.5 px-6 rounded-xl text-base shadow-lg shadow-[#25D366]/20 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_CONFIG.phoneDisplay}`}
                className="mt-3 text-xs text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Or dial direct: {COMPANY_CONFIG.phoneDisplay}</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
