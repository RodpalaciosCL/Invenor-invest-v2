import { loadProjectData } from '../data/loadData';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import Cases from '../components/Cases';
import ChartRanking from '../components/ChartRanking';
import Indicators from '../components/Indicators';
import Projections from '../components/Projections';
import InvestmentOpportunity from '../components/InvestmentOpportunity';
import StatsSection from '../components/StatsSection';
import VideoSection from '../components/VideoSection';
import MapSection from '../components/MapSection';
import FAQ from '../components/FAQ';

export default function Home() {
  const { casosData, rankingData, indicadoresData, proyeccionesAnuales } = loadProjectData();
  
  return (
    <main className="bg-zinc-900 text-white">
      <Hero />
      <StatsSection data={indicadoresData} />
      <ProblemSolution />
      <Cases items={casosData} />
      <ChartRanking data={rankingData} />
      <Projections data={proyeccionesAnuales} />
      <InvestmentOpportunity />
      <VideoSection />
      <MapSection />
      <FAQ />
    </main>
  );
}