import React, { useState } from 'react';
import { Calculator, TrendingDown, Clock, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';

interface SavingsSimulatorProps {
  whatsappUrl: string;
}

export const SavingsSimulator: React.FC<SavingsSimulatorProps> = ({ whatsappUrl }) => {
  const [monthlySpend, setMonthlySpend] = useState<number>(1200);

  // Conservative average benchmark savings rate: 32%
  const monthlySavings = Math.round(monthlySpend * 0.32);
  const annualSavings = monthlySavings * 12;
  const hoursSaved = Math.max(6, Math.round((monthlySpend / 150) * 1.5));
  const freeShippingCoupons = Math.max(3, Math.round(monthlySpend / 300));

  return (
    <section id="simulador" className="py-20 sm:py-28 bg-[#0D0F16] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Context & Controls */}
          <div className="lg:col-span-6">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
              SIMULAÇÃO FINANCEIRA
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance] mb-4">
              Calcule quanto você economiza utilizando a curadoria ZG Estoque
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mb-8 leading-relaxed">
              Ao substituir compras avulsas pelo acompanhamento de cupons cumulativos e quedas históricas de preço, o consumidor médio poupa de 25% a 50% em compras rotineiras no Mercado Livre e Shopee.
            </p>

            {/* Slider Control Box */}
            <div className="p-6 rounded-2xl bg-[#141822] border border-white/[0.08] shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                  Seu gasto médio mensal online
                </span>
                <span className="text-xl font-extrabold text-amber-400 font-mono tabular-nums">
                  R$ {monthlySpend.toLocaleString('pt-BR')}
                </span>
              </div>

              <input
                type="range"
                min="200"
                max="6000"
                step="100"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none mb-3"
              />

              <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                <span>R$ 200 / mês</span>
                <span>R$ 3.000 / mês</span>
                <span>R$ 6.000 / mês</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
              <Calculator className="w-4 h-4 text-amber-400/80" />
              <span>Baseado no histórico real de cupons ativos e queimas de estoque auditadas em 2026.</span>
            </div>
          </div>

          {/* Right Column: Calculated Results Matrix */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#161B26] to-[#0F121A] border border-amber-400/30 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                    Economia Anual Projetada
                  </div>
                  <div className="text-3xl sm:text-5xl font-black text-amber-400 font-mono tabular-nums tracking-tight mt-1">
                    R$ {annualSavings.toLocaleString('pt-BR')}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                    Média / Mês
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums mt-1">
                    R$ {monthlySavings.toLocaleString('pt-BR')}
                  </div>
                </div>
              </div>

              {/* Sub-metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Tempo economizado</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white font-mono tabular-nums">
                    ~{hoursSaved}h / mês
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">Sem garimpar na mão</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1">
                    <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Cupons de Frete</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white font-mono tabular-nums">
                    {freeShippingCoupons}+ / mês
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">Frete grátis garantido</div>
                </div>
              </div>

              {/* Conversion Trigger */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl font-bold text-sm text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:brightness-110 flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-amber-500/20 active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4 fill-neutral-950" />
                <span>Começar a Economizar no WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <div className="text-center mt-3 text-[11px] text-neutral-500 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Entrada 100% gratuita · Sem fidelidade ou taxas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
