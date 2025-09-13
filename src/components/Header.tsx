import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              COPYA.cl
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              Características
            </a>
            <a href="#community" className="text-foreground/80 hover:text-foreground transition-colors">
              Comunidad
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">
              Precios
            </a>
          </nav>
          
          <Button 
            className="bg-gradient-hero hover:shadow-glow transition-all duration-300 rounded-full"
          >
            Unirse al Beta
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;