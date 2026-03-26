// tailwind.config.js
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        concrete: {
          50:  '#f5f5f4',
          100: '#e7e5e4',
          200: '#d6d3d1',
          400: '#a8a29e',
          600: '#57534e',
          800: '#292524',
          900: '#1c1917',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        display: ['Oswald', 'Impact', 'sans-serif'],
        body:    ['Source Sans 3', 'Segoe UI', 'sans-serif'],
      }
    }
  },
  plugins: [],
}