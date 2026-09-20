/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBenefits } from './components/TrustBenefits';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { AreasSection } from './components/AreasSection';
import { BookingForm } from './components/BookingForm';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#071326] text-slate-100 flex flex-col selection:bg-teal-500 selection:text-white pb-14 sm:pb-0">
      {/* Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <TrustBenefits />
        <ServicesSection />
        <BeforeAfterSection />
        <WhyChooseUs />
        <HowItWorks />
        <AreasSection />
        <BookingForm />
        <WhatsAppCTA />
        <FAQSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating & Mobile Sticky WhatsApp Elements */}
      <FloatingWhatsApp />
    </div>
  );
}

