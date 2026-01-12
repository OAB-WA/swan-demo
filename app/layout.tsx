import type { Metadata } from 'next'
import Script from 'next/script'
import Preloader from '@/components/Preloader'
import FloatingCallButton from '@/components/FloatingCallButton'
import './globals.css'

export const metadata: Metadata = {
  title: 'Swan Electric, Plumbing, Heating & Air - Dallas, TX',
  description: 'Professional plumbing, electrical, and HVAC services in Dallas, Texas. Trusted experts for all your home service needs.',
  keywords: 'plumbing, electrical, HVAC, Dallas, Texas, Sunnyvale, home services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/webp" href="/assets/img/swan logo.webp" />
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* Preload critical CSS */}
        <link rel="preload" href="/assets/css/bootstrap.min.css" as="style" />
        <link rel="preload" href="/assets/css/style.css" as="style" />
      </head>
      <body>
        <Preloader />
        {children}
        <FloatingCallButton />

        {/* Critical scripts - load before interactive */}
        <Script src="/assets/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/modernizr.min.js" strategy="beforeInteractive" />
        
        {/* Non-critical scripts - defer loading */}
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/imagesloaded.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/isotope.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.appear.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.easing.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/counter-up.js" strategy="lazyOnload" />
        <Script src="/assets/js/wow.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
