import CountUp from 'react-countup';
import { Indicador } from '../data/loadData';

interface IndicatorsProps {
  data: Indicador[];
}

export default function Indicators({ data }: IndicatorsProps) {
  const formatValue = (value: number, formato?: string) => {
    switch (formato) {
      case 'M$':
        return `$${value.toLocaleString()}M`;
      case '%':
        return `${value}%`;
      case 'meses':
        return `${value} meses`;
      case 'unidades':
        return `${value}`;
      case 'regiones':
        return `${value}`;
      default:
        return value.toLocaleString();
    }
  };

  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Indicadores Financieros Clave</h2>
        <p className="text-xl text-zinc-400">
          Métricas fundamentales del proyecto CRUCES AI
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {data.map((indicador, i) => (
          <div key={i} className="bg-zinc-800 p-6 rounded-xl text-center hover:bg-zinc-700 transition-colors duration-300">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-3">
              <CountUp 
                end={indicador.value} 
                duration={2.5} 
                separator="," 
                delay={i * 0.2}
                suffix={indicador.formato === '%' ? '%' : ''}
                prefix={indicador.formato === 'M$' ? '$' : ''}
                decimals={indicador.formato === 'M$' ? 1 : 0}
              />
              {indicador.formato === 'M$' && <span className="text-xl">M</span>}
              {indicador.formato === 'meses' && <span className="text-lg text-zinc-400 ml-1">meses</span>}
            </div>
            <h3 className="text-sm font-medium text-zinc-300">{indicador.label}</h3>
          </div>
        ))}
      </div>
      
      <div className="bg-zinc-800 p-8 rounded-xl">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Análisis de Sensibilidad</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-zinc-700 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-green-400 mb-2">Escenario Optimista</h4>
            <p className="text-2xl font-bold text-white">58%</p>
            <p className="text-zinc-400 mt-1">IRR (+20% infracciones)</p>
            <p className="text-sm text-zinc-500 mt-2">VAN: $1.541M</p>
          </div>
          <div className="bg-zinc-700 p-6 rounded-lg border-2 border-orange-600">
            <h4 className="text-lg font-semibold text-orange-400 mb-2">Escenario Base</h4>
            <p className="text-2xl font-bold text-white">49%</p>
            <p className="text-zinc-400 mt-1">ROI (proyección actual)</p>
            <p className="text-sm text-zinc-500 mt-2">VAN: $1.301M</p>
          </div>
          <div className="bg-zinc-700 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-yellow-400 mb-2">Escenario Conservador</h4>
            <p className="text-2xl font-bold text-white">39%</p>
            <p className="text-zinc-400 mt-1">ROI (-20% infracciones)</p>
            <p className="text-sm text-zinc-500 mt-2">VAN: $1.041M</p>
          </div>
        </div>
      </div>
    </section>
  )
}