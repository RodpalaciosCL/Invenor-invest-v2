export default function DemoVideo() {
  return (
    <section className="py-20 bg-zinc-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Demo INVENOR</h2>
          <p className="text-xl text-zinc-400">
            Mira cómo funciona nuestra tecnología en tiempo real
          </p>
        </div>
        
        {/* Placeholder for video */}
        <div className="relative bg-zinc-900 rounded-xl overflow-hidden">
          <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-orange-600 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8,5.14V19.14L19,12.14L8,5.14Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Demo Interactivo</h3>
              <p className="text-zinc-400 mb-6">Video demostrativo de la plataforma INVENOR</p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Ver Demo Completo
              </button>
            </div>
          </div>
        </div>
        
        {/* Features highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 bg-orange-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17M11,9H13V7H11V9Z"/>
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Detección Automática</h4>
            <p className="text-zinc-400">IA que identifica vehículos en cruces ferroviarios</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 bg-orange-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M7,14H9V16H7V14M11,14H13V16H11V14M15,14H17V16H15V14Z"/>
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Reportes Diarios</h4>
            <p className="text-zinc-400">Informes automáticos con evidencia legal</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 bg-orange-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,9H7V7H17M17,13H7V11H17M14,17H7V15H14M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"/>
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Evidencia Trazable</h4>
            <p className="text-zinc-400">Documentación con validez jurídica</p>
          </div>
        </div>
      </div>
    </section>
  )
}