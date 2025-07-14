import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, TrendingUp, Zap, DollarSign, Clock, Users, Target } from "lucide-react";

export default function ProblemSolution() {
  const problemStats = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      stat: "22%",
      label: "Eficiencia Actual",
      description: "Métodos tradicionales de detección",
      color: "text-red-400"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      stat: "24/7",
      label: "Infracciones No Detectadas",
      description: "Pérdida continua de recaudación",
      color: "text-orange-400"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      stat: "$MM",
      label: "Pérdidas Anuales",
      description: "Por ineficiencia en detección",
      color: "text-red-500"
    }
  ];

  const solutionStats = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      stat: "95%",
      label: "Eficiencia IA",
      description: "Detección automatizada precisa",
      color: "text-green-400"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      stat: "24/7",
      label: "Monitoreo Continuo",
      description: "Cero pérdidas por infracciones",
      color: "text-blue-400"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      stat: "256%",
      label: "Incremento Recaudación",
      description: "Validado por municipios",
      color: "text-green-500"
    }
  ];

  const validationPoints = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Ferronor",
      description: "Validación técnica empresa líder",
      badge: "Técnico"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "12 Municipios",
      description: "Contratos B2G confirmados",
      badge: "Comercial"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Data Real",
      description: "Incrementos validados en terreno",
      badge: "Resultados"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-800 to-zinc-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            El Problema es <span className="text-red-400">Real</span>, 
            <br />La Solución es <span className="text-green-400">Revolucionaria</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Municipios pierden millones por ineficiencia en detección de infracciones ferroviarias. 
            CRUCES AI lo resuelve con tecnología validada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Problema */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-500/20 rounded-xl">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">EL PROBLEMA</h3>
                  <p className="text-red-300">Situación actual ineficiente</p>
                </div>
              </div>

              <div className="space-y-6">
                {problemStats.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-zinc-800/30 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`p-3 bg-zinc-700 rounded-lg ${item.color}`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className={`text-3xl font-bold ${item.color} mb-1`}>
                        {item.stat}
                      </div>
                      <div className="text-white font-semibold mb-1">
                        {item.label}
                      </div>
                      <div className="text-zinc-400 text-sm">
                        {item.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Problem Details */}
              <div className="mt-6 p-4 bg-red-900/20 rounded-xl border border-red-800/30">
                <h4 className="text-white font-bold mb-2">Consecuencias:</h4>
                <ul className="text-zinc-300 text-sm space-y-1">
                  <li>• Pérdida millonaria de ingresos municipales</li>
                  <li>• Inseguridad en cruces ferroviarios</li>
                  <li>• Procesos manuales lentos e ineficientes</li>
                  <li>• Falta de datos para optimización</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Solución */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">LA SOLUCIÓN</h3>
                  <p className="text-green-300">CRUCES AI revoluciona el sector</p>
                </div>
              </div>

              <div className="space-y-6">
                {solutionStats.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-zinc-800/30 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className={`p-3 bg-zinc-700 rounded-lg ${item.color}`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className={`text-3xl font-bold ${item.color} mb-1`}>
                        {item.stat}
                      </div>
                      <div className="text-white font-semibold mb-1">
                        {item.label}
                      </div>
                      <div className="text-zinc-400 text-sm">
                        {item.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Solution Details */}
              <div className="mt-6 p-4 bg-green-900/20 rounded-xl border border-green-800/30">
                <h4 className="text-white font-bold mb-2">Beneficios:</h4>
                <ul className="text-zinc-300 text-sm space-y-1">
                  <li>• Incremento inmediato de recaudación</li>
                  <li>• Automatización completa del proceso</li>
                  <li>• Data en tiempo real para decisiones</li>
                  <li>• ROI garantizado en 15 meses</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Validation Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-orange-600/20 to-orange-400/20 rounded-2xl p-8 border border-orange-600/30">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Validación Completa: No Es Solo Teoría
              </h3>
              <p className="text-orange-200">
                CRUCES AI está respaldado por validación técnica y contratos comerciales confirmados
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {validationPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700/50 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600 rounded-xl mb-4">
                    {point.icon}
                  </div>
                  <div className="inline-block px-3 py-1 bg-orange-600/20 rounded-full text-orange-300 text-xs font-bold mb-3">
                    {point.badge}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {point.title}
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            La Oportunidad Es <span className="text-orange-400">Ahora</span>
          </h3>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Mientras otros intentan solucionar el problema, INVENOR ya tiene la solución validada y funcionando.
          </p>
          <motion.button
            onClick={() => document.getElementById('inversion')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Oportunidad de Inversión
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}