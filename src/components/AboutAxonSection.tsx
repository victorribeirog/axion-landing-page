import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Users, Award, TrendingUp, Shield, Zap } from "lucide-react";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";

const AboutAxonSection = () => {
  const credentials = [
    {
      icon: Brain,
      title: "Especialistas em IA",
      description: "3+ anos desenvolvendo IA especificamente para PMEs brasileiras"
    },
    {
      icon: Users,
      title: "200+ Clínicas Atendidas",
      description: "Desde odontologia até estética, dominamos o setor de saúde"
    },
    {
      icon: Award,
      title: "Certificação Google",
      description: "Parceiros oficiais em tecnologias de IA e automação"
    },
    {
      icon: TrendingUp,
      title: "R$ 2M+ Gerados",
      description: "Faturamento adicional criado para nossos clientes"
    }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: "Garantia 30 Dias",
      description: "Se não aumentar suas vendas, devolvemos 100% do investimento"
    },
    {
      icon: Zap,
      title: "Implementação 48h",
      description: "Seu agente funcionando e vendendo em menos de 2 dias"
    }
  ];

  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Por que a <span className="text-cobalt">AXON</span> é Diferente?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Não somos mais uma empresa de tecnologia. Somos especialistas em converter atendimento em faturamento para clínicas brasileiras.
          </p>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="bg-card rounded-2xl p-8 border shadow-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              A História que Nos Motivou
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Tudo começou quando nosso sócio, dono de uma clínica odontológica, estava perdendo <strong className="text-cobalt">40% dos leads</strong> 
              por não conseguir responder WhatsApp rapidamente. Criamos nossa primeira IA para resolver esse problema específico. 
              <br /><br />
              Resultado: <strong className="text-cobalt">+85% de conversão em 30 dias</strong>. Percebemos que milhares de clínicas 
              enfrentavam o mesmo problema. Nasceu a AXON.
            </p>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credentials.map((credential, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-cobalt/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <credential.icon className="w-6 h-6 text-cobalt" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{credential.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {credential.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Mission */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Nossa Missão
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-cobalt">Democratizar o poder da IA</strong> para que qualquer clínica, 
            independente do tamanho, possa ter um atendimento de excelência 24h por dia e 
            <strong className="text-cobalt"> nunca mais perder uma venda por demora na resposta</strong>.
          </p>
        </div>

        {/* Guarantees */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {guarantees.map((guarantee, index) => (
            <Card 
              key={index}
              className="p-6 border-cobalt/20 bg-cobalt/5 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cobalt/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <guarantee.icon className="w-6 h-6 text-cobalt" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{guarantee.title}</h4>
                  <p className="text-muted-foreground">{guarantee.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <Button 
            variant="cobalt" 
            size="lg" 
            className="text-base glow-effect"
            onClick={() => openWhatsApp(whatsappMessages.about)}
          >
            Conheça Nossa Metodologia →
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Bate-papo de 15 min para entender seu cenário
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutAxonSection;