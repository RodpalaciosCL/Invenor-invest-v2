const faqs = [
  {
    pregunta: "¿Cuál es el retorno de inversión esperado?",
    respuesta: "El ROI proyectado es del 55% en 24 meses, con un payback de 15 meses. Las municipalidades pueden incrementar sus multas hasta un 256% con nuestra tecnología IA."
  },
  {
    pregunta: "¿Cómo funciona la detección automática?",
    respuesta: "Utilizamos IA avanzada con 95% de eficiencia vs 22% actual. El sistema incluye reconocimiento de patentes con 99.5% de precisión y clasificación automática de infracciones 24/7."
  },
  {
    pregunta: "¿Qué validez legal tienen las evidencias?",
    respuesta: "Todas las evidencias incluyen video + metadata con hash criptográfico, garantizando 100% validez jurídica. El sistema está validado técnicamente con Ferronor y municipios piloto."
  },
  {
    pregunta: "¿Cuántos cruces se pueden monitorear?",
    respuesta: "Comenzamos con 25 cruces en el año 1, escalando a 40 cruces en año 2, 50 cruces en año 2.5, y 60 cruces en año 3. El modelo es completamente escalable."
  },
  {
    pregunta: "¿Qué apoyo técnico incluye el servicio?",
    respuesta: "Incluye instalación completa, configuración del sistema, app municipal web + móvil, dashboard tiempo real, reportes automáticos, y soporte técnico continuo 24/7."
  },
  {
    pregunta: "¿Cuál es la estructura de costos?",
    respuesta: "Inversión inicial de $2.067B con retorno total de $3.096B. Incluye hardware, software, desarrollo IA, conectividad 5G, y equipo técnico especializado."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-zinc-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
          <p className="text-xl text-zinc-400">
            Respuestas a las consultas más comunes sobre INVENOR
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-zinc-700 rounded-lg overflow-hidden group">
              <summary className="cursor-pointer p-6 hover:bg-zinc-600 transition-colors duration-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.pregunta}</h3>
                  <svg 
                    className="w-5 h-5 text-orange-400 transform transition-transform duration-200 group-open:rotate-180" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-zinc-300 leading-relaxed">{faq.respuesta}</p>
              </div>
            </details>
          ))}
        </div>
        
        {/* Contact section */}
        <div className="mt-16 bg-orange-600 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">¿Listo para comenzar?</h3>
          <p className="text-orange-100 mb-6">
            Contáctanos y coordina tu demo personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:equipo@invenor.cl" 
              className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200"
            >
              Enviar correo
            </a>
            <button className="bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors duration-200">
              Agendar reunión
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}