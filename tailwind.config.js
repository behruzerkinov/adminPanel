/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can extend the default theme here
      colors: {
        // Add custom colors if needed
      },
      fontFamily: {
        // Add custom fonts if needed
      },
      screens: {
        // Add custom breakpoints if needed
      }
    },
  },
  plugins: [],
  // Enable JIT mode
  mode: 'jit',
  // Purge unused styles in production
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
}

