/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProofBar } from './components/ProofBar';
import { WhatsAppBenefits } from './components/WhatsAppBenefits';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyWhatsAppBar } from './components/StickyWhatsAppBar';
import { INITIAL_CONFIG } from './data/defaultDeals';
import { AffiliateConfig } from './types';

const TARGET_WHATSAPP_URL = 'https://chat.whatsapp.com/Grg7d2hzXW4ExzZrnvEaLz?s=cl&p=i&mlu=4&ilr=4';

export default function App() {
  const [config, setConfig] = useState<AffiliateConfig>(() => {
    try {
      const saved = localStorage.getItem('achados_vip_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...parsed, whatsappGroupUrl: TARGET_WHATSAPP_URL };
      }
      return { ...INITIAL_CONFIG, whatsappGroupUrl: TARGET_WHATSAPP_URL };
    } catch {
      return { ...INITIAL_CONFIG, whatsappGroupUrl: TARGET_WHATSAPP_URL };
    }
  });

  useEffect(() => {
    localStorage.setItem('achados_vip_config', JSON.stringify(config));
  }, [config]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans">
      {/* Navigation Header */}
      <Header whatsappUrl={config.whatsappGroupUrl} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with WhatsApp CTA */}
        <Hero
          whatsappUrl={config.whatsappGroupUrl}
          whatsappGroupName={config.whatsappGroupName}
          announcementText={config.announcementText}
        />

        {/* Real Quantitative Proof Bar */}
        <ProofBar />

        {/* WhatsApp VIP Benefits Section */}
        <WhatsAppBenefits
          whatsappUrl={config.whatsappGroupUrl}
          whatsappGroupName={config.whatsappGroupName}
        />

        {/* Step-by-Step Guide */}
        <HowItWorks />

        {/* Community Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Sticky Quick-Action Bar for Mobile & Desktop */}
      <StickyWhatsAppBar whatsappUrl={config.whatsappGroupUrl} />

      {/* Footer */}
      <Footer whatsappUrl={config.whatsappGroupUrl} />
    </div>
  );
}
