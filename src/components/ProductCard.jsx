import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const navigate = useNavigate()
  const { add } = useCart()

  const handleAdd = (e) => {
    e.stopPropagation()
    add(product)
  }

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="product-img-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && <span className={`product-badge badge-${product.badge.toLowerCase()}`}>{product.badge}</span>}
        <div className="product-overlay">
          <button className="quick-add-btn" onClick={handleAdd}>Add to Bag</button>
        </div>
      </div>
      <div className="product-info">
        <div className="product-color-dot" style={{ background: product.colorHex }} />
        <h3 className="product-name">{product.name}</h3>
        <div className="product-meta">
          <div className="product-price">
            <span className="price-current">${product.price}</span>
            {product.originalPrice && <span className="price-original">${product.originalPrice}</span>}
          </div>
          <div className="product-rating">
            ★ {product.rating} <span>({product.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  )
}
