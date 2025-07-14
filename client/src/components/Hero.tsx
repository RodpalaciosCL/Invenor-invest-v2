export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center text-center px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
          INVENOR
        </h1>
        <h2 className="text-2xl md:text-4xl text-orange-400 mb-8">
          Sistema de Cámaras Inteligentes con IA para Cruces
        </h2>
        <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
          Primera solución integral B2G que aumenta la eficiencia de detección del 22% al 95%, 
          generando retornos del 55% ROI en 24 meses para municipalidades.
        </p>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-zinc-800 bg-opacity-60 p-4 rounded-lg">
            <div className="text-2xl font-bold text-orange-400">55%</div>
            <div className="text-zinc-300 text-sm">ROI</div>
          </div>
          <div className="bg-zinc-800 bg-opacity-60 p-4 rounded-lg">
            <div className="text-2xl font-bold text-orange-400">95%</div>
            <div className="text-zinc-300 text-sm">Eficiencia IA</div>
          </div>
          <div className="bg-zinc-800 bg-opacity-60 p-4 rounded-lg">
            <div className="text-2xl font-bold text-orange-400">15</div>
            <div className="text-zinc-300 text-sm">meses payback</div>
          </div>
          <div className="bg-zinc-800 bg-opacity-60 p-4 rounded-lg">
            <div className="text-2xl font-bold text-orange-400">$3.1B</div>
            <div className="text-zinc-300 text-sm">retorno total</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
            Solicitar Demo
          </button>
          <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
            Ver Análisis Financiero
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-zinc-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-zinc-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}