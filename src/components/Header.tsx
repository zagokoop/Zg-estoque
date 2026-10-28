import React from 'react';
import { MessageCircle } from 'lucide-react';

interface HeaderProps {
  whatsappUrl: string;
}

export const Header: React.FC<HeaderProps> = ({ whatsappUrl }) => {
  return (
    <header className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark with User's Official Logo */}
        <a 
          href="#" 
          className="text-base sm:text-lg font-extrabold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5"
        >
          <img
            src="/assets/aistudio/WhatsApp_Image_2026-10-22_at_13.42.57_08754572.jpeg"
            alt="ZG Estoque Logo"
            className="w-9 h-9 rounded-full object-cover border border-amber-400/50 shadow-md shadow-amber-500/10 shrink-0"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="leading-tight">ZG ESTOQUE</span>
            <span className="text-[10px] text-amber-400/80 font-medium tracking-normal -mt-0.5">VIP Achados & Cupons</span>
          </div>
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-300">
          <a href="#grupos" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
            Nossos Grupos
          </a>
          <a href="#beneficios" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Vantagens VIP
          </a>
          <a href="#como-funciona" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Como Funciona
          </a>
          <a href="#depoimentos" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Depoimentos
          </a>
          <a href="#faq" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-950 bg-emerald-500 hover:bg-emerald-400 active:scale-95 rounded-lg transition-all shadow-sm shadow-emerald-500/20 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-neutral-950" />
            <span>Entrar no Grupo VIP</span>
          </a>
        </div>
      </div>
    </header>
  );
};
