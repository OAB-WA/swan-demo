import { 
  IconDefinition,
  faWrench, 
  faWind, 
  faFire, 
  faBolt, 
  faSink, 
  faHotTub 
} from '@fortawesome/free-solid-svg-icons'

export interface Service {
  id: number
  title: string
  slug: string
  description: string
  shortDescription: string
  image: string
  singleImage: string
  icon: IconDefinition
  content: {
    intro: string
    paragraph1: string
    paragraph2: string
    image1: string
    image2: string
    paragraph3: string
    processTitle: string
    processDescription: string
    processSteps: string[]
    whyChooseTitle: string
    whyChooseDescription: string
  }
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Plumbing Services',
    slug: 'plumbing',
    description: 'From emergency repairs to slab leak detection, our licensed plumbers handle it all with precision.',
    shortDescription: 'General plumbing, leak detection, repiping, and commercial plumbing services.',
    image: '/assets/img/swan_1.webp',
    singleImage: '/assets/img/swan_1.webp',
    icon: faWrench,
    content: {
      intro: 'Comprehensive Plumbing Solutions',
      paragraph1: 'At Swan Electric, Plumbing, Heating & Air, we provide top-rated plumbing services for homeowners and businesses across the Dallas-Fort Worth area. Whether you\'re dealing with a minor leak or a major plumbing emergency, our licensed team is ready to help with same-day service and transparent pricing.',
      paragraph2: 'Our expertise includes gas line repair and installation, whole-home repiping, water leak detection, and slab leak repair. We understand that plumbing issues can be stressful, which is why we offer 24/7 emergency services to ensure you\'re never left without help when you need it most.',
      paragraph3: 'From kitchen and bathroom plumbing to commercial-grade systems, we use the latest technology and techniques to ensure your plumbing functions perfectly. We don\'t take shortcuts, prioritizing honest and accurate solutions for every customer.',
      image1: '/assets/img/swan_1.webp',
      image2: '/assets/img/swan_2.webp',
      processTitle: 'Our Reliable Process',
      processDescription: 'We follow a strict protocol to ensure every plumbing job is done right the first time. No shortcuts, just quality workmanship.',
      processSteps: [
        'Initial consultation and free second opinions for major repairs.',
        'Transparent pricing explained upfront before any work begins.',
        'Professional repair or installation using high-quality, durable materials.',
        'Thorough testing of all systems to ensure safety and performance.',
        'Final walkthrough to ensure 100% satisfaction.'
      ],
      whyChooseTitle: 'Why Choose Swan Plumbing?',
      whyChooseDescription: 'We are the technicians that care. With licensed experts, 24/7 availability, and a commitment to 5-star satisfaction, we\'ve built a reputation as Mesquite\'s most trusted plumbers.'
    }
  },
  {
    id: 2,
    title: 'Air Conditioning',
    slug: 'air-conditioning',
    description: 'Expert AC repair, maintenance, and energy-efficient replacements to keep you cool.',
    shortDescription: 'AC repair, replacement, duct cleaning, and commercial HVAC services.',
    image: '/assets/img/swan_2.webp',
    singleImage: '/assets/img/swan_2.webp',
    icon: faWind,
    content: {
      intro: 'Reliable AC Service & Repair',
      paragraph1: 'Swan is proud to be the top-rated HVAC contractor in Mesquite, TX. We deliver fast, reliable AC repair and replacement services that keep your home comfortable even in the peak of Texas summer.',
      paragraph2: 'Whether your air conditioner has stopped cooling or it\'s time for a full system upgrade, our licensed team offers same-day service and energy-efficient replacements. We handle emergency repairs, tune-ups, and even air duct cleaning to improve your indoor air quality.',
      paragraph3: 'Customers trust Swan for quality workmanship and professional care. We also offer room air balancing and commercial HVAC services, including testing, adjusting, and balancing (TAB).',
      image1: '/assets/img/swan_2.webp',
      image2: '/assets/img/swan_3.webp',
      processTitle: 'How We Handle Your AC',
      processDescription: 'Our goal is to restore your comfort quickly with permanent solutions that lower your energy bills.',
      processSteps: [
        'Prompt arrival with fully stocked trucks ready for same-day repair.',
        'Comprehensive diagnostic to identify the root cause of cooling issues.',
        'Clear options provided with transparent pricing for repair or replacement.',
        'Expert implementation of HVAC solutions by licensed professionals.',
        'Post-service testing to ensure optimal efficiency and airflow.'
      ],
      whyChooseTitle: 'Mesquite\'s Top HVAC Team',
      whyChooseDescription: 'We offer 24/7 emergency service, same-day appointments, and a focus on customer education so you can make the best decision for your home.'
    }
  },
  {
    id: 3,
    title: 'Heating Services',
    slug: 'heating',
    description: 'Stay warm with our furnace repair, replacement, and annual maintenance services.',
    shortDescription: 'Furnace repair, heat pump services, and emergency heating solutions.',
    image: '/assets/img/swan_3.webp',
    singleImage: '/assets/img/swan_3.webp',
    icon: faFire,
    content: {
      intro: 'Keep Your Home Warm and Cozy',
      paragraph1: 'Don\'t let a broken furnace leave you in the cold. Swan Electric, Plumbing, Heating & Air provides emergency heating repair and full system installations across DFW.',
      paragraph2: 'Our technicians are experts in furnace maintenance, repair, and replacement. We also specialize in heat pump services, ensuring your heating system is efficient and reliable throughout the winter months.',
      paragraph3: 'We provide room air balancing to ensure every part of your home stays at the perfect temperature. Like all our services, our heating work comes with a 100% satisfaction guarantee.',
      image1: '/assets/img/swan_3.webp',
      image2: '/assets/img/swan_4.webp',
      processTitle: 'Heating Service Process',
      processDescription: 'We ensure your furnace or heat pump is operating at peak performance and safety.',
      processSteps: [
        'Safety inspection to check for gas leaks or electrical issues.',
        'Diagnostic testing of all heating components.',
        'Detailed explanation of necessary repairs or maintenance.',
        'Precision tuning or component replacement.',
        'Final safety and performance verification.'
      ],
      whyChooseTitle: 'Why Trust Swan for Heating?',
      whyChooseDescription: 'With decades of experience and a commitment to transparent pricing, we are the go-to team for heating emergencies and upgrades in Mesquite.'
    }
  },
  {
    id: 4,
    title: 'Electrical Services',
    slug: 'electrical',
    description: 'Safe and professional electrical repairs, panel replacements, and home rewiring.',
    shortDescription: 'Emergency electrician, panel upgrades, EV chargers, and lighting.',
    image: '/assets/img/swan_4.webp',
    singleImage: '/assets/img/swan_4.webp',
    icon: faBolt,
    content: {
      intro: 'Safe & Expert Electrical Care',
      paragraph1: 'Electrical issues are serious. At Swan, our licensed electricians handle everything from flickering lights to full-home rewiring with the highest safety standards.',
      paragraph2: 'We offer emergency electrical services, outlet and breaker repair, and electrical panel replacements. If you\'re looking to upgrade your home, we also install EV chargers, whole-home generators, and permanent holiday lighting.',
      paragraph3: 'Our team performs thorough electrical safety inspections to give you peace of mind that your home\'s wiring is up to code and safe for your family.',
      image1: '/assets/img/swan_4.webp',
      image2: '/assets/img/swan_5.webp',
      processTitle: 'Our Safety-First Process',
      processDescription: 'Electrical work requires extreme care. We follow all local codes to ensure your home is powered safely.',
      processSteps: [
        'Detailed safety assessment of your current electrical system.',
        'Identification of hazards or outdated components.',
        'Clear explanation of necessary repairs or upgrades.',
        'Professional implementation by licensed electricians.',
        'Final code compliance check and safety verification.'
      ],
      whyChooseTitle: 'Licensed Electrical Experts',
      whyChooseDescription: 'We provide honest, accurate solutions for every electrical need. No shortcuts, just safe and reliable power for your home.'
    }
  },
  {
    id: 5,
    title: 'Drain & Sewer',
    slug: 'drain-sewer',
    description: 'Expert drain cleaning, camera inspections, and full sewer line replacements.',
    shortDescription: 'Drain cleaning, hydrojetting, and sewer repair services.',
    image: '/assets/img/swan_5.webp',
    singleImage: '/assets/img/swan_5.webp',
    icon: faSink,
    content: {
      intro: 'Fast Relief for Clogged Drains',
      paragraph1: 'Don\'t let a clogged drain or sewer backup ruin your day. Swan offers expert drain cleaning and camera inspections to find and fix issues fast.',
      paragraph2: 'We use advanced hydrojetting technology to clear even the toughest blockages. If your sewer line is damaged, our team handles drain repairs and full sewer replacements with minimal disruption to your property.',
      paragraph3: 'Our technicians are highly skilled and use the latest tools to ensure your drains are clear and your sewer system is functioning properly.',
      image1: '/assets/img/swan_5.webp',
      image2: '/assets/img/swan_6.webp',
      processTitle: 'Drain & Sewer Workflow',
      processDescription: 'We diagnose the root of the problem before we start digging or cleaning.',
      processSteps: [
        'Video camera inspection to locate blockages or damage.',
        'Explanation of the findings and cleaning options.',
        'Professional hydrojetting or mechanical cleaning.',
        'Verification that the line is completely clear.',
        'Recommendations for preventing future clogs.'
      ],
      whyChooseTitle: 'Why Choose Swan for Drains?',
      whyChooseDescription: 'We have the specialized equipment and expertise to handle the toughest sewer issues, all backed by our satisfaction guarantee.'
    }
  },
  {
    id: 6,
    title: 'Water Heaters',
    slug: 'water-heaters',
    description: 'Tankless and traditional water heater repair, replacement, and maintenance.',
    shortDescription: 'Tankless water heaters, repair, and replacement services.',
    image: '/assets/img/swan_6.webp',
    singleImage: '/assets/img/swan_6.webp',
    icon: faHotTub,
    content: {
      intro: 'Reliable Hot Water Systems',
      paragraph1: 'Running out of hot water? At Swan, we specialize in both traditional tank-style and modern tankless water heater services.',
      paragraph2: 'Our team provides expert repair, replacement, and routine maintenance to extend the life of your unit. If it\'s time for an upgrade, we can help you choose an energy-efficient tankless system that provides endless hot water.',
      paragraph3: 'We ensure all installations meet safety codes and operate at maximum efficiency, saving you money on your energy bills.',
      image1: '/assets/img/swan_6.webp',
      image2: '/assets/img/swan_7.webp',
      processTitle: 'Water Heater Service Steps',
      processDescription: 'We handle everything from gas and water connections to final performance checks.',
      processSteps: [
        'Evaluation of your current unit and hot water needs.',
        'Detailed comparison of repair vs. replacement options.',
        'Safe removal and disposal of old equipment.',
        'Professional installation of your new water heater.',
        'Thorough testing for leaks and proper temperature control.'
      ],
      whyChooseTitle: 'Hot Water Experts',
      whyChooseDescription: 'Whether it\'s a quick repair or a new tankless installation, we provide the expert care your home deserves.'
    }
  }
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}

export function getAllServices(): Service[] {
  return services
}
