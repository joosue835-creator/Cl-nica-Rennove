import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      )}
    >
      <nav className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-heading font-bold text-primary tracking-tight">
              Rennove
            </span>
            <span className="text-sm font-medium text-secondary tracking-widest uppercase mt-1">
              - Clínica de Estética
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#servicos"
              className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-dark transition-colors shadow-sm"
            >
              Ver Tratamentos
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-base font-medium text-gray-800 hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#servicos"
            className="w-full text-center px-5 py-3 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-dark transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Ver Tratamentos
          </a>
        </div>
      )}
    </header>
  );
}
