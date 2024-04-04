/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        predYellow: '#E8C606',
        predOrange: '#E89D09'
      }
    }
  },
  plugins: []
}
