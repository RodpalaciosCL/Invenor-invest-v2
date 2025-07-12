import { CasoUso } from '../data/loadData';

interface CasesProps {
  items: CasoUso[];
}

const iconMap = {
  detection: (
    <svg className="w-16 h-16 mx-auto mb-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  ),
  legal: (
    <svg className="w-16 h-16 mx-auto mb-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
    </svg>
  ),
  money: (
    <svg className="w-16 h-16 mx-auto mb-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
    </svg>
  ),
  monitor: (
    <svg className="w-16 h-16 mx-auto mb-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21,16V4H3V16H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M5,6H14V11H5V6M15,6H19V8H15V6M19,9V14H15V9H19M5,12H11V14H5V12Z"/>
    </svg>
  )
};

export default function Cases({ items }: CasesProps) {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Casos de Uso</h2>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          Soluciones integrales para el monitoreo y control de cruces ferroviarios
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {items.map((caso, i) => (
          <div key={i} className="bg-zinc-800 p-8 rounded-xl text-center hover:bg-zinc-700 transition-colors duration-300">
            {iconMap[caso.icono as keyof typeof iconMap] || iconMap.detection}
            <h3 className="text-xl font-semibold text-white mb-4">{caso.titulo}</h3>
            <p className="text-zinc-400 leading-relaxed">{caso.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  )
}