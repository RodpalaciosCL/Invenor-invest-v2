import { motion } from "framer-motion";
import { Building2, Globe, Target, TrendingUp } from "lucide-react";

export default function FutureOpportunities() {
  const expansionPlans = [
    {
      title: "Expansión Nacional",
      description: "Plan de implementación en 150+ municipios adicionales en Chile durante los próximos 3 años.",
      timeline: "2025-2027",
      icon: <Building2 className="w-8 h-8" />,
      scope: "Nacional"
    },
    {
      title: "Mercado Latinoamericano",
      description: "Evaluación de oportunidades en Colombia, Perú y México para tecnología de cruces ferroviarios.",
      timeline: "2026-2028",
      icon: <Globe className="w-8 h-8" />,
      scope: "Regional"
    },
    {
      title: "Tecnologías Complementarias",
      description: "Desarrollo de soluciones adicionales para infraestructura urbana inteligente.",
      timeline: "2025-2030",
      icon: <Target className="w-8 h-8" />,
      scope: "Tecnológico"
    }
  ];

  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
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
            Plan de <span className="text-orange-400">Expansión</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
            Estrategia de crecimiento para los próximos años basada en el éxito actual 
            de CRUCES AI en el mercado chileno.
          </p>
        </motion.div>

        {/* Expansion Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {expansionPlans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-zinc-700 rounded-xl text-orange-400">
                  {plan.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{plan.title}</h3>
                  <p className="text-orange-400 text-sm">{plan.scope}</p>
                </div>
              </div>
              
              <p className="text-zinc-300 mb-4 leading-relaxed">
                {plan.description}
              </p>
              
              <div className="bg-zinc-700/50 rounded-xl p-3">
                <div className="text-sm font-bold text-white mb-1">Timeline:</div>
                <div className="text-orange-300 text-sm">{plan.timeline}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Growth Metrics */}
        <motion.div
          className="bg-zinc-800/50 rounded-2xl p-8 border border-zinc-700/50 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Proyección de <span className="text-orange-400">Crecimiento</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">150+</div>
              <div className="text-white font-semibold mb-1">Municipios Objetivo</div>
              <div className="text-zinc-400 text-sm">Expansión nacional planificada</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">300+</div>
              <div className="text-white font-semibold mb-1">Cruces Adicionales</div>
              <div className="text-zinc-400 text-sm">Potencial de implementación</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">5x</div>
              <div className="text-white font-semibold mb-1">Crecimiento Proyectado</div>
              <div className="text-zinc-400 text-sm">Revenue en 3 años</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}