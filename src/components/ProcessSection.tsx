import { Button } from "@/components/ui/button";
import { Search, BrainCircuit, Zap, ArrowUpCircle } from "lucide-react";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Análise e Diagnóstico",
      description: "Mapeamos detalhadamente as necessidades e o fluxo de atendimento da sua clínica para definir os objetivos do agente IA."
    },
    {
      number: "02",
      icon: BrainCircuit,
      title: "Treinamento Personalizado",
      description: "O agente é treinado com as informações específicas da sua clínica, aprendendo a responder como um membro da sua equipa faria."
    },
    {
      number: "03",
      icon: Zap,
      title: "Integração e Ativação",
      description: "Integramos o agente diretamente ao seu WhatsApp. Ele começa a atender pacientes de forma automática e instantânea."
    },
    {
      number: "04",
      icon: ArrowUpCircle,
      title: "Otimização Contínua",
      description: "Acompanhamos o desempenho e realizamos ajustes constantes para garantir que o agente evolua e melhore continuamente."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Um Processo Transparente, do Início ao Fim
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Criamos e treinamos o seu agente IA numa metodologia de 4 passos, garantindo uma solução perfeitamente adaptada à sua clínica.
          </p>
        </div>
        
        {/* Grid com os Passos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-card border rounded-2xl p-6 text-left shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-cobalt/10 rounded-lg flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-cobalt" />
                </div>
                <span className="text-4xl font-bold text-foreground/10">{step.number}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button 
            variant="cobalt" 
            size="lg" 
            className="text-base"
            onClick={() => openWhatsApp(whatsappMessages.process)}
          >
            Quero um agente IA do meu jeito!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;