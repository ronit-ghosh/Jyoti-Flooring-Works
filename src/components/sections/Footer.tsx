"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Instagram, Linkedin, Moon, Sun, Twitter } from "lucide-react"
import { useTheme } from "next-themes"

export default function Footer() {
  const { theme, setTheme } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-background to-primary/10 py-14 border-t">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Stay Connected</h2>
            <form className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  className="backdrop-blur-sm"
                />
              </div>
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="/" className="block transition-colors hover:text-primary">
                Home
              </a>
              <a href="/about" className="block transition-colors hover:text-primary">
                About Us
              </a>
              <a href="/services" className="block transition-colors hover:text-primary">
                Services
              </a>
              <a href="/gallery" className="block transition-colors hover:text-primary">
                Gallery
              </a>
              <a href="#contact" className="block transition-colors hover:text-primary">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Ma Sarada AC Market, 21/BM/16, Netaji Subhash Avenue</p>
              <p>Serampore, Hooghly, 712201, West Bengal, India</p>
              <p>Phone: +91 <a href="tel:9635777775">9635777775</a> / <a href="tel:9330005603">9330005603</a></p>
              <a href="mailto:jyotiflooring@gmail.com"><p>Email: jyotiflooring@gmail.com</p></a>
            </address>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {/* <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button> */}
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="rounded-full"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
            <div className="mt-4 py-2">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Jyoti Flooring Works LLP. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}