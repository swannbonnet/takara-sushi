/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brightColor:"#F4511F",
        backgroundColor:"#B7BCA9",
        lightText:"#959595"
      }
    },
  },
  plugins: [],
}