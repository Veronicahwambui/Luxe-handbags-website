import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cart, remove, updateQty, total, count } = useCart()
  const navigate = useNavigate()

  if (cart.length === 0) return (
    <div className="cart-empty">
      <div className="empty-bag-icon">👜</div>
      <h2>Your bag is empty</h2>
      <p>Looks like you haven't added anything yet.</p>
      <button className="btn-primary" onClick={() => navigate('/shop')}>Start Shopping</button>
    </div>
  )

  return (
    <div className="cart-page">
      <h1>Your Bag <span>({count} {count === 1 ? 'item' : 'items'})</span></h1>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-img"
                onClick={() => navigate(`/product/${item.id}`)}
              />
              <div className="cart-item-info">
                <h3 onClick={() => navigate(`/product/${item.id}`)}>{item.name}</h3>
                <p className="cart-item-color">{item.color}</p>
                <div className="cart-item-bottom">
                  <div className="qty-controls">
                    <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                  </div>
                  <span className="cart-item-price">${(item.price * item.qty).toFixed(2)}</span>
                </div>
              </div>
              <button className="cart-remove-btn" onClick={() => remove(item.id)}>✕</button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row"><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
          <div className="summary-row"><span>Shipping</span><span>{total >= 150 ? 'Free' : '$12.00'}</span></div>
          {total < 150 && (
            <p className="free-shipping-note">Add ${(150 - total).toFixed(2)} more for free shipping</p>
          )}
          <div className="summary-total">
            <span>Total</span>
            <span>${(total >= 150 ? total : total + 12).toFixed(2)}</span>
          </div>
          <button className="btn-primary full-width" onClick={() => navigate('/checkout')}>
            Proceed to Checkout
          </button>
          <button className="btn-outline full-width" onClick={() => navigate('/shop')}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}
