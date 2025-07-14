import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { RankingComuna } from '../data/loadData';

interface ChartRankingProps {
  data: RankingComuna[];
}

export default function ChartRanking({ data }: ChartRankingProps) {
  // Ordenar datos por incremento de multas (mayor a menor)
  const sortedData = [...data].sort((a, b) => b.incrementoMultas - a.incrementoMultas);

  return (
    <section className="py-20 bg-zinc-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Ranking Comunas por Incremento de Multas</h2>
          <p className="text-xl text-zinc-400">
            Porcentaje de aumento en detección de infracciones por comuna objetivo
          </p>
        </div>
        
        <div className="bg-zinc-900 p-8 rounded-xl">
          <ResponsiveContainer width="100%" height={500}>
            <BarChart layout="vertical" data={sortedData} margin={{ top: 20, right: 30, left: 120, bottom: 5 }}>
              <CartesianGrid stroke="#444" strokeDasharray="3 3"/>
              <XAxis type="number" stroke="#ccc" fontSize={12} domain={[0, 3]}/>
              <YAxis dataKey="comuna" type="category" stroke="#ccc" fontSize={11} width={110}/>
              <Tooltip 
                formatter={(value) => [`${(value * 100).toFixed(0)}%`, 'Incremento']}
                labelFormatter={(label) => `${label}`}
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#f3f4f6'
                }}
              />
              <Bar dataKey="incrementoMultas" fill="#f97316" radius={[0, 4, 4, 0]}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-zinc-700 p-4 rounded-lg">
            <div className="text-2xl font-bold text-orange-400">
              {(data.reduce((sum, item) => sum + item.incrementoMultas, 0) / data.length * 100).toFixed(0)}%
            </div>
            <div className="text-zinc-300">Incremento Promedio</div>
          </div>
          <div className="bg-zinc-700 p-4 rounded-lg">
            <div className="text-2xl font-bold text-orange-400">
              {Math.max(...data.map(item => item.incrementoMultas * 100)).toFixed(0)}%
            </div>
            <div className="text-zinc-300">Máximo Incremento</div>
          </div>
          <div className="bg-zinc-700 p-4 rounded-lg">
            <div className="text-2xl font-bold text-orange-400">
              {data.length}
            </div>
            <div className="text-zinc-300">Comunas Objetivo</div>
          </div>
        </div>
      </div>
    </section>
  )
}