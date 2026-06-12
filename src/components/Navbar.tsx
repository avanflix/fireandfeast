'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/',        label: 'Home' },
    { href: '/menu',    label: 'Menu' },
    { href: '/reviews', label: 'Reviews' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{
        height: '64px',
        padding: '0 40px',
        background: scrolled
          ? 'rgba(14,11,7,0.92)'
          : 'rgba(14,11,7,0.75)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(200,86,30,0.18)',
        transition: 'background 0.3s',
      }}
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src="https://framerusercontent.com/images/LEbWGrnOUnXWl3DRLqIVfCLYY.png"
          alt="Fire & Feast"
          width={200}
          height={56}
          style={{ objectFit: 'contain', height: '100px', width: 'auto' }}
          priority
        />
        
      </Link>
           <Link href="/">
        <Image
          src="https://framerusercontent.com/images/0o1O8xmvE5QMQOeiKqIFQvj8wiY.png"
          alt="Fire & Feast"
          width={200}
          height={56}
          style={{ objectFit: 'contain', height: '100px', width: 'auto' }}
          priority
        />
        
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`nav-link ${pathname === l.href ? 'active' : ''}`}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/#reserve"
          className="text-white font-semibold rounded-md"
          style={{
            background: '##c7c7c7',
            padding: '9px 22px',
            fontSize: '13px',
            letterSpacing: '0.04em',
            transition: 'background 0.2s, transform 0.2s',
            boxShadow: '0 2px 12px rgba(200,86,30,0.35)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = '#a8431580'
            ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = '##c7c7c7'
            ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
          }}
        >
          Online Reservation
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-1"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {[0,1,2].map(i => (
          <span
            key={i}
            style={{
              display: 'block', width: '22px', height: '2px',
              background: '#EDE8DF', borderRadius: '2px',
              transition: 'transform 0.3s, opacity 0.3s',
              transform: mobileOpen
                ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
                : i === 1 ? 'scaleX(0)'
                : 'rotate(-45deg) translate(5px,-5px)'
                : 'none',
              opacity: mobileOpen && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden absolute left-0 right-0 flex flex-col"
          style={{
            top: '64px',
            background: 'rgba(14,11,7,0.97)',
            borderBottom: '1px solid rgba(200,86,30,0.2)',
            padding: '16px 24px 24px',
            gap: '0',
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: '#EDE8DF',
                fontSize: '15px',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#reserve"
            onClick={() => setMobileOpen(false)}
            className="text-center font-semibold rounded-md mt-3"
            style={{ background: '##c7c7c7', color: '#fff', padding: '11px', fontSize: '14px' }}
          >
            Online Reservation
          </Link>
        </div>
      )}
    </nav>
  )
}
