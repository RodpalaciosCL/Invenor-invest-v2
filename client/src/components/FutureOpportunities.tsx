import { motion } from "framer-motion";
import { Rocket, Crown, Lock, Zap, Globe, TrendingUp, Star, ArrowRight } from "lucide-react";

export default function FutureOpportunities() {
  const opportunities = [
    {
      id: "negocio-1",
      title: "NEGOCIO 1",
      subtitle: "Próxima Revolución B2G",
      description: "Expansión exclusiva para early investors con acceso prioritario a la siguiente oportunidad disruptiva en el sector público.",
      icon: <Rocket className="w-8 h-8" />,
      badge: "PRÓXIMAMENTE",
      color: "from-zinc-500 to-zinc-700",
      priority: "🥇 PRIORIDAD ABSOLUTA"
    },
    {
      id: "negocio-2", 
      title: "NEGOCIO 2",
      subtitle: "Mercado Internacional",
      description: "Acceso exclusivo a expansión LATAM con potencial de mercado de miles de millones USD para inversores tempranos.",
      icon: <Globe className="w-8 h-8" />,
      badge: "EN DESARROLLO",
      color: "from-zinc-600 to-zinc-800",
      priority: "🥈 ACCESO PREFERENCIAL"
    },
    {
      id: "negocio-3",
      title: "NEGOCIO 3", 
      subtitle: "Tecnología Disruptiva",
      description: "Portfolio de innovación exclusivo con tecnologías complementarias para crear ecosistema integral de soluciones.",
      icon: <Zap className="w-8 h-8" />,
      badge: "CONCEPTUALIZACIÓN",
      color: "from-orange-500 to-orange-700",
      priority: "🥉 PARTICIPACIÓN GARANTIZADA"
    }
  ];

  const investorBenefits = [
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Acceso VIP",
      description: "Primera opción en todas las futuras oportunidades de INVENOR",
      highlight: "EXCLUSIVO"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Deal Flow Privado",
      description: "Información privilegiada y términos preferenciales",
      highlight: "PRIVADO"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Early Bird Terms",
      description: "Condiciones superiores por ser inversor fundacional",
      highlight: "PREMIUM"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Portfolio Sinergias",
      description: "Beneficios cruzados entre todas las ventures de INVENOR",
      highlight: "MULTIPLICADOR"
    }
  ];

  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
          <div className="inline-flex items-center px-4 py-2 bg-zinc-600/20 border border-zinc-600/30 rounded-full mb-6">
            <Crown className="w-4 h-4 text-zinc-400 mr-2" />
            <span className="text-zinc-300 font-medium text-sm">Para Inversores Fundacionales</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            No Solo Inviertes en <span className="text-orange-400">CRUCES AI</span>
            <br />Accedes al <span className="text-orange-400">Ecosistema INVENOR</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Los inversores en CRUCES AI obtienen acceso prioritario a todas las futuras 
            oportunidades del portfolio INVENOR. Una ventaja que multiplica el valor de tu inversión.
          </p>
        </motion.div>

        {/* Future Opportunities */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Pipeline de <span className="text-orange-400">Oportunidades Exclusivas</span>
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.id}
                className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${opportunity.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative z-10">
                  {/* Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${opportunity.color} rounded-full text-white text-xs font-bold`}>
                      {opportunity.badge}
                    </div>
                    <div className={`p-3 bg-zinc-700 rounded-xl text-white`}>
                      {opportunity.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {opportunity.title}
                  </h4>
                  <p className="text-orange-400 font-semibold mb-4">
                    {opportunity.subtitle}
                  </p>
                  <p className="text-zinc-300 mb-6 leading-relaxed">
                    {opportunity.description}
                  </p>

                  {/* Priority Badge */}
                  <div className="bg-zinc-700/50 rounded-xl p-3 mb-4">
                    <div className="text-sm font-bold text-white mb-1">
                      Beneficio Inversor:
                    </div>
                    <div className="text-orange-300 text-sm">
                      {opportunity.priority}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    className="w-full bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Acceso Reservado
                    <Lock className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investor Benefits */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Ventajas del <span className="text-orange-400">Ecosistema</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investorBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-zinc-600 rounded-xl mb-4 text-white">
                  {benefit.icon}
                </div>
                
                <div className="inline-block px-3 py-1 bg-zinc-600/20 rounded-full text-zinc-300 text-xs font-bold mb-3">
                  {benefit.highlight}
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="bg-zinc-800/50 rounded-2xl p-8 border border-zinc-700/50 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            La Ventana de Oportunidad es <span className="text-orange-400">Ahora</span>
          </h3>
          <p className="text-zinc-300 mb-8 max-w-3xl mx-auto text-lg">
            Los inversores que participen en CRUCES AI no solo obtienen ROI del 55%, 
            sino acceso privilegiado a todo el ecosistema futuro de INVENOR. 
            Una ventaja competitiva que se multiplica con cada nueva oportunidad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => document.getElementById('inversion')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Detalles de Inversión
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="border-2 border-zinc-600 text-zinc-400 hover:bg-zinc-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-200 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Portfolio Completo
              <Crown className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}