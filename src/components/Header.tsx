import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AtomIcon from "./AtomIcon";
import { 
  ChevronDown, 
  Brain, 
  Users, 
  TrendingUp, 
  Zap, 
  LogIn,
  Menu,
  X 
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCount, setActiveCount] = useState(2846);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center shadow-glow hover:shadow-intense transition-all duration-300">
                  <AtomIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <div className="relative group cursor-pointer">
                    <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                      COPYA.cl
                    </span>
                    <div className="absolute -bottom-8 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2 shadow-card">
                        <p className="text-sm text-muted-foreground whitespace-nowrap">
                          Tu cerebro creativo, amplificado por IA
                        </p>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-gradient-hero text-white border-0 font-semibold animate-energy-pulse">
                    APEX
                  </Badge>
                </div>
                <span className="text-xs text-muted-foreground">
                  by Poweredia • Creative Intelligence Lab
                </span>
              </div>
            </div>

            {/* Navigation Menu - Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#demo" className="text-foreground/80 hover:text-foreground transition-colors story-link">
                Demo
              </a>
              <a href="#journey" className="text-foreground/80 hover:text-foreground transition-colors story-link">
                Journey
              </a>
              <a href="#cerebros" className="text-foreground/80 hover:text-foreground transition-colors story-link">
                Cerebros
              </a>
              <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors story-link">
                Pricing
              </a>
              <a href="#casos" className="text-foreground/80 hover:text-foreground transition-colors story-link">
                Casos
              </a>
              <div className="relative group">
                <button className="flex items-center text-foreground/80 hover:text-foreground transition-colors">
                  Recursos
                  <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                </button>
              </div>
            </nav>

            {/* Actions Section */}
            <div className="flex items-center space-x-4">
              {/* Brain Counter */}
              <div className="hidden md:flex items-center space-x-2 bg-gradient-card border border-bright-fuchsia/20 rounded-full px-4 py-2 shadow-fuchsia hover:shadow-intense transition-all duration-300">
                <Brain className="w-4 h-4 text-bright-fuchsia animate-energy-pulse" />
                <span className="text-sm font-semibold animate-counter-update">
                  {activeCount.toLocaleString()} mentes colectivas activas
                </span>
              </div>

              {/* Auth Buttons */}
              <Button 
                variant="outline" 
                size="sm"
                className="hidden md:flex items-center border-mediterranean-blue/50 text-mediterranean-blue hover:bg-mediterranean-blue hover:text-white hover:shadow-blue transition-all duration-300"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Iniciar Sesión
              </Button>
              
              <Button 
                className="bg-gradient-hero hover:shadow-fuchsia transition-all duration-300 rounded-full font-semibold border-0"
                size="sm"
              >
                <Zap className="w-4 h-4 mr-2" />
                Comenzar
              </Button>

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
                <Zap className="w-4 h-4 text-electric-violet animate-energy-pulse" />
                <span className="text-muted-foreground">Motor CAG™ procesando ideas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-mediterranean-blue" />
                <span className="text-muted-foreground">
                  <span className="font-semibold text-foreground">347</span> visionarios ejecutando ahora
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
                Journey
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
                <Button 
                  className="w-full bg-gradient-hero hover:shadow-fuchsia transition-all duration-300 border-0"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Comenzar
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;