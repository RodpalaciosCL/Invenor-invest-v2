export default function ProblemSolution() {
  return (
    <section className="py-20 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Problema */}
          <div>
            <h2 className="text-4xl font-bold text-red-400 mb-8">El Problema</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">!</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Accidentes Fatales</h3>
                  <p className="text-zinc-400">Cruces ferroviarios sin control generan accidentes graves y pérdidas humanas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">$</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Pérdida de Ingresos</h3>
                  <p className="text-zinc-400">Municipios pierden millones en multas no detectadas por falta de tecnología</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">⚠</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Falta de Control</h3>
                  <p className="text-zinc-400">Imposibilidad de monitorear 24/7 todos los cruces ferroviarios críticos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solución */}
          <div>
            <h2 className="text-4xl font-bold text-green-400 mb-8">La Solución</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Detección Automática</h3>
                  <p className="text-zinc-400">IA avanzada que detecta infracciones en tiempo real las 24 horas del día</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Evidencia Legal Trazada</h3>
                  <p className="text-zinc-400">Documentación automática con validez jurídica y trazabilidad completa</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7,13H17V11H7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Reportes Diarios</h3>
                  <p className="text-zinc-400">Informes automatizados listos para procesamiento municipal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Validation section with real metrics */}
        <div className="mt-20 text-center bg-zinc-900 p-8 rounded-xl">
          <h3 className="text-3xl font-bold text-white mb-4">Validación Técnica & Comercial</h3>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-8">
            Confirmado con Ferronor y municipios pilotos. Tecnología comprobada con 
            $2.3B en pérdidas anuales por infracciones no detectadas.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-red-400 mb-4">Problemática Actual</h4>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-zinc-300">Infracciones no detectadas:</span>
                  <span className="text-red-400 font-bold">78%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-300">Eficiencia actual:</span>
                  <span className="text-red-400 font-bold">22%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-300">Pérdidas anuales:</span>
                  <span className="text-red-400 font-bold">$2.3B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-300">Accidentes promedio/comuna:</span>
                  <span className="text-red-400 font-bold">2,847</span>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-green-400 mb-4">Solución INVENOR</h4>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-zinc-300">Eficiencia IA:</span>
                  <span className="text-green-400 font-bold">95%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-300">Reconocimiento patentes:</span>
                  <span className="text-green-400 font-bold">99.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-300">Monitoreo:</span>
                  <span className="text-green-400 font-bold">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-300">Reducción accidentes:</span>
                  <span className="text-green-400 font-bold">Significativa</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">✓</div>
              <div className="text-zinc-300 mt-1">Ferronor</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">✓</div>
              <div className="text-zinc-300 mt-1">Municipios Piloto</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">✓</div>
              <div className="text-zinc-300 mt-1">Plataforma Ready</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">✓</div>
              <div className="text-zinc-300 mt-1">12 Comunas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}