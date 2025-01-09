import Testimonials from '@/components/sections/Testimonials'
import Difference from '@/components/sections/Difference'
import Whyus from '@/components/sections/Whyus'
import About from "@/components/sections/About"
import Features from "@/components/sections/Feature"
import Banner from '@/components/sections/Banner'

export default function AboutPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <h1 className="h-16"></h1>
      <Banner />
      <Features />
      <Difference />
      <Whyus />
      <Testimonials />
      <About isAboutPage />
    </div>
  )
}

