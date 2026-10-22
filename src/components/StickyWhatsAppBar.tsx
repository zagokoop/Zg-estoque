import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface StickyWhatsAppBarProps {
  whatsappUrl: string;
}

export const StickyWhatsAppBar: React.FC<StickyWhatsAppBarProps> = ({ whatsappUrl }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar once user scrolls past 350px
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside 
      aria-label="Acesso rápido ao grupo VIP no WhatsApp"
      className="fixed bottom-0 inset-x-0 z-40 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 shadow-2xl py-2 px-4 transition-transform duration-300 transform translate-y-0 max-h-[64px] flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 text-xs truncate">
          <img
            src="/assets/aistudio/WhatsApp_Image_2026-10-22_at_13.42.57_08754572.jpeg"
            alt="ZG Estoque Logo"
            className="w-7 h-7 rounded-full object-cover border border-amber-400/60 shrink-0"
            referrerPolicy="no-referrer"
          />
          <div className="hidden sm:flex items-center gap-2">
            <span className="font-bold text-white">ZG Estoque VIP</span>
            <span className="text-neutral-500">·</span>
            <span className="text-neutral-400">Cupons e bugs de preço do Mercado Livre & Shopee em tempo real</span>
          </div>
          <div className="sm:hidden text-xs font-semibold text-white truncate">
            ZG Estoque · Cupons VIP
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 text-xs font-bold text-neutral-950 bg-emerald-500 hover:bg-emerald-400 rounded-lg shadow-sm shadow-emerald-500/20 whitespace-nowrap shrink-0 active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-neutral-950" />
          <span>Entrar no WhatsApp</span>
          <ArrowRight className="w-3.5 h-3.5 ml-0.5 hidden xs:inline" />
        </a>
      </div>
    </aside>
  );
};
