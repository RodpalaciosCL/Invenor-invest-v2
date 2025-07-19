import { motion } from "framer-motion";
import { CheckCircle, Award, TrendingUp, ShieldCheck } from "lucide-react";

export default function ValidationSection() {
  const validationMetrics = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "12 Municipios",
      subtitle: "Contratos Confirmados",
      description: "Contratos B2G firmados con municipalidades para implementación inmediata.",
      badge: "CONFIRMADO",
      color: "text-orange-400"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Ferronor",
      subtitle: "Validación Técnica",
      description: "Empresa ferroviaria líder certificó la superioridad técnica del sistema.",
      badge: "VALIDADO",
      color: "text-zinc-400"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "49% ROI",
      subtitle: "Retorno Inversionista",
      description: "ROI garantizado del 49% en 26 meses, validado por modelo financiero completo.",
      badge: "PROBADO",
      color: "text-orange-400"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "99.5% Uptime",
      subtitle: "Confiabilidad Operacional",
      description: "Sistema funcionando sin interrupciones significativas desde implementación.",
      badge: "ESTABLE",
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
            Validación <span className="text-orange-400">Técnica y Comercial</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
            CRUCES AI cuenta con validación completa tanto técnica como comercial, 
            respaldada por contratos reales y métricas de rendimiento verificables.
          </p>
        </motion.div>

        {/* Validation Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {validationMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-zinc-700 rounded-2xl mb-4 ${metric.color}`}>
                {metric.icon}
              </div>
              
              <div className="inline-block px-3 py-1 bg-orange-600/20 rounded-full text-orange-300 text-xs font-bold mb-3">
                {metric.badge}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1">
                {metric.title}
              </h3>
              <p className={`font-semibold mb-3 ${metric.color}`}>
                {metric.subtitle}
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key Results Summary */}
        <motion.div
          className="bg-orange-600/10 rounded-2xl p-8 border border-orange-600/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Indicadores Clave de <span className="text-orange-400">Validación</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
                <div className="text-white font-semibold mb-1">Contratos Reales</div>
                <div className="text-zinc-400 text-sm">Sin LOIs o intenciones</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">95%</div>
                <div className="text-white font-semibold mb-1">Precisión IA</div>
                <div className="text-zinc-400 text-sm">Validada por Ferronor</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">0</div>
                <div className="text-white font-semibold mb-1">Riesgo Técnico</div>
                <div className="text-zinc-400 text-sm">Tecnología probada</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}