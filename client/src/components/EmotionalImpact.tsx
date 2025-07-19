import { motion } from "framer-motion";
import { BarChart3, Target, Clock, TrendingUp } from "lucide-react";
import CountUp from "react-countup";

export default function EmotionalImpact() {
  const keyMetrics = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      value: 256,
      suffix: "%",
      label: "Incremento Recaudación",
      subtitle: "Medido en implementaciones actuales",
      color: "text-orange-400"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: 15,
      suffix: " meses",
      label: "Período de Recuperación",
      subtitle: "Análisis conservador basado en datos",
      color: "text-orange-400"
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: 55,
      suffix: "%",
      label: "ROI Proyectado",
      subtitle: "Basado en contratos confirmados",
      color: "text-orange-400"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: 12,
      suffix: "",
      label: "Municipios Confirmados",
      subtitle: "Contratos firmados para expansión",
      color: "text-orange-400"
    }
  ];

  return (
    <section className="py-20 bg-zinc-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Métricas <span className="text-orange-400">Clave</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
            Resultados medibles basados en implementaciones actuales de CRUCES AI 
            en municipalidades chilenas.
          </p>
        </motion.div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-zinc-700 rounded-2xl mb-6 ${metric.color}`}>
                {metric.icon}
              </div>
              
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${metric.color}`}>
                <CountUp
                  end={metric.value}
                  duration={2.5}
                  suffix={metric.suffix}
                />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                {metric.label}
              </h3>
              <p className="text-zinc-400 text-sm">
                {metric.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}