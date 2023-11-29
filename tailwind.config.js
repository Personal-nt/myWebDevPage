/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        primaryOpacity: 'var(--color-primary-opacity)',
        secondaryOpacity: 'var(--color-secondary-opacity)',
      },
    },
  },
  plugins: [require("daisyui")],
}