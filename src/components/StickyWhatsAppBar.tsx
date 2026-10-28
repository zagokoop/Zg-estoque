import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface StickyWhatsAppBarProps {
  whatsappUrl: string;
  eletronicosUrl?: string;
  casaUrl?: string;
}

export const StickyWhatsAppBar: React.FC<StickyWhatsAppBarProps> = ({
  whatsappUrl,
  eletronicosUrl,
  casaUrl,
}) => {
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
      aria-label="Acesso rápido aos grupos no WhatsApp"
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
          <div className="hidden md:flex items-center gap-2">
            <span className="font-bold text-white">ZG Estoque</span>
            <span className="text-neutral-500">·</span>
            <span className="text-neutral-400">Grupos de Ofertas no WhatsApp</span>
          </div>
          <div className="md:hidden text-xs font-semibold text-white truncate">
            Grupos WhatsApp
          </div>
        </div>

        {/* Group Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={eletronicosUrl || whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-cyan-300 bg-neutral-900 hover:bg-neutral-800 border border-cyan-500/30 rounded-lg transition-all"
            title="Grupo de Eletrônicos & Tech"
          >
            <span>⚡ Eletrônicos</span>
          </a>

          <a
            href={casaUrl || whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-amber-300 bg-neutral-900 hover:bg-neutral-800 border border-amber-500/30 rounded-lg transition-all"
            title="Grupo de Casa & Decoração"
          >
            <span>🏡 Casa & Decor</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold text-neutral-950 bg-emerald-500 hover:bg-emerald-400 rounded-lg shadow-sm shadow-emerald-500/20 whitespace-nowrap active:scale-95 transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-neutral-950" />
            <span>Grupo VIP Geral</span>
            <ArrowRight className="w-3 h-3 ml-0.5 hidden xs:inline" />
          </a>
        </div>
      </div>
    </aside>
  );
};
