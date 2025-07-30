import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, TrendingUp, Clock } from "lucide-react";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";

const TargetAudienceSection = () => {
  const idealClinics = [
    {
      icon: "🦷",
      title: "Clínicas Odontológicas",
      description: "Implantes, ortodontia, procedimentos estéticos",
      results: "Média +70% conversão"
    },
    {
      icon: "💅",
      title: "Estética e Beleza",
      description: "Harmonização facial, tratamentos estéticos",
      results: "Média +65% conversão"
    },
    {
      icon: "🩺",
      title: "Clínicas Médicas",
      description: "Especialidades, check-ups, consultas",
      results: "Média +60% conversão"
    },
    {
      icon: "👁️",
      title: "Oftalmologia",
      description: "Cirurgias, lentes de contato, consultas",
      results: "Média +55% conversão"
    },
    {
      icon: "🏥",
      title: "Fisioterapia",
      description: "Reabilitação, RPG, pilates clínico",
      results: "Média +50% conversão"
    },
    {
      icon: "🧠",
      title: "Psicologia",
      description: "Terapia individual, casal, grupos",
      results: "Média +45% conversão"
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: "Clínicas com Alto Volume",
      description: "Recebem 20+ contatos/dia e não conseguem responder todos rapidamente",
      benefit: "Nunca mais perder leads por demora"
    },
    {
      icon: TrendingUp,
      title: "Foco em Crescimento",
      description: "Querem escalar vendas sem aumentar equipe administrativa",
      benefit: "Vendas 24h automatizadas"
    },
    {
      icon: Clock,
      title: "Equipe Sobrecarregada",
      description: "Time gasta muito tempo com atendimento básico e agendamentos",
      benefit: "Libera equipe para foco clínico"
    }
  ];

  const requirements = [
    "✅ Já recebe leads por WhatsApp",
    "✅ Tem procedimentos com valores definidos",
    "✅ Quer automatizar agendamentos",
    "✅ Busca aumentar faturamento",
    "✅ Não tem tempo para atender 24h"
  ];

  const notIdeal = [
    "❌ Clínica com menos de 10 contatos/mês",
    "❌ Não usa WhatsApp para vendas",
    "❌ Procedimentos muito complexos/únicos",
    "❌ Resistência a tecnologia"
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            É o <span className="text-cobalt">Perfil Ideal</span> para sua Clínica?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nossa IA funciona melhor em clínicas específicas. Veja se a sua tem o perfil para resultados extraordinários.
          </p>
        </div>

        {/* Ideal Clinics */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Especialidades que Mais <span className="text-cobalt">Convertem</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {idealClinics.map((clinic, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in border-l-4 border-l-cobalt/30"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{clinic.icon}</div>
                <h4 className="font-semibold text-foreground mb-2">{clinic.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{clinic.description}</p>
                <div className="bg-cobalt/10 rounded-lg p-2">
                  <span className="text-cobalt font-medium text-sm">{clinic.results}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Cenários <span className="text-cobalt">Perfeitos</span> para IA
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-cobalt/10 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-cobalt" />
                </div>
                <h4 className="font-semibold text-foreground mb-3">{useCase.title}</h4>
                <p className="text-muted-foreground mb-4">{useCase.description}</p>
                <div className="bg-secondary rounded-lg p-3">
                  <CheckCircle className="w-5 h-5 text-green-500 inline-block mr-2" />
                  <span className="text-sm font-medium">{useCase.benefit}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements vs Not Ideal */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Requirements */}
          <Card className="p-6 border-green-200 bg-green-50/50 animate-fade-in" style={{ animationDelay: '1s' }}>
            <h4 className="font-semibold text-foreground mb-4 text-lg">
              ✅ Perfil Ideal (Resultados Garantidos)
            </h4>
            <ul className="space-y-3">
              {requirements.map((req, index) => (
                <li key={index} className="text-muted-foreground flex items-center">
                  <span className="mr-2">✅</span>
                  {req.slice(2)}
                </li>
              ))}
            </ul>
          </Card>

          {/* Not Ideal */}
          <Card className="p-6 border-red-200 bg-red-50/50 animate-fade-in" style={{ animationDelay: '1.1s' }}>
            <h4 className="font-semibold text-foreground mb-4 text-lg">
              ❌ Não Recomendamos Para
            </h4>
            <ul className="space-y-3">
              {notIdeal.map((item, index) => (
                <li key={index} className="text-muted-foreground flex items-center">
                  <span className="mr-2">❌</span>
                  {item.slice(2)}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="bg-cobalt/5 rounded-2xl p-8 border border-cobalt/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Sua Clínica Tem o Perfil Ideal?
            </h3>
            <p className="text-muted-foreground mb-6">
              Fale conosco para uma análise gratuita e descubra o potencial de crescimento da sua clínica
            </p>
            
            <Button 
              variant="cobalt" 
              size="lg" 
              className="text-base glow-effect overflow-hidden"
              onClick={() => openWhatsApp(whatsappMessages.targetAudience)}
            >
              Verificar Meu Perfil Gratuitamente →
            </Button>
            
            <p className="text-sm text-muted-foreground mt-3">
              <span className="text-cobalt font-medium">Análise em 10 minutos</span> • Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;