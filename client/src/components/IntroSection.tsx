import { motion } from "framer-motion";
import { TrendingUp, Shield, Target, DollarSign } from "lucide-react";

export default function IntroSection() {
  const keyPoints = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Crisis de Seguridad",
      description: "1.500 cruces ferroviarios sin monitoreo tecnológico en Chile",
      metric: "1,500",
      metricLabel: "Cruces sin Control"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Ineficiencia Actual",
      description: "Métodos tradicionales alcanzan solo 8% de efectividad",
      metric: "8%",
      metricLabel: "Efectividad Actual"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Solución Validada",
      description: "CRUCES AI alcanza 95% de precisión con evidencia legal",
      metric: "95%",
      metricLabel: "Precisión IA"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Retorno Garantizado",
      description: "12 contratos firmados, incrementos del 256% validados",
      metric: "55%",
      metricLabel: "ROI Garantizado"
    }
  ];

  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Oportunidad de Inversión Tecnológica
          </h2>
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto">
            Crisis de seguridad ferroviaria transformada en flujos de ingresos recurrentes validados
          </p>
        </motion.div>

        {/* Key Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700 hover:border-orange-600/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-orange-400 mb-4">
                {point.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {point.title}
              </h3>
              
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                {point.description}
              </p>
              
              <div className="text-center pt-4 border-t border-zinc-700">
                <div className="text-3xl font-bold text-orange-400 mb-1">
                  {point.metric}
                </div>
                <div className="text-zinc-500 text-xs">
                  {point.metricLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Investment Proposition */}
        <motion.div
          className="mt-16 bg-zinc-800 rounded-2xl p-8 border border-zinc-700 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Propuesta de Valor para Inversores
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">$3.1B</div>
              <div className="text-zinc-400">Retorno Total Proyectado</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">15</div>
              <div className="text-zinc-400">Meses Payback</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">12</div>
              <div className="text-zinc-400">Contratos B2G Firmados</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}