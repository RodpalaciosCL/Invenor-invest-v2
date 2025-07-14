import { motion } from "framer-motion";
import CountUp from "react-countup";
import { TrendingUp, Target, Clock, DollarSign } from "lucide-react";

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
  const defaultStats: StatsData[] = [
    {
      label: "ROI Proyectado",
      value: 55,
      format: "%",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-green-400"
    },
    {
      label: "Eficiencia IA",
      value: 95,
      format: "%",
      icon: <Target className="w-8 h-8" />,
      color: "text-orange-400"
    },
    {
      label: "Payback",
      value: 15,
      format: " meses",
      icon: <Clock className="w-8 h-8" />,
      color: "text-blue-400"
    },
    {
      label: "Retorno Total",
      value: 3096,
      format: "M",
      icon: <DollarSign className="w-8 h-8" />,
      color: "text-purple-400"
    }
  ];

  const statsToShow = data.length > 0 ? data : defaultStats;

  return (
    <section className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Métricas Clave del Proyecto
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Datos reales basados en validación técnica con Ferronor y análisis financiero detallado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsToShow.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 text-center hover:border-orange-600/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-700 mb-6 ${stat.color || 'text-orange-400'}`}>
                {stat.icon || <TrendingUp className="w-8 h-8" />}
              </div>

              {/* Value with CountUp */}
              <div className="mb-4">
                <div className={`text-4xl font-bold ${stat.color || 'text-orange-400'}`}>
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    delay={index * 0.2}
                    preserveValue
                  />
                  {stat.format && (
                    <span className="text-2xl">{stat.format}</span>
                  )}
                </div>
              </div>

              {/* Label */}
              <h3 className="text-white font-semibold text-lg">
                {stat.label}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-orange-600/10 to-orange-400/10 rounded-2xl p-8 border border-orange-600/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-orange-400 mb-2">$2.3B</div>
              <p className="text-zinc-300">Pérdidas anuales por infracciones no detectadas</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400 mb-2">256%</div>
              <p className="text-zinc-300">Incremento recaudación comprobado</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400 mb-2">24/7</div>
              <p className="text-zinc-300">Monitoreo continuo automatizado</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}