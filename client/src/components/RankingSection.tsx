import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const data = [
  { comuna: "Coquimbo", total: 2281 },
  { comuna: "La Serena", total: 3165 },
  { comuna: "Iquique", total: 1770 },
  { comuna: "Zapallar", total: 551 },
  { comuna: "Caldera", total: 408 },
]

export default function RankingSection() {
  return (
    <section className="py-16 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Ranking Comunas (M$)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart layout="vertical" data={data}>
          <CartesianGrid stroke="#444" strokeDasharray="3 3"/>
          <XAxis type="number" stroke="#ccc"/>
          <YAxis dataKey="comuna" type="category" stroke="#ccc"/>
          <Tooltip formatter={(v)=>(`${v} M$`)}/>
          <Bar dataKey="total" fill="#f97316"/>
        </BarChart>
      </ResponsiveContainer>
    </section>
  )
}