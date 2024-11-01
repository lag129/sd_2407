/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        NotoSansJP: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
}

