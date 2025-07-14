import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Bot, User, Minimize2 } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: '¡Hola! Soy MarIA, tu asistente especializada en INVENOR. Puedo ayudarte con información sobre el proyecto CRUCES AI, proyecciones financieras, análisis técnico y oportunidades de inversión. ¿En qué te puedo ayudar?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Simulate MarIA responses based on INVENOR content
      const response = await getMarIAResponse(userMessage.content);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setTimeout(() => {
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
      }, 1000 + Math.random() * 1000);

    } catch (error) {
      setIsLoading(false);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Disculpa, tuve un problema técnico. ¿Podrías intentar de nuevo?',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const getMarIAResponse = async (input: string): Promise<string> => {
    const lowerInput = input.toLowerCase();

    // Financial projections
    if (lowerInput.includes('roi') || lowerInput.includes('retorno') || lowerInput.includes('inversión')) {
      return `Excelente pregunta sobre las finanzas del proyecto CRUCES AI:

📊 **ROI**: 55% en 24 meses
💰 **Inversión**: $2.067 billones
📈 **Retorno**: $3.096 billones total
⏱️ **Payback**: 15 meses
🎯 **IRR**: 42% anual

El análisis de sensibilidad muestra:
- Escenario conservador: 34% IRR
- Escenario base: 42% IRR  
- Escenario optimista: 49% IRR

¿Te interesa profundizar en algún aspecto específico?`;
    }

    // Technical aspects
    if (lowerInput.includes('tecnología') || lowerInput.includes('ia') || lowerInput.includes('artificial')) {
      return `La tecnología CRUCES AI es revolucionaria:

🤖 **Eficiencia IA**: 95% vs 22% actual
🎯 **Precisión**: 99.5% reconocimiento patentes
⚡ **Detección**: Automática 24/7
📹 **Evidencia**: Video + metadata hash criptográfico
🔍 **Clasificación**: Automática de infracciones

La IA procesa múltiples variables:
- Velocidad del tren
- Proximidad de vehículos/personas
- Condiciones climáticas
- Horarios de operación

¿Quieres saber más sobre la implementación técnica?`;
    }

    // Market and scaling
    if (lowerInput.includes('mercado') || lowerInput.includes('escalabilidad') || lowerInput.includes('expansion')) {
      return `El mercado es enorme y la escalabilidad comprobada:

🌎 **Mercado Nacional**: 12 comunas piloto → 50+ adicionales
📍 **Regiones**: Tarapacá, Antofagasta, Atacama, Coquimbo
🚄 **Cruces**: Año 1: 25 → Año 3: 60 cruces
💼 **Modelo B2G**: Contratos municipales largo plazo

**Incremento Recaudación Comprobado**:
- Tierra Amarilla: +256%
- Taltal: +252%
- Sierra Gorda: +200%

Potencial LATAM: Miles de millones USD en infracciones no detectadas.

¿Te interesa conocer la estrategia de expansión?`;
    }

    // Competition and validation
    if (lowerInput.includes('competencia') || lowerInput.includes('validación') || lowerInput.includes('ferronor')) {
      return `INVENOR tiene validación técnica sólida y ventaja competitiva:

✅ **Ferronor**: Validación técnica completa
✅ **Municipios**: 12 contratos confirmados
✅ **Primera Solución**: B2G en cruces ferroviarios Chile
✅ **Tecnología Propia**: IA desarrollada internamente

**Ventajas Competitivas**:
- No hay competencia directa en Chile
- Barrera de entrada alta (regulación, certificaciones)
- Relaciones establecidas con Ferronor
- Conocimiento específico del mercado

La problemática es real: $2.3 billones pérdidas anuales por infracciones no detectadas.

¿Quieres detalles sobre la validación técnica?`;
    }

    // Team and execution
    if (lowerInput.includes('equipo') || lowerInput.includes('experiencia') || lowerInput.includes('ejecución')) {
      return `El equipo INVENOR combina experiencia técnica y comercial:

👥 **Estructura Societaria**:
- Ferronor: 52% (validación técnica)
- Hermanos Pirazzoli: 26% (ejecución comercial)  
- Invesan: 22% (respaldo financiero)

**Fortalezas del Equipo**:
- Experiencia ferroviaria (Ferronor)
- Desarrollo IA avanzado
- Relaciones municipales establecidas
- Capacidad de ejecución comprobada

El modelo incluye soporte técnico 24/7, instalación completa y mantenimiento continuo.

¿Te interesa conocer más sobre la estructura de ejecución?`;
    }

    // Default responses for other topics
    const defaultResponses = [
      `Interesante pregunta. Te puedo ayudar con:

📊 **Análisis Financiero**: ROI, IRR, payback, proyecciones
🤖 **Tecnología IA**: Eficiencia, precisión, implementación  
🏢 **Mercado B2G**: Municipios, escalabilidad, contratos
✅ **Validación**: Ferronor, pilotos, resultados comprobados
👥 **Equipo**: Estructura societaria, experiencia, ejecución

¿Sobre qué aspecto específico te gustaría profundizar?`,

      `Basándome en la documentación CRUCES AI, puedo analizar:

- Proyecciones financieras detalladas
- Aspectos técnicos de la IA
- Estrategia de mercado y expansión
- Validación técnica y comercial
- Análisis de riesgos y oportunidades

¿Hay algún tema particular que te interese más?`,

      `Como especialista en INVENOR, tengo acceso completo a:

📈 Modelos financieros con análisis de sensibilidad
🔧 Detalles técnicos de la implementación IA
🎯 Estrategia comercial y de escalamiento
📋 Documentación de validación técnica

¿Qué información específica necesitas para tu análisis?`
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-700 flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">MarIA</h3>
                  <p className="text-orange-100 text-sm">Asistente INVENOR</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-orange-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-zinc-900">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`flex items-start gap-2 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' 
                        ? 'bg-orange-600' 
                        : 'bg-zinc-700'
                    }`}>
                      {message.sender === 'user' ? (
                        <User size={16} className="text-white" />
                      ) : (
                        <Bot size={16} className="text-orange-400" />
                      )}
                    </div>
                    <div className={`p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-orange-600 text-white'
                        : 'bg-zinc-800 text-zinc-100'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center">
                      <Bot size={16} className="text-orange-400" />
                    </div>
                    <div className="bg-zinc-800 p-3 rounded-2xl">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-zinc-700">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Pregúntame sobre INVENOR..."
                  className="flex-1 bg-zinc-800 border border-zinc-600 rounded-lg px-3 py-2 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  disabled={isLoading}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  className="bg-orange-600 hover:bg-orange-700 disabled:bg-zinc-600 text-white p-2 rounded-lg transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}