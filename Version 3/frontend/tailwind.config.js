/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        landing_img: "url('./assets/indeximg.jpg')",
        ticket_icon: "url('./assets/ticket_icon.jpg')",
      },
    },
  },
  plugins: [],
}

