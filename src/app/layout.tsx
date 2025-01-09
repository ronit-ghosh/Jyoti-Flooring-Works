import { ThemeProvider } from '@/components/theme-provider'
import "./globals.css"
import { Inter } from 'next/font/google'
import Header from '@/components/sections/Header'
import IgniteStudios from '@/components/Ignite'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jyoti Flooring Works LLP',
  description: 'Industrial Flooring Contractors and Consultants',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="">
            <Header />
            <main className="">{children}</main>
            <IgniteStudios/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

