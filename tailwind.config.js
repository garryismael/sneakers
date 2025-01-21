/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "var(--orange)",
        "pale-orange": "var(--pale-orange)",
        "dark-blue": "var(--dark-blue)",
        "dark-grayish-blue": "var(--dark-grayish-blue)",
        "grayish-blue": "var(--grayish-blue)",
        "light-grayish-blue": "var(--light-grayish-blue)",
        "white": "var(--white)",
        "black": "var(--black)",
      }
    },
  },
  plugins: [],
}