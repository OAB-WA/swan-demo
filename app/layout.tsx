import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import Script from 'next/script'
import Preloader from '@/components/Preloader'
import FloatingCallButton from '@/components/FloatingCallButton'

// Performance: Optimize Google Fonts with next/font
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-rubik',
})

// Import CSS directly for Next.js optimization and bundling
import '../public/assets/css/bootstrap.min.css'
import '../public/assets/css/all-fontawesome.min.css'
import '../public/assets/css/animate.min.css'
import '../public/assets/css/magnific-popup.min.css'
import '../public/assets/css/owl.carousel.min.css'
import '../public/assets/css/style.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Swan Electric, Plumbing, Heating & Air - Dallas, TX',
  description: 'Professional plumbing, electrical, and HVAC services in Dallas, Texas. Trusted experts for all your home service needs.',
  keywords: 'plumbing, electrical, HVAC, Dallas, Texas, Sunnyvale, home services',
  // Performance: Add viewport for mobile optimization
  viewport: 'width=device-width, initial-scale=1',
  // Performance: Optimize metadata for better SEO and performance
  openGraph: {
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={rubik.variable}>
      <head>
        {/* Performance: Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* Preload critical font files to fix FOUT and layout shift */}
        <link rel="preload" href="/assets/fonts/fa-solid-900.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/fa-regular-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* Favicon */}
        <link rel="icon" type="image/webp" href="/assets/img/swan logo.webp" />
      </head>
      <body>
        <Preloader />
        {children}
        <FloatingCallButton />

        {/* Performance Optimization: Load critical scripts first, defer non-critical ones */}
        {/* jQuery must load before interactive for carousel functionality */}
        <Script src="/assets/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        {/* Modernizr for feature detection - needed early */}
        <Script src="/assets/js/modernizr.min.js" strategy="beforeInteractive" />
        
        {/* Bootstrap and jQuery plugins - load after page is interactive */}
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.appear.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.easing.min.js" strategy="afterInteractive" />
        
        {/* Carousel - critical for hero slider, load after interactive */}
        <Script src="/assets/js/owl.carousel.min.js" strategy="afterInteractive" />
        
        {/* Non-critical scripts - lazy load to improve initial page load */}
        <Script src="/assets/js/counter-up.js" strategy="lazyOnload" />
        <Script src="/assets/js/wow.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
