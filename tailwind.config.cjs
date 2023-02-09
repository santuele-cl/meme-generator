/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
        ],
        archivo: [
          'Archivo Black',
          'sans-serif'
        ]
      },
      colors: {
        purple: {
          500: '#672280'
        }
      }
    },
  },
  plugins: [],
}
