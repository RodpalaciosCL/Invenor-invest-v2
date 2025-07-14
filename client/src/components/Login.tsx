import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Shield, Sparkles } from "lucide-react";

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const correctPassword = "243678";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate loading for better UX
    setTimeout(() => {
      if (password === correctPassword) {
        onLogin();
      } else {
        setError("Contraseña incorrecta. Contacta al equipo INVENOR para acceso.");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400/5 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <motion.div
        className="w-full max-w-md relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo and Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-orange-600/20 border border-orange-600/30 rounded-full mb-6">
            <Shield className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-300 font-medium text-sm">Acceso Restringido - Solo Inversionistas</span>
          </div>

          <img 
            src="https://res.cloudinary.com/dhobnlg73/image/upload/v1751486212/Untitled_design_6_g3yugq.png" 
            alt="INVENOR Logo" 
            className="w-20 h-20 mx-auto mb-4"
          />
          
          <h1 className="text-4xl font-bold text-white mb-2">
            <span className="bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
              INVENOR
            </span>
          </h1>
          <p className="text-zinc-400 text-lg">
            Pitch Deck Interactivo - CRUCES AI
          </p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Acceso Inversionistas
            </h2>
            <p className="text-zinc-400">
              Ingresa la contraseña para ver el pitch deck completo
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Contraseña de Acceso
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Ingresa la contraseña..."
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-300 text-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {error}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 disabled:from-zinc-600 disabled:to-zinc-600 text-white py-3 px-6 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Verificando...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Acceder al Pitch Deck
                </>
              )}
            </motion.button>
          </form>

          {/* Info Section */}
          <motion.div
            className="mt-8 pt-6 border-t border-zinc-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center space-y-3">
              <h3 className="text-lg font-semibold text-white">¿No tienes acceso?</h3>
              <p className="text-zinc-400 text-sm">
                Este pitch deck contiene información confidencial sobre oportunidades de inversión. 
                Contacta al equipo INVENOR para solicitar acceso.
              </p>
              <div className="flex justify-center gap-4 text-xs text-zinc-500">
                <span>📧 contacto@invenor.cl</span>
                <span>📞 +56 9 XXXX XXXX</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Disclaimer */}
        <motion.div
          className="text-center mt-6 text-xs text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p>
            © 2024 INVENOR. Información confidencial y reservada para inversionistas autorizados.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}