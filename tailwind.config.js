export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#f5f5f5",
          dark: "#121212",
        },
        card: {
          light: "rgba(255, 255, 255, 0.8)",
          dark: "rgba(255, 255, 255, 0.1)",
        },
      },
      backdropBlur: {
        glass: "10px",
      },
    },
  },
  plugins: [],
};
