import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Brain, Users, TrendingUp, Clock, Zap, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-accent opacity-5"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-electric-violet/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-bright-fuchsia/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mediterranean-blue/10 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-6 py-20">
        {/* Beta Badge */}
        <div className="flex justify-center mb-8">
          <Badge variant="secondary" className="px-6 py-2 text-sm font-medium shadow-fuchsia animate-pulse bg-gradient-hero text-white border-0">
            <Clock className="w-4 h-4 mr-2" />
            Solo 500 spots restantes en Beta • 72hrs para registrarte
          </Badge>
        </div>

        {/* Main Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-16 mt-32">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            Deja de usar IA genérica
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90 mb-8">
            Crea contenido que convierte con cerebros especializados
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            La única plataforma de IA que entrena modelos específicos para tu nicho. 
            Únete a creadores que generan resultados reales, no solo texto.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:shadow-fuchsia transition-all duration-500 text-lg px-8 py-4 rounded-full font-semibold border-0"
            >
              <Zap className="w-5 h-5 mr-2" />
              Acceder al Beta Exclusivo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 rounded-full border-2 border-mediterranean-blue text-mediterranean-blue hover:bg-mediterranean-blue hover:text-white hover:shadow-blue transition-all duration-300"
            >
              Ver Demo en Vivo
            </Button>
          </div>
        </div>

        {/* Stats Card */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="p-8 bg-gradient-card shadow-fuchsia border-0 hover:shadow-intense transition-all duration-500">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-bright-fuchsia mr-3 animate-pulse" />
                <span className="text-3xl font-bold text-bright-fuchsia mr-2">2,847</span>
                <span className="text-xl text-foreground/80">cerebros activos</span>
              </div>
              <div className="flex items-center justify-center text-lg text-muted-foreground">
                <TrendingUp className="w-5 h-5 text-financial-green mr-2" />
                <span>generando </span>
                <span className="font-bold text-financial-green mx-1">$127K MRR</span>
                <span> colectivo</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Exclusive Benefits */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 bg-gradient-card shadow-card border-0 hover:shadow-glow transition-all duration-300 text-center group">
            <Brain className="w-12 h-12 text-electric-violet mx-auto mb-4 group-hover:animate-energy-pulse" />
            <h3 className="font-semibold text-lg mb-2">Cerebro Personalizado</h3>
            <p className="text-muted-foreground">Entrenado específicamente para tu industria y estilo</p>
          </Card>
          
          <Card className="p-6 bg-gradient-card shadow-card border-0 hover:shadow-blue transition-all duration-300 text-center group">
            <Users className="w-12 h-12 text-mediterranean-blue mx-auto mb-4 group-hover:animate-energy-pulse" />
            <h3 className="font-semibold text-lg mb-2">Comunidad Exclusiva</h3>
            <p className="text-muted-foreground">Conecta con creadores de élite y comparte estrategias</p>
          </Card>
          
          <Card className="p-6 bg-gradient-card shadow-card border-0 hover:shadow-fuchsia transition-all duration-300 text-center group">
            <Star className="w-12 h-12 text-bright-fuchsia mx-auto mb-4 group-hover:animate-energy-pulse" />
            <h3 className="font-semibold text-lg mb-2">Acceso Anticipado</h3>
            <p className="text-muted-foreground">Nuevas funciones antes que nadie + soporte VIP</p>
          </Card>
        </div>

        {/* Urgency Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-soft-yellow/20 border border-soft-yellow/30 rounded-full px-6 py-3 shadow-card">
            <Clock className="w-5 h-5 text-soft-yellow mr-2 animate-pulse" />
            <span className="text-soft-yellow font-medium">
              Acceso anticipado + Cerebro personalizado gratis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;