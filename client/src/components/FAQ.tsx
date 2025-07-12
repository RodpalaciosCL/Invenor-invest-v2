const faqs = [
  {
    pregunta: "¿Qué pasa si una comuna se baja del proyecto?",
    respuesta: "La plataforma es completamente modular. Si una comuna decide retirarse, esto no afecta las operaciones de otras comunas. Cada implementación es independiente y autónoma."
  },
  {
    pregunta: "¿Cuál es el respaldo legal de las evidencias?",
    respuesta: "Todas las evidencias se almacenan con hash criptográfico y metadata completa, garantizando su validez jurídica. El sistema cumple con normativas de evidencia digital y trazabilidad."
  },
  {
    pregunta: "¿Quién opera y mantiene el sistema?",
    respuesta: "El equipo técnico de INVENOR se encarga de la instalación, configuración, monitoreo 24/7 y mantenimiento preventivo. Ofrecemos soporte completo durante toda la operación."
  },
  {
    pregunta: "¿Cuánto tiempo toma la implementación?",
    respuesta: "El tiempo promedio de implementación es de 90 días desde la firma del contrato, incluyendo instalación de equipos, configuración del sistema y capacitación del personal municipal."
  },
  {
    pregunta: "¿Cómo se garantiza la precisión de las detecciones?",
    respuesta: "Nuestro sistema de IA tiene una precisión del 98.5% comprobada en pilotos. Además, cada detección es validada con múltiples criterios antes de generar una infracción."
  },
  {
    pregunta: "¿Qué pasa con la privacidad de los datos?",
    respuesta: "Cumplimos estrictamente con la Ley de Protección de Datos. Solo se almacenan datos necesarios para la infracción y se eliminan automáticamente según los plazos legales."
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