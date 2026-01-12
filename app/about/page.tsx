'use client'

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
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons'
import { faChartPie } from '@fortawesome/pro-duotone-svg-icons' // We'll use fad if available or solid
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedin, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons'

// Fallback for fad icon if not using Pro
import { faPieChart } from '@fortawesome/free-solid-svg-icons'

// Performance: Dynamic import for client-only components
const HeroSlider = dynamic(() => import('@/components/HeroSlider'), { ssr: false })
const TestimonialSlider = dynamic(() => import('@/components/TestimonialSlider'), { ssr: false })
const PartnerSlider = dynamic(() => import('@/components/PartnerSlider'), { ssr: false })

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
                    <h5>100<small>%</small></h5>
                    <p>Satisfaction</p>
                  </div>
                  <div className="about-img">
                    <Image 
                      className="about-img-1" 
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop" 
                      alt="About Us"
                      width={800}
                      height={600}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <Image 
                      className="about-img-2" 
                      src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop" 
                      alt="About Us"
                      width={800}
                      height={600}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-right">
                  <div className="site-heading mb-3">
                    <span className="site-title-tagline">About Us</span>
                    <h2 className="site-title">We Are The Trusted Service Provider</h2>
                  </div>
                  <p className="about-text">
                    Swan Electric, Plumbing, Heating & Air has been serving the Dallas, Texas area 
                    with professional plumbing, electrical, and HVAC services. We pride ourselves on 
                    delivering exceptional service and quality workmanship.
                  </p>
                  <div className="about-list-wrapper">
                    <ul className="about-list list-unstyled">
                      <li>
                        <div className="icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                        <div className="text">
                          <p>Licensed and insured professionals</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                        <div className="text">
                          <p>Years of experience in the industry</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                        <div className="text">
                          <p>100% customer satisfaction guarantee</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="about-solutions">
                    <div className="about-solutions-icon">
                      <FontAwesomeIcon icon={faPieChart} />
                    </div>
                    <div className="about-solutions-text-box">
                      <p className="about-solutions-tex">We Provide all Kinds of Plumbing, Electrical & HVAC Services
                        <br /> That Increase Your Success.
                      </p>
                    </div>
                  </div>
                  <Link href="/contact" className="theme-btn">Get In Touch <FontAwesomeIcon icon={faArrowRight} className="ms-2" /></Link>
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
                icon="fad fa-layer-group" 
                suffix="+"
              />
              <Counter 
                end={250} 
                title="+ Happy Clients" 
                icon="fad fa-mug-hot" 
                suffix="+"
              />
              <Counter 
                end={120} 
                title="+ Total Employee" 
                icon="fad fa-user-friends" 
                suffix="+"
              />
              <Counter 
                end={50} 
                title="+ Win Awards" 
                icon="fad fa-award" 
                suffix="+"
              />
            </div>
          </div>
        </div>
        {/* counter area end */}

        {/* team-area */}
        <div className="team-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Team</span>
                  <h2 className="site-title">Meet Experts</h2>
                  <div className="heading-divider"></div>
                  <p>
                    Our experienced team of professionals is dedicated to providing 
                    the highest quality service for your home and business.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="team-item">
                  <Image 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                    alt="Team Member"
                    width={400}
                    height={400}
                    loading="lazy"
                    className="img-fluid"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="team-content">
                    <div className="team-social">
                      <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                      <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                      <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                      <a href="#" aria-label="Linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
                      <a href="#" aria-label="Youtube"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                    <div className="team-bio">
                      <h5><Link href="/team">George Hooks</Link></h5>
                      <span>Project Manager</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="team-item">
                  <Image 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face" 
                    alt="Team Member"
                    width={400}
                    height={400}
                    loading="lazy"
                    className="img-fluid"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="team-content">
                    <div className="team-social">
                      <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                      <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                      <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                      <a href="#" aria-label="Linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
                      <a href="#" aria-label="Youtube"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                    <div className="team-bio">
                      <h5><Link href="/team">Veron Reyn</Link></h5>
                      <span>Project Manager</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="team-item active">
                  <Image 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" 
                    alt="Team Member"
                    width={400}
                    height={400}
                    loading="lazy"
                    className="img-fluid"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="team-content">
                    <div className="team-social">
                      <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                      <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                      <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                      <a href="#" aria-label="Linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
                      <a href="#" aria-label="Youtube"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                    <div className="team-bio">
                      <h5><Link href="/team">Karl Hart</Link></h5>
                      <span>Project Manager</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="team-item">
                  <Image 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face" 
                    alt="Team Member"
                    width={400}
                    height={400}
                    loading="lazy"
                    className="img-fluid"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="team-content">
                    <div className="team-social">
                      <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                      <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                      <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                      <a href="#" aria-label="Linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
                      <a href="#" aria-label="Youtube"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                    <div className="team-bio">
                      <h5><Link href="/team">Adam Coon</Link></h5>
                      <span>Project Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* team-area end */}

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
