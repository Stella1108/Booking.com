/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // App Router files
    "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router files (if any)
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003580", // Booking.com blue
        accent: "#ff385c",  // Accent color
      },
    },
  },
  plugins: [],
};
