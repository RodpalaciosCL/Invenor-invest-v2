import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { TrendingUp, DollarSign, Target, Zap, ArrowUpRight, Sparkles } from "lucide-react";

interface StatsData {
  label: string;
  value: number;
  format?: string;
  icon?: React.ReactNode;
  color?: string;
}

interface StatsSectionProps {
  data: StatsData[];
}

export default function StatsSection({ data }: StatsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const statsData = [
    {
      label: "ROI Proyectado",
      value: 49,
      format: "%",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      description: "Retorno de inversión garantizado en 26 meses",
      trend: "IRR 20.1% anual"
    },
    {
      label: "Margen Operativo",
      value: 70,
      format: "%",
      icon: <Zap className="w-8 h-8" />,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10", 
      description: "Margen neto del proyecto validado",
      trend: "vs 49% proyección inicial"
    },
    {
      label: "Retorno Total",
      value: 3053,
      format: "MM",
      prefix: "$",
      icon: <DollarSign className="w-8 h-8" />,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      description: "Retorno total proyectado 26 meses",
      trend: "USD $3,053,000,000"
    },
    {
      label: "Payback Period",
      value: 26,
      format: " meses",
      icon: <Target className="w-8 h-8" />,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      description: "Tiempo de recuperación total de inversión",
      trend: "Pago único mes 26"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-zinc-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-zinc-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-orange-600/20 border border-orange-600/30 rounded-full mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-300 font-medium text-sm">Métricas Clave de Inversión</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Métricas <span className="text-orange-400">Clave</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Resultados validados por Ferronor y respaldados por data real de 12 municipios confirmados
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className={`relative bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 hover:border-orange-600/50 transition-all duration-500 cursor-pointer group ${stat.bgColor}`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Floating Icon */}
              <motion.div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-6 relative z-10`}
                animate={hoveredIndex === index ? { 
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.1, 1]
                } : {}}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
                
                {/* Sparkle Effect */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                )}
              </motion.div>

              {/* Main Value */}
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  {stat.prefix && (
                    <span className="text-2xl font-bold text-zinc-400">
                      {stat.prefix}
                    </span>
                  )}
                  <span className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {isVisible ? (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        delay={index * 0.2}
                        decimals={stat.format === "B" ? 1 : 0}
                      />
                    ) : (
                      "0"
                    )}
                  </span>
                  <span className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.format}
                  </span>
                </div>
              </div>

              {/* Label */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                {stat.description}
              </p>

              {/* Trend Indicator */}
              <motion.div
                className="flex items-center gap-2 text-green-400 text-sm font-medium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
              >
                <ArrowUpRight className="w-4 h-4" />
                <span>{stat.trend}</span>
              </motion.div>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}