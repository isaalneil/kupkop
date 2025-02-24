/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./card.html",
    "./form.html",
    "./pet add.html",
    "./pet management.html",
    "./pets.html"    
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      
    },
    
  },
  plugins: [],
}
