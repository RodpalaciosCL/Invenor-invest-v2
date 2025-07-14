import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Target, Zap, TrendingUp, DollarSign, Clock, Award } from "lucide-react";

export default function GameInvestor() {
  const [gameState, setGameState] = useState({
    budget: 3000000000, // $3B initial
    quarter: 1,
    year: 2024,
    isPlaying: false,
    currentROI: 0,
    totalRevenue: 0,
    cruces: 0,
    efficiency: 85,
    marketShare: 5,
    score: 0
  });

  const [currentEvent, setCurrentEvent] = useState<any>(null);
  const [decisions, setDecisions] = useState<any[]>([]);
  const [achievements, setAchievements] = useState<string[]>([]);

  const events = [
    {
      id: 1,
      title: "Nueva Regulación Municipal",
      description: "Municipalidades requieren upgrade de seguridad. Costo: $50M",
      options: [
        { text: "Invertir en upgrade", cost: 50000000, effect: { efficiency: +5, marketShare: +3 } },
        { text: "Mantener estándar actual", cost: 0, effect: { marketShare: -2 } }
      ]
    },
    {
      id: 2,
      title: "Oportunidad de Expansión",
      description: "Municipalidad solicita expansión urgente en 3 cruces adicionales",
      options: [
        { text: "Expandir inmediatamente", cost: 150000000, effect: { cruces: +3, revenue: +45000000 } },
        { text: "Evaluar en próximo trimestre", cost: 0, effect: { efficiency: +2 } }
      ]
    },
    {
      id: 3,
      title: "Competidor Entra al Mercado",
      description: "Nueva empresa ofrece solución 20% más barata",
      options: [
        { text: "Reducir precios 15%", cost: 0, effect: { marketShare: +5, revenue: -15000000 } },
        { text: "Invertir en diferenciación", cost: 80000000, effect: { efficiency: +8, marketShare: +2 } }
      ]
    }
  ];

  const investmentOptions = [
    {
      name: "Más Cruces",
      description: "Expandir a nuevas ubicaciones",
      cost: 100000000,
      effect: { cruces: +2, revenue: +30000000 }
    },
    {
      name: "Mejor Tecnología",
      description: "Upgrade de algoritmos IA",
      cost: 80000000,
      effect: { efficiency: +5, revenue: +20000000 }
    },
    {
      name: "Más Personal",
      description: "Contratar equipo especializado",
      cost: 60000000,
      effect: { efficiency: +3, marketShare: +2 }
    },
    {
      name: "Marketing Agresivo",
      description: "Campaña para nuevos contratos",
      cost: 40000000,
      effect: { marketShare: +8, revenue: +15000000 }
    }
  ];

  // Game loop
  useEffect(() => {
    if (gameState.isPlaying) {
      const timer = setTimeout(() => {
        advanceQuarter();
      }, 3000); // 3 seconds per quarter
      return () => clearTimeout(timer);
    }
  }, [gameState.isPlaying, gameState.quarter]);

  // Random events
  useEffect(() => {
    if (gameState.isPlaying && Math.random() > 0.7) {
      const randomEvent = events[Math.floor(Math.random() * events.length)];
      setCurrentEvent(randomEvent);
      setGameState(prev => ({ ...prev, isPlaying: false }));
    }
  }, [gameState.quarter]);

  const advanceQuarter = () => {
    setGameState(prev => {
      const newRevenue = prev.totalRevenue + (prev.cruces * 15000000 * (prev.efficiency / 100));
      const newROI = prev.budget > 0 ? ((newRevenue - prev.budget) / prev.budget) * 100 : 0;
      const newScore = Math.round(newROI * prev.marketShare * (prev.efficiency / 100));

      let newQuarter = prev.quarter + 1;
      let newYear = prev.year;
      if (newQuarter > 4) {
        newQuarter = 1;
        newYear += 1;
      }

      // Check achievements
      const newAchievements = [...achievements];
      if (newROI > 50 && !achievements.includes("roi50")) {
        newAchievements.push("roi50");
        setAchievements(newAchievements);
      }
      if (prev.cruces >= 25 && !achievements.includes("cruces25")) {
        newAchievements.push("cruces25");
        setAchievements(newAchievements);
      }

      return {
        ...prev,
        quarter: newQuarter,
        year: newYear,
        currentROI: newROI,
        totalRevenue: newRevenue,
        score: newScore
      };
    });
  };

  const makeInvestment = (option: any) => {
    if (gameState.budget >= option.cost) {
      setGameState(prev => ({
        ...prev,
        budget: prev.budget - option.cost,
        cruces: prev.cruces + (option.effect.cruces || 0),
        efficiency: Math.min(99, prev.efficiency + (option.effect.efficiency || 0)),
        marketShare: Math.min(100, prev.marketShare + (option.effect.marketShare || 0)),
        totalRevenue: prev.totalRevenue + (option.effect.revenue || 0)
      }));
      
      setDecisions(prev => [...prev, {
        quarter: gameState.quarter,
        year: gameState.year,
        decision: option.name,
        cost: option.cost
      }]);
    }
  };

  const handleEventChoice = (choice: any) => {
    if (gameState.budget >= choice.cost) {
      setGameState(prev => ({
        ...prev,
        budget: prev.budget - choice.cost,
        cruces: prev.cruces + (choice.effect.cruces || 0),
        efficiency: Math.min(99, prev.efficiency + (choice.effect.efficiency || 0)),
        marketShare: Math.max(0, Math.min(100, prev.marketShare + (choice.effect.marketShare || 0))),
        totalRevenue: prev.totalRevenue + (choice.effect.revenue || 0),
        isPlaying: true
      }));
    }
    setCurrentEvent(null);
  };

  const resetGame = () => {
    setGameState({
      budget: 3000000000,
      quarter: 1,
      year: 2024,
      isPlaying: false,
      currentROI: 0,
      totalRevenue: 0,
      cruces: 0,
      efficiency: 85,
      marketShare: 5,
      score: 0
    });
    setDecisions([]);
    setCurrentEvent(null);
    setAchievements([]);
  };

  const toggleGame = () => {
    setGameState(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
  };

  const getROIColor = (roi: number) => {
    if (roi >= 50) return "text-green-400";
    if (roi >= 25) return "text-yellow-400";
    if (roi >= 0) return "text-orange-400";
    return "text-red-400";
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-800 to-zinc-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            <Target className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-300 font-medium text-sm">Simulador de Estrategia Gamificado</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sé el <span className="text-green-400">CEO</span> de 
            <br /><span className="text-purple-400">Tu Imperio CRUCES AI</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Toma decisiones estratégicas en tiempo real. Maximiza ROI, gestiona eventos aleatorios 
            y construye el imperio de seguridad ferroviaria más exitoso de Chile.
          </p>
        </motion.div>

        {/* Game Dashboard */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Game Stats */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Dashboard CEO</h3>
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-5 h-5" />
                  Q{gameState.quarter} {gameState.year}
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-zinc-700/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">
                    ${(gameState.budget / 1000000000).toFixed(1)}B
                  </div>
                  <div className="text-zinc-300 text-sm">Presupuesto</div>
                </div>
                
                <div className="bg-zinc-700/50 rounded-xl p-4 text-center">
                  <div className={`text-2xl font-bold ${getROIColor(gameState.currentROI)}`}>
                    {gameState.currentROI.toFixed(1)}%
                  </div>
                  <div className="text-zinc-300 text-sm">ROI Actual</div>
                </div>
                
                <div className="bg-zinc-700/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">
                    {gameState.cruces}
                  </div>
                  <div className="text-zinc-300 text-sm">Cruces Activos</div>
                </div>
                
                <div className="bg-zinc-700/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {gameState.score.toLocaleString()}
                  </div>
                  <div className="text-zinc-300 text-sm">Score Total</div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-zinc-300">Eficiencia IA</span>
                    <span className="text-white">{gameState.efficiency}%</span>
                  </div>
                  <div className="bg-zinc-700 rounded-full h-2">
                    <div 
                      className="bg-orange-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${gameState.efficiency}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-zinc-300">Market Share</span>
                    <span className="text-white">{gameState.marketShare}%</span>
                  </div>
                  <div className="bg-zinc-700 rounded-full h-2">
                    <div 
                      className="bg-blue-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${gameState.marketShare}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Game Controls */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-3">
                  <motion.button
                    onClick={toggleGame}
                    className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
                      gameState.isPlaying 
                        ? 'bg-red-600 hover:bg-red-700 text-white' 
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {gameState.isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    {gameState.isPlaying ? 'Pausar' : 'Iniciar'}
                  </motion.button>
                  
                  <motion.button
                    onClick={resetGame}
                    className="px-6 py-3 rounded-xl font-semibold bg-zinc-600 hover:bg-zinc-700 text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <RotateCcw className="w-5 h-5" />
                  </motion.button>
                </div>
                
                <div className="text-zinc-400 text-sm">
                  Objetivo: ROI &gt;55% en 24 meses
                </div>
              </div>
            </motion.div>
          </div>

          {/* Investment Options */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Opciones de Inversión</h3>
              
              <div className="space-y-3">
                {investmentOptions.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => makeInvestment(option)}
                    disabled={gameState.budget < option.cost}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                      gameState.budget >= option.cost
                        ? 'bg-zinc-700/50 hover:bg-zinc-600/50 text-white border border-zinc-600'
                        : 'bg-zinc-800/50 text-zinc-500 border border-zinc-700 cursor-not-allowed'
                    }`}
                    whileHover={gameState.budget >= option.cost ? { scale: 1.02 } : {}}
                    whileTap={gameState.budget >= option.cost ? { scale: 0.98 } : {}}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold">{option.name}</span>
                      <span className="text-orange-400 text-sm">
                        ${(option.cost / 1000000).toFixed(0)}M
                      </span>
                    </div>
                    <div className="text-zinc-400 text-sm">
                      {option.description}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Achievements */}
            {achievements.length > 0 && (
              <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-yellow-400" />
                  Logros Desbloqueados
                </h3>
                
                <div className="space-y-2">
                  {achievements.includes("roi50") && (
                    <div className="flex items-center gap-2 text-yellow-400">
                      <span>🏆</span>
                      <span>ROI Master: Alcanzaste 50% ROI</span>
                    </div>
                  )}
                  {achievements.includes("cruces25") && (
                    <div className="flex items-center gap-2 text-blue-400">
                      <span>🎯</span>
                      <span>Expansión Expert: 25+ cruces operativos</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Event Modal */}
        {currentEvent && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-zinc-800 rounded-2xl p-8 max-w-lg w-full border border-zinc-700"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                ⚡ {currentEvent.title}
              </h3>
              <p className="text-zinc-300 mb-6">
                {currentEvent.description}
              </p>
              
              <div className="space-y-3">
                {currentEvent.options.map((option: any, index: number) => (
                  <motion.button
                    key={index}
                    onClick={() => handleEventChoice(option)}
                    className="w-full p-4 bg-zinc-700 hover:bg-zinc-600 rounded-xl text-left transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white">{option.text}</span>
                      {option.cost > 0 && (
                        <span className="text-red-400">
                          -${(option.cost / 1000000).toFixed(0)}M
                        </span>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Recent Decisions */}
        {decisions.length > 0 && (
          <motion.div
            className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Historial de Decisiones</h3>
            
            <div className="space-y-3">
              {decisions.slice(-5).map((decision, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-zinc-700/30 rounded-lg">
                  <div>
                    <span className="text-white font-semibold">{decision.decision}</span>
                    <span className="text-zinc-400 text-sm ml-2">
                      Q{decision.quarter} {decision.year}
                    </span>
                  </div>
                  <span className="text-red-400">
                    -${(decision.cost / 1000000).toFixed(0)}M
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-green-600/20 to-purple-600/20 rounded-2xl p-8 border border-green-600/30 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Lograste el <span className="text-green-400">ROI Objetivo</span>?
            <br />Es Hora de <span className="text-purple-400">Hacerlo Real</span>
          </h3>
          <p className="text-zinc-300 mb-8 max-w-3xl mx-auto text-lg">
            Si pudiste maximizar el ROI en la simulación, imagina lo que puedes lograr 
            con la oportunidad real. El juego termina aquí, la fortuna real comienza ahora.
          </p>
          
          <motion.button
            onClick={() => document.getElementById('inversion')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-green-600 to-purple-600 hover:from-green-500 hover:to-purple-500 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Target className="w-6 h-6 inline mr-2" />
            Convertir Simulación en Realidad
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}