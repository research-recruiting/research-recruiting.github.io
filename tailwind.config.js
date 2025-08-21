/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8'
        },
        secondary: {
          500: '#6366f1',
          600: '#4f46e5'
        }
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
}