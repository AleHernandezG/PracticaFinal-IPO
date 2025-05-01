/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        dark: {
          background: "#111827",
          card: "#1F2937",
          text: "#E5E7EB",
          textSecondary: "#9CA3AF",
          border: "#374151",
          button: "#4F46E5",
          buttonHover: "#6366F1",
          accent: "#EAB308",
          accentText: "#FACC15",
        },
        light: {
          background: "#F3F4F6",
          card: "#FFFFFF",
          text: "#111827",
          textSecondary: "#374151",
          border: "#D1D5DB",
          button: "#818CF8",
          buttonHover: "#6366F1",
          accent: "#CA8A04",
          accentText: "#EAB308",
        },
      },
    },
  },
  plugins: [],
};
