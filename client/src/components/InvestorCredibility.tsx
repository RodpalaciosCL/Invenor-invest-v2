import { motion } from "framer-motion";
import { Shield, Award, Users, TrendingUp, CheckCircle, Star, Building, Target } from "lucide-react";

export default function InvestorCredibility() {
  const teamCredentials = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "15+ Años",
      subtitle: "Experiencia Ferroviaria",
      description: "Equipo con track record comprobado en sector ferroviario y municipal chileno",
      badge: "EXPERIENCIA"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Portfolio B2G",
      subtitle: "Relaciones Establecidas",
      description: "Red consolidada con municipios y empresas ferroviarias a nivel nacional",
      badge: "CONEXIONES"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Execution Track",
      subtitle: "Resultados Medibles",
      description: "Historial de delivery exitoso en proyectos tecnológicos complejos",
      badge: "EJECUCIÓN"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Respaldo Legal",
      subtitle: "Estructura Sólida",
      description: "Estructura corporativa robusta con compliance y governance establecido",
      badge: "SOLIDEZ"
    }
  ];

  const marketValidation = [
    {
      metric: "12",
      label: "Municipios Comprometidos",
      sublabel: "Contratos firmados, no intenciones",
      icon: "🏛️"
    },
    {
      metric: "95%",
      label: "Precisión Técnica",
      sublabel: "Validada por Ferronor líder sector",
      icon: "🎯"
    },
    {
      metric: "256%",
      label: "ROI Demostrado",
      sublabel: "Incrementos reales medidos",
      icon: "📈"
    },
    {
      metric: "15M",
      label: "Revenue Year 1",
      sublabel: "Pipeline confirmado USD",
      icon: "💰"
    }
  ];

  const riskMitigation = [
    {
      risk: "Riesgo Técnico",
      mitigation: "Tecnología validada por Ferronor + 95% precisión comprobada",
      status: "BAJO",
      color: "text-orange-400"
    },
    {
      risk: "Riesgo Comercial", 
      mitigation: "12 contratos municipales firmados + demanda urgente sector",
      status: "BAJO",
      color: "text-orange-400"
    },
    {
      risk: "Riesgo Financiero",
      mitigation: "ROI 55% respaldado por contratos + payback 15 meses",
      status: "BAJO", 
      color: "text-orange-400"
    },
    {
      risk: "Riesgo Competencia",
      mitigation: "First mover + barreras entrada + validación exclusiva",
      status: "MODERADO",
      color: "text-zinc-400"
    }
  ];

  return (
    <section className="py-20 bg-zinc-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-zinc-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            <Shield className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-300 font-medium text-sm">Due Diligence Ready - Transparencia Total</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            La Diferencia: <span className="text-orange-400">Credibilidad</span> 
            <br />y <span className="text-orange-400">Transparencia Absoluta</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            No somos una startup teórica. Somos un equipo con track record comprobado, 
            tecnología validada y contratos reales. Todo verificable y auditable.
          </p>
        </motion.div>

        {/* Team Credentials */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Equipo con <span className="text-orange-400">Track Record</span> Comprobado
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamCredentials.map((credential, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-2xl mb-4 text-white">
                  {credential.icon}
                </div>
                
                <div className="inline-block px-3 py-1 bg-orange-600/20 rounded-full text-orange-300 text-xs font-bold mb-3">
                  {credential.badge}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-1">
                  {credential.title}
                </h4>
                <p className="text-blue-400 font-semibold mb-3">
                  {credential.subtitle}
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {credential.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Market Validation Metrics */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Validación de Mercado <span className="text-green-400">Irrefutable</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketValidation.map((validation, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 text-center relative overflow-hidden group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl mb-4">{validation.icon}</div>
                <div className="text-4xl font-black text-green-400 mb-2">
                  {validation.metric}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {validation.label}
                </h4>
                <p className="text-zinc-400 text-sm">
                  {validation.sublabel}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Risk Analysis */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Análisis de Riesgos <span className="text-orange-400">Transparente</span>
          </h3>
          
          <div className="space-y-4">
            {riskMitigation.map((item, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h4 className="text-lg font-bold text-white">
                        {item.risk}
                      </h4>
                      <div className={`px-3 py-1 ${item.color.replace('text-', 'bg-').replace('-400', '-600/20')} rounded-full ${item.color} text-xs font-bold`}>
                        {item.status}
                      </div>
                    </div>
                    <p className="text-zinc-300 leading-relaxed">
                      <span className="font-semibold">Mitigación:</span> {item.mitigation}
                    </p>
                  </div>
                  <div className={`p-2 rounded-lg ${item.color}`}>
                    <CheckCircle className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Builder CTA */}
        <motion.div
          className="bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-2xl p-8 border border-blue-600/30 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            <span className="text-blue-400">100% Verificable</span> - 
            <span className="text-green-400"> 0% Especulación</span>
          </h3>
          <p className="text-zinc-300 mb-8 max-w-3xl mx-auto text-lg">
            Cada métrica, cada contrato, cada validación es auditable. 
            Ofrecemos acceso completo a data room con toda la documentación 
            para verificación independiente. Transparencia total.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-200 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Shield className="w-5 h-5" />
              Acceder Data Room
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('inversion')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-200 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <TrendingUp className="w-5 h-5" />
              Invertir Ahora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}