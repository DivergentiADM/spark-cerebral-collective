import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Brain, HelpCircle, ArrowRight, X } from 'lucide-react';

const IAHelperWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Array<{role: 'bot' | 'user', content: string}>>([
    {
      role: 'bot',
      content: '¡Hola! Soy tu Cerebro COPYA asistente 🧠 ¿En qué puedo ayudarte hoy?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const predefinedQuestions = [
    "¿Cómo activo mi cerebro COPYA?",
    "¿Cuál es el precio del plan Inner Circle?",
    "¿Puedo crear contenido viral con solo un clic?",
    "Ver paso a paso"
  ];

  const handleQuestionClick = (question: string) => {
    setMessages(prev => [...prev, { role: 'user', content: question }]);
    
    // Simulate AI response based on question
    setTimeout(() => {
      let response = '';
      if (question.includes('activo mi cerebro')) {
        response = 'Para activar tu cerebro COPYA, primero únete al Inner Circle. Luego accedes al dashboard donde puedes configurar tu cerebro personalizado con tus preferencias creativas. ¡Es súper intuitivo! 🚀';
      } else if (question.includes('precio')) {
        response = 'El Inner Circle tiene un precio especial de lanzamiento. Solo quedan 73 lugares disponibles con acceso founder de por vida. ¡Reserva tu lugar ahora antes de que se agoten! 💎';
      } else if (question.includes('contenido viral')) {
        response = 'Sí! COPYA analiza tendencias en tiempo real y genera contenido optimizado para cada plataforma. Tu cerebro aprende de tus éxitos y mejora continuamente. Es como tener un equipo creativo 24/7. ✨';
      } else if (question.includes('paso a paso')) {
        response = '1️⃣ Únete al Inner Circle\n2️⃣ Configura tu cerebro creativo\n3️⃣ Conecta tus plataformas\n4️⃣ ¡Empieza a generar contenido viral!\n\n¿Quieres que te explique algún paso en detalle?';
      }
      setMessages(prev => [...prev, { role: 'bot', content: response }]);
    }, 800);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', content: inputValue }]);
    setInputValue('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        content: 'Gracias por tu pregunta. Un miembro del equipo COPYA te contactará pronto para darte una respuesta personalizada. 🎯' 
      }]);
    }, 1000);
  };

  if (!isExpanded) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div 
          onClick={() => setIsExpanded(true)}
          className="relative cursor-pointer group"
        >
          {/* Animated energy rings */}
          <div className="absolute inset-0 animate-pulse">
            <div className="w-16 h-16 rounded-full border-2 border-electric-violet/30 animate-ping"></div>
          </div>
          <div className="absolute inset-0 animate-energy-pulse delay-300">
            <div className="w-16 h-16 rounded-full border border-orange-primary/40 animate-spin-slow"></div>
          </div>
          
          {/* Main energy core */}
          <div className="relative w-16 h-16 bg-gradient-radial from-electric-violet/20 via-primary/40 to-transparent rounded-full shadow-glow flex items-center justify-center backdrop-blur-sm border border-primary/30 group-hover:shadow-orange group-hover:border-orange-primary/50 transition-all duration-300">
            <Brain className="w-8 h-8 text-primary group-hover:text-orange-primary animate-float transition-colors duration-300" />
          </div>
          
          {/* Status indicator */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-financial-green rounded-full border-2 border-background animate-pulse shadow-success-glow"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2 text-sm whitespace-nowrap shadow-card">
              <span className="text-foreground">Cerebro COPYA disponible</span>
              <div className="text-xs text-muted-foreground mt-1">¿Tienes dudas? Pregunta libremente</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
      <Card className="w-80 h-96 bg-gradient-card border border-primary/20 shadow-intense overflow-hidden">
        {/* Header */}
        <div className="relative p-4 border-b border-border/50 bg-gradient-subtle">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-radial from-electric-violet/30 via-primary/50 to-transparent rounded-full flex items-center justify-center border border-primary/30 animate-energy-pulse">
                  <Brain className="w-5 h-5 text-primary animate-float" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-financial-green rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-semibold text-sm bg-gradient-hero bg-clip-text text-transparent">
                  Cerebro COPYA
                </h3>
                <p className="text-xs text-muted-foreground">Asistente creativo activo</p>
              </div>
            </div>
            <Button
              onClick={() => setIsExpanded(false)}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-background/50"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-48">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
            >
              <div 
                className={`max-w-[70%] p-3 rounded-lg text-sm ${
                  message.role === 'user' 
                    ? 'bg-primary text-primary-foreground ml-2' 
                    : 'bg-background border border-border/50 mr-2'
                }`}
              >
                <p className="whitespace-pre-line">{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick questions */}
        <div className="p-4 border-t border-border/50 space-y-2">
          <p className="text-xs text-muted-foreground mb-2">Preguntas rápidas:</p>
          <div className="grid grid-cols-1 gap-2">
            {predefinedQuestions.slice(0, 2).map((question, index) => (
              <Button
                key={index}
                onClick={() => handleQuestionClick(question)}
                variant="outline"
                size="sm"
                className="justify-start text-xs h-8 border-border/50 hover:border-orange-primary/50 hover:bg-orange-soft/20 transition-all duration-200"
              >
                <HelpCircle className="w-3 h-3 mr-2 text-orange-primary" />
                {question}
              </Button>
            ))}
          </div>
          
          {/* Input */}
          <div className="flex gap-2 mt-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Escribe tu pregunta..."
              className="flex-1 px-3 py-2 text-xs rounded-md border border-border/50 bg-background/50 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50"
            />
            <Button
              onClick={handleSendMessage}
              size="sm"
              className="h-8 w-8 p-0 bg-gradient-hero hover:shadow-orange transition-all duration-200"
            >
              <Send className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default IAHelperWidget;