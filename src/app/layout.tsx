import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fireandfeast.in"),

  title: {
    default: "Fire & Feast Restaurant & Leo Café | Best Family Restaurant in Tirupati",
    template: "%s | Fire & Feast Restaurant",
  },

  description:
    "Experience premium dining at Fire & Feast Restaurant & Leo Café in Tirupati. Enjoy delicious food, handcrafted coffee, desserts, family dining, and easy online table reservations.",

  keywords: [
    "Fire & Feast",
    "Fire and Feast Restaurant",
    "Fire & Feast Tirupati",
    "Best Restaurant in Tirupati",
    "Family Restaurant Tirupati",
    "Fine Dining Tirupati",
    "Cafe in Tirupati",
    "Leo Cafe Tirupati",
    "Coffee Shop Tirupati",
    "Restaurants near Tiruchanur",
    "Birthday Party Restaurant Tirupati",
    "Best Food in Tirupati",
    "Reserve Table Tirupati",
  ],

  alternates: {
    canonical: "https://www.fireandfeast.in",
  },

  openGraph: {
    title:
      "Fire & Feast Restaurant & Leo Café | Best Family Restaurant in Tirupati",

    description:
      "Enjoy premium dining, delicious food, handcrafted coffee, desserts, and family-friendly ambience at Fire & Feast Restaurant & Leo Café.",

    url: "https://www.fireandfeast.in",

    siteName: "Fire & Feast Restaurant",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fire & Feast Restaurant Tirupati",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Fire & Feast Restaurant & Leo Café | Best Restaurant in Tirupati",

    description:
      "Premium restaurant & café in Tirupati serving delicious food, desserts and handcrafted coffee.",

    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Restaurant",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Fire & Feast Restaurant & Leo Café",
            image: "https://www.fireandfeast.in/images/og-image.jpg",
            url: "https://www.fireandfeast.in",
            telephone: "+91XXXXXXXXXX",
            servesCuisine: [
              "Indian",
              "Chinese",
              "Continental",
              "Cafe",
            ],
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Your Full Address",
              addressLocality: "Tirupati",
              addressRegion: "Andhra Pradesh",
              postalCode: "517501",
              addressCountry: "IN",
            },
          }),
        }}
      />
      <body>
        <Navbar />
        <main style={{ paddingTop: "94px" }}>{children}</main>
      </body>
    </html>
  );
}