import type { Metadata } from 'next'
import { Inter, Barlow } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: { default: 'Polytech Materials', template: '%s | Polytech Materials' },
  description:
    'Industrial-grade polymer resins and compounds for automotive, construction, packaging, and electronics manufacturing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <body
        suppressHydrationWarning
        className="font-sans bg-white text-brand-grey antialiased"
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
