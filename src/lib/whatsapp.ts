const WHATSAPP_NUMBER = "5535988369955";

export const openWhatsApp = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

export const whatsappMessages = {
  default: "Olá! Vi a página da AXON e gostaria de saber mais sobre como a IA pode ajudar minha clínica a aumentar as vendas através do WhatsApp.",
  hero: "Quero parar de perder vendas por demora no WhatsApp! Como a IA da AXON pode me ajudar?",
  problems: "Minha clínica está perdendo muitas vendas por demora no atendimento. Como a AXON pode resolver isso?",
  solution: "Quero entender como o agente IA realmente funciona na prática para minha clínica.",
  process: "Quero implementar na minha clínica em 48h. Como funciona o processo?",
  proof: "Vi os resultados e quero saber se minha clínica pode ter conversões similares.",
  customization: "Quero uma análise gratuita para ver se minha clínica tem perfil para IA.",
  testimonials: "Quero resultados como esses clientes! Como começar?",
  about: "Quero conhecer a metodologia AXON e ver se é adequada para mim.",
  targetAudience: "Quero verificar se minha clínica tem o perfil ideal para resultados extraordinários.",
  finalCta: "Quero parar de perder dinheiro por atendimento lento. Vamos implementar a IA!"
};