const faqs = [
  { q: "¿Qué pasa si una comuna se baja?", a: "La plataforma es modular: no afecta operaciones de otras comunas." },
  { q: "¿Cuál es el respaldo legal?", a: "Video y metadata se almacenan con hash para validez jurídica." },
  { q: "¿Quién opera el sistema?", a: "Equipo INVENOR brinda instalación, monitoreo y mantenimiento." },
]

export default function FAQSection() {
  return (
    <section className="py-16 max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
      <ul className="space-y-4">
        {faqs.map((f,i)=>(
          <li key={i}>
            <details className="bg-zinc-800 p-4 rounded-lg">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-2 text-zinc-400">{f.a}</p>
            </details>
          </li>
        ))}
      </ul>
    </section>
  )
}