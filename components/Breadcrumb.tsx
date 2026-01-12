import Link from 'next/link'

interface BreadcrumbProps {
  title: string
  items: Array<{ label: string; href?: string }>
}

export default function Breadcrumb({ title, items }: BreadcrumbProps) {
  return (
    <div className="site-breadcrumb" style={{background: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=400&fit=crop)'}}>
      <div className="container">
        <h2 className="breadcrumb-title">{title}</h2>
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
