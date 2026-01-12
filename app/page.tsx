import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QuoteForm from '@/components/QuoteForm'
import HeroSlider from '@/components/HeroSlider'

export default function Home() {
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
                  <h2 className="site-title">Best Services</h2>
                  <div className="heading-divider"></div>
                  <p>
                    We provide comprehensive plumbing services and also offer electrical and HVAC solutions 
                    for your home and business in Dallas, Texas.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="service-item">
                  <div className="service-img">
                    <Image 
                      src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop" 
                      alt="Kitchen Plumbing"
                      width={800}
                      height={600}
                      loading="lazy"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-icon">
                    <i className="fad fa-tools"></i>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      <Link href="/services">Kitchen Plumbing</Link>
                    </h3>
                    <p className="service-text">
                      Professional kitchen plumbing services including sink installation, 
                      garbage disposal, and faucet repair.
                    </p>
                    <div className="service-arrow d-flex gap-2">
                      <a href="tel:+12145550123" className="theme-btn theme-btn2" style={{fontSize: '14px', padding: '8px 20px'}}>
                        <i className="fas fa-phone me-1"></i>Call
                      </a>
                      <Link href="/contact" className="theme-btn" style={{fontSize: '14px', padding: '8px 20px'}}>
                        Get Quote<i className="far fa-arrow-right ms-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="service-item">
                  <div className="service-img">
                    <Image 
                      src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop" 
                      alt="Gas Line Services"
                      width={800}
                      height={600}
                      loading="lazy"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-icon">
                    <i className="fad fa-gas-pump"></i>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      <Link href="/services">Gas Line Services</Link>
                    </h3>
                    <p className="service-text">
                      Safe and reliable gas line installation, repair, and maintenance 
                      for your home or business.
                    </p>
                    <div className="service-arrow d-flex gap-2">
                      <a href="tel:+12145550123" className="theme-btn theme-btn2" style={{fontSize: '14px', padding: '8px 20px'}}>
                        <i className="fas fa-phone me-1"></i>Call
                      </a>
                      <Link href="/contact" className="theme-btn" style={{fontSize: '14px', padding: '8px 20px'}}>
                        Get Quote<i className="far fa-arrow-right ms-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="service-item">
                  <div className="service-img">
                    <Image 
                      src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop" 
                      alt="Water Line Services"
                      width={800}
                      height={600}
                      loading="lazy"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-icon">
                    <i className="fad fa-dewpoint"></i>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      <Link href="/services">Water Line Services</Link>
                    </h3>
                    <p className="service-text">
                      Complete water line installation, repair, and replacement services 
                      to keep your water flowing.
                    </p>
                    <div className="service-arrow d-flex gap-2">
                      <a href="tel:+12145550123" className="theme-btn theme-btn2" style={{fontSize: '14px', padding: '8px 20px'}}>
                        <i className="fas fa-phone me-1"></i>Call
                      </a>
                      <Link href="/contact" className="theme-btn" style={{fontSize: '14px', padding: '8px 20px'}}>
                        Get Quote<i className="far fa-arrow-right ms-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="service-item">
                  <div className="service-img">
                    <Image 
                      src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop" 
                      alt="Bathroom Plumbing"
                      width={800}
                      height={600}
                      loading="lazy"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-icon">
                    <i className="fad fa-bath"></i>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      <Link href="/services">Bathroom Plumbing</Link>
                    </h3>
                    <p className="service-text">
                      Expert bathroom plumbing services including toilet repair, 
                      shower installation, and drain cleaning.
                    </p>
                    <div className="service-arrow d-flex gap-2">
                      <a href="tel:+12145550123" className="theme-btn theme-btn2" style={{fontSize: '14px', padding: '8px 20px'}}>
                        <i className="fas fa-phone me-1"></i>Call
                      </a>
                      <Link href="/contact" className="theme-btn" style={{fontSize: '14px', padding: '8px 20px'}}>
                        Get Quote<i className="far fa-arrow-right ms-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="service-item">
                  <div className="service-img">
                    <Image 
                      src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop" 
                      alt="Pipe Line Install"
                      width={800}
                      height={600}
                      loading="lazy"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-icon">
                    <i className="fad fa-paint-roller"></i>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      <Link href="/services">Pipe Line Install</Link>
                    </h3>
                    <p className="service-text">
                      Professional pipe installation and replacement services 
                      using quality materials and expert craftsmanship.
                    </p>
                    <div className="service-arrow d-flex gap-2">
                      <a href="tel:+12145550123" className="theme-btn theme-btn2" style={{fontSize: '14px', padding: '8px 20px'}}>
                        <i className="fas fa-phone me-1"></i>Call
                      </a>
                      <Link href="/contact" className="theme-btn" style={{fontSize: '14px', padding: '8px 20px'}}>
                        Get Quote<i className="far fa-arrow-right ms-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="service-item">
                  <div className="service-img">
                    <Image 
                      src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop" 
                      alt="Basement Plumbing"
                      width={800}
                      height={600}
                      loading="lazy"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-icon">
                    <i className="fad fa-house-flood"></i>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      <Link href="/services">Basement Plumbing</Link>
                    </h3>
                    <p className="service-text">
                      Comprehensive basement plumbing solutions including 
                      sump pump installation and water damage prevention.
                    </p>
                    <div className="service-arrow d-flex gap-2">
                      <a href="tel:+12145550123" className="theme-btn theme-btn2" style={{fontSize: '14px', padding: '8px 20px'}}>
                        <i className="fas fa-phone me-1"></i>Call
                      </a>
                      <Link href="/contact" className="theme-btn" style={{fontSize: '14px', padding: '8px 20px'}}>
                        Get Quote<i className="far fa-arrow-right ms-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12 text-center">
                <p className="mb-0">
                  <strong>We also provide comprehensive Electrical and HVAC services.</strong> 
                  <a href="tel:+12145550123" className="ms-2">Call (214) 555-0123</a> to learn more about our full range of home services.
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
                    <span className="badge" style={{background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '10px 25px', borderRadius: '30px', fontSize: '16px'}}>
                      <i className="fas fa-star me-2" style={{color: '#FFD700'}}></i>
                      <strong>4.9/5 Stars</strong> from <strong>250+ Reviews</strong>
                    </span>
                  </div>
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
            <div className="row mt-4">
              <div className="col-12 text-center">
                <a href="/contact" className="theme-btn">
                  Read More Reviews<i className="far fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* testimonial-area end */}

        {/* video area */}
        <div className="video-area" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop)'}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="video-wrapper">
                  <a className="play-btn popup-youtube" href="https://www.youtube.com/watch?v=ckHzmP1evNU">
                    <i className="fas fa-play"></i>
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
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop" 
                      alt="Request A Quote"
                      width={800}
                      height={600}
                      loading="lazy"
                      className="img-fluid"
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
                    Find answers to common questions about our plumbing, electrical, and HVAC services in Dallas, Texas.</p>
                  <p>If you don&apos;t find the answer you&apos;re looking for, feel free to contact us directly.</p>
                  <div className="d-flex gap-3 mt-5">
                    <a href="tel:+12145550123" className="theme-btn theme-btn2">
                      <i className="fas fa-phone me-2"></i>Call (214) 555-0123
                    </a>
                    <Link href="/contact" className="theme-btn">Ask Your Question <i className="far fa-arrow-right ms-2"></i></Link>
                  </div>    
                </div>
              </div>
              <div className="col-lg-6">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <span><i className="far fa-question"></i></span> What services do you provide?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show"
                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        We provide comprehensive plumbing services including kitchen and bathroom plumbing, 
                        gas and water line services, pipe installation, and basement plumbing. We also offer 
                        electrical and HVAC services for your complete home service needs.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <span><i className="far fa-question"></i></span> Do you offer emergency services?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Yes, we offer 24/7 emergency services for plumbing, electrical, and HVAC emergencies. 
                        Contact us anytime for urgent repairs and we&apos;ll dispatch a technician to your location.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseThree" aria-expanded="false"
                          aria-controls="collapseThree">
                          <span><i className="far fa-question"></i></span> What areas do you serve?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse"
                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        We serve the greater Dallas, Texas area including Sunnyvale and surrounding communities. 
                        Contact us to confirm if we service your specific location.
                      </div>
                    </div>
                  </div>
                </div>
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
              <div className="case-slider owl-carousel owl-theme">
                <div className="case-item">
                  <div className="case-img">
                    <Image 
                      className="img-fluid" 
                      src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop" 
                      alt="Water Line Repair"
                      width={800}
                      height={600}
                      loading="lazy"
                    />
                    <a className="popup-img case-link" href="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop"> <i
                            className="far fa-plus"></i></a>
                  </div>
                  <div className="case-content">
                    <div className="case-content-info">
                      <h4><Link href="/projects">Water Line Repair</Link></h4>
                      <small>Plumbing</small>
                    </div>
                    <Link href="/projects" className="case-arrow"><i className="far fa-arrow-right"></i></Link>
                  </div>
                </div>
                <div className="case-item">
                  <div className="case-img">
                    <Image 
                      className="img-fluid" 
                      src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop" 
                      alt="Kitchen Plumbing"
                      width={800}
                      height={600}
                      loading="lazy"
                    />
                    <a className="popup-img case-link" href="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop"> <i
                            className="far fa-plus"></i></a>
                  </div>
                  <div className="case-content">
                    <div className="case-content-info">
                      <h4><Link href="/projects">Kitchen Plumbing</Link></h4>
                      <small>Plumbing</small>
                    </div>
                    <Link href="/projects" className="case-arrow"><i className="far fa-arrow-right"></i></Link>
                  </div>
                </div>
                <div className="case-item">
                  <div className="case-img">
                    <Image 
                      className="img-fluid" 
                      src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop" 
                      alt="Basement Plumbing"
                      width={800}
                      height={600}
                      loading="lazy"
                    />
                    <a className="popup-img case-link" href="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop"> <i
                            className="far fa-plus"></i></a>
                  </div>
                  <div className="case-content">
                    <div className="case-content-info">
                      <h4><Link href="/projects">Basement Plumbing</Link></h4>
                      <small>Plumbing</small>
                    </div>
                    <Link href="/projects" className="case-arrow"><i className="far fa-arrow-right"></i></Link>
                  </div>
                </div>
                <div className="case-item">
                  <div className="case-img">
                    <Image 
                      className="img-fluid" 
                      src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop" 
                      alt="Pipe Line Repair"
                      width={800}
                      height={600}
                      loading="lazy"
                    />
                    <a className="popup-img case-link" href="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop"> <i
                            className="far fa-plus"></i></a>
                  </div>
                  <div className="case-content">
                    <div className="case-content-info">
                      <h4><Link href="/projects">Pipe Line Repair</Link></h4>
                      <small>Plumbing</small>
                    </div>
                    <Link href="/projects" className="case-arrow"><i className="far fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* case area end */}

        {/* team-area */}
        <div className="team-area pb-120">
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
                  <i className="fas fa-map-marker-alt mb-3" style={{fontSize: '30px', color: '#0000FF'}}></i>
                  <h5>Dallas</h5>
                  <p className="mb-0">Downtown & Surrounding</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="service-area-item text-center p-4" style={{background: '#fff', borderRadius: '10px', boxShadow: '0 3px 15px rgba(0,0,0,0.1)'}}>
                  <i className="fas fa-map-marker-alt mb-3" style={{fontSize: '30px', color: '#0000FF'}}></i>
                  <h5>Sunnyvale</h5>
                  <p className="mb-0">Full Service Area</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="service-area-item text-center p-4" style={{background: '#fff', borderRadius: '10px', boxShadow: '0 3px 15px rgba(0,0,0,0.1)'}}>
                  <i className="fas fa-map-marker-alt mb-3" style={{fontSize: '30px', color: '#0000FF'}}></i>
                  <h5>Mesquite</h5>
                  <p className="mb-0">Complete Coverage</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="service-area-item text-center p-4" style={{background: '#fff', borderRadius: '10px', boxShadow: '0 3px 15px rgba(0,0,0,0.1)'}}>
                  <i className="fas fa-map-marker-alt mb-3" style={{fontSize: '30px', color: '#0000FF'}}></i>
                  <h5>Garland</h5>
                  <p className="mb-0">24/7 Available</p>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12 text-center">
                <p className="mb-3">
                  <strong>Not sure if we service your area?</strong>
                </p>
                <a href="tel:+12145550123" className="theme-btn">
                  <i className="fas fa-phone me-2"></i>Call (214) 555-0123 to Confirm
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* service areas end */}

        {/* partner area */}
        <div className="partner-area pt-70 pb-70">
          <div className="container">
            <div className="partner-wrapper partner-slider owl-carousel owl-theme">
              <Image src="/assets/img/partner/1.png" alt="Partner" width={150} height={80} loading="lazy" />
              <Image src="/assets/img/partner/2.png" alt="Partner" width={150} height={80} loading="lazy" />
              <Image src="/assets/img/partner/3.png" alt="Partner" width={150} height={80} loading="lazy" />
              <Image src="/assets/img/partner/4.png" alt="Partner" width={150} height={80} loading="lazy" />
              <Image src="/assets/img/partner/5.png" alt="Partner" width={150} height={80} loading="lazy" />
              <Image src="/assets/img/partner/6.png" alt="Partner" width={150} height={80} loading="lazy" />
              <Image src="/assets/img/partner/4.png" alt="Partner" width={150} height={80} loading="lazy" />
            </div>
          </div>
        </div>
        {/* partner area end */}
      </main>

      <Footer />
    </>
  )
}
