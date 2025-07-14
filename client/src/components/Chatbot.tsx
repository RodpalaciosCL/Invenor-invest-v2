import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Minimize2,
  Maximize2,
  TrendingUp,
  DollarSign,
  Target,
  Zap,
  Sparkles
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "¡Hola! Soy MarIA, tu asistente especializada en INVENOR y CRUCES AI. Puedo ayudarte con información detallada sobre la oportunidad de inversión, métricas financieras, validación técnica y mucho más. ¿En qué te puedo ayudar?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickResponses = [
    { text: "ROI y financials", icon: <DollarSign size={16} /> },
    { text: "Validación técnica", icon: <Target size={16} /> },
    { text: "Eficiencia IA", icon: <Zap size={16} /> },
    { text: "Escalabilidad", icon: <TrendingUp size={16} /> }
  ];

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('roi') || message.includes('retorno') || message.includes('financ')) {
      return "📊 **ROI y Métricas Financieras CRUCES AI:**\n\n✅ **ROI:** 55% garantizado en 24 meses\n✅ **Payback:** 15 meses (vs 36 promedio industria)\n✅ **IRR:** 42% anual\n✅ **Retorno total:** $3.1B USD proyectado\n✅ **Margen:** 67% de utilidad\n\n**Validación:** Datos confirmados por 12 municipios con contratos ya firmados. ¿Necesitas detalles específicos del modelo financiero?";
    }
    
    if (message.includes('ia') || message.includes('inteligencia') || message.includes('eficiencia') || message.includes('precision')) {
      return "🤖 **Tecnología IA de CRUCES:**\n\n✅ **Precisión:** 95% vs 22% método tradicional\n✅ **Detección patentes:** 99.5% accuracy\n✅ **Monitoreo:** 24/7 automatizado\n✅ **Validación:** Ferronor confirmó técnicamente\n\n**Ventaja competitiva:** Primera solución B2G en Chile con IA validada en entorno real ferroviario. ¿Te interesa conocer los detalles técnicos?";
    }
    
    if (message.includes('validacion') || message.includes('ferronor') || message.includes('tecnica')) {
      return "🏆 **Validación Técnica y Comercial:**\n\n✅ **Ferronor:** Empresa ferroviaria líder validó la solución\n✅ **12 Municipios:** Contratos B2G confirmados\n✅ **Incremento:** 256% en recaudación validado\n✅ **Equipo:** Expertos en IA, ferrocarriles y gestión municipal\n\n**Status:** No es solo una idea, es una solución probada con tracción real. ¿Quieres conocer los municipios específicos?";
    }
    
    if (message.includes('escalab') || message.includes('expansion') || message.includes('mercado')) {
      return "🚀 **Escalabilidad y Expansión:**\n\n✅ **Año 1:** 25 cruces (4 regiones Norte)\n✅ **Año 2:** 40 cruces (expansión)\n✅ **Año 3:** 60 cruces (consolidación)\n✅ **Potencial:** 200+ cruces a nivel nacional\n✅ **LATAM:** Mercado internacional de miles de millones\n\n**Ventaja:** Mercado captivo con problemática real y demanda comprobada. ¿Te interesa el plan de expansión detallado?";
    }
    
    if (message.includes('equipo') || message.includes('team') || message.includes('experiencia')) {
      return "👥 **Equipo INVENOR:**\n\n✅ **IA & Tech:** Expertos en computer vision y ML\n✅ **Ferroviario:** 15+ años experiencia sector\n✅ **Municipal:** Conocimiento profundo gestión local\n✅ **Validación:** Respaldo técnico de Ferronor\n\n**Fortaleza:** Combinación única de expertise técnico y conocimiento del mercado B2G chileno. ¿Quieres conocer más sobre backgrounds específicos?";
    }
    
    if (message.includes('competencia') || message.includes('diferenciacion') || message.includes('ventaja')) {
      return "⚡ **Ventaja Competitiva CRUCES AI:**\n\n✅ **First Mover:** Primera solución B2G validada en Chile\n✅ **Eficiencia:** 95% vs 22% métodos actuales\n✅ **Contratos:** 12 municipios ya comprometidos\n✅ **Validación:** Ferronor respalda técnicamente\n✅ **Barrera:** Alto switching cost para competidores\n\n**Diferenciación:** No solo tecnología, sino solución integral con tracción comercial probada. ¿Te interesa el análisis competitivo completo?";
    }
    
    if (message.includes('inversion') || message.includes('capital') || message.includes('funding')) {
      return "💰 **Oportunidad de Inversión:**\n\n✅ **Busca:** Serie A para escalamiento\n✅ **Uso:** Expansión 25→60 cruces\n✅ **ROI:** 55% garantizado 24 meses\n✅ **Exit:** IPO o adquisición estratégica 5-7 años\n✅ **Riesgo:** Bajo (contratos ya asegurados)\n\n**Timing:** Momento perfecto post-validación técnica y comercial. ¿Necesitas el deck completo de inversión?";
    }
    
    if (message.includes('hola') || message.includes('ayuda') || message.includes('informacion')) {
      return "¡Perfecto! Puedo ayudarte con información detallada sobre:\n\n📊 **Financials:** ROI 55%, payback 15 meses\n🤖 **Tecnología:** IA 95% eficiencia\n🏆 **Validación:** Ferronor + 12 municipios\n🚀 **Escalabilidad:** Plan expansión nacional\n💰 **Inversión:** Oportunidad Serie A\n\n¿Sobre qué área específica te gustaría profundizar?";
    }
    
    // Respuesta por defecto más inteligente
    return "Como especialista en INVENOR, puedo ayudarte con información específica sobre:\n\n• **Métricas financieras** (ROI 55%, payback 15 meses)\n• **Tecnología IA** (95% eficiencia validada)\n• **Validación comercial** (Ferronor + 12 municipios)\n• **Plan de escalamiento** (25→200+ cruces)\n• **Oportunidad de inversión** (Serie A)\n\n¿Qué aspecto te interesa más explorar?";
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(newMessage);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickResponse = (response: string) => {
    setNewMessage(response);
    handleSendMessage();
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white p-4 rounded-full shadow-2xl z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        data-chat-trigger
        style={{ display: isOpen ? 'none' : 'flex' }}
      >
        <MessageCircle size={24} />
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed ${isMinimized ? 'bottom-6 right-6 w-80 h-16' : 'bottom-6 right-6 w-96 h-[600px]'} bg-zinc-800 rounded-2xl border border-zinc-700 shadow-2xl z-50 overflow-hidden`}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="font-bold text-white">MarIA</h3>
                  <p className="text-orange-100 text-xs">Especialista INVENOR</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:text-orange-200 transition-colors"
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-orange-200 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[400px]">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`max-w-[80%] p-3 rounded-2xl ${
                        message.sender === 'user' 
                          ? 'bg-orange-600 text-white ml-4' 
                          : 'bg-zinc-700 text-white mr-4'
                      }`}>
                        <div className="flex items-start gap-2 mb-2">
                          {message.sender === 'bot' && (
                            <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <Sparkles className="w-3 h-3 text-white" />
                            </div>
                          )}
                          {message.sender === 'user' && (
                            <div className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="text-sm whitespace-pre-line leading-relaxed">
                          {message.content}
                        </div>
                        <div className="text-xs opacity-70 mt-2">
                          {message.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      className="flex justify-start"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="bg-zinc-700 text-white p-3 rounded-2xl mr-4">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Responses */}
                <div className="px-4 pb-2">
                  <div className="flex gap-2 overflow-x-auto">
                    {quickResponses.map((response, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleQuickResponse(response.text)}
                        className="flex items-center gap-2 px-3 py-2 bg-zinc-700 hover:bg-zinc-600 text-white text-xs rounded-full whitespace-nowrap transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {response.icon}
                        {response.text}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="p-4 border-t border-zinc-700">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Pregúntame sobre INVENOR..."
                      className="flex-1 px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    />
                    <motion.button
                      onClick={handleSendMessage}
                      className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Send size={16} />
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}