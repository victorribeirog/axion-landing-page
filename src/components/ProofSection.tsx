import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, DollarSign, Star, Quote } from "lucide-react";

const ProofSection = () => {
  const statistics = [
    {
      icon: Clock,
      value: "+85%",
      description: "de redução no tempo de resposta"
    },
    {
      icon: TrendingUp,
      value: "+60%",
      description: "de aumento na conversão de consultas"
    },
    {
      icon: DollarSign,
      value: "-45%",
      description: "de redução de custos operacionais"
    }
  ];

  const testimonials = [
    {
      text: "Antes, minha recepcionista não dava conta do WhatsApp. Agora, o agente IA responde tudo e agenda automaticamente!",
      author: "Dra. Ana Silva",
      clinic: "Clínica BellaSkin",
      rating: 5
    },
    {
      text: "Nossos pacientes adoram o atendimento 24h. Não perdemos mais nenhuma consulta por falta de resposta rápida.",
      author: "Dr. Carlos Mendes",
      clinic: "Centro Médico Vida",
      rating: 5
    },
    {
      text: "O agente IA fala exatamente como nossa equipe. Os pacientes nem percebem que é um robô!",
      author: "Dra. Marina Costa",
      clinic: "Clínica Renovar",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Estatísticas */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12">
            Resultados Comprovados
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-card border rounded-2xl p-8 text-center shadow-elegant hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-cobalt/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-cobalt" />
                </div>
                <div className="text-4xl font-bold text-cobalt mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground font-medium">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Depoimentos */}
        <div className="space-y-12">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            O que nossos clientes dizem
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border rounded-2xl p-6 shadow-elegant hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="w-8 h-8 text-cobalt/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground leading-relaxed mb-6 pl-6">
                    {testimonial.text}
                  </p>
                </div>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.clinic}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button variant="cobalt" size="lg" className="text-lg px-8 py-4">
            Quero ver o agente IA funcionando!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;