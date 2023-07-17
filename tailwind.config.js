/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["Vazirmatn", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        figBg: "#1A1A1A", // figma background color
        figYellow: "#F4FA1A", // figma yellow color
        logoColor: "#00bafd", // logo color
      },
    },
  },
  plugins: [],
};
