import { useState, useEffect } from "react";
import { Check, CheckCheck } from "lucide-react";

const WhatsAppInterface = () => {
  const [visibleMessages, setVisibleMessages] = useState(0);

  const messages = [
    {
      id: 1,
      text: "Oi, gostaria de agendar uma consulta com dermatologista 😊",
      sender: "patient",
      time: "14:32",
      status: "read"
    },
    {
      id: 2,
      text: "Olá! Claro, posso te ajudar com o agendamento. Temos disponibilidade para esta semana e a próxima. Qual período seria melhor para você?",
      sender: "ai",
      time: "14:33",
      status: "read"
    },
    {
      id: 3,
      text: "Prefiro pela manhã, se possível",
      sender: "patient",
      time: "14:33",
      status: "read"
    },
    {
      id: 4,
      text: "Perfeito! Temos horários disponíveis:\n\n🗓️ Quinta-feira (21/03) - 09:30\n🗓️ Sexta-feira (22/03) - 10:00\n🗓️ Segunda-feira (25/03) - 09:00\n\nQual desses horários funciona melhor?",
      sender: "ai",
      time: "14:34",
      status: "read"
    },
    {
      id: 5,
      text: "A sexta às 10h seria ideal! Quanto fica a consulta?",
      sender: "patient",
      time: "14:35",
      status: "read"
    },
    {
      id: 6,
      text: "Ótima escolha! ✅\n\nConsulta dermatológica: R$ 180,00\n\nVou confirmar seu agendamento:\n📅 Sexta-feira, 22/03\n⏰ 10:00\n👩‍⚕️ Dra. Carolina Santos\n\nPreciso apenas do seu nome completo para finalizar.",
      sender: "ai",
      time: "14:36",
      status: "delivered"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleMessages(prev => {
        if (prev < messages.length) {
          return prev + 1;
        }
        return 0; // Reset animation
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [messages.length]);

  const StatusIcon = ({ status }: { status: string }) => {
    if (status === "read") {
      return <CheckCheck className="w-4 h-4 text-blue-500" />;
    }
    return <Check className="w-4 h-4 text-gray-400" />;
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
      {/* WhatsApp Header */}
      <div className="bg-[#075E54] text-white p-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-gray-600 font-semibold text-sm">C</span>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-white">Clínica BellaSkin</h3>
          <p className="text-xs text-green-200">online</p>
        </div>
      </div>

      {/* Messages Container */}
      <div className="h-96 bg-[#ECE5DD] p-4 overflow-y-auto">
        <div className="space-y-3">
          {messages.slice(0, visibleMessages).map((message, index) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'patient' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 shadow-sm ${
                  message.sender === 'patient'
                    ? 'bg-[#DCF8C6] text-gray-800'
                    : 'bg-white text-gray-800'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                <div className="flex items-center justify-end gap-1 mt-1">
                  <span className="text-xs text-gray-500">{message.time}</span>
                  {message.sender === 'ai' && (
                    <StatusIcon status={message.status} />
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {visibleMessages > 0 && visibleMessages < messages.length && (
            <div className="flex justify-start">
              <div className="bg-white rounded-lg p-3 shadow-sm max-w-[80%]">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-[#F0F0F0] p-3 border-t border-gray-200">
        <div className="bg-white rounded-full px-4 py-2 flex items-center">
          <span className="text-gray-400 text-sm flex-1">Digite uma mensagem</span>
          <div className="w-6 h-6 bg-[#25D366] rounded-full flex items-center justify-center">
            <span className="text-white text-xs">➤</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppInterface;