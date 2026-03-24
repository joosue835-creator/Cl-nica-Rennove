import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function Team() {
  return (
    <section id="equipe" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-[1600px]">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">Nossa Equipe</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mt-2 mb-8 leading-[1.15]">
            Conheça as Profissionais
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            Especialistas dedicadas a realçar sua beleza com segurança, ética e um olhar humanizado.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Dra. Mirian Oliveira */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row bg-stone-50 rounded-3xl overflow-hidden shadow-sm border border-stone-100 h-full"
          >
            <div className="w-full lg:w-2/5 relative h-[400px] sm:h-[500px] lg:h-auto shrink-0">
              <img
                src="/dra-mirian-1-v2.jpeg"
                alt="Dra. Mirian Oliveira"
                className="absolute inset-0 w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            
            <div className="w-full lg:w-3/5 p-8 lg:p-10 flex flex-col flex-grow">
              <div className="mb-6">
                <h3 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900">Dra. Mirian Oliveira ✨</h3>
                <p className="text-secondary font-medium mt-3 text-lg lg:text-xl">Biomédica Esteta e Tricologista</p>
              </div>

              <div className="space-y-4 text-gray-600 mb-8 text-base lg:text-lg flex-grow">
                <p>
                  Biomédica Esteta, Tricologista e apaixonada por transformar vidas! Com mais de 8 anos de experiência, ela une conhecimento, dedicação e um olhar humanizado para realçar a beleza e a autoestima de cada paciente.
                </p>
                <p>
                  Além da profissão, sua maior inspiração vem da fé em Deus, da família e da conexão com a natureza. Mãe de duas princesas, ela entende que o cuidado vai muito além da estética, é sobre bem-estar, confiança e amor-próprio.
                </p>
                <p className="font-medium text-gray-800">
                  Na Rennove, sua missão é proporcionar resultados que encantam e fazem a diferença 💛
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-100 mt-auto">
                <h4 className="font-semibold text-gray-900 mb-4">Saiba mais sobre a Dra Mirian</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                  {[
                    'Co-Fundadora da Clínica Rennove',
                    'Biomédica Esteta e Tricologista',
                    'Amor a Deus acima de tudo',
                    'Amo viagens e natureza',
                    'Amo cuidar de vidas',
                    'Mãe de duas princesas',
                    'Atuante na área desde 2016'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm lg:text-base">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Dra. Ruthyelle Nayara */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col lg:flex-row-reverse bg-stone-50 rounded-3xl overflow-hidden shadow-sm border border-stone-100 h-full"
          >
            <div className="w-full lg:w-2/5 relative h-[400px] sm:h-[500px] lg:h-auto shrink-0">
              <img
                src="/dra-mirian-2.jpeg"
                alt="Dra. Ruthyelle Nayara"
                className="absolute inset-0 w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            
            <div className="w-full lg:w-3/5 p-8 lg:p-10 flex flex-col flex-grow">
              <div className="mb-6">
                <h3 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900">Dra. Ruthyelle Nayara ✨</h3>
                <p className="text-secondary font-medium mt-3 text-lg lg:text-xl">Biomédica Esteta</p>
              </div>

              <div className="space-y-4 text-gray-600 mb-8 text-base lg:text-lg flex-grow">
                <p>
                  Biomédica Esteta e apaixonada por transformar vidas! Com um olhar cuidadoso e sensível, ela une técnica e amor pelo que faz para realçar a beleza e devolver a autoestima de cada paciente.
                </p>
                <p>
                  Além da profissão, sua essência está na conexão com a natureza, nos momentos especiais com sua família e no carinho pelos animais. Mãe de um príncipe e uma princesa, ela entende que beleza vai além da aparência, é sobre bem-estar e confiança.
                </p>
                <p className="font-medium text-gray-800">
                  Na Rennove, seu compromisso é cuidar de cada paciente com dedicação e excelência 💛
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-100 mt-auto">
                <h4 className="font-semibold text-gray-900 mb-4">Saiba mais sobre a Dra Ruthyelle</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                  {[
                    'Co-Fundadora da Clínica Rennove',
                    'Biomédica Esteta',
                    'Apaixonada pela vida e pelos animais',
                    'Amo pedalar e estar na natureza',
                    'Amo me relacionar com pessoas',
                    'Mãe de um príncipe e uma princesa',
                    'Minha especialidade é devolver sua autoestima e realçar sua beleza'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm lg:text-base">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
