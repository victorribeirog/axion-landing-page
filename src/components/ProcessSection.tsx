import { Button } from "@/components/ui/button";
import { Search, BrainCircuit, Zap, ArrowUpCircle } from "lucide-react";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Lead Chega no WhatsApp",
      description: "Cliente envia mensagem para sua clínica interessado em algum procedimento ou consulta."
    },
    {
      number: "02", 
      icon: BrainCircuit,
      title: "IA Responde Instantaneamente",
      description: "Agente entende a necessidade, faz perguntas inteligentes e conduz a conversa como um vendedor experiente."
    },
    {
      number: "03",
      icon: Zap,
      title: "Venda ou Agendamento",
      description: "IA finaliza venda diretamente ou agenda consulta na sua agenda. Cliente sai satisfeito e você fatura mais."
    }
  ];

  return (
    <section id="process" className="py-20 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Como Funciona na <span className="text-cobalt">Prática</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Simples assim: Lead chega → IA vende → Você fatura. Veja como cada conversa se transforma em receita para sua clínica.
          </p>
        </div>
        
        {/* Grid com os Passos - Com Conectores Visuais */}
        <div className="relative">
          {/* Linha conectora para desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cobalt/30 to-transparent" />
          
          <div className="grid lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative bg-card border rounded-2xl p-6 text-left shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              > 
                {/* Conectores entre steps com seta */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-cobalt/30">
                    <div className="absolute -right-1 -top-1 w-2 h-2 bg-cobalt/50 rotate-45" />
                  </div>
                )}
                
                <div className="pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-cobalt/10 group-hover:bg-cobalt/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                      <step.icon className="w-6 h-6 text-cobalt group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-3xl font-bold text-foreground/10">{step.number}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-cobalt transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button 
            variant="cobalt" 
            size="lg" 
            className="text-base glow-effect"
            onClick={() => openWhatsApp(whatsappMessages.process)}
          >
            Implementar na Minha Clínica Agora →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;