'use client'

import { useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useBooking } from '@/contexts/BookingContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight, faLongArrowLeft, faLongArrowRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

export default function HeroSlider() {
  const { openModal } = useBooking()
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
    <div className="hero-section hero-slider-wrapper embla" ref={emblaRef} style={{ height: '100vh' }}>
      <div className="hero-slider embla__container d-flex" style={{ height: '100%' }}>
        {/* Slide 1 */}
        <div className="hero-single embla__slide w-100 flex-shrink-0" style={{ position: 'relative', minHeight: '100%', height: '100vh', minWidth: '100%', overflow: 'hidden' }}>
          {/* Performance: Use next/image with priority and sizes for mobile LCP optimization */}
          <Image
            src="/assets/img/swan_hero.webp"
            alt="Professional Plumbing Services"
            fill
            priority
            style={{ objectFit: 'cover', zIndex: -2, position: 'absolute', top: 0, left: 0 }}
            sizes="100vw"
            quality={85}
          />
          <div className="hero-overlay" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: -1
          }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="row align-items-center">
              <div className="col-md-7 col-lg-7">
                <div className="hero-content">
                  <h6 
                    className="hero-sub-title wow animate__animated animate__fadeInUp text-white"
                    data-wow-duration="1s" 
                    data-wow-delay=".25s"
                  >
                    Swan Electric, Plumbing, Heating & Air
                  </h6>
                  <h1 
                    className="hero-title wow animate__animated animate__fadeInUp" 
                    data-wow-duration="1s"
                    data-wow-delay=".50s"
                  >
                    Plumbing, AC & Electrical Service in Mesquite
                  </h1>
                  <p 
                    className="wow animate__animated animate__fadeInUp" 
                    data-wow-duration="1s"
                    data-wow-delay=".75s"
                  >
                    Providing fast, reliable AC repair and plumbing services across the Dallas-Fort Worth Area. 
                    Same-day service, transparent pricing, and expert care.
                  </p>
                  <div 
                    className="hero-btn wow animate__animated animate__fadeInUp" 
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <a href="tel:4697277904" className="theme-btn" style={{marginRight: '15px'}}>
                      <FontAwesomeIcon icon={faPhone} className="me-2" />Call 469-727-7904
                    </a>
                    <button 
                      onClick={openModal}
                      className="theme-btn theme-btn2"
                      style={{border: 'none'}}
                    >
                      Book Now<FontAwesomeIcon icon={faCalendarAlt} className="ms-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="hero-single embla__slide w-100 flex-shrink-0" style={{ position: 'relative', minHeight: '100%', height: '100vh', minWidth: '100%', overflow: 'hidden' }}>
          <Image
            src="/assets/img/swan_hero_2.webp"
            alt="Trusted Service Provider"
            fill
            style={{ objectFit: 'cover', zIndex: -1 }}
            sizes="100vw"
            quality={85}
          />
          <div className="hero-overlay" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
            zIndex: 0
          }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="row align-items-center">
              <div className="col-md-7 col-lg-7">
                <div className="hero-content">
                  <h6 
                    className="hero-sub-title wow animate__animated animate__fadeInUp text-white"
                    data-wow-duration="1s" 
                    data-wow-delay=".25s"
                  >
                    Swan Electric, Plumbing, Heating & Air
                  </h6>
                  <h1 
                    className="hero-title wow animate__animated animate__fadeInUp" 
                    data-wow-duration="1s"
                    data-wow-delay=".50s"
                  >
                    Plumbing, AC & Electrical Service in Mesquite
                  </h1>
                  <p 
                    className="wow animate__animated animate__fadeInUp" 
                    data-wow-duration="1s"
                    data-wow-delay=".75s"
                  >
                    Providing fast, reliable AC repair and plumbing services across the Dallas-Fort Worth Area. 
                    Same-day service, transparent pricing, and expert care.
                  </p>
                  <div 
                    className="hero-btn wow animate__animated animate__fadeInUp" 
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <a href="tel:4697277904" className="theme-btn" style={{marginRight: '15px'}}>
                      <FontAwesomeIcon icon={faPhone} className="me-2" />Call 469-727-7904
                    </a>
                    <button 
                      onClick={openModal}
                      className="theme-btn theme-btn2"
                      style={{border: 'none'}}
                    >
                      Book Now<FontAwesomeIcon icon={faCalendarAlt} className="ms-2" />
                    </button>
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
