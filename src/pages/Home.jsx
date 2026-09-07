import { useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const navigate = useNavigate()
  const featured = products.filter(p => p.badge === 'Bestseller' || p.badge === 'New').slice(0, 4)

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=1400&q=80" alt="hero" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <p className="hero-label">New Collection 2025</p>
          <h1>Carry Your <em>Story</em></h1>
          <p className="hero-sub">Premium leather handbags crafted for women who move with purpose.</p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate('/shop')}>Shop Now</button>
            <button className="btn-outline" onClick={() => navigate('/shop')}>View All</button>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="stats-strip">
        <div className="stat"><strong>500+</strong><span>Styles</span></div>
        <div className="stat-divider" />
        <div className="stat"><strong>Free</strong><span>Shipping over $150</span></div>
        <div className="stat-divider" />
        <div className="stat"><strong>30-Day</strong><span>Easy Returns</span></div>
        <div className="stat-divider" />
        <div className="stat"><strong>Genuine</strong><span>Leather Only</span></div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <h2 className="section-title">Shop by Style</h2>
        <div className="categories-grid">
          {[
            { label: 'Tote Bags', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80', cat: 'tote' },
            { label: 'Crossbody', img: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&q=80', cat: 'crossbody' },
            { label: 'Clutches', img: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&q=80', cat: 'clutch' },
            { label: 'Mini Bags', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80', cat: 'mini' },
          ].map(c => (
            <div key={c.cat} className="category-card" onClick={() => navigate(`/shop?cat=${c.cat}`)}>
              <img src={c.img} alt={c.label} />
              <div className="category-label">{c.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="section-header">
          <h2 className="section-title">Featured Picks</h2>
          <button className="view-all-link" onClick={() => navigate('/shop')}>View all →</button>
        </div>
        <div className="products-grid">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Banner */}
      <section className="promo-banner">
        <div className="promo-content">
          <h2>Free Shipping on Orders Over <em>$150</em></h2>
          <p>Plus complimentary gift wrapping and a handwritten note.</p>
          <button className="btn-primary" onClick={() => navigate('/shop')}>Shop Now</button>
        </div>
      </section>
    </div>
  )
}
