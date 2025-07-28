import { Button } from "@/components/ui/button";
import { Bot, Clock, Calendar, MessageSquare, Star } from "lucide-react";
import WhatsAppInterface from "./WhatsAppInterface";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";
const HeroSection = () => {
  return (
    // Fundo escuro (usando a cor primária) com um gradiente radial sutil para dar profundidade
    <section className="relative w-full min-h-screen bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,55,72,0.5)_0%,_rgba(26,32,44,0)_60%)]" aria-hidden="true" />
      
      <div className="container relative z-10 mx-auto px-4 py-20 flex items-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
            
            {/* Coluna de Texto (Esquerda) */}
            <div className="text-center lg:text-left space-y-6 animate-fade-in order-2 lg:order-1" style={{
              animationDelay: '0.2s'
            }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium bg-primary-foreground/10 border border-primary-foreground/20 rounded-full">
              <Bot className="w-4 h-4 text-cobalt" />
              <span>Tecnologia de IA para Clínicas</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              O Agente IA <span className="text-cobalt">Personalizado</span> que sua Clínica Precisa
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0">
              Transforme seu atendimento com um assistente virtual treinado exclusivamente para suas necessidades. Respostas instantâneas, agendamentos automáticos e pacientes mais satisfeitos.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button 
                size="lg" 
                variant="cobalt" 
                className="text-sm sm:text-base w-full sm:w-auto px-4 sm:px-8"
                onClick={() => openWhatsApp(whatsappMessages.hero)}
              >
                Quero um agente para minha clínica!
              </Button>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="text-sm text-primary-foreground/70">+15 Clínicas Atendidas</span>
              </div>
            </div>
          </div>
          
          {/* Coluna Visual (Direita) */}
          <div className="relative animate-fade-in order-1 lg:order-2 w-full max-w-sm mx-auto lg:max-w-none" style={{
            animationDelay: '0.4s'
          }}>
            {/* Efeito de brilho atrás da imagem */}
            <div className="absolute -inset-4 bg-cobalt/20 rounded-full blur-3xl opacity-50" />
            
            <div className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 shadow-2xl shadow-black/20">
              <WhatsAppInterface />
              <div className="mt-4 text-center">
                <p className="font-medium text-primary-foreground/90">
                  Agente em Ação no WhatsApp
                </p>
                <p className="text-sm text-primary-foreground/70">
                  Agendando e respondendo 24h por dia.
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