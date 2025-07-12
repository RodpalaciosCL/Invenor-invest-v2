import CountUp from 'react-countup';
import { Indicador } from '../data/loadData';

interface IndicatorsProps {
  data: Indicador[];
}

export default function Indicators({ data }: IndicatorsProps) {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Indicadores Generales</h2>
        <p className="text-xl text-zinc-400">
          Métricas clave del proyecto INVENOR
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((indicador, i) => (
          <div key={i} className="bg-zinc-800 p-8 rounded-xl text-center hover:bg-zinc-700 transition-colors duration-300">
            <div className="text-5xl font-bold text-orange-400 mb-4">
              <CountUp 
                end={indicador.value} 
                duration={2.5} 
                separator="," 
                delay={i * 0.2}
              />
            </div>
            <h3 className="text-lg font-medium text-zinc-300">{indicador.label}</h3>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-zinc-800 p-8 rounded-xl">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-xl font-semibold text-orange-400 mb-2">ROI Proyectado</h4>
            <p className="text-3xl font-bold text-white">264%</p>
            <p className="text-zinc-400 mt-2">Retorno en 3 años</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-orange-400 mb-2">Tiempo de Implementación</h4>
            <p className="text-3xl font-bold text-white">90</p>
            <p className="text-zinc-400 mt-2">días promedio</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-orange-400 mb-2">Eficiencia de Detección</h4>
            <p className="text-3xl font-bold text-white">98.5%</p>
            <p className="text-zinc-400 mt-2">precisión comprobada</p>
          </div>
        </div>
      </div>
    </section>
  )
}