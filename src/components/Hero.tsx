import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-stone-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-stone-50/80 md:bg-transparent md:bg-gradient-to-r md:from-stone-50/90 md:via-stone-50/60 md:to-transparent z-10" />
        <img
          src="/hero-bg-new.jpeg"
          alt="Profissional de estética realizando procedimento com segurança"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/10 text-secondary-dark text-sm font-semibold tracking-wide mb-8">
              Estética Avançada em Catalão
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gray-900 leading-[1.1] mb-8">
              Sua melhor versão com <span className="text-primary">segurança</span> e resultados <span className="text-secondary">naturais</span>.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed font-light">
              Ajudamos homens e mulheres que buscam elevar a autoestima e o bem-estar através de intervenções precisas, segurança clínica e acompanhamento profissional dedicado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="https://wa.me/5564992677990"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white text-base font-medium rounded-full hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Agendar Avaliação
                <ArrowRight size={20} />
              </a>
              <a
                href="#equipe"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 text-base font-medium rounded-full hover:bg-gray-50 transition-all border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Saiba Mais
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
