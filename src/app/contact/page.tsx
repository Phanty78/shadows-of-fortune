import ContactForm from '@/components/section/contact-form'
import Footer from '@/components/shared/footer'
import CustomHead from '@/components/shared/Head'
import Header from '@/components/shared/header'

export default function Characters() {
  return (
    <>
      <CustomHead />
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
        <Header />
        <ContactForm />
        <Footer />
      </div>
    </>
  )
}
