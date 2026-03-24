import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-32 bg-stone-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="bg-primary rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Image Side */}
            <div className="relative h-64 lg:h-auto hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
                alt="Paciente sorrindo após procedimento estético"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>

            {/* Content Side */}
            <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">
                  Dê o Primeiro Passo
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-[1.15]">
                  Sua melhor versão com segurança e resultados naturais.
                </h2>
                <p className="text-primary-100 text-lg md:text-xl mb-12 text-stone-200 font-light leading-relaxed">
                  Não deixe o medo de resultados artificiais ou a preocupação com o investimento te impedirem de recuperar sua autoconfiança. Agende uma avaliação detalhada e descubra o protocolo ideal para você.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/5564992677990"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white text-base font-medium rounded-full hover:bg-secondary-dark transition-all shadow-lg hover:-translate-y-0.5"
                  >
                    Agendar Avaliação
                    <ArrowRight size={20} />
                  </a>
                  <a
                    href="https://wa.me/5564992677990"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-dark text-white text-base font-medium rounded-full hover:bg-stone-900 transition-all border border-primary-dark"
                  >
                    <MessageCircle size={20} />
                    (64) 99267-7990
                  </a>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
