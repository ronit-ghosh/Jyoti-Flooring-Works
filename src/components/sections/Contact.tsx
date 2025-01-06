"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, PhoneCall} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the form data to your backend
  }

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 border-[#f58129] border-l-8 pl-3">Contact Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative">
            <div className="aspect-square w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1839.6817941945405!2d88.33943045895852!3d22.751884281281235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89ad8c8a3e66f%3A0x25938bb2b559c9cb!2sJyoti%20Flooring%20Works!5e0!3m2!1sen!2sin!4v1736151005799!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='h-12'
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='h-12'
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className='h-36 resize-none'

                    />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </div>
              </form>
              <div className="bg-background/80 backdrop-blur-sm pt-4 rounded-t-lg">
                <Card>
                  <CardContent className="p-0 py-6">
                    <div className="lg:w-1/2 px-6">
                      <h2 className="title-font font-bold dark:text-white text-black tracking-widest flex items-center gap-1"> <MapPin /> ADDRESS</h2>
                      <a href="https://maps.app.goo.gl/BGxorBxeEcdYgCcp6"><p className="mt-1">Ma Sarada AC Market, 21/BM/16, Netaji Subhash Avenue, Serampore, Hooghly - 712201, West Bengal, India</p></a>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4">
                      <h2 className="title-font font-bold dark:text-white text-black tracking-widest flex items-center gap-1"><Mail size={20} /> EMAIL</h2>
                      <a href='mailto:jyotiflooring@gmail.com' className="text-[#f58129] leading-relaxed">jyotiflooring@gmail.com</a>
                      <h2 className="title-font font-bold dark:text-white text-black tracking-widest mt-4 flex items-center gap-1"><PhoneCall size={18} /> PHONE</h2>
                      <p className="leading-relaxed"><a href="tel:9635777775">9635777775</a> / <a href="tel:9330005603">9330005603</a></p>
                      <p className="leading-relaxed"><a href="tel:033-26520436">033-26520436</a></p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact

