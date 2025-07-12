import UseCasesSection from './components/UseCasesSection'
import ValidationSection from './components/ValidationSection'
import RankingSection from './components/RankingSection'
import StatsSection from './components/StatsSection'
import VideoSection from './components/VideoSection'
import MapSection from './components/MapSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'

export default function App() {
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