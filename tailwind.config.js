/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'light': '#f2f2f2',
        'dark': '#333',
      },
      textColor: {
        'light': '#333',
        'dark': '#f2f2f2',
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
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  
  plugins: [],
}

