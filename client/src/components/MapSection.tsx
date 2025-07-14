import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Zap, TrendingUp, Users, ArrowRight } from "lucide-react";

export default function MapSection() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regionsData = [
    {
      name: "Tarapacá",
      comunas: ["Iquique"],
      cruces: 8,
      incremento: "245%",
      color: "bg-orange-500",
      position: "top-10 left-1/4"
    },
    {
      name: "Antofagasta", 
      comunas: ["Sierra Gorda", "Taltal"],
      cruces: 15,
      incremento: "252%",
      color: "bg-orange-400",
      position: "top-24 left-1/3"
    },
    {
      name: "Atacama",
      comunas: ["Copiapó", "Caldera", "Diego de Almagro", "Tierra Amarilla", "Chañaral"],
      cruces: 25,
      incremento: "256%",
      color: "bg-orange-600",
      position: "top-40 left-1/3"
    },
    {
      name: "Coquimbo & Valparaíso",
      comunas: ["La Serena", "Coquimbo", "Ovalle", "Los Andes"],
      cruces: 12,
      incremento: "189%",
      color: "bg-orange-300",
      position: "top-56 left-1/4"
    }
  ];

  const totalStats = {
    cruces: regionsData.reduce((sum, region) => sum + region.cruces, 0),
    comunas: regionsData.reduce((sum, region) => sum + region.comunas.length, 0),
    promedioIncremento: "235%"
  };

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
          <h2 className="text-4xl font-bold text-white mb-6">
            Expansión Territorial Estratégica
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Implementación progresiva en las regiones del norte de Chile con mayor tráfico ferroviario
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Interactive Map */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-800 rounded-2xl p-8 border border-zinc-700 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Mapa de Implementación Chile Norte
              </h3>
              
              {/* Simplified Chile Map */}
              <div className="relative h-96 mx-auto max-w-xs">
                {/* Map Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-700 to-zinc-600 rounded-lg opacity-30"></div>
                
                {/* Regions */}
                {regionsData.map((region, index) => (
                  <motion.div
                    key={region.name}
                    className={`absolute w-4 h-4 ${region.color} rounded-full cursor-pointer ${region.position} z-10`}
                    whileHover={{ scale: 1.5 }}
                    onClick={() => setSelectedRegion(selectedRegion === region.name ? null : region.name)}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="absolute inset-0 animate-ping bg-orange-400 rounded-full opacity-30"></div>
                  </motion.div>
                ))}

                {/* Region Info Card */}
                {selectedRegion && (
                  <motion.div
                    className="absolute top-4 right-4 bg-zinc-900 p-4 rounded-lg border border-orange-600 max-w-xs z-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    {regionsData.find(r => r.name === selectedRegion) && (
                      <div>
                        <h4 className="text-orange-400 font-bold mb-2">
                          {regionsData.find(r => r.name === selectedRegion)?.name}
                        </h4>
                        <p className="text-white text-sm mb-1">
                          {regionsData.find(r => r.name === selectedRegion)?.cruces} cruces
                        </p>
                        <p className="text-white text-sm mb-1">
                          {regionsData.find(r => r.name === selectedRegion)?.comunas.length} comunas
                        </p>
                        <p className="text-green-400 text-sm font-bold">
                          +{regionsData.find(r => r.name === selectedRegion)?.incremento} recaudación
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>

              {/* Legend */}
              <div className="mt-6 text-center">
                <p className="text-zinc-400 text-sm mb-2">Haz clic en los puntos para ver detalles</p>
                <div className="flex justify-center gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-zinc-400">Alta densidad</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-zinc-400">Media densidad</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats and Details */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Summary Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-zinc-800 p-6 rounded-lg text-center border border-zinc-700">
                <div className="text-3xl font-bold text-orange-400 mb-2">{totalStats.cruces}</div>
                <div className="text-zinc-300 text-sm">Cruces Total</div>
              </div>
              <div className="bg-zinc-800 p-6 rounded-lg text-center border border-zinc-700">
                <div className="text-3xl font-bold text-orange-400 mb-2">{totalStats.comunas}</div>
                <div className="text-zinc-300 text-sm">Comunas</div>
              </div>
              <div className="bg-zinc-800 p-6 rounded-lg text-center border border-zinc-700">
                <div className="text-3xl font-bold text-green-400 mb-2">{totalStats.promedioIncremento}</div>
                <div className="text-zinc-300 text-sm">Incremento Prom.</div>
              </div>
            </div>

            {/* Regional Breakdown */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white mb-4">Desglose por Región</h4>
              {regionsData.map((region, index) => (
                <motion.div
                  key={region.name}
                  className="bg-zinc-800 p-4 rounded-lg border border-zinc-700 hover:border-orange-600/50 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedRegion(region.name)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="text-white font-semibold mb-1">{region.name}</h5>
                      <p className="text-zinc-400 text-sm">
                        {region.comunas.join(", ")}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-orange-400 font-bold">{region.cruces} cruces</div>
                      <div className="text-green-400 text-sm">+{region.incremento}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Expansion Strategy */}
            <div className="bg-gradient-to-r from-orange-600/20 to-orange-400/20 rounded-xl p-6 border border-orange-600/30">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-orange-400" size={24} />
                <h4 className="text-xl font-bold text-white">Estrategia de Escalamiento</h4>
              </div>
              <div className="space-y-3 text-zinc-300">
                <div className="flex items-center gap-2">
                  <ArrowRight className="text-orange-400" size={16} />
                  <span>Año 1: 25 cruces (4 regiones)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="text-orange-400" size={16} />
                  <span>Año 2: 40 cruces (expansión)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="text-orange-400" size={16} />
                  <span>Año 3: 60 cruces (consolidación)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="text-orange-400" size={16} />
                  <span>Potencial: 200+ cruces nacionales</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}