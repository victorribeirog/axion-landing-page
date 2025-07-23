import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, RefreshCw, Phone } from "lucide-react";

const FinalCTASection = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "Privacidade dos Dados",
      description: "Seus dados e dos pacientes ficam 100% seguros e protegidos"
    },
    {
      icon: TrendingUp,
      title: "Melhoria Contínua",
      description: "O agente IA evolui constantemente para atender melhor sua clínica"
    },
    {
      icon: RefreshCw,
      title: "Cancelamento Sem Burocracia",
      description: "Se não ficar satisfeito, pode cancelar quando quiser, sem complicações"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Garantia Total: Seu Agente IA Vai 
            <span className="block mt-2 text-cobalt-foreground">
              Revolucionar Seu Atendimento!
            </span>
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed mb-12">
            Não deixe sua clínica ficar para trás. Seus concorrentes já estão usando tecnologia IA 
            para conquistar mais pacientes. É hora de você também ter essa vantagem!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-cobalt/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <guarantee.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                🔒 {guarantee.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-8">
          <div className="bg-white/5 border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ⚡ Oferta Por Tempo Limitado
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Seja uma das primeiras 50 clínicas a implementar nosso agente IA e garanta condições especiais.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-white/70">
              <Phone className="w-4 h-4" />
              <span>Suporte dedicado durante toda implementação</span>
            </div>
          </div>
          
          <Button 
            variant="cobalt-pulse" 
            size="lg" 
            className="text-xl px-12 py-6 bg-white text-primary hover:bg-white/90 transform hover:scale-110 shadow-2xl"
          >
            🚀 Comece Agora - Transforme Sua Clínica!
          </Button>
          
          <p className="text-white/70 text-sm">
            Clique no botão acima e receba uma análise gratuita do potencial de automação da sua clínica
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;