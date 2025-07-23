import { Button } from "@/components/ui/button";
import { Bot, Clock, Calendar, MessageSquare, ArrowRight, CheckCircle } from "lucide-react";
import aiSolution from "@/assets/ai-solution.jpg";

const SolutionSection = () => {
  const benefits = [
    {
      icon: Clock,
      text: "Atende pacientes 24h por dia sem interrupções"
    },
    {
      icon: Calendar,
      text: "Agenda e confirma consultas automaticamente"
    },
    {
      icon: MessageSquare,
      text: "Responde dúvidas sobre procedimentos, horários e valores"
    },
    {
      icon: ArrowRight,
      text: "Encaminha mensagens específicas para o time humano, quando necessário"
    },
    {
      icon: Bot,
      text: "Fala com os pacientes no tom e estilo da sua clínica"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cobalt to-cobalt-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Seu Atendimento, Seu Estilo: 
            <span className="block mt-2">Criamos um Agente IA Treinado para a Sua Clínica!</span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            📌 Este não é um chatbot comum. Seu agente IA será treinado para falar como sua recepcionista, 
            entender as dúvidas dos pacientes e responder com precisão.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefícios */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8">Benefícios do Seu Agente IA:</h3>
            
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <p className="text-lg text-white font-medium">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
            
            <div className="pt-6">
              <Button variant="cobalt-pulse" size="lg" className="text-lg bg-white text-cobalt hover:bg-white/90">
                Quero meu agente IA personalizado!
              </Button>
            </div>
          </div>
          
          {/* Demonstração Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img 
                src={aiSolution} 
                alt="Agente IA personalizado para clínicas"
                className="w-full rounded-xl"
              />
              
              {/* Indicadores de funcionalidade */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-6 h-6 text-green-400" />
                  </div>
                  <p className="text-sm text-white/80">24/7 Ativo</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Bot className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-sm text-white/80">IA Treinada</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MessageSquare className="w-6 h-6 text-purple-400" />
                  </div>
                  <p className="text-sm text-white/80">Respostas Precisas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;