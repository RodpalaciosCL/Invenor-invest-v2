import { loadProjectData } from './data/loadData';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Cases from './components/Cases';
import ChartRanking from './components/ChartRanking';
import Indicators from './components/Indicators';
import Projections from './components/Projections';
import DemoVideo from './components/DemoVideo';
import Map from './components/Map';
import FAQ from './components/FAQ';

export default function App() {
  const { casosData, rankingData, indicadoresData, proyeccionesAnuales } = loadProjectData();
  
  return (
    <main className="bg-zinc-900 text-white">
      <Hero />
      <ProblemSolution />
      <Cases items={casosData} />
      <ChartRanking data={rankingData} />
      <Indicators data={indicadoresData} />
      <Projections data={proyeccionesAnuales} />
      <DemoVideo />
      <Map />
      <FAQ />
    </main>
  )
}