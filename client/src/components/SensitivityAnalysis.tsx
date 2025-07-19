import { motion } from "framer-motion";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

export default function SensitivityAnalysis() {
  const [activeScenario, setActiveScenario] = useState("base");

  const scenarios = {
    conservador: {
      name: "Conservador",
      color: "#3b82f6", // blue
      description: "Escenario conservador (-20% rendimiento)",
      metrics: {
        roi: "39%",
        payback: "26 meses",
        irr: "20.1%",
        van: "$2,053M"
      },
      data: [
        { año: 2024, valor: 100, flujo: 85 },
        { año: 2025, valor: 118, flujo: 102 },
        { año: 2026, valor: 139, flujo: 121 },
        { año: 2027, valor: 164, flujo: 143 },
        { año: 2028, valor: 194, flujo: 169 },
        { año: 2029, valor: 229, flujo: 199 }
      ]
    },
    base: {
      name: "Base",
      color: "#f97316", // orange
      description: "Escenario base (rendimiento esperado)",
      metrics: {
        roi: "49%",
        payback: "26 meses",
        irr: "20.1%",
        van: "$3,053M"
      },
      data: [
        { año: 2024, valor: 100, flujo: 90 },
        { año: 2025, valor: 128, flujo: 115 },
        { año: 2026, valor: 164, flujo: 147 },
        { año: 2027, valor: 210, flujo: 188 },
        { año: 2028, valor: 269, flujo: 241 },
        { año: 2029, valor: 345, flujo: 309 }
      ]
    },
    pesimista: {
      name: "Pesimista",
      color: "#ef4444", // red
      description: "Escenario más cauteloso con menor crecimiento",
      metrics: {
        roi: "12%",
        payback: "5.8 años",
        irr: "15%",
        van: "$980K"
      },
      data: [
        { año: 2024, valor: 100, flujo: 78 },
        { año: 2025, valor: 112, flujo: 87 },
        { año: 2026, valor: 125, flujo: 98 },
        { año: 2027, valor: 140, flujo: 109 },
        { año: 2028, valor: 157, flujo: 122 },
        { año: 2029, valor: 176, flujo: 137 }
      ]
    }
  };

  const riskFactors = [
    {
      factor: "Competencia",
      impacto: "Medio",
      probabilidad: "Alta",
      mitigacion: "Diferenciación y barreras de entrada"
    },
    {
      factor: "Regulación",
      impacto: "Alto",
      probabilidad: "Baja",
      mitigacion: "Cumplimiento proactivo y lobbying"
    },
    {
      factor: "Económico",
      impacto: "Alto",
      probabilidad: "Media",
      mitigacion: "Diversificación geográfica"
    },
    {
      factor: "Tecnológico",
      impacto: "Medio",
      probabilidad: "Baja",
      mitigacion: "I+D continua e innovación"
    }
  ];

  const currentScenario = scenarios[activeScenario as keyof typeof scenarios];

  return (
    <section className="py-20 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-orange-400">
            Análisis de Sensibilidad
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Evaluación de diferentes escenarios de inversión y análisis de riesgos
          </p>
        </motion.div>

        {/* Scenario Selector */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-zinc-800 p-2 rounded-xl border border-zinc-700">
            {Object.entries(scenarios).map(([key, scenario]) => (
              <button
                key={key}
                onClick={() => setActiveScenario(key)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 font-semibold ${
                  activeScenario === key
                    ? `bg-orange-500 text-white shadow-lg`
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-700'
                }`}
              >
                {scenario.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Current Scenario Info */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          key={activeScenario}
        >
          <h3 className="text-2xl font-bold mb-2" style={{ color: currentScenario.color }}>
            Escenario {currentScenario.name}
          </h3>
          <p className="text-zinc-400">{currentScenario.description}</p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          key={`metrics-${activeScenario}`}
        >
          {Object.entries(currentScenario.metrics).map(([key, value], idx) => (
            <div key={key} className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <h4 className="text-zinc-400 text-sm font-medium mb-2 uppercase tracking-wide">
                {key === 'roi' ? 'ROI' : key === 'irr' ? 'TIR' : key === 'van' ? 'VAN' : 'Payback'}
              </h4>
              <div className="text-2xl font-bold" style={{ color: currentScenario.color }}>
                {value}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Line Chart - Proyección de Valor */}
          <motion.div
            className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-center">Proyección de Valor</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={currentScenario.data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="año" 
                  stroke="#9ca3af"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#9ca3af"
                  fontSize={12}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="valor"
                  stroke={currentScenario.color}
                  strokeWidth={3}
                  dot={{ fill: currentScenario.color, strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Bar Chart - Flujos de Efectivo */}
          <motion.div
            className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-center">Flujos de Efectivo</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={currentScenario.data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="año" 
                  stroke="#9ca3af"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#9ca3af"
                  fontSize={12}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
                <Bar 
                  dataKey="flujo" 
                  fill={currentScenario.color}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Risk Analysis */}
        <motion.div
          className="bg-zinc-800 rounded-2xl p-8 border border-zinc-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-orange-400 text-center">
            Análisis de Riesgos
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="text-left py-3 px-4 font-semibold text-zinc-300">Factor</th>
                  <th className="text-left py-3 px-4 font-semibold text-zinc-300">Impacto</th>
                  <th className="text-left py-3 px-4 font-semibold text-zinc-300">Probabilidad</th>
                  <th className="text-left py-3 px-4 font-semibold text-zinc-300">Mitigación</th>
                </tr>
              </thead>
              <tbody>
                {riskFactors.map((risk, idx) => (
                  <motion.tr
                    key={idx}
                    className="border-b border-zinc-700/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 + 0.8 }}
                    viewport={{ once: true }}
                  >
                    <td className="py-4 px-4 font-medium">{risk.factor}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        risk.impacto === 'Alto' ? 'bg-red-500/20 text-red-300' :
                        risk.impacto === 'Medio' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-green-500/20 text-green-300'
                      }`}>
                        {risk.impacto}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        risk.probabilidad === 'Alta' ? 'bg-red-500/20 text-red-300' :
                        risk.probabilidad === 'Media' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-green-500/20 text-green-300'
                      }`}>
                        {risk.probabilidad}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-zinc-400 text-sm">{risk.mitigacion}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 border border-orange-500/20">
            <h3 className="text-2xl font-bold mb-4">¿Listo para Invertir?</h3>
            <p className="text-zinc-300 mb-6 text-lg">
              Únete a la revolución del food delivery en LATAM
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-zinc-100 transition-colors duration-300">
              Invertir Ahora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
