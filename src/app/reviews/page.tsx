'use client'
import { useEffect, useState, useRef } from 'react'
import Footer from '@/components/Footer';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

function useRevealAll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}


const contactItems = [
  {
    icon: FiPhone,
    label: 'Phone',
    content: '+91 77999 22268',
    href: 'tel:7799922268',
  },
  {
    icon: FiMail,
    label: 'Email',
    content: 'fireandfeastrestaurant4444@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=fireandfeastrestaurant4444@gmail.com',
  },
  {
    icon: FiMapPin,
    label: 'Location · Tirupati',
    content:
      'No. 1-50/3, Revenue Colony, Near Thanapalli Cross, Tiruchanur Road, Tirupati, Andhra Pradesh – 517503',
    href: 'https://www.google.com/maps/place/Fire+and+Feast+Restaurant/@13.6111074,79.4348283,639m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a4d4b002ff7a2b9:0x567d347082a3918b!8m2!3d13.6111022!4d79.4374032!16s%2Fg%2F11wc4k3ld_?entry=ttu&g_ep=EgoyMDI2MDYwOS4wIKXMDSoASAFQAw%3D%3D',
  },
];

const reviews = [
  {
    name: 'Sirisha Shetty',
    role: 'Local Guide',
    stars: 4,
    text: 'Visited for dinner. Ambience was sooo good. Food was okay. Aesthetic cafe in Tirupati.',
  },
  {
    name: 'Dhanusha Padi',
    role: 'Regular Customer',
    stars: 5,
    text: 'The staff were friendly and took the time to ask about our preferences and the recommended dishes were delicious. Its a place with good food and excellent ambiance.',
  },
  {
    name: 'Sunny S',
    role: 'Regular Customer',
    stars: 5,
    text: 'The ambiance was warm and inviting, the staff were attentive and courteous, and the food was flavorful and well-prepared. A wonderful dining experience overall. ♥️ Great place to enjoy your meal. Special mention for pinacolada 😋',
  },
  {
    name: 'Priya R',
    role: 'Food Blogger',
    stars: 4,
    text: 'Loved the Leo Café section — the drinks are unique and beautifully presented. The Lavender Lemonade was a highlight. Will definitely come back!',
  },
  {
    name: 'Ravi Kumar',
    role: 'Regular Customer',
    stars: 5,
    text: 'Fire & Feast has quickly become our go-to spot in Tirupati. The biryanis are exceptional and the ambiance is perfect for family dinners.',
  },
  {
    name: 'Meena S',
    role: 'Local Guide',
    stars: 4,
    text: 'Beautiful interiors, great service and the Paneer Majestic is to die for. Highly recommend to anyone visiting Tirupati.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div style={{ color: '#C8A96E', fontSize: '15px', letterSpacing: '2px', marginBottom: '14px' }}>
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </div>
  )
}

export default function ReviewsPage() {
  useRevealAll()

  const [offset, setOffset] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const CARD_W = 400 + 24 // card width + gap

  const slide = (dir: number) => {
    const maxOffset = Math.max(0, (reviews.length - 3) * CARD_W)
    setOffset(prev => Math.max(0, Math.min(prev + dir * CARD_W, maxOffset)))
  }

  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: 'clamp(60px,8vw,100px) clamp(24px,6vw,64px) clamp(40px,5vw,60px)',
          textAlign: 'center',
          background: '#0E0B07',
        }}
      >
        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A96E', marginBottom: '14px' }}>
          Customer Love
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: 'clamp(28px,4.5vw,56px)',
            fontWeight: 700, lineHeight: 1.18,
            color: '#EDE8DF',
          }}
        >
          What Our Customers Love<br />
          <span style={{ color: 'rgba(237,232,223,0.65)' }}>About Their Café Experience</span>
        </h1>
        <p style={{ fontSize: '15px', color: 'rgba(237,232,223,0.5)', marginTop: '14px' }}>
          Real stories from our regulars
        </p>

        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: 'rgba(200,169,110,0.1)',
            border: '1px solid rgba(200,169,110,0.28)',
            borderRadius: '30px', padding: '11px 24px',
            marginTop: '24px',
            fontSize: '14px', fontWeight: 600, color: '#C8A96E',
            transition: 'all 0.25s',
          }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(200,169,110,0.18)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(200,169,110,0.1)'}
        >
          <span style={{ color: '#C8A96E', fontSize: '18px', letterSpacing: '2px' }}>★★★★☆</span>
          4.2/5 Customer Rating on Google Reviews
        </a>
      </section>

      {/* Reviews Carousel */}
      <section
        style={{
          padding: 'clamp(60px,7vw,90px) clamp(24px,6vw,64px)',
          background: '#0E0B07',
          overflow: 'hidden',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              gap: '24px',
              transform: `translateX(-${offset}px)`,
              transition: 'transform 0.55s cubic-bezier(0.25,0.1,0.25,1)',
            }}
          >
            {reviews.map((r, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  minWidth: '400px', maxWidth: '400px',
                  background: 'rgba(237,232,223,0.04)',
                  border: '1px solid rgba(237,232,223,0.08)',
                  borderRadius: '16px', padding: '32px',
                  transition: 'background 0.3s, border-color 0.3s',
                  transitionDelay: `${i * 0.1}s`,
                  cursor: 'default',
                  flexShrink: 0,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(237,232,223,0.07)'
                    ; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,86,30,0.3)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(237,232,223,0.04)'
                    ; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(237,232,223,0.08)'
                }}
              >
                <Stars count={r.stars} />
                <p style={{ fontSize: '14.5px', lineHeight: 1.72, color: 'rgba(237,232,223,0.72)', marginBottom: '22px', fontStyle: 'italic' }}>
                  "{r.text}"
                </p>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#EDE8DF' }}>{r.name}</div>
                <div style={{ fontSize: '12px', color: '#7A6A58', marginTop: '3px' }}>{r.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '40px' }}>
          {['←', '→'].map((arrow, i) => (
            <button
              key={arrow}
              onClick={() => slide(i === 0 ? -1 : 1)}
              style={{
                width: '50px', height: '50px', borderRadius: '50%',
                border: '1.5px solid rgba(237,232,223,0.2)',
                background: 'rgba(255,255,255,0.04)',
                color: '#EDE8DF', fontSize: '20px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '##c7c7c7'
                  ; (e.currentTarget as HTMLElement).style.background = 'rgba(200,86,30,0.14)'
                  ; (e.currentTarget as HTMLElement).style.color = '##c7c7c7'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(237,232,223,0.2)'
                  ; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'
                  ; (e.currentTarget as HTMLElement).style.color = '#EDE8DF'
              }}
            >
              {arrow}
            </button>
          ))}
        </div>
      </section>

      {/* Cafe full bleed */}
      <div className="img-zoom" style={{ overflow: 'hidden', height: '400px' }}>
        <img
          src="https://framerusercontent.com/images/oP0lgWRAFkq9S1FL48KemQO9w0.jpeg"
          alt="Cafe Ambience"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.65)' }}
        />
      </div>

      {/* Contact strip */}
      <div
        className="reveal"
        style={{
          background: '#080503',
          display: 'flex', flexWrap: 'wrap', gap: '48px',
          padding: 'clamp(40px,6vw,64px) clamp(24px,6vw,64px)',
        }}
      >
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} style={{ flex: 1, minWidth: '200px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '10px',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(200,86,30,0.12)',
                    border: '1px solid rgba(200,86,30,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={16} color="#C8561E" />
                </div>

                <div
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#C8561E',
                  }}
                >
                  {item.label}
                </div>
              </div>

              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{
                  fontSize: '14px',
                  color: 'rgba(237,232,223,0.72)',
                  lineHeight: 1.65,
                }}
              >
                {item.content}
              </a>
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  )
}
