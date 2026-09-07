import { useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

const collections = [
  {
    id: 'everyday',
    name: 'The Everyday Edit',
    subtitle: 'Built for your daily rhythm',
    description: 'Spacious, structured, and effortlessly stylish. These are the bags that carry you through everything — office runs, coffee dates, school pickups, and everything in between.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1000&q=80',
    filter: (p) => ['tote', 'satchel'].includes(p.category),
    accent: '#c9a84c',
  },
  {
    id: 'evening',
    name: 'Evening Essentials',
    subtitle: 'For nights that deserve to be remembered',
    description: 'Compact, elegant, and made to turn heads. Our evening collection features sleek clutches and mini bags designed to carry just what you need — and nothing more.',
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=1000&q=80',
    filter: (p) => ['clutch', 'mini'].includes(p.category),
    accent: '#d4a68a',
  },
  {
    id: 'crossbody',
    name: 'On-the-Go',
    subtitle: 'Hands-free, never style-free',
    description: 'Crossbody bags and bucket styles that keep up with your pace. Adjustable straps, smart interiors, and silhouettes that look as good on a weekend market run as they do at brunch.',
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=1000&q=80',
    filter: (p) => ['crossbody', 'bucket'].includes(p.category),
    accent: '#a8c4d4',
  },
]

export default function Collections() {
  const navigate = useNavigate()

  return (
    <div className="collections-page">
      {/* Header */}
      <section className="collections-hero">
        <p className="hero-label">Our Collections</p>
        <h1>Curated for <em>Every Occasion</em></h1>
        <p className="collections-sub">Three distinct edits, one commitment to quality.</p>
      </section>

      {/* Collection Sections */}
      {collections.map((col, i) => {
        const items = products.filter(col.filter)
        return (
          <section key={col.id} className={`collection-section ${i % 2 === 1 ? 'alt' : ''}`}>
            <div className="collection-intro">
              <div className="collection-intro-img">
                <img src={col.image} alt={col.name} />
              </div>
              <div className="collection-intro-text">
                <p className="collection-subtitle">{col.subtitle}</p>
                <h2>{col.name}</h2>
                <p className="collection-desc">{col.description}</p>
                <button
                  className="btn-primary"
                  onClick={() => navigate(`/shop?cat=${items[0]?.category || 'all'}`)}
                >
                  Shop This Collection
                </button>
              </div>
            </div>
            <div className="collection-products">
              <div className="products-grid">
                {items.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
