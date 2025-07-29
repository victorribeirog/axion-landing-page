import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import axonLogo from "@/assets/axon-logo.png";

const NavigationMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Início", id: "hero" },
    { label: "Problemas", id: "problems" },
    { label: "Solução", id: "solution" },
    { label: "Como Funciona", id: "process" },
    { label: "Resultados", id: "proof" },
    { label: "Personalização", id: "customization" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={axonLogo} alt="AXON" className="h-8 w-auto" />
            <span className="text-lg font-semibold text-foreground">AXON</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-cobalt transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cobalt transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Button 
              variant="cobalt" 
              size="sm"
              onClick={() => scrollToSection('final-cta')}
            >
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-cobalt transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="cobalt" 
                size="sm" 
                className="w-full mt-4"
                onClick={() => scrollToSection('final-cta')}
              >
                Começar Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationMenu;