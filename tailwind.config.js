/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1B1917',
          50: '#F5F4F3',
          100: '#E7E4E1',
          400: '#5C5652',
          600: '#3A3532',
          800: '#232019',
          900: '#1B1917',
          950: '#131110',
        },
        cream: {
          DEFAULT: '#F6F1E9',
          50: '#FDFCFA',
          100: '#F6F1E9',
          200: '#EEE6D7',
        },
        burgundy: {
          DEFAULT: '#6C1B25',
          50: '#F7E9EA',
          400: '#8A2530',
          500: '#6C1B25',
          600: '#57151D',
          700: '#3F0F16',
        },
        gold: {
          DEFAULT: '#B08D53',
          300: '#D4BC8B',
          500: '#B08D53',
          600: '#8F7040',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1400px',
      },
    },
  },
  plugins: [],
}
