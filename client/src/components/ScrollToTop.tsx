import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Home } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50 flex flex-col gap-3"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="group bg-orange-600 hover:bg-orange-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Volver al inicio"
          >
            <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
          </motion.button>

          {/* Home/Logo Button */}
          <motion.button
            onClick={scrollToTop}
            className="group bg-zinc-800 hover:bg-zinc-700 text-white p-4 rounded-full shadow-2xl border border-zinc-600 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="INVENOR - Inicio"
          >
            <Home className="w-6 h-6 group-hover:text-orange-400 transition-colors" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}