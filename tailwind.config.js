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
        'verde-oscuro': '#173B2E',
        'dorado': '#E19B3E',
        'crema': '#F5F1DC',
        'verde-claro': '#2D5A47',
        'dorado-claro': '#F4D03F',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'libre': ['Libre Baskerville', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
