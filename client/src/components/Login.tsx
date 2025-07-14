import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Shield, CheckCircle } from "lucide-react";

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // INVENOR investor password
    if (password === "243678") {
      // Track visitor login
      try {
        await fetch('/api/visitor-track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            userType: 'investor',
            action: 'login',
            metadata: { timestamp: new Date().toISOString() }
          })
        });
      } catch (err) {
        console.log('Analytics tracking failed:', err);
      }
      
      onLogin();
    } else {
      setError("Código de acceso incorrecto");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-orange-900/20 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        className="relative z-10 w-full max-w-md p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-zinc-900/80 backdrop-blur-xl rounded-2xl p-8 border border-zinc-700/50 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-orange-600/20 rounded-full mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Shield className="w-8 h-8 text-orange-400" />
            </motion.div>
            
            <h1 className="text-2xl font-bold text-white mb-2">
              INVENOR
            </h1>
            <p className="text-zinc-400 text-sm">
              Acceso exclusivo para inversionistas
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Código de Acceso
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="Ingrese su código"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-zinc-300"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {error}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 disabled:from-zinc-600 disabled:to-zinc-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:hover:scale-100 flex items-center justify-center gap-2"
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <CheckCircle size={20} />
                  Acceder
                </>
              )}
            </motion.button>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-zinc-700/50">
            <p className="text-xs text-zinc-500 text-center">
              Presentación confidencial para inversionistas calificados
            </p>
            <div className="flex justify-center gap-4 mt-3">
              <div className="flex items-center gap-1 text-xs text-zinc-500">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Seguro
              </div>
              <div className="flex items-center gap-1 text-xs text-zinc-500">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                Confidencial
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}