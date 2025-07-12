export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center text-center px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
          INVENOR
        </h1>
        <h2 className="text-2xl md:text-3xl text-orange-400 mb-8">
          Detección Inteligente de Cruces Ferroviarios
        </h2>
        <p className="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto">
          Plataforma de monitoreo automático que detecta infracciones en cruces ferroviarios, 
          genera evidencia legal trazable y optimiza la recaudación municipal.
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
          Solicitar Demo
        </button>
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