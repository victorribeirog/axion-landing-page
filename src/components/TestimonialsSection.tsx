import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, MessageCircle, TrendingUp, Clock } from "lucide-react";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";
import doctor from "@/assets/doctor.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Roberto Silva",
      role: "Médico",
      content: "Antes perdíamos 40% dos leads por demora no atendimento. Agora o agente responde na hora e nossa conversão subiu 65%. Incrível!",
      result: "65% + conversão",
      avatar: "🩺",
      rating: 5
    },
    {
      name: "Marina Costa",
      role: "Estética",
      content: "O agente entende perfeitamente nossas especialidades e já agenda consultas direto na agenda. Economizamos 20h/semana de atendimento.",
      result: "20h/semana economizadas",
      avatar: "💅",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      role: "Dentista",
      content: "Implementamos e já no primeiro mês recuperamos o investimento. O melhor: funciona 24h, nunca para de vender.",
      result: "ROI em 30 dias",
      avatar: "🦷",
      rating: 5
    }
  ];

  const metrics = [
    { icon: MessageCircle, value: "95%", label: "Taxa de Resposta" },
    { icon: TrendingUp, value: "+58%", label: "Aumento em Vendas" },
    { icon: Clock, value: "24/7", label: "Atendimento Contínuo" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Clínicas que já <span className="text-cobalt">Revolucionaram</span> suas Vendas
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Veja resultados reais de clínicas que implementaram nossa IA e transformaram atendimento em faturamento.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-secondary/50 border hover:border-cobalt/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <metric.icon className="w-8 h-8 text-cobalt mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cobalt/10 rounded-full flex items-center justify-center text-xl mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                "{testimonial.content}"
              </p>
              
              <div className="bg-cobalt/5 rounded-lg p-3 text-center">
                <span className="text-cobalt font-semibold text-sm">{testimonial.result}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in overflow-hidden" style={{ animationDelay: '0.9s' }}>
          <Button 
            variant="cobalt" 
            size="lg" 
            className="text-base glow-effect"
            onClick={() => openWhatsApp(whatsappMessages.testimonials)}
          >
            Quero Resultados Como Estes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;