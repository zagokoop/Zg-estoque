import React from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  whatsappUrl: string;
}

export const Header: React.FC<HeaderProps> = ({ whatsappUrl }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#0A0C10]/95 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark with User's Official Logo */}
        <a 
          href="#" 
          className="flex items-center gap-3.5 group shrink-0"
        >
          <div className="relative">
            <img
              src="/assets/aistudio/WhatsApp_Image_2026-10-22_at_13.42.57_08754572.jpeg"
              alt="ZG Estoque Emblema Oficial"
              className="w-11 h-11 rounded-full object-cover ring-2 ring-amber-400/40 group-hover:ring-amber-400 transition-all shadow-lg shadow-black/60 shrink-0"
              referrerPolicy="no-referrer"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#0A0C10]" title="Radar ZG Operando em Tempo Real" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-black tracking-wider text-white uppercase font-sans">
                ZG ESTOQUE
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-amber-300/90 bg-amber-400/10 border border-amber-400/20 rounded">
                OFICIAL
              </span>
            </div>
            <span className="text-[11px] text-neutral-400 font-medium tracking-tight">
              Curadoria de Oportunidades & Descontos
            </span>
          </div>
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-neutral-300">
          <a href="#canais" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Canais Setoriais
          </a>
          <a href="#simulador" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Simulador de Economia
          </a>
          <a href="#metodologia" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Metodologia ZG
          </a>
          <a href="#seguranca" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Segurança & SLA
          </a>
          <a href="#depoimentos" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Avaliações
          </a>
          <a href="#faq" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: Primary executive action */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden xl:flex items-center gap-2 text-[11px] font-medium text-neutral-400 border-r border-white/10 pr-4">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Auditoria 24h</span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:brightness-110 active:scale-95 rounded-lg transition-all shadow-md shadow-amber-500/20 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-neutral-950" />
            <span>Acessar Canal Master</span>
          </a>
        </div>
      </div>
    </header>
  );
};
