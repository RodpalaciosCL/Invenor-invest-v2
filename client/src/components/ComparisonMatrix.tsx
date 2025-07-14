import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle, XCircle, AlertTriangle, Clock, DollarSign, Eye, Users, Zap, Target, TrendingUp } from "lucide-react";

export default function ComparisonMatrix() {
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  const comparisonData = [
    {
      category: "Eficiencia Operacional",
      icon: <Target className="w-6 h-6" />,
      metrics: [
        {
          name: "Tasa de Detección",
          tradicional: { value: "22%", status: "bad", detail: "Inspector humano limitado por horarios y fatiga" },
          cruces: { value: "95%", status: "excellent", detail: "IA 24/7 con algoritmos optimizados por machine learning" }
        },
        {
          name: "Horas de Cobertura",
          tradicional: { value: "8h/día", status: "bad", detail: "Solo durante turno laboral" },
          cruces: { value: "24h/día", status: "excellent", detail: "Monitoreo continuo automatizado" }
        },
        {
          name: "Tiempo de Respuesta",
          tradicional: { value: "48-72h", status: "bad", detail: "Proceso manual de verificación y documentación" },
          cruces: { value: "Tiempo real", status: "excellent", detail: "Detección instantánea y reportes automáticos" }
        },
        {
          name: "Precisión de Evidencia",
          tradicional: { value: "67%", status: "poor", detail: "Errores humanos y documentación incompleta" },
          cruces: { value: "99.2%", status: "excellent", detail: "Evidencia digital trazable y verificable" }
        }
      ]
    },
    {
      category: "Costos y ROI",
      icon: <DollarSign className="w-6 h-6" />,
      metrics: [
        {
          name: "Costo Mensual",
          tradicional: { value: "$4.0M", status: "bad", detail: "Salarios, beneficios, equipamiento, vehículos" },
          cruces: { value: "$800K", status: "excellent", detail: "OPEX tecnológico optimizado, sin personal dedicado" }
        },
        {
          name: "ROI Anual",
          tradicional: { value: "8%", status: "poor", detail: "Baja eficiencia limita recaudación" },
          cruces: { value: "55%", status: "excellent", detail: "Alta eficiencia maximiza revenue municipal" }
        },
        {
          name: "Payback Period",
          tradicional: { value: "36+ meses", status: "bad", detail: "Alto CAPEX inicial, baja eficiencia" },
          cruces: { value: "15 meses", status: "excellent", detail: "Inversión recuperada rápidamente" }
        },
        {
          name: "Ahorro vs Baseline",
          tradicional: { value: "0%", status: "baseline", detail: "Método actual de referencia" },
          cruces: { value: "320%", status: "excellent", detail: "Incremento neto vs método tradicional" }
        }
      ]
    },
    {
      category: "Escalabilidad",
      icon: <TrendingUp className="w-6 h-6" />,
      metrics: [
        {
          name: "Cruces Simultáneos",
          tradicional: { value: "1-2", status: "bad", detail: "Limitado por disponibilidad de inspectores" },
          cruces: { value: "50+", status: "excellent", detail: "Escalabilidad ilimitada por software" }
        },
        {
          name: "Expansión Territorial",
          tradicional: { value: "Lineal", status: "poor", detail: "Requiere contratar personal por cada zona" },
          cruces: { value: "Exponencial", status: "excellent", detail: "Deployment remoto sin recursos adicionales" }
        },
        {
          name: "Tiempo de Implementación",
          tradicional: { value: "6-12 meses", status: "bad", detail: "Reclutamiento, capacitación, logística" },
          cruces: { value: "30 días", status: "excellent", detail: "Instalación y configuración automatizada" }
        },
        {
          name: "Adaptabilidad Tecnológica",
          tradicional: { value: "Baja", status: "poor", detail: "Resistencia al cambio y capacitación constante" },
          cruces: { value: "Alta", status: "excellent", detail: "Updates automáticos y mejora continua" }
        }
      ]
    },
    {
      category: "Impacto Social",
      icon: <Users className="w-6 h-6" />,
      metrics: [
        {
          name: "Reducción de Accidentes",
          tradicional: { value: "15%", status: "poor", detail: "Cobertura limitada permite infracciones" },
          cruces: { value: "67%", status: "excellent", detail: "Monitoreo continuo reduce riesgo significativamente" }
        },
        {
          name: "Transparencia Municipal",
          tradicional: { value: "Baja", status: "bad", detail: "Procesos manuales poco auditables" },
          cruces: { value: "Total", status: "excellent", detail: "Dashboard público y reportes automáticos" }
        },
        {
          name: "Satisfacción Ciudadana",
          tradicional: { value: "6.2/10", status: "poor", detail: "Percepción de ineficiencia municipal" },
          cruces: { value: "8.9/10", status: "excellent", detail: "Mejora visible en seguridad y transparencia" }
        },
        {
          name: "Recursos Liberados",
          tradicional: { value: "0%", status: "baseline", detail: "Personal dedicado a esta función" },
          cruces: { value: "90%", status: "excellent", detail: "Personal reasignado a otras prioridades" }
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "text-green-400 bg-green-500/20";
      case "good": return "text-blue-400 bg-blue-500/20";
      case "baseline": return "text-yellow-400 bg-yellow-500/20";
      case "poor": return "text-orange-400 bg-orange-500/20";
      case "bad": return "text-red-400 bg-red-500/20";
      default: return "text-zinc-400 bg-zinc-500/20";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent": return <CheckCircle className="w-5 h-5 text-green-400" />;
      case "good": return <CheckCircle className="w-5 h-5 text-blue-400" />;
      case "baseline": return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case "poor": return <AlertTriangle className="w-5 h-5 text-orange-400" />;
      case "bad": return <XCircle className="w-5 h-5 text-red-400" />;
      default: return <AlertTriangle className="w-5 h-5 text-zinc-400" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            <Eye className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-300 font-medium text-sm">Análisis Comparativo Detallado</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-red-400">Métodos Tradicionales</span> vs 
            <br /><span className="text-green-400">CRUCES AI</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Comparación exhaustiva basada en datos reales de implementaciones. 
            Cada métrica validada por casos de uso en municipios chilenos.
          </p>
        </motion.div>

        {/* Comparison Matrix */}
        <div className="space-y-12">
          {comparisonData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-zinc-700 rounded-xl text-orange-400">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>

              {/* Metrics Grid */}
              <div className="space-y-6">
                {/* Header Row */}
                <div className="grid grid-cols-4 gap-4 pb-4 border-b border-zinc-700">
                  <div className="text-zinc-400 font-semibold">Métrica</div>
                  <div className="text-center">
                    <div className="text-red-400 font-bold">Método Tradicional</div>
                    <div className="text-zinc-500 text-sm">Inspector Humano</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 font-bold">CRUCES AI</div>
                    <div className="text-zinc-500 text-sm">Tecnología IA</div>
                  </div>
                  <div className="text-center text-zinc-400 font-semibold">Diferencia</div>
                </div>

                {/* Metrics Rows */}
                {category.metrics.map((metric, metricIndex) => (
                  <motion.div
                    key={metricIndex}
                    className={`grid grid-cols-4 gap-4 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                      selectedMetric === `${categoryIndex}-${metricIndex}`
                        ? 'bg-zinc-700/50 border border-zinc-600'
                        : 'hover:bg-zinc-700/30'
                    }`}
                    onClick={() => setSelectedMetric(
                      selectedMetric === `${categoryIndex}-${metricIndex}` 
                        ? null 
                        : `${categoryIndex}-${metricIndex}`
                    )}
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: metricIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Metric Name */}
                    <div className="flex items-center">
                      <span className="text-white font-semibold">{metric.name}</span>
                    </div>

                    {/* Traditional Method */}
                    <div className="text-center">
                      <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-full ${getStatusColor(metric.tradicional.status)}`}>
                        {getStatusIcon(metric.tradicional.status)}
                        <span className="font-bold">{metric.tradicional.value}</span>
                      </div>
                    </div>

                    {/* CRUCES AI */}
                    <div className="text-center">
                      <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-full ${getStatusColor(metric.cruces.status)}`}>
                        {getStatusIcon(metric.cruces.status)}
                        <span className="font-bold">{metric.cruces.value}</span>
                      </div>
                    </div>

                    {/* Improvement */}
                    <div className="text-center">
                      {metric.name === "Costo Mensual" ? (
                        <div className="text-green-400 font-bold">-80% costo</div>
                      ) : metric.name === "Tasa de Detección" ? (
                        <div className="text-green-400 font-bold">+330% mejor</div>
                      ) : metric.name === "ROI Anual" ? (
                        <div className="text-green-400 font-bold">+588% mejor</div>
                      ) : (
                        <div className="text-green-400 font-bold">Superiior</div>
                      )}
                    </div>

                    {/* Expanded Details */}
                    {selectedMetric === `${categoryIndex}-${metricIndex}` && (
                      <motion.div
                        className="col-span-4 mt-4 pt-4 border-t border-zinc-600"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-red-900/20 rounded-lg p-4 border border-red-600/30">
                            <h5 className="text-red-400 font-semibold mb-2">Método Tradicional</h5>
                            <p className="text-zinc-300 text-sm">{metric.tradicional.detail}</p>
                          </div>
                          <div className="bg-green-900/20 rounded-lg p-4 border border-green-600/30">
                            <h5 className="text-green-400 font-semibold mb-2">CRUCES AI</h5>
                            <p className="text-zinc-300 text-sm">{metric.cruces.detail}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Cards */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-2xl p-6 border border-green-600/30">
            <div className="text-center">
              <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-green-400 mb-2">4.3x</div>
              <div className="text-white font-semibold mb-2">Más Eficiente</div>
              <div className="text-zinc-300 text-sm">
                95% vs 22% tasa de detección
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl p-6 border border-blue-600/30">
            <div className="text-center">
              <DollarSign className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-400 mb-2">80%</div>
              <div className="text-white font-semibold mb-2">Menos Costo</div>
              <div className="text-zinc-300 text-sm">
                $800K vs $4M mensual
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl p-6 border border-purple-600/30">
            <div className="text-center">
              <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-white font-semibold mb-2">Disponibilidad</div>
              <div className="text-zinc-300 text-sm">
                vs 8h/día tradicional
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-red-600/20 to-green-600/20 rounded-2xl p-8 border border-orange-600/30 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Los Números <span className="text-orange-400">No Mienten</span>
            <br />La <span className="text-green-400">Superioridad es Absoluta</span>
          </h3>
          <p className="text-zinc-300 mb-8 max-w-3xl mx-auto text-lg">
            Cada métrica demuestra que CRUCES AI no es solo una mejora incremental - 
            es una revolución completa que hace obsoletos los métodos tradicionales.
          </p>
          
          <motion.button
            onClick={() => document.getElementById('inversion')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-500 hover:to-green-500 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Target className="w-6 h-6 inline mr-2" />
            Elegir el Futuro, No el Pasado
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}