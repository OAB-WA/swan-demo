'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  { id: 1, title: 'Water Line Repair', category: 'Plumbing', image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop' },
  { id: 2, title: 'Kitchen Plumbing', category: 'Plumbing', image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop' },
  { id: 3, title: 'Basement Plumbing', category: 'Plumbing', image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop' },
  { id: 4, title: 'Pipe Line Repair', category: 'Plumbing', image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop' },
]

export default function CaseSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 4500 })])

  return (
    <div className="embla" ref={emblaRef} style={{ overflow: 'hidden' }}>
      <div className="embla__container d-flex">
        {projects.map((project) => (
          <div className="embla__slide col-md-6 col-lg-4 px-3" key={project.id}>
            <div className="case-item">
              <div className="case-img">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={800}
                  height={600}
                  className="img-fluid"
                />
                <a className="popup-img case-link" href={project.image}> 
                  <i className="far fa-plus"></i>
                </a>
              </div>
              <div className="case-content">
                <div className="case-content-info">
                  <h4><Link href="/projects">{project.title}</Link></h4>
                  <small>{project.category}</small>
                </div>
                <Link href="/projects" className="case-arrow"><i className="far fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
