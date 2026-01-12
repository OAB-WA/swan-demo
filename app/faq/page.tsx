import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const metadata = {
  title: 'FAQ - Swan Electric, Plumbing, Heating & Air',
  description: 'Frequently asked questions about our plumbing, electrical, and HVAC services in Dallas, Texas.',
}

export default function FAQPage() {
  const faqItems = [
    {
      id: 'One',
      question: 'What services do you provide?',
      answer: 'We provide comprehensive plumbing services including kitchen and bathroom plumbing, gas and water line services, pipe installation, and basement plumbing. We also offer electrical and HVAC services for your complete home service needs.'
    },
    {
      id: 'Two',
      question: 'Do you offer emergency services?',
      answer: 'Yes, we offer 24/7 emergency services for plumbing, electrical, and HVAC emergencies. Contact us anytime for urgent repairs and we\'ll dispatch a technician to your location.'
    },
    {
      id: 'Three',
      question: 'What areas do you serve?',
      answer: 'We serve the greater Dallas, Texas area including Sunnyvale and surrounding communities. Contact us to confirm if we service your specific location.'
    },
    {
      id: 'Four',
      question: 'Are your technicians licensed and insured?',
      answer: 'Yes, all our technicians are licensed, insured, and highly trained professionals. We maintain the highest standards of quality and safety in all our work.'
    },
    {
      id: 'Five',
      question: 'Do you provide free estimates?',
      answer: 'Yes, we provide free estimates for all our services. Contact us to schedule a consultation and we\'ll provide you with a detailed estimate for your project.'
    }
  ]

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
                <FAQAccordion items={faqItems} />
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
