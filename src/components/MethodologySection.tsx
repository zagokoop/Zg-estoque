import React from 'react';
import { Search, ShieldCheck, LineChart, Send } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const steps = [
    {
      phase: '01',
      title: 'Varredura Algorítmica Contínua',
      description: 'Nossos sistemas monitoram sem interrupção APIs e catálogos de queima de estoque no Mercado Livre e Shopee, identificando oscilações bruscas de preço e cupons não anunciados.',
      icon: Search,
    },
    {
      phase: '02',
      title: 'Auditoria de Reputação do Lojista',
      description: 'Descartamos vendedores sem histórico comprovado. Cada anúncio passa por filtro de confiabilidade, priorizando Lojas Oficiais, Mercado Líder e vendedores com selo de garantia de entrega.',
      icon: ShieldCheck,
    },
    {
      phase: '03',
      title: 'Validação de Histórico de Preço',
      description: 'Auditamos os preços praticados nos últimos 90 dias para assegurar que a oferta representa uma economia genuína, eliminando promoções maquiadas ou falsos descontos.',
      icon: LineChart,
    },
    {
      phase: '04',
      title: 'Transmissão Limpa no WhatsApp',
      description: 'A oportunidade é enviada em formato padronizado com link puro oficial, código do cupom pré-formatado e resumo de especificações técnicas. Zero spam e zero ruído.',
      icon: Send,
    },
  ];

  return (
    <section id="metodologia" className="py-20 sm:py-28 bg-[#0A0C10] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
            GOVERNANÇA & METODOLOGIA
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            O Protocolo ZG de 4 Etapas para Garantir Ofertas Reais
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 leading-relaxed">
            Nossa curadoria segue critérios rígidos de auditoria antes que qualquer link chegue ao seu WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.phase}
                className="p-7 rounded-2xl bg-[#0F121A] border border-white/[0.08] hover:border-amber-400/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-amber-400 font-mono">
                      {step.phase}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-neutral-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                  Etapa Auditada
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
