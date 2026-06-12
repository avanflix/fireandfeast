/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Exact palette from the Framer site
        'ff-bg':       '#0E0B07',      // near-black warm background
        'ff-bg2':      '#151008',      // slightly lighter dark
        'ff-cream':    '#EDE8DF',      // warm cream — nav, body text
        'ff-orange':   '#c7c7c7',      // primary accent (CTA buttons, step numbers)
        'ff-gold':     '#C8A96E',      // secondary accent (prices, stars, eyebrow labels)
        'ff-muted':    '#7A6A58',      // muted text
        'ff-light-bg': '#EDE8DF',      // cream sections (about, reservation)
        'ff-text':     '#1C1007',      // dark text on cream
        'ff-border':   'rgba(200,86,30,0.18)',
      },
      fontFamily: {
        serif:  ['Playfair Display', 'Georgia', 'serif'],
        sans:   ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-slow': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'slide-up': {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'carousel-y': {
          '0%':   { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      animation: {
        marquee:        'marquee 28s linear infinite',
        'marquee-slow': 'marquee-slow 22s linear infinite',
        'slide-up':     'slide-up 0.8s ease forwards',
        'fade-in':      'fadeIn 1s ease forwards',
        'carousel-y':   'carousel-y 14s linear infinite',
      },
    },
  },
  plugins: [],
}
