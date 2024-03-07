/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'body-image': "url('./assets/images/pexels-veeterzy-303383.jpg')",
    },
  },
  plugins: [],
  }
}
