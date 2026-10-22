import React from 'react';
import { MessageCircle, BellRing, MousePointerClick, CheckCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Entre no Grupo VIP',
      description: 'Clique no botão verde de WhatsApp e entre gratuitamente em menos de 10 segundos.',
      icon: MessageCircle,
    },
    {
      number: '02',
      title: 'Ative as Notificações',
      description: 'Como as melhores ofertas e bugs esgotam rápido, ative o som ou deixe o grupo fixado.',
      icon: BellRing,
    },
    {
      number: '03',
      title: 'Copie o Cupom e Acesse',
      description: 'Cada aviso vem com o cupom já formatado e o link oficial verificado do Mercado Livre ou Shopee.',
      icon: MousePointerClick,
    },
    {
      number: '04',
      title: 'Economize no Carrinho',
      description: 'Cole o cupom no checkout oficial e aproveite descontos reais com segurança das plataformas.',
      icon: CheckCheck,
    },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-20 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            Passo a Passo Simples
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Como funciona para nunca mais pagar o preço cheio
          </h2>
          <p className="text-sm text-neutral-400 mt-3">
            Sem pegadinhas, sem taxas escondidas e sem cadastros demorados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="relative flex flex-col p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black text-neutral-700 font-mono">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
