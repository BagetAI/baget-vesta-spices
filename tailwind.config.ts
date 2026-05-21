import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0E1A",
        foreground: "#F0F0F0",
        accent: "#00D4FF",
        muted: "#1A2035",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)"],
        sans: ["var(--font-inter)"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 212, 255, 0.2)",
      }
    },
  },
  plugins: [],
};
export default config;