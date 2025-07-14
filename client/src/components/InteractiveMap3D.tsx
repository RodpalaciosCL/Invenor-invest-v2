import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, TrendingUp, DollarSign, Target, Users, Zap, Eye } from "lucide-react";

export default function InteractiveMap3D() {
  const [selectedComuna, setSelectedComuna] = useState<string | null>(null);

  const comunas = [
    {
      id: "copiapo",
      name: "Copiapó",
      region: "Atacama",
      position: { x: 45, y: 35 },
      stats: {
        population: 158438,
        currentRevenue: 850000000,
        projectedIncrease: 256,
        cruces: 2,
        roi: 58,
        payback: 14
      },
      status: "operativo",
      color: "bg-orange-500"
    },
    {
      id: "caldera",
      name: "Caldera", 
      region: "Atacama",
      position: { x: 42, y: 38 },
      stats: {
        population: 18972,
        currentRevenue: 120000000,
        projectedIncrease: 234,
        cruces: 1,
        roi: 52,
        payback: 15
      },
      status: "operativo",
      color: "bg-orange-500"
    },
    {
      id: "antofagasta",
      name: "Antofagasta",
      region: "Antofagasta", 
      position: { x: 46, y: 28 },
      stats: {
        population: 425725,
        currentRevenue: 2100000000,
        projectedIncrease: 198,
        cruces: 4,
        roi: 61,
        payback: 13
      },
      status: "implementacion",
      color: "bg-orange-500"
    },
    {
      id: "santiago",
      name: "Santiago",
      region: "Metropolitana",
      position: { x: 48, y: 55 },
      stats: {
        population: 5614000,
        currentRevenue: 15200000000,
        projectedIncrease: 145,
        cruces: 12,
        roi: 48,
        payback: 18
      },
      status: "planificado",
      color: "bg-zinc-500"
    },
    {
      id: "valparaiso",
      name: "Valparaíso",
      region: "Valparaíso",
      position: { x: 46, y: 52 },
      stats: {
        population: 296655,
        currentRevenue: 890000000,
        projectedIncrease: 189,
        cruces: 3,
        roi: 54,
        payback: 16
      },
      status: "planificado", 
      color: "bg-zinc-500"
    },
    {
      id: "concepcion",
      name: "Concepción",
      region: "Biobío",
      position: { x: 49, y: 68 },
      stats: {
        population: 223574,
        currentRevenue: 780000000,
        projectedIncrease: 167,
        cruces: 2,
        roi: 49,
        payback: 17
      },
      status: "evaluacion",
      color: "bg-zinc-400"
    },
    {
      id: "temuco",
      name: "Temuco",
      region: "Araucanía",
      position: { x: 49, y: 72 },
      stats: {
        population: 282415,
        currentRevenue: 920000000,
        projectedIncrease: 178,
        cruces: 3,
        roi: 51,
        payback: 16
      },
      status: "evaluacion",
      color: "bg-zinc-400"
    }
  ];

  const expansionPhases = [
    {
      phase: "FASE 1",
      period: "2024-2025",
      comunas: ["Copiapó", "Caldera"],
      cruces: 3,
      revenue: "756M",
      status: "activo",
      color: "text-green-400"
    },
    {
      phase: "FASE 2", 
      period: "2025-2026",
      comunas: ["Antofagasta", "Valparaíso"],
      cruces: 7,
      revenue: "1.2B",
      status: "implementacion",
      color: "text-orange-400"
    },
    {
      phase: "FASE 3",
      period: "2026-2027", 
      comunas: ["Santiago", "Concepción"],
      cruces: 14,
      revenue: "2.8B",
      status: "planificado",
      color: "text-blue-400"
    },
    {
      phase: "FASE 4",
      period: "2027+",
      comunas: ["LATAM Expansion"],
      cruces: 50,
      revenue: "8.5B",
      status: "estrategico",
      color: "text-purple-400"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operativo": return "text-green-400 bg-green-500/20";
      case "implementacion": return "text-orange-400 bg-orange-500/20";
      case "planificado": return "text-blue-400 bg-blue-500/20";
      case "evaluacion": return "text-purple-400 bg-purple-500/20";
      default: return "text-zinc-400 bg-zinc-500/20";
    }
  };

  const selectedComunaData = selectedComuna ? comunas.find(c => c.id === selectedComuna) : null;

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
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
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-600/30 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-300 font-medium text-sm">Mapa Interactivo de Expansión</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            El <span className="text-blue-400">Mapa</span> de Tu 
            <br /><span className="text-green-400">Imperio Financiero</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Explora cada comuna, sus métricas reales y potencial de crecimiento. 
            Esta es la expansión territorial que convertirá tu inversión en un imperio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MapPin className="w-7 h-7 text-blue-400" />
                Chile - Territorio CRUCES AI
              </h3>

              {/* Chile Map Container */}
              <div className="relative w-full h-96 bg-gradient-to-b from-zinc-700/50 to-zinc-800/50 rounded-xl overflow-hidden">
                {/* Chile Shape Background */}
                <div className="absolute inset-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      d="M 50 5 L 52 8 L 54 15 L 53 25 L 52 35 L 51 45 L 50 55 L 49 65 L 48 75 L 47 85 L 46 92 L 48 95 L 50 92 L 52 85 L 53 75 L 54 65 L 55 55 L 56 45 L 57 35 L 58 25 L 57 15 L 55 8 L 52 5 L 50 5"
                      fill="rgba(59, 130, 246, 0.1)"
                      stroke="rgba(59, 130, 246, 0.3)"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>

                {/* Comuna Pins */}
                {comunas.map((comuna, index) => (
                  <motion.div
                    key={comuna.id}
                    className={`absolute w-4 h-4 ${comuna.color} rounded-full cursor-pointer shadow-lg`}
                    style={{ 
                      left: `${comuna.position.x}%`, 
                      top: `${comuna.position.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.5 }}
                    onClick={() => setSelectedComuna(comuna.id)}
                  >
                    <div className={`w-full h-full ${comuna.color} rounded-full animate-pulse`}></div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <div className="bg-zinc-900/90 text-white text-xs px-2 py-1 rounded font-semibold">
                        {comuna.name}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {comunas.slice(0, -1).map((comuna, index) => {
                    const nextComuna = comunas[index + 1];
                    return (
                      <motion.line
                        key={`${comuna.id}-${nextComuna.id}`}
                        x1={`${comuna.position.x}%`}
                        y1={`${comuna.position.y}%`}
                        x2={`${nextComuna.position.x}%`}
                        y2={`${nextComuna.position.y}%`}
                        stroke="rgba(59, 130, 246, 0.3)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: index * 0.3 }}
                        viewport={{ once: true }}
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Legend */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-zinc-300 text-sm">Operativo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-zinc-300 text-sm">Implementación</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-zinc-300 text-sm">Planificado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-zinc-300 text-sm">Evaluación</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Comuna Details Panel */}
          <div className="space-y-6">
            <motion.div
              className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-green-400" />
                {selectedComunaData ? `Detalles: ${selectedComunaData.name}` : 'Selecciona una Comuna'}
              </h3>

              {selectedComunaData ? (
                <div className="space-y-4">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${getStatusColor(selectedComunaData.status)}`}>
                    {selectedComunaData.status.toUpperCase()}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-zinc-300">Población</span>
                      <span className="text-white font-semibold">
                        {selectedComunaData.stats.population.toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-zinc-300">Revenue Actual</span>
                      <span className="text-white font-semibold">
                        ${(selectedComunaData.stats.currentRevenue / 1000000).toFixed(1)}M
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-zinc-300">Incremento Proyectado</span>
                      <span className="text-green-400 font-bold">
                        +{selectedComunaData.stats.projectedIncrease}%
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-zinc-300">Cruces Planificados</span>
                      <span className="text-blue-400 font-semibold">
                        {selectedComunaData.stats.cruces}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-zinc-300">ROI Estimado</span>
                      <span className="text-orange-400 font-bold">
                        {selectedComunaData.stats.roi}%
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-zinc-300">Payback</span>
                      <span className="text-purple-400 font-semibold">
                        {selectedComunaData.stats.payback} meses
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-zinc-400 text-center py-8">
                  Haz click en cualquier comuna del mapa para ver métricas detalladas, 
                  proyecciones de revenue y timeline de implementación.
                </div>
              )}
            </motion.div>

            {/* Expansion Timeline */}
            <motion.div
              className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-orange-400" />
                Fases de Expansión
              </h3>

              <div className="space-y-4">
                {expansionPhases.map((phase, index) => (
                  <motion.div
                    key={index}
                    className="border-l-2 border-zinc-600 pl-4 relative"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-zinc-600 rounded-full"></div>
                    
                    <div className="mb-2">
                      <span className={`font-bold ${phase.color}`}>{phase.phase}</span>
                      <span className="text-zinc-400 text-sm ml-2">({phase.period})</span>
                    </div>
                    
                    <div className="text-zinc-300 text-sm mb-1">
                      {Array.isArray(phase.comunas) ? phase.comunas.join(", ") : phase.comunas}
                    </div>
                    
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-400">{phase.cruces} cruces</span>
                      <span className="text-green-400 font-semibold">${phase.revenue}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16 grid md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {comunas.filter(c => c.status === 'operativo').length + comunas.filter(c => c.status === 'implementacion').length}
            </div>
            <div className="text-zinc-300">Comunas Activas</div>
          </div>
          
          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {comunas.reduce((sum, c) => sum + c.stats.cruces, 0)}
            </div>
            <div className="text-zinc-300">Cruces Totales</div>
          </div>
          
          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">
              {Math.round(comunas.reduce((sum, c) => sum + c.stats.roi, 0) / comunas.length)}%
            </div>
            <div className="text-zinc-300">ROI Promedio</div>
          </div>
          
          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              ${((comunas.reduce((sum, c) => sum + c.stats.currentRevenue * (c.stats.projectedIncrease / 100), 0)) / 1000000000).toFixed(1)}B
            </div>
            <div className="text-zinc-300">Revenue Proyectado</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-2xl p-8 border border-blue-600/30 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Este es Tu <span className="text-blue-400">Territorio</span>
            <br />Tu <span className="text-green-400">Imperio Financiero</span>
          </h3>
          <p className="text-zinc-300 mb-8 max-w-3xl mx-auto text-lg">
            Cada punto en este mapa representa millones en revenue. 
            Cada fase de expansión multiplica tu patrimonio. 
            Esta no es especulación - es el mapa detallado de tu riqueza futura.
          </p>
          
          <motion.button
            onClick={() => document.getElementById('inversion')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin className="w-6 h-6 inline mr-2" />
            Reclamar Mi Territorio
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}