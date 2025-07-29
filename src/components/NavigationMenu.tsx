import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import axonpreto from "@/assets/axon-preto.png";

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-secondary/95 backdrop-blur-sm border-b border-border shadow-lg'
      : 'bg-transparent'
      }`}>
      <div className="container mx-auto justify-between h-20 px-4 relative">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className={cn(
              "transition-all duration-300 ease-in-out",
              isScrolled
                ? "relative"
                : "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:relative md:left-0 md:top-0 md:transform-none"
            )}
          >
            <img src={axonpreto} alt="AXON AI" className="h-28 w-auto" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-black hover:text-cobalt transition-colors relative group"
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
          <div className="md:hidden ml-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn("transition-colors duration-300", !isScrolled && 'bg-secondary/100')}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
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