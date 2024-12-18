import CharactersSection from '@/components/section/characters-section'
import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'

export default function Characters() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <CharactersSection />
      <Footer />
    </div>
  )
}
