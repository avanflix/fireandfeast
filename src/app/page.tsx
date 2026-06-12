'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const drinkImages = [
  { src: 'https://framerusercontent.com/images/AymzlAU7GhV1uTj9wdYYzH70hVY.png', alt: 'Latte' },
  { src: 'https://framerusercontent.com/images/fps65iiTxMZYDNTVfe1L5eg4yo.png', alt: 'Espresso' },
  { src: 'https://framerusercontent.com/images/ZQroGGCE5tq0CORZ0uvW4zHCC4.png', alt: 'Mocha' },
  { src: 'https://framerusercontent.com/images/H8v5cfwYixfnCz7DWsdfKS3taUY.png', alt: 'Cold Brew' },
  { src: 'https://framerusercontent.com/images/PJhelqDIv2L2JRpb8Ju0KmEJ7lM.png', alt: 'Matcha Latte' },
  { src: 'https://framerusercontent.com/images/jBX5S5niGcpf0Xb1lI1mZVTMZHY.png', alt: 'Ice Tea' },
]

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
// Scroll reveal setup
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
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) =>
      observer.observe(el)
    )
    return () => observer.disconnect()
  }, [])
}

export default function HomePage() {
  useRevealAll()


  const [scrollY, setScrollY] = useState(0);
  const [formState, setFormState] = useState({
    name: '', phone: '', date: '', time: '', guests: '', location: 'Tirupati', notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitted(true);
      setFormState({
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        location: "Tirupati",
        notes: "",
      });

      setTimeout(() => setSubmitted(false), 3500);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        id="hero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden',
          background: '#080503',
        }}
      >
        {/* Radial glow bg */}
        <div
          style={{
            position: 'absolute', inset: 0,
            background: `
              radial-gradient(ellipse 65% 75% at 58% 50%, rgba(200,86,30,0.17) 0%, transparent 68%),
              radial-gradient(ellipse 35% 55% at 78% 25%, rgba(200,169,110,0.10) 0%, transparent 60%),
              #080503
            `,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            padding: 'clamp(40px,8vw,100px) clamp(24px,6vw,72px)',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            animation: 'slideUpHero 0.9s 0.1s ease both',
          }}
        >
          <div className="eyebrow" style={{ marginBottom: '22px', opacity: 0, animation: 'slideUpHero 0.7s 0.3s ease both' }}>
            Fire & Feast · Tirupati
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(44px, 6.5vw, 84px)',
              fontWeight: 700,
              lineHeight: 1.08,
              color: '#EDE8DF',
              marginBottom: '22px',
              opacity: 0,
              animation: 'slideUpHero 0.85s 0.45s ease both',
            }}
          >
            Moments Made{' '}
            <em style={{ color: '#C8561E', fontStyle: 'italic' }}>Fresh</em>
          </h1>
          <p
            style={{
              fontSize: '16.5px',
              lineHeight: 1.72,
              color: 'rgba(237,232,223,0.65)',
              marginBottom: '36px',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              opacity: 0,
              animation: 'slideUpHero 0.8s 0.6s ease both',
            }}
          >
            Ignite your senses with handcrafted flavors, warm hospitality, and experiences made to be remembered.
          </p>
          <div
            className="flex gap-4 flex-wrap"
            style={{
              justifyContent: 'center',
              opacity: 0,
              animation: 'slideUpHero 0.8s 0.75s ease both',
            }}
          >
            <Link
              href="/menu"
              style={{
                background: '#C8561E', color: '#fff',
                padding: '14px 34px', borderRadius: '8px',
                fontSize: '14px', fontWeight: 600, letterSpacing: '0.04em',
                boxShadow: '0 4px 22px rgba(200,86,30,0.4)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(200,86,30,0.55)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 22px rgba(200,86,30,0.4)' }}
            >
              Explore Menu
            </Link>
            <a
              href="#reserve"
              style={{
                border: '1.5px solid rgba(237,232,223,0.28)',
                color: '#EDE8DF', padding: '14px 34px',
                borderRadius: '8px', fontSize: '14px', fontWeight: 500,
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#C8A96E'; (e.currentTarget as HTMLElement).style.color = '#C8A96E' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(237,232,223,0.28)'; (e.currentTarget as HTMLElement).style.color = '#EDE8DF' }}
            >
              Reserve a Table
            </a>
          </div>
        </div>

        {/* Vertical drink carousel */}
        <div
          style={{
            overflow: "hidden",
            width: "100%",
            marginTop: "60px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "72px",
              transform: `translateX(-${scrollY * 0.4}px)`,
              transition: "transform 0.05s linear",
              width: "max-content",
              paddingBottom: "20px"
            }}
          >
            {[...drinkImages, ...drinkImages].map((img, i) => (
              <div
                key={i}
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: `rotate(${scrollY * (0.3 + i * 0.05)}deg)`,
                    transition: "transform 0.05s linear",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Inline keyframes */}
        <style>{`
@keyframes slideUpHero {
  from {
    opacity: 0;
    transform: translateY(38px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Whole strip moves right to left */
@keyframes marqueeMove {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* Individual image rotation */
@keyframes rotateDrink {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.drink-marquee {
  display: flex;
  gap: 32px;
  width: max-content;
  animation: marqueeMove 25s linear infinite;
}

.drink-item {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 2px solid rgba(200,86,30,.18);
  box-shadow: 0 10px 30px rgba(200,86,30,.15);
}

.drink-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: rotateDrink 20s linear infinite;
}

/* Different rotation speeds */
.drink-item:nth-child(2n) .drink-image {
  animation-duration: 25s;
}

.drink-item:nth-child(3n) .drink-image {
  animation-duration: 18s;
}

.drink-item:nth-child(4n) .drink-image {
  animation-duration: 30s;
}

.drink-item:hover .drink-image {
  animation-play-state: paused;
  transform: scale(1.08);
}

.drink-marquee:hover {
  animation-play-state: paused;
}
`}</style>


      </section>

      {/* ─── ABOUT ─── */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          padding: 'clamp(60px,8vw,100px) clamp(24px,6vw,64px)',
          background: '#EDE8DF',
          alignItems: 'center',
        }}
      >
        {/* Images stacked */}
        <div className="reveal-left" style={{ position: 'relative', height: '480px' }}>
          <img
            src="https://framerusercontent.com/images/dBZVyRzvnP3P1qKR03E8wbCsyR4.jpeg"
            alt="Coffee"
            style={{
              position: 'absolute', top: 0, left: 0,
              width: '66%', height: '410px', objectFit: 'cover',
              borderRadius: '12px', boxShadow: '0 20px 50px rgba(28,16,7,0.18)',
            }}
          />
          <img
            src="https://framerusercontent.com/images/fYA6k66LjNr7wGNnfyJ4JmT9k.jpg"
            alt="Cafe"
            style={{
              position: 'absolute', bottom: 0, right: 0,
              width: '52%', height: '300px', objectFit: 'cover',
              borderRadius: '12px', boxShadow: '0 20px 50px rgba(28,16,7,0.22)',
              border: '4px solid #EDE8DF',
            }}
          />
        </div>

        {/* Text */}
        <div className="reveal-right">
          <div className="eyebrow" style={{ color: '#C8561E', marginBottom: '14px' }}>
            <span style={{ background: '#C8561E' }} />
            Our Story
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(26px,3.5vw,42px)',
              fontWeight: 700, lineHeight: 1.2,
              color: '#1C1007', marginBottom: '18px',
            }}
          >
            Welcome to Fire & Feast Leo Café
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.78, color: '#7A6A58', marginBottom: '16px' }}>
            Where warmth meets indulgence, and every experience is thoughtfully curated. Located in Tirupati, Fire & Feast, alongside Leo Café, brings together exceptional hospitality, elevated dining, and inviting café culture under one distinctive experience.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.78, color: '#7A6A58', marginBottom: '32px' }}>
            From bold culinary creations to artisanal coffee moments, every detail is designed to inspire comfort, connection, and celebration.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { num: '100+', label: 'Happy Guests Served Daily' },
              { num: '75+', label: 'Signature Dishes & Handcrafted Delights' },
              { num: 'Premium', label: 'Ingredients, Exceptional Quality' },
              { num: '2-in-1', label: 'Restaurant & Café Experience' },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  borderRadius: '10px', padding: '18px',
                  borderLeft: '3px solid #C8561E',
                }}
              >
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '26px', fontWeight: 700, color: '#C8561E' }}>{s.num}</div>
                <div style={{ fontSize: '12px', color: '#7A6A58', marginTop: '4px', lineHeight: 1.45 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '64px',
          padding: 'clamp(60px,8vw,100px) clamp(24px,6vw,64px)',
          background: '#0E0B07',
          alignItems: 'start',
        }}
      >
        <div className="reveal-scale img-zoom" style={{ borderRadius: '16px', overflow: 'hidden', height: '500px', position: 'sticky', top: '100px' }}>
          <img
            src="https://framerusercontent.com/images/brszNEvYa7sXzEeLEDOdJfbnE.jpg"
            alt="Kitchen Process"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div>
          <h2
            className="reveal"
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: 'clamp(26px,3vw,38px)', fontWeight: 700,
              lineHeight: 1.22, color: '#EDE8DF',
              marginBottom: '48px',
            }}
          >
            From Kitchen to Table{' '}
            <br />
            <em style={{ color: '#C8561E' }}>Our Experience</em>
          </h2>

          {[
            {
              n: '1',
              title: 'Curating the Finest Ingredients',
              body: 'We carefully select premium ingredients, fresh produce, and quality essentials to ensure every dish and beverage delivers exceptional taste and consistency.',
            },
            {
              n: '2',
              title: 'Crafted with Passion',
              body: 'From signature culinary creations at Fire & Feast to handcrafted brews at Leo Café, every offering is prepared with precision, creativity, and care.',
            },
            {
              n: '3',
              title: 'Served with Warm Hospitality',
              body: 'More than exceptional food, we create experiences — where every guest is welcomed with comfort, warmth, and attentive service.',
            },
          ].map((step, i) => (
            <div
              key={i}
              className="reveal"
              style={{ display: 'flex', gap: '22px', marginBottom: '40px', transitionDelay: `${i * 0.15}s` }}
            >
              <div
                style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: '#C8561E', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '16px', fontWeight: 700, flexShrink: 0,
                  boxShadow: '0 4px 16px rgba(200,86,30,0.38)',
                }}
              >
                {step.n}
              </div>
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#EDE8DF', marginBottom: '8px' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(237,232,223,0.58)', lineHeight: 1.68 }}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── RESERVATION ─── */}
      <section
        id="reserve"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))',
          gap: '60px',
          padding: 'clamp(60px,8vw,100px) clamp(24px,6vw,64px)',
          background: '#EDE8DF',
          alignItems: 'start',
        }}
      >
        <div className="reveal-left">
          <div className="eyebrow" style={{ color: '#C8561E', marginBottom: '14px' }}>Book a Table</div>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: 'clamp(26px,3vw,38px)', fontWeight: 700,
              color: '#1C1007', marginBottom: '8px',
            }}
          >
            Reserve your spot!
          </h2>
          <p style={{ fontSize: '14px', color: '#7A6A58', marginBottom: '32px', lineHeight: 1.6 }}>
            Walk-ins are always welcome, but we recommend reserving a table in advance during peak hours.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              {[
                { label: 'Name', key: 'name', type: 'text', placeholder: 'Your full name', colSpan: false },
                { label: 'Phone', key: 'phone', type: 'tel', placeholder: '+91 XXXXX XXXXX', colSpan: false },
                { label: 'Reservation Date', key: 'date', type: 'date', placeholder: '', colSpan: false },
                { label: 'Reservation Time', key: 'time', type: 'time', placeholder: '', colSpan: false },
                { label: 'Number of Guests', key: 'guests', type: 'number', placeholder: '2', colSpan: false },
              ].map((f) => (
                <div key={f.key} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <label style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.09em', textTransform: 'uppercase', color: '#7A6A58' }}>
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    className="ff-input"
                    value={(formState as Record<string, string>)[f.key]}
                    onChange={e => setFormState(prev => ({ ...prev, [f.key]: e.target.value }))}
                  />
                </div>
              ))}

              {/* Location select */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.09em', textTransform: 'uppercase', color: '#7A6A58' }}>
                  Location
                </label>
                <select
                  className="ff-input"
                  value={formState.location}
                  onChange={e => setFormState(prev => ({ ...prev, location: e.target.value }))}
                >
                  <option value="">Select…</option>
                  <option value="Tirupati">Tirupati</option>
                </select>
              </div>

              {/* Notes full width */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', gridColumn: '1 / -1' }}>
                <label style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.09em', textTransform: 'uppercase', color: '#7A6A58' }}>
                  Notes
                </label>
                <textarea
                  className="ff-input"
                  placeholder="Any special requests or dietary requirements?"
                  rows={3}
                  value={formState.notes}
                  onChange={e => setFormState(prev => ({ ...prev, notes: e.target.value }))}
                  style={{ resize: 'vertical' }}
                />
              </div>
            </div>

            <button
              type="submit"
              style={{
                width: '100%', marginTop: '10px',
                background: submitted ? '#2a7a3a' : '#C8561E',
                color: '#fff', padding: '15px',
                borderRadius: '8px', border: 'none',
                fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em',
                cursor: 'pointer', transition: 'background 0.25s, transform 0.2s',
                boxShadow: '0 4px 18px rgba(200,86,30,0.3)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {submitted ? '✓ Reservation Confirmed!' : 'Reserve Now'}
            </button>
          </form>
        </div>

        <div className="reveal-right img-zoom" style={{ borderRadius: '14px', overflow: 'hidden', height: '560px' }}>
          <img
            src="https://framerusercontent.com/images/oP0lgWRAFkq9S1FL48KemQO9w0.jpeg"
            alt="Cafe Ambience"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* ─── CONTACT STRIP ─── */}
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
