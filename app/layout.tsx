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
      </head>
      <body>
        <Preloader />
        {children}
        <FloatingCallButton />

        {/* jQuery and plugins - keeping for 100% visual match */}
        <Script src="/assets/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/modernizr.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.appear.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.easing.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/counter-up.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
