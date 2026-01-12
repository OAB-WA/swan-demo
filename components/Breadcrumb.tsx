import Link from 'next/link'
import Image from 'next/image'

interface BreadcrumbProps {
  title: string
  items: Array<{ label: string; href?: string }>
}

export default function Breadcrumb({ title, items }: BreadcrumbProps) {
  return (
    <div className="site-breadcrumb" style={{ position: 'relative', paddingTop: '120px', paddingBottom: '120px' }}>
      <Image
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=350&fit=crop"
        alt="Breadcrumb Background"
        fill
        priority
        style={{ objectFit: 'cover', zIndex: -1 }}
        sizes="100vw"
      />
      <div className="breadcrumb-overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 0
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="breadcrumb-title" style={{ marginBottom: '10px' }}>{title}</h2>
        <ul className="breadcrumb-menu">
          {items.map((item, index) => (
            <li key={index} className={index === items.length - 1 ? 'active' : ''}>
              {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
