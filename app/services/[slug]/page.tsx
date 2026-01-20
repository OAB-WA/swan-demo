import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceSidebar from '@/components/ServiceSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { getServiceBySlug, getAllServices } from '@/lib/services'

export async function generateStaticParams() {
  const services = getAllServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)
  
  if (!service) {
    return {
      title: 'Service Not Found - Swan Electric, Plumbing, Heating & Air',
    }
  }

  return {
    title: `${service.title} - Swan Electric, Plumbing, Heating & Air`,
    description: service.description,
  }
}

export default function ServiceSinglePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)
  const allServices = getAllServices()

  if (!service) {
    notFound()
  }

  return (
    <>
      <Header />
      
      <main className="main">
        <Breadcrumb 
          title={service.title}
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: service.title }
          ]}
        />

        {/* service-single-area */}
        <div className="service-single-area py-120">
          <div className="container">
            <div className="service-single-wrapper">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-12">
                  <ServiceSidebar services={allServices} currentServiceId={service.id} />
                </div>
                <div className="col-xl-8 col-lg-8 col-md-12">
                  <div className="service-details">
                    <div className="service-details-img mb-30">
                      <Image 
                        src={service.singleImage} 
                        alt={service.title}
                        width={1200}
                        height={600}
                        className="img-fluid"
                        priority
                        sizes="(max-width: 576px) 100vw, (max-width: 992px) 100vw, 66vw"
                        style={{ borderRadius: '12px', width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="service-details">
                      <h3 className="mb-30">{service.content.intro}</h3>
                      <p className="mb-20">
                        {service.content.paragraph1}
                      </p>
                      <p className="mb-20">
                        {service.content.paragraph2}
                      </p>

                      <div className="row image-row">
                        <div className="col-md-6 mb-20">
                          <Image 
                            src={service.content.image1} 
                            alt={service.title}
                            width={800}
                            height={600}
                            className="img-fluid"
                            loading="lazy"
                            sizes="(max-width: 576px) 100vw, 50vw"
                            style={{ borderRadius: '12px', width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                        <div className="col-md-6 mb-20">
                          <Image 
                            src={service.content.image2} 
                            alt={service.title}
                            width={800}
                            height={600}
                            className="img-fluid"
                            loading="lazy"
                            sizes="(max-width: 576px) 100vw, 50vw"
                            style={{ borderRadius: '12px', width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                      </div>
                      <p className="mb-20">
                        {service.content.paragraph3}
                      </p>
                      <div className="my-4">
                        <div className="mb-3">
                          <h3 className="mb-3">{service.content.processTitle}</h3>
                          <p>{service.content.processDescription}</p>
                        </div>
                        <ul className="service-single-list">
                          {service.content.processSteps.map((step, index) => (
                            <li key={index}>
                              <FontAwesomeIcon icon={faCheck} /> 
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="my-4">
                        <h3 className="mb-3">{service.content.whyChooseTitle}</h3>
                        <p>{service.content.whyChooseDescription}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* service-single-area end */}
      </main>

      <Footer />
    </>
  )
}
