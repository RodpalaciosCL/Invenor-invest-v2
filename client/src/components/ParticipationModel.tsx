import { motion } from "framer-motion";
import { PieChart, Building, Users, ArrowRight } from "lucide-react";

export default function ParticipationModel() {
  const participationData = [
    {
      entity: "INVENOR",
      percentage: 70,
      color: "#f97316",
      bgColor: "bg-orange-600",
      description: "Desarrollo tecnológico, operación y gestión del sistema",
      components: [
        { name: "Ferronor", percentage: 52, amount: "36.4%" },
        { name: "Hermanos Pirazzoli", percentage: 26, amount: "18.2%" },
        { name: "Invesan SpA", percentage: 22, amount: "15.4%" }
      ]
    },
    {
      entity: "MUNICIPALIDADES",
      percentage: 30,
      color: "#10b981",
      bgColor: "bg-green-600",
      description: "Facilitación legal, permisos y validación local",
      components: [
        { name: "12 Municipios Norte", percentage: 100, amount: "30.0%" }
      ]
    }
  ];

  const monthlyDistribution = [
    { period: "Mes 6-8", inventorShare: "$33,9M", muniShare: "$14,5M", total: "$48,4M" },
    { period: "Mes 9-12", inventorShare: "$46,8M", muniShare: "$20,1M", total: "$66,9M" },
    { period: "Mes 13-16", inventorShare: "$60,5M", muniShare: "$25,9M", total: "$86,4M" },
    { period: "Mes 17-20", inventorShare: "$53,5M", muniShare: "$22,9M", total: "$76,4M" },
    { period: "Mes 21-24", inventorShare: "$59,1M", muniShare: "$25,3M", total: "$84,4M" }
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
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-orange-600/20 border border-orange-600/30 rounded-full mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <PieChart className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-300 font-medium text-sm">Estructura de Participación</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Modelo de <span className="text-orange-400">Participación</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Estructura 70/30 validada y respaldada por contratos con 12 municipalidades del Norte de Chile
          </p>
        </motion.div>

        {/* Main Participation Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {participationData.map((participant, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800 rounded-2xl p-8 border border-zinc-700"
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className={`${participant.bgColor} rounded-full p-4`}
                  style={{ backgroundColor: participant.color }}
                >
                  {index === 0 ? (
                    <Building className="w-6 h-6 text-white" />
                  ) : (
                    <Users className="w-6 h-6 text-white" />
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{participant.entity}</h3>
                  <p className="text-zinc-400">{participant.description}</p>
                </div>
              </div>

              {/* Percentage Circle */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <svg className="w-32 h-32" viewBox="0 0 36 36">
                    <path
                      className="text-zinc-700"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <motion.path
                      stroke={participant.color}
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${participant.percentage}, 100`}
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      initial={{ strokeDasharray: "0, 100" }}
                      whileInView={{ strokeDasharray: `${participant.percentage}, 100` }}
                      transition={{ duration: 2, delay: index * 0.5 }}
                      viewport={{ once: true }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold" style={{ color: participant.color }}>
                      {participant.percentage}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Components Breakdown */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white mb-4">Distribución Interna:</h4>
                {participant.components.map((component, compIndex) => (
                  <div key={compIndex} className="flex justify-between items-center p-3 bg-zinc-700/50 rounded-lg">
                    <span className="text-zinc-300">{component.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-zinc-400">{component.percentage}% interno</span>
                      <ArrowRight className="w-4 h-4 text-zinc-500" />
                      <span className="font-bold" style={{ color: participant.color }}>
                        {component.amount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Monthly Distribution Timeline */}
        <motion.div
          className="bg-gradient-to-r from-orange-600/10 to-green-600/10 rounded-2xl p-8 border border-orange-600/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Proyección de Distribución Mensual (CLP)
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-600">
                  <th className="text-left py-3 text-zinc-400 font-medium">Período</th>
                  <th className="text-right py-3 text-orange-400 font-medium">Invenor (70%)</th>
                  <th className="text-right py-3 text-green-400 font-medium">Municipalidades (30%)</th>
                  <th className="text-right py-3 text-zinc-300 font-medium">Total Mensual</th>
                </tr>
              </thead>
              <tbody>
                {monthlyDistribution.map((row, index) => (
                  <motion.tr
                    key={index}
                    className="border-b border-zinc-700/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <td className="py-4 text-zinc-300 font-medium">{row.period}</td>
                    <td className="py-4 text-right text-orange-400 font-bold">${row.inventorShare}</td>
                    <td className="py-4 text-right text-green-400 font-bold">${row.muniShare}</td>
                    <td className="py-4 text-right text-white font-bold">${row.total}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-zinc-800/50 rounded-xl">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">$944,4M</div>
                <div className="text-zinc-400">Total Invenor (24 meses)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">$404,8M</div>
                <div className="text-zinc-400">Total Municipalidades (24 meses)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">$1,349,2M</div>
                <div className="text-zinc-400">Utilidad Total Generada</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="mt-16 grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-orange-600/10 border border-orange-600/30 rounded-xl p-6">
            <h4 className="text-xl font-bold text-orange-400 mb-4">Beneficios INVENOR (70%)</h4>
            <ul className="space-y-2 text-zinc-300">
              <li>• Control operativo y tecnológico</li>
              <li>• Escalabilidad nacional e internacional</li>
              <li>• Propiedad intelectual del sistema</li>
              <li>• Gestión comercial y expansión</li>
            </ul>
          </div>

          <div className="bg-green-600/10 border border-green-600/30 rounded-xl p-6">
            <h4 className="text-xl font-bold text-green-400 mb-4">Beneficios MUNICIPALIDADES (30%)</h4>
            <ul className="space-y-2 text-zinc-300">
              <li>• Ingresos pasivos sin inversión</li>
              <li>• Mejora en seguridad vial</li>
              <li>• Modernización tecnológica</li>
              <li>• Respaldo técnico especializado</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
