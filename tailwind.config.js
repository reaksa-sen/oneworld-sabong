/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '1rem',
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        // xl: '1280px',
      },
    },
    extend: {},
  },

  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
