import { motion } from "framer-motion";
import { useState } from "react";
import { Play, X, Award, CheckCircle, Users, Target } from "lucide-react";

export default function VideoSection() {
  const [showVideo, setShowVideo] = useState(false);

  const validationPoints = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Validación Ferronor",
      description: "Empresa ferroviaria líder validó técnicamente la solución",
      color: "text-orange-400"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "12 Municipios Confirmados",
      description: "Contratos B2G de largo plazo ya asegurados",
      color: "text-green-400"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Equipo Especializado",
      description: "Expertos en IA, ferrocarriles y gestión municipal",
      color: "text-blue-400"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mercado Captivo",
      description: "Problemática real con demanda comprobada",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="video-section" className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Validación Técnica y Comercial
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            No es solo una idea. CRUCES AI está validado técnicamente por Ferronor 
            y respaldado por contratos municipales confirmados.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Demo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700">
              <div className="aspect-video bg-gradient-to-br from-orange-600/20 to-orange-400/10 flex items-center justify-center">
                <motion.button
                  onClick={() => setShowVideo(true)}
                  className="group bg-orange-600 hover:bg-orange-700 text-white p-6 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-8 h-8 ml-1" />
                </motion.button>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Demo: IA en Acción
                </h3>
                <p className="text-zinc-300">
                  Detectando infracciones en tiempo real con 95% de precisión
                </p>
              </div>
            </div>

            {/* Tech Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-zinc-800 p-4 rounded-lg text-center border border-zinc-700">
                <div className="text-2xl font-bold text-orange-400 mb-1">99.5%</div>
                <div className="text-zinc-300 text-sm">Precisión Patentes</div>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg text-center border border-zinc-700">
                <div className="text-2xl font-bold text-orange-400 mb-1">24/7</div>
                <div className="text-zinc-300 text-sm">Monitoreo Continuo</div>
              </div>
            </div>
          </motion.div>

          {/* Validation Points */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {validationPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 bg-zinc-800/50 rounded-xl border border-zinc-700/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`p-3 rounded-lg bg-zinc-700 ${point.color}`}>
                  {point.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {point.title}
                  </h4>
                  <p className="text-zinc-400">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-orange-600/20 to-orange-400/20 rounded-2xl p-8 border border-orange-600/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para Revolucionar la Seguridad Ferroviaria?
            </h3>
            <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
              Únete a la transformación digital del transporte ferroviario en Chile. 
              CRUCES AI no es el futuro, es el presente.
            </p>
            <motion.button
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Presentación Ejecutiva
            </motion.button>
          </div>
        </motion.div>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-12 right-0 text-white hover:text-orange-400"
              >
                <X size={32} />
              </button>
              <div className="aspect-video bg-zinc-800 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4 text-orange-400" />
                  <p className="text-xl">Demo Video CRUCES AI</p>
                  <p className="text-zinc-400 mt-2">Próximamente disponible</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}