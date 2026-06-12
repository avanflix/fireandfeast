'use client'
import { useEffect } from 'react'
import Footer from '@/components/Footer'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

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
      { threshold: 0.07 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}



const vegStarters = [
  { name: '65 ALA Fungi',            price: '₹229/-' },
  { name: 'Classic Soya Popcorn',    price: '₹239/-' },
  { name: 'Peri Peri Soya Popcorn',  price: '₹249/-' },
  { name: 'Hot Soya Popcorn',        price: '₹249/-' },
  { name: 'Creemy Tandoori Florets', price: '₹299/-' },
  { name: 'Mushroom Salt & Pepper',  price: '₹299/-' },
  { name: 'Paneer Majestic',         price: '₹329/-' },
]
const nonVegStarters = [
  { name: 'Ankapuri Wings',               price: '₹329/-' },
  { name: 'Karakudi Wings',               price: '₹329/-' },
  { name: 'Pandu Mirchi Kodi',            price: '₹329/-' },
  { name: 'Chicken Majestic',             price: '₹339/-' },
  { name: 'Chicken Salt & Pepper',        price: '₹339/-' },
  { name: 'Cloudy Chicken Tikka',         price: '₹349/-' },
  { name: 'Curry Pepper Lollipop',        price: '₹349/-' },
  { name: 'F&F Chilly Chicken Fusion',    price: '₹349/-' },
  { name: 'Konaseema Chi. Natu Bombulli', price: '₹349/-' },
  { name: 'F&F Mutton Bombs',             price: '₹399/-' },
  { name: 'Mutton Salt & Pepper',         price: '₹419/-' },
  { name: 'Tender Coconut Chicken',       price: '₹429/-' },
  { name: 'Butter Garlic Prawns',         price: '₹449/-' },
  { name: 'Mutton Galouti Sheermal',      price: '₹449/-' },
  { name: 'Prawns Salt & Pepper',         price: '₹449/-' },
  { name: 'Pathar Ka Ghosh',              price: '₹549/-' },
]
const vegBiryani = [
  { name: 'Veg Parda Pot Biryani', price: '₹339/-' },
  { name: 'Mushroom Biryani',      price: '₹369/-' },
  { name: 'Kaju Biryani',          price: '₹369/-' },
]
const nonVegBiryani = [
  { name: 'Chi. Fry Piece Biryani (B/L)', price: '₹369/-' },
  { name: 'Chi. 65 Biryani',              price: '₹369/-' },
  { name: 'Kodi Kunda Biryani',           price: '₹699/-' },
  { name: 'Lollipop Biryani (4pcs)',       price: '₹399/-' },
  { name: 'Mutton Matka Biryani',         price: '₹899/-' },
]
const platters = [
  { name: 'VEG Platter',             price: '₹1,299/-' },
  { name: 'Grilled Chicken Platter', price: '₹1,399/-' },
  { name: 'All Meat Platter',        price: '₹1,699/-' },
]
const leoSpecials = [
  { name: 'Virgin Blood Morry',  price: '₹299/-' },
  { name: 'Lavender Lemonade',   price: '₹299/-' },
  { name: 'Firy Fruit',          price: '₹299/-' },
  { name: 'Asiam Mule',          price: '₹299/-' },
  { name: 'Aloha Feast',         price: '₹299/-' },
  { name: 'Leo Passion',         price: '₹299/-' },
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

function MenuItemList({ items }: { items: { name: string; price: string }[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="menu-item-row reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
          <span style={{ fontSize: '14px', color: 'rgba(237,232,223,0.82)' }}>{item.name}</span>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '##c7c7c7', marginLeft: '12px', whiteSpace: 'nowrap' }}>{item.price}</span>
        </div>
      ))}
    </div>
  )
}

function CategoryLabel({ children }: { children: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '10px',
      fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em',
      textTransform: 'uppercase', color: '#C8A96E', marginBottom: '18px',
    }}>
      {children}
      <span style={{ flex: 1, height: '1px', background: 'rgba(200,169,110,0.2)' }} />
    </div>
  )
}

function SectionHeader({ children }: { children: string }) {
  return (
    <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '44px' }}>
      <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(22px,3vw,34px)', color: '#EDE8DF', fontWeight: 700, whiteSpace: 'nowrap' }}>
        {children}
      </h2>
      <span style={{ flex: 1, height: '1px', background: 'rgba(200,86,30,0.25)' }} />
    </div>
  )
}

function MenuPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="img-zoom reveal" style={{ borderRadius: '12px', overflow: 'hidden', height: '280px', marginTop: '20px' }}>
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  )
}

const sectionPad = { padding: 'clamp(48px,6vw,72px) clamp(24px,6vw,64px)' }

export default function MenuPage() {
  useRevealAll()

  return (
    <>
      {/* Hero */}
      <section style={{ ...sectionPad, textAlign: 'center', background: 'linear-gradient(180deg,#080503 0%,#0E0B07 100%)' }}>
        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A96E', marginBottom: '14px' }}>
          Fire & Feast · Leo Café
        </div>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(36px,5.5vw,68px)', fontWeight: 700, color: '#EDE8DF' }}>
          Our <em style={{ color: '##c7c7c7', fontStyle: 'italic' }}>Special</em> Menu
        </h1>
        <p style={{ color: 'rgba(237,232,223,0.55)', fontSize: '16px', marginTop: '14px' }}>
          Handcrafted flavors · Premium ingredients · Bold culinary creations
        </p>
      </section>

      {/* Starters */}
      <section style={{ ...sectionPad, background: '#0E0B07' }}>
        <SectionHeader>Our Special Starters</SectionHeader>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '48px' }}>
          <div>
            <CategoryLabel>Veg</CategoryLabel>
            <MenuItemList items={vegStarters} />
            <MenuPhoto src="https://framerusercontent.com/images/oREyKpU4XKIW1nwrHyxD1cUzeWY.jpg" alt="Veg Starters" />
          </div>
          <div>
            <CategoryLabel>Non-Veg</CategoryLabel>
            <MenuItemList items={nonVegStarters} />
            <MenuPhoto src="https://framerusercontent.com/images/FvT9Z2WFia5R8wI1VzyREzfLP1w.jpg" alt="Non-Veg Starters" />
          </div>
        </div>
      </section>

      {/* Full bleed kitchen image
      <div className="img-zoom" style={{ overflow: 'hidden', height: '340px' }}>
        <img
          src="https://framerusercontent.com/images/nNhnstsPvaa1RGtgeQSZDEdt0.jpg"
          alt="Kitchen"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.55)' }}
        />
      </div> */}

      {/* Biryani */}
      <section style={{ ...sectionPad, background: '#110D08' }}>
        <SectionHeader>Special Biryanis</SectionHeader>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '48px' }}>
          <div>
            <CategoryLabel>Veg</CategoryLabel>
            <MenuItemList items={vegBiryani} />
            <MenuPhoto src="https://framerusercontent.com/images/Nof7UlO3iJH48zTYQdzSMQBaWw.jpg" alt="Veg Biryani" />
          </div>
          <div>
            <CategoryLabel>Non-Veg</CategoryLabel>
            <MenuItemList items={nonVegBiryani} />
            <MenuPhoto src="https://framerusercontent.com/images/PmJcoXsbSD5uiTrOTXTmYUhF2wI.jpg" alt="Non-Veg Biryani" />
          </div>
        </div>
      </section>

      {/* Platters */}
      <section style={{ ...sectionPad, background: '#0E0B07' }}>
        <SectionHeader>Platters</SectionHeader>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '20px', marginBottom: '40px' }}>
          {platters.map((p, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                background: 'rgba(200,86,30,0.08)',
                border: '1px solid rgba(200,86,30,0.22)',
                borderRadius: '12px', padding: '28px',
                textAlign: 'center',
                transition: 'all 0.3s',
                transitionDelay: `${i * 0.1}s`,
                cursor: 'default',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(200,86,30,0.16)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(200,86,30,0.08)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#EDE8DF', marginBottom: '10px' }}>{p.name}</h3>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '26px', fontWeight: 700, color: '#C8A96E' }}>{p.price}</div>
            </div>
          ))}
        </div>
        <div style={{ background: '#080503', borderRadius: '14px', padding: '20px', textAlign: 'center' }}>
          <img
            src="https://framerusercontent.com/images/SGPJ0uXwHS5mpSlWR172iZi5j8U.png"
            alt="Platters"
            style={{ maxWidth: '100%', maxHeight: '260px', objectFit: 'contain', margin: '0 auto' }}
          />
        </div>
      </section>

      {/* Leo Specials */}
      <section style={{ ...sectionPad, background: '#110D08' }}>
        <SectionHeader>Leo Specials</SectionHeader>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '16px', marginBottom: '40px' }}>
          {leoSpecials.map((l, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                background: 'rgba(200,169,110,0.07)',
                border: '1px solid rgba(200,169,110,0.2)',
                borderRadius: '10px', padding: '22px',
                transition: 'all 0.3s',
                transitionDelay: `${i * 0.08}s`,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(200,169,110,0.14)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(200,169,110,0.07)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
            >
              <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#EDE8DF', marginBottom: '8px' }}>{l.name}</h3>
              <div style={{ fontSize: '17px', fontWeight: 700, color: '#C8A96E' }}>{l.price}</div>
            </div>
          ))}
        </div>

        {/* Leo photo row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '10px' }}>
          {[
            'https://framerusercontent.com/images/ViLyuUDd5C53lqptRteji6U0s.jpg',
            'https://framerusercontent.com/images/qDv70wqsRwjRFm5pKaGVtkfiLc.jpg',
            'https://framerusercontent.com/images/uYovz1jt12urjTLV2EmW1SQC6s4.jpg',
            'https://framerusercontent.com/images/9cRdRpaEWZrISAjf0mimYHsong.jpg',
          ].map((src, i) => (
            <div key={i} className="img-zoom" style={{ borderRadius: '10px', overflow: 'hidden', height: '220px' }}>
              <img src={src} alt={`Leo ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
            </div>
          ))}
        </div>
      </section>

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
