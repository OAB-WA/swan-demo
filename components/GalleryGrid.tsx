'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

interface GalleryGridProps {
  images: string[]
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [open, setOpen] = useState(false)
  const [index, setOpenIndex] = useState(0)

  const slides = images.map((src) => ({ src }))

  return (
    <>
      <div className="row">
        {images.map((image, idx) => (
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
                quality={75}
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

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </>
  )
}
