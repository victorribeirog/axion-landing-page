const WHATSAPP_NUMBER = "5535988369955";

export const openWhatsApp = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

export const whatsappMessages = {
  hero: "Olá! Tenho interesse no agente IA personalizado para minha clínica. Gostaria de mais informações!",
  problems: "Oi! Estou enfrentando problemas de atendimento na minha clínica e gostaria de saber como o agente IA pode ajudar.",
  solution: "Olá! Quero saber mais sobre como ter um agente IA personalizado para minha clínica.",
  process: "Oi! Tenho interesse em um agente IA feito sob medida para minha clínica. Vamos conversar?",
  proof: "Olá! Quero ter os mesmos resultados na minha clínica. Como posso começar?",
  finalCta: "Oi! Estou pronto para transformar o atendimento da minha clínica com IA!"
};