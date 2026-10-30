import React from 'react';
import { MessageCircle, Laptop, Home, Sparkles, ArrowRight, ShieldCheck, Check, Clock } from 'lucide-react';

interface WhatsAppGroupsSectionProps {
  generalUrl: string;
  eletronicosUrl: string;
  casaUrl: string;
}

export const WhatsAppGroupsSection: React.FC<WhatsAppGroupsSectionProps> = ({
  generalUrl,
  eletronicosUrl,
  casaUrl,
}) => {
  const channels = [
    {
      id: 'geral',
      title: 'Canal Master · ZG VIP Global',
      subtitle: 'Cobertura Completa 360°',
      tag: 'CANAL PRINCIPAL',
      tagColor: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
      description: 'O canal unificado da ZG Estoque. Receba todas as oportunidades de alto impacto, bugs de preço, cupons cumulativos e queimas de estoque de todas as categorias.',
      icon: Sparkles,
      iconColor: 'text-amber-400',
      borderColor: 'border-amber-400/30 hover:border-amber-400/60',
      frequency: 'Média de 6 a 12 alertas / dia',
      url: generalUrl,
      buttonText: 'Acessar Canal Master Global',
      buttonClass: 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-neutral-950 font-bold hover:brightness-110 shadow-amber-500/20',
      features: [
        'Todas as queimas de estoque e liquidações gerais',
        'Bugs de sistema e cupons relâmpago de alta gravidade',
        'Cupons de frete grátis sem valor mínimo',
        'Ideal para quem busca a máxima economia geral',
      ],
    },
    {
      id: 'eletronicos',
      title: 'Canal Setorial · Eletrônicos & Tech',
      subtitle: 'Hardware, Áudio, Setup & Gadgets',
      tag: 'TECNOLOGIA & GAMER',
      tagColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
      description: 'Canal com curadoria estrita em dispositivos eletrônicos, informática e áudio. Somente produtos com especificações validadas e garantia nacional.',
      icon: Laptop,
      iconColor: 'text-cyan-400',
      borderColor: 'border-white/10 hover:border-cyan-400/50',
      frequency: 'Média de 3 a 6 alertas / dia',
      url: eletronicosUrl,
      buttonText: 'Acessar Canal de Eletrônicos',
      buttonClass: 'bg-white/[0.08] hover:bg-white/[0.14] text-white border border-cyan-400/40 hover:border-cyan-400 font-bold shadow-cyan-500/10',
      features: [
        'Fones Bluetooth ANC, Smartwatches e Pulseiras Inteligentes',
        'Periféricos para produtividade e setups gamer (ABNT2)',
        'Carregadores GaN rápidos, power banks e cabos certificados',
        'Gadgets para automação residencial e conectividade',
      ],
    },
    {
      id: 'casa',
      title: 'Canal Setorial · Casa & Decoração',
      subtitle: 'Cozinha, Conforto, Iluminação & Lar',
      tag: 'HOME LIVING & DESIGN',
      tagColor: 'text-amber-300 bg-amber-300/10 border-amber-300/30',
      description: 'Curadoria focada no ambiente residencial. Descontos relevantes em eletroportáteis inteligentes, organização e itens de design para a sua casa.',
      icon: Home,
      iconColor: 'text-amber-300',
      borderColor: 'border-white/10 hover:border-amber-400/50',
      frequency: 'Média de 3 a 6 alertas / dia',
      url: casaUrl,
      buttonText: 'Acessar Canal de Casa & Decor',
      buttonClass: 'bg-white/[0.08] hover:bg-white/[0.14] text-white border border-amber-400/40 hover:border-amber-400 font-bold shadow-amber-500/10',
      features: [
        'Air Fryers, cafeteiras elétricas e utilidades de cozinha',
        'Potes herméticos, prateleiras e organizadores funcionais',
        'Luminárias de design, iluminação LED e aromatizadores',
        'Achadinhos com frete grátis para todo o Brasil',
      ],
    },
  ];

  return (
    <section id="canais" className="py-20 sm:py-28 bg-[#0A0C10] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
            ARQUITETURA DE TRANSMISSÃO
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Selecione seus canais de oportunidade no WhatsApp
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 leading-relaxed">
            Nossos canais são segmentados para respeitar o seu tempo. Escolha receber o feed completo ou inscreva-se apenas nos segmentos do seu interesse direto. Acesso 100% gratuito e permanente.
          </p>
        </div>

        {/* 3 Executive Channel Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.id}
                className={`flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-[#0F121A] border transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/40 ${channel.borderColor}`}
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                      <Icon className={`w-6 h-6 ${channel.iconColor}`} />
                    </div>
                    <span className={`text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full border ${channel.tagColor}`}>
                      {channel.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                    {channel.title}
                  </h3>
                  <div className="text-xs font-semibold text-neutral-400 mb-4">
                    {channel.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                    {channel.description}
                  </p>

                  {/* Frequency & Verification */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-6 pb-6 border-b border-white/[0.08]">
                    <Clock className="w-4 h-4 text-neutral-500 shrink-0" />
                    <span>{channel.frequency}</span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    {channel.features.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-snug">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <div>
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 px-6 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-[0.99] ${channel.buttonClass}`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{channel.buttonText}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-500 text-center mt-3">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Canal verificado ZG Estoque · Entrada imediata</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Multi-channel notice */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-neutral-400">
          <span className="font-bold text-amber-400">Flexibilidade Total:</span>
          <span>Você pode ingressar em múltiplos canais sem qualquer custo ou restrição de tempo.</span>
        </div>
      </div>
    </section>
  );
};
