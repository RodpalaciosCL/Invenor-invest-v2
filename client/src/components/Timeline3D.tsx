import { motion } from "framer-motion";
import { useState } from "react";
import { Clock, Zap, Target, TrendingUp, DollarSign, Users, Rocket, Star } from "lucide-react";

export default function Timeline3D() {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  const phases = [
    {
      id: 0,
      title: "FASE 1: Implementación Base",
      period: "0-12 meses",
      status: "ACTIVO",
      color: "from-orange-500 to-orange-700",
      bgColor: "bg-orange-500/20",
      icon: <Target className="w-8 h-8" />,
      milestones: [
        "25 cruces operativos",
        "$756M ingresos mensuales", 
        "Break-even mes 15",
        "Validación técnica completa",
        "Team escalado a 45 personas"
      ],
      metrics: {
        cruces: 25,
        revenue: 756,
        teamSize: 45,
        efficiency: 95,
        roi: 48
      },
      achievements: [
        "✅ Ferronor validation secured",
        "✅ 12 municipal contracts signed", 
        "✅ Technical team assembled",
        "✅ AI algorithms optimized"
      ]
    },
    {
      id: 1,
      title: "FASE 2: Optimización",
      period: "13-16 meses", 
      status: "PRÓXIMO",
      color: "from-orange-500 to-orange-700",
      bgColor: "bg-orange-500/20",
      icon: <Zap className="w-8 h-8" />,
      milestones: [
        "Perfeccionamiento IA",
        "Reducción OPEX 3.2%",
        "Primer pago inversionistas",
        "Expansión team comercial",
        "Sistema de alertas avanzado"
      ],
      metrics: {
        cruces: 32,
        revenue: 980,
        teamSize: 62,
        efficiency: 97,
        roi: 52
      },
      achievements: [
        "🔄 AI efficiency boost to 97%",
        "🔄 OPEX optimization program",
        "🔄 Investor returns initiated", 
        "🔄 Commercial expansion"
      ]
    },
    {
      id: 2,
      title: "FASE 3: Escalamiento",
      period: "17-20 meses",
      status: "PLANIFICADO", 
      color: "from-zinc-500 to-zinc-700",
      bgColor: "bg-zinc-500/20",
      icon: <TrendingUp className="w-8 h-8" />,
      milestones: [
        "40 cruces activos",
        "$1.2B ingresos mensuales",
        "Primera expansión territorial",
        "Partnerships estratégicos",
        "Tecnología 2.0 release"
      ],
      metrics: {
        cruces: 40,
        revenue: 1200,
        teamSize: 85,
        efficiency: 98,
        roi: 58
      },
      achievements: [
        "🎯 Territory expansion north",
        "🎯 Strategic partnerships",
        "🎯 Technology 2.0 launch",
        "🎯 International interest"
      ]
    },
    {
      id: 3,
      title: "FASE 4: Expansión Nacional", 
      period: "21-24 meses",
      status: "PLANIFICADO",
      color: "from-zinc-600 to-zinc-800", 
      bgColor: "bg-zinc-600/20",
      icon: <Rocket className="w-8 h-8" />,
      milestones: [
        "50 cruces operativos",
        "$1.5B ingresos mensuales",
        "Cobertura nacional",
        "Evaluación mercados regionales",
        "Optimización operacional"
      ],
      metrics: {
        cruces: 50,
        revenue: 1500,
        teamSize: 120,
        efficiency: 99,
        roi: 65
      },
      achievements: [
        "⭐ Cobertura nacional establecida",
        "⭐ Operaciones optimizadas",
        "⭐ Evaluación internacional iniciada",
        "⭐ ROI sostenible"
      ]
    }
  ];

  const currentPhase = phases[selectedPhase];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ACTIVO": return "text-orange-400 bg-orange-500/20";
      case "PRÓXIMO": return "text-orange-400 bg-orange-500/20";
      case "PLANIFICADO": return "text-zinc-400 bg-zinc-500/20";
      case "ESTRATÉGICO": return "text-zinc-400 bg-zinc-500/20";

      default: return "text-zinc-400 bg-zinc-500/20";
    }
  };

  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-zinc-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
          <div className="inline-flex items-center px-4 py-2 bg-orange-600/20 border border-orange-600/30 rounded-full mb-6">
            <Clock className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-300 font-medium text-sm">Roadmap Interactivo</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            El <span className="text-orange-400">Roadmap</span> de 
            <br /><span className="text-orange-400">Crecimiento</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Cada fase diseñada para maximizar retornos. Cada milestone validado por data real. 
            Roadmap de crecimiento basado en métricas verificables.
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="mb-16">
          {/* Phase Selector */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {phases.map((phase, index) => (
              <motion.button
                key={phase.id}
                onClick={() => setSelectedPhase(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${
                  selectedPhase === index 
                    ? `bg-gradient-to-r ${phase.color} text-white shadow-2xl`
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  {phase.icon}
                  <span className="hidden sm:inline">{phase.title.split(':')[0]}</span>
                  <span className="sm:hidden">F{index + 1}</span>
                </div>
                {selectedPhase === index && (
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Phase Details */}
          <motion.div
            key={selectedPhase}
            className="grid lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Phase Info */}
            <div className="lg:col-span-2">
              <div className={`bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${currentPhase.color} opacity-5`}></div>
                
                <div className="relative z-10">
                  {/* Phase Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 ${getStatusColor(currentPhase.status)}`}>
                        {currentPhase.status}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {currentPhase.title}
                      </h3>
                      <p className="text-zinc-400">{currentPhase.period}</p>
                    </div>
                    <div className={`p-4 bg-gradient-to-r ${currentPhase.color} rounded-xl text-white`}>
                      {currentPhase.icon}
                    </div>
                  </div>

                  {/* Milestones */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Milestones Clave</h4>
                    <div className="space-y-3">
                      {currentPhase.milestones.map((milestone, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-zinc-700/30 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${currentPhase.color} rounded-full`}></div>
                          <span className="text-zinc-300">{milestone}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {currentPhase.achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          className="text-zinc-300 text-sm"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          {achievement}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Panel */}
            <div className="space-y-6">
              <div className={`bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50`}>
                <h4 className="text-lg font-semibold text-white mb-6">Métricas de Fase</h4>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-300">Cruces Activos</span>
                    <span className="text-2xl font-bold text-green-400">
                      {currentPhase.metrics.cruces}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-300">Revenue Mensual</span>
                    <span className="text-2xl font-bold text-blue-400">
                      ${currentPhase.metrics.revenue}M
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-300">Team Size</span>
                    <span className="text-2xl font-bold text-orange-400">
                      {currentPhase.metrics.teamSize}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-300">Eficiencia IA</span>
                    <span className="text-2xl font-bold text-purple-400">
                      {currentPhase.metrics.efficiency}%
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-300">ROI</span>
                    <span className="text-2xl font-bold text-yellow-400">
                      {currentPhase.metrics.roi}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className={`bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50`}>
                <h4 className="text-lg font-semibold text-white mb-4">Progreso del Plan</h4>
                
                <div className="space-y-3">
                  {phases.map((phase, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        index <= selectedPhase ? `bg-gradient-to-r ${phase.color}` : 'bg-zinc-600'
                      }`}></div>
                      <span className={`text-sm ${
                        index <= selectedPhase ? 'text-white' : 'text-zinc-500'
                      }`}>
                        {phase.title.split(':')[0]}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4">
                  <div className="bg-zinc-700 rounded-full h-2">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${currentPhase.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${((selectedPhase + 1) / phases.length) * 100}%` }}
                      transition={{ duration: 1 }}
                    ></motion.div>
                  </div>
                  <div className="text-center mt-2 text-zinc-400 text-sm">
                    {Math.round(((selectedPhase + 1) / phases.length) * 100)}% Complete
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Acceleration Simulator */}
        <motion.div
          className="bg-gradient-to-r from-orange-600/20 to-purple-600/20 rounded-2xl p-8 border border-orange-600/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            <Zap className="w-7 h-7 inline mr-2 text-orange-400" />
            Simulador de Aceleración
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-800/50 rounded-xl p-4 text-center">
              <div className="text-orange-400 font-bold text-lg mb-2">+50% Inversión</div>
              <div className="text-zinc-300 text-sm">→ Acelera 6 meses</div>
            </div>
            
            <div className="bg-zinc-800/50 rounded-xl p-4 text-center">
              <div className="text-blue-400 font-bold text-lg mb-2">+30% Personal</div>
              <div className="text-zinc-300 text-sm">→ +15% eficiencia</div>
            </div>
            
            <div className="bg-zinc-800/50 rounded-xl p-4 text-center">
              <div className="text-green-400 font-bold text-lg mb-2">Tech Premium</div>
              <div className="text-zinc-300 text-sm">→ +8% precisión</div>
            </div>
            
            <div className="bg-zinc-800/50 rounded-xl p-4 text-center">
              <div className="text-purple-400 font-bold text-lg mb-2">LATAM Año 2</div>
              <div className="text-zinc-300 text-sm">→ 300% más TAM</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Este <span className="text-purple-400">Roadmap</span> es Tu 
            <br /><span className="text-green-400">Blueprint de Riqueza</span>
          </h3>
          <p className="text-zinc-300 mb-8 max-w-3xl mx-auto text-lg">
            Cada fase ha sido calculada, validada y probada. No es especulación - 
            es el plan exacto que seguiremos para multiplicar tu inversión.
          </p>
          
          <motion.button
            onClick={() => document.getElementById('inversion')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-500 hover:to-green-500 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Rocket className="w-6 h-6 inline mr-2" />
            Iniciar Mi Roadmap
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}