"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"

const Header = () => {
  return (
    <header className="fixed h-16 top-0 left-0 right-0 bg-background/70 backdrop-blur-md border-b z-50 shadow-sm flex justify-center">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <Link href="/" className="flex w-24 h-12">
          <Image
            src="https://res.cloudinary.com/drynqkitl/image/upload/v1736148698/logo_gfc6hs.png"
            alt="logo"
            width={500}
            height={1000}
            className=""
          />
          <Image
            src="https://res.cloudinary.com/drynqkitl/image/upload/v1736149269/typography_tteqra.png"
            alt="logo"
            width={1000}
            height={500}
            className="dark:invert invert-0"
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><Link href="/about" className="hover:text-primary">About</Link></li>
            <li><Link href="/services" className="hover:text-primary">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link href="/#contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-primary">Home</Link>
              <Link href="/about" className="hover:text-primary">About</Link>
              <Link href="/#services" className="hover:text-primary">Services</Link>
              <Link href="/#gallery" className="hover:text-primary">Gallery</Link>
              <Link href="/#contact" className="hover:text-primary">Contact</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Header

