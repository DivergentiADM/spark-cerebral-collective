import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

interface BotonComenzarProps {
  variant?: "default" | "mobile";
  className?: string;
}

const BotonComenzar = ({ variant = "default", className = "" }: BotonComenzarProps) => {
  const baseClasses = "bg-gradient-hero hover:shadow-fuchsia transition-all duration-300 border-0 font-semibold";
  const variantClasses = {
    default: "rounded-full",
    mobile: "w-full"
  };

  return (
    <Button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      size="sm"
    >
      <Zap className="w-4 h-4 mr-2" />
      Comenzar
    </Button>
  );
};

export default BotonComenzar;