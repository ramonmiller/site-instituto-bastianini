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
      <nav className="bg-primary-gradient shadow-lg relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="text-white font-montserrat font-bold text-xl flex items-center">
                <GraduationCap className="mr-2 h-6 w-6" />
                Instituto Bastianini
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a 
                  href="#inicio" 
                  onClick={(e) => handleLinkClick(e, '#inicio')}
                  className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
                >
                  Início
                </a>
                <a 
                  href="#sobre" 
                  onClick={(e) => handleLinkClick(e, '#sobre')}
                  className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
                >
                  Sobre
                </a>
                <a 
                  href="#projetos" 
                  onClick={(e) => handleLinkClick(e, '#projetos')}
                  className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
                >
                  Projetos
                </a>
                <a 
                  href="#eventos" 
                  onClick={(e) => handleLinkClick(e, '#eventos')}
                  className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
                >
                  Eventos
                </a>
                <a 
                  href="#apoio" 
                  onClick={(e) => handleLinkClick(e, '#apoio')}
                  className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
                >
                  Apoio
                </a>
                <a 
                  href="#contato" 
                  onClick={(e) => handleLinkClick(e, '#contato')}
                  className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
                >
                  Contato
                </a>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-white hover:text-blue-200 focus:outline-none focus:text-blue-200"
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
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-blue-800 border-t border-blue-700`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#inicio" 
              onClick={(e) => handleLinkClick(e, '#inicio')}
              className="block px-3 py-2 text-white hover:text-blue-200 transition-colors duration-300"
            >
              Início
            </a>
            <a 
              href="#sobre" 
              onClick={(e) => handleLinkClick(e, '#sobre')}
              className="block px-3 py-2 text-white hover:text-blue-200 transition-colors duration-300"
            >
              Sobre
            </a>
            <a 
              href="#projetos" 
              onClick={(e) => handleLinkClick(e, '#projetos')}
              className="block px-3 py-2 text-white hover:text-blue-200 transition-colors duration-300"
            >
              Projetos
            </a>
            <a 
              href="#eventos" 
              onClick={(e) => handleLinkClick(e, '#eventos')}
              className="block px-3 py-2 text-white hover:text-blue-200 transition-colors duration-300"
            >
              Eventos
            </a>
            <a 
              href="#apoio" 
              onClick={(e) => handleLinkClick(e, '#apoio')}
              className="block px-3 py-2 text-white hover:text-blue-200 transition-colors duration-300"
            >
              Apoio
            </a>
            <a 
              href="#contato" 
              onClick={(e) => handleLinkClick(e, '#contato')}
              className="block px-3 py-2 text-white hover:text-blue-200 transition-colors duration-300"
            >
              Contato
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
