"use client"

import * as React from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "../ui/button"

const images = [
  { src: "https://res.cloudinary.com/drynqkitl/image/upload/v1736263802/epoxy2_kbrnif.jpg", alt: "Flooring work 1" },
  { src: "https://res.cloudinary.com/drynqkitl/image/upload/v1736263802/epoxy1_gdqg3x.jpg", alt: "Flooring work 2" },
  { src: "https://res.cloudinary.com/drynqkitl/image/upload/v1736263802/1_twa1nh.jpg", alt: "Flooring work 3" },
  { src: "https://res.cloudinary.com/drynqkitl/image/upload/v1736151800/3_jiiyv2.jpg", alt: "Flooring work 4" },
  { src: "https://res.cloudinary.com/drynqkitl/image/upload/v1736151800/2_vyyjrh.jpg", alt: "Flooring work 5" },
  { src: "https://res.cloudinary.com/drynqkitl/image/upload/v1736151698/WhatsApp_Image_2025-01-05_at_18.51.28_4f8b9d0c_zzbef3.jpg", alt: "Flooring work 5" },
]

const Gallery = () => {
  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold my-10 border-[#f58129] border-l-8 pl-3">Showcasing Our Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="cursor-pointer">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full max-h-[90vh] object-contain"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
        <div className="w-full flex justify-center">
        <a href="/gallery"><Button className="mt-8 w-36">View More</Button></a>
        </div>
      </div>
    </section>
  )
}

export default Gallery

