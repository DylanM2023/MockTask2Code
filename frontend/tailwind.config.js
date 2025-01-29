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
        ticket_icon: "url('./assets/tickets_icon.jpg')",
        otter_image:"url('./assets/otter_img.jpg')",
        lion_image:"url('./assets/lion_img.jpg')",
        bird_image:"url('./assets/bird_img.jpg')",
        single_room: "url('./assets/single_room.jpg')",
        double_room: "url('./assets/double_room.jpg')",
        suite_room: "url('./assets/Suite_room.jpg')",
        family_room: "url('./assets/family_room.jpg')",
        map_img: "url('./assets/map_img.jpg')",
      },
    screens: {
      'desktop': '1280px',
      'phone': '320px',
    }
    },
  },
  plugins: [],
}

