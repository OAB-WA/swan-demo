import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import Preloader from '@/components/Preloader'
import FloatingCallButton from '@/components/FloatingCallButton'
import ScrollReveal from '@/components/ScrollReveal'
import { BookingProvider } from '@/contexts/BookingContext'
import BookingModalWrapper from '@/components/BookingModalWrapper'

// Performance: FontAwesome tree-shaking setup
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// Performance: Optimize Google Fonts with next/font
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-rubik',
})

// Import CSS directly for Next.js optimization and bundling
import '../public/assets/css/bootstrap.min.css'
// Performance: Removed all-fontawesome.min.css (replaced by tree-shaken SVG icons)
import '../public/assets/css/animate.min.css'
import '../public/assets/css/style.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Swan Electric, Plumbing, Heating & Air - Mesquite, TX',
  description: 'Professional plumbing, electrical, and HVAC services across Dallas, Fort Worth, Mesquite, and Sunnyvale. Technicians that care.',
  keywords: 'plumbing, electrical, HVAC, AC repair, Dallas, Fort Worth, Mesquite, Sunnyvale, home services',
  openGraph: {
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={rubik.variable}>
      <head>
        {/* Performance: Preconnect to external domains */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* Preload critical font files - removed FA woff2 preloads as we use SVGs now */}
        <link rel="icon" type="image/webp" href="/assets/img/swan logo.webp" />
      </head>
      <body>
        <BookingProvider>
          <Preloader />
          <ScrollReveal />
          {children}
          <FloatingCallButton />
          <BookingModalWrapper />
        </BookingProvider>
      </body>
    </html>
  )
}
