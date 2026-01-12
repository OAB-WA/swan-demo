'use client'

import { useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight, faLongArrowLeft, faLongArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])

  // Re-trigger reveal when slide changes to match original behavior
  const onSelect = useCallback((emblaApi: any) => {
    const selectedScrollSnap = emblaApi.selectedScrollIndex()
    const slides = emblaApi.slideNodes()
    const activeSlide = slides[selectedScrollSnap]
    
    // Reset wow elements in active slide to trigger animation again if needed
    const wowElements = activeSlide.querySelectorAll('.wow')
    wowElements.forEach((el: any) => {
      el.classList.remove('animate__animated')
      el.style.visibility = 'hidden'
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="hero-section hero-slider-wrapper embla" ref={emblaRef}>
      <div className="hero-slider embla__container d-flex">
        {/* Slide 1 */}
        <div className="hero-single embla__slide w-100 flex-shrink-0" style={{ position: 'relative', minHeight: '600px', minWidth: '100%' }}>
          {/* Performance: Use next/image with priority and sizes for mobile LCP optimization */}
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=70"
            alt="Professional Plumbing Services"
            fill
            priority
            style={{ objectFit: 'cover', zIndex: -1 }}
            sizes="100vw"
          />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
                      <FontAwesomeIcon icon={faPhone} className="me-2" />Call (214) 555-0123
                    </a>
                    <Link href="/contact" className="theme-btn theme-btn2">
                      Get Free Quote<FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="hero-single embla__slide w-100 flex-shrink-0" style={{ position: 'relative', minHeight: '600px', minWidth: '100%' }}>
          <Image
            src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=70"
            alt="Trusted Service Provider"
            fill
            style={{ objectFit: 'cover', zIndex: -1 }}
            sizes="100vw"
          />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
                      <FontAwesomeIcon icon={faPhone} className="me-2" />Call (214) 555-0123
                    </a>
                    <Link href="/contact" className="theme-btn theme-btn2">
                      Get Free Quote<FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Performance: Custom simple arrows to avoid jQuery Owl dependencies */}
      <button className="embla__prev" onClick={() => emblaApi?.scrollPrev()} aria-label="Previous Slide" style={{
        position: 'absolute', top: '50%', left: '20px', transform: 'translateY(-50%)',
        background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', padding: '10px 15px', borderRadius: '50%', zIndex: 10
      }}>
        <FontAwesomeIcon icon={faLongArrowLeft} />
      </button>
      <button className="embla__next" onClick={() => emblaApi?.scrollNext()} aria-label="Next Slide" style={{
        position: 'absolute', top: '50%', right: '20px', transform: 'translateY(-50%)',
        background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', padding: '10px 15px', borderRadius: '50%', zIndex: 10
      }}>
        <FontAwesomeIcon icon={faLongArrowRight} />
      </button>
    </div>
  )
}
