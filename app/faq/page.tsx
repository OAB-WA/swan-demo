import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const metadata = {
  title: 'FAQ - Swan Electric, Plumbing, Heating & Air',
    description: 'Frequently asked questions about our plumbing, electrical, and HVAC services in the Dallas-Fort Worth area.',
}

export default function FAQPage() {
  const faqItems = [
    {
      id: 'One',
      question: 'What services does Swan provide?',
      answer: 'Swan Electric, Plumbing, Heating & Air provides comprehensive home services including plumbing (leak detection, repiping, slab leaks), air conditioning (repair, installation, duct cleaning), heating (furnace repair, maintenance), and electrical (panel replacement, emergency repairs, EV chargers).'
    },
    {
      id: 'Two',
      question: 'Do you offer emergency services?',
      answer: 'Yes! We offer 24/7 emergency service for plumbing, AC, and electrical issues. We always have a live answer, day or night, to ensure your home stays safe and comfortable.'
    },
    {
      id: 'Three',
      question: 'What areas do you serve?',
      answer: 'We proudly serve Mesquite, Sunnyvale, Forney, Balch Springs, Dallas, Fort Worth, and surrounding areas. If you are in the DFW region, Swan is here to help.'
    },
    {
      id: 'Four',
      question: 'What is the SAM Plan?',
      answer: 'The SAM (Swan Annual Maintenance) Plan is our exclusive membership for $9.95/month. It includes 4 annual visits, no service fees, priority scheduling, 15% off products and services, and 50% off emergency service fees.'
    },
    {
      id: 'Five',
      question: 'Do you offer second opinions?',
      answer: 'Absolutely. We offer free, no-obligation second opinions. If you\'ve already had another contractor out, we\'ll provide a complimentary evaluation to ensure you\'re not spending money on unnecessary repairs.'
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
                    Find answers to common questions about our plumbing, electrical, and HVAC services in the DFW area.
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
