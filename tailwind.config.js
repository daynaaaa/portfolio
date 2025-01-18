/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'light1': '#E5D0CC',
      'light2': '#BFACB5',
      'med': '#7F7B82',
      'dark1': '#444554',
      'dark2': '#302e33'
    }
  },
  plugins: [],
}