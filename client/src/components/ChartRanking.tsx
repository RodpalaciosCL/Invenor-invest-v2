import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { RankingComuna } from '../data/loadData';

interface ChartRankingProps {
  data: RankingComuna[];
}

export default function ChartRanking({ data }: ChartRankingProps) {
  // Ordenar datos por total de mayor a menor
  const sortedData = [...data].sort((a, b) => b.total - a.total);

  return (
    <section className="py-20 bg-zinc-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Ranking Comunas (M$)</h2>
          <p className="text-xl text-zinc-400">
            Proyección de recaudación anual por comuna implementada
          </p>
        </div>
        
        <div className="bg-zinc-900 p-8 rounded-xl">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart layout="vertical" data={sortedData} margin={{ top: 20, right: 30, left: 80, bottom: 5 }}>
              <CartesianGrid stroke="#444" strokeDasharray="3 3"/>
              <XAxis type="number" stroke="#ccc" fontSize={12}/>
              <YAxis dataKey="comuna" type="category" stroke="#ccc" fontSize={12} width={70}/>
              <Tooltip 
                formatter={(value) => [`M$ ${value}`, 'Recaudación']}
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#f3f4f6'
                }}
              />
              <Bar dataKey="total" fill="#f97316" radius={[0, 4, 4, 0]}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-zinc-400">
            Total proyectado: <span className="text-orange-400 font-semibold">
              M$ {sortedData.reduce((sum, item) => sum + item.total, 0).toLocaleString()}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}