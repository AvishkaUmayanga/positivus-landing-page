/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "xmd": "820px",
      },
      colors: {
        'black' : '#000000',
        'whiteColor' : '#FFFFFF',
        'lightGreen' : '#B9FF66',
        'lightGray' : '#F3F3F3',
      },
    },
    gridTemplateColumns: {
      'cols3': 'repeat(3, minmax(0, auto))',
      'cols2': 'repeat(2, minmax(0, auto))',
      'cols1': 'repeat(1, minmax(0, auto))',
    },
  },
  plugins: [require("tailwindcss-animate")],
}