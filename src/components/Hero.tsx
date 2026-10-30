import React from 'react';
import { MessageCircle, ShieldCheck, ArrowRight, Laptop, Home, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

interface HeroProps {
  whatsappUrl: string;
  eletronicosUrl?: string;
  casaUrl?: string;
  whatsappGroupName: string;
  announcementText: string;
}

export const Hero: React.FC<HeroProps> = ({
  whatsappUrl,
  eletronicosUrl,
  casaUrl,
  whatsappGroupName,
  announcementText,
}) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-white/[0.08] bg-[#0A0C10]">
      {/* Background ambient lighting - Deep luxury gold & slate gradients */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-amber-400/[0.07] via-slate-500/[0.04] to-transparent blur-3xl opacity-80"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -right-48 w-[400px] h-[400px] bg-emerald-500/[0.03] blur-[120px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Real-time Audit Ticker Bar */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-xs text-neutral-300 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-amber-300 uppercase tracking-wider text-[11px]">SISTEMA ATIVO</span>
            <span className="text-neutral-600">|</span>
            <span className="truncate max-w-xs sm:max-w-xl font-medium">{announcementText}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Authoritative Editorial Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            {/* Trust Kicker */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold tracking-widest uppercase text-neutral-400 mb-4">
              <span className="text-amber-400">ZG Estoque Oficial</span>
              <span aria-hidden="true" className="text-neutral-700">/</span>
              <span>Inteligência de Compras</span>
              <span aria-hidden="true" className="text-neutral-700">/</span>
              <span className="text-emerald-400">Acesso Restrito</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight text-white leading-[1.12] mb-6 [text-wrap:balance]">
              Oportunidades de alto desconto e queimas de estoque auditadas no seu WhatsApp.
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A ZG Estoque filtra o ruído do e-commerce brasileiro. Rastreamos oscilações de preço, cupons cumulativos ocultos e liquidações relâmpago no Mercado Livre e Shopee para entregar apenas oportunidades com valor real comprovado.
            </p>

            {/* Action Matrix: Master VIP Channel & Specialized Modules */}
            <div className="flex flex-col gap-3.5 mb-8 max-w-xl mx-auto lg:mx-0">
              {/* Primary Master Action */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:brightness-110 active:scale-[0.99] rounded-xl transition-all shadow-xl shadow-amber-500/20"
              >
                <MessageCircle className="w-5 h-5 fill-neutral-950" />
                <span>Entrar no Canal Master VIP</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              {/* Sub-channel Quick Entrances */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={eletronicosUrl || whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between px-4 py-3 text-xs font-bold text-neutral-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-amber-400/40 rounded-xl transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Laptop className="w-4 h-4 text-amber-400" />
                    <span>Canal Eletrônicos & Tech</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 transition-colors" />
                </a>

                <a
                  href={casaUrl || whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between px-4 py-3 text-xs font-bold text-neutral-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-amber-400/40 rounded-xl transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Home className="w-4 h-4 text-amber-400" />
                    <span>Canal Casa & Decoração</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Protocol Guarantees */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-neutral-400 pt-1 border-t border-white/[0.06]">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>100% Silencioso (Sem conversas paralelas)</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Links puros para domínios oficiais</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span>Média de 42% a 78% de economia</span>
              </span>
            </div>
          </div>

          {/* Right Column: High-Fidelity Executive Media & Radar HUD */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#12151D] shadow-2xl group">
              {/* Studio photo */}
              <img
                src="/src/assets/images/hero_deals_shopping_1792686572713.jpg"
                alt="Curadoria executiva de produtos e oportunidades ZG Estoque"
                className="w-full h-auto aspect-[16/11] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/40 to-transparent pointer-events-none" />

              {/* Top Glassmorphic Tag */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#0A0C10]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-white font-bold tracking-wide">Radar ao Vivo</span>
                <span className="text-neutral-500">·</span>
                <span className="text-amber-300 font-mono text-[11px]">Auditado há 3 min</span>
              </div>

              {/* Bottom Card HUD Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#0A0C10] to-[#0A0C10]/70 border-t border-white/[0.08]">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-neutral-400 font-medium">Taxa de Verificação</span>
                  <span className="text-emerald-400 font-bold font-mono">100% Reputação Platinum</span>
                </div>
                <div className="text-sm font-bold text-white mb-3">
                  Apenas produtos de vendedores certificados com histórico de preço auditado nos últimos 90 dias.
                </div>
                <div className="flex items-center justify-between text-xs pt-2 border-t border-white/[0.06] text-neutral-400">
                  <span>Mercado Livre Oficial & Shopee</span>
                  <span className="text-amber-400 font-bold">ZG Protocol v2.4</span>
                </div>
              </div>
            </div>

            {/* Floating Brand Authority Badge */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-7 sm:left-4 bg-[#141822]/95 backdrop-blur-md border border-amber-400/30 rounded-xl p-3.5 shadow-2xl flex items-center gap-3.5 max-w-[310px]">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-22_at_13.42.57_08754572.jpeg"
                alt="ZG Estoque Logo Oficial"
                className="w-11 h-11 rounded-full object-cover ring-2 ring-amber-400/50 shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="text-xs">
                <div className="font-extrabold text-white uppercase tracking-wider">{whatsappGroupName}</div>
                <div className="text-neutral-400 flex items-center gap-1.5 text-[11px] mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  <span>Transmissão Oficial WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
