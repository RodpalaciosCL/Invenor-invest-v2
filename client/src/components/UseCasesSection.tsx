export default function UseCasesSection() {
  const casos = [
    { 
      title: "Cruce Detectado", 
      desc: "Detección automática de infracciones viales en cruces ferroviarios.",
      icon: (
        <svg className="w-16 h-16 mx-auto mb-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    { 
      title: "Validación Jurídica", 
      desc: "Evidencia legal trazada y auditada para soporte de multas.",
      icon: (
        <svg className="w-16 h-16 mx-auto mb-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>
      )
    },
    { 
      title: "Recaudación Municipal", 
      desc: "Ingresos complementarios para municipios: M$ 2.539 en Sierra Gorda.",
      icon: (
        <svg className="w-16 h-16 mx-auto mb-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
        </svg>
      )
    },
  ]
  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Casos de Uso</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {casos.map((c,i)=>(
          <div key={i} className="bg-zinc-800 p-6 rounded-lg text-center">
            {c.icon}
            <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
            <p className="text-zinc-400">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}