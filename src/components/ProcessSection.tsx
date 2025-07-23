import { Button } from "@/components/ui/button";
import { Settings, Brain, Zap, RefreshCw } from "lucide-react";
import processSteps from "@/assets/process-steps.jpg";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      icon: Settings,
      title: "Análise da Sua Clínica",
      description: "Entendemos como sua clínica funciona e quais são suas principais necessidades."
    },
    {
      number: "2",
      icon: Brain,
      title: "Treinamento Personalizado",
      description: "Treinamos seu agente IA para responder exatamente como sua equipe faria."
    },
    {
      number: "3",
      icon: Zap,
      title: "Integração ao WhatsApp",
      description: "O agente IA é integrado ao seu WhatsApp e começa a atender automaticamente."
    },
    {
      number: "4",
      icon: RefreshCw,
      title: "Otimização Contínua",
      description: "Você pode ajustar e aprimorar o agente IA conforme necessário."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Criamos e Treinamos Seu Agente IA do Zero,
            <span className="block mt-2 text-cobalt">Exclusivamente Para Sua Clínica</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Processo Visual */}
          <div className="relative">
            <img 
              src={processSteps} 
              alt="Processo de criação e treinamento do agente IA"
              className="w-full rounded-2xl shadow-elegant"
            />
          </div>
          
          {/* Passos */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-cobalt rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="w-6 h-6 text-cobalt" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="cobalt" size="lg" className="text-lg px-8 py-4">
            Quero um agente IA do meu jeito!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;