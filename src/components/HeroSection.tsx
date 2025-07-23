import { Button } from "@/components/ui/button";
import { Bot, Clock, Calendar, MessageSquare, Star } from "lucide-react";
import aiChatDemo from "@/assets/ai-chat-demo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-cobalt to-cobalt-dark text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto Principal */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-cobalt-foreground/80">
              <Bot className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wider">
                Tecnologia IA Avançada
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">🤖 Agente IA</span>
              <span className="block text-white/90">Personalizado</span>
              <span className="block">para Clínicas</span>
            </h1>
            
            <div className="flex flex-wrap gap-4 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Atendimento 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Agendamento Automático</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                <span>Respostas Inteligentes</span>
              </div>
            </div>
            
            <p className="text-xl text-white/90 leading-relaxed">
              📌 Criamos e treinamos um agente IA sob medida para sua clínica, 
              adaptado à sua realidade e ao seu fluxo de atendimento.
            </p>
            
            <div className="space-y-4">
              <Button size="lg" variant="cobalt-pulse" className="text-lg px-8 py-4">
                Quero um agente IA para minha clínica!
              </Button>
              
              <div className="flex items-center gap-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white/80">+150 Clínicas Atendidas</span>
              </div>
            </div>
          </div>
          
          {/* Demonstração Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img 
                src={aiChatDemo} 
                alt="Demonstração do Agente IA atendendo pacientes no WhatsApp"
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="mt-6 text-center">
                <p className="text-white/90 font-medium">
                  Demonstração do Agente IA em ação
                </p>
                <p className="text-white/70 text-sm mt-2">
                  Atendendo pacientes e agendando consultas automaticamente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;