export default function Map() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Mapa de Cruces Monitoreados</h2>
        <p className="text-xl text-zinc-400">
          Red nacional de puntos de control ferroviario
        </p>
      </div>
      
      <div className="bg-zinc-800 rounded-xl p-8">
        {/* Map placeholder */}
        <div className="h-96 bg-zinc-900 rounded-lg flex items-center justify-center mb-8">
          <div className="text-center">
            <svg className="w-20 h-20 mx-auto mb-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19S6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6Z"/>
            </svg>
            <h3 className="text-2xl font-semibold text-white mb-2">Mapa Interactivo</h3>
            <p className="text-zinc-400 mb-4">Visualización de la red de monitoreo INVENOR</p>
            <p className="text-zinc-500">Próximamente disponible</p>
          </div>
        </div>
        
        {/* Map stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-zinc-700 rounded-lg">
            <div className="text-2xl font-bold text-orange-400 mb-1">1,200</div>
            <div className="text-zinc-300">km de red cubiertos</div>
          </div>
          <div className="text-center p-4 bg-zinc-700 rounded-lg">
            <div className="text-2xl font-bold text-orange-400 mb-1">78</div>
            <div className="text-zinc-300">cruces monitoreados</div>
          </div>
          <div className="text-center p-4 bg-zinc-700 rounded-lg">
            <div className="text-2xl font-bold text-orange-400 mb-1">12</div>
            <div className="text-zinc-300">comunas activas</div>
          </div>
          <div className="text-center p-4 bg-zinc-700 rounded-lg">
            <div className="text-2xl font-bold text-orange-400 mb-1">24/7</div>
            <div className="text-zinc-300">monitoreo continuo</div>
          </div>
        </div>
      </div>
    </section>
  )
}