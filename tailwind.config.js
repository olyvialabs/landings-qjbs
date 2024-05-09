module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#007bff', // Adjust this to match your design precisely
          600: '#0056b3'
        },
        gray: {
          50: '#f9fafb', // Light background
          600: '#4b5563', // Text color
          800: '#1f2937'  // Dark text
        }
      }
    },
  },
  plugins: []

}

