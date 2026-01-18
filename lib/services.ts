import { 
  IconDefinition,
  faTools, 
  faGasPump, 
  faDroplet, 
  faBath, 
  faPaintRoller, 
  faHouseFloodWater 
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
    title: 'Kitchen Plumbing',
    slug: 'kitchen-plumbing',
    description: 'Professional kitchen plumbing services including sink installation, garbage disposal, and faucet repair.',
    shortDescription: 'Professional kitchen plumbing services including sink installation, garbage disposal, and faucet repair.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
    singleImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop',
    icon: faTools,
    content: {
      intro: 'Kitchen Plumbing',
      paragraph1: 'Your kitchen is the heart of your home, and reliable plumbing is essential for its smooth operation. At Swan Electric, Plumbing, Heating & Air, we specialize in comprehensive kitchen plumbing services that keep your culinary space functioning perfectly. From modern sink installations to garbage disposal repairs and faucet replacements, our experienced technicians handle every aspect of kitchen plumbing with precision and care.',
      paragraph2: 'We understand that kitchen plumbing issues can disrupt your daily routine and cause significant inconvenience. That\'s why we offer prompt, professional service for all your kitchen plumbing needs. Whether you\'re dealing with a leaky faucet, a clogged drain, or planning a complete kitchen renovation, our team has the expertise and tools to get the job done right the first time. We work with quality materials and follow industry best practices to ensure lasting results.',
      paragraph3: 'Our kitchen plumbing services extend beyond simple repairs. We provide expert installation of new fixtures, garbage disposals, and water filtration systems. We also offer preventive maintenance services to help you avoid costly repairs down the line. With our commitment to quality workmanship and customer satisfaction, you can trust us to keep your kitchen plumbing in excellent condition.',
      image1: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
      image2: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
      processTitle: 'Our Work Process',
      processDescription: 'We follow a systematic approach to ensure every kitchen plumbing project is completed efficiently and to the highest standards. Our process begins with a thorough assessment of your plumbing system to identify any issues or potential problems. We then provide you with a detailed estimate and explain all available options before beginning any work.',
      processSteps: [
        'Initial consultation and comprehensive inspection of your kitchen plumbing system.',
        'Detailed explanation of the issue and recommended solutions with transparent pricing.',
        'Professional installation or repair using high-quality materials and industry-standard techniques.',
        'Thorough testing to ensure everything is working correctly and meets safety standards.',
        'Clean-up of work area and final walkthrough to ensure your complete satisfaction.'
      ],
      whyChooseTitle: 'Why Choose Our Services ?',
      whyChooseDescription: 'When you choose Swan Electric, Plumbing, Heating & Air for your kitchen plumbing needs, you\'re choosing a team of licensed, insured professionals who are committed to excellence. We combine years of experience with the latest tools and techniques to deliver superior results. Our transparent pricing, prompt service, and dedication to customer satisfaction have made us a trusted name in the Dallas area. We stand behind our work with comprehensive warranties and are always available to address any concerns you may have.'
    }
  },
  {
    id: 2,
    title: 'Gas Line Services',
    slug: 'gas-line-services',
    description: 'Safe and reliable gas line installation, repair, and maintenance for your home or business.',
    shortDescription: 'Safe and reliable gas line installation, repair, and maintenance for your home or business.',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop',
    singleImage: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&h=600&fit=crop',
    icon: faGasPump,
    content: {
      intro: 'Gas Line Services',
      paragraph1: 'Gas line installation and repair requires specialized knowledge and strict adherence to safety protocols. At Swan Electric, Plumbing, Heating & Air, we provide safe and reliable gas line services for both residential and commercial properties in the Dallas area. Our certified technicians are trained to handle all aspects of gas line work, from new installations to emergency repairs, ensuring your property remains safe and compliant with all local codes and regulations.',
      paragraph2: 'Whether you\'re installing a new gas appliance, replacing an old gas line, or dealing with a suspected leak, our team has the expertise to handle the job safely and efficiently. We use only the highest quality materials and follow all safety protocols to protect your home and family. Gas line work is not something to take lightly, and we treat every project with the seriousness and attention to detail it deserves.',
      paragraph3: 'Our gas line services include installation for stoves, water heaters, dryers, fireplaces, and outdoor grills. We also provide leak detection, line repairs, and complete system replacements. All our work is thoroughly tested and inspected to ensure there are no leaks and that everything is operating safely. We maintain full insurance coverage and all necessary licenses to perform gas line work in Texas.',
      image1: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop',
      image2: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      processTitle: 'Our Work Process',
      processDescription: 'Safety is our top priority when working with gas lines. Our process begins with a comprehensive safety inspection and leak detection test. We then carefully plan the installation or repair, ensuring all work meets or exceeds local building codes and safety standards. Every connection is tested multiple times before we consider the job complete.',
      processSteps: [
        'Complete safety inspection and leak detection testing of existing gas lines.',
        'Detailed planning and code compliance review for all gas line work.',
        'Professional installation or repair using certified materials and approved methods.',
        'Comprehensive pressure testing and leak detection verification.',
        'Final inspection and safety certification with detailed documentation provided.'
      ],
      whyChooseTitle: 'Why Choose Our Services ?',
      whyChooseDescription: 'Gas line work requires specialized expertise and certification. Our team is fully licensed, insured, and certified to work with gas lines in Texas. We prioritize safety above all else and follow strict protocols to ensure every job is completed safely and correctly. Our technicians stay current with the latest safety standards and building codes, and we use only certified materials and approved installation methods. When it comes to gas line work, you can\'t afford to cut corners, and neither do we.'
    }
  },
  {
    id: 3,
    title: 'Water Line Services',
    slug: 'water-line-services',
    description: 'Complete water line installation, repair, and replacement services to keep your water flowing.',
    shortDescription: 'Complete water line installation, repair, and replacement services to keep your water flowing.',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop',
    singleImage: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&h=600&fit=crop',
    icon: faDroplet,
    content: {
      intro: 'Water Line Services',
      paragraph1: 'A reliable water supply is essential for your home or business, and water line issues can cause significant disruption and damage. Swan Electric, Plumbing, Heating & Air provides comprehensive water line services including installation, repair, and replacement for both main water lines and service lines. Our experienced team uses advanced leak detection technology and trenchless repair methods to minimize disruption to your property while ensuring your water flows reliably.',
      paragraph2: 'Whether you\'re dealing with low water pressure, a suspected leak, or need a complete water line replacement, we have the expertise and equipment to diagnose and resolve the issue efficiently. We work with both residential and commercial properties, handling everything from simple repairs to complex installations. Our team is familiar with the unique challenges of the Dallas area, including soil conditions and local building codes.',
      paragraph3: 'Water line problems often require immediate attention to prevent water damage and restore service. That\'s why we offer emergency water line services and can typically respond quickly to urgent situations. We use quality materials designed to last, and our work is backed by comprehensive warranties. Whether you need a quick repair or a complete system replacement, we\'ll provide you with transparent pricing and professional service from start to finish.',
      image1: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop',
      image2: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      processTitle: 'Our Work Process',
      processDescription: 'We begin every water line project with a thorough inspection using advanced leak detection equipment to identify the exact location and nature of any problems. This allows us to provide accurate diagnoses and recommend the most effective and cost-efficient solutions. We then explain all options clearly and provide detailed estimates before beginning any work.',
      processSteps: [
        'Comprehensive inspection and leak detection using advanced diagnostic equipment.',
        'Clear explanation of findings and recommended solutions with detailed cost estimates.',
        'Professional installation or repair using durable, code-compliant materials.',
        'Pressure testing and system verification to ensure proper operation.',
        'Complete cleanup and restoration of work areas with final system check.'
      ],
      whyChooseTitle: 'Why Choose Our Services ?',
      whyChooseDescription: 'Water line work requires specialized knowledge and equipment, and our team has both. We use state-of-the-art leak detection technology to minimize excavation and disruption, and we\'re experienced with both traditional and trenchless repair methods. Our commitment to quality means we use only the best materials and follow all local codes and regulations. We understand that water line issues can be stressful, and we work hard to make the process as smooth and worry-free as possible for our customers.'
    }
  },
  {
    id: 4,
    title: 'Bathroom Plumbing',
    slug: 'bathroom-plumbing',
    description: 'Expert bathroom plumbing services including toilet repair, shower installation, and drain cleaning.',
    shortDescription: 'Expert bathroom plumbing services including toilet repair, shower installation, and drain cleaning.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
    singleImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&h=600&fit=crop',
    icon: faBath,
    content: {
      intro: 'Bathroom Plumbing',
      paragraph1: 'Your bathroom is one of the most frequently used rooms in your home, and when plumbing issues arise, they can cause major inconvenience. Swan Electric, Plumbing, Heating & Air provides expert bathroom plumbing services to keep this essential space functioning smoothly. From toilet repairs and installations to shower and bathtub plumbing, drain cleaning, and fixture replacements, we handle all your bathroom plumbing needs with professionalism and care.',
      paragraph2: 'Bathroom plumbing problems can range from minor annoyances like a dripping faucet to major issues like sewer backups or water damage. Our experienced technicians are equipped to handle everything, from simple repairs to complete bathroom plumbing renovations. We understand that bathroom issues often need quick resolution, and we work efficiently to restore full functionality to your bathroom as soon as possible.',
      paragraph3: 'Whether you\'re updating your bathroom fixtures, dealing with a clogged drain, or experiencing more serious plumbing problems, our team provides reliable solutions that stand the test of time. We work with quality fixtures and materials, and our installations are completed to the highest standards. We also offer preventive maintenance services to help you avoid costly repairs and keep your bathroom plumbing in excellent condition.',
      image1: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
      image2: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
      processTitle: 'Our Work Process',
      processDescription: 'We approach every bathroom plumbing project with attention to detail and a commitment to quality. Our process starts with a thorough assessment of the issue, followed by a clear explanation of the problem and our recommended solution. We then proceed with professional installation or repair, ensuring all work meets or exceeds industry standards.',
      processSteps: [
        'Detailed inspection and diagnosis of your bathroom plumbing issue.',
        'Clear explanation of the problem and recommended solution with upfront pricing.',
        'Professional repair or installation using quality fixtures and materials.',
        'Comprehensive testing to ensure everything functions correctly.',
        'Complete cleanup and final inspection to ensure your satisfaction.'
      ],
      whyChooseTitle: 'Why Choose Our Services ?',
      whyChooseDescription: 'Bathroom plumbing requires a combination of technical expertise and attention to detail, and our team excels at both. We understand that bathroom issues can be disruptive, and we work quickly and efficiently to minimize inconvenience. Our technicians are experienced with all types of bathroom fixtures and plumbing systems, and we stay current with the latest products and installation techniques. We take pride in our work and stand behind it with comprehensive warranties and ongoing support.'
    }
  },
  {
    id: 5,
    title: 'Pipe Line Install',
    slug: 'pipe-line-install',
    description: 'Professional pipe installation and replacement services using quality materials and expert craftsmanship.',
    shortDescription: 'Professional pipe installation and replacement services using quality materials and expert craftsmanship.',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop',
    singleImage: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&h=600&fit=crop',
    icon: faPaintRoller,
    content: {
      intro: 'Pipe Line Install',
      paragraph1: 'Quality pipe installation is the foundation of a reliable plumbing system. At Swan Electric, Plumbing, Heating & Air, we specialize in professional pipe installation and replacement services for both residential and commercial properties. Whether you\'re building a new home, renovating, or replacing old or damaged pipes, our experienced team ensures your plumbing infrastructure is built to last using the best materials and installation techniques.',
      paragraph2: 'We work with various pipe materials including copper, PEX, PVC, and CPVC, selecting the best option for your specific needs and local building codes. Our installations are completed with precision and attention to detail, ensuring proper sizing, correct slope, and secure connections. We understand that pipe installation is a long-term investment, and we take the time to do it right the first time.',
      paragraph3: 'From main water lines to branch lines throughout your property, we handle pipe installation projects of all sizes. We also provide pipe replacement services for properties with old or failing pipes, using modern materials and techniques that offer better performance and longevity. Our team is experienced with both new construction and retrofit installations, and we work closely with contractors and homeowners to ensure seamless integration with existing systems.',
      image1: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop',
      image2: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      processTitle: 'Our Work Process',
      processDescription: 'Proper pipe installation requires careful planning and precise execution. We begin by assessing your needs and the existing plumbing system, then develop a detailed installation plan that meets all code requirements and ensures optimal performance. We use only quality materials from trusted manufacturers and follow industry best practices throughout the installation process.',
      processSteps: [
        'Comprehensive assessment of your plumbing needs and existing system evaluation.',
        'Detailed installation plan with material selection and code compliance review.',
        'Professional installation using proper techniques and quality materials.',
        'Pressure testing and system verification to ensure leak-free operation.',
        'Final inspection and documentation with warranty information provided.'
      ],
      whyChooseTitle: 'Why Choose Our Services ?',
      whyChooseDescription: 'Pipe installation is a significant investment, and you want it done right. Our team combines years of experience with ongoing training on the latest materials and installation techniques. We use only quality materials from reputable manufacturers and follow all local building codes and industry standards. Our work is backed by comprehensive warranties, and we stand behind every installation. When you choose us for your pipe installation needs, you\'re choosing quality, reliability, and peace of mind.'
    }
  },
  {
    id: 6,
    title: 'Basement Plumbing',
    slug: 'basement-plumbing',
    description: 'Comprehensive basement plumbing solutions including sump pump installation and water damage prevention.',
    shortDescription: 'Comprehensive basement plumbing solutions including sump pump installation and water damage prevention.',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop',
    singleImage: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&h=600&fit=crop',
    icon: faHouseFloodWater,
    content: {
      intro: 'Basement Plumbing',
      paragraph1: 'Basement plumbing presents unique challenges, from sump pump installation to drain systems and water damage prevention. Swan Electric, Plumbing, Heating & Air provides comprehensive basement plumbing solutions to protect your home from water damage and ensure proper drainage. Whether you\'re finishing your basement, dealing with water intrusion, or need sump pump services, our experienced team has the expertise to handle all your basement plumbing needs.',
      paragraph2: 'Basements are particularly vulnerable to water issues, and proper plumbing is essential for keeping this space dry and usable. We specialize in sump pump installation and maintenance, French drain systems, basement bathroom installations, and water damage prevention. Our team understands the specific requirements of basement plumbing and works to create solutions that protect your property and provide reliable performance for years to come.',
      paragraph3: 'From preventing water damage to enabling basement renovations, proper basement plumbing is crucial. We assess your basement\'s unique situation, including drainage patterns, foundation conditions, and local water table levels, to design and install systems that effectively manage water and prevent problems. Our installations are completed with quality materials and proper techniques to ensure long-term reliability and performance.',
      image1: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop',
      image2: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      processTitle: 'Our Work Process',
      processDescription: 'Basement plumbing requires careful assessment of your property\'s drainage needs and water management requirements. We begin with a thorough evaluation of your basement, foundation, and surrounding drainage patterns. Based on our findings, we develop a customized solution that addresses your specific needs and provides effective water management.',
      processSteps: [
        'Comprehensive evaluation of your basement, foundation, and drainage conditions.',
        'Customized solution design based on your specific needs and property characteristics.',
        'Professional installation of sump pumps, drains, or other basement plumbing systems.',
        'System testing and verification to ensure proper operation and water management.',
        'Maintenance recommendations and ongoing support to keep your system functioning optimally.'
      ],
      whyChooseTitle: 'Why Choose Our Services ?',
      whyChooseDescription: 'Basement plumbing requires specialized knowledge of water management, foundation systems, and drainage solutions. Our team has extensive experience with basement plumbing projects and understands the unique challenges they present. We use quality equipment and materials designed specifically for basement applications, and our installations are completed to the highest standards. We also provide ongoing maintenance services to ensure your basement plumbing system continues to protect your property effectively.'
    }
  }
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}

export function getAllServices(): Service[] {
  return services
}
