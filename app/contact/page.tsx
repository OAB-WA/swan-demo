import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import ContactForm from '@/components/ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'

export const metadata = {
  title: 'Contact Us - Swan Electric, Plumbing, Heating & Air',
  description: 'Contact Swan Electric, Plumbing, Heating & Air in Dallas, Texas. Get in touch for all your plumbing, electrical, and HVAC service needs.',
}

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="main">
        <Breadcrumb
          title="Contact Us"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Contact Us' }
          ]}
        />

        {/* contact area */}
        <div className="contact-area py-120">
          <div className="container">
            <div className="contact-content">
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="contact-info">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <h5>Office Address</h5>
                    <p>309 US Highway 80 E<br />Sunnyvale, TX 75150</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="contact-info">
                    <FontAwesomeIcon icon={faPhone} />
                    <h5>Call Us</h5>
                    <p><a href="tel:+12145550123">(214) 555-0123</a></p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="contact-info">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h5>Email Us</h5>
                    <p><a href="mailto:info@swanplumbingdemo.com">info@swanplumbingdemo.com</a></p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="contact-info">
                    <FontAwesomeIcon icon={faClock} />
                    <h5>Office Open</h5>
                    <p>Sun - Fri (08AM - 10PM)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-wrapper">
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.123456789!2d-96.7890123456789!3d32.7890123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQ3JzIwLjQiTiA5NsKwNDcnMjAuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                      style={{ border: 0, width: '100%', height: '100%', minHeight: '400px' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Swan Electric, Plumbing, Heating & Air Location"
                    ></iframe>
                  </div>
                </div>
                <div className="col-md-6 align-self-center">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end contact area */}
      </main>

      <Footer />
    </>
  )
}
