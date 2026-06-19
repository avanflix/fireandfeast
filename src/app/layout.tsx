import type { Metadata } from 'next'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  metadataBase: new URL('https://fireandfeast.com'),
  title: "Fire & Feast Restaurant | Tirupati",
  description:
    "Fire & Feast Restaurant & Leo Café in Tirupati offers delicious food, premium coffee, refreshing beverages, and delightful desserts. Enjoy a warm atmosphere, quality service, and a memorable dining experience with family and friends.",
  keywords: [
    "Fire and Feast",
    "Fire & Feast Tirupati",
    "Restaurant in Tirupati",
    "Leo Cafe",
    "Best restaurant in Tirupati",
    "Cafe in Tirupati",
  ],
  alternates: {
    canonical: 'https://fireandfeast.com',
  },
  openGraph: {
    title: 'Fire & Feast Restaurant | Tirupati',
    description: 'Experience premium dining at Fire & Feast Restaurant & Leo Café, Tirupati.',
    url: 'https://fireandfeast.com',
    siteName: 'Fire & Feast Restaurant',
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ paddingTop: '94px' }}>{children}</main>
      </body>
    </html>
  )
}