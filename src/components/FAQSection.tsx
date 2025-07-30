import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Preciso ter muitos leads para valer a pena?",
      answer: "Com apenas 20 leads/mês você já vê retorno. Clientes com 50+ leads/mês costumam recuperar o investimento na primeira semana. Nossa IA converte até leads 'mortos' que você já tinha desistido."
    },
    {
      question: "E se minha clínica for muito específica/diferente?",
      answer: "Já atendemos desde odontologia geral até harmonização facial. O segredo é o treinamento personalizado: a IA aprende seus protocolos, valores, linguagem e até objeções mais comuns dos seus pacientes."
    },
    {
      question: "O paciente vai perceber que é uma IA?",
      answer: "A IA conversa naturalmente como sua recepcionista mais experiente. Só revelamos que é IA se o cliente perguntar diretamente. Muitas vezes os pacientes elogiam a 'nova funcionária' pela agilidade!"
    },
    {
      question: "Quanto tempo demora para implementar?",
      answer: "48 horas úteis. Dia 1: reunião de 1h para entender seu negócio. Dia 2: configuração e treinamento. Dia 3: você está vendendo 24h. Simples assim."
    },
    {
      question: "E se eu não gostar ou não funcionar?",
      answer: "Garantia incondicional de 30 dias. Se não aumentarmos suas vendas ou você não ficar satisfeito, devolvemos 100% do valor. Sem letras miúdas, sem burocracias."
    },
    {
      question: "Qual o investimento e como funciona o pagamento?",
      answer: "Planos a partir de R$ 497/mês (menos que uma recepcionista meio período). Pagamento mensal, sem fidelidade. Primeiro mês gratuito se batermos a meta de conversão acordada."
    },
    {
      question: "Substitui minha equipe ou complementa?",
      answer: "Complementa! A IA cuida dos primeiros contatos, qualifica leads e agenda consultas. Sua equipe fica livre para o que realmente gera valor: atender pacientes e focar na experiência clínica."
    },
    {
      question: "Funciona com qualquer sistema de agendamento?",
      answer: "Sim! Integramos com Google Agenda, Doctoralia, MedPlus, Clinicorp e +15 sistemas. Se usa planilha Excel, também funciona. A IA se adapta ao seu jeito de trabalhar."
    },
    {
      question: "E se o lead fizer pergunta muito técnica?",
      answer: "A IA foi treinada para reconhecer seus limites. Quando precisa, ela transfere naturalmente: 'Vou chamar nossa especialista para te dar uma resposta mais precisa'. Zero constrangimento."
    },
    {
      question: "Consigo acompanhar os resultados?",
      answer: "Relatório semanal com número de conversas, conversões, agendamentos e faturamento gerado. Você vê exatamente o ROI da IA e pode otimizar constantemente."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ainda tem <span className="text-cobalt">Dúvidas</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respondemos as principais objeções e preocupações de clínicas como a sua
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