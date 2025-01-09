import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const About = ({ isAboutPage }: { isAboutPage?: boolean }) => {
  return (
    <>
      {isAboutPage ? <AboutPage /> : <LandingAbout />}
    </>
  )
}

export default About

const LandingAbout = () => {
  return (
    <section className="my-16 mx-4">
      <h2 className="text-3xl font-bold mb-8 border-[#f58129] border-l-8 pl-3">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-2 py-4">
          <div className="container px-5 mx-auto">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-500 my-3" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-lg">At Jyoti Flooring Works LLP, we take immense pride in being pioneers of Vacuum Dewatered Concrete Flooring in Kolkata, West Bengal, Odisha, Jharkhand, and Bihar. With over 12 years of experience, we understand the science and precision this process demands. Sadly, the industry today is flooded with inexperienced operators who compromise on quality, skipping critical steps like proper vacuuming to cut costs. This not only undermines the integrity of the flooring but also the trust of clients. Our commitment has always been to deliver genuine VDF solutions with the right expertise and technology, ensuring durability and excellence every time.</p>
              <span className="inline-block h-1 w-10 rounded bg-[#f58129] mt-3 mb-2"></span>
              <h2 className="text-gray-900 dark:text-gray-400 font-medium title-font tracking-wider text-sm mb-2">Mr. V.K. Sah, Founder</h2>
            </div>
          </div>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full">
              <video width={1920} height={1080} controls loop preload="none" className="rounded-lg" poster="https://res.cloudinary.com/drynqkitl/image/upload/v1736280482/Thumbnail_aowfj5.png">
                <source src="https://res.cloudinary.com/drynqkitl/video/upload/v1736279630/Jyoti-Flooring-Works_pbk8rs.mp4"/>
              </video>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

const AboutPage = () => {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-6  ml-4 border-[#f58129] border-l-8 pl-3">A Word from Our Leadership</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Our Commitment to Excellence</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center mb-4">
              <Image
                src="https://res.cloudinary.com/drynqkitl/image/upload/v1736196380/Mr._V.K.SAH_tzjitp.jpg"
                alt="Founder"
                width={150}
                height={150}
                className="rounded-full mb-4 md:mb-0 md:mr-4"
              />
              <blockquote className="italic text-lg">
                At Jyoti Flooring Works LLP, we&apos;re not just installing floors; we&apos;re laying the foundation for your success. Our commitment to quality, innovation, and customer satisfaction drives everything we do.
              </blockquote>
            </div>
            <p className="text-right font-semibold">- V.K. Sah, Founder</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Y0hMpET-syQ?si=w6tMKnlEiDiCM1Vx"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}