'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function ProjectsPage() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const projects = [
    { id: 1, title: 'AC Replacement', category: 'HVAC', image: '/assets/img/swan_2.webp' },
    { id: 2, title: 'Slab Leak Detection', category: 'Plumbing', image: '/assets/img/swan_1.webp' },
    { id: 3, title: 'Electrical Panel Upgrade', category: 'Electrical', image: '/assets/img/swan_4.webp' },
    { id: 4, title: 'Furnace Maintenance', category: 'Heating', image: '/assets/img/swan_3.webp' },
    { id: 5, title: 'Whole-Home Repiping', category: 'Plumbing', image: '/assets/img/swan_5.webp' },
    { id: 6, title: 'EV Charger Installation', category: 'Electrical', image: '/assets/img/swan_7.webp' },
  ]

  const slides = projects.map((p) => ({ src: p.image }))

  return (
    <>
      <Header />
      
      <main className="main">
        <Breadcrumb 
          title="Projects"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Projects' }
          ]}
        />

        {/* case area */}
        <div className="case-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Showcase</span>
                  <h2 className="site-title">Swan Case Studies</h2>
                  <div className="heading-divider"></div>
                  <p>
                    Take a look at some of our recent work. From complex slab leaks 
                    to high-efficiency HVAC installs, we handle it all with care.
                  </p>
                </div>
              </div>
            </div>
            <div className="row popup-gallery">
              {projects.map((project, idx) => (
                <div key={project.id} className="col-md-6 col-lg-4">
                  <div 
                    className="case-item" 
                    style={{ cursor: 'pointer' }} 
                    onClick={() => {
                      setIndex(idx)
                      setOpen(true)
                    }}
                  >
                    <div className="case-img">
                      <Image 
                        className="img-fluid" 
                        src={project.image} 
                        alt={project.title}
                        width={800}
                        height={600}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      />
                      <div 
                        className="popup-img case-link" 
                        style={{ cursor: 'pointer' }}
                        onClick={(e) => {
                          e.stopPropagation()
                          setIndex(idx)
                          setOpen(true)
                        }}
                      >
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
        </div>
        {/* case area end */}

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
        />
      </main>

      <Footer />
    </>
  )
}
