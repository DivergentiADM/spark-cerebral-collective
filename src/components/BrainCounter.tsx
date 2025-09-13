import { useState, useEffect } from "react";
import { Brain } from "lucide-react";

const BrainCounter = () => {
  const [activeCount, setActiveCount] = useState(2846);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setActiveCount(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden md:flex items-center space-x-2 bg-gradient-card border border-orange-primary/20 rounded-full px-4 py-2 shadow-orange hover:shadow-orange-vibrant transition-all duration-300">
      <Brain className="w-4 h-4 text-orange-primary animate-energy-pulse" />
      <span className="text-sm font-semibold animate-counter-update">
        <span className="text-orange-primary">{activeCount.toLocaleString()}</span> mentes colectivas activas
      </span>
    </div>
  );
};

export default BrainCounter;