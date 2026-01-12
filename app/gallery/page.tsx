import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import GalleryGrid from '@/components/GalleryGrid'

export const metadata = {
  title: 'Gallery - Swan Electric, Plumbing, Heating & Air',
  description: 'View our gallery of completed projects showcasing our plumbing, electrical, and HVAC work in Dallas, Texas.',
}

export default function GalleryPage() {
  const galleryImages = [
    'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
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
