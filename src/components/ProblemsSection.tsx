import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone, Users, Clock } from "lucide-react";
import clinicProblems from "@/assets/clinic-problems.jpg";

const ProblemsSection = () => {
  const problems = [
    {
      icon: Phone,
      text: "Pacientes desistem porque não são respondidos a tempo?"
    },
    {
      icon: Users,
      text: "Sua recepcionista está sobrecarregada e não consegue dar conta do WhatsApp?"
    },
    {
      icon: Clock,
      text: "Você está perdendo consultas porque seu atendimento não é ágil o suficiente?"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problemas */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                ❌ Sua Clínica Está Perdendo Pacientes Por Falta de 
                <span className="text-destructive"> Atendimento Rápido?</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                  <div className="flex-shrink-0 w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                    <problem.icon className="w-4 h-4 text-destructive" />
                  </div>
                  <p className="text-lg text-foreground font-medium">
                    🔴 {problem.text}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <Button variant="cobalt-outline" size="lg" className="text-lg">
                Descubra como resolver isso!
              </Button>
            </div>
          </div>
          
          {/* Imagem */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={clinicProblems} 
                alt="Problemas de atendimento em clínicas"
                className="w-full h-auto"
              />
            </div>
            
            {/* Overlay com estatística */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 border">
              <div className="flex items-center gap-2 text-destructive">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-semibold">Problema Crítico:</span>
              </div>
              <p className="text-foreground font-medium mt-1">
                70% dos pacientes desistem quando não são atendidos em até 10 minutos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;