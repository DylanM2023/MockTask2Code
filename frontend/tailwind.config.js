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
        single_room: "url('./assets/single_room.jpg')",
        double_room: "url('./assets/double_room.jpg')",
      },
    screens: {
      'desktop': '1280px',
      'phone': '320px',
    }
    },
  },
  plugins: [],
}

