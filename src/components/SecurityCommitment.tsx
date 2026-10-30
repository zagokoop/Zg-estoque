import React from 'react';
import { Lock, BellOff, CheckCircle2, ShieldAlert } from 'lucide-react';

export const SecurityCommitment: React.FC = () => {
  const commitments = [
    {
      icon: BellOff,
      title: 'Canais 100% Silenciosos',
      description: 'Apenas a equipe oficial ZG Estoque possui permissão para envio. Sem conversas paralelas, figurinhas, correntes ou mensagens fora de contexto.',
    },
    {
      icon: Lock,
      title: 'Zero Intermediação Financeira',
      description: 'Você nunca insere dados de cartão ou dados pessoais conosco. Todos os links direcionam para os servidores oficiais protegidos com criptografia SSL do Mercado Livre e Shopee.',
    },
    {
      icon: CheckCircle2,
      title: 'Acesso 100% Gratuito e Aberto',
      description: 'Não cobramos taxas de entrada, mensalidades ou planos VIP. O acesso aos canais é público, livre e você pode sair quando desejar com um clique.',
    },
    {
      icon: ShieldAlert,
      title: 'Transparência de Conformidade',
      description: 'Operamos em conformidade com as diretrizes oficiais de afiliados do Mercado Livre e da Shopee Brasil. Nossas indicações priorizam sempre a segurança do consumidor.',
    },
  ];

  return (
    <section id="seguranca" className="py-20 sm:py-28 bg-[#0D0F16] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
            COMPROMISSO INSTITUCIONAL
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Segurança, Privacidade & Governança da Comunidade
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 leading-relaxed">
            Entenda por que mais de 14.800 membros confiam na ZG Estoque como sua fonte primária de oportunidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#131620] border border-white/[0.08] flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0 mt-1">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
