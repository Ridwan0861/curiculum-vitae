/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#C76565',
        'custom-beige': '#ECD8C0',
        'custom-gray' : '#E5F1EF',
      },
    },
  },
  plugins: [],
}

