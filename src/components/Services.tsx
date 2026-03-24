import { motion } from 'motion/react';
import { Sparkles, Syringe, Activity, ShieldCheck, Heart, Droplets } from 'lucide-react';

const services = [
  {
    icon: <Syringe className="w-6 h-6" />,
    title: 'Botox e Preenchimento',
    description: 'Suavização de rugas e reposição de volume facial (lábios, olheiras, mandíbula) com resultados harmônicos e naturais.',
    image: '/service-1.jpg',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Bioestimuladores e Fios PDO',
    description: 'Tratamento profundo da flacidez, estimulando o colágeno natural do seu corpo para uma pele mais firme e jovem.',
    image: '/service-2.jpg',
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'PDRN e Regeneração',
    description: 'Tecnologia de ponta com polinucleotídeos para regeneração celular, melhorando a qualidade e a textura da pele.',
    image: '/service-3.jpg',
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    title: 'Tratamentos de Pele',
    description: 'Protocolos para melasma, manchas, acne e rejuvenescimento facial, pescoço, colo e mãos com Peeling e Fototerapia.',
    image: '/service-4.jpg',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'MMP e Microagulhamento',
    description: 'Permeação de ativos diretamente na derme para tratar cicatrizes, poros dilatados e estimular a renovação celular.',
    image: '/service-5.jpg',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Lipo de Papada',
    description: 'Redução da gordura submentoniana para um contorno facial mais definido, sem necessidade de cirurgia invasiva.',
    image: '/download-3.jpg',
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-32 bg-stone-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">Nossos Serviços</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mt-2 mb-8 leading-[1.15]">
            Procedimentos de estética avançada integrados à saúde
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            Oferecemos protocolos personalizados fundamentados em segurança técnica e tecnologia atualizada para realçar a beleza natural, combatendo a insatisfação com a imagem e sinais de envelhecimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-stone-100 group overflow-hidden flex flex-col md:flex-row"
            >
              <div className="w-full md:w-2/5 relative h-56 md:h-auto shrink-0 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-primary shadow-sm">
                  {service.icon}
                </div>
              </div>
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-8 line-clamp-3 flex-1">
                  {service.description}
                </p>
                <a
                  href="https://wa.me/5564992677990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-secondary font-medium hover:text-secondary-dark transition-colors mt-auto"
                >
                  Falar no WhatsApp
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
