import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, Zap, Users, X } from 'lucide-react';

const BetaWidget = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-in-right">
      <Card className="bg-gradient-card border border-primary/20 shadow-intense p-6 max-w-sm animate-float">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="space-y-4">
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-warning-glow animate-energy-pulse" />
              <span className="font-bold text-lg bg-gradient-hero bg-clip-text text-transparent">
                Inner Circle
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Solo <span className="font-bold text-warning-glow">73 visionarios</span> restantes
            </p>
          </div>

          {/* Countdown */}
          <div className="bg-background/50 rounded-lg p-3 border border-border/50">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Timer className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-muted-foreground">Tiempo restante</span>
            </div>
            <div className="flex justify-center gap-2">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded px-2 py-1 font-mono text-sm">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-muted-foreground mt-1">hrs</div>
              </div>
              <div className="self-center text-primary font-bold">:</div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded px-2 py-1 font-mono text-sm">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-muted-foreground mt-1">min</div>
              </div>
              <div className="self-center text-primary font-bold">:</div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded px-2 py-1 font-mono text-sm animate-counter-update">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-muted-foreground mt-1">seg</div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-success-glow rounded-full animate-energy-pulse"></div>
              <span className="text-muted-foreground">Acceso founder de por vida</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-success-glow rounded-full animate-energy-pulse"></div>
              <span className="text-muted-foreground">Mentoría privada incluida</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-success-glow rounded-full animate-energy-pulse"></div>
              <span className="text-muted-foreground">Cerebro personalizado gratis</span>
            </div>
          </div>

          {/* CTA */}
          <Button 
            className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300 font-semibold"
            size="sm"
          >
            <Users className="w-4 h-4 mr-2" />
            Reservar mi lugar
          </Button>
          
          <p className="text-xs text-center text-muted-foreground">
            Únete a la élite creativa antes del lanzamiento público
          </p>
        </div>
      </Card>
    </div>
  );
};

export default BetaWidget;