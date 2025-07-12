# 🚀 INVENOR Pitch Website – Instrucciones Maestras para el Agente

> **IMPORTANTE**: Replit parte de **cero**, sin contexto. Este es **TU ÚNICO** documento de instrucciones. **Copia y pega todo** en la conversación de Replit AI y ejecútalo paso a paso, sin saltarte nada. Asegúrate de que cada bloque se complete antes de pasar al siguiente.

---

## 1) Limpieza total del workspace

1. **BORRA** cualquier carpeta o archivo que no sea `.replit` o el botón “Run” predeterminado.  
2. **Verifica** que en `Files` solo aparezcan:
   - `.replit`
   - (quizá) `README.md`
   - Nada más.

```bash
# Opcional si tienes acceso a Shell
rm -rf *
2) Clonar el repositorio GitHub de INVENOR (si aplica)
Si tienes un repo GitHub con todo el código base y assets, clónalo ahora.
Reemplaza <URL_DEL_REPO> con tu URL real:

bash
Copiar
Editar
git clone <URL_DEL_REPO> .
Si no hay repo aún, pasa al paso 3.

3) Scaffold Vite + React + TypeScript + Tailwind
Ejecuta exactamente:

bash
Copiar
Editar
npm init vite@latest .          # Selecciona “react” + “typescript”
npm install
npm install -D tailwindcss postcss autoprefixer react-countup recharts
npx tailwindcss init -p
Resultado esperado:

lua
Copiar
Editar
.
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.tsx
    └── App.tsx
4) Configurar Vite para Replit
Edita vite.config.ts para usar el puerto de Replit:

ts
Copiar
Editar
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 3000,
  }
})
5) Tailwind CSS
En tailwind.config.js:

js
Copiar
Editar
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: { extend: {} },
  plugins: [],
}
Crea src/index.css:

css
Copiar
Editar
@tailwind base;
@tailwind components;
@tailwind utilities;
Y en main.tsx importa el CSS:

tsx
Copiar
Editar
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>
)
6) Estructura modular de carpetas y archivos
Borra src/App.tsx. En src/ crea:

css
Copiar
Editar
src/
├── app/
│   └── page.tsx
└── components/
    ├── UseCasesSection.tsx
    ├── ValidationSection.tsx
    ├── RankingSection.tsx
    ├── StatsSection.tsx
    ├── VideoSection.tsx
    ├── MapSection.tsx
    ├── FAQSection.tsx
    └── ContactSection.tsx
7) Contenido de src/app/page.tsx
tsx
Copiar
Editar
import UseCasesSection from '../components/UseCasesSection'
import ValidationSection from '../components/ValidationSection'
import RankingSection from '../components/RankingSection'
import StatsSection from '../components/StatsSection'
import VideoSection from '../components/VideoSection'
import MapSection from '../components/MapSection'
import FAQSection from '../components/FAQSection'
import ContactSection from '../components/ContactSection'

export default function Page() {
  return (
    <main className="bg-zinc-900 text-white">
      <UseCasesSection />
      <ValidationSection />
      <RankingSection />
      <StatsSection />
      <VideoSection />
      <MapSection />
      <FAQSection />
      <ContactSection />
    </main>
  )
}
8) Componentes con datos reales
8.1) UseCasesSection.tsx
tsx
Copiar
Editar
export default function UseCasesSection() {
  const casos = [
    { title: "Cruce Detectado", desc: "Detección automática de infracciones viales en cruces ferroviarios.", image: "/caso1.png" },
    { title: "Validación Jurídica", desc: "Evidencia legal trazada y auditada para soporte de multas.", image: "/caso2.png" },
    { title: "Recaudación Municipal", desc: "Ingresos complementarios para municipios: <M$ 2.539 en Sierra Gorda>.", image: "/caso3.png" },
  ]
  return (
    <section className="py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Casos de Uso</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {casos.map((c,i)=>(
          <div key={i} className="bg-zinc-800 p-6 rounded-lg">
            <img src={c.image} alt={c.title} className="h-40 w-full object-cover rounded mb-4"/>
            <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
            <p className="text-zinc-400">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
8.2) ValidationSection.tsx
tsx
Copiar
Editar
export default function ValidationSection() {
  return (
    <section className="py-16 bg-zinc-800 text-center">
      <h2 className="text-3xl font-bold mb-4">Validación Técnica & Comercial</h2>
      <p className="max-w-xl mx-auto text-zinc-300">
        Confirmado con Ferronor y municipios pilotos. Procesamiento automatizado, validación de datos y plataforma ready.
      </p>
    </section>
  )
}
8.3) RankingSection.tsx
tsx
Copiar
Editar
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
    <section className="py-16 max-w-4xl mx-auto">
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
8.4) StatsSection.tsx
tsx
Copiar
Editar
import CountUp from 'react-countup'

export default function StatsSection() {
  const stats = [
    { label: "Inversión Total (M$)", value: 495 },
    { label: "Utilidad Proyectada (M$)", value: 1305 },
    { label: "Comunas Impactadas", value: 12 },
    { label: "Red Cubierta (km)", value: 1200 },
  ]
  return (
    <section className="py-16 text-center">
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
8.5) VideoSection.tsx
tsx
Copiar
Editar
export default function VideoSection() {
  return (
    <section className="py-16 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Demo INVENOR</h2>
      <video controls className="w-full rounded-lg shadow-lg">
        <source src="/demo-invenor.mp4" type="video/mp4"/>
        Tu navegador no soporta video.
      </video>
    </section>
  )
}
8.6) MapSection.tsx
tsx
Copiar
Editar
export default function MapSection() {
  return (
    <section className="py-16 bg-zinc-800 text-center">
      <h2 className="text-3xl font-bold mb-8">Mapa de Cruces Monitoreados</h2>
      <div className="h-80 bg-zinc-700 rounded-lg flex items-center justify-center">
        <p className="text-zinc-400">[Mapa interactivo en desarrollo]</p>
      </div>
    </section>
  )
}
8.7) FAQSection.tsx
tsx
Copiar
Editar
const faqs = [
  { q: "¿Qué pasa si una comuna se baja?", a: "La plataforma es modular: no afecta operaciones de otras comunas." },
  { q: "¿Cuál es el respaldo legal?", a: "Video y metadata se almacenan con hash para validez jurídica." },
  { q: "¿Quién opera el sistema?", a: "Equipo INVENOR brinda instalación, monitoreo y mantenimiento." },
]

export default function FAQSection() {
  return (
    <section className="py-16 max-w-3xl mx-auto">
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
8.8) ContactSection.tsx
tsx
Copiar
Editar
export default function ContactSection() {
  return (
    <section className="py-16 bg-orange-600 text-zinc-900 text-center">
      <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
      <p className="mb-6">Contáctanos y coordina tu demo personalizada.</p>
      <a href="mailto:equipo@invenor.cl" className="inline-block bg-zinc-900 text-white px-6 py-3 rounded-lg">
        Enviar correo
      </a>
    </section>
  )
}
9) Assets estáticos (carpeta public/)
cpp
Copiar
Editar
public/
├── caso1.png       # placeholder
├── caso2.png
├── caso3.png
└── demo-invenor.mp4
10) Scripts y despliegue en Replit
Crea start.sh (chmod +x):

bash
Copiar
Editar
#!/usr/bin/env bash
set -e
npm install
export PORT=${PORT:-3000}
echo "🚀 Servidor arrancado en puerto $PORT"
npx vite --host 0.0.0.0 --port $PORT
wait
Crea .replit:

ini
Copiar
Editar
language = "bash"
run = "bash ./start.sh"
Modifica package.json:

diff
Copiar
Editar
"scripts": {
-  "dev": "vite",
+  "dev": "vite --host 0.0.0.0 --port ${PORT:-3000}",
   "build": "vite build",
   "preview": "vite preview"
},
11) ¡Ejecuta y verifica!
Pulsa Run (botón verde) en Replit.

Observa en consola:

arduino
Copiar
Editar
🚀 Servidor arrancado en puerto 3000
VITE vX.X.X ready in XXX ms
  ➜ Local: http://localhost:3000/
  ➜ Network: http://172.31.xxx.xxx:3000/
Ve a la pestaña Preview: tu Pitch Deck INVENOR debe verse completo y responsive.

🎉 FELICIDADES 🎉
Has creado desde cero, paso a paso, tu sitio de pitch deck INVENOR con:

React + Vite + TypeScript

Tailwind CSS

Componentes modulares con datos reales

Visualizaciones con Recharts y CountUp

Video demo y placeholders para mapa

Deploy automático en Replit