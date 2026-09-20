import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { SERVICES_DATA, COMPANY_CONFIG, buildWhatsAppUrl } from '../data/services';

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    city: 'Karachi',
    service: 'Sofa Cleaning',
    preferredDate: '',
    preferredTime: '',
    addressArea: '',
    additionalDetails: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cities = ['Karachi', 'Hyderabad', 'Islamabad', 'Rawalpindi', 'Lahore', 'Other'];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
    if (!formData.whatsappNumber.trim()) {
      errs.whatsappNumber = 'Please enter your WhatsApp number';
    } else if (formData.whatsappNumber.replace(/\D/g, '').length < 10) {
      errs.whatsappNumber = 'Please enter a valid phone or WhatsApp number';
    }
    if (!formData.addressArea.trim()) {
      errs.addressArea = 'Please enter your neighborhood, sector, or address';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    // Build the exact required WhatsApp message
    const message = `Assalamualaikum,
I would like to request a cleaning service quotation.

Name: ${formData.fullName.trim()}
WhatsApp: ${formData.whatsappNumber.trim()}
City: ${formData.city}
Service: ${formData.service}
Preferred Date: ${formData.preferredDate || 'Flexible / As soon as possible'}
Preferred Time: ${formData.preferredTime || 'Standard working hours'}
Area/Address: ${formData.addressArea.trim()}
Details: ${formData.additionalDetails.trim() || 'Standard service inquiry'}

Please provide me with the quotation.`;

    const targetUrl = buildWhatsAppUrl(message);

    setIsSubmitted(true);

    // Open WhatsApp in new tab
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#0A192F] relative border-t border-slate-800 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Fast Estimate Generator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Request an Instant WhatsApp Quotation
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Fill out your service details below. Submitting will immediately open a pre-filled WhatsApp conversation with our team for an exact price quote.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#071326] p-6 sm:p-10 rounded-3xl border border-slate-700/80 shadow-2xl">
          {isSubmitted && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-3 text-sm">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <strong className="font-semibold">WhatsApp opened!</strong> If your chat did not launch automatically,{' '}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="underline font-bold text-emerald-200 hover:text-white"
                >
                  click here to retry.
                </button>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Muhammad Ali"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-[#0B1E38] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                    errors.fullName ? 'border-red-500' : 'border-slate-700 hover:border-slate-600'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  WhatsApp Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 03001234567"
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-[#0B1E38] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                    errors.whatsappNumber ? 'border-red-500' : 'border-slate-700 hover:border-slate-600'
                  }`}
                />
                {errors.whatsappNumber && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.whatsappNumber}</span>
                  </p>
                )}
              </div>

              {/* City Selection */}
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  City <span className="text-red-400">*</span>
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1E38] border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {cities.map((c) => (
                    <option key={c} value={c} className="bg-[#0B1E38] text-white">
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  Select Service <span className="text-red-400">*</span>
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1E38] border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.name} className="bg-[#0B1E38] text-white">
                      {srv.name} ({srv.unit.startsWith('per ') ? `${srv.priceDisplay} / ${srv.unit.replace('per ', '')}` : `Starting ${srv.priceDisplay.replace('From ', '')}`})
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  Preferred Date (Optional)
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1E38] border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 [color-scheme:dark]"
                />
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  Preferred Time (Optional)
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1E38] border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="">Any time during working hours</option>
                  <option value="Morning (9:00 AM - 1:00 PM)">Morning (9:00 AM - 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                  <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                </select>
              </div>

            </div>

            {/* Address / Area */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                Address / Area <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. DHA Phase 6, Bahria Town, Gulshan, F-10, etc."
                value={formData.addressArea}
                onChange={(e) => setFormData({ ...formData, addressArea: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl bg-[#0B1E38] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                  errors.addressArea ? 'border-red-500' : 'border-slate-700 hover:border-slate-600'
                }`}
              />
              {errors.addressArea && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.addressArea}</span>
                </p>
              )}
            </div>

            {/* Additional Details */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                Additional Details (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="e.g. 7-seater sofa, 2 master bedrooms, urgent stain on dining rug..."
                value={formData.additionalDetails}
                onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0B1E38] border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 hover:border-slate-600 transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                id="whatsapp-booking-form"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold py-4 px-6 rounded-2xl text-base sm:text-lg shadow-xl shadow-[#25D366]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Request Quote on WhatsApp</span>
              </button>
              <p className="text-center text-xs text-slate-400 mt-3">
                Direct to official number: <span className="font-semibold text-slate-300">{COMPANY_CONFIG.phoneDisplay}</span>. No hidden fees or registration needed.
              </p>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};
