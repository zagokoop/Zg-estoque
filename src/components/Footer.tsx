import React from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';

interface FooterProps {
  whatsappUrl: string;
  eletronicosUrl?: string;
  casaUrl?: string;
  onOpenConfig?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  whatsappUrl,
  eletronicosUrl,
  casaUrl,
  onOpenConfig,
}) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs py-12 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Wordmark & Summary */}
          <div className="md:col-span-2">
            <a href="#" className="text-base font-bold text-white tracking-tight flex items-center gap-3 mb-3">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-22_at_13.42.57_08754572.jpeg"
                alt="ZG Estoque Logo"
                className="w-10 h-10 rounded-full object-cover border border-amber-400/50 shadow-md"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-extrabold tracking-wide text-white block leading-tight">ZG ESTOQUE</span>
                <span className="text-[11px] text-amber-400/90 font-medium">Produtos Diversos com Qualidade</span>
              </div>
            </a>
            <p className="text-neutral-400 text-xs max-w-md leading-relaxed mb-4">
              O radar oficial da ZG Estoque para promoções relâmpago, achadinhos e cupons verificados de alta qualidade no Mercado Livre e Shopee.
            </p>
            <div className="flex items-center gap-2 text-neutral-500 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Links 100% seguros direcionados para as lojas oficiais</span>
            </div>
          </div>

          {/* Col 2: Navegação */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200 mb-3">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#grupos" className="text-amber-400 hover:text-amber-300 font-medium transition-colors">Nossos Grupos</a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors">Vantagens VIP</a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Grupos no WhatsApp */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200 mb-3">
              Grupos no WhatsApp
            </h4>
            <div className="space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 shrink-0" />
                <span>Grupo Geral VIP</span>
              </a>
              <a
                href={eletronicosUrl || whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-cyan-400 shrink-0" />
                <span>Grupo Eletrônicos & Tech</span>
              </a>
              <a
                href={casaUrl || whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-amber-400 shrink-0" />
                <span>Grupo Casa & Decoração</span>
              </a>
              {onOpenConfig && (
                <div>
                  <button
                    onClick={onOpenConfig}
                    className="text-neutral-500 hover:text-neutral-300 text-[11px] underline block mt-3"
                  >
                    Painel do Afiliado
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure & Legal Notice */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p className="leading-relaxed max-w-3xl text-center md:text-left">
            <strong>Aviso de Transparência de Afiliado:</strong> Participamos dos Programas de Afiliados do Mercado Livre e da Shopee Brasil. Como afiliados participantes, podemos receber comissões pelas compras qualificadas originadas através dos nossos links, sem qualquer custo adicional para você. Os preços, estoques e cupons podem sofrer alteração a qualquer momento pelas lojas parceiras.
          </p>
          <div className="shrink-0 text-center md:text-right">
            © {new Date().getFullYear()} ZG Estoque. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
