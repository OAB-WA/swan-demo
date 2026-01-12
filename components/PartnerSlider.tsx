'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const SVGLogos = [
  // Logo 1
  <svg key="1" width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="120" height="40" rx="8" fill="#F3F4F6"/>
    <path d="M30 20L40 10L50 20L40 30L30 20Z" fill="#9CA3AF"/>
    <rect x="60" y="15" width="40" height="4" rx="2" fill="#9CA3AF"/>
    <rect x="60" y="23" width="30" height="4" rx="2" fill="#D1D5DB"/>
  </svg>,
  // Logo 2
  <svg key="2" width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="120" height="40" rx="8" fill="#F3F4F6"/>
    <circle cx="35" cy="20" r="8" stroke="#9CA3AF" strokeWidth="3"/>
    <rect x="55" y="18" width="45" height="4" rx="2" fill="#9CA3AF"/>
  </svg>,
  // Logo 3
  <svg key="3" width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="120" height="40" rx="8" fill="#F3F4F6"/>
    <path d="M30 15H50V25H30V15Z" stroke="#9CA3AF" strokeWidth="3"/>
    <rect x="65" y="12" width="35" height="16" rx="4" fill="#D1D5DB"/>
  </svg>,
  // Logo 4
  <svg key="4" width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="120" height="40" rx="8" fill="#F3F4F6"/>
    <path d="M25 25L35 15L45 25" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round"/>
    <rect x="55" y="15" width="40" height="10" rx="2" fill="#9CA3AF"/>
  </svg>,
  // Logo 5
  <svg key="5" width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="120" height="40" rx="8" fill="#F3F4F6"/>
    <circle cx="30" cy="20" r="6" fill="#D1D5DB"/>
    <circle cx="45" cy="20" r="6" fill="#9CA3AF"/>
    <rect x="65" y="18" width="35" height="4" rx="2" fill="#9CA3AF"/>
  </svg>,
  // Logo 6
  <svg key="6" width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="120" height="40" rx="8" fill="#F3F4F6"/>
    <path d="M25 15L45 25M25 25L45 15" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round"/>
    <rect x="60" y="15" width="40" height="10" rx="5" fill="#D1D5DB"/>
  </svg>
]

export default function PartnerSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay({ delay: 3000 })])

  return (
    <div className="embla" ref={emblaRef} style={{ overflow: 'hidden' }}>
      <div className="embla__container d-flex align-items-center">
        {SVGLogos.map((logo, index) => (
          <div className="embla__slide col-4 col-md-2 px-4" key={index} style={{ flex: '0 0 33.33%', minWidth: 0 }}>
            <div className="partner-item" style={{ opacity: 0.6, transition: 'opacity 0.3s' }}>
              {logo}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @media (min-width: 768px) {
          .embla__slide {
            flex: 0 0 16.66% !important;
          }
        }
        .partner-item:hover {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  )
}
