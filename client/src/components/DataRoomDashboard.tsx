import { motion } from "framer-motion";
import { useState } from "react";
import { TrendingUp, DollarSign, Target, AlertTriangle, BarChart3, PieChart, Activity, Shield, Globe, Users, Zap, Award } from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Cell } from "recharts";
import CountUp from "react-countup";

export default function DataRoomDashboard() {
  const [activeTab, setActiveTab] = useState("cohorts");

  // Datos de cohorts por municipalidad
  const cohortData = [
    { mes: 1, taltal: 85.75, sierraGorda: 42.38, eficiencia: 87 },
    { mes: 3, taltal: 156.2, sierraGorda: 48.5, eficiencia: 90 },
    { mes: 6, taltal: 236.16, sierraGorda: 58.52, eficiencia: 93 },
    { mes: 9, taltal: 267.8, sierraGorda: 65.1, eficiencia: 95 },
    { mes: 12, taltal: 291.61, sierraGorda: 72.65, eficiencia: 96 }
  ];

  // Análisis de márgenes por segmento
  const marginData = [
    { segmento: "Pequeña <50K", bruto: 73, neto: 48, poblacion: 35000 },
    { segmento: "Mediana 50K-150K", bruto: 78, neto: 52, poblacion: 100000 },
    { segmento: "Grande >150K", bruto: 82, neto: 57, poblacion: 250000 }
  ];

  // Stress testing scenarios
  const stressScenarios = [
    { scenario: "Base", roi: 55, van: 1301, probabilidad: 100, color: "#10B981" },
    { scenario: "Regulación Adversa", roi: 38, van: 920, probabilidad: 15, color: "#F59E0B" },
    { scenario: "Competencia Agresiva", roi: 42, van: 1050, probabilidad: 25, color: "#EF4444" },
    { scenario: "Recesión Económica", roi: 31, van: 740, probabilidad: 30, color: "#DC2626" }
  ];

  // Unit economics por cruce
  const unitEconomics = {
    capexInicial: 8.3,
    ingresoPromedioDia: 3.89,
    costoOperacionDia: 1.17,
    margenBrutoDiario: 2.72,
    paybackDias: 1247,
    npvPorCruce: 28.5,
    irrPorCruce: 31
  };

  // CLV por segmento
  const clvData = [
    { name: "Tier 1 >200K", clv: 8200, payback: 18, churn: 3 },
    { name: "Tier 2 50K-200K", clv: 4100, payback: 14, churn: 5 },
    { name: "Tier 3 <50K", clv: 1850, payback: 12, churn: 8 }
  ];

  // Análisis competitivo
  const competitiveData = [
    { player: "TrafficTech Global", marketShare: 23, pricing: 115, tech: 78, satisfaction: 6.8, churn: 18 },
    { player: "SmartCity Solutions", marketShare: 31, pricing: 92, tech: 71, satisfaction: 7.2, churn: 22 },
    { player: "CRUCES AI", marketShare: 0, pricing: 100, tech: 100, satisfaction: 9.1, churn: 5 }
  ];

  const tabs = [
    { id: "cohorts", label: "Cohort Analysis", icon: <BarChart3 className="w-5 h-5" /> },
    { id: "margins", label: "Margin Analysis", icon: <PieChart className="w-5 h-5" /> },
    { id: "stress", label: "Stress Testing", icon: <AlertTriangle className="w-5 h-5" /> },
    { id: "unit", label: "Unit Economics", icon: <Target className="w-5 h-5" /> },
    { id: "clv", label: "Customer LTV", icon: <TrendingUp className="w-5 h-5" /> },
    { id: "competitive", label: "Competitive Intel", icon: <Activity className="w-5 h-5" /> }
  ];

  return (
    <section className="py-20 bg-zinc-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-zinc-700/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
          <div className="inline-flex items-center px-6 py-3 bg-orange-600/20 border border-orange-600/30 rounded-full mb-8">
            <Shield className="w-5 h-5 text-orange-400 mr-3" />
            <span className="text-orange-300 font-semibold">DUE DILIGENCE DATA ROOM</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Análisis <span className="text-orange-400">Cuantitativo</span>
            <br />Para Inversionistas <span className="text-orange-400">Sofisticados</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
            Métricas avanzadas, análisis de cohorts, stress testing y due diligence completa 
            con 10,000 simulaciones Monte Carlo y benchmarking competitivo cuantificado.
          </p>
        </motion.div>

        {/* Key Metrics Overview */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-orange-600/20 rounded-2xl p-6 border border-orange-600/30 text-center">
            <Award className="w-8 h-8 text-orange-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-orange-400 mb-1">
              <CountUp end={92} duration={2} />%
            </div>
            <div className="text-zinc-300 text-sm">Renovación Contratos</div>
          </div>

          <div className="bg-zinc-600/20 rounded-2xl p-6 border border-zinc-600/30 text-center">
            <TrendingUp className="w-8 h-8 text-white mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              <CountUp end={34} duration={2} />%
            </div>
            <div className="text-zinc-300 text-sm">Expansión Revenue</div>
          </div>

          <div className="bg-orange-600/20 rounded-2xl p-6 border border-orange-600/30 text-center">
            <Target className="w-8 h-8 text-orange-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-orange-400 mb-1">
              <CountUp end={14.2} decimals={1} duration={2} />m
            </div>
            <div className="text-zinc-300 text-sm">Time to Break Even</div>
          </div>

          <div className="bg-orange-600/20 rounded-2xl p-6 border border-orange-600/30 text-center">
            <Users className="w-8 h-8 text-orange-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-orange-400 mb-1">
              <CountUp end={2.8} decimals={1} duration={2} />
            </div>
            <div className="text-zinc-300 text-sm">Referrals por Comuna</div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-orange-600 text-white shadow-2xl'
                  : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 hover:text-white border border-zinc-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Content Panels */}
        <motion.div
          className="bg-zinc-800/30 backdrop-blur-sm rounded-3xl p-8 border border-zinc-700/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Cohort Analysis */}
          {activeTab === "cohorts" && (
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-600 rounded-xl">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Análisis de Cohorts por Municipalidad</h3>
                  <p className="text-zinc-400">Evolución mes a mes de ingresos y eficiencia operacional</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-zinc-900/50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Revenue Evolution (M$ CLP)</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={cohortData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="mes" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '12px'
                        }}
                      />
                      <Line type="monotone" dataKey="taltal" stroke="#F97316" strokeWidth={3} name="Taltal" />
                      <Line type="monotone" dataKey="sierraGorda" stroke="#6B7280" strokeWidth={3} name="Sierra Gorda" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-6">
                  <div className="bg-orange-600/20 rounded-2xl p-6 border border-orange-600/30">
                    <h4 className="text-xl font-bold text-white mb-4">Taltal Performance</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Crecimiento vs Baseline:</span>
                        <span className="text-orange-400 font-bold">+252%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Satisfacción:</span>
                        <span className="text-orange-400 font-bold">9.2/10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Renovación:</span>
                        <span className="text-orange-400 font-bold">Confirmada 3 años</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl p-6 border border-blue-600/30">
                    <h4 className="text-xl font-bold text-white mb-4">Sierra Gorda Performance</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Crecimiento vs Baseline:</span>
                        <span className="text-blue-400 font-bold">+48%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Satisfacción:</span>
                        <span className="text-blue-400 font-bold">8.7/10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Renovación:</span>
                        <span className="text-yellow-400 font-bold">En negociación</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Margin Analysis */}
          {activeTab === "margins" && (
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                  <PieChart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Análisis de Márgenes por Segmento</h3>
                  <p className="text-zinc-400">Rentabilidad diferenciada por tamaño de municipalidad</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-zinc-900/50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Márgenes por Segmento (%)</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={marginData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="segmento" stroke="#9CA3AF" angle={-45} textAnchor="end" height={100} />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '12px'
                        }}
                      />
                      <Bar dataKey="bruto" fill="#8B5CF6" name="Margen Bruto" />
                      <Bar dataKey="neto" fill="#10B981" name="Margen Neto" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-indigo-600/20 to-indigo-800/20 rounded-2xl p-6 border border-indigo-600/30">
                    <h4 className="text-xl font-bold text-white mb-4">Evolución de Márgenes</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Año 1 - Margen Operacional:</span>
                        <span className="text-white font-bold">49%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Año 2 - Margen Operacional:</span>
                        <span className="text-blue-400 font-bold">54%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Año 3 - Margen Operacional:</span>
                        <span className="text-green-400 font-bold">59%</span>
                      </div>
                      <div className="flex justify-between border-t border-zinc-600 pt-3">
                        <span className="text-zinc-400">Objetivo Estado Estable:</span>
                        <span className="text-purple-400 font-bold">65%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 rounded-2xl p-6 border border-emerald-600/30">
                    <h4 className="text-xl font-bold text-white mb-4">Insights Clave</h4>
                    <ul className="space-y-2 text-zinc-300">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                        <span>Escalabilidad positiva: +9% margen en comunas grandes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                        <span>Eficiencia operacional mejora con el tiempo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                        <span>Target 65% margin alcanzable en año 4</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Stress Testing */}
          {activeTab === "stress" && (
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Stress Testing & Monte Carlo</h3>
                  <p className="text-zinc-400">10,000 simulaciones con escenarios adversos</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-zinc-900/50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Escenarios de Riesgo</h4>
                  <div className="space-y-4">
                    {stressScenarios.map((scenario, index) => (
                      <div key={index} className="bg-zinc-800/50 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h5 className="font-semibold text-white">{scenario.scenario}</h5>
                          <span className="text-sm text-zinc-400">{scenario.probabilidad}% prob</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-zinc-400">ROI:</span>
                            <span className="ml-2 font-bold" style={{ color: scenario.color }}>
                              {scenario.roi}%
                            </span>
                          </div>
                          <div>
                            <span className="text-zinc-400">VAN:</span>
                            <span className="ml-2 font-bold" style={{ color: scenario.color }}>
                              ${scenario.van}M
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl p-6 border border-blue-600/30">
                    <h4 className="text-xl font-bold text-white mb-4">Monte Carlo Results</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">VAN 90th percentile:</span>
                        <span className="text-green-400 font-bold">$1,850M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">VAN 10th percentile:</span>
                        <span className="text-yellow-400 font-bold">$650M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Probabilidad pérdida:</span>
                        <span className="text-red-400 font-bold">8%</span>
                      </div>
                      <div className="flex justify-between border-t border-zinc-600 pt-3">
                        <span className="text-zinc-400">Valor esperado:</span>
                        <span className="text-blue-400 font-bold">$1,245M</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl p-6 border border-purple-600/30">
                    <h4 className="text-xl font-bold text-white mb-4">Mitigación de Riesgos</h4>
                    <ul className="space-y-2 text-zinc-300 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                        <span>Contratos largo plazo + switching costs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                        <span>Diversificación servicios complementarios</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                        <span>Lobby regulatorio + compliance proactivo</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Unit Economics */}
          {activeTab === "unit" && (
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Unit Economics por Cruce</h3>
                  <p className="text-zinc-400">Métricas granulares de rentabilidad individual</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl p-6 border border-blue-600/30">
                  <h4 className="text-lg font-bold text-white mb-4">Setup Inicial</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">CAPEX Inicial:</span>
                      <span className="text-blue-400 font-bold">${unitEconomics.capexInicial}M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Tiempo Instalación:</span>
                      <span className="text-white font-bold">7 días</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Costo Oportunidad:</span>
                      <span className="text-yellow-400 font-bold">$450K</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-2xl p-6 border border-green-600/30">
                  <h4 className="text-lg font-bold text-white mb-4">Operación Diaria</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Ingreso/Día:</span>
                      <span className="text-green-400 font-bold">${unitEconomics.ingresoPromedioDia}M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Costo Operación:</span>
                      <span className="text-red-400 font-bold">${unitEconomics.costoOperacionDia}M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Margen Bruto:</span>
                      <span className="text-green-400 font-bold">70%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl p-6 border border-purple-600/30">
                  <h4 className="text-lg font-bold text-white mb-4">Retorno</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Payback:</span>
                      <span className="text-purple-400 font-bold">{Math.round(unitEconomics.paybackDias/365*10)/10} años</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">NPV por Cruce:</span>
                      <span className="text-green-400 font-bold">${unitEconomics.npvPorCruce}M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">IRR:</span>
                      <span className="text-purple-400 font-bold">{unitEconomics.irrPorCruce}%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/50 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white mb-6">Evolución Revenue Diario por Cruce</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-zinc-800/50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-400">38.5</div>
                    <div className="text-zinc-400 text-sm">Multas/Día</div>
                  </div>
                  <div className="text-center p-4 bg-zinc-800/50 rounded-xl">
                    <div className="text-2xl font-bold text-green-400">$3.89M</div>
                    <div className="text-zinc-400 text-sm">Revenue/Día</div>
                  </div>
                  <div className="text-center p-4 bg-zinc-800/50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-400">$2.72M</div>
                    <div className="text-zinc-400 text-sm">Margen/Día</div>
                  </div>
                  <div className="text-center p-4 bg-zinc-800/50 rounded-xl">
                    <div className="text-2xl font-bold text-orange-400">0.3%</div>
                    <div className="text-zinc-400 text-sm">Downtime</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Customer LTV */}
          {activeTab === "clv" && (
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Customer Lifetime Value</h3>
                  <p className="text-zinc-400">Valor por municipalidad segmentado por tamaño</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-zinc-900/50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">CLV por Segmento (M$ CLP)</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={clvData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9CA3AF" angle={-45} textAnchor="end" height={100} />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '12px'
                        }}
                      />
                      <Bar dataKey="clv" fill="#6366F1" name="CLV" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-4">
                  {clvData.map((tier, index) => (
                    <div key={index} className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl p-6 border border-indigo-600/30">
                      <h4 className="text-lg font-bold text-white mb-3">{tier.name}</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-indigo-400">${tier.clv}M</div>
                          <div className="text-zinc-400 text-sm">CLV</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-400">{tier.payback}m</div>
                          <div className="text-zinc-400 text-sm">Payback</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-400">{tier.churn}%</div>
                          <div className="text-zinc-400 text-sm">Churn</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 rounded-2xl p-6 border border-emerald-600/30">
                  <h4 className="text-xl font-bold text-white mb-4">Expansion Revenue</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Upsell Rate:</span>
                      <span className="text-emerald-400 font-bold">67%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Cross-sell Promedio:</span>
                      <span className="text-emerald-400 font-bold">1.8 servicios</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">CLV Lift:</span>
                      <span className="text-emerald-400 font-bold">+34%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl p-6 border border-blue-600/30">
                  <h4 className="text-xl font-bold text-white mb-4">Portfolio Insights</h4>
                  <ul className="space-y-2 text-zinc-300 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <span>Tier 1 municipalities deliver 4.4x CLV vs Tier 3</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <span>Lower churn in smaller cities due to fewer alternatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <span>Expansion revenue critical for premium CLV achievement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Competitive Intelligence */}
          {activeTab === "competitive" && (
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Competitive Intelligence</h3>
                  <p className="text-zinc-400">Benchmarking cuantificado vs competencia establecida</p>
                </div>
              </div>

              <div className="bg-zinc-900/50 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white mb-6">Comparison Matrix</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 px-4 text-zinc-400">Player</th>
                        <th className="text-center py-3 px-4 text-zinc-400">Market Share</th>
                        <th className="text-center py-3 px-4 text-zinc-400">Pricing Index</th>
                        <th className="text-center py-3 px-4 text-zinc-400">Tech Score</th>
                        <th className="text-center py-3 px-4 text-zinc-400">Satisfaction</th>
                        <th className="text-center py-3 px-4 text-zinc-400">Churn Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {competitiveData.map((player, index) => (
                        <tr key={index} className="border-b border-zinc-800">
                          <td className="py-4 px-4">
                            <span className={`font-semibold ${player.player === 'CRUCES AI' ? 'text-green-400' : 'text-white'}`}>
                              {player.player}
                            </span>
                          </td>
                          <td className="text-center py-4 px-4">
                            <span className={`font-bold ${player.marketShare === 0 ? 'text-yellow-400' : 'text-white'}`}>
                              {player.marketShare}%
                            </span>
                          </td>
                          <td className="text-center py-4 px-4">
                            <span className={`font-bold ${
                              player.pricing > 100 ? 'text-red-400' : 
                              player.pricing < 100 ? 'text-green-400' : 'text-white'
                            }`}>
                              {player.pricing}
                            </span>
                          </td>
                          <td className="text-center py-4 px-4">
                            <span className={`font-bold ${
                              player.tech >= 90 ? 'text-green-400' : 
                              player.tech >= 75 ? 'text-yellow-400' : 'text-red-400'
                            }`}>
                              {player.tech}
                            </span>
                          </td>
                          <td className="text-center py-4 px-4">
                            <span className={`font-bold ${
                              player.satisfaction >= 8 ? 'text-green-400' : 
                              player.satisfaction >= 7 ? 'text-yellow-400' : 'text-red-400'
                            }`}>
                              {player.satisfaction}
                            </span>
                          </td>
                          <td className="text-center py-4 px-4">
                            <span className={`font-bold ${
                              player.churn <= 10 ? 'text-green-400' : 
                              player.churn <= 20 ? 'text-yellow-400' : 'text-red-400'
                            }`}>
                              {player.churn}%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-2xl p-6 border border-green-600/30">
                  <h4 className="text-lg font-bold text-white mb-4">Ventajas Tecnológicas</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Accuracy IA:</span>
                      <span className="text-green-400 font-bold">99.7% vs 94.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Velocidad:</span>
                      <span className="text-green-400 font-bold">15ms vs 45ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Falsos Positivos:</span>
                      <span className="text-green-400 font-bold">0.3% vs 2.1%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl p-6 border border-blue-600/30">
                  <h4 className="text-lg font-bold text-white mb-4">Ventajas Comerciales</h4>
                  <ul className="space-y-2 text-zinc-300 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5"></div>
                      <span>Revenue share vs CAPEX puro</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5"></div>
                      <span>90 días vs 180 días implementación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5"></div>
                      <span>Soporte 24/7</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl p-6 border border-purple-600/30">
                  <h4 className="text-lg font-bold text-white mb-4">Ventajas Financieras</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Payback Cliente:</span>
                      <span className="text-purple-400 font-bold">8m vs 18m</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">CAPEX Inicial:</span>
                      <span className="text-purple-400 font-bold">$0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">SLA Uptime:</span>
                      <span className="text-purple-400 font-bold">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl p-8 border border-blue-600/30 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Data-Driven Decision Making
            </span>
          </h3>
          <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto">
            10,000 simulaciones Monte Carlo, análisis de cohorts reales, y benchmarking competitivo cuantificado. 
            La evidencia es irrefutable: CRUCES AI representa la oportunidad de inversión más sólida del sector.
          </p>
          
          <motion.button
            onClick={() => document.getElementById('inversion')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-6 h-6 inline mr-3" />
            Acceder al Deal Flow Exclusivo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}