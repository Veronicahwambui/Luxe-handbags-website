import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { cart, total } = useCart()
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', country: '', zip: '',
    card: '', expiry: '', cvv: '',
  })

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) return (
    <div className="order-success">
      <div className="success-icon">✓</div>
      <h1>Order Confirmed!</h1>
      <p>Thank you for your purchase. You'll receive a confirmation email shortly.</p>
      <button className="btn-primary" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  )

  const shipping = total >= 150 ? 0 : 12
  const grandTotal = (total + shipping).toFixed(2)

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <section className="form-section">
            <h2>Contact Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input required placeholder="Jane" value={form.firstName} onChange={set('firstName')} />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input required placeholder="Doe" value={form.lastName} onChange={set('lastName')} />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input required type="email" placeholder="jane@example.com" value={form.email} onChange={set('email')} />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input placeholder="+1 234 567 8900" value={form.phone} onChange={set('phone')} />
            </div>
          </section>

          <section className="form-section">
            <h2>Shipping Address</h2>
            <div className="form-group">
              <label>Address</label>
              <input required placeholder="123 Fashion Ave" value={form.address} onChange={set('address')} />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input required placeholder="Nairobi" value={form.city} onChange={set('city')} />
              </div>
              <div className="form-group">
                <label>ZIP / Postal Code</label>
                <input required placeholder="00100" value={form.zip} onChange={set('zip')} />
              </div>
            </div>
            <div className="form-group">
              <label>Country</label>
              <input required placeholder="Kenya" value={form.country} onChange={set('country')} />
            </div>
          </section>

          <section className="form-section">
            <h2>Payment</h2>
            <div className="payment-note">🔒 Secure payment (demo only)</div>
            <div className="form-group">
              <label>Card Number</label>
              <input placeholder="4242 4242 4242 4242" value={form.card} onChange={set('card')} maxLength={19} />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Expiry Date</label>
                <input placeholder="MM/YY" value={form.expiry} onChange={set('expiry')} maxLength={5} />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input placeholder="123" value={form.cvv} onChange={set('cvv')} maxLength={3} />
              </div>
            </div>
          </section>

          <button type="submit" className="btn-primary full-width">Place Order · ${grandTotal}</button>
        </form>

        <div className="checkout-summary">
          <h2>Order Summary</h2>
          {cart.map(item => (
            <div key={item.id} className="checkout-item">
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p className="checkout-item-meta">{item.color} · Qty {item.qty}</p>
              </div>
              <span>${(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
          <div className="checkout-totals">
            <div className="summary-row"><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
            <div className="summary-row"><span>Shipping</span><span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></div>
            <div className="summary-total"><span>Total</span><span>${grandTotal}</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
