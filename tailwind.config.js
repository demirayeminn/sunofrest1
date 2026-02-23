/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        sand: {
          50: '#FDFBF7',
          100: '#F7F4EF',
          200: '#EDE8E0',
          300: '#E0D9CE',
        },
        terracotta: {
          DEFAULT: '#B85C38',
          light: '#C97A5A',
          dark: '#8B4526',
        },
        sea: {
          DEFAULT: '#1A3A4A',
          light: '#2A4F62',
          dark: '#0F2532',
        },
        charcoal: '#2C2C2C',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
