import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'

// Performance: Dynamic import for client-only components
const HeroSlider = dynamic(() => import('@/components/HeroSlider'), { ssr: false })

export const metadata = {
  title: 'About Us - Swan Electric, Plumbing, Heating & Air',
  description: 'Learn about Swan Electric, Plumbing, Heating & Air - your trusted partner for plumbing, electrical, and HVAC services in Dallas, Texas.',
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
                    />
                    <Image 
                      className="about-img-2" 
                      src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop" 
                      alt="About Us"
                      width={800}
                      height={600}
                      loading="lazy"
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
                        <div className="icon"><span className="far fa-check-circle"></span></div>
                        <div className="text">
                          <p>Licensed and insured professionals</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon"><span className="far fa-check-circle"></span></div>
                        <div className="text">
                          <p>Years of experience in the industry</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon"><span className="far fa-check-circle"></span></div>
                        <div className="text">
                          <p>100% customer satisfaction guarantee</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="about-solutions">
                    <div className="about-solutions-icon">
                      <span className="fad fa-chart-pie"></span>
                    </div>
                    <div className="about-solutions-text-box">
                      <p className="about-solutions-tex">We Provide all Kinds of Plumbing, Electrical & HVAC Services
                        <br /> That Increase Your Success.
                      </p>
                    </div>
                  </div>
                  <Link href="/contact" className="theme-btn">Get In Touch <i className="far fa-arrow-right"></i></Link>
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
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon"><i className="fad fa-layer-group"></i></div>
                  <span className="counter" data-count="+" data-to="500" data-speed="3000">500</span>
                  <h6 className="title">+ Project Done</h6>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon"><i className="fad fa-mug-hot"></i></div>
                  <span className="counter" data-count="+" data-to="250" data-speed="3000">250</span>
                  <h6 className="title">+ Happy Clients</h6>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon"><i className="fad fa-user-friends"></i></div>
                  <span className="counter" data-count="+" data-to="120" data-speed="3000">120</span>
                  <h6 className="title">+ Total Employee</h6>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon"><i className="fad fa-award"></i></div>
                  <span className="counter" data-count="+" data-to="50" data-speed="3000">50</span>
                  <h6 className="title">+ Win Awards</h6>
                </div>
              </div>
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
                  />
                  <div className="team-content">
                    <div className="team-social">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"><i className="fab fa-linkedin"></i></a>
                      <a href="#"><i className="fab fa-youtube"></i></a>
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
                  />
                  <div className="team-content">
                    <div className="team-social">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"><i className="fab fa-linkedin"></i></a>
                      <a href="#"><i className="fab fa-youtube"></i></a>
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
                  />
                  <div className="team-content">
                    <div className="team-social">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"><i className="fab fa-linkedin"></i></a>
                      <a href="#"><i className="fab fa-youtube"></i></a>
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
                  />
                  <div className="team-content">
                    <div className="team-social">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"><i className="fab fa-linkedin"></i></a>
                      <a href="#"><i className="fab fa-youtube"></i></a>
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
            <div className="testimonial-slider owl-carousel owl-theme">
              <div className="testimonial-single">
                <div className="testimonial-quote">
                  <span className="testimonial-quote-icon"><i className="fal fa-quote-left"></i></span>
                  <p>
                    Excellent service! The team was professional, punctual, and completed 
                    the work quickly. Highly recommend for all plumbing needs.
                  </p>
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-author-img">
                    <Image 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face" 
                      alt="Customer"
                      width={200}
                      height={200}
                      loading="lazy"
                      className="img-fluid"
                    />
                  </div>
                  <div className="testimonial-author-info">
                    <h4>Sylvia H Green</h4>
                    <p>Dallas, TX</p>
                    <div className="testimonial-rate">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-single">
                <div className="testimonial-quote">
                  <span className="testimonial-quote-icon"><i className="fal fa-quote-left"></i></span>
                  <p>
                    Great experience from start to finish. The technicians were knowledgeable 
                    and explained everything clearly. Will definitely use again!
                  </p>
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-author-img">
                    <Image 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
                      alt="Customer"
                      width={200}
                      height={200}
                      loading="lazy"
                      className="img-fluid"
                    />
                  </div>
                  <div className="testimonial-author-info">
                    <h4>Gordon D Novak</h4>
                    <p>Sunnyvale, TX</p>
                    <div className="testimonial-rate">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-single">
                <div className="testimonial-quote">
                  <span className="testimonial-quote-icon"><i className="fal fa-quote-left"></i></span>
                  <p>
                    Professional service at a fair price. They arrived on time and 
                    completed the job efficiently. Very satisfied with the results.
                  </p>
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-author-img">
                    <Image 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face" 
                      alt="Customer"
                      width={200}
                      height={200}
                      loading="lazy"
                      className="img-fluid"
                    />
                  </div>
                  <div className="testimonial-author-info">
                    <h4>Reid E Butt</h4>
                    <p>Dallas, TX</p>
                    <div className="testimonial-rate">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-single">
                <div className="testimonial-quote">
                  <span className="testimonial-quote-icon"><i className="fal fa-quote-left"></i></span>
                  <p>
                    Outstanding workmanship and customer service. The team went above 
                    and beyond to ensure everything was done correctly. Highly recommended!
                  </p>
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-author-img">
                    <Image 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" 
                      alt="Customer"
                      width={200}
                      height={200}
                      loading="lazy"
                      className="img-fluid"
                    />
                  </div>
                  <div className="testimonial-author-info">
                    <h4>Parker Jimenez</h4>
                    <p>Dallas, TX</p>
                    <div className="testimonial-rate">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            <div className="partner-wrapper">
              <div className="row justify-content-center align-items-center">
                <div className="col-md-2">
                  <div className="partner-item">
                    <Image src="/assets/img/partner/1.png" alt="Partner" width={150} height={80} loading="lazy" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="partner-item">
                    <Image src="/assets/img/partner/2.png" alt="Partner" width={150} height={80} loading="lazy" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="partner-item">
                    <Image src="/assets/img/partner/3.png" alt="Partner" width={150} height={80} loading="lazy" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="partner-item">
                    <Image src="/assets/img/partner/4.png" alt="Partner" width={150} height={80} loading="lazy" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="partner-item">
                    <Image src="/assets/img/partner/5.png" alt="Partner" width={150} height={80} loading="lazy" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="partner-item">
                    <Image src="/assets/img/partner/6.png" alt="Partner" width={150} height={80} loading="lazy" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="partner-item">
                    <Image src="/assets/img/partner/2.png" alt="Partner" width={150} height={80} loading="lazy" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="partner-item">
                    <Image src="/assets/img/partner/4.png" alt="Partner" width={150} height={80} loading="lazy" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="partner-item">
                    <Image src="/assets/img/partner/5.png" alt="Partner" width={150} height={80} loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* partner area end */}
      </main>

      <Footer />
    </>
  )
}
