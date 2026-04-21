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
        cream: "#F6F1E8",
        creamDeep: "#EDE6D9",
        ink: "#2B2520",
        inkMuted: "#5C534C",
        inkFaint: "#8A8178",
        terracotta: "#B86B52",
        terracottaDeep: "#9A5340",
        sage: "#7D8B72",
        sand: "#D4C4B0",
        paper: "#FDFBF7",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
