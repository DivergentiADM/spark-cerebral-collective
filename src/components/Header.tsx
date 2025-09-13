import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Zap, LogIn, Menu, X } from "lucide-react";
import LogoCopya from "./LogoCopya";
import BrainCounter from "./BrainCounter";
import NavButton from "./NavButton";
import DropdownRecursos from "./DropdownRecursos";
import BotonComenzar from "./BotonComenzar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <LogoCopya />

            {/* Navigation Menu - Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <NavButton href="#demo">Demo</NavButton>
              <NavButton href="#journey">Paso a Paso</NavButton>
              <NavButton href="#cerebros">Cerebros</NavButton>
              <NavButton href="#pricing">Pricing</NavButton>
              <NavButton href="#casos">Casos</NavButton>
              <DropdownRecursos />
            </nav>

            {/* Actions Section */}
            <div className="flex items-center space-x-4">
              {/* Brain Counter */}
              <BrainCounter />

              {/* Auth Buttons */}
              <Button 
                variant="outline" 
                size="sm"
                className="hidden md:flex items-center border-mediterranean-blue/50 text-mediterranean-blue hover:bg-mediterranean-blue hover:text-white hover:shadow-blue transition-all duration-300"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Iniciar Sesión
              </Button>
              
              <BotonComenzar />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Info Bar */}
        <div className="bg-gradient-subtle border-t border-border/30">
          <div className="container mx-auto px-6 py-2">
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-orange-primary animate-energy-pulse" />
                <span className="text-muted-foreground">Motor CAG™ procesando ideas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-orange-primary" />
                <span className="text-muted-foreground">
                  <span className="font-semibold text-orange-primary">347</span> visionarios ejecutando ahora
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-financial-green" />
                <span className="text-muted-foreground">
                  Impacto colectivo: <span className="font-semibold text-financial-green">$2,847 USD</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border/50 animate-fade-in">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <a href="#demo" className="block text-foreground/80 hover:text-foreground transition-colors py-2">
                Demo
              </a>
              <a href="#journey" className="block text-foreground/80 hover:text-foreground transition-colors py-2">
                Paso a Paso
              </a>
              <a href="#cerebros" className="block text-foreground/80 hover:text-foreground transition-colors py-2">
                Cerebros
              </a>
              <a href="#pricing" className="block text-foreground/80 hover:text-foreground transition-colors py-2">
                Pricing
              </a>
              <a href="#casos" className="block text-foreground/80 hover:text-foreground transition-colors py-2">
                Casos
              </a>
              <a href="#recursos" className="block text-foreground/80 hover:text-foreground transition-colors py-2">
                Recursos
              </a>
              
              <div className="pt-4 border-t border-border/50 space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-mediterranean-blue/50 text-mediterranean-blue hover:bg-mediterranean-blue hover:text-white"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Iniciar Sesión
                </Button>
                <BotonComenzar variant="mobile" />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;