import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AlertTriangle, Camera, Brain, TrendingUp, ChevronRight, Train, Shield, Zap } from "lucide-react";

export default function IntroSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const steps = [
    {
      id: "problema",
      title: "El Problema",
      subtitle: "Crisis en Cruces Ferroviarios",
      description: "Más de 1.500 cruces ferroviarios sin monitoreo automatizado en Chile. Infraestructura crítica sin supervisión tecnológica moderna.",
      icon: AlertTriangle,
      color: "text-zinc-400",
      bgColor: "bg-zinc-400/10",
      stats: "1.500+ cruces desprotegidos"
    },
    {
      id: "vacio",
      title: "El Vacío de Fiscalización",
      subtitle: "Sin Capacidad de Control",
      description: "Las municipalidades carecen de recursos técnicos para monitorear efectivamente estos puntos de infraestructura crítica.",
      icon: Shield,
      color: "text-zinc-500",
      bgColor: "bg-zinc-500/10",
      stats: "0% fiscalización efectiva"
    },
    {
      id: "solucion",
      title: "La Solución Tecnológica",
      subtitle: "IA + Visión Computacional",
      description: "Sistema de cámaras inteligentes con procesamiento de datos mediante inteligencia artificial para monitoreo automatizado 24/7.",
      icon: Brain,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      stats: "95% precisión IA"
    },
    {
      id: "impacto",
      title: "El Modelo de Impacto",
      subtitle: "Inversión con Propósito",
      description: "Modelo de negocio basado en revenue compartido con municipalidades, generando flujos de ingresos recurrentes y retornos para inversionistas.",
      icon: TrendingUp,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      stats: "55% ROI proyectado"
    }
  ];

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoPlay, steps.length]);

  const scrollToMetrics = () => {
    document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            De la Crisis a la <span className="text-orange-400">Oportunidad</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Descubre cómo INVENOR transforma un problema nacional en una inversión con impacto social y retorno financiero validado
          </p>
        </motion.div>

        {/* Story Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Navigation Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentStep;
              
              return (
                <motion.div
                  key={step.id}
                  className={`relative p-6 rounded-2xl border cursor-pointer transition-all duration-500 ${
                    isActive 
                      ? 'bg-zinc-800 border-orange-400/50 shadow-2xl' 
                      : 'bg-zinc-800/30 border-zinc-700/50 hover:border-zinc-600'
                  }`}
                  onClick={() => {
                    setCurrentStep(index);
                    setAutoPlay(false);
                  }}
                  whileHover={{ scale: 1.02 }}
                  layout
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`p-3 rounded-xl ${step.bgColor} ${isActive ? step.color : 'text-zinc-500'}`}
                      animate={{ scale: isActive ? 1.1 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`text-lg font-semibold ${isActive ? 'text-white' : 'text-zinc-400'}`}>
                          {step.title}
                        </h3>
                        <span className={`text-sm font-medium ${isActive ? 'text-orange-400' : 'text-zinc-500'}`}>
                          {step.stats}
                        </span>
                      </div>
                      
                      <p className={`text-sm ${isActive ? 'text-zinc-300' : 'text-zinc-500'}`}>
                        {step.subtitle}
                      </p>
                      
                      <motion.div
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0, height: isActive ? 'auto' : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-zinc-400 mt-3 leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                  
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-0 w-1 h-full bg-orange-400 rounded-r"
                      layoutId="activeIndicator"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Visual Content */}
          <div className="relative">
            <motion.div
              className="bg-zinc-800 rounded-3xl p-8 border border-zinc-700/50"
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Visual Icons based on current step */}
              <div className="flex justify-center mb-8">
                {currentStep === 0 && (
                  <div className="relative">
                    <Train className="w-20 h-20 text-red-400" />
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <AlertTriangle className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>
                )}
                
                {currentStep === 1 && (
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-12 h-12 bg-zinc-700 rounded-lg flex items-center justify-center"
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      >
                        <Shield className="w-6 h-6 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                )}
                
                {currentStep === 2 && (
                  <div className="relative">
                    <Camera className="w-20 h-20 text-orange-400" />
                    <motion.div
                      className="absolute top-0 right-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Brain className="w-5 h-5 text-white" />
                    </motion.div>
                    <motion.div
                      className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      <Zap className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>
                )}
                
                {currentStep === 3 && (
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      className="bg-green-500/20 p-4 rounded-lg text-center"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <p className="text-sm text-green-400 font-semibold">Inversionistas</p>
                    </motion.div>
                    <motion.div
                      className="bg-orange-500/20 p-4 rounded-lg text-center"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    >
                      <Shield className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                      <p className="text-sm text-orange-400 font-semibold">Municipalidades</p>
                    </motion.div>
                    <motion.div
                      className="bg-blue-500/20 p-4 rounded-lg text-center col-span-2"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    >
                      <Train className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <p className="text-sm text-blue-400 font-semibold">Seguridad Ciudadana</p>
                    </motion.div>
                  </div>
                )}
              </div>
              
              {/* Step Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {steps[currentStep].title}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {steps[currentStep].description}
                </p>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${steps[currentStep].bgColor}`}>
                  <span className={`text-sm font-semibold ${steps[currentStep].color}`}>
                    {steps[currentStep].stats}
                  </span>
                </div>
              </div>
            </motion.div>
            
            {/* Progress Indicator */}
            <div className="flex justify-center mt-6 gap-3">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentStep(index);
                    setAutoPlay(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStep 
                      ? 'bg-orange-400 w-8' 
                      : 'bg-zinc-600 hover:bg-zinc-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA de Transición */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-zinc-800/50 rounded-3xl p-8 border border-zinc-700/50 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Información de <span className="text-orange-400">Inversión</span>
            </h3>
            <p className="text-xl text-zinc-400 mb-8">
              CRUCES AI ofrece una oportunidad de inversión con retornos proyectados basados en datos reales.
            </p>
            
            <motion.button
              onClick={scrollToMetrics}
              className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Análisis Financiero
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}