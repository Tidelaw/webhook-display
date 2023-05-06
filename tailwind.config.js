/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'orange': '#f07900',
        'light-orange':'#ff9d00',
        'light-black':'#131313',
        'orange-black':'#2b2b2b'
      },
    },
    container:{
      center: true,
    }
  },
  plugins: [],
}