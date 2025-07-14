import { motion } from "framer-motion";
import { Zap, Shield, Crown, Target, TrendingUp, Clock, Award, Users } from "lucide-react";

export default function CompetitiveAdvantage() {
  const advantages = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "First Mover Advantage",
      description: "Primera y única solución B2G validada en Chile con tecnología IA ferroviaria",
      competitive: "Competencia: 0 soluciones similares validadas",
      barrier: "Barrera: 2-3 años para replicar validación",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Validación Exclusiva Ferronor",
      description: "Único respaldo técnico oficial de empresa ferroviaria líder en Chile",
      competitive: "Competencia: Sin validación ferroviaria",
      barrier: "Barrera: Acceso exclusivo a infraestructura",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Red Contractual B2G",
      description: "12 municipios con contratos firmados - red de distribución establecida",
      competitive: "Competencia: Deben construir desde cero",
      barrier: "Barrera: Ciclos de venta B2G 12-18 meses",
      color: "from-green-500 to-green-700"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Precisión Técnica Superior",
      description: "95% eficiencia vs 22% métodos tradicionales - diferencia exponencial",
      competitive: "Competencia: Máximo 30-40% eficiencia",
      barrier: "Barrera: Algoritmos propietarios protegidos",
      color: "from-orange-500 to-orange-700"
    }
  ];

  const moatFactors = [
    {
      factor: "Switching Costs",
      description: "Municipios invierten 15-24 meses en implementación. Cambiar proveedor significa reiniciar todo.",
      strength: "ALTO",
      color: "text-green-400"
    },
    {
      factor: "Network Effects", 
      description: "Cada municipio nuevo valida la solución para otros. Credibilidad se multiplica.",
      strength: "CRECIENTE",
      color: "text-blue-400"
    },
    {
      factor: "Data Moat",
      description: "Datos únicos de infracciones ferroviarias chilenas. Imposible de replicar.",
      strength: "EXCLUSIVO",
      color: "text-purple-400"
    },
    {
      factor: "Regulatory Advantage",
      description: "Conocimiento profundo normativa municipal y ferroviaria. Años de experiencia.",
      strength: "ESPECIALIZADO",
      color: "text-orange-400"
    }
  ];

  const timingAdvantage = [
    {
      period: "2024-2025",
      status: "INVENOR",
      description: "Consolidación 25 cruces + expansión norte",
      advantage: "Ventaja: 18 meses adelante"
    },
    {
      period: "2025-2026", 
      status: "Competencia",
      description: "Primeros intentos de validación técnica",
      advantage: "INVENOR: 40 cruces operando"
    },
    {
      period: "2026-2027",
      status: "Competencia",
      description: "Búsqueda primeros contratos municipales",
      advantage: "INVENOR: 60 cruces + LATAM"
    },
    {
      period: "2027+",
      status: "Mercado",
      description: "Competencia fragmentada vs líder consolidado",
      advantage: "INVENOR: Posición dominante"
    }
  ];

  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
          <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 border border-purple-600/30 rounded-full mb-6">
            <Crown className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-300 font-medium text-sm">Ventaja Competitiva Defendible</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            No Solo Somos <span className="text-purple-400">Primeros</span>
            <br />Somos <span className="text-orange-400">Indefendibles</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            INVENOR no solo tiene ventaja temporal. Hemos construido múltiples barreras 
            defensivas que hacen extremadamente difícil que la competencia nos alcance.
          </p>
        </motion.div>

        {/* Core Advantages */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Ventajas <span className="text-purple-400">Competitivas</span> Clave
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-5`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${advantage.color} rounded-xl text-white`}>
                      {advantage.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">
                        {advantage.title}
                      </h4>
                      <p className="text-zinc-300 leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-zinc-700/30 rounded-lg p-3">
                      <div className="text-red-400 text-sm font-semibold mb-1">
                        {advantage.competitive}
                      </div>
                    </div>
                    <div className="bg-zinc-700/30 rounded-lg p-3">
                      <div className="text-green-400 text-sm font-semibold">
                        {advantage.barrier}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Moat Factors */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Barreras <span className="text-orange-400">Defensivas</span> del Negocio
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {moatFactors.map((moat, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-white">
                    {moat.factor}
                  </h4>
                  <div className={`px-3 py-1 ${moat.color.replace('text-', 'bg-').replace('-400', '-600/20')} rounded-full ${moat.color} text-xs font-bold`}>
                    {moat.strength}
                  </div>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  {moat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timing Advantage Timeline */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Ventana de <span className="text-blue-400">Timing</span> Irrepetible
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-orange-500"></div>
            
            <div className="space-y-8">
              {timingAdvantage.map((timing, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start gap-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 1.0 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {timing.period.split('-')[0]}
                  </div>
                  
                  <div className="flex-1 bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-lg font-bold text-white">
                        {timing.period}
                      </h4>
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                        timing.status === 'INVENOR' 
                          ? 'bg-green-600/20 text-green-400' 
                          : timing.status === 'Competencia'
                          ? 'bg-red-600/20 text-red-400'
                          : 'bg-blue-600/20 text-blue-400'
                      }`}>
                        {timing.status}
                      </div>
                    </div>
                    <p className="text-zinc-300 mb-2">
                      {timing.description}
                    </p>
                    <div className="text-orange-400 font-semibold text-sm">
                      {timing.advantage}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="bg-gradient-to-r from-purple-600/20 to-orange-600/20 rounded-2xl p-8 border border-purple-600/30 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Esta Ventaja <span className="text-purple-400">Se Fortalece</span> 
            <br />con Cada <span className="text-orange-400">Día que Pasa</span>
          </h3>
          <p className="text-zinc-300 mb-8 max-w-3xl mx-auto text-lg">
            Mientras la competencia aún está entendiendo el problema, 
            INVENOR ya está escalando la solución. Cada contrato nuevo, 
            cada validación adicional, cada dato recolectado amplía nuestra ventaja.
          </p>
          
          <motion.button
            onClick={() => document.getElementById('inversion')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-500 hover:to-orange-500 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Asegurar Posición en el Líder
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}