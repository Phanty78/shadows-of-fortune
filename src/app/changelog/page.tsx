import ChangelogSection from '@/components/section/changelog'
import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'

export default function Characters() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <ChangelogSection />
      <Footer />
    </div>
  )
}
