import React from 'react';
import { MessageCircle, Laptop, Home, Sparkles, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

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
  const groups = [
    {
      id: 'geral',
      title: 'Grupo VIP Geral',
      subtitle: 'Todos os Achadinhos & Bugs',
      description: 'O canal completo da ZG Estoque. Receba todas as promoções relâmpago, cupons com frete grátis e erros de preço de todas as categorias.',
      badge: 'Mais Popular · Todas as Ofertas',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      icon: Sparkles,
      iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      btnText: 'Entrar no Grupo Geral VIP',
      btnClass: 'bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-emerald-500/20',
      url: generalUrl,
      highlights: [
        'Bugs de preço relâmpago de todas as categorias',
        'Cupons secretos e frete grátis diários',
        'Maior volume de achados verificados',
      ],
    },
    {
      id: 'eletronicos',
      title: 'Grupo de Eletrônicos & Tech',
      subtitle: 'Fones, Smartwatches, Setup & Gadgets',
      description: 'Canal focado exclusivamente em tecnologia. Ofertas imperdíveis de periféricos gamer, fones sem fio ANC, smartwatches, carregadores e acessórios.',
      badge: 'Tech, Informática & Gamer',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      icon: Laptop,
      iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      btnText: 'Entrar no Grupo de Eletrônicos',
      btnClass: 'bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-neutral-950 shadow-cyan-500/20',
      url: eletronicosUrl,
      highlights: [
        'Fones Bluetooth TWS, Smartwatches e Pulseiras',
        'Acessórios para celular, cabos turbo e bases de indução',
        'Periféricos para PC, teclados mecânicos e setup gamer',
      ],
    },
    {
      id: 'casa',
      title: 'Grupo de Casa & Decoração',
      subtitle: 'Cozinha, Air Fryer, Organização & Lar',
      description: 'Canal focado exclusivamente no lar. Achadinhos de utilidades domésticas, organizadores herméticos, eletroportáteis, iluminação e peças decorativas.',
      badge: 'Lar, Cozinha & Conforto',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      icon: Home,
      iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      btnText: 'Entrar no Grupo de Casa & Decor',
      btnClass: 'bg-gradient-to-r from-emerald-500 to-amber-500 hover:from-emerald-400 hover:to-amber-400 text-neutral-950 shadow-amber-500/20',
      url: casaUrl,
      highlights: [
        'Air Fryers, cafeteiras e eletroportáteis de cozinha',
        'Potes herméticos, prateleiras e organizadores virais',
        'Luminárias LED, aromatizadores e artigos de decoração',
      ],
    },
  ];

  return (
    <section id="grupos" className="py-16 sm:py-24 bg-neutral-950 border-b border-neutral-800 relative">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/5 blur-[140px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            Comunidades Específicas
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Escolha o Seu Grupo de Ofertas no WhatsApp
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Prefere receber tudo ou quer apenas ofertas nichadas? Escolha o grupo que mais combina com você (ou entre em todos gratuitamente).
          </p>
        </div>

        {/* 3 Group Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {groups.map((grp) => {
            const Icon = grp.icon;
            return (
              <div
                key={grp.id}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/30"
              >
                <div>
                  {/* Top Badge and Icon */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${grp.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${grp.badgeColor}`}>
                      {grp.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-1">
                    {grp.title}
                  </h3>
                  <div className="text-xs font-semibold text-amber-400/90 mb-3">
                    {grp.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                    {grp.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2.5 pt-4 border-t border-neutral-800/80 mb-6">
                    {grp.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Direct Action Button */}
                <div>
                  <a
                    href={grp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-5 font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-[0.98] ${grp.btnClass}`}
                  >
                    <MessageCircle className="w-4 h-4 fill-neutral-950" />
                    <span>{grp.btnText}</span>
                    <ArrowRight className="w-4 h-4 ml-0.5" />
                  </a>
                  <div className="text-[11px] text-neutral-500 text-center mt-2.5 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>100% gratuito · Notificações silenciosas</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative notice */}
        <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-xl p-4 text-center max-w-xl mx-auto">
          <p className="text-xs text-neutral-300">
            💡 <strong className="text-white">Dica:</strong> Você pode participar de múltiplos grupos ao mesmo tempo para não perder nenhuma oportunidade de economia!
          </p>
        </div>
      </div>
    </section>
  );
};
