import { ProyeccionAnual } from '../data/loadData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

interface ProjectionsProps {
  data: ProyeccionAnual[];
}

export default function Projections({ data }: ProjectionsProps) {
  const formatCurrency = (value: number) => {
    if (value >= 1000000000) {
      return `$${(value / 1000000000).toFixed(1)}B`;
    }
    return `$${(value / 1000000).toFixed(0)}M`;
  };

  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Proyecciones de Crecimiento</h2>
        <p className="text-xl text-zinc-400">
          Escalamiento progresivo de cruces y generación de ingresos
        </p>
      </div>

      {/* Growth Chart */}
      <div className="bg-zinc-800 p-8 rounded-xl mb-12">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Ventas Anuales Proyectadas</h3>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="año" stroke="#ccc" />
            <YAxis stroke="#ccc" tickFormatter={formatCurrency} />
            <Tooltip 
              formatter={(value) => [formatCurrency(Number(value)), 'Ventas']}
              labelFormatter={(label) => `Año ${label}`}
              contentStyle={{ 
                backgroundColor: '#1f2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#f3f4f6'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="ventaAnual" 
              stroke="#f97316" 
              fill="#f97316" 
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Cruces Growth */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-zinc-800 p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6">Expansión de Cruces</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="año" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#f3f4f6'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="cruces" 
                stroke="#f97316" 
                strokeWidth={3}
                dot={{ fill: '#f97316', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-zinc-800 p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6">Multas Mensuales</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="año" stroke="#ccc" />
              <YAxis stroke="#ccc" tickFormatter={formatCurrency} />
              <Tooltip 
                formatter={(value) => [formatCurrency(Number(value)), 'Multas/mes']}
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#f3f4f6'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="multasMensuales" 
                stroke="#22d3ee" 
                strokeWidth={3}
                dot={{ fill: '#22d3ee', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key Milestones */}
      <div className="bg-zinc-800 p-8 rounded-xl">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Hitos Clave por Año</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {data.map((proyeccion, i) => (
            <div key={i} className="bg-zinc-700 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">Año {proyeccion.año}</div>
              <div className="space-y-2 text-sm">
                <div className="text-white">
                  <span className="font-semibold">{proyeccion.cruces}</span> cruces
                </div>
                <div className="text-zinc-300">
                  {formatCurrency(proyeccion.ventaAnual)} ventas
                </div>
                <div className="text-zinc-400">
                  {formatCurrency(proyeccion.multasMensuales)}/mes
                </div>
                {proyeccion.utilidadInvenor && (
                  <div className="text-green-400 text-xs mt-2">
                    Utilidad: {formatCurrency(proyeccion.utilidadInvenor)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}