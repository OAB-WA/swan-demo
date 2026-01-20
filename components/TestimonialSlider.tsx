'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons'

const testimonials = [
  {
    id: 1,
    name: 'Sylvia H Green',
    location: 'Dallas, TX',
    text: 'Excellent service! The team was professional, punctual, and completed the work quickly. Highly recommend for all plumbing needs.'
  },
  {
    id: 2,
    name: 'Gordon D Novak',
    location: 'Sunnyvale, TX',
    text: 'Great experience from start to finish. The technicians were knowledgeable and explained everything clearly. Will definitely use again!'
  },
  {
    id: 3,
    name: 'Reid E Butt',
    location: 'Dallas, TX',
    text: 'Professional service at a fair price. They arrived on time and completed the job efficiently. Very satisfied with the results.'
  },
  {
    id: 4,
    name: 'Parker Jimenez',
    location: 'Dallas, TX',
    text: 'Outstanding workmanship and customer service. The team went above and beyond to ensure everything was done correctly. Highly recommended!'
  }
]

export default function TestimonialSlider() {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1,
  }, [Autoplay({ delay: 4000 })])

  return (
    <>
      <div className="embla" ref={emblaRef} style={{ overflow: 'hidden' }}>
        <div className="embla__container d-flex">
          {testimonials.map((testimonial) => (
            <div className="embla__slide px-2 px-md-3" key={testimonial.id} style={{ flex: '0 0 100%', minWidth: 0 }}>
              <div className="testimonial-single" style={{ height: '100%' }}>
                <div className="testimonial-quote">
                  <span className="testimonial-quote-icon"><FontAwesomeIcon icon={faQuoteLeft} /></span>
                  <p>{testimonial.text}</p>
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.location}</p>
                    <div className="testimonial-rate">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .embla__slide {
            flex: 0 0 50% !important;
          }
        }
        @media (min-width: 1200px) {
          .embla__slide {
            flex: 0 0 33.333% !important;
          }
        }
      `}} />
    </>
  )
}
