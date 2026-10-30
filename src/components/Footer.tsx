import React from 'react';
import { MessageCircle, ShieldCheck, ExternalLink } from 'lucide-react';

interface FooterProps {
  whatsappUrl: string;
  eletronicosUrl?: string;
  casaUrl?: string;
}

export const Footer: React.FC<FooterProps> = ({
  whatsappUrl,
  eletronicosUrl,
  casaUrl,
}) => {
  return (
    <footer className="bg-[#07080B] border-t border-white/[0.08] text-neutral-400 text-xs py-14 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Wordmark & Institutional Summary */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3.5 mb-4 group">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-22_at_13.42.57_08754572.jpeg"
                alt="ZG Estoque Logo"
                className="w-11 h-11 rounded-full object-cover ring-2 ring-amber-400/40 shadow-lg shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-extrabold tracking-wider text-white text-base block uppercase font-sans">
                  ZG ESTOQUE
                </span>
                <span className="text-[11px] text-amber-400/90 font-medium">
                  Hub Oficial de Inteligência em Oportunidades & Compras
                </span>
              </div>
            </a>
            <p className="text-neutral-400 text-xs max-w-md leading-relaxed mb-4">
              Plataforma independente de monitoramento e auditoria de preços. Nosso objetivo é conectar o consumidor brasileiro às maiores queimas de estoque e cupons válidos com procedência garantida.
            </p>
            <div className="flex items-center gap-2 text-neutral-500 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Transações 100% protegidas e processadas diretamente nos sites oficiais</span>
            </div>
          </div>

          {/* Col 2: Diretório de Navegação */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-200 mb-4">
              Diretório
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#canais" className="text-amber-400 hover:text-amber-300 font-semibold transition-colors">
                  Canais de Transmissão
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">
                  Simulador de Economia
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-white transition-colors">
                  Metodologia ZG
                </a>
              </li>
              <li>
                <a href="#seguranca" className="hover:text-white transition-colors">
                  Segurança & SLA
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Avaliações de Membros
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Acesso aos Canais WhatsApp */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-200 mb-4">
              Canais WhatsApp
            </h4>
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-semibold text-white transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>Canal Master Global</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-amber-400" />
              </a>

              <a
                href={eletronicosUrl || whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-semibold text-cyan-300 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                  <span>Eletrônicos & Tech</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-cyan-400" />
              </a>

              <a
                href={casaUrl || whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-semibold text-amber-300 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>Casa & Decoração</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-amber-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure & Institutional Legal Notice */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p className="leading-relaxed max-w-3xl text-center md:text-left">
            <strong>Aviso de Transparência e Conformidade:</strong> A ZG ESTOQUE participa dos Programas de Afiliados Oficiais do Mercado Livre e da Shopee Brasil. Como parceiros afiliados, podemos receber comissões pelas compras originadas a partir dos nossos links validados, sem qualquer acréscimo de valor para o usuário. Preços, disponibilidades de estoque e cupons estão sujeitos a alterações dinâmicas efetuadas diretamente pelos marketplaces.
          </p>
          <div className="shrink-0 text-center md:text-right font-mono">
            © {new Date().getFullYear()} ZG ESTOQUE. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
