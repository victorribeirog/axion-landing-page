import { Button } from "@/components/ui/button";
import { Sparkles, Target, Settings2, MessageCircleHeart } from "lucide-react";

const CustomizationSection = () => {
  const features = [
    {
      icon: Target,
      title: "Treinamento Específico",
      description: "O agente IA aprende os procedimentos, horários e particularidades da sua clínica para dar informações exatas."
    },
    {
      icon: Settings2,
      title: "Fluxos de Conversa Sob Medida",
      description: "Desenhamos o fluxo de agendamento e qualificação de pacientes de acordo com as suas regras de negócio."
    },
    {
      icon: MessageCircleHeart,
      title: "Tom de Voz Único",
      description: "Configuramos o agente para comunicar com a personalidade da sua marca, seja ela formal ou descontraída."
    }
  ];

  return (
    <section className="py-20 bg-secondary border-t">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-semibold bg-cobalt/10 text-cobalt rounded-full mb-4">
            <Sparkles className="w-5 h-5" />
            <span>Solução Exclusiva</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Não é um Robô Genérico. É o Seu Agente.
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada clínica é única. Por isso, criamos uma solução de IA que funciona como uma extensão real da sua equipe, e não uma ferramenta padronizada.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card border rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomizationSection;