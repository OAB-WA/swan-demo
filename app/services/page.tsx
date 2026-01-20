'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { useBooking } from '@/contexts/BookingContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { getAllServices } from '@/lib/services'

export default function ServicesPage() {
  const services = getAllServices()
  const { openModal } = useBooking()

  return (
    <>
      <Header />
      
      <main className="main">
        <Breadcrumb 
          title="Services"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services' }
          ]}
        />

        {/* service area */}
        <div className="service-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Services</span>
                  <h2 className="site-title">Our Expert Services</h2>
                  <div className="heading-divider"></div>
                  <p>
                    Swan Electric, Plumbing, Heating & Air provides top-rated HVAC, electrical, and plumbing services 
                    for homeowners and businesses across the Dallas-Fort Worth area.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {services.map((service) => (
                <div key={service.id} className="col-md-6 col-lg-4">
                  <div className="service-item">
                    <div className="service-img">
                      <Image 
                        src={service.image} 
                        alt={service.title}
                        width={800}
                        height={600}
                        loading="lazy"
                        className="img-fluid"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      />
                    </div>
                    <div className="service-icon">
                      <FontAwesomeIcon icon={service.icon} />
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">
                        <Link href={`/services/${service.slug}`}>
                          {service.title}
                        </Link>
                      </h3>
                      <p className="service-text">{service.description}</p>
                      <div className="service-arrow">
                        <Link href={`/services/${service.slug}`} className="theme-btn">
                          Read More<FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row mt-4">
              <div className="col-12 text-center">
                <p className="mb-4" style={{fontSize: 'clamp(14px, 3.5vw, 16px)'}}>
                  <strong>Technicians That Care - Available 24/7 for all your home service needs.</strong> 
                  <Link href="/contact" className="ms-2">Contact us</Link> to learn more about our full range of services.
                </p>
                <button
                  onClick={openModal}
                  className="theme-btn"
                  style={{
                    fontSize: 'clamp(16px, 3.5vw, 18px)',
                    padding: '15px 40px',
                    minHeight: '54px'
                  }}
                >
                  <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                  Schedule Service Online
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* service area end */}
      </main>

      <Footer />
    </>
  )
}
