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

export default function GalleryPage() {
  const [open, setOpen] = useState(false)
  const [index, setOpenIndex] = useState(0)

  const galleryImages = [
    'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  ]

  const slides = galleryImages.map((src) => ({ src }))

  return (
    <>
      <Header />
      
      <main className="main">
        <Breadcrumb 
          title="Gallery"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Gallery' }
          ]}
        />

        {/* gallery area */}
        <div className="gallery-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Gallery</span>
                  <h2 className="site-title">Our Gallery</h2>
                  <div className="heading-divider"></div>
                  <p>
                    Browse through our gallery to see examples of our work and 
                    the quality service we provide.
                  </p>
                </div>
              </div>
            </div>
            {/* Performance: Using standard Bootstrap grid instead of heavy Isotope library */}
            <div className="row">
              {galleryImages.map((image, idx) => (
                <div key={idx} className="col-md-6 col-lg-4 mb-4">
                  <div className="gallery-item" style={{ cursor: 'pointer' }} onClick={() => {
                    setOpenIndex(idx)
                    setOpen(true)
                  }}>
                    <Image 
                      src={image} 
                      alt={`Gallery Image ${idx + 1}`}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="img-fluid"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="gallery-item-content">
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* gallery area end */}
      </main>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />

      <Footer />
    </>
  )
}
