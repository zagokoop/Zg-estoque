import React from 'react';
import { ShieldCheck, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/defaultDeals';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-[#0A0C10] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
            FEEDBACK AUDITADO
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            O que dizem os membros dos canais ZG Estoque
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 leading-relaxed">
            Relatos reais de consumidores que utilizam nossa curadoria diária para adquirir produtos de alto valor com economia substancial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#0F121A] border border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400 tabular-nums">
                    {item.savedAmount}
                  </span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center font-bold text-xs text-amber-400">
                    {item.avatarText}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1">
                      <span>{item.name}</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="text-[11px] text-neutral-500">
                      {item.location}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] text-neutral-400 border border-white/10">
                  {item.platform === 'mercadolivre' ? 'Mercado Livre' : 'Shopee'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
