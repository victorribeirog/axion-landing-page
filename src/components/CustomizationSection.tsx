import { Button } from "@/components/ui/button";
import { Sparkles, Target, Settings, Users } from "lucide-react";

const CustomizationSection = () => {
  const features = [
    {
      icon: Target,
      title: "Treinamento Específico",
      description: "Cada clínica tem suas particularidades, e seu agente IA será configurado e treinado para lidar com a sua realidade."
    },
    {
      icon: Settings,
      title: "Configuração Personalizada",
      description: "Definimos respostas, fluxos e procedimentos específicos da sua clínica para garantir consistência."
    },
    {
      icon: Users,
      title: "Tom de Voz Único",
      description: "O agente aprende o jeito de falar da sua equipe, mantendo a personalidade da sua marca."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-background border-t border-b">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 text-cobalt" />
            <span className="text-cobalt font-semibold uppercase tracking-wider">
              Solução Exclusiva
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Este Não É Um Robô Genérico.
            <span className="block mt-2 text-cobalt">
              Seu Agente IA Será Criado Sob Medida Para Sua Clínica!
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            📌 Cada clínica tem suas particularidades, e seu agente IA será configurado e treinado 
            para lidar com a sua realidade. Isso significa que ele não só responde, 
            mas entende a lógica do seu atendimento.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-card border rounded-2xl p-8 text-center shadow-elegant hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-cobalt/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-cobalt" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-cobalt/5 border border-cobalt/20 rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Diferencial Exclusivo
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Enquanto outros oferecem soluções padronizadas, nós criamos um agente IA 
              que realmente conhece e representa sua clínica de forma autêntica e eficiente.
            </p>
          </div>
          
          <Button variant="cobalt-pulse" size="lg" className="text-lg px-8 py-4">
            Quero um agente IA treinado para minha clínica!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomizationSection;