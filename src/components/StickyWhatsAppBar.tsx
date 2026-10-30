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
      // Show sticky bar once user scrolls past 320px
      if (window.scrollY > 320) {
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
      aria-label="Barra de acesso rápido aos canais ZG Estoque no WhatsApp"
      className="fixed bottom-0 inset-x-0 z-40 bg-[#0B0D12]/95 backdrop-blur-md border-t border-white/10 shadow-2xl py-2.5 px-4 transition-transform duration-300 max-h-[64px] flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
        {/* Brand identity on left */}
        <div className="flex items-center gap-3 text-xs truncate">
          <img
            src="/assets/aistudio/WhatsApp_Image_2026-10-22_at_13.42.57_08754572.jpeg"
            alt="ZG Estoque Logo"
            className="w-8 h-8 rounded-full object-cover ring-1 ring-amber-400/50 shrink-0"
            referrerPolicy="no-referrer"
          />
          <div className="hidden md:flex items-center gap-2">
            <span className="font-extrabold text-white uppercase tracking-wider">ZG ESTOQUE</span>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-400">Radar & Curadoria Oficial no WhatsApp</span>
          </div>
          <div className="md:hidden text-xs font-bold text-white truncate">
            ZG ESTOQUE VIP
          </div>
        </div>

        {/* Group Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={eletronicosUrl || whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-cyan-300 bg-white/[0.04] hover:bg-white/[0.08] border border-cyan-400/30 rounded-lg transition-all"
            title="Canal de Eletrônicos & Tech"
          >
            <span>Eletrônicos</span>
          </a>

          <a
            href={casaUrl || whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-amber-300 bg-white/[0.04] hover:bg-white/[0.08] border border-amber-400/30 rounded-lg transition-all"
            title="Canal de Casa & Decoração"
          >
            <span>Casa & Decor</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:brightness-110 rounded-lg shadow-sm shadow-amber-500/20 whitespace-nowrap active:scale-95 transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-neutral-950" />
            <span>Canal Master VIP</span>
            <ArrowRight className="w-3 h-3 ml-0.5 hidden xs:inline" />
          </a>
        </div>
      </div>
    </aside>
  );
};
