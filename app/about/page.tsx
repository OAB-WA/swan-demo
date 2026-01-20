import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import dynamic from 'next/dynamic'
import Counter from '@/components/Counter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCheckCircle, 
  faArrowRight,
  faChartPie,
  faLayerGroup,
  faMugHot,
  faUserFriends,
  faAward
} from '@fortawesome/free-solid-svg-icons'

// Performance: Dynamic import for client-only components
const HeroSlider = dynamic(() => import('@/components/HeroSlider'), { ssr: false })
const TestimonialSlider = dynamic(() => import('@/components/TestimonialSlider'), { ssr: false })
const PartnerSlider = dynamic(() => import('@/components/PartnerSlider'), { ssr: false })

export const metadata = {
  title: 'About Us - Swan Electric, Plumbing, Heating & Air',
    description: 'Learn about Swan Electric, Plumbing, Heating & Air - your trusted partner for plumbing, electrical, and HVAC services across the Dallas-Fort Worth area.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <main className="main">
        <Breadcrumb 
          title="About Us"
          items={[
            { label: 'Home', href: '/' },
            { label: 'About Us' }
          ]}
        />

        {/* about area */}
        <div className="about-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-left">
                  <div className="about-sticker">
                    <h5>5<small>Star</small></h5>
                    <p>Satisfaction</p>
                  </div>
                  <div className="about-img">
                    <Image 
                      className="about-img-1" 
                      src="/assets/img/swan_1.webp" 
                      alt="About Us"
                      width={800}
                      height={600}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                    />
                    <Image 
                      className="about-img-2" 
                      src="/assets/img/swan_2.webp" 
                      alt="About Us"
                      width={800}
                      height={600}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ width: '280px', height: '200px', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-right">
                  <div className="site-heading mb-3">
                    <span className="site-title-tagline">About Us</span>
                    <h2 className="site-title">Technicians That Care</h2>
                  </div>
                  <p className="about-text">
                    Swan Electric, Plumbing, Heating & Air is proud to be the top-rated home service contractor in Mesquite, TX. 
                    We deliver fast, reliable services for homeowners and businesses across the Dallas-Fort Worth region.
                  </p>
                  <div className="about-list-wrapper">
                    <ul className="about-list list-unstyled">
                      <li>
                        <div className="icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                        <div className="text">
                          <p>Free, No-Obligation Second Opinions</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                        <div className="text">
                          <p>Prompt & Professional 24/7 Emergency Service</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                        <div className="text">
                          <p>Transparent Pricing & No Shortcuts Policy</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="about-solutions">
                    <div className="about-solutions-icon">
                      <FontAwesomeIcon icon={faChartPie} />
                    </div>
                    <div className="about-solutions-text-box">
                      <p className="about-solutions-tex">We prioritize doing what is right over what is easy.
                        <br /> Honest solutions for every home.
                      </p>
                    </div>
                  </div>
                  <Link href="/contact" className="theme-btn" style={{minHeight: '44px', minWidth: '200px', justifyContent: 'center'}}>Request Service <FontAwesomeIcon icon={faArrowRight} className="ms-2" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about area end */}

        {/* counter area */}
        <div className="counter-area pt-20 pb-20">
          <div className="container">
            <div className="row">
              <Counter 
                end={500} 
                title="+ Project Done" 
                icon={faLayerGroup} 
                suffix="+"
              />
              <Counter 
                end={250} 
                title="+ Happy Clients" 
                icon={faMugHot} 
                suffix="+"
              />
              <Counter 
                end={120} 
                title="+ Total Employee" 
                icon={faUserFriends} 
                suffix="+"
              />
              <Counter 
                end={50} 
                title="+ Win Awards" 
                icon={faAward} 
                suffix="+"
              />
            </div>
          </div>
        </div>
        {/* counter area end */}

        {/* testimonial-area */}
        <div className="testimonial-area pt-80 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Testimonials</span>
                  <h2 className="site-title text-white">What Client Say&apos;s</h2>
                  <div className="heading-divider"></div>
                  <p className="text-white">
                    Don&apos;t just take our word for it. See what our satisfied customers 
                    have to say about our services.
                  </p>
                </div>
              </div>
            </div>
            <TestimonialSlider />
          </div>
        </div>
        {/* testimonial-area end */}

        {/* partner area */}
        <div className="partner-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Partners</span>
                  <h2 className="site-title">Our Partners</h2>
                  <div className="heading-divider"></div>
                  <p>
                    We work with trusted partners to provide you with the best 
                    products and services available.
                  </p>
                </div>
              </div>
            </div>
            <PartnerSlider />
          </div>
        </div>
        {/* partner area end */}
      </main>

      <Footer />
    </>
  )
}
