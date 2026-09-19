import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import WhySuperior from './components/WhySuperior'
import Process from './components/Process'
import ProjectGallery from './components/ProjectGallery'
import Reviews from './components/Reviews'
import ServiceArea from './components/ServiceArea'
import About from './components/About'
import EstimateSection from './components/EstimateSection'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhySuperior />
        <Process />
        <ProjectGallery />
        <Reviews />
        <ServiceArea />
        <About />
        <EstimateSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  )
}
