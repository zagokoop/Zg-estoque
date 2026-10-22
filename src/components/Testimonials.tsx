import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/defaultDeals';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-20 border-b border-neutral-800 bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
            Membros Reais da Comunidade
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Quem participa já economizou centenas de reais
          </h2>
          <p className="text-sm text-neutral-400 mt-2">
            Veja a experiência de quem recebe os alertas de promoções no WhatsApp diariamente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-emerald-400 font-mono">
                    {item.savedAmount}
                  </span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-xs text-amber-400">
                    {item.avatarText}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1">
                      <span>{item.name}</span>
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                    </div>
                    <div className="text-[11px] text-neutral-500">
                      {item.location}
                    </div>
                  </div>
                </div>

                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  item.platform === 'mercadolivre' 
                    ? 'bg-amber-400/10 text-amber-300 border border-amber-400/20' 
                    : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                }`}>
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
