import React from 'react';
import { Users, TrendingDown, CheckCircle2, BellOff } from 'lucide-react';

export const ProofBar: React.FC = () => {
  return (
    <section className="bg-neutral-950 py-8 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {/* Stat 1 */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
                14.850+
              </div>
              <div className="text-xs text-neutral-400">
                Membros no WhatsApp
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <TrendingDown className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
                R$ 340k+
              </div>
              <div className="text-xs text-neutral-400">
                Economizados em 2026
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
                100%
              </div>
              <div className="text-xs text-neutral-400">
                Lojas e Links Verificados
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
              <BellOff className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
                0 Spam
              </div>
              <div className="text-xs text-neutral-400">
                Apenas Cupons e Achados
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
