import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, DollarSign, CheckCircle, XCircle } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";

const ProofSection = () => {
  const statistics = [
    {
      icon: Clock,
      value: "90%",
      description: "de redução no tempo médio de primeira resposta"
    },
    {
      icon: TrendingUp,
      value: "40%",
      description: "de aumento na conversão de agendamentos via WhatsApp"
    },
    {
      icon: DollarSign,
      value: "35%",
      description: "de redução nos custos operacionais de atendimento"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Título e Estatísticas */}
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Resultados que Falam por Si
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Os números comprovam o impacto do Agente IA na eficiência e crescimento das clínicas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {statistics.map((stat, index) => (
            <div 
              key={index} 
              className="bg-card border rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-cobalt/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-cobalt" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-cobalt mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground font-medium">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Tabela Comparativa */}
        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-foreground mb-6 md:mb-8">
            Agente IA vs. Atendimento Tradicional
          </h3>
          
          {/* Desktop Table */}
          <div className="hidden md:block border rounded-2xl overflow-hidden shadow-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3 text-base">Funcionalidade</TableHead>
                  <TableHead className="text-center text-base bg-cobalt/5 text-cobalt">Agente IA</TableHead>
                  <TableHead className="text-center text-base">Atendimento Tradicional</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Disponibilidade</TableCell>
                  <TableCell className="text-center bg-cobalt/5">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    <span className="sr-only">Sim</span>
                  </TableCell>
                  <TableCell className="text-center">
                    <XCircle className="w-5 h-5 text-destructive mx-auto" />
                    <span className="sr-only">Não</span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Atendimento 24/7</TableCell>
                  <TableCell className="text-center bg-cobalt/5">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <XCircle className="w-5 h-5 text-destructive mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Respostas Instantâneas</TableCell>
                  <TableCell className="text-center bg-cobalt/5">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <XCircle className="w-5 h-5 text-destructive mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Agendamento sem intervenção humana</TableCell>
                  <TableCell className="text-center bg-cobalt/5">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <XCircle className="w-5 h-5 text-destructive mx-auto" />
                  </TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell className="font-medium">Custo Escalável</TableCell>
                  <TableCell className="text-center bg-cobalt/5">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <XCircle className="w-5 h-5 text-destructive mx-auto" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3 px-4">
            {[
              { feature: "Disponibilidade", mobileFeature: "Disponibilidade" },
              { feature: "Atendimento 24/7", mobileFeature: "Atendimento 24/7" },
              { feature: "Respostas Instantâneas", mobileFeature: "Respostas instantâneas" },
              { feature: "Agendamento sem intervenção humana", mobileFeature: "Agendamento automático" },
              { feature: "Custo Escalável", mobileFeature: "Custo escalável" },
            ].map((item, index) => (
              <div key={index} className="bg-card border rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-foreground mb-3 text-sm">{item.mobileFeature}</h4>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-medium text-cobalt">Agente IA</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-medium text-muted-foreground">Tradicional</span>
                    <XCircle className="w-4 h-4 text-destructive" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 animate-fade-in overflow-hidden px-4" style={{ animationDelay: '0.9s' }}>
          <Button 
            variant="cobalt" 
            size="lg" 
            className="text-sm md:text-base whitespace-normal md:whitespace-nowrap px-4 md:px-8 max-w-xs md:max-w-none"
            onClick={() => openWhatsApp(whatsappMessages.proof)}
          >
            <span className="block md:hidden">Quero Estes Resultados</span>
            <span className="hidden md:block">Quero ter estes resultados na minha clínica</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;