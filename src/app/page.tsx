import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import Gallery from '@/components/sections/Gallery'
import Contact from '@/components/sections/Contact'
import Clients from '@/components/clients'
import FloatingButton from '@/components/floating-button'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Clients/>
      <Gallery />
      <Contact />
      <FloatingButton/>
      <Footer/>
    </>
  )
}

