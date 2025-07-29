import { Button } from "@/components/ui/button";
import { Bot, Clock, Calendar, MessageSquare, ArrowRightCircle } from "lucide-react";
import aiSolution from "@/assets/ai-solution.jpg"; // A imagem do cérebro IA
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";

const SolutionSection = () => {
  const benefits = [
    {
      icon: Clock,
      text: "Atendimento ininterrupto 24h por dia"
    },
    {
      icon: Calendar,
      text: "Agendamento e confirmação de consultas"
    },
    {
      icon: MessageSquare,
      text: "Respostas precisas sobre procedimentos e valores"
    },
    {
      icon: ArrowRightCircle,
      text: "Encaminhamento inteligente para a equipe humana"
    },
    {
      icon: Bot,
      text: "Comunicação no tom e estilo da sua clínica"
    }
  ];

  return (
    // Fundo primário escuro para criar um ambiente tecnológico e focado.
    <section className="py-20 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            A Solução Inteligente para um Atendimento de Excelência
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            Este não é um chatbot comum. O seu agente IA será treinado para falar como a sua recepcionista, entender as dúvidas dos pacientes e responder com a máxima precisão.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Coluna dos Benefícios (Esquerda) */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 p-4 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-cobalt/20 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 text-cobalt" />
                </div>
                <p className="text-base font-medium text-primary-foreground/90">
                  {benefit.text}
                </p>
              </div>
            ))}
            <div className="pt-6">
              <Button 
                variant="cobalt" 
                size="lg" 
                className="text-base w-full sm:w-auto"
                onClick={() => openWhatsApp(whatsappMessages.solution)}
              >
                Quero o meu agente personalizado!
              </Button>
            </div>
          </div>
          
          {/* Coluna da Imagem (Direita) */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
             {/* Efeito de brilho atrás da imagem */}
             <div className="absolute -inset-8 bg-cobalt/20 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDuration: '5s' }} />
            
            <img 
              src={aiSolution} 
              alt="Ilustração de um cérebro digital representando a Inteligência Artificial"
              className="relative w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;