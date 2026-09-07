export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1400&q=80" alt="about" />
          <div className="about-hero-overlay" />
        </div>
        <div className="about-hero-content">
          <p className="hero-label">Our Story</p>
          <h1>Crafted with <em>Intention</em></h1>
        </div>
      </section>

      {/* Mission */}
      <section className="about-section">
        <div className="about-grid">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>LUXE BAG was founded on the belief that a great handbag is more than an accessory — it is a daily companion, a statement of identity, and an investment in quality that endures.</p>
            <p>Every piece in our collection is designed with the modern woman in mind: purposeful, refined, and built to last far beyond the season.</p>
          </div>
          <div className="about-img-wrap">
            <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&q=80" alt="craftsmanship" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <h2 className="section-title centered">What We Stand For</h2>
        <div className="values-grid">
          {[
            { icon: '🪡', title: 'Genuine Leather Only', desc: 'We source full-grain and top-grain leather from certified tanneries. No synthetic shortcuts.' },
            { icon: '✋', title: 'Handcrafted Details', desc: 'Every stitch, every edge, every piece of hardware is applied by skilled artisans with years of experience.' },
            { icon: '♻️', title: 'Responsible Sourcing', desc: 'We are committed to ethical manufacturing and reducing our environmental footprint at every step.' },
            { icon: '💛', title: 'Customer First', desc: '30-day returns, free shipping over $150, and a 1-year craftsmanship guarantee on every bag.' },
          ].map(v => (
            <div key={v.title} className="value-card">
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team / Aesthetic */}
      <section className="about-section alt-bg">
        <div className="about-grid reverse">
          <div className="about-img-wrap">
            <img src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=700&q=80" alt="collection" />
          </div>
          <div className="about-text">
            <h2>The Aesthetic</h2>
            <p>Our designs draw from European craftsmanship traditions — clean lines, understated hardware, and silhouettes that complement rather than compete with the woman who carries them.</p>
            <p>From the structured Monaco Tote to the relaxed Cannes Bucket, each bag is designed to move with you through every moment of the day.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        {[
          { num: '8+', label: 'Years of Craftsmanship' },
          { num: '500+', label: 'Styles Created' },
          { num: '12K+', label: 'Happy Customers' },
          { num: '100%', label: 'Genuine Leather' },
        ].map(s => (
          <div key={s.label} className="about-stat">
            <strong>{s.num}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>
    </div>
  )
}
