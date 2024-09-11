/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
        'roboto-flex': ['"Roboto Flex"', 'sans-serif'],

      },
      backgroundImage: {
        'car-background': "url('/src/images/car-background.png')",
      },
    },
  },
  plugins: [],
}

