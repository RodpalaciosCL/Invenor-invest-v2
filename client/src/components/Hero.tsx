import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Play,
  ChevronDown,
} from "lucide-react";

export default function Hero() {
  const [currentMetric, setCurrentMetric] = useState(0);

  const metrics = [
    { value: "55%", label: "ROI Garantizado", sublabel: "En 24 meses" },
    { value: "95%", label: "Eficiencia IA", sublabel: "vs 8% actual" },
    { value: "$3.1B", label: "Retorno Total", sublabel: "Proyectado" },
    { value: "256%", label: "Incremento", sublabel: "Recaudación" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToInvestment = () => {
    document
      .getElementById("inversion")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400/5 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://res.cloudinary.com/dhobnlg73/image/upload/v1751486212/Untitled_design_6_g3yugq.png"
            alt="INVENOR Logo"
            className="h-36 md:h-40 filter drop-shadow-2xl"
          />
        </motion.div>

        {/* Investment Badge */}
        <motion.div
          className="inline-flex items-center px-6 py-3 bg-orange-600/20 border border-orange-600/30 rounded-full mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Zap className="w-5 h-5 text-orange-400 mr-3" />
          <span className="text-orange-300 font-semibold">
            OPORTUNIDAD DE INVERSIÓN TIER 1
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-zinc-300 mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Revolucionando la{" "}
          <span className="text-orange-400">Seguridad Ferroviaria</span>
          <br />
          con Inteligencia Artificial
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-xl text-zinc-400 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Sistema inteligente que detecta infracciones en cruces ferroviarios
          24/7, incrementando la recaudación municipal hasta{" "}
          <span className="text-orange-400 font-bold">256% </span>
          con{" "}
          <span className="text-orange-400 font-bold">
            95% de eficiencia IA
          </span>{" "}
          validada por Ferronor.
        </motion.p>

        {/* Dynamic Metrics Display */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 max-w-md mx-auto">
            <motion.div
              key={currentMetric}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl font-black text-orange-400 mb-2">
                {metrics[currentMetric].value}
              </div>
              <div className="text-xl font-bold text-white mb-1">
                {metrics[currentMetric].label}
              </div>
              <div className="text-zinc-400">
                {metrics[currentMetric].sublabel}
              </div>
            </motion.div>

            {/* Metric Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {metrics.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentMetric ? "bg-orange-400" : "bg-zinc-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.button
            onClick={scrollToInvestment}
            className="group bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Target className="w-5 h-5" />
            Ver Oportunidad de Inversión
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            onClick={() =>
              document
                .getElementById("video-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group border-2 border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-5 h-5" />
            Ver Demo Técnico
            <TrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex flex-col items-center text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <span className="text-sm mb-2">Descubre más</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
