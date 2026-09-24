import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F14",
        paper: "#F5F6F8",
        white: "#FFFFFF",
        blue: {
          DEFAULT: "#1546C9",
          deep: "#0A1128",
        },
        cyan: "#00B8D9",
        steel: "#626C7A",
        line: "#E4E7EC",
      },
      fontFamily: {
        display: [
          "Avenir Next",
          "Helvetica Neue",
          "Segoe UI",
          "-apple-system",
          "sans-serif",
        ],
        body: [
          "Inter",
          "-apple-system",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
