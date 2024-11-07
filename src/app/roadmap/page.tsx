import RoadmapSection from '@/components/section/roadmap-section'
import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'

export default function Roadmap() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <RoadmapSection />
      <Footer />
    </div>
  )
}