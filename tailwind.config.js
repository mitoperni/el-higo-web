/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'terracotta': '#b86b3a',
        'green-leaf': '#47634a',
        'cream': '#f4ead6',
        'dark-text': '#3b3a36',
      },
      fontFamily: {
        'display': ['Lora', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

