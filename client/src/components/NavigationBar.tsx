import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown, BarChart3, PieChart, TrendingUp, Shield, Zap, Users } from "lucide-react";

export default function NavigationBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 100);
    };

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

    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigationItems = [
    { id: "hero", label: "Overview", icon: <Zap className="w-4 h-4" /> },
    { id: "stats", label: "Métricas", icon: <BarChart3 className="w-4 h-4" /> },
    { id: "comparacion", label: "Comparación", icon: <PieChart className="w-4 h-4" /> },
    { id: "data-room", label: "Data Room", icon: <Shield className="w-4 h-4" /> },
    { id: "simulador", label: "Simulador", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "inversion", label: "Inversión", icon: <Users className="w-4 h-4" /> }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 bg-zinc-900/90 backdrop-blur-lg border border-zinc-700/50 rounded-2xl px-6 py-3 shadow-2xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-1">
        {navigationItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeSection === item.id
                ? 'bg-orange-600 text-white shadow-lg'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.icon}
            <span className="hidden md:inline">{item.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}