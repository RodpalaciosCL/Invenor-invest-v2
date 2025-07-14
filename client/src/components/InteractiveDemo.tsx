import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Play, Pause, Zap, Eye, Camera, Target, AlertTriangle, CheckCircle } from "lucide-react";

export default function InteractiveDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [detectedVehicles, setDetectedVehicles] = useState(0);
  const [violations, setViolations] = useState(0);
  const [revenue, setRevenue] = useState(0);

  // Simulate real-time detection
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setDetectedVehicles(prev => prev + Math.floor(Math.random() * 3) + 1);
        if (Math.random() > 0.7) { // 30% violation rate
          setViolations(prev => prev + 1);
          setRevenue(prev => prev + 80000); // $80k per violation
        }
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const efficiency = [
    { method: "Inspector Humano", rate: 22, cost: 4000000, detections: 50, hours: 8 },
    { method: "CRUCES AI", rate: 95, cost: 800000, detections: 2340, hours: 24 }
  ];

  const realTimeMetrics = [
    { label: "Vehículos Detectados", value: detectedVehicles, icon: <Camera className="w-5 h-5" /> },
    { label: "Infracciones Identificadas", value: violations, icon: <AlertTriangle className="w-5 h-5" /> },
    { label: "Revenue Generado", value: `$${revenue.toLocaleString()}`, icon: <Target className="w-5 h-5" /> }
  ];

  return (
    <section className="py-20 bg-zinc-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-zinc-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            <span className="text-orange-300 font-medium text-sm">Demo Interactivo - Tecnología en Acción</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ve <span className="text-orange-400">CRUCES AI</span> en Acción
            <br /><span className="text-orange-400">Tiempo Real</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Simulación interactiva que muestra cómo nuestra IA detecta infracciones 
            24/7 con 95% de eficiencia, generando revenue automático para municipios.
          </p>
        </motion.div>

        {/* Interactive Video Demo */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Simulated Video Feed */}
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Cruce Ferroviario - Copiapó</h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-orange-400 text-sm font-semibold">EN VIVO</span>
                </div>
              </div>
              
              {/* Video Container */}
              <div className="relative bg-zinc-900 rounded-xl aspect-video mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=450&fit=crop" 
                  alt="Railway Crossing" 
                  className="w-full h-full object-cover"
                />
                
                {/* AI Overlay */}
                {isPlaying && (
                  <>
                    {/* Detection Boxes */}
                    <motion.div
                      className="absolute top-1/4 left-1/3 w-20 h-12 border-2 border-orange-400 rounded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="bg-orange-400 text-black text-xs px-1 -mt-5">VEH-001</div>
                    </motion.div>
                    
                    <motion.div
                      className="absolute top-1/2 right-1/4 w-16 h-10 border-2 border-zinc-400 rounded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      <div className="bg-zinc-400 text-white text-xs px-1 -mt-5">INFRACCIÓN</div>
                    </motion.div>
                    
                    {/* License Plate Recognition */}
                    <motion.div
                      className="absolute bottom-4 left-4 bg-orange-600/90 rounded px-3 py-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <div className="text-white text-sm font-mono">PATENTE: ABC-123</div>
                    </motion.div>
                  </>
                )}
                
                {/* Play/Pause Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                  </motion.button>
                </div>
              </div>
              
              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="text-zinc-400 text-sm">
                  Simulación: Detección IA en tiempo real
                </div>
                <button
                  onClick={() => {
                    setDetectedVehicles(0);
                    setViolations(0);
                    setRevenue(0);
                  }}
                  className="text-blue-400 hover:text-blue-300 text-sm font-semibold"
                >
                  Reset Contadores
                </button>
              </div>
            </div>

            {/* Real-time Metrics */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Métricas en Tiempo Real</h3>
              
              {realTimeMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-700/50"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-600 rounded-lg text-white">
                        {metric.icon}
                      </div>
                      <div className="text-zinc-300">{metric.label}</div>
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {metric.value}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Efficiency Indicator */}
              <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl p-4 border border-green-600/30">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-semibold">Eficiencia IA</span>
                </div>
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-zinc-400 text-sm">vs 22% métodos tradicionales</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Comparison Chart */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            <span className="text-red-400">Método Tradicional</span> vs 
            <span className="text-green-400"> CRUCES AI</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {efficiency.map((method, index) => (
              <motion.div
                key={index}
                className={`bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border ${
                  index === 0 ? 'border-red-600/50' : 'border-green-600/50'
                } relative overflow-hidden`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`absolute inset-0 ${
                  index === 0 ? 'bg-red-600/5' : 'bg-green-600/5'
                }`}></div>
                
                <div className="relative z-10">
                  <h4 className={`text-2xl font-bold mb-6 ${
                    index === 0 ? 'text-red-400' : 'text-green-400'
                  }`}>
                    {method.method}
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-300">Eficiencia</span>
                      <span className="text-2xl font-bold text-white">{method.rate}%</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-300">Costo Mensual</span>
                      <span className="text-xl font-bold text-white">
                        ${method.cost.toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-300">Detecciones/Día</span>
                      <span className="text-xl font-bold text-white">{method.detections}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-300">Operación</span>
                      <span className="text-xl font-bold text-white">{method.hours}h</span>
                    </div>
                  </div>
                  
                  {index === 1 && (
                    <div className="mt-6 bg-green-600/20 rounded-lg p-3">
                      <div className="text-green-400 font-semibold text-sm text-center">
                        🚀 4.3x MÁS EFICIENTE + 5x MENOS COSTO
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-2xl p-8 border border-blue-600/30 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Esta Tecnología Ya Está <span className="text-green-400">Funcionando</span>
          </h3>
          <p className="text-zinc-300 mb-8 max-w-3xl mx-auto text-lg">
            No es un concepto futuro. CRUCES AI está operando en cruces reales, 
            detectando infracciones reales, generando revenue real para municipios chilenos.
          </p>
          
          <motion.button
            onClick={() => document.getElementById('inversion')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-6 h-6 inline mr-2" />
            Invertir en Tecnología Probada
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}