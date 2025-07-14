import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Calculator, Menu, X } from "lucide-react";

export default function NavigationBar() {
  const [activeSection, setActiveSection] = useState("");
  const [showCalculator, setShowCalculator] = useState(false);
  const [convertAmount, setConvertAmount] = useState("");
  const [convertFrom, setConvertFrom] = useState("USD");
  const [convertResult, setConvertResult] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Valores actuales al 14 de julio 2025
  const indicators = {
    usd: 949.78,
    uf: 39265.20,
    euro: 1091.06,
    utm: 68785.0
  };

  const handleConvert = () => {
    const amount = parseFloat(convertAmount);
    if (!amount || amount <= 0) {
      setConvertResult("Ingresa un monto válido");
      return;
    }

    let result = 0;
    let resultText = "";

    if (convertFrom === "USD") {
      result = amount * indicators.usd;
      resultText = `$${amount.toLocaleString('es-CL')} USD = $${result.toLocaleString('es-CL')} CLP`;
    } else if (convertFrom === "UF") {
      result = amount * indicators.uf;
      resultText = `${amount.toLocaleString('es-CL')} UF = $${result.toLocaleString('es-CL')} CLP`;
    } else if (convertFrom === "EUR") {
      result = amount * indicators.euro;
      resultText = `€${amount.toLocaleString('es-CL')} EUR = $${result.toLocaleString('es-CL')} CLP`;
    }

    setConvertResult(resultText);
  };

  useEffect(() => {

    const handleScroll = () => {
      const sections = [
        "hero", "stats", "problema", "comparacion", "data-room", 
        "esg", "casos", "demo", "validacion", "simulador", 
        "timeline", "ranking", "proyecciones", "inversion"
      ];

      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigationItems = [
    { id: "hero", label: "Overview" },
    { id: "stats", label: "Métricas" },
    { id: "comparacion", label: "Comparación" },
    { id: "data-room", label: "Data Room" },
    { id: "simulador", label: "Simulador" },
    { id: "inversion", label: "Inversión" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-zinc-900/30 backdrop-blur-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-center items-center w-full py-3">
        <div className="flex justify-between items-center w-[90%] max-w-[1400px]">
          
          {/* Logo a la izquierda */}
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="https://res.cloudinary.com/dhobnlg73/image/upload/v1752531633/Untitled_design_7_lr3xod.png" 
              alt="INVENOR Logo" 
              className="w-12 h-12"
            />
          </motion.div>
          
          {/* Menú centrado - Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-item relative text-white text-sm font-medium tracking-wide py-2 px-4 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg'
                    : 'hover:text-orange-400 hover:bg-orange-400/10 hover:-translate-y-0.5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
          
          {/* Calculator a la derecha - Desktop */}
          <div className="hidden md:flex items-center">
            {/* Calculator Button */}
            <div className="relative">
              <motion.button
                onClick={() => setShowCalculator(!showCalculator)}
                className={`p-3 rounded-full transition-all duration-300 ${
                  showCalculator
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'text-zinc-400 hover:text-orange-400 hover:bg-orange-400/10'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calculator className="w-5 h-5" />
              </motion.button>

              {/* Calculator Dropdown */}
              <AnimatePresence>
                {showCalculator && (
                  <motion.div
                    className="absolute top-full mt-3 right-0 w-80 bg-zinc-900/95 backdrop-blur-lg border border-zinc-700/50 rounded-2xl p-6 shadow-2xl"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-orange-400" />
                        Calculadora CLP
                      </h3>
                      
                      {/* Current Indicators */}
                      <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                        <div className="bg-zinc-800/50 p-2 rounded-lg">
                          <div className="text-zinc-400">USD</div>
                          <div className="text-orange-400 font-bold">${indicators.usd.toLocaleString('es-CL')}</div>
                        </div>
                        <div className="bg-zinc-800/50 p-2 rounded-lg">
                          <div className="text-zinc-400">UF</div>
                          <div className="text-orange-400 font-bold">${indicators.uf.toLocaleString('es-CL')}</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <input
                          type="number"
                          value={convertAmount}
                          onChange={(e) => setConvertAmount(e.target.value)}
                          placeholder="Monto"
                          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded-lg text-white text-sm placeholder-zinc-500 focus:border-orange-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <select
                          value={convertFrom}
                          onChange={(e) => setConvertFrom(e.target.value)}
                          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded-lg text-white text-sm focus:border-orange-500 focus:outline-none"
                        >
                          <option value="USD">Dólares (USD)</option>
                          <option value="UF">UF</option>
                          <option value="EUR">Euros (EUR)</option>
                        </select>
                      </div>

                      <motion.button
                        onClick={handleConvert}
                        className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Convertir a CLP
                      </motion.button>

                      {convertResult && (
                        <motion.div
                          className="p-3 bg-orange-600/20 border border-orange-600/30 rounded-lg"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <div className="text-orange-400 font-bold text-sm text-center">
                            {convertResult}
                          </div>
                        </motion.div>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-700">
                      <p className="text-xs text-zinc-500 text-center">
                        Valores 14 jul 2025 - BCCH
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-zinc-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-4">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-orange-600 text-white'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}