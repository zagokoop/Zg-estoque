/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProofBar } from './components/ProofBar';
import { WhatsAppGroupsSection } from './components/WhatsAppGroupsSection';
import { SavingsSimulator } from './components/SavingsSimulator';
import { MethodologySection } from './components/MethodologySection';
import { SecurityCommitment } from './components/SecurityCommitment';
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
        return {
          ...INITIAL_CONFIG,
          ...parsed,
          whatsappGroupUrl: TARGET_WHATSAPP_URL,
          whatsappGroupEletronicosUrl: TARGET_WHATSAPP_URL,
          whatsappGroupCasaUrl: TARGET_WHATSAPP_URL,
        };
      }
      return {
        ...INITIAL_CONFIG,
        whatsappGroupUrl: TARGET_WHATSAPP_URL,
        whatsappGroupEletronicosUrl: TARGET_WHATSAPP_URL,
        whatsappGroupCasaUrl: TARGET_WHATSAPP_URL,
      };
    } catch {
      return {
        ...INITIAL_CONFIG,
        whatsappGroupUrl: TARGET_WHATSAPP_URL,
        whatsappGroupEletronicosUrl: TARGET_WHATSAPP_URL,
        whatsappGroupCasaUrl: TARGET_WHATSAPP_URL,
      };
    }
  });

  useEffect(() => {
    localStorage.setItem('achados_vip_config', JSON.stringify(config));
  }, [config]);

  return (
    <div className="min-h-screen bg-[#0A0C10] text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950">
      {/* Executive Navigation Header */}
      <Header whatsappUrl={config.whatsappGroupUrl} />

      {/* Main Structural Flow */}
      <main className="flex-1">
        {/* 01. Hero Section with Live Audit & Direct Actions */}
        <Hero
          whatsappUrl={config.whatsappGroupUrl}
          eletronicosUrl={config.whatsappGroupEletronicosUrl}
          casaUrl={config.whatsappGroupCasaUrl}
          whatsappGroupName={config.whatsappGroupName}
          announcementText={config.announcementText}
        />

        {/* 02. Institutional Metrics & Trust Proof Bar */}
        <ProofBar />

        {/* 03. Specialized Transmission Channels (Master, Eletrônicos, Casa & Decor) */}
        <WhatsAppGroupsSection
          generalUrl={config.whatsappGroupUrl}
          eletronicosUrl={config.whatsappGroupEletronicosUrl}
          casaUrl={config.whatsappGroupCasaUrl}
        />

        {/* 04. Interactive Annual Savings Calculator */}
        <SavingsSimulator whatsappUrl={config.whatsappGroupUrl} />

        {/* 05. 4-Phase Governance & Auditing Protocol */}
        <MethodologySection />

        {/* 06. Security, Privacy & Silence SLA */}
        <SecurityCommitment />

        {/* 07. Attributable Member Testimonials */}
        <Testimonials />

        {/* 08. Objective FAQs */}
        <FaqSection />
      </main>

      {/* Discrete Bottom Quick-Action Bar for Mobile & Desktop */}
      <StickyWhatsAppBar
        whatsappUrl={config.whatsappGroupUrl}
        eletronicosUrl={config.whatsappGroupEletronicosUrl}
        casaUrl={config.whatsappGroupCasaUrl}
      />

      {/* Institutional Regulatory Footer */}
      <Footer
        whatsappUrl={config.whatsappGroupUrl}
        eletronicosUrl={config.whatsappGroupEletronicosUrl}
        casaUrl={config.whatsappGroupCasaUrl}
      />
    </div>
  );
}
