import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceTitanBooking from '@/components/ServiceTitanBooking'

export const metadata = {
  title: 'Book Service - Swan Electric, Plumbing, Heating & Air',
  description: 'Schedule your service appointment online with our expert technicians. Book plumbing, electrical, and HVAC services in Dallas, Texas.',
}

export default function BookingPage() {
  return (
    <>
      <Header />
      
      <main className="main">
        <Breadcrumb 
          title="Book Service"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Book Service' }
          ]}
        />

        {/* booking area */}
        <div className="booking-area py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <ServiceTitanBooking />
              </div>
            </div>
          </div>
        </div>
        {/* booking area end */}
      </main>

      <Footer />
    </>
  )
}
