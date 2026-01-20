import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock, 
  faPaperPlane, 
  faLongArrowUp 
} from '@fortawesome/free-solid-svg-icons'
import { 
  faFacebookF, 
  faInstagram, 
  faTwitter, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <>
      <footer className="footer-area">
        <div className="footer-widget">
          <div className="container">
            <div className="row footer-widget-wrapper pt-100 pb-70">
              <div className="col-md-6 col-lg-4">
                <div className="footer-widget-box about-us">
                  <Link href="/" className="footer-logo">
                    <Image 
                      src="/assets/img/swan logo.webp" 
                      alt="Swan Electric, Plumbing, Heating & Air" 
                      width={120}
                      height={60}
                      loading="lazy"
                      style={{maxWidth: '120px', height: 'auto'}}
                    />
                  </Link>
                  <p className="mb-20">
                    Swan Electric, Plumbing, Heating & Air provides professional plumbing, electrical, and HVAC services 
                    across the Dallas-Fort Worth area. We are the technicians that care.
                  </p>
                  <ul className="footer-social">
                    <li><a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="#" aria-label="Youtube"><FontAwesomeIcon icon={faYoutube} /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Our Services</h4>
                  <ul className="footer-list">
                    <li><Link href="/services/plumbing">- Plumbing</Link></li>
                    <li><Link href="/services/air-conditioning">- Air Conditioning</Link></li>
                    <li><Link href="/services/heating">- Heating</Link></li>
                    <li><Link href="/services/electrical">- Electrical</Link></li>
                    <li><Link href="/services/drain-sewer">- Drain & Sewer</Link></li>
                    <li><Link href="/services/water-heaters">- Water Heaters</Link></li>
                    <li><Link href="/services/plumbing">- Gas Lines</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Quick Links</h4>
                  <ul className="footer-list">
                    <li><Link href="/">- Home</Link></li>
                    <li><Link href="/about">- About Us</Link></li>
                    <li><Link href="/services">- Our Services</Link></li>
                    <li><Link href="/projects">- Projects</Link></li>
                    <li><Link href="/gallery">- Gallery</Link></li>
                    <li><Link href="/pricing">- Pricing</Link></li>
                    <li><Link href="/testimonials">- Testimonials</Link></li>
                    <li><Link href="/faq">- FAQ&apos;s</Link></li>
                    <li><Link href="/contact">- Contact</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Newsletter</h4>
                  <div className="footer-newsletter">
                    <p>Subscribe Our Newsletter To Get All Latest Update And News</p>
                    <div className="subscribe-form">
                      <form action="#">
                        <input type="email" className="form-control" placeholder="Your Email" />
                        <button className="theme-btn" type="submit">
                          <FontAwesomeIcon icon={faPaperPlane} className="me-2" /> Subscribe Now
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-contact-info">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="contact-info-item">
                  <span className="contact-info-icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                  <div>
                    <h5>Address</h5>
                    <p>309 U.S. 80 Frontage Rd, Sunnyvale, TX 75182</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="contact-info-item">
                  <span className="contact-info-icon"><FontAwesomeIcon icon={faPhone} /></span>
                  <div>
                    <h5>Call Us</h5>
                    <p style={{fontSize: '18px', fontWeight: '600'}}>
                      <a href="tel:4697277904">469-727-7904</a>
                    </p>
                    <small style={{color: '#3333FF'}}>24/7 EMERGENCY SERVICE AVAILABLE</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="contact-info-item">
                  <span className="contact-info-icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                  <div>
                    <h5>Licenses</h5>
                    <p style={{fontSize: '14px'}}>
                      M42142 | TACLA00148000E | TECL 35435
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="contact-info-item">
                  <span className="contact-info-icon"><FontAwesomeIcon icon={faClock} /></span>
                  <div>
                    <h5>Business Hours</h5>
                    <p>Open 24/7</p>
                    <small style={{color: '#3333FF'}}>Always a live answer</small>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <p className="copyright-text">
                  &copy; Copyright <span id="date"></span> <Link href="/">Swan Electric, Plumbing, Heating & Air</Link> All
                  Rights Reserved.
                </p>
              </div>
              <div className="col-lg-6 align-self-center">
                <ul className="footer-menu">
                  <li><Link href="/contact">Support</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}

      {/* scroll-top */}
      <a href="#" id="scroll-top"><FontAwesomeIcon icon={faLongArrowUp} /></a>
      {/* scroll-top end */}

      {/* Date script */}
      <Script id="set-date" strategy="afterInteractive">
        {`document.getElementById('date').textContent = new Date().getFullYear();`}
      </Script>
    </>
  )
}
