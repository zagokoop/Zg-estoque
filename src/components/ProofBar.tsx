import React from 'react';
import { Users, TrendingDown, ShieldCheck, BellOff } from 'lucide-react';

export const ProofBar: React.FC = () => {
  const metrics = [
    {
      icon: Users,
      value: '14.850+',
      label: 'Membros Ativos',
      sublabel: 'Usuários nos canais de transmissão',
      accent: 'text-amber-400',
    },
    {
      icon: TrendingDown,
      value: 'R$ 340.000+',
      label: 'Economia Auditada',
      sublabel: 'Acumulada por membros em 2026',
      accent: 'text-emerald-400',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Links Oficiais',
      sublabel: 'Sem intermediários ou desvios',
      accent: 'text-blue-400',
    },
    {
      icon: BellOff,
      value: '0 Ruído',
      label: 'Governança Estrita',
      sublabel: 'Apenas alertas verificados pelos curadores',
      accent: 'text-purple-400',
    },
  ];

  return (
    <section className="bg-[#0D0F14] py-8 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className={`flex flex-col justify-center ${index > 0 ? 'pt-4 lg:pt-0 lg:pl-8' : ''}`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon className={`w-4 h-4 ${item.accent}`} />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    {item.label}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  {item.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
