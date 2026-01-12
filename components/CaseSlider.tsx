'use client'

import React, { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const projects = [
  { id: 1, title: 'Water Line Repair', category: 'Plumbing', image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop' },
  { id: 2, title: 'Kitchen Plumbing', category: 'Plumbing', image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop' },
  { id: 3, title: 'Basement Plumbing', category: 'Plumbing', image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop' },
  { id: 4, title: 'Pipe Line Repair', category: 'Plumbing', image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop' },
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
              className="embla__slide px-3" 
              key={project.id} 
              style={{ 
                flex: '0 0 100%', 
                minWidth: 0,
              }}
            >
              <div className="case-item">
                <div className="case-img">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={800}
                    height={600}
                    className="img-fluid"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="popup-img case-link" style={{ cursor: 'pointer' }} onClick={() => {
                    setIndex(idx)
                    setOpen(true)
                  }}> 
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                </div>
                <div className="case-content">
                  <div className="case-content-info">
                    <h4><Link href="/projects">{project.title}</Link></h4>
                    <small>{project.category}</small>
                  </div>
                  <Link href="/projects" className="case-arrow"><FontAwesomeIcon icon={faArrowRight} /></Link>
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
