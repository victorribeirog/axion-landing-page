import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quanto tempo demora para implementar o agente IA?",
      answer: "O processo completo leva entre 7 a 14 dias úteis, desde a análise inicial até a ativação completa. Durante este período, configuramos, treinamos e testamos o agente para garantir que funcione perfeitamente com o fluxo da sua clínica."
    },
    {
      question: "O agente substitui completamente a recepção humana?",
      answer: "Não, o agente IA trabalha como um complemento à sua equipe. Ele atende consultas básicas, agenda consultas e filtra chamadas, permitindo que sua recepção foque em atendimentos mais complexos e pessoais. Casos especiais sempre podem ser transferidos para um atendente humano."
    },
    {
      question: "Como o agente aprende sobre a minha clínica?",
      answer: "Durante a fase de treinamento, fornecemos informações específicas sobre seus serviços, horários, preços, protocolos de atendimento e perguntas frequentes. O agente é personalizado para responder exatamente como sua equipe responderia."
    },
    {
      question: "É seguro? Os dados dos pacientes ficam protegidos?",
      answer: "Sim, seguimos rigorosamente todas as normas de proteção de dados e LGPD. Todas as conversas são criptografadas, e o agente não armazena informações sensíveis dos pacientes sem autorização expressa."
    },
    {
      question: "Posso modificar as respostas do agente após a implementação?",
      answer: "Claro! Oferecemos ajustes contínuos e você pode solicitar modificações nas respostas sempre que necessário. Também fornecemos treinamento para sua equipe gerenciar configurações básicas do agente."
    },
    {
      question: "O que acontece se o agente não souber responder algo?",
      answer: "Quando o agente encontra uma pergunta que não consegue responder adequadamente, ele transfere automaticamente a conversa para um membro da sua equipe ou agenda um retorno conforme suas preferências configuradas."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos agentes IA para clínicas
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-cobalt py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;