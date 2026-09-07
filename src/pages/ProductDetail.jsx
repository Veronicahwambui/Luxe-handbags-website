import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { add } = useCart()
  const product = products.find(p => p.id === Number(id))
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const [activeImg, setActiveImg] = useState(0)

  if (!product) return <div className="page-pad">Product not found.</div>

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAdd = () => {
    add(product, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="detail-page">
      <button className="back-link" onClick={() => navigate(-1)}>← Back</button>

      <div className="detail-grid">
        {/* Images */}
        <div className="detail-images">
          <div className="detail-main-img">
            <img src={product.images[activeImg]} alt={product.name} />
          </div>
          <div className="detail-thumbs">
            {product.images.map((img, i) => (
              <div
                key={i}
                className={`thumb ${activeImg === i ? 'active' : ''}`}
                onClick={() => setActiveImg(i)}
              >
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="detail-info">
          {product.badge && <span className={`product-badge badge-${product.badge.toLowerCase()}`}>{product.badge}</span>}
          <h1 className="detail-title">{product.name}</h1>
          <div className="detail-rating">★ {product.rating} · {product.reviews} reviews</div>

          <div className="detail-price-row">
            <span className="detail-price">${product.price}</span>
            {product.originalPrice && <span className="detail-original">${product.originalPrice}</span>}
            {product.originalPrice && (
              <span className="detail-save">Save ${product.originalPrice - product.price}</span>
            )}
          </div>

          <p className="detail-desc">{product.description}</p>

          <div className="detail-color">
            <span>Colour: <strong>{product.color}</strong></span>
            <div className="color-swatch" style={{ background: product.colorHex }} />
          </div>

          <div className="detail-qty">
            <span>Quantity</span>
            <div className="qty-controls">
              <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(q => q + 1)}>+</button>
            </div>
          </div>

          <div className="detail-actions">
            <button className={`btn-add-bag ${added ? 'added' : ''}`} onClick={handleAdd}>
              {added ? '✓ Added to Bag' : 'Add to Bag'}
            </button>
            <button className="btn-checkout" onClick={() => { add(product, qty); navigate('/cart') }}>
              Buy Now
            </button>
          </div>

          <ul className="detail-perks">
            <li>✓ Free shipping on orders over $150</li>
            <li>✓ 30-day easy returns</li>
            <li>✓ Genuine full-grain leather</li>
            <li>✓ 1-year craftsmanship guarantee</li>
          </ul>
        </div>
      </div>

      {related.length > 0 && (
        <div className="related-section">
          <h2 className="section-title">You May Also Like</h2>
          <div className="products-grid">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </div>
  )
}
