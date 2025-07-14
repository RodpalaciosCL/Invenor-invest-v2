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
import ContactSection from '../components/ContactSection';
import ValidationSection from '../components/ValidationSection';
import EmotionalImpact from '../components/EmotionalImpact';
import FutureOpportunities from '../components/FutureOpportunities';
import InvestorCredibility from '../components/InvestorCredibility';
import CompetitiveAdvantage from '../components/CompetitiveAdvantage';
import InteractiveDemo from '../components/InteractiveDemo';
import InvestmentSimulator from '../components/InvestmentSimulator';

export default function Home() {
  const { casosData, rankingData, indicadoresData, proyeccionesAnuales } = loadProjectData();
  
  return (
    <main className="bg-zinc-900 text-white">
      <Hero />
      <StatsSection data={indicadoresData} />
      <EmotionalImpact />
      <ProblemSolution />
      <Cases items={casosData} />
      <InteractiveDemo />
      <ValidationSection />
      <InvestorCredibility />
      <CompetitiveAdvantage />
      <InvestmentSimulator />
      <ChartRanking data={rankingData} />
      <Projections data={proyeccionesAnuales} />
      <InvestmentOpportunity />
      <FutureOpportunities />
      <VideoSection />
      <MapSection />
      <ContactSection />
    </main>
  );
}