import CountUp from 'react-countup'

export default function StatsSection() {
  const stats = [
    { label: "Inversión Total (M$)", value: 495 },
    { label: "Utilidad Proyectada (M$)", value: 1305 },
    { label: "Comunas Impactadas", value: 12 },
    { label: "Red Cubierta (km)", value: 1200 },
  ]
  return (
    <section className="py-16 text-center px-4">
      <h2 className="text-3xl font-bold mb-8">Indicadores Generales</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {stats.map((s,i)=>(
          <div key={i} className="bg-zinc-800 p-6 rounded-lg">
            <h3 className="text-4xl font-bold">
              <CountUp end={s.value} duration={2} separator=","/>
            </h3>
            <p className="mt-2 text-zinc-400">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}