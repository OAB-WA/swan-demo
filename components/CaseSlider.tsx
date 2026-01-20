'use client'

import React, { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const projects = [
  { id: 1, title: 'Water Line Repair', category: 'Plumbing', image: '/assets/img/swan_1.webp' },
  { id: 2, title: 'Kitchen Plumbing', category: 'Plumbing', image: '/assets/img/swan_2.webp' },
  { id: 3, title: 'Basement Plumbing', category: 'Plumbing', image: '/assets/img/swan_3.webp' },
  { id: 4, title: 'Pipe Line Repair', category: 'Plumbing', image: '/assets/img/swan_4.webp' },
]

export default function CaseSlider() {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1,
  }, [Autoplay({ delay: 4500 })])
  
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const slides = projects.map((p) => ({ src: p.image }))

  return (
    <>
      <div className="embla" ref={emblaRef} style={{ overflow: 'hidden' }}>
        <div className="embla__container d-flex">
          {projects.map((project, idx) => (
            <div 
              className="embla__slide px-2 px-md-3" 
              key={project.id} 
              style={{ 
                flex: '0 0 100%', 
                minWidth: 0,
              }}
            >
              <div className="case-item" style={{ cursor: 'pointer' }} onClick={() => {
                setIndex(idx)
                setOpen(true)
              }}>
                <div className="case-img">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={800}
                    height={600}
                    className="img-fluid"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                  <div className="popup-img case-link" style={{ cursor: 'pointer' }} onClick={(e) => {
                    e.stopPropagation()
                    setIndex(idx)
                    setOpen(true)
                  }}> 
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                </div>
                <div className="case-content">
                  <div className="case-content-info">
                    <h4 style={{ cursor: 'pointer' }}>{project.title}</h4>
                    <small>{project.category}</small>
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

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </>
  )
}
