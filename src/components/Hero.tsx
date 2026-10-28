import React from 'react';
import { MessageCircle, ShieldCheck, Zap, Sparkles, ArrowRight, Laptop, Home } from 'lucide-react';

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
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-neutral-800">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[400px] bg-gradient-to-b from-amber-500/10 via-emerald-500/10 to-transparent blur-3xl opacity-70"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top notice ticker */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-800/80 border border-neutral-700/60 text-xs text-neutral-300">
            <span className="flex h-2 w-2 rounded-full bg-amber-400"></span>
            <span className="font-medium text-amber-300">Atualizado agora</span>
            <span className="text-neutral-500">·</span>
            <span className="truncate max-w-xs sm:max-w-md">{announcementText}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Call to Action */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            {/* ZG Estoque Official Brand Lockup */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-3 mb-4">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-22_at_13.42.57_08754572.jpeg"
                alt="ZG Estoque Monograma"
                className="w-12 h-12 rounded-full object-cover border-2 border-amber-400 shadow-lg shadow-amber-500/20"
                referrerPolicy="no-referrer"
              />
              <div className="text-left">
                <div className="text-sm font-extrabold tracking-wider text-white uppercase font-sans">
                  ZG ESTOQUE
                </div>
                <div className="text-[11px] text-amber-400/90 font-medium">
                  Produtos Diversos com Qualidade & Preço Baixo
                </div>
              </div>
            </div>

            {/* Platform Trust Kickers (Unboxed clean text) */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-3">
              <span className="text-amber-400 font-bold">Produtos Diversos</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-300 font-bold">Cupons VIP</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400">Grupo Aberto</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.12] mb-5 [text-wrap:balance]">
              Achadinhos, bugs de preço e cupons secretos no seu WhatsApp
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Economize até 80% em compras diárias. Nossa equipe garimpa e verifica ofertas relâmpago, cupons com frete grátis e promoções imperdíveis antes que o estoque esgote.
            </p>

            {/* Main Action Block - Group Buttons */}
            <div className="flex flex-col gap-3 justify-center lg:justify-start mb-6">
              {/* Primary Main WhatsApp VIP Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-neutral-950 bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] rounded-xl transition-all shadow-lg shadow-emerald-500/25 whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 fill-neutral-950" />
                <span>Entrar no Grupo Geral VIP</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              {/* Quick Specific Group Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={eletronicosUrl || whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-cyan-300 bg-neutral-900 hover:bg-neutral-800 border border-cyan-500/30 hover:border-cyan-400 rounded-xl transition-all active:scale-[0.98] shadow-sm"
                >
                  <Laptop className="w-4 h-4 text-cyan-400" />
                  <span>Grupo Eletrônicos & Tech</span>
                </a>

                <a
                  href={casaUrl || whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-amber-300 bg-neutral-900 hover:bg-neutral-800 border border-amber-500/30 hover:border-amber-400 rounded-xl transition-all active:scale-[0.98] shadow-sm"
                >
                  <Home className="w-4 h-4 text-amber-400" />
                  <span>Grupo Casa & Decoração</span>
                </a>
              </div>
            </div>

            {/* Trust & Policy Indicators (Clean unboxed metadata) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs text-neutral-400 pt-1">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Acesso 100% gratuito</span>
              </span>
              <span aria-hidden="true" className="text-neutral-600 hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Zero spam (apenas administradores postam)</span>
              </span>
              <span aria-hidden="true" className="text-neutral-600 hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span>Mais de 14.800 membros</span>
              </span>
            </div>
          </div>

          {/* Right Column: High Fidelity Hero Media Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-700/80 bg-neutral-800 shadow-2xl group">
              <img
                src="/src/assets/images/hero_deals_shopping_1792686572713.jpg"
                alt="Produtos selecionados da ZG Estoque para o grupo VIP"
                className="w-full h-auto aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />

              {/* Bottom Card Content / Verified Live Deal Snapshot */}
              <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-amber-400 bg-amber-950/70 border border-amber-800/80 px-2 py-0.5 rounded text-[11px]">
                      ZG Curadoria Oficial
                    </span>
                    <span className="font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-800/80 px-2 py-0.5 rounded text-[11px]">
                      Qualidade Garantida
                    </span>
                  </div>
                  <span className="text-emerald-400 font-mono text-xs tabular-nums">
                    Economias de até 80%
                  </span>
                </div>
                <div className="text-sm font-semibold text-white">
                  Curadoria manual de produtos aprovados com nota acima de 4.7★
                </div>
              </div>
            </div>

            {/* Floating Quick Feature Card */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:left-4 bg-neutral-900/95 backdrop-blur-md border border-neutral-700 rounded-xl p-3 shadow-xl flex items-center gap-3 max-w-[290px]">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-22_at_13.42.57_08754572.jpeg"
                alt="ZG Estoque Logo"
                className="w-10 h-10 rounded-full object-cover border border-amber-400/60 shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="text-xs">
                <div className="font-bold text-white truncate">{whatsappGroupName}</div>
                <div className="text-neutral-400 flex items-center gap-1 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                  <span>Notificações em tempo real</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
