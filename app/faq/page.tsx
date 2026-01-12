import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faQuestion } from '@fortawesome/free-solid-svg-icons'

export const metadata = {
  title: 'FAQ - Swan Electric, Plumbing, Heating & Air',
  description: 'Frequently asked questions about our plumbing, electrical, and HVAC services in Dallas, Texas.',
}

export default function FAQPage() {
  return (
    <>
      <Header />
      
      <main className="main">
        <Breadcrumb 
          title="Faq"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Faq' }
          ]}
        />

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
                  <p className="about-text">
                    Have questions about our services? We&apos;re here to help. 
                    Find answers to common questions about our plumbing, electrical, and HVAC services in Dallas, Texas.
                  </p>
                  <p>
                    If you don&apos;t find the answer you&apos;re looking for, feel free to contact us directly.
                  </p>
                  <Link href="/contact" className="theme-btn mt-5">
                    Ask Your Question <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  </Link>    
                </div>
              </div>
              <div className="col-lg-6">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <span><FontAwesomeIcon icon={faQuestion} /></span> What services do you provide?
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
                          <span><FontAwesomeIcon icon={faQuestion} /></span> Do you offer emergency services?
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
                          <span><FontAwesomeIcon icon={faQuestion} /></span> What areas do you serve?
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
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseFour" aria-expanded="false"
                          aria-controls="collapseFour">
                          <span><FontAwesomeIcon icon={faQuestion} /></span> Are your technicians licensed and insured?
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse"
                        aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Yes, all our technicians are licensed, insured, and highly trained professionals. 
                        We maintain the highest standards of quality and safety in all our work.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseFive" aria-expanded="false"
                          aria-controls="collapseFive">
                          <span><FontAwesomeIcon icon={faQuestion} /></span> Do you provide free estimates?
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse"
                        aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Yes, we provide free estimates for all our services. Contact us to schedule a consultation 
                        and we&apos;ll provide you with a detailed estimate for your project.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* faq area end */}
      </main>

      <Footer />
    </>
  )
}
