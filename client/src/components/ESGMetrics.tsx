import { motion } from "framer-motion";
import { useState } from "react";
import { Leaf, Heart, Shield, Users, Factory, Zap, Award, TrendingUp } from "lucide-react";
import CountUp from "react-countup";

export default function ESGMetrics() {
  const [activeCategory, setActiveCategory] = useState("environmental");

  const esgData = {
    environmental: {
      title: "Environmental Impact",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600",
      metrics: [
        {
          title: "CO2 Ahorrado Anualmente",
          value: 2840,
          unit: "tons CO2",
          description: "Equivalente a 610 autos menos en circulación por comuna",
          icon: <Factory className="w-6 h-6" />
        },
        {
          title: "Reducción Tiempo Espera",
          value: 12,
          unit: "% menos",
          description: "Optimización de tráfico reduce emisiones por congestión",
          icon: <TrendingUp className="w-6 h-6" />
        },
        {
          title: "Menos Ambulancias",
          value: 34,
          unit: "% reducción",
          description: "67% menos accidentes = 34% menos servicios emergencia",
          icon: <Zap className="w-6 h-6" />
        }
      ]
    },
    social: {
      title: "Social Impact",
      icon: <Heart className="w-8 h-8" />,
      color: "from-blue-600 to-cyan-600",
      metrics: [
        {
          title: "Vidas Salvadas",
          value: 23,
          unit: "vidas/año",
          description: "Estimado por comuna basado en reducción de accidentes",
          icon: <Heart className="w-6 h-6" />
        },
        {
          title: "Accidentes Evitados",
          value: 1890,
          unit: "accidentes/año",
          description: "Prevención efectiva en cruces monitoreados",
          icon: <Shield className="w-6 h-6" />
        },
        {
          title: "Ahorro Salud Pública",
          value: 4.2,
          unit: "B$ CLP",
          description: "Menos gastos hospitalarios por accidentes evitados",
          icon: <TrendingUp className="w-6 h-6" />
        },
        {
          title: "Empleos Creados",
          value: 527,
          unit: "empleos",
          description: "187 directos + 340 indirectos en cadena de valor",
          icon: <Users className="w-6 h-6" />
        }
      ]
    },
    governance: {
      title: "Governance Excellence",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-600 to-indigo-600",
      metrics: [
        {
          title: "Transparencia Municipal",
          value: 100,
          unit: "% reportes",
          description: "Reportes públicos mensuales por comuna",
          icon: <Award className="w-6 h-6" />
        },
        {
          title: "Compliance Rate",
          value: 100,
          unit: "% normativo",
          description: "Cumplimiento total de regulaciones",
          icon: <Shield className="w-6 h-6" />
        },
        {
          title: "AI Fairness",
          value: 94,
          unit: "% explicable",
          description: "Transparencia en decisiones algorítmicas",
          icon: <Zap className="w-6 h-6" />
        }
      ]
    }
  };

  const boardData = {
    composition: {
      independent: 60,
      tech: 2,
      finance: 2,
      government: 1,
      legal: 1,
      latam: 1
    },
    incentives: {
      managementEquity: 15,
      performanceBonuses: "Municipal satisfaction + ROI",
      clawback: "3 años restatements"
    }
  };

  const categories = [
    { id: "environmental", label: "Environmental", icon: <Leaf className="w-5 h-5" /> },
    { id: "social", label: "Social", icon: <Heart className="w-5 h-5" /> },
    { id: "governance", label: "Governance", icon: <Shield className="w-5 h-5" /> }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-600/30 rounded-full mb-8">
            <Leaf className="w-5 h-5 text-green-400 mr-3" />
            <span className="text-green-300 font-semibold">ESG & SOSTENIBILIDAD</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Impacto <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Medible</span>
            <br />Más Allá del <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">ROI</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
            CRUCES AI no solo genera retornos financieros excepcionales. 
            Crea valor social, ambiental y de governance que beneficia a toda la sociedad.
          </p>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-2xl p-6 border border-green-600/30 text-center">
            <Leaf className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-green-400 mb-1">
              <CountUp end={2840} duration={2} />
            </div>
            <div className="text-zinc-300 text-sm">Tons CO2 Ahorradas</div>
          </div>

          <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-2xl p-6 border border-red-600/30 text-center">
            <Heart className="w-8 h-8 text-red-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-red-400 mb-1">
              <CountUp end={23} duration={2} />
            </div>
            <div className="text-zinc-300 text-sm">Vidas Salvadas/Año</div>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl p-6 border border-blue-600/30 text-center">
            <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-400 mb-1">
              <CountUp end={527} duration={2} />
            </div>
            <div className="text-zinc-300 text-sm">Empleos Creados</div>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl p-6 border border-purple-600/30 text-center">
            <Shield className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-purple-400 mb-1">
              <CountUp end={100} duration={2} />%
            </div>
            <div className="text-zinc-300 text-sm">Compliance Rate</div>
          </div>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${esgData[category.id as keyof typeof esgData].color} text-white shadow-2xl`
                  : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 hover:text-white border border-zinc-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Category Content */}
        <motion.div
          className="bg-zinc-800/30 backdrop-blur-sm rounded-3xl p-8 border border-zinc-700/50"
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {(() => {
            const data = esgData[activeCategory as keyof typeof esgData];
            return (
              <div className="space-y-8">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 bg-gradient-to-r ${data.color} rounded-xl text-white`}>
                    {data.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{data.title}</h3>
                    <p className="text-zinc-400">
                      {activeCategory === "environmental" && "Reducción de huella de carbono y optimización de recursos"}
                      {activeCategory === "social" && "Impacto positivo en seguridad ciudadana y bienestar social"}
                      {activeCategory === "governance" && "Transparencia, ética y cumplimiento normativo"}
                    </p>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {data.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      className={`bg-gradient-to-br ${data.color}/10 rounded-2xl p-6 border border-zinc-600/30`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 bg-gradient-to-r ${data.color} rounded-xl text-white`}>
                          {metric.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white mb-2">{metric.title}</h4>
                          <div className="flex items-baseline gap-2 mb-3">
                            <span className="text-4xl font-bold text-white">
                              <CountUp end={metric.value} duration={2} decimals={metric.value % 1 !== 0 ? 1 : 0} />
                            </span>
                            <span className="text-zinc-400 font-semibold">{metric.unit}</span>
                          </div>
                          <p className="text-zinc-300 text-sm">{metric.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })()}
        </motion.div>

        {/* Board Governance */}
        {activeCategory === "governance" && (
          <motion.div
            className="mt-12 grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-2xl p-8 border border-purple-600/30">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Board Composition</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Directores Independientes:</span>
                  <span className="text-purple-400 font-bold">{boardData.composition.independent}%</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <div className="text-white font-semibold">{boardData.composition.tech}</div>
                    <div className="text-zinc-400">Tech Experts</div>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <div className="text-white font-semibold">{boardData.composition.finance}</div>
                    <div className="text-zinc-400">Finance Experts</div>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <div className="text-white font-semibold">{boardData.composition.government}</div>
                    <div className="text-zinc-400">Gov Expert</div>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <div className="text-white font-semibold">{boardData.composition.legal}</div>
                    <div className="text-zinc-400">Legal Expert</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 rounded-2xl p-8 border border-indigo-600/30">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-indigo-400" />
                <h3 className="text-2xl font-bold text-white">Incentive Structure</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Management Equity:</span>
                  <span className="text-indigo-400 font-bold">{boardData.incentives.managementEquity}%</span>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-3">
                  <div className="text-white font-semibold mb-1">Performance Bonuses</div>
                  <div className="text-zinc-400 text-sm">{boardData.incentives.performanceBonuses}</div>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-3">
                  <div className="text-white font-semibold mb-1">Clawback Provisions</div>
                  <div className="text-zinc-400 text-sm">{boardData.incentives.clawback}</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-purple-600/20 rounded-3xl p-8 border border-green-600/30 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-white mb-4">
            Invierte en el <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Futuro</span>
            <br />Que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Beneficia a Todos</span>
          </h3>
          <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto">
            CRUCES AI demuestra que la rentabilidad excepcional y el impacto social positivo 
            no son mutuamente excluyentes. Es la definición de inversión con propósito.
          </p>
          
          <motion.button
            onClick={() => document.getElementById('inversion')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 hover:from-green-500 hover:via-blue-500 hover:to-purple-500 text-white px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Award className="w-6 h-6 inline mr-3" />
            Únete a la Revolución Sostenible
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}