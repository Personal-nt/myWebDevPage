/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        primaryOpacity: 'var(--color-primary-opacity)',
        secondaryOpacity: 'var(--color-secondary-opacity)',

        textColor: 'var(--text-color)',
        textColorDark: 'var(--text-color-dark)',
        bgColor: 'var(--bg-color)',
        bgColorDark: 'var(--bg-color-dark)',
      },
    },
  },
  plugins: [require("daisyui")],
}