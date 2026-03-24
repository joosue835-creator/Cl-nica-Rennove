import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Mariana S.',
    role: 'Empresária, Catalão',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    text: 'Eu tinha muito medo de ficar com o rosto artificial, mas a equipe da Rennove me passou tanta segurança na avaliação. O resultado do meu preenchimento ficou incrivelmente natural. Minha confiança foi renovada!',
  },
  {
    id: 2,
    name: 'Carlos M.',
    role: 'Advogado, Catalão',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    text: 'Sempre achei que estética era só para mulheres, mas os protocolos masculinos da clínica respeitaram meus traços. O atendimento humanizado fez toda a diferença. Recomendo de olhos fechados.',
  },
  {
    id: 3,
    name: 'Juliana F.',
    role: 'Professora, Catalão',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop',
    text: 'Fiz bioestimuladores de colágeno e a diferença na firmeza da minha pele é absurda. O acompanhamento pós-procedimento me deixou super tranquila. Profissionais éticos e extremamente competentes.',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-32 bg-stone-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">Prova Social</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mt-2 mb-8 leading-[1.15]">
            Confiança Renovada
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            Apresentação de casos reais e depoimentos de clientes satisfeitos em Catalão. Resultados que evidenciam a eficácia dos protocolos e a qualidade do atendimento humanizado.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-10">
            <button
              onClick={prev}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-10">
            <button
              onClick={next}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm relative">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-stone-100 -z-0" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 flex flex-col md:flex-row items-center gap-8"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover rounded-full border-4 border-stone-50"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <div>
                    <h4 className="font-heading font-bold text-gray-900 text-xl">{testimonials[currentIndex].name}</h4>
                    <p className="text-secondary font-medium">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-stone-300'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
