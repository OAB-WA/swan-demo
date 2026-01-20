'use client'

import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import { useBooking } from '@/contexts/BookingContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPhone, 
  faArrowRight, 
  faStar, 
  faPlay, 
  faQuestion, 
  faMapMarkerAlt,
  faWrench,
  faWind,
  faFire,
  faBolt,
  faSink,
  faHotTub,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons'
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedin, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons'

// Performance: Dynamically import heavy carousel and below-the-fold components
const HeroSlider = dynamic(() => import('@/components/HeroSlider'), { 
  ssr: false,
  loading: () => <div className="hero-slider-placeholder" style={{ height: '100vh', background: '#000' }}></div>
})

const CaseSlider = dynamic(() => import('@/components/CaseSlider'), { ssr: false })
const TestimonialSlider = dynamic(() => import('@/components/TestimonialSlider'), { ssr: false })
const PartnerSlider = dynamic(() => import('@/components/PartnerSlider'), { ssr: false })
const QuoteForm = dynamic(() => import('@/components/QuoteForm'), { ssr: false })
const FAQAccordion = dynamic(() => import('@/components/FAQAccordion'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })

export default function Home() {
  const { openModal } = useBooking()
  
  return (
    <>
      <Header />
      
      <main className="main">
        {/* hero slider */}
        <HeroSlider />
        {/* hero slider end */}

        {/* service area */}
        <div className="service-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Services</span>
                  <h2 className="site-title">Our Core Services</h2>
                  <div className="heading-divider"></div>
                  <p>
                    Swan Electric, Plumbing, Heating & Air provides top-rated HVAC, electrical, and plumbing services 
                    for homeowners and businesses across the Dallas-Fort Worth area.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="service-item">
                  <div className="service-img">
                      <Image 
                        src="/assets/img/swan_1.webp" 
                        alt="Plumbing Services"
                        width={800}
                        height={600}
                        quality={75}
                        loading="lazy"
                        className="img-fluid"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover', width: '100%', height: '100%', aspectRatio: '4 / 3' }}
                      />
                  </div>
                  <div className="service-icon">
                    <FontAwesomeIcon icon={faWrench} />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      <Link href="/services">Plumbing Services</Link>
                    </h3>
                    <p className="service-text">
                      From emergency repairs to slab leak detection, our licensed plumbers handle it all with precision.
                    </p>
                    <div className="service-arrow d-flex gap-2 flex-wrap">
                      <a href="tel:4697277904" className="theme-btn theme-btn2" style={{fontSize: '14px', padding: '10px 20px', minHeight: '44px', flex: '1 1 auto', minWidth: '120px'}}>
                        <FontAwesomeIcon icon={faPhone} className="me-1" />Call
                      </a>
                      <button 
                        onClick={openModal}
                        className="theme-btn" 
                        style={{fontSize: '14px', padding: '10px 20px', border: 'none', minHeight: '44px', flex: '1 1 auto', minWidth: '120px'}}
                      >
                        Book Now<FontAwesomeIcon icon={faCalendarAlt} className="ms-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="service-item">
                  <div className="service-img">
                    <Image 
                      src="/assets/img/swan_2.webp" 
                      alt="Air Conditioning"
                      width={800}
                      height={600}
                      quality={75}
                      loading="lazy"
                      className="img-fluid"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover', width: '100%', height: '100%', aspectRatio: '4 / 3' }}
                    />
                  </div>
                  <div className="service-icon">
                    <FontAwesomeIcon icon={faWind} />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      <Link href="/services">Air Conditioning</Link>
                    </h3>
                    <p className="service-text">
                      Expert AC repair, maintenance, and energy-efficient replacements to keep you cool.
                    </p>
                    <div className="service-arrow d-flex gap-2 flex-wrap">
                      <a href="tel:4697277904" className="theme-btn theme-btn2" style={{fontSize: '14px', padding: '10px 20px', minHeight: '44px', flex: '1 1 auto', minWidth: '120px'}}>
                        <FontAwesomeIcon icon={faPhone} className="me-1" />Call
                      </a>
                      <button 
                        onClick={openModal}
                        className="theme-btn" 
                        style={{fontSize: '14px', padding: '10px 20px', border: 'none', minHeight: '44px', flex: '1 1 auto', minWidth: '120px'}}
                      >
                        Book Now<FontAwesomeIcon icon={faCalendarAlt} className="ms-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="service-item">
                  <div className="service-img">
                    <Image 
                      src="/assets/img/swan_3.webp" 
                      alt="Heating Services"
                      width={800}
                      height={600}
                      quality={75}
                      loading="lazy"
                      className="img-fluid"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover', width: '100%', height: '100%', aspectRatio: '4 / 3' }}
                    />
                  </div>
                  <div className="service-icon">
                    <FontAwesomeIcon icon={faFire} />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      <Link href="/services">Heating Services</Link>
                    </h3>
                    <p className="service-text">
                      Stay warm with our furnace repair, replacement, and annual maintenance services.
                    </p>
                    <div className="service-arrow d-flex gap-2 flex-wrap">
                      <a href="tel:4697277904" className="theme-btn theme-btn2" style={{fontSize: '14px', padding: '10px 20px', minHeight: '44px', flex: '1 1 auto', minWidth: '120px'}}>
                        <FontAwesomeIcon icon={faPhone} className="me-1" />Call
                      </a>
                      <button 
                        onClick={openModal}
                        className="theme-btn" 
                        style={{fontSize: '14px', padding: '10px 20px', border: 'none', minHeight: '44px', flex: '1 1 auto', minWidth: '120px'}}
                      >
                        Book Now<FontAwesomeIcon icon={faCalendarAlt} className="ms-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="service-item">
                  <div className="service-img">
                    <Image 
                      src="/assets/img/swan_4.webp" 
                      alt="Electrical Services"
                      width={800}
                      height={600}
                      quality={75}
                      loading="lazy"
                      className="img-fluid"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover', width: '100%', height: '100%', aspectRatio: '4 / 3' }}
                    />
                  </div>
                  <div className="service-icon">
                    <FontAwesomeIcon icon={faBolt} />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      <Link href="/services">Electrical Services</Link>
                    </h3>
                    <p className="service-text">
                      Safe and professional electrical repairs, panel replacements, and home rewiring.
                    </p>
                    <div className="service-arrow d-flex gap-2 flex-wrap">
                      <a href="tel:4697277904" className="theme-btn theme-btn2" style={{fontSize: '14px', padding: '10px 20px', minHeight: '44px', flex: '1 1 auto', minWidth: '120px'}}>
                        <FontAwesomeIcon icon={faPhone} className="me-1" />Call
                      </a>
                      <button 
                        onClick={openModal}
                        className="theme-btn" 
                        style={{fontSize: '14px', padding: '10px 20px', border: 'none', minHeight: '44px', flex: '1 1 auto', minWidth: '120px'}}
                      >
                        Book Now<FontAwesomeIcon icon={faCalendarAlt} className="ms-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="service-item">
                  <div className="service-img">
                    <Image 
                      src="/assets/img/swan_5.webp" 
                      alt="Drain & Sewer"
                      width={800}
                      height={600}
                      quality={75}
                      loading="lazy"
                      className="img-fluid"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover', width: '100%', height: '100%', aspectRatio: '4 / 3' }}
                    />
                  </div>
                  <div className="service-icon">
                    <FontAwesomeIcon icon={faSink} />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      <Link href="/services">Drain & Sewer</Link>
                    </h3>
                    <p className="service-text">
                      Expert drain cleaning, camera inspections, and full sewer line replacements.
                    </p>
                    <div className="service-arrow d-flex gap-2 flex-wrap">
                      <a href="tel:4697277904" className="theme-btn theme-btn2" style={{fontSize: '14px', padding: '10px 20px', minHeight: '44px', flex: '1 1 auto', minWidth: '120px'}}>
                        <FontAwesomeIcon icon={faPhone} className="me-1" />Call
                      </a>
                      <button 
                        onClick={openModal}
                        className="theme-btn" 
                        style={{fontSize: '14px', padding: '10px 20px', border: 'none', minHeight: '44px', flex: '1 1 auto', minWidth: '120px'}}
                      >
                        Book Now<FontAwesomeIcon icon={faCalendarAlt} className="ms-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="service-item">
                  <div className="service-img">
                    <Image 
                      src="/assets/img/swan_6.webp" 
                      alt="Water Heaters"
                      width={800}
                      height={600}
                      quality={75}
                      loading="lazy"
                      className="img-fluid"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover', width: '100%', height: '100%', aspectRatio: '4 / 3' }}
                    />
                  </div>
                  <div className="service-icon">
                    <FontAwesomeIcon icon={faHotTub} />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      <Link href="/services">Water Heaters</Link>
                    </h3>
                    <p className="service-text">
                      Tankless and traditional water heater repair, replacement, and maintenance.
                    </p>
                    <div className="service-arrow d-flex gap-2 flex-wrap">
                      <a href="tel:4697277904" className="theme-btn theme-btn2" style={{fontSize: '14px', padding: '10px 20px', minHeight: '44px', flex: '1 1 auto', minWidth: '120px'}}>
                        <FontAwesomeIcon icon={faPhone} className="me-1" />Call
                      </a>
                      <button 
                        onClick={openModal}
                        className="theme-btn" 
                        style={{fontSize: '14px', padding: '10px 20px', border: 'none', minHeight: '44px', flex: '1 1 auto', minWidth: '120px'}}
                      >
                        Book Now<FontAwesomeIcon icon={faCalendarAlt} className="ms-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12 text-center">
                <p className="mb-0" style={{fontSize: 'clamp(14px, 3.5vw, 16px)'}}>
                  <strong>Technicians That Care - Available 24/7 for Emergencies.</strong> 
                  <a href="tel:4697277904" className="ms-2" style={{whiteSpace: 'nowrap'}}>Call 469-727-7904</a> to learn more about our full range of home services.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* service area end */}

        {/* testimonial-area - moved up for better conversion */}
        <div className="testimonial-area pt-80 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Testimonials</span>
                  <h2 className="site-title text-white">What Client Say&apos;s</h2>
                  <div className="heading-divider"></div>
                  <p className="text-white mb-3">
                    Don&apos;t just take our word for it. See what our satisfied customers 
                    have to say about our services.
                  </p>
                  <div className="review-badge mb-4">
                    <span className="badge" style={{background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '10px 25px', borderRadius: '30px', fontSize: 'clamp(14px, 3.5vw, 16px)', display: 'inline-block'}}>
                      <FontAwesomeIcon icon={faStar} className="me-2" style={{color: '#FFD700'}} />
                      <strong>4.9/5 Stars</strong> from <strong>250+ Reviews</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <TestimonialSlider />
            <div className="row mt-4">
              <div className="col-12 text-center">
                <Link href="/contact" className="theme-btn" style={{minHeight: '44px', minWidth: '200px', justifyContent: 'center'}}>
                  Read More Reviews<FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* testimonial-area end */}

        {/* video area */}
        <div className="video-area" style={{ position: 'relative' }}>
          <Image
            src="/assets/img/swan_hero_3.webp"
            alt="Video Background"
            fill
            quality={75}
            style={{ objectFit: 'cover', zIndex: -1 }}
            sizes="100vw"
          />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="video-wrapper">
                  <a className="play-btn popup-youtube" href="https://www.youtube.com/watch?v=ckHzmP1evNU">
                    <FontAwesomeIcon icon={faPlay} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* video area end */}

        {/* quote area */}
        <div className="quote-area">
          <div className="container">
            <div className="quote-wrapper">
              <div className="row align-items-start">
                <div className="col-lg-5 col-12">
                  <div className="quote-thum quote-thum-sticky">
                    <Image 
                      src="/assets/img/swan_1.webp" 
                      alt="Request A Quote"
                      width={800}
                      height={600}
                      quality={75}
                      loading="lazy"
                      className="img-fluid"
                      sizes="(max-width: 991px) 100vw, 40vw"
                    />
                  </div>
                </div>
                <div className="col-lg-7 col-12">
                  <QuoteForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* quote area end */}

        {/* faq area */}
        <div className="faq-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-left">
                  <div className="site-heading mb-3">
                    <span className="site-title-tagline">Faq&apos;s</span>
                    <h2 className="site-title my-3">General frequently asked questions</h2>
                  </div>
                  <p className="about-text">Have questions about our services? We&apos;re here to help. 
                    Find answers to common questions about our plumbing, electrical, and HVAC services in the DFW area.</p>
                  <p>If you don&apos;t find the answer you&apos;re looking for, feel free to contact us directly.</p>
                  <div className="d-flex flex-column flex-md-row gap-3 mt-5">
                    <a href="tel:4697277904" className="theme-btn theme-btn2" style={{minHeight: '44px', justifyContent: 'center'}}>
                      <FontAwesomeIcon icon={faPhone} className="me-2" />Call 469-727-7904
                    </a>
                    <Link href="/contact" className="theme-btn" style={{minHeight: '44px', justifyContent: 'center'}}>Ask Your Question <FontAwesomeIcon icon={faArrowRight} className="ms-2" /></Link>
                  </div>    
                </div>
              </div>
              <div className="col-lg-6">
                <FAQAccordion items={[
                  {
                    id: 'One',
                    question: 'What services does Swan provide?',
                    answer: 'Swan Electric, Plumbing, Heating & Air provides a full range of home services including plumbing (leak detection, repiping, slab leaks), air conditioning (repair, installation, duct cleaning), heating (furnace repair, maintenance), and electrical (panel replacement, emergency repairs, EV chargers).'
                  },
                  {
                    id: 'Two',
                    question: 'Do you offer emergency services?',
                    answer: 'Yes! We offer 24/7 emergency service for plumbing, AC, and electrical issues. We always have a live answer, so you can count on us day or night.'
                  },
                  {
                    id: 'Three',
                    question: 'What is the SAM Plan?',
                    answer: 'The SAM (Swan Annual Maintenance) Plan is our membership program for only $9.95/month. It includes 4 annual visits, no regular service fees, priority scheduling, 15% off products and services, and 50% off emergency service fees.'
                  }
                ]} />
              </div>
            </div>
          </div>
        </div>
        {/* faq area end */}

        {/* case area */}
        <div className="case-area pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Cases</span>
                  <h2 className="site-title">Recent Projects</h2>
                  <div className="heading-divider"></div>
                  <p>
                    Take a look at some of our recent projects showcasing our expertise 
                    in plumbing, electrical, and HVAC services.
                  </p>
                </div>
              </div>
            </div>
            <div className="row popup-gallery">
              <CaseSlider />
            </div>
          </div>
        </div>
        {/* case area end */}

        {/* service areas section */}
        <div className="service-areas py-120" style={{background: '#F6F7F9'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Service Areas</span>
                  <h2 className="site-title">We Service Dallas & Surrounding Areas</h2>
                  <div className="heading-divider"></div>
                  <p>
                    Proudly serving the greater Dallas metropolitan area with professional 
                    plumbing, electrical, and HVAC services.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="service-area-item text-center p-4" style={{background: '#fff', borderRadius: '10px', boxShadow: '0 3px 15px rgba(0,0,0,0.1)'}}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mb-3" style={{fontSize: '30px', color: '#0000FF'}} />
                  <h5>Mesquite</h5>
                  <p className="mb-0">Top-Rated HVAC & Plumbing</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="service-area-item text-center p-4" style={{background: '#fff', borderRadius: '10px', boxShadow: '0 3px 15px rgba(0,0,0,0.1)'}}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mb-3" style={{fontSize: '30px', color: '#0000FF'}} />
                  <h5>Sunnyvale</h5>
                  <p className="mb-0">Expert Home Services</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="service-area-item text-center p-4" style={{background: '#fff', borderRadius: '10px', boxShadow: '0 3px 15px rgba(0,0,0,0.1)'}}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mb-3" style={{fontSize: '30px', color: '#0000FF'}} />
                  <h5>Forney</h5>
                  <p className="mb-0">Reliable Repairs 24/7</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="service-area-item text-center p-4" style={{background: '#fff', borderRadius: '10px', boxShadow: '0 3px 15px rgba(0,0,0,0.1)'}}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mb-3" style={{fontSize: '30px', color: '#0000FF'}} />
                  <h5>Balch Springs</h5>
                  <p className="mb-0">Technicians That Care</p>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12 text-center">
                <p className="mb-3" style={{fontSize: 'clamp(14px, 3.5vw, 16px)'}}>
                  <strong>Serving Dallas, Fort Worth, Plano, Arlington, and more!</strong>
                </p>
                <a href="tel:4697277904" className="theme-btn" style={{minHeight: '44px', minWidth: '200px', justifyContent: 'center'}}>
                  <FontAwesomeIcon icon={faPhone} className="me-2" />Call 469-727-7904 to Confirm
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* service areas end */}

        {/* partner area */}
        <div className="partner-area pt-70 pb-70">
          <div className="container">
            <PartnerSlider />
          </div>
        </div>
        {/* partner area end */}
      </main>

      <Footer />
    </>
  )
}
