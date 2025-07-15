import { motion } from "framer-motion";
import { useState } from "react";
import { TrendingUp, Shield, Target, DollarSign, AlertTriangle, Zap, Eye, BarChart3, ArrowRight, CheckCircle } from "lucide-react";
import CountUp from "react-countup";

export default function IntroSection() {
  const [selectedPoint, setSelectedPoint] = useState(0);

  const keyPoints = [
    {
      id: 0,
      icon: <AlertTriangle className="w-12 h-12" />,
      title: "Crisis de Seguridad",
      subtitle: "Infraestructura Ferroviaria Vulnerable",
      description: "1.500 cruces ferroviarios operan sin monitoreo tecnológico en Chile, creando un vacío crítico de seguridad y oportunidades de recaudación perdidas.",
      metric: 1500,
      metricLabel: "Cruces sin Control",
      color: "text-red-400",
      bgColor: "bg-red-400/10",
      borderColor: "border-red-400/30"
    },
    {
      id: 1,
      icon: <Eye className="w-12 h-12" />,
      title: "Ineficiencia Sistémica",
      subtitle: "Métodos Tradicionales Limitados",
      description: "Sistemas actuales alcanzan solo 8% de efectividad en detección, mientras infracciones no detectadas representan pérdidas millonarias anuales.",
      metric: 8,
      metricLabel: "Efectividad Actual",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/30"
    },
    {
      id: 2,
      icon: <Zap className="w-12 h-12" />,
      title: "Solución Revolucionaria",
      subtitle: "Inteligencia Artificial Validada",
      description: "CRUCES AI integra visión computacional avanzada alcanzando 95% de precisión en detección automática con evidencia legal trazable.",
      metric: 95,
      metricLabel: "Precisión IA",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/30"
    },
    {
      id: 3,
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Oportunidad de Inversión",
      subtitle: "ROI Validado y Escalable",
      description: "12 contratos municipales firmados generan incrementos del 256% en recaudación, ofreciendo 55% ROI proyectado con payback 15 meses.",
      metric: 55,
      metricLabel: "ROI Garantizado",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/30"
    }
  ];

  const investmentMetrics = [
    { value: 3.1, label: "Retorno Total", unit: "B", prefix: "$" },
    { value: 15, label: "Meses Payback", unit: "", prefix: "" },
    { value: 256, label: "Incremento", unit: "%", prefix: "+" },
    { value: 12, label: "Contratos B2G", unit: "", prefix: "" }
  ];

  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/5 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Oportunidad de Inversión
            <span className="text-orange-400 block mt-2">Tecnológica Validada</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Transformando la crisis de seguridad ferroviaria en flujos de ingresos recurrentes 
            con tecnología IA validada por Ferronor y 12 municipios confirmados
          </motion.p>
        </motion.div>

        {/* Interactive Journey */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Point Selection */}
          <div className="space-y-4">
            {keyPoints.map((point, index) => (
              <motion.div
                key={point.id}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedPoint === index
                    ? `${point.bgColor} ${point.borderColor} scale-105`
                    : 'bg-zinc-800 border-zinc-700 hover:border-zinc-600'
                }`}
                onClick={() => setSelectedPoint(index)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: selectedPoint === index ? 1.05 : 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`${point.color} p-2 rounded-xl ${point.bgColor}`}>
                    {point.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {point.title}
                    </h3>
                    <p className="text-zinc-400 text-sm">
                      {point.subtitle}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${point.color}`}>
                      {point.metric === 1500 ? "1,500" : `${point.metric}${point.id === 3 ? "%" : point.id === 2 ? "%" : "%"}`}
                    </div>
                    <div className="text-zinc-500 text-xs">
                      {point.metricLabel}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Detailed View */}
          <motion.div
            key={selectedPoint}
            className="bg-zinc-800 rounded-3xl p-8 border border-zinc-700"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className={`${keyPoints[selectedPoint].color} p-3 rounded-xl ${keyPoints[selectedPoint].bgColor}`}>
                {keyPoints[selectedPoint].icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {keyPoints[selectedPoint].title}
                </h3>
                <p className={`text-lg ${keyPoints[selectedPoint].color}`}>
                  {keyPoints[selectedPoint].subtitle}
                </p>
              </div>
            </div>

            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              {keyPoints[selectedPoint].description}
            </p>

            {/* Metric Visualization */}
            <div className="bg-zinc-900 rounded-2xl p-6 text-center">
              <div className={`text-5xl font-bold mb-2 ${keyPoints[selectedPoint].color}`}>
                <CountUp
                  start={0}
                  end={keyPoints[selectedPoint].metric}
                  duration={2}
                  suffix={keyPoints[selectedPoint].id === 0 ? "" : "%"}
                  separator={keyPoints[selectedPoint].id === 0 ? "," : ""}
                />
              </div>
              <div className="text-zinc-400 text-lg">
                {keyPoints[selectedPoint].metricLabel}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Investment Metrics */}
        <motion.div
          className="bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-3xl p-8 border border-zinc-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Propuesta de Valor para Inversores
            </h3>
            <p className="text-zinc-400 text-lg">
              Métricas validadas por 12 municipios con contratos B2G firmados
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {investmentMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-zinc-800 rounded-2xl border border-zinc-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-orange-400 mb-2">
                  {metric.prefix}
                  <CountUp
                    start={0}
                    end={metric.value}
                    duration={2.5}
                    decimals={metric.value === 3.1 ? 1 : 0}
                    delay={1}
                  />
                  {metric.unit}
                </div>
                <div className="text-zinc-400 text-sm font-medium">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span className="text-lg font-semibold">
                Validado por Ferronor y 12 Municipios
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}