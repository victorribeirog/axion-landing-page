import { Button } from "@/components/ui/button";
import { PhoneOff, UserX, Clock4 } from "lucide-react";
import clinicProblems from "@/assets/clinic-problems.jpg";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";

const ProblemsSection = () => {
  const problems = [
    {
      icon: PhoneOff,
      title: "Pacientes sem resposta",
      description: "Clientes em potencial desistem e procuram a concorrência por falta de atendimento rápido."
    },
    {
      icon: UserX,
      title: "Recepção sobrecarregada",
      description: "Sua equipe gasta horas no WhatsApp respondendo as mesmas perguntas repetidamente."
    },
    {
      icon: Clock4,
      title: "Consultas perdidas",
      description: "A demora no atendimento resulta em horários vagos e perda de receita para a clínica."
    }
  ];

  return (
    // Fundo cinza-claro para uma leitura confortável e para criar contraste com as seções escuras
    <section id="problems" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Coluna da Imagem (Esquerda) */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Efeito de brilho sutil para destacar a imagem */}
            <div className="absolute -inset-4 bg-destructive/10 rounded-full blur-3xl opacity-60" />
            
            <img 
              src={clinicProblems} 
              alt="Recepcionistas de clínica sobrecarregadas com o atendimento"
              className="relative w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          {/* Coluna de Texto (Direita) */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Sua clínica está perdendo pacientes por falhas no atendimento?
              </h2>
              <p className="text-lg text-muted-foreground">
                Identifique os problemas que estão a impedir o seu crescimento.
              </p>
            </div>
            
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div 
                  key={problem.title} 
                  className="group p-6 bg-card rounded-xl border border-border hover:border-destructive/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 group-hover:bg-destructive/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                      <problem.icon className="w-6 h-6 text-destructive group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-destructive transition-colors duration-300 mb-2">
                        {problem.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4 text-center lg:text-left">
              <Button 
                variant="cobalt-outline" 
                size="lg" 
                className="text-base"
                onClick={() => openWhatsApp(whatsappMessages.problems)}
              >
                Quero resolver estes problemas
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;