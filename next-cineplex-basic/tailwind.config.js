/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f9ecd2",
          75: "#fdf6e9",
          100: "#f8e7c6",
          200: "#f5dbaa",
          300: "#f1cf8e",
          400: "#eec371",
          500: "#eab755",
          600: "#e7ab38",
          700: "#e39f1c",
          800: "#cc8f19",
          900: "#b07b16",
        },
        
      },
    },
  },
  plugins: [],
  important: true,
};
