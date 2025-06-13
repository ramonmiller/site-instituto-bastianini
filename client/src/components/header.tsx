import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    closeMobileMenu();
  };

  return (
    <header className="relative">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <h3 className="font-montserrat font-bold text-xl flex items-center" style={{ color: '#0B336F' }}>
                <GraduationCap className="mr-2 h-6 w-6" />
                Instituto Bastianini
              </h3>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-baseline space-x-8">
                <a 
                  href="#inicio" 
                  onClick={(e) => handleLinkClick(e, '#inicio')}
                  className="transition-colors duration-300 font-medium hover:opacity-70"
                  style={{ color: '#737373' }}
                >
                  Início
                </a>
                <a 
                  href="#sobre" 
                  onClick={(e) => handleLinkClick(e, '#sobre')}
                  className="transition-colors duration-300 font-medium hover:opacity-70"
                  style={{ color: '#737373' }}
                >
                  Sobre
                </a>
                <a 
                  href="#projetos" 
                  onClick={(e) => handleLinkClick(e, '#projetos')}
                  className="transition-colors duration-300 font-medium hover:opacity-70"
                  style={{ color: '#737373' }}
                >
                  Projetos
                </a>
                <a 
                  href="#eventos" 
                  onClick={(e) => handleLinkClick(e, '#eventos')}
                  className="transition-colors duration-300 font-medium hover:opacity-70"
                  style={{ color: '#737373' }}
                >
                  Eventos
                </a>
                <a 
                  href="#apoio" 
                  onClick={(e) => handleLinkClick(e, '#apoio')}
                  className="transition-colors duration-300 font-medium hover:opacity-70"
                  style={{ color: '#737373' }}
                >
                  Apoio
                </a>
                <a 
                  href="#contato" 
                  onClick={(e) => handleLinkClick(e, '#contato')}
                  className="transition-colors duration-300 font-medium hover:opacity-70"
                  style={{ color: '#737373' }}
                >
                  Contato
                </a>
              </div>
            </div>
            
            {/* Empty space for balance */}
            <div className="hidden md:block flex-shrink-0 w-48"></div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="focus:outline-none hover:opacity-70"
                style={{ color: '#737373' }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#inicio" 
              onClick={(e) => handleLinkClick(e, '#inicio')}
              className="block px-3 py-2 transition-colors duration-300 hover:opacity-70"
              style={{ color: '#737373' }}
            >
              Início
            </a>
            <a 
              href="#sobre" 
              onClick={(e) => handleLinkClick(e, '#sobre')}
              className="block px-3 py-2 transition-colors duration-300 hover:opacity-70"
              style={{ color: '#737373' }}
            >
              Sobre
            </a>
            <a 
              href="#projetos" 
              onClick={(e) => handleLinkClick(e, '#projetos')}
              className="block px-3 py-2 transition-colors duration-300 hover:opacity-70"
              style={{ color: '#737373' }}
            >
              Projetos
            </a>
            <a 
              href="#eventos" 
              onClick={(e) => handleLinkClick(e, '#eventos')}
              className="block px-3 py-2 transition-colors duration-300 hover:opacity-70"
              style={{ color: '#737373' }}
            >
              Eventos
            </a>
            <a 
              href="#apoio" 
              onClick={(e) => handleLinkClick(e, '#apoio')}
              className="block px-3 py-2 transition-colors duration-300 hover:opacity-70"
              style={{ color: '#737373' }}
            >
              Apoio
            </a>
            <a 
              href="#contato" 
              onClick={(e) => handleLinkClick(e, '#contato')}
              className="block px-3 py-2 transition-colors duration-300 hover:opacity-70"
              style={{ color: '#737373' }}
            >
              Contato
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
