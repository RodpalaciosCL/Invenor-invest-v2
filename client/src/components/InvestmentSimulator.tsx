import { motion } from "framer-motion";
import { Calculator, TrendingUp, Target, DollarSign } from "lucide-react";

export default function InvestmentSimulator() {
  const keyFinancials = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      label: "Inversión Requerida",
      value: "$83M CLP",
      subtitle: "Por cruce implementado",
      color: "text-orange-400"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      label: "ROI Proyectado",
      value: "49%",
      subtitle: "Retorno anual esperado",
      color: "text-orange-400"
    },
    {
      icon: <Target className="w-8 h-8" />,
      label: "Payback Period",
      value: "26 meses",
      subtitle: "Recuperación de inversión",
      color: "text-orange-400"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      label: "Revenue Anual",
      value: "$2.1B CLP",
      subtitle: "Proyección conservadora",
      color: "text-orange-400"
    }
  ];

  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
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
            Análisis <span className="text-orange-400">Financiero</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
            Proyecciones financieras basadas en datos reales de implementaciones 
            actuales y contratos confirmados con municipalidades.
          </p>
        </motion.div>

        {/* Financial Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {keyFinancials.map((metric, index) => (
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
              
              <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                {metric.value}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">
                {metric.label}
              </h3>
              <p className="text-zinc-400 text-sm">
                {metric.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Summary Analysis */}
        <motion.div
          className="bg-zinc-800/50 rounded-2xl p-8 border border-zinc-700/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Resumen de <span className="text-orange-400">Inversión</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Modelo de Negocio</h4>
              <ul className="space-y-2 text-zinc-300">
                <li>• Revenue compartido con municipalidades</li>
                <li>• Contratos de largo plazo (5-10 años)</li>
                <li>• Modelo SaaS con soporte técnico incluido</li>
                <li>• Escalabilidad comprobada en terreno</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Factores de Riesgo</h4>
              <ul className="space-y-2 text-zinc-300">
                <li>• Riesgo tecnológico: Mínimo (ya probado)</li>
                <li>• Riesgo comercial: Bajo (contratos firmados)</li>
                <li>• Riesgo regulatorio: Bajo (compliance establecido)</li>
                <li>• Riesgo de mercado: Moderado (dependiente de presupuesto municipal)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}