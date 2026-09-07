import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { count } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  const nav = (path) => { navigate(path); setMenuOpen(false) }
  const isActive = (path) => location.pathname === path ? 'active' : ''

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => nav('/')}>LUXE BAG</div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <span className={isActive('/')} onClick={() => nav('/')}>Home</span>
          <span className={isActive('/shop')} onClick={() => nav('/shop')}>Shop</span>
          <span className={isActive('/collections')} onClick={() => nav('/collections')}>Collections</span>
          <span className={isActive('/about')} onClick={() => nav('/about')}>About</span>
        </nav>

        <div className="nav-actions">
          <button className="nav-cart-btn" onClick={() => nav('/cart')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {count > 0 && <span className="cart-badge">{count}</span>}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span/><span/><span/>
          </button>
        </div>
      </div>
    </header>
  )
}
