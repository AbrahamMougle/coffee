import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from '../components/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Menu', href: '#' },
    { name: 'À propos', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <header className="bg-light text-dark px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-4xl font-heading font-bold text-primary">
          Coffee
        </div>

        {/* Navigation Desktop + Bouton Réserver */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-dark/80 hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Bouton Réserver SEULEMENT sur desktop */}
          <Button 
            variant="primary"
            size='lg'
          >
            Réserver
          </Button>
        </div>

        {/* Bouton Hamburger (Mobile) */}
        <button
          className="md:hidden text-2xl text-dark transition-colors p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Menu"
        >
          {isMenuOpen ? <FiX className="transform scale-110" /> : <FiMenu />}
        </button>
      </div>

      {/* Menu Mobile (sans bouton Réserver) */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[250px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-light/95 backdrop-blur-sm pt-2 pb-4 px-4 space-y-2 border-t border-accent/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block font-body py-3 px-4 text-dark/90 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}