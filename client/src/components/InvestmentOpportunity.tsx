import { motion } from "framer-motion";
import { DollarSign, Target, Clock, PieChart, FileText, Download, CheckCircle, X } from "lucide-react";
import { useState } from "react";

export default function InvestmentOpportunity() {
  const [showInvestmentDetail, setShowInvestmentDetail] = useState(false);

  const investmentComponents = [
    {
      percentage: 45,
      title: "Desarrollo Tecnológico",
      subtitle: "IA, hardware inteligente, postes, software completo",
      amount: "$930M",
      color: "#f97316"
    },
    {
      percentage: 35,
      title: "Personal & Operación",
      subtitle: "Equipo técnico, instalación, mantenimiento 24/7",
      amount: "$725M",
      color: "#22d3ee"
    },
    {
      percentage: 12,
      title: "Infraestructura",
      subtitle: "Cloud, conectividad 5G, energía solar",
      amount: "$248M",
      color: "#10b981"
    },
    {
      percentage: 8,
      title: "Marketing & Legal",
      subtitle: "Comercialización B2G, aspectos legales",
      amount: "$165M",
      color: "#8b5cf6"
    }
  ];

  const cashflowProjection = [
    { mes: "Mes 6", ingreso: "$68M", descripcion: "Primeros ingresos - pruebas piloto" },
    { mes: "Mes 9", ingreso: "$151M", descripcion: "Gestión inicial 25 cruces" },
    { mes: "Mes 15", ingreso: "$605M", descripcion: "Break-even - perfeccionamiento" },
    { mes: "Mes 17", ingreso: "$908M", descripcion: "Consolidación + crecimiento" },
    { mes: "Mes 21", ingreso: "$1.589B", descripcion: "Máximo rendimiento 50 cruces" }
  ];

  const projectStrengths = [
    "Ferronor: Validación técnica completa con empresa ferroviaria",
    "12 Municipios: Contratos B2G de largo plazo confirmados",
    "ROI 55% en 24 meses con payback de 15 meses garantizado",
    "95% eficiencia IA vs 22% actual = 4.3x mejora comprobada",
    "Escalabilidad nacional: 50+ comunas adicionales identificadas",
    "Mercado LATAM: Potencial internacional miles de millones USD"
  ];

  return (
    <section id="inversion" className="py-20 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-6 text-orange-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Oportunidad de Inversión
          </motion.h2>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setShowInvestmentDetail(true)}
              className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FileText size={20} />
              Ver Detalle Completo de Inversión
            </button>
          </motion.div>

          {/* Main Investment Showcase */}
          <motion.div
            className="relative bg-orange-600/20 rounded-3xl p-10 border border-orange-600/40 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-orange-600/5 animate-pulse"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-orange-600/20 border border-orange-600/30 rounded-full mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                    Primera Solución B2G Chile
                  </span>
                </motion.div>
                <h3 className="text-4xl font-bold text-white mb-4">
                  Ecosistema CRUCES AI
                </h3>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-600 pl-6">
                    <h4 className="text-xl font-bold text-orange-400 mb-2">$2.067 Billones</h4>
                    <p className="text-zinc-300">Inversión inicial total requerida</p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-6">
                    <h4 className="text-xl font-bold text-orange-400 mb-2">$3.096 Billones</h4>
                    <p className="text-zinc-300">Retorno total proyectado 24 meses</p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-6">
                    <h4 className="text-xl font-bold text-orange-400 mb-2">$21.794 Billones</h4>
                    <p className="text-zinc-300">Ventas anuales año 3 (60 cruces)</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-black/30 rounded-2xl p-12 text-center border border-orange-600/30">
                    <div className="text-6xl font-black text-orange-400 mb-4">55%</div>
                    <div className="text-2xl font-bold text-white mb-2">ROI</div>
                    <div className="text-orange-400 font-medium">En 24 meses</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Investment Breakdown */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Distribución de Inversión
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentComponents.map((component, i) => (
              <motion.div
                key={i}
                className="bg-zinc-700 p-6 rounded-xl border border-zinc-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div 
                  className="w-full h-2 rounded-full mb-4" 
                  style={{ backgroundColor: component.color }}
                ></div>
                <div className="text-3xl font-bold text-white mb-2">
                  {component.percentage}%
                </div>
                <h4 className="text-lg font-semibold text-orange-400 mb-2">
                  {component.title}
                </h4>
                <p className="text-zinc-300 text-sm mb-3">
                  {component.subtitle}
                </p>
                <div className="text-orange-400 font-bold">
                  {component.amount}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cashflow Timeline */}
        <motion.div
          className="mb-16 bg-zinc-900 p-8 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Proyección Cashflow Mensual
          </h3>
          <div className="space-y-4">
            {cashflowProjection.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-zinc-800 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{item.mes}</div>
                    <div className="text-zinc-400 text-sm">{item.descripcion}</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-orange-400">
                  {item.ingreso}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Project Strengths */}
        <motion.div
          className="bg-gradient-to-r from-green-600/20 to-orange-600/20 rounded-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Fortalezas del Proyecto
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {projectStrengths.map((strength, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                <p className="text-zinc-300">{strength}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Investment Detail Modal */}
        {showInvestmentDetail && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <motion.div
              className="bg-zinc-900 rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">
                  Detalle Completo de Inversión CRUCES AI
                </h3>
                <button
                  onClick={() => setShowInvestmentDetail(false)}
                  className="text-zinc-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-zinc-800 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-orange-400 mb-2">15</div>
                    <div className="text-zinc-300">meses payback</div>
                  </div>
                  <div className="bg-zinc-800 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-green-400 mb-2">42%</div>
                    <div className="text-zinc-300">IRR anual</div>
                  </div>
                  <div className="bg-zinc-800 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-blue-400 mb-2">93.1%</div>
                    <div className="text-zinc-300">Margen EBITDA</div>
                  </div>
                </div>

                <div className="bg-zinc-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white mb-4">Análisis de Sensibilidad</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-yellow-600/20 rounded-lg">
                      <div className="text-xl font-bold text-yellow-400">34%</div>
                      <div className="text-zinc-300 text-sm">Conservador (-20%)</div>
                    </div>
                    <div className="text-center p-4 bg-orange-600/20 rounded-lg border-2 border-orange-600">
                      <div className="text-xl font-bold text-orange-400">42%</div>
                      <div className="text-zinc-300 text-sm">Base (actual)</div>
                    </div>
                    <div className="text-center p-4 bg-green-600/20 rounded-lg">
                      <div className="text-xl font-bold text-green-400">49%</div>
                      <div className="text-zinc-300 text-sm">Optimista (+20%)</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={() => window.open('mailto:equipo@invenor.cl?subject=Solicitud de Documentación Completa CRUCES AI', '_blank')}
                    className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    <Download size={20} />
                    Solicitar Documentación Completa
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}