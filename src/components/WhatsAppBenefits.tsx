import React from 'react';
import { MessageCircle, Zap, ShieldAlert, Sparkles, Gift, ArrowRight } from 'lucide-react';

interface WhatsAppBenefitsProps {
  whatsappUrl: string;
  whatsappGroupName: string;
}

export const WhatsAppBenefits: React.FC<WhatsAppBenefitsProps> = ({
  whatsappUrl,
  whatsappGroupName,
}) => {
  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-neutral-950 border-b border-neutral-800 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Mockup with notification */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
              <img
                src="/src/assets/images/whatsapp_alert_community_1792686573335.jpg"
                alt="Notificações de ofertas e cupons do grupo de WhatsApp no smartphone"
                className="w-full h-auto aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

              {/* Simulated WhatsApp incoming message box */}
              <div className="absolute bottom-4 inset-x-4 bg-neutral-900/95 backdrop-blur-md border border-emerald-500/30 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-2.5 mb-2">
                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-10-22_at_13.42.57_08754572.jpeg"
                    alt="ZG Estoque Avatar"
                    className="w-7 h-7 rounded-full object-cover border border-amber-400/60 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-xs font-bold text-white truncate">{whatsappGroupName}</span>
                  <span className="text-[10px] text-neutral-400 ml-auto">Agora</span>
                </div>
                <p className="text-xs text-neutral-200 line-clamp-2 leading-relaxed">
                  🚨 <strong className="text-amber-400">BUG NO AR:</strong> Fone ANC com 65% OFF no Mercado Livre Full + Cupom extra liberado! Link verificado abaixo ⬇️
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clear Value Proposition & Direct WhatsApp CTA */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
              Comunidade Exclusiva & Silenciosa
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 [text-wrap:balance]">
              Por que mais de 14.800 pessoas estão no nosso grupo de WhatsApp?
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mb-8 leading-relaxed">
              As melhores pechinchas do Mercado Livre e da Shopee nunca chegam à página inicial das lojas: elas esgotam antes. No WhatsApp, você recebe a notificação no segundo exato do disparo.
            </p>

            {/* Benefit Items (Zero-Pill, human editorial layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Alertas Imediatos de Bugs</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Falhas temporárias de preço e cupons cumulativos que duram de 5 a 15 minutos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Gift className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Cupons de Frete Grátis</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Códigos especiais para zerar o frete no Mercado Livre Full e Cupons Shopee Moedas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Proteção Anti-Golpe</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Checagem humana da reputação do vendedor, histórico de preço e garantia oficial.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Zero Bate-Papo Paralelo</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Apenas administradores enviam mensagens. Seu celular não fica apitando à toa.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct High-Converting Button to WhatsApp */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-neutral-950 bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] rounded-xl transition-all shadow-lg shadow-emerald-500/25 whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 fill-neutral-950" />
                <span>Quero Acessar o Grupo VIP Grátis</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <div className="text-xs text-neutral-400 text-center sm:text-left">
                Vagas limitadas por grupo do WhatsApp · Entrada imediata
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
