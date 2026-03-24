import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const faqs = [
  {
    question: 'Os procedimentos de harmonização facial doem?',
    answer: 'Utilizamos técnicas de conforto e anestésicos tópicos ou injetáveis para garantir que sua experiência seja praticamente indolor.',
  },
  {
    question: 'Quanto tempo dura o efeito do Botox?',
    answer: 'A durabilidade média é de 4 a 6 meses, variando conforme o metabolismo de cada paciente e os cuidados pós-procedimento.',
  },
  {
    question: 'O que são os Bioestimuladores de Colágeno e para que servem?',
    answer: 'São substâncias injetáveis que estimulam seu próprio corpo a produzir colágeno, tratando a flacidez e melhorando a firmeza da pele de forma gradual.',
  },
  {
    question: 'Vou ficar com o rosto "artificial" após o preenchimento?',
    answer: 'Nossa metodologia foca na Harmonização Natural, priorizando realçar seus traços originais e evitar exageros.',
  },
  {
    question: 'Posso voltar a trabalhar logo após realizar um procedimento?',
    answer: 'A maioria dos nossos tratamentos permite o retorno imediato às atividades, exigindo apenas cuidados simples como evitar exposição solar e exercícios físicos intensos nas primeiras 24h.',
  },
  {
    question: 'Quanto tempo leva para ver o resultado do Preenchimento Labial?',
    answer: 'O resultado volumétrico é imediato, porém o resultado final, após a redução do inchaço natural, ocorre em cerca de 15 dias.',
  },
  {
    question: 'A clínica atende apenas mulheres ou homens também podem fazer os procedimentos?',
    answer: 'Atendemos todos os públicos; temos protocolos específicos para a face masculina, respeitando as angulações e características próprias dos homens.',
  },
  {
    question: 'Preciso agendar uma avaliação antes de realizar o procedimento?',
    answer: 'Sim, a consulta de avaliação é fundamental para realizarmos o diagnóstico facial e traçarmos o plano de tratamento ideal para suas necessidades.',
  },
  {
    question: 'Quais as formas de pagamento aceitas na clínica?',
    answer: 'Aceitamos cartões de crédito (com opção de parcelamento), débito, PIX e oferecemos condições especiais para pacotes de múltiplas sessões.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-4xl">
        <div className="text-center mb-20">
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">Dúvidas Frequentes</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mt-2 mb-8 leading-[1.15]">
            Tudo que você precisa saber
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            Esclarecemos suas principais dúvidas sobre dor, recuperação, investimentos e segurança dos procedimentos.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border border-stone-200 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between bg-stone-50 hover:bg-stone-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-heading font-semibold text-lg text-gray-900 pr-8">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-primary shrink-0 transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-5 bg-white text-gray-600 border-t border-stone-200">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
