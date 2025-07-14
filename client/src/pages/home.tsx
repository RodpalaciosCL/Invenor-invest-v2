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
import InteractiveMap3D from '../components/InteractiveMap3D';
import Timeline3D from '../components/Timeline3D';
import GameInvestor from '../components/GameInvestor';

import ComparisonMatrix from '../components/ComparisonMatrix';
import DataRoomDashboard from '../components/DataRoomDashboard';
import ESGMetrics from '../components/ESGMetrics';
import ScrollToTop from '../components/ScrollToTop';
import NavigationBar from '../components/NavigationBar';
import ProgressIndicator from '../components/ProgressIndicator';
import SectionDivider from '../components/SectionDivider';
import FinancialIndicators from '../components/FinancialIndicators';

export default function Home() {
  const { casosData, rankingData, indicadoresData, proyeccionesAnuales } = loadProjectData();
  
  return (
    <main className="bg-zinc-900 text-white">
      <ProgressIndicator />
      <NavigationBar />
      <section id="hero">
        <Hero />
      </section>
      
      <section id="stats">
        <StatsSection data={indicadoresData} />
      </section>
      
      <section id="indicadores">
        <FinancialIndicators />
      </section>
      
      <SectionDivider title="ANÁLISIS DE OPORTUNIDAD" />
      
      <section id="emotional">
        <EmotionalImpact />
      </section>
      
      <section id="problema">
        <ProblemSolution />
      </section>
      
      <section id="comparacion">
        <ComparisonMatrix />
      </section>
      
      <SectionDivider title="DUE DILIGENCE AVANZADO" color="bg-zinc-600" />
      
      <section id="data-room">
        <DataRoomDashboard />
      </section>
      
      <section id="esg">
        <ESGMetrics />
      </section>
      
      <section id="casos">
        <Cases items={casosData} />
      </section>
      
      <section id="demo">
        <InteractiveDemo />
      </section>
      
      <section id="validacion">
        <ValidationSection />
      </section>
      
      <section id="credibilidad">
        <InvestorCredibility />
      </section>
      
      <section id="ventajas">
        <CompetitiveAdvantage />
      </section>
      
      <section id="simulador">
        <InvestmentSimulator />
      </section>
      
      <section id="juego">
        <GameInvestor />
      </section>
      
      <section id="timeline">
        <Timeline3D />
      </section>
      
      <section id="ranking">
        <ChartRanking data={rankingData} />
      </section>
      
      <section id="proyecciones">
        <Projections data={proyeccionesAnuales} />
      </section>
      
      <section id="inversion">
        <InvestmentOpportunity />
      </section>
      
      <section id="futuro">
        <FutureOpportunities />
      </section>
      
      <section id="mapa">
        <InteractiveMap3D />
      </section>
      
      <section id="video">
        <VideoSection />
      </section>
      
      <section id="contacto">
        <MapSection />
        <ContactSection />
      </section>
      <ScrollToTop />
    </main>
  );
}