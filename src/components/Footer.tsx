import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-heading font-bold text-white tracking-tight">
                Rennove
              </span>
              <span className="text-sm font-medium text-secondary tracking-widest uppercase mt-1">
                - Clínica de Estética
              </span>
            </a>
            <p className="text-stone-400 mb-8 font-light leading-relaxed">
              Clínica de Estética Avançada em Catalão. Promovemos a recuperação da autoestima através de cuidados integrados, priorizando resultados naturais e seguros.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/rennove.clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-heading font-bold mb-8 uppercase tracking-widest text-sm">Navegação</h4>
            <ul className="space-y-3">
              <li><a href="#sobre" className="hover:text-secondary transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-secondary transition-colors">Tratamentos</a></li>
              <li><a href="#diferenciais" className="hover:text-secondary transition-colors">Diferenciais</a></li>
              <li><a href="#depoimentos" className="hover:text-secondary transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-secondary transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-white font-heading font-bold mb-8 uppercase tracking-widest text-sm">Contato e Localização</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <span>R. José Saturnino de Castro, 438 - São João<br />Catalão - GO, CEP: 75703-050, Brasil</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="https://wa.me/5564992677990" className="hover:text-secondary transition-colors">(64) 99267-7990</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:clinica_rennove@gmail.com" className="hover:text-secondary transition-colors">clinica_rennove@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary shrink-0" />
                <span>Segunda a Sexta das 8h as 18h</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Clínica Rennove. Todos os direitos reservados.</p>
          <p>CNPJ: 40.037.689/0001-43</p>
        </div>
      </div>
    </footer>
  );
}
