import type { Metadata } from 'next'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Fire & Feast – Tirupati',
  description: 'Where warmth meets indulgence. Elevated dining & café culture in the heart of Tirupati.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {/* Ticker tape — fixed below nav */}
        {/* <div
          className="fixed left-0 right-0 z-40 overflow-hidden"
          style={{ top: '64px', background: '#C8561E', padding: '7px 0' }}
        >
          <div className="ticker-track">
            {[
              'Dine In Tirupati', 'Fire & Feast Restaurant', 'Leo Café',
              'Artisanal Brews', 'Fresh Ingredients', 'Bold Flavors',
              'Tiruchanur Road', 'Now Open',
              'Dine In Tirupati', 'Fire & Feast Restaurant', 'Leo Café',
              'Artisanal Brews', 'Fresh Ingredients', 'Bold Flavors',
              'Tiruchanur Road', 'Now Open',
            ].map((t, i) => (
              <span
                key={i}
                className="inline-block text-white font-semibold"
                style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0 32px' }}
              >
                {t}
                <span style={{ marginLeft: '32px', opacity: 0.45 }}>·</span>
              </span>
            ))}
          </div>
        </div> */}
        <main style={{ paddingTop: '94px' }}>{children}</main>
      </body>
    </html>
  )
}
