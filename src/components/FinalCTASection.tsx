import { Button } from "@/components/ui/button";
import { ShieldCheck, TrendingUp, Sparkles, PhoneCall } from "lucide-react";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";
import axonLogo from "@/assets/axon-logo.png";

const FinalCTASection = () => {
  const guarantees = [
    {
      icon: ShieldCheck,
      title: "Privacidade e Segurança",
      description: "Dados dos pacientes 100% seguros e em conformidade com as normas."
    },
    {
      icon: TrendingUp,
      title: "Melhoria Contínua",
      description: "O seu agente evolui constantemente para otimizar a performance."
    },
    {
      icon: Sparkles,
      title: "Suporte Dedicado",
      description: "A nossa equipa acompanha todo o processo de implementação e ajuste."
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        
        <div className="max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Está Pronto para Revolucionar o Atendimento da Sua Clínica?
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Não perca mais pacientes por falta de agilidade. Dê o próximo passo e veja na prática como a AXON pode impulsionar os seus resultados.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {guarantees.map((guarantee, index) => (
            <div 
              key={index} 
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-cobalt/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <guarantee.icon className="w-6 h-6 text-cobalt" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {guarantee.title}
              </h3>
              <p className="text-primary-foreground/70">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <Button 
            variant="cobalt-pulse" 
            size="lg" 
            className="text-xl px-12 py-6 bg-white text-primary hover:bg-white/90 transform hover:scale-110 shadow-2xl"
            onClick={() => openWhatsApp(whatsappMessages.finalCta)}
          >
            🚀 Comece Agora - Transforme Sua Clínica!
          </Button>
          
          <p className="text-primary-foreground/60 text-sm mt-4">
            Clique e descubra o potencial de automação da sua clínica.
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-6 opacity-70">
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTASection;