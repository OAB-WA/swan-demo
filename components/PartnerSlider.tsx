'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const partners = [
  '/assets/img/partner/1.png',
  '/assets/img/partner/2.png',
  '/assets/img/partner/3.png',
  '/assets/img/partner/4.png',
  '/assets/img/partner/5.png',
  '/assets/img/partner/6.png',
]

export default function PartnerSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay({ delay: 3000 })])

  return (
    <div className="embla" ref={emblaRef} style={{ overflow: 'hidden' }}>
      <div className="embla__container d-flex align-items-center">
        {partners.map((partner, index) => (
          <div className="embla__slide col-4 col-md-2 px-4" key={index}>
            <div className="partner-item">
              <Image src={partner} alt="Partner" width={150} height={80} style={{ objectFit: 'contain' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
