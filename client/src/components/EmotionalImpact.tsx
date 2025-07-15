import { motion } from "framer-motion";
import { Heart, Zap, Target, TrendingUp, Clock, DollarSign, Award, Rocket } from "lucide-react";
import CountUp from "react-countup";

export default function EmotionalImpact() {
  const impactStats = [
    {
      icon: <Heart className="w-8 h-8" />,
      value: 256,
      suffix: "%",
      label: "Incremento Recaudación",
      sublabel: "Cambio de vida para municipios",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: 15,
      suffix: " meses",
      label: "Payback Garantizado",
      sublabel: "Recuperación de inversión record",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: 3.1,
      suffix: "B USD",
      label: "Retorno Total Proyectado",
      sublabel: "Oportunidad única en la vida",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      value: 55,
      suffix: "%",
      label: "ROI Garantizado",
      sublabel: "Superando expectativas industria",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20"
    }
  ];

  const emotionalPoints = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Pioneros en Seguridad Ferroviaria",
      description: "Primera implementación de IA para monitoreo de cruces ferroviarios en Chile, estableciendo nuevo estándar de seguridad e innovación tecnológica.",
      emotion: "LEGACY",
      color: "text-orange-400"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Impacto Social Real",
      description: "Cada peso invertido se traduce en mayor seguridad en cruces ferroviarios, salvando vidas y protegiendo familias. Una inversión con propósito que trasciende los números.",
      emotion: "PROPÓSITO",
      color: "text-white"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Oportunidad de Mercado",
      description: "Ventana de entrada temprana en mercado no explotado con 1.500+ cruces ferroviarios sin tecnología de monitoreo en Chile.",
      emotion: "URGENCIA",
      color: "text-orange-400"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Retorno Financiero Proyectado",
      description: "ROI del 55% basado en proyecciones conservadoras de recaudación municipal y análisis de mercado validado.",
      emotion: "ABUNDANCIA",
      color: "text-white"
    }
  ];

  return (
    <section className="py-20 bg-zinc-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-zinc-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Métricas de <span className="text-orange-400">Impacto</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
            CRUCES AI genera impacto medible tanto en seguridad pública como en retornos financieros 
            para municipalidades e inversionistas.
          </p>
        </motion.div>

        {/* Impact Stats with Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 text-center relative overflow-hidden group"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.4)"
              }}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-zinc-700 rounded-2xl mb-6 ${stat.color}`}>
                  {stat.icon}
                </div>
                
                <div className={`text-4xl md:text-5xl font-black mb-2 ${stat.color}`}>
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.suffix.includes("B") ? 1 : 0}
                    suffix={stat.suffix}
                  />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-zinc-400 text-sm">
                  {stat.sublabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emotional Connection Points */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Por Qué Esta Oportunidad <span className="text-orange-400">Transforma Vidas</span>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {emotionalPoints.map((point, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 relative overflow-hidden"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-zinc-700 rounded-xl ${point.color} flex-shrink-0`}>
                    {point.icon}
                  </div>
                  <div className="flex-1">
                    <div className={`inline-block px-3 py-1 ${point.color.replace('text-', 'bg-').replace('-400', '-600/20')} rounded-full ${point.color} text-xs font-bold mb-3`}>
                      {point.emotion}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">
                      {point.title}
                    </h4>
                    <p className="text-zinc-300 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investment Information Section */}
        <motion.div
          className="bg-zinc-800/50 rounded-2xl p-8 border border-zinc-700/50 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Información de <span className="text-orange-400">Inversión</span>
          </h3>
          <p className="text-zinc-300 mb-8 max-w-3xl mx-auto text-lg">
            CRUCES AI ofrece una oportunidad de inversión en tecnología con impacto social medible. 
            Revise los detalles financieros y proyecciones para evaluar la propuesta.
          </p>

          <motion.button
            onClick={() => document.getElementById('inversion')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-600 hover:bg-orange-500 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-lg"
            whileHover={{ 
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Detalles de Inversión
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}