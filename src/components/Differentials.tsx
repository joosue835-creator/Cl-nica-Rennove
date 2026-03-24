import { motion } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';

const differentials = [
  {
    title: 'Atendimento e Planejamento',
    us: 'Humanizado com planos desenhados individualmente conforme sua fisiologia.',
    them: 'Atendimento padronizado e "receitas de bolo" iguais para todos.',
  },
  {
    title: 'Foco dos Resultados',
    us: 'Absoluto em resultados naturais e preservação da sua identidade.',
    them: 'Transformações drásticas e resultados artificiais (rosto padronizado).',
  },
  {
    title: 'Segurança e Ética',
    us: 'Biossegurança rigorosa e produtos de ponta (linha Rennova).',
    them: 'Uso de produtos de origem duvidosa para baratear custos.',
  },
  {
    title: 'Acompanhamento',
    us: 'Suporte integral pós-procedimento e retorno de avaliação garantido.',
    them: 'Sem suporte adequado após a realização da sessão.',
  },
  {
    title: 'Transparência',
    us: 'Clareza total sobre o que será aplicado, dor esperada e investimento.',
    them: 'Falta de clareza sobre os produtos e surpresas no valor final.',
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">Por que nos escolher</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mt-2 mb-8 leading-[1.15]">
            O que nos torna diferentes
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            Superamos suas dúvidas sobre dor, recuperação e resultados artificiais através de um método focado na sua segurança e bem-estar.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-stone-50 rounded-3xl overflow-hidden shadow-sm border border-stone-100">
            {/* Header */}
            <div className="hidden md:grid grid-cols-3 bg-stone-100/50 border-b border-stone-200">
              <div className="p-6"></div>
              <div className="p-8 text-center border-l border-stone-200 bg-primary/5">
                <h3 className="text-2xl font-heading font-bold text-primary">Clínica Rennove</h3>
              </div>
              <div className="p-8 text-center border-l border-stone-200">
                <h3 className="text-2xl font-heading font-bold text-gray-500">Clínicas Comuns</h3>
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-stone-200">
              {differentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-3 hover:bg-white transition-colors"
                >
                  <div className="p-6 flex items-center">
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  </div>
                  <div className="p-6 md:border-l border-stone-200 bg-primary/5 flex flex-col gap-2">
                    <span className="md:hidden text-xs font-bold text-primary uppercase tracking-wider">Clínica Rennove</span>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-800">{item.us}</p>
                    </div>
                  </div>
                  <div className="p-6 md:border-l border-stone-200 flex flex-col gap-2 opacity-60">
                    <span className="md:hidden text-xs font-bold text-gray-500 uppercase tracking-wider">Clínicas Comuns</span>
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600">{item.them}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
