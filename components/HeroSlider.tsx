'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

declare global {
  interface Window {
    jQuery: any
    $: any
    WOW: any
  }
}

export default function HeroSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const initializedRef = useRef(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    const initCarousel = () => {
      // Check if jQuery and Owl Carousel are available
      if (!window.jQuery || !window.jQuery.fn || !window.jQuery.fn.owlCarousel) {
        return false
      }

      const $ = window.jQuery
      const $slider = $(sliderRef.current)

      // Check if slider exists and hasn't been initialized
      if (!$slider.length || initializedRef.current) {
        return false
      }

      // Don't initialize if already has carousel data
      if ($slider.data('owl.carousel')) {
        initializedRef.current = true
        return true
      }

      // Initialize Owl Carousel
      try {
        $slider.owlCarousel({
          loop: true,
          nav: true,
          dots: false,
          margin: 0,
          autoplay: true,
          autoplayHoverPause: true,
          autoplayTimeout: 5000,
          items: 1,
          navText: [
            "<i class='far fa-long-arrow-left'></i>",
            "<i class='far fa-long-arrow-right'></i>"
          ],
          onInitialized: function() {
            // Reinitialize WOW animations after carousel is ready
            if (window.WOW) {
              setTimeout(() => {
                new window.WOW().init()
              }, 100)
            }
          }
        })

        // Reinitialize WOW on slide change
        $slider.on('changed.owl.carousel', function () {
          if (window.WOW) {
            new window.WOW().init()
          }
        })

        initializedRef.current = true
        return true
      } catch (error) {
        console.error('Error initializing carousel:', error)
        return false
      }
    }

    // Wait for DOM to be ready
    const tryInit = () => {
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        if (initCarousel()) {
          return
        }
        // If not ready, check periodically
        const interval = setInterval(() => {
          if (initCarousel()) {
            clearInterval(interval)
          }
        }, 200)
        
        // Stop checking after 10 seconds
        setTimeout(() => clearInterval(interval), 10000)
      } else {
        window.addEventListener('load', tryInit)
      }
    }

    // Start initialization
    tryInit()

    // Cleanup function
    return () => {
      if (sliderRef.current && window.jQuery) {
        const $ = window.jQuery
        const $slider = $(sliderRef.current)
        if ($slider.data('owl.carousel')) {
          try {
            $slider.trigger('destroy.owl.carousel')
          } catch (e) {
            // Ignore cleanup errors
          }
        }
      }
      initializedRef.current = false
    }
  }, [])

  return (
    <div className="hero-section hero-slider owl-carousel owl-theme" ref={sliderRef}>
      <div 
        className="hero-single" 
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop)' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 col-lg-7">
              <div className="hero-content">
                <h6 
                  className="hero-sub-title wow animate__animated animate__fadeInUp text-white"
                  data-wow-duration="1s" 
                  data-wow-delay=".25s"
                >
                  Professional Plumbing, Electrical & HVAC Services
                </h6>
                <h1 
                  className="hero-title wow animate__animated animate__fadeInUp" 
                  data-wow-duration="1s"
                  data-wow-delay=".50s"
                >
                  Your Trusted Service Provider in Dallas, TX
                </h1>
                <p 
                  className="wow animate__animated animate__fadeInUp" 
                  data-wow-duration="1s"
                  data-wow-delay=".75s"
                >
                  Licensed professionals providing same-day service, upfront pricing, and 100% satisfaction guarantee. 
                  Available 24/7 for all your home service needs.
                </p>
                <div 
                  className="hero-btn wow animate__animated animate__fadeInUp" 
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  <a href="tel:+12145550123" className="theme-btn" style={{marginRight: '15px'}}>
                    <i className="fas fa-phone me-2"></i>Call (214) 555-0123
                  </a>
                  <Link href="/contact" className="theme-btn theme-btn2">
                    Get Free Quote<i className="far fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div 
        className="hero-single" 
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1920&h=1080&fit=crop)' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 col-lg-7">
              <div className="hero-content">
                <h6 
                  className="hero-sub-title wow animate__animated animate__fadeInUp text-white"
                  data-wow-duration="1s" 
                  data-wow-delay=".25s"
                >
                  Professional Plumbing, Electrical & HVAC Services
                </h6>
                <h1 
                  className="hero-title wow animate__animated animate__fadeInUp" 
                  data-wow-duration="1s"
                  data-wow-delay=".50s"
                >
                  Your Trusted Service Provider in Dallas, TX
                </h1>
                <p 
                  className="wow animate__animated animate__fadeInUp" 
                  data-wow-duration="1s"
                  data-wow-delay=".75s"
                >
                  Licensed professionals providing same-day service, upfront pricing, and 100% satisfaction guarantee. 
                  Available 24/7 for all your home service needs.
                </p>
                <div 
                  className="hero-btn wow animate__animated animate__fadeInUp" 
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  <a href="tel:+12145550123" className="theme-btn" style={{marginRight: '15px'}}>
                    <i className="fas fa-phone me-2"></i>Call (214) 555-0123
                  </a>
                  <Link href="/contact" className="theme-btn theme-btn2">
                    Get Free Quote<i className="far fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
