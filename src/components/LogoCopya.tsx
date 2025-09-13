import { Badge } from "@/components/ui/badge";
import AtomIcon from "./AtomIcon";

const LogoCopya = () => {
  return (
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
          <Badge variant="secondary" className="bg-gradient-hero text-white border-0 text-xs px-2 py-1 font-medium animate-energy-pulse">
            APEX
          </Badge>
        </div>
        <span className="text-xs text-muted-foreground">
          by Poweredia
        </span>
      </div>
    </div>
  );
};

export default LogoCopya;