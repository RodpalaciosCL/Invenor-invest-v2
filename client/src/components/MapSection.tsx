export default function MapSection() {
  return (
    <section className="py-16 bg-zinc-800 text-center px-4">
      <h2 className="text-3xl font-bold mb-8">Mapa de Cruces Monitoreados</h2>
      <div className="h-80 bg-zinc-700 rounded-lg flex items-center justify-center mx-auto max-w-4xl">
        <div className="text-center">
          <svg className="w-16 h-16 mx-auto mb-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19S6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6Z"/>
          </svg>
          <p className="text-zinc-400 text-lg">Mapa Interactivo de Cruces</p>
          <p className="text-zinc-500 text-sm mt-2">Visualización en desarrollo</p>
          <div className="mt-4 text-zinc-400 text-sm">
            <p>• Red de 1,200 km monitoreados</p>
            <p>• 12 comunas cubiertas</p>
            <p>• Tiempo real de detecciones</p>
          </div>
        </div>
      </div>
    </section>
  )
}