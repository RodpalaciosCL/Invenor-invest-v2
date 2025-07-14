import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, DollarSign, Zap, Target, TrendingUp, Shield } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: <DollarSign className="w-5 h-5" />,
      category: "Inversión",
      question: "¿Cuáles son las garantías del ROI del 55%?",
      answer: "El ROI del 55% está respaldado por:\n\n• **Contratos firmados**: 12 municipios ya comprometidos con implementación\n• **Validación técnica**: Ferronor confirma eficiencia 95% vs 22% actual\n• **Data real**: Incrementos del 256% en recaudación ya validados\n• **Modelo B2G**: Contratos municipales de largo plazo (5-10 años)\n• **Payback 15 meses**: Recuperación de inversión garantizada\n\nNo es proyección, es resultado validado en implementaciones piloto."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      category: "Tecnología",
      question: "¿Cómo funciona la IA de detección y qué la hace tan precisa?",
      answer: "CRUCES AI utiliza computer vision avanzada:\n\n• **Algoritmos propietarios**: ML especializado en reconocimiento de patentes\n• **Precisión 99.5%**: En detección de placas patentes\n• **95% eficiencia**: En clasificación de infracciones vs 22% métodos tradicionales\n• **24/7 operación**: Monitoreo continuo sin intervención humana\n• **Edge computing**: Procesamiento local para respuesta inmediata\n• **Validación Ferronor**: Empresa líder confirmó superioridad técnica\n\nTecnología probada en entorno ferroviario real chileno."
    },
    {
      icon: <Target className="w-5 h-5" />,
      category: "Mercado",
      question: "¿Cuál es el tamaño real del mercado y la escalabilidad?",
      answer: "Mercado B2G con demanda comprobada:\n\n• **Año 1**: 25 cruces (4 regiones Norte) - $15M ingresos\n• **Año 3**: 60 cruces consolidados - $45M ingresos\n• **Potencial nacional**: 200+ cruces - $150M+ mercado\n• **LATAM expansion**: Miles de millones USD oportunidad\n• **Mercado captivo**: Problemática real, necesidad urgente\n• **Barreras entrada**: Alto switching cost, relaciones B2G establecidas\n\n12 municipios ya comprometidos = tracción comercial real."
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      category: "Validación",
      question: "¿Qué evidencia concreta existe de que la solución funciona?",
      answer: "Validación técnica y comercial completa:\n\n• **Ferronor**: Empresa ferroviaria líder validó técnicamente\n• **12 Municipios**: Contratos B2G confirmados (no LOIs, contratos reales)\n• **256% incremento**: Recaudación validada en terreno\n• **95% vs 22%**: Eficiencia comparada medida en implementaciones\n• **Payback 15 meses**: Confirmado en casos reales\n• **Data transparente**: Acceso a métricas reales de municipios\n\nNo es startup early-stage, es solución con tracción probada."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      category: "Riesgos",
      question: "¿Cuáles son los principales riesgos y cómo se mitigan?",
      answer: "Análisis completo de riesgos y mitigación:\n\n**Riesgos Técnicos: BAJO**\n• Tecnología ya validada por Ferronor\n• Precisión 95% confirmada en terreno\n\n**Riesgos Comerciales: BAJO**\n• 12 municipios ya comprometidos\n• Modelo B2G con contratos largo plazo\n• Problemática real con demanda urgente\n\n**Riesgos Financieros: BAJO**\n• ROI 55% respaldado por contratos\n• Payback 15 meses vs 36 industria\n• Múltiples municipios = diversificación\n\n**Competencia: MODERADO**\n• First mover advantage en Chile\n• Barreras altas (validación, relaciones B2G)"
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      category: "Proceso",
      question: "¿Cuál es el siguiente paso para inversionistas interesados?",
      answer: "Proceso estructurado para inversionistas:\n\n**1. Reunión Inicial** (30 min)\n• Presentación ejecutiva detallada\n• Q&A con equipo técnico\n• Review de métricas financieras\n\n**2. Due Diligence** (1-2 semanas)\n• Acceso a data room completo\n• Validación técnica independiente\n• Reuniones con municipios/Ferronor\n\n**3. Término de Inversión** (2-3 semanas)\n• Negociación estructura inversión\n• Legal y compliance\n• Cierre y deployment capital\n\n**Contacto directo**: Equipo disponible para llamada inmediata."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-orange-600/20 border border-orange-600/30 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-300 font-medium text-sm">Preguntas Frecuentes Inversionistas</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Respuestas <span className="text-orange-400">Directas</span> a Preguntas Clave
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Todo lo que necesitas saber sobre la oportunidad de inversión CRUCES AI, 
            con datos reales y validación concreta.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl border border-zinc-700/50 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-zinc-700/30 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-600/20 rounded-xl text-orange-400">
                    {faq.icon}
                  </div>
                  <div>
                    <div className="inline-block px-3 py-1 bg-orange-600/20 rounded-full text-orange-300 text-xs font-bold mb-2">
                      {faq.category}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                
                <motion.div
                  className="text-orange-400 flex-shrink-0"
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus size={20} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="px-6 pb-6"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pl-16 pr-8">
                      <div className="prose prose-invert prose-orange max-w-none">
                        <div className="text-zinc-300 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-orange-600/20 to-orange-400/20 rounded-2xl p-8 border border-orange-600/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Tienes Más Preguntas?
            </h3>
            <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
              Nuestro equipo está disponible para responder cualquier consulta específica 
              sobre la oportunidad de inversión CRUCES AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agendar Reunión
              </motion.button>
              <motion.button
                className="border-2 border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Data Room
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}