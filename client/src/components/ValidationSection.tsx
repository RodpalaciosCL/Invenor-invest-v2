import { motion } from "framer-motion";
import { Star, CheckCircle, TrendingUp, Award, Users, Target, Zap, ShieldCheck } from "lucide-react";

export default function ValidationSection() {
  const keyFacts = [
    {
      icon: "🏛️",
      title: "12 Municipios",
      subtitle: "Contratos B2G Confirmados",
      description: "No son intenciones o LOIs. Son contratos reales firmados con municipalidades para implementación inmediata.",
      metric: "Contratos Reales",
      color: "from-green-500 to-green-700"
    },
    {
      icon: "🚂",
      title: "Ferronor",
      subtitle: "Validación Técnica Oficial",
      description: "Empresa ferroviaria líder en Chile certificó oficialmente la superioridad técnica de CRUCES AI.",
      metric: "95% Eficiencia",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: "📊",
      title: "256% ROI",
      subtitle: "Resultados Medidos",
      description: "Incrementos reales en recaudación municipal medidos y validados en implementaciones piloto.",
      metric: "Resultados Probados",
      color: "from-orange-500 to-orange-700"
    }
  ];

  const validationMetrics = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "12 Municipios",
      subtitle: "Contratos Confirmados",
      description: "No son LOIs o intenciones. Son contratos B2G firmados de largo plazo.",
      badge: "CONFIRMADO",
      color: "text-green-400"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Ferronor",
      subtitle: "Validación Técnica",
      description: "Empresa ferroviaria líder certificó superioridad técnica 95% vs 22%.",
      badge: "VALIDADO",
      color: "text-blue-400"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "256% ROI",
      subtitle: "Resultados Reales",
      description: "Incrementos medidos en terreno, no proyecciones teóricas.",
      badge: "PROBADO",
      color: "text-orange-400"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "0 Fallas",
      subtitle: "Operación 24/7",
      description: "Sistema funcionando sin interrupciones desde implementación.",
      badge: "ESTABLE",
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
          <div className="inline-flex items-center px-4 py-2 bg-green-600/20 border border-green-600/30 rounded-full mb-6">
            <Star className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-300 font-medium text-sm">Validación Completa - No Es Solo Promesa</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            La Diferencia: <span className="text-green-400">Resultados Reales</span>
            <br />vs Proyecciones Teóricas
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Mientras otros venden ideas, INVENOR entrega resultados validados. 
            Ferronor + 12 municipios + data real = oportunidad de inversión única.
          </p>
        </motion.div>

        {/* Validation Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {validationMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50 text-center"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-zinc-700 rounded-2xl mb-4 ${metric.color}`}>
                {metric.icon}
              </div>
              
              <div className="inline-block px-3 py-1 bg-green-600/20 rounded-full text-green-300 text-xs font-bold mb-3">
                {metric.badge}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-1">
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

        {/* Key Facts */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Hechos <span className="text-orange-400">Verificables</span> y Datos Reales
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {keyFacts.map((fact, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${fact.color} opacity-5`}></div>
                
                <div className="relative z-10">
                  {/* Icon Header */}
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{fact.icon}</div>
                    <h4 className="text-xl font-bold text-white">{fact.title}</h4>
                    <p className="text-orange-400 font-semibold">{fact.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-300 mb-6 leading-relaxed text-center">
                    {fact.description}
                  </p>

                  {/* Metric Badge */}
                  <div className="text-center">
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${fact.color} rounded-lg text-white font-bold text-sm`}>
                      {fact.metric}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8 border border-green-600/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              ¿Por Qué Esta Validación Es <span className="text-green-400">Única</span>?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-black text-green-400 mb-2">100%</div>
                <div className="text-white font-semibold mb-1">Contratos Reales</div>
                <div className="text-zinc-400 text-sm">No promesas, son contratos firmados</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-black text-blue-400 mb-2">95%</div>
                <div className="text-white font-semibold mb-1">Precisión Validada</div>
                <div className="text-zinc-400 text-sm">Confirmada por empresa líder</div>
              </div>
              
              <div className="text-4xl font-black text-orange-400 mb-2">0</div>
              <div className="text-white font-semibold mb-1">Riesgo Técnico</div>
              <div className="text-zinc-400 text-sm">Tecnología ya probada en terreno</div>
            </div>

            <motion.button
              onClick={() => document.getElementById('inversion')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Invertir en Resultados Probados
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}