import { ChevronDown, Eye, Heart, GraduationCap, HelpCircle, Shield, MapPin } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DropdownRecursos = () => {
  const recursos = [
    {
      icon: Eye,
      title: "Building in Public",
      description: "Métricas reales y decisiones transparentes en tiempo real",
      color: "text-electric-violet"
    },
    {
      icon: Heart,
      title: "Alma del Equipo",
      description: "Conoce quiénes están detrás de COPYA y nuestra historia",
      color: "text-bright-fuchsia"
    },
    {
      icon: GraduationCap,
      title: "COPYA Academy",
      description: "Educación premium gratuita para dominar la IA creativa",
      color: "text-mediterranean-blue"
    },
    {
      icon: HelpCircle,
      title: "FAQ Completo",
      description: "Respuestas profundas sobre privacidad, uso y resultados",
      color: "text-financial-green"
    },
    {
      icon: Shield,
      title: "Por qué COPYA",
      description: "Comparativas reales vs ChatGPT, sin login ni trucos",
      color: "text-soft-yellow"
    },
    {
      icon: MapPin,
      title: "Roadmap Público",
      description: "Explora próximas funciones y vota por nuevas ideas",
      color: "text-electric-violet"
    }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center text-foreground/80 hover:text-foreground transition-colors group">
          Recursos
          <ChevronDown className="w-4 h-4 ml-1 group-data-[state=open]:rotate-180 transition-transform duration-200" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-80 p-2 bg-background/95 backdrop-blur-lg border border-border/50 shadow-card animate-fade-in"
        align="center"
        sideOffset={8}
      >
        {recursos.map((recurso, index) => {
          const IconComponent = recurso.icon;
          return (
            <DropdownMenuItem key={index} className="flex items-start p-4 rounded-lg hover:bg-gradient-subtle transition-all duration-300 cursor-pointer group">
              <IconComponent className={`w-5 h-5 ${recurso.color} mt-1 mr-3 group-hover:scale-110 transition-transform`} />
              <div className="flex-1">
                <div className="font-semibold text-foreground mb-1">{recurso.title}</div>
                <div className="text-sm text-muted-foreground">{recurso.description}</div>
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownRecursos;