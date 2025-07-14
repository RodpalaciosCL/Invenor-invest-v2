import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Play, Pause, SkipForward, Mic, Volume2, VolumeX, Users, TrendingUp } from "lucide-react";

export default function AutoPresentationMode() {
  const [presentationState, setPresentationState] = useState({
    isPlaying: false,
    currentSlide: 0,
    progress: 0,
    audienceType: 'angel' as 'angel' | 'vc' | 'municipal',
    voiceEnabled: false,
    autoAdvance: true
  });

  const audienceTypes = [
    {
      id: 'angel',
      name: 'Angel Investor',
      icon: <Users className="w-5 h-5" />,
      focus: 'ROI y Payback',
      color: 'text-green-400'
    },
    {
      id: 'vc',
      name: 'VC Institucional', 
      icon: <TrendingUp className="w-5 h-5" />,
      focus: 'Escalabilidad y TAM',
      color: 'text-blue-400'
    },
    {
      id: 'municipal',
      name: 'Funcionario Municipal',
      icon: <Users className="w-5 h-5" />,
      focus: 'Beneficios Sociales',
      color: 'text-orange-400'
    }
  ];

  const slides = {
    angel: [
      {
        title: "CRUCES AI: Oportunidad de Inversión",
        duration: 60,
        content: "ROI 55%, Payback 15 meses. Tecnología validada por Ferronor.",
        keyPoints: ["$3.1B retorno proyectado", "95% eficiencia comprobada", "12 municipios confirmados"]
      },
      {
        title: "Validación de Mercado",
        duration: 90,
        content: "Contratos reales, no promesas. Revenue inmediato desde mes 1.",
        keyPoints: ["256% incremento recaudación", "Ferronor validation", "Track record comprobado"]
      },
      {
        title: "Métricas Financieras",
        duration: 120,
        content: "IRR 42%, VAN $1.3B. Métricas superiores a benchmarks industria.",
        keyPoints: ["Margen profit 64%", "OPEX optimizado", "Múltiples exit strategies"]
      },
      {
        title: "Riesgos Mitigados",
        duration: 90,
        content: "Riesgo técnico BAJO. Riesgo comercial BAJO. Tecnología probada.",
        keyPoints: ["Contratos firmados", "Tecnología validada", "Equipo experimentado"]
      },
      {
        title: "Oportunidad de Inversión",
        duration: 60,
        content: "Ventana limitada. First mover advantage. Acceso privilegiado futuras oportunidades.",
        keyPoints: ["$2.067B inversión total", "Terms preferenciales", "Exit múltiple 8x-12x"]
      }
    ],
    vc: [
      {
        title: "CRUCES AI: Disrupción B2G",
        duration: 60,
        content: "TAM $15B LATAM. Escalabilidad comprobada. Moats defendibles.",
        keyPoints: ["Market leader position", "International expansion ready", "Technology differentiation"]
      },
      {
        title: "Competitive Advantage",
        duration: 120,
        content: "First mover con validación única. Barreras entrada 24+ meses.",
        keyPoints: ["Switching costs altos", "Network effects", "Data moat exclusivo"]
      },
      {
        title: "Business Model",
        duration: 90,
        content: "SaaS B2G con revenue recurrente. LTV/CAC ratio 12:1.",
        keyPoints: ["Predictable revenue", "High retention", "Expansion revenue"]
      },
      {
        title: "Escalabilidad Global",
        duration: 120,
        content: "Modelo replicable LATAM. 200+ ciudades potenciales. $50B+ TAM.",
        keyPoints: ["International partnerships", "Regulatory compliance", "Local adaptation"]
      },
      {
        title: "Exit Strategy",
        duration: 90,
        content: "IPO path 36-48 meses. Strategic buyers identificados.",
        keyPoints: ["$5B+ valuation target", "Strategic acquirers", "Public comps analysis"]
      }
    ],
    municipal: [
      {
        title: "CRUCES AI: Solución Municipal",
        duration: 60,
        content: "Incrementa recaudación 256%. Reduce accidentes 67%. Fácil implementación.",
        keyPoints: ["Beneficio social comprobado", "ROI municipal inmediato", "Sin inversión inicial"]
      },
      {
        title: "Beneficios Sociales",
        duration: 120,
        content: "Menos accidentes, más seguridad. Recursos adicionales para educación y salud.",
        keyPoints: ["Vidas salvadas", "Infraestructura mejorada", "Bienestar ciudadano"]
      },
      {
        title: "Facilidad de Implementación",
        duration: 90,
        content: "Instalación 30 días. Capacitación incluida. Soporte 24/7.",
        keyPoints: ["Sin disruption operativa", "Personal capacitado", "Mantenimiento incluido"]
      },
      {
        title: "Casos de Éxito",
        duration: 120,
        content: "Copiapó: +256% recaudación. Caldera: ROI 15 meses. Testimonios reales.",
        keyPoints: ["Referencias verificables", "Resultados medibles", "Satisfacción 9/10"]
      },
      {
        title: "Propuesta de Colaboración",
        duration: 60,
        content: "Partnership municipal. Revenue sharing. Beneficio mutuo garantizado.",
        keyPoints: ["Riesgo cero", "Beneficio inmediato", "Largo plazo"]
      }
    ]
  };

  const currentSlides = slides[presentationState.audienceType];
  const currentSlide = currentSlides[presentationState.currentSlide];

  // Auto-advance slides
  useEffect(() => {
    if (presentationState.isPlaying && presentationState.autoAdvance) {
      const timer = setInterval(() => {
        setPresentationState(prev => {
          const newProgress = prev.progress + 1;
          if (newProgress >= (currentSlide?.duration || 60)) {
            // Move to next slide
            const nextSlide = prev.currentSlide + 1;
            if (nextSlide >= currentSlides.length) {
              return { ...prev, isPlaying: false, progress: 0 }; // End presentation
            }
            return { ...prev, currentSlide: nextSlide, progress: 0 };
          }
          return { ...prev, progress: newProgress };
        });
      }, 1000); // 1 second intervals
      
      return () => clearInterval(timer);
    }
  }, [presentationState.isPlaying, presentationState.autoAdvance, currentSlide, currentSlides.length]);

  const togglePresentation = () => {
    setPresentationState(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
  };

  const nextSlide = () => {
    setPresentationState(prev => ({
      ...prev,
      currentSlide: Math.min(prev.currentSlide + 1, currentSlides.length - 1),
      progress: 0
    }));
  };

  const selectAudience = (audienceId: string) => {
    setPresentationState(prev => ({
      ...prev,
      audienceType: audienceId as 'angel' | 'vc' | 'municipal',
      currentSlide: 0,
      progress: 0,
      isPlaying: false
    }));
  };

  const progressPercentage = currentSlide ? (presentationState.progress / currentSlide.duration) * 100 : 0;
  const overallProgress = ((presentationState.currentSlide + (progressPercentage / 100)) / currentSlides.length) * 100;

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-600/30 rounded-full mb-6">
            <Mic className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-300 font-medium text-sm">Modo Presentación Automática</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pitch <span className="text-blue-400">Personalizado</span> para 
            <br />Tu <span className="text-green-400">Audiencia Específica</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Presentación automática de 15 minutos adaptada al perfil de tu audiencia. 
            Cada slide optimizado para maximizar el impacto según el tipo de inversor.
          </p>
        </motion.div>

        {/* Audience Selector */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">Selecciona Tu Audiencia</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {audienceTypes.map((audience) => (
              <motion.button
                key={audience.id}
                onClick={() => selectAudience(audience.id)}
                className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  presentationState.audienceType === audience.id
                    ? `bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-2xl`
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-3">
                  <div className={audience.color}>
                    {audience.icon}
                  </div>
                  <div className="text-left">
                    <div>{audience.name}</div>
                    <div className="text-xs opacity-75">{audience.focus}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Presentation Interface */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Slide Display */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 relative overflow-hidden min-h-[400px]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-zinc-700">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-green-500"
                  style={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Slide Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-zinc-400 text-sm">
                    Slide {presentationState.currentSlide + 1} de {currentSlides.length}
                  </div>
                  <div className="text-zinc-400 text-sm">
                    {Math.ceil((currentSlide?.duration || 60) - presentationState.progress)}s restantes
                  </div>
                </div>

                {currentSlide && (
                  <motion.div
                    key={presentationState.currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-3xl font-bold text-white mb-6">
                      {currentSlide.title}
                    </h3>
                    
                    <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                      {currentSlide.content}
                    </p>

                    <div className="space-y-3">
                      {currentSlide.keyPoints.map((point, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-zinc-700/30 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-zinc-300">{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Controls Panel */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Presentation Controls */}
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
              <h4 className="text-lg font-bold text-white mb-4">Controles</h4>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <motion.button
                    onClick={togglePresentation}
                    className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-colors ${
                      presentationState.isPlaying
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {presentationState.isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </motion.button>
                  
                  <motion.button
                    onClick={nextSlide}
                    className="px-4 py-3 rounded-xl font-semibold bg-zinc-600 hover:bg-zinc-700 text-white transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <SkipForward className="w-5 h-5" />
                  </motion.button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-300 text-sm">Narración IA</span>
                  <motion.button
                    onClick={() => setPresentationState(prev => ({ ...prev, voiceEnabled: !prev.voiceEnabled }))}
                    className={`p-2 rounded-lg transition-colors ${
                      presentationState.voiceEnabled ? 'bg-blue-600 text-white' : 'bg-zinc-700 text-zinc-400'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {presentationState.voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  </motion.button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-300 text-sm">Auto-avanzar</span>
                  <motion.button
                    onClick={() => setPresentationState(prev => ({ ...prev, autoAdvance: !prev.autoAdvance }))}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      presentationState.autoAdvance ? 'bg-green-600' : 'bg-zinc-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="w-5 h-5 bg-white rounded-full shadow-lg"
                      animate={{ x: presentationState.autoAdvance ? 24 : 2 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Overall Progress */}
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
              <h4 className="text-lg font-bold text-white mb-4">Progreso General</h4>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-300">Progreso Total</span>
                  <span className="text-white">{Math.round(overallProgress)}%</span>
                </div>
                
                <div className="bg-zinc-700 rounded-full h-3">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                    style={{ width: `${overallProgress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                
                <div className="text-zinc-400 text-sm text-center">
                  {Math.round((currentSlides.length - presentationState.currentSlide - 1) * 2)} minutos restantes
                </div>
              </div>
            </div>

            {/* Slide Navigation */}
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
              <h4 className="text-lg font-bold text-white mb-4">Navegación</h4>
              
              <div className="space-y-2">
                {currentSlides.map((slide, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setPresentationState(prev => ({ ...prev, currentSlide: index, progress: 0 }))}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      index === presentationState.currentSlide
                        ? 'bg-blue-600/50 text-white'
                        : 'bg-zinc-700/30 text-zinc-300 hover:bg-zinc-600/30'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        index <= presentationState.currentSlide ? 'bg-green-400' : 'bg-zinc-600'
                      }`}></div>
                      <span className="text-sm">{slide.title}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-2xl p-8 border border-blue-600/30 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Presenta con <span className="text-blue-400">Profesionalismo</span>
            <br />Convence con <span className="text-green-400">Datos</span>
          </h3>
          <p className="text-zinc-300 mb-8 max-w-3xl mx-auto text-lg">
            Este modo de presentación automática te permite enfocarte en conectar con tu audiencia 
            mientras el contenido fluye de manera perfecta y profesional.
          </p>
          
          <motion.button
            onClick={() => document.getElementById('inversion')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mic className="w-6 h-6 inline mr-2" />
            Cerrar la Inversión
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}