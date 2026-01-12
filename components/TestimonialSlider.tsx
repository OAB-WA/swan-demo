'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons'

const testimonials = [
  {
    id: 1,
    name: 'Sylvia H Green',
    location: 'Dallas, TX',
    text: 'Excellent service! The team was professional, punctual, and completed the work quickly. Highly recommend for all plumbing needs.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Gordon D Novak',
    location: 'Sunnyvale, TX',
    text: 'Great experience from start to finish. The technicians were knowledgeable and explained everything clearly. Will definitely use again!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Reid E Butt',
    location: 'Dallas, TX',
    text: 'Professional service at a fair price. They arrived on time and completed the job efficiently. Very satisfied with the results.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face'
  },
  {
    id: 4,
    name: 'Parker Jimenez',
    location: 'Dallas, TX',
    text: 'Outstanding workmanship and customer service. The team went above and beyond to ensure everything was done correctly. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
  }
]

export default function TestimonialSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 4000 })])

  return (
    <div className="embla" ref={emblaRef} style={{ overflow: 'hidden' }}>
      <div className="embla__container d-flex">
        {testimonials.map((testimonial) => (
          <div className="embla__slide col-md-6 col-lg-4 px-3" key={testimonial.id}>
            <div className="testimonial-single" style={{ height: '100%' }}>
              <div className="testimonial-quote">
                <span className="testimonial-quote-icon"><FontAwesomeIcon icon={faQuoteLeft} /></span>
                <p>{testimonial.text}</p>
              </div>
              <div className="testimonial-content">
                <div className="testimonial-author-img">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    width={200}
                    height={200}
                    className="img-fluid"
                    sizes="100px"
                  />
                </div>
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
  )
}
