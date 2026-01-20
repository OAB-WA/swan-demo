import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import GalleryGrid from '@/components/GalleryGrid'

export const metadata = {
  title: 'Gallery - Swan Electric, Plumbing, Heating & Air',
    description: 'View our gallery of completed projects showcasing our high-quality HVAC, electrical, and plumbing work across the Dallas-Fort Worth area.',
}

export default function GalleryPage() {
  const galleryImages = [
    '/assets/img/swan_1.webp',
    '/assets/img/swan_2.webp',
    '/assets/img/swan_3.webp',
    '/assets/img/swan_4.webp',
    '/assets/img/swan_5.webp',
    '/assets/img/swan_6.webp',
  ]

  return (
    <>
      <Header />
      
      <main className="main">
        <Breadcrumb 
          title="Gallery"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Gallery' }
          ]}
        />

        {/* gallery area */}
        <div className="gallery-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Gallery</span>
                  <h2 className="site-title">Our Gallery</h2>
                  <div className="heading-divider"></div>
                  <p>
                    Browse through our gallery to see examples of our work and 
                    the quality service we provide.
                  </p>
                </div>
              </div>
            </div>
            <GalleryGrid images={galleryImages} />
          </div>
        </div>
        {/* gallery area end */}
      </main>

      <Footer />
    </>
  )
}
