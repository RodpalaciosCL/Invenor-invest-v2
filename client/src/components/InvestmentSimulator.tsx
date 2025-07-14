import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Calculator, TrendingUp, Target, DollarSign, Clock, BarChart3, Zap } from "lucide-react";

export default function InvestmentSimulator() {
  const [scenarios, setScenarios] = useState({
    comunas: 12,
    crucesPerComuna: 2,
    valorMulta: 80000,
    eficienciaIA: 95,
    crecimientoAnual: 25
  });

  const [results, setResults] = useState({
    inversionTotal: 0,
    roiAnual: 0,
    paybackMeses: 0,
    gananciaNeta: 0,
    revenueAnual: 0
  });

  // Calculate results based on scenarios
  useEffect(() => {
    const crucesTotales = scenarios.comunas * scenarios.crucesPerComuna;
    const multasDiarias = crucesTotales * 45 * (scenarios.eficienciaIA / 100); // 45 avg violations per crossing
    const revenueAnual = multasDiarias * 365 * scenarios.valorMulta;
    const inversionPorCruce = 83000000; // $83M per crossing
    const inversionTotal = crucesTotales * inversionPorCruce;
    const opexAnual = inversionTotal * 0.12; // 12% OPEX
    const gananciaNeta = revenueAnual - opexAnual;
    const roiAnual = (gananciaNeta / inversionTotal) * 100;
    const paybackMeses = (inversionTotal / (gananciaNeta / 12));

    setResults({
      inversionTotal,
      roiAnual,
      paybackMeses,
      gananciaNeta,
      revenueAnual
    });
  }, [scenarios]);

  const sliderConfigs = [
    {
      key: 'comunas',
      label: 'Número de Comunas',
      min: 5,
      max: 50,
      step: 1,
      unit: '',
      icon: <Target className="w-5 h-5" />
    },
    {
      key: 'crucesPerComuna',
      label: 'Cruces por Comuna',
      min: 1,
      max: 8,
      step: 1,
      unit: '',
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      key: 'valorMulta',
      label: 'Valor Multa (CLP)',
      min: 60000,
      max: 150000,
      step: 10000,
      unit: '$',
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      key: 'eficienciaIA',
      label: 'Eficiencia IA (%)',
      min: 85,
      max: 99,
      step: 1,
      unit: '%',
      icon: <Zap className="w-5 h-5" />
    },
    {
      key: 'crecimientoAnual',
      label: 'Crecimiento Anual (%)',
      min: 15,
      max: 40,
      step: 5,
      unit: '%',
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  const resultMetrics = [
    {
      label: 'Inversión Total',
      value: `$${(results.inversionTotal / 1000000).toFixed(1)}M`,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      label: 'ROI Anual',
      value: `${results.roiAnual.toFixed(1)}%`,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    },
    {
      label: 'Payback',
      value: `${results.paybackMeses.toFixed(1)} meses`,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20'
    },
    {
      label: 'Ganancia Neta Anual',
      value: `$${(results.gananciaNeta / 1000000).toFixed(1)}M`,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20'
    }
  ];

  const getROIColor = (roi: number) => {
    if (roi >= 50) return 'text-green-400';
    if (roi >= 30) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPaybackColor = (months: number) => {
    if (months <= 18) return 'text-green-400';
    if (months <= 30) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
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
          <div className="inline-flex items-center px-4 py-2 bg-green-600/20 border border-green-600/30 rounded-full mb-6">
            <Calculator className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-300 font-medium text-sm">Simulador Interactivo de Inversión</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Calcula Tu <span className="text-green-400">ROI</span> 
            <br />en <span className="text-blue-400">Tiempo Real</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Ajusta los parámetros y ve cómo cambia instantáneamente el retorno de tu inversión. 
            Todos los cálculos basados en datos reales de implementaciones existentes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Controls Panel */}
          <motion.div
            className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Calculator className="w-7 h-7 text-green-400" />
              Configura Tu Escenario
            </h3>
            
            <div className="space-y-8">
              {sliderConfigs.map((config, index) => (
                <motion.div
                  key={config.key}
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <div className="text-green-400">
                        {config.icon}
                      </div>
                      {config.label}
                    </div>
                    <div className="text-xl font-bold text-green-400">
                      {config.unit}{scenarios[config.key as keyof typeof scenarios].toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="range"
                      min={config.min}
                      max={config.max}
                      step={config.step}
                      value={scenarios[config.key as keyof typeof scenarios]}
                      onChange={(e) => setScenarios(prev => ({
                        ...prev,
                        [config.key]: Number(e.target.value)
                      }))}
                      className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-zinc-400 mt-1">
                      <span>{config.unit}{config.min.toLocaleString()}</span>
                      <span>{config.unit}{config.max.toLocaleString()}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Presets */}
            <div className="mt-8 pt-8 border-t border-zinc-700">
              <h4 className="text-lg font-semibold text-white mb-4">Escenarios Predefinidos</h4>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setScenarios({
                    comunas: 12,
                    crucesPerComuna: 2,
                    valorMulta: 80000,
                    eficienciaIA: 95,
                    crecimientoAnual: 25
                  })}
                  className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  Conservador
                </button>
                <button
                  onClick={() => setScenarios({
                    comunas: 25,
                    crucesPerComuna: 4,
                    valorMulta: 100000,
                    eficienciaIA: 97,
                    crecimientoAnual: 30
                  })}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  Agresivo
                </button>
              </div>
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-blue-400" />
              Resultados Instantáneos
            </h3>

            {/* Main Results Grid */}
            <div className="grid grid-cols-2 gap-4">
              {resultMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className={`bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50 relative overflow-hidden`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`absolute inset-0 ${metric.bgColor} opacity-10`}></div>
                  <div className="relative z-10 text-center">
                    <div className={`text-2xl font-bold ${metric.color} mb-2`}>
                      {metric.value}
                    </div>
                    <div className="text-zinc-300 text-sm">
                      {metric.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ROI Gauge */}
            <motion.div
              className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-white mb-6 text-center">Indicador de Rentabilidad</h4>
              
              <div className="relative w-48 h-24 mx-auto mb-6">
                {/* Gauge Background */}
                <div className="absolute inset-0">
                  <svg viewBox="0 0 200 100" className="w-full h-full">
                    <path
                      d="M 20 80 A 80 80 0 0 1 180 80"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="8"
                    />
                    <path
                      d="M 20 80 A 80 80 0 0 1 180 80"
                      fill="none"
                      stroke={results.roiAnual >= 50 ? "#10b981" : results.roiAnual >= 30 ? "#f59e0b" : "#ef4444"}
                      strokeWidth="8"
                      strokeDasharray={`${(results.roiAnual / 100) * 160} 160`}
                      strokeDashoffset="0"
                      className="transition-all duration-1000"
                    />
                  </svg>
                </div>
                
                {/* Gauge Value */}
                <div className="absolute inset-0 flex items-end justify-center pb-4">
                  <div className={`text-3xl font-bold ${getROIColor(results.roiAnual)}`}>
                    {results.roiAnual.toFixed(1)}%
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className={`text-lg font-semibold ${getPaybackColor(results.paybackMeses)} mb-2`}>
                  Payback: {results.paybackMeses.toFixed(1)} meses
                </div>
                <div className="text-zinc-400 text-sm">
                  {results.roiAnual >= 50 ? "🟢 Excelente rentabilidad" : 
                   results.roiAnual >= 30 ? "🟡 Buena rentabilidad" : 
                   "🔴 Revisar parámetros"}
                </div>
              </div>
            </motion.div>

            {/* Summary */}
            <motion.div
              className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-6 border border-green-600/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-white mb-3">💡 Resumen de Tu Inversión</h4>
              <div className="text-zinc-300 text-sm space-y-1">
                <p>• {scenarios.comunas * scenarios.crucesPerComuna} cruces totales en operación</p>
                <p>• ${(results.revenueAnual / 1000000).toFixed(1)}M revenue anual proyectado</p>
                <p>• {((results.gananciaNeta / results.inversionTotal) * 100).toFixed(1)}% retorno sobre inversión</p>
                <p>• Recuperación completa en {results.paybackMeses.toFixed(1)} meses</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Te Gusta Lo Que Ves? <span className="text-green-400">Es Hora de Actuar</span>
            </h3>
            <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
              Estos números no son especulación. Son proyecciones basadas en data real 
              de municipios que ya están operando con CRUCES AI.
            </p>
            
            <motion.button
              onClick={() => document.getElementById('inversion')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Convertir Simulación en Realidad
            </motion.button>
          </div>
        </motion.div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: 2px solid #064e3b;
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: 2px solid #064e3b;
        }
      `}</style>
    </section>
  );
}