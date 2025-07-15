import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AlertTriangle, Camera, Brain, TrendingUp, ChevronRight, Train, Shield, Zap, Eye, BarChart3 } from "lucide-react";

export default function IntroSection() {
  const [currentNarrative, setCurrentNarrative] = useState(0);
  const [showTimeline, setShowTimeline] = useState(false);

  const narrativeSteps = [
    "Cada semana, decenas de vehículos cruzan incorrectamente pasos ferroviarios en Chile.",
    "Los accidentes no se reportan. Las multas no se cursan. La seguridad es invisible.",
    "INVENOR transforma esta crisis en una oportunidad de inversión tecnológica rentable."
  ];

  const timelineSteps = [
    {
      id: "problema",
      icon: AlertTriangle,
      title: "Identificación del Problema",
      description: "1.500+ cruces ferroviarios sin monitoreo tecnológico en zonas urbanas de Chile.",
      stats: "1.500+ cruces desprotegidos",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/30"
    },
    {
      id: "vacio", 
      icon: Shield,
      title: "Análisis del Vacío",
      description: "Municipalidades carecen de recursos técnicos para fiscalización efectiva.",
      stats: "0% fiscalización actual",
      color: "text-zinc-400",
      bgColor: "bg-zinc-400/10",
      borderColor: "border-zinc-400/30"
    },
    {
      id: "descubrimiento",
      icon: Brain, 
      title: "Validación Técnica",
      description: "Análisis de datos reales confirma baja efectividad de métodos tradicionales.",
      stats: "22% efectividad actual",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/30"
    },
    {
      id: "solucion",
      icon: Camera,
      title: "Desarrollo de Solución", 
      description: "Sistema de IA con visión computacional alcanza 95% de precisión validada.",
      stats: "95% precisión IA",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/30"
    },
    {
      id: "modelo",
      icon: TrendingUp,
      title: "Modelo de Negocio",
      description: "Revenue compartido genera ingresos recurrentes para municipios e inversionistas.",
      stats: "55% ROI proyectado",
      color: "text-orange-400", 
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/30"
    }
  ];

  useEffect(() => {
    const narrativeInterval = setInterval(() => {
      setCurrentNarrative((prev) => {
        if (prev >= narrativeSteps.length - 1) {
          setShowTimeline(true);
          return prev;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(narrativeInterval);
  }, []);

  const scrollToNext = () => {
    document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Pantalla de Impacto Narrativo */}
      <section className="min-h-screen bg-zinc-900 relative overflow-hidden flex items-center justify-center">
        {/* Patrón Geométrico de Fondo */}
        <div className="absolute inset-0">
          {/* Elementos geométricos animados */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-orange-400/20 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-zinc-400/20 rotate-45"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [45, 225, 405],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* Líneas de conexión animadas */}
          <motion.div
            className="absolute top-1/2 left-0 h-px bg-orange-400/30"
            animate={{
              width: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Contenido Narrativo */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative inline-block">
              <div className="w-20 h-20 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Train className="w-12 h-12 text-white" />
              </div>
              <motion.div
                className="absolute -inset-2 border border-orange-400/30 rounded-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Narrativa Secuencial */}
          <div className="space-y-12 mb-16">
            {narrativeSteps.map((step, index) => (
              <motion.div
                key={index}
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: index <= currentNarrative ? 1 : 0.4,
                  y: index <= currentNarrative ? 0 : 20
                }}
                transition={{ 
                  duration: 0.8,
                  delay: index <= currentNarrative ? 0 : 0.5
                }}
              >
                <div className={`p-8 rounded-2xl border ${
                  index <= currentNarrative 
                    ? 'bg-zinc-800/50 border-orange-400/30' 
                    : 'bg-zinc-800/20 border-zinc-700/30'
                } backdrop-blur-sm`}>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed text-white">
                    {step}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: currentNarrative >= narrativeSteps.length - 1 ? 1 : 0,
              scale: currentNarrative >= narrativeSteps.length - 1 ? 1 : 0.9
            }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              onClick={scrollToNext}
              className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-500 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 group shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <BarChart3 className="w-6 h-6" />
              Analizar la Oportunidad
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Sección Timeline "¿Por qué Nació INVENOR?" */}
      <motion.section 
        className="py-20 bg-zinc-900 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Efectos de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Header de Timeline */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-orange-600/20 border border-orange-600/30 rounded-full mb-6">
              <BarChart3 className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-orange-300 font-medium text-sm">Proceso de Desarrollo</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Metodología de <span className="text-orange-400">Análisis</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Proceso sistemático de identificación, análisis y desarrollo de la solución 
              tecnológica que transforma la gestión de cruces ferroviarios en Chile.
            </p>
          </motion.div>

          {/* Timeline Interactiva */}
          <div className="relative">
            {/* Línea central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-zinc-700 rounded-full">
              <motion.div
                className="bg-orange-400 w-full rounded-full origin-top"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>

            {/* Steps de Timeline */}
            <div className="space-y-16">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Contenido */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className={`bg-zinc-800 rounded-2xl p-6 border ${step.borderColor} ${step.bgColor} backdrop-blur-sm`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 ${step.bgColor} rounded-xl flex items-center justify-center border ${step.borderColor}`}>
                          <step.icon className={`w-6 h-6 ${step.color}`} />
                        </div>
                        <h3 className={`text-2xl font-bold ${step.color}`}>
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                        {step.description}
                      </p>
                      
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${step.bgColor} border border-zinc-600/30`}>
                        <span className={`text-sm font-semibold ${step.color}`}>
                          {step.stats}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Punto central */}
                  <motion.div
                    className="relative z-10 w-6 h-6 bg-orange-400 rounded-full border-4 border-zinc-900 flex-shrink-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-orange-400 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                  </motion.div>

                  {/* Espacio del otro lado */}
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Final */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-800/50 rounded-3xl p-8 border border-zinc-700/50 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Análisis <span className="text-orange-400">Financiero</span> Detallado
              </h3>
              <p className="text-xl text-zinc-400 mb-8">
                Ahora que conoces la historia, explora los números reales: 
                ROI, proyecciones, modelo de negocio y retornos validados.
              </p>
              
              <motion.button
                onClick={scrollToNext}
                className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BarChart3 className="w-5 h-5" />
                Ver Métricas de Inversión
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}