import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { DollarSign, Calculator, TrendingUp, RefreshCw } from "lucide-react";

export default function FinancialIndicators() {
  const [convertAmount, setConvertAmount] = useState("");
  const [convertFrom, setConvertFrom] = useState("USD");
  const [convertResult, setConvertResult] = useState("");

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

  const financialData = [
    {
      title: "Dólar USD",
      value: indicators.usd,
      symbol: "$",
      suffix: "CLP",
      change: "+19.35",
      changeType: "positive",
      icon: <DollarSign className="w-6 h-6" />,
      description: "Dólar observado"
    },
    {
      title: "Unidad de Fomento",
      value: indicators.uf,
      symbol: "$",
      suffix: "CLP",
      change: "Estable",
      changeType: "neutral",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "UF según BCCH"
    },
    {
      title: "Euro EUR",
      value: indicators.euro,
      symbol: "$",
      suffix: "CLP",
      change: "Variable",
      changeType: "neutral",
      icon: <DollarSign className="w-6 h-6" />,
      description: "Euro a peso chileno"
    },
    {
      title: "UTM Julio",
      value: indicators.utm,
      symbol: "$",
      suffix: "CLP",
      change: "Mensual",
      changeType: "neutral",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Unidad Tributaria Mensual"
    }
  ];

  return (
    <section className="py-20 bg-zinc-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-zinc-600/10 rounded-full blur-3xl"></div>
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
            <RefreshCw className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-300 font-medium text-sm">Indicadores Financieros Chile</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Valores <span className="text-orange-400">Actuales</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Indicadores económicos actualizados para tus cálculos de inversión INVENOR
          </p>
        </motion.div>

        {/* Indicators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {financialData.map((indicator, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600 rounded-xl text-white">
                  {indicator.icon}
                </div>
                <div className={`text-sm font-medium px-2 py-1 rounded-full ${
                  indicator.changeType === 'positive' ? 'bg-orange-600/20 text-orange-300' :
                  indicator.changeType === 'negative' ? 'bg-zinc-600/20 text-zinc-300' :
                  'bg-zinc-600/20 text-zinc-300'
                }`}>
                  {indicator.change}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">
                {indicator.title}
              </h3>
              
              <div className="text-2xl font-bold text-orange-400 mb-2">
                {indicator.symbol}{indicator.value.toLocaleString('es-CL')}
                <span className="text-sm text-zinc-400 ml-1">{indicator.suffix}</span>
              </div>
              
              <p className="text-sm text-zinc-400">
                {indicator.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Currency Calculator */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50">
            <div className="flex items-center justify-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-2xl text-white mr-4">
                <Calculator className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Calculadora de Conversión
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 items-end">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                  Monto
                </label>
                <input
                  type="number"
                  value={convertAmount}
                  onChange={(e) => setConvertAmount(e.target.value)}
                  placeholder="Ingresa monto"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-xl text-white placeholder-zinc-500 focus:border-orange-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                  Convertir desde
                </label>
                <select
                  value={convertFrom}
                  onChange={(e) => setConvertFrom(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-xl text-white focus:border-orange-500 focus:outline-none transition-colors"
                >
                  <option value="USD">Dólares (USD)</option>
                  <option value="UF">Unidades de Fomento (UF)</option>
                  <option value="EUR">Euros (EUR)</option>
                </select>
              </div>

              <div>
                <motion.button
                  onClick={handleConvert}
                  className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Convertir a CLP
                </motion.button>
              </div>
            </div>

            {convertResult && (
              <motion.div
                className="mt-6 p-4 bg-orange-600/20 border border-orange-600/30 rounded-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-400 mb-1">
                    Resultado
                  </div>
                  <div className="text-xl font-bold text-white">
                    {convertResult}
                  </div>
                </div>
              </motion.div>
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-zinc-500">
                Valores actualizados al 14 de julio 2025 según Banco Central de Chile
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}