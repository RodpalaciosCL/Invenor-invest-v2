import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AlertTriangle, Camera, Brain, TrendingUp, ChevronRight, Train, Shield, Zap, Eye, BarChart3, ArrowRight, Play, Target, Database } from "lucide-react";
import CountUp from "react-countup";

export default function IntroSection() {
  const [currentStage, setCurrentStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const stages = [
    {
      id: "context",
      title: "El Contexto",
      subtitle: "Infraestructura Ferroviaria en Crisis",
      content: "1.500 cruces ferroviarios operan sin monitoreo tecnológico en Chile, creando un vacío de seguridad y oportunidades de recaudación perdidas.",
      visual: "crisis",
      stats: { value: 1500, label: "Cruces sin Control", prefix: "" }
    },
    {
      id: "impact", 
      title: "El Impacto",
      subtitle: "Ineficiencia Sistémica Documentada",
      content: "Métodos tradicionales alcanzan solo 8% de efectividad, mientras infracciones no detectadas representan pérdidas millonarias anuales.",
      visual: "inefficiency",
      stats: { value: 8, label: "Efectividad Actual", prefix: "%" }
    },
    {
      id: "solution",
      title: "La Solución",
      subtitle: "Tecnología de Precisión Validada",
      content: "CRUCES AI integra visión computacional e inteligencia artificial, alcanzando 95% de precisión en detección automática de infracciones.",
      visual: "technology",
      stats: { value: 95, label: "Precisión IA", prefix: "%" }
    },
    {
      id: "opportunity",
      title: "La Oportunidad",
      subtitle: "Modelo de Inversión Escalable",
      content: "Revenue sharing con municipalidades genera flujos recurrentes, ofreciendo 55% ROI proyectado con validación en 12 municipios confirmados.",
      visual: "growth",
      stats: { value: 55, label: "ROI Proyectado", prefix: "%" }
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % stages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPlaying, stages.length]);

  const scrollToNext = () => {
    document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getVisualComponent = (visual: string) => {
    switch (visual) {
      case "crisis":
        return (
          <div className="relative">
            <div className="grid grid-cols-3 gap-3">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-12 h-12 border-2 border-red-400/30 rounded-lg flex items-center justify-center"
                  animate={{ 
                    borderColor: [
                      "rgba(248, 113, 113, 0.3)", 
                      "rgba(248, 113, 113, 0.8)", 
                      "rgba(248, 113, 113, 0.3)"
                    ] 
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                >
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </motion.div>
              ))}
            </div>
          </div>
        );
      case "inefficiency":
        return (
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-zinc-600 relative">
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-orange-400"
                style={{ clipPath: "polygon(0 0, 8% 0, 8% 100%, 0 100%)" }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">8%</span>
              </div>
            </div>
          </div>
        );
      case "technology":
        return (
          <div className="relative">
            <motion.div
              className="w-24 h-24 bg-orange-600 rounded-2xl flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Camera className="w-12 h-12 text-white" />
            </motion.div>
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            >
              <Brain className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        );
      case "growth":
        return (
          <div className="relative">
            <div className="flex items-end gap-2 h-20">
              {[40, 60, 85, 100].map((height, i) => (
                <motion.div
                  key={i}
                  className="w-8 bg-orange-600 rounded-t"
                  style={{ height: `${height}%` }}
                  animate={{ height: [`0%`, `${height}%`] }}
                  transition={{ duration: 1, delay: i * 0.2, repeat: Infinity, repeatDelay: 3 }}
                />
              ))}
            </div>
            <TrendingUp className="w-8 h-8 text-orange-400 mt-2" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen bg-zinc-900 relative overflow-hidden">
      {/* Fondo Dinámico */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-zinc-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Header Principal */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-orange-600/20 border border-orange-600/30 rounded-full mb-8">
            <Target className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-300 font-medium text-sm">Análisis de Oportunidad</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            CRUCES AI: <span className="text-orange-400">Transformando</span>
            <br />la Infraestructura Ferroviaria
          </h1>
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
            Una oportunidad de inversión tecnológica que convierte la crisis de seguridad 
            ferroviaria en flujos de ingresos recurrentes validados.
          </p>
        </motion.div>

        {/* Presentación Interactiva de Stages */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Contenido Principal */}
          <div className="space-y-8">
            <motion.div
              key={currentStage}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-zinc-800/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-700/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{currentStage + 1}</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{stages[currentStage].title}</h2>
                  <p className="text-orange-400 font-medium">{stages[currentStage].subtitle}</p>
                </div>
              </div>
              
              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                {stages[currentStage].content}
              </p>
              
              {/* Estadística Destacada */}
              <div className="bg-orange-600/10 border border-orange-400/30 rounded-2xl p-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-orange-400">
                      {stages[currentStage].stats.prefix}
                      <CountUp 
                        end={stages[currentStage].stats.value} 
                        duration={2}
                        preserveValue
                      />
                    </span>
                  </div>
                  <p className="text-orange-300 font-medium">{stages[currentStage].stats.label}</p>
                </div>
              </div>
            </motion.div>
            
            {/* Controles de Navegación */}
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                {stages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentStage(index);
                      setIsPlaying(false);
                    }}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentStage 
                        ? 'bg-orange-400 w-12' 
                        : 'bg-zinc-600 hover:bg-zinc-500'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-full text-white transition-all duration-300"
              >
                <Play className={`w-4 h-4 ${isPlaying ? 'opacity-100' : 'opacity-50'}`} />
                <span className="text-sm">Auto</span>
              </button>
            </div>
          </div>

          {/* Visualización Dinámica */}
          <div className="relative">
            <motion.div
              key={currentStage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-800/30 backdrop-blur-sm rounded-3xl p-12 border border-zinc-700/30 flex items-center justify-center min-h-[400px]"
            >
              {getVisualComponent(stages[currentStage].visual)}
            </motion.div>
          </div>
        </div>

        {/* Call to Action Final */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-3xl p-10 border border-zinc-700/50 max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-6">
              Métricas <span className="text-orange-400">Financieras</span> Validadas
            </h3>
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
              Explora el análisis detallado de retornos, proyecciones de crecimiento 
              y modelo de revenue sharing que sustenta esta oportunidad de inversión.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={scrollToNext}
                className="inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BarChart3 className="w-6 h-6" />
                Analizar Métricas Clave
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('projections')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-3 bg-zinc-700 hover:bg-zinc-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Database className="w-5 h-5" />
                Ver Proyecciones
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}