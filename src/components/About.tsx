import { motion } from 'motion/react';

export function About() {
  return (
    <section id="sobre" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative z-10">
              <img
                src="/about-image.jpg"
                alt="Equipe Clínica Rennove em atendimento humanizado"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-stone-100 rounded-full z-0" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary/10 rounded-full z-0" />
            
            <div className="absolute bottom-4 left-4 md:bottom-8 md:-left-8 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl z-20 max-w-[220px] md:max-w-xs border border-white/50">
              <p className="text-5xl font-heading font-bold text-primary mb-2">+3</p>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">Anos transformando a autoestima em Catalão</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">Nossa História</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mt-2 mb-8 leading-[1.15]">
              A estética como ferramenta de saúde e autoconfiança.
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed">
              <p>
                A Rennove Estética foi fundada em 2021 em um momento de forte expansão da estética avançada no interior de Goiás. Nosso objetivo sempre foi trazer procedimentos de alta complexidade, antes encontrados apenas em grandes capitais, para Catalão.
              </p>
              <p>
                <strong>Nossa Missão:</strong> Potencializar a melhor versão de cada pessoa respeitando sua individualidade. Acreditamos na estética como ferramenta de saúde e autoconfiança, nunca apenas vaidade.
              </p>
              <div className="p-6 bg-stone-50 rounded-2xl border-l-4 border-primary">
                <p className="text-gray-800 font-medium italic">
                  "Nosso diferencial é o atendimento humanizado com planos de cuidado desenhados individualmente conforme a fisiologia do cliente. Foco absoluto em resultados naturais e preservação da saúde através de protocolos éticos."
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-10">
              <div>
                <h4 className="text-5xl font-heading font-bold text-gray-900 mb-3">100%</h4>
                <p className="text-base text-gray-600 font-medium">Protocolos Personalizados</p>
              </div>
              <div>
                <h4 className="text-5xl font-heading font-bold text-gray-900 mb-3">Alta</h4>
                <p className="text-base text-gray-600 font-medium">Tecnologia e Segurança</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
