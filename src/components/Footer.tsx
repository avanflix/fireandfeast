'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const marqueeText = [
  'Fire in Our Passion', '·', 'Feast in Every Moment', '·',
  'Fire in Our Passion', '·', 'Feast in Every Moment', '·',
  'Fire in Our Passion', '·', 'Feast in Every Moment', '·',
  'Fire in Our Passion', '·', 'Feast in Every Moment', '·',
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subbed, setSubbed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubbed(true)
    setEmail('')
    setTimeout(() => setSubbed(false), 3000)
  }

  return (
    <footer style={{ background: '#0E0B07', overflow: 'hidden' }}>
      {/* Big italic marquee */}
      <div style={{ overflow: 'hidden', padding: '28px 0 40px', borderBottom: '1px solid rgba(237,232,223,0.06)' }}>
        <div className="footer-marquee-track">
          {marqueeText.map((t, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(22px, 2vw, 20px)',
                fontWeight: 500,
                fontStyle: 'italic',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(237,232,223,0.18)',
                padding: '0 32px',
                flexShrink: 0,
                letterSpacing: '-0.01em',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Instagram image strip */}
      <div className="flex overflow-hidden" style={{ height: '100px' }}>
        {[
          'https://framerusercontent.com/images/LEbWGrnOUnXWl3DRLqIVfCLYY.png',
          'https://framerusercontent.com/images/0o1O8xmvE5QMQOeiKqIFQvj8wiY.png',
        ].map((src, i) => (
          <div key={i} className="img-zoom flex-1" style={{ minWidth: '50%' }}>
            <img
              src={src}
              alt=""
              style={{
                width: '120%',
                height: '120%',
                objectFit: 'contain',
                background: '#000',
              }}
            />
          </div>
        ))}
      </div>

      {/* Main footer columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          padding: '56px 60px 40px',
          borderTop: '1px solid rgba(237,232,223,0.06)',
        }}
      >
        {/* Brand */}
        <div>
          <Image
            src="https://framerusercontent.com/images/H65hJuv9H7SoeIY8Y2I4lPYQeBM.png"
            alt="Fire & Feast"
            width={110}
            height={32}
            style={{ objectFit: 'contain', marginBottom: '16px', filter: 'brightness(1.15)' }}
          />
          <p style={{ fontSize: '13px', color: '#7A6A58', lineHeight: 1.7, maxWidth: '240px' }}>
            Elevated dining & café culture in the heart of Tirupati. Where every visit becomes a cherished memory.
          </p>
        </div>

        {/* Order Online */}
        <div>
          <h4
            style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#c7c7c7',
              marginBottom: '18px',
            }}
          >
            Order & Follow Us
          </h4>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
            }}
          >
            {/* Swiggy */}
            <a
              href="https://www.swiggy.com/city/tirupati/fire-and-feast-restaurant-tata-nagar-rest1064438"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
                alt="Swiggy"
                style={{
                  width: '32px',
                  height: '32px',
                  objectFit: 'contain',
                }}
              />
            </a>

            {/* Zomato */}
            <a
              href="https://www.zomato.com/tirupati/fire-and-feast-restaurant-tiruchanur/order"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
                alt="Zomato"
                style={{
                  width: '32px',
                  height: '32px',
                  objectFit: 'contain',
                }}
              />
            </a>

          </div>
        </div>

                {/* Follow Us */}
        <div>
          <h4
            style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#c7c7c7',
              marginBottom: '18px',
            }}
          >
            Follow Us
          </h4>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
            }}
          >
            {/* Instagram */}
            <a
              href="https://www.instagram.com/fireandfeast_tpt"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                style={{
                  width: '32px',
                  height: '32px',
                  objectFit: 'contain',
                }}
              />
            </a>
          </div>
        </div>
        {/* Newsletter */}
        <div>
          <h4 style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '##c7c7c7', marginBottom: '12px' }}>
            Join Our Fire
          </h4>
          <p style={{ fontSize: '13px', color: '#7A6A58', marginBottom: '16px', lineHeight: 1.6 }}>
            Get exclusive offers, early access to new brews, and behind-the-scenes stories!
          </p>
          <form onSubmit={handleSubscribe} className="flex">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flex: 1, padding: '10px 14px',
                borderRadius: '6px 0 0 6px',
                border: '1px solid rgba(237,232,223,0.1)',
                background: 'rgba(237,232,223,0.06)',
                color: '#EDE8DF', fontSize: '13px',
                outline: 'none', fontFamily: 'Inter, sans-serif',
              }}
            />
            <button
              type="submit"
              style={{
                background: subbed ? '#2a7a3a' : '##c7c7c7',
                color: '#fff', padding: '10px 18px',
                borderRadius: '0 6px 6px 0',
                border: 'none', cursor: 'pointer',
                fontSize: '13px', fontWeight: 600,
                transition: 'background 0.2s',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {subbed ? '✓ Done!' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex justify-between items-center flex-wrap gap-3"
        style={{ padding: '20px 60px', borderTop: '1px solid rgba(237,232,223,0.06)' }}
      >
        <p style={{ fontSize: '12px', color: '#7A6A58' }}>© 2025 Fire & Feast Restaurant · Leo Café · Tirupati</p>
        <p style={{ fontSize: '12px', color: '#7A6A58' }}>Tiruchanur Road, Andhra Pradesh – 517503</p>
      </div>
    </footer>
  )
}
