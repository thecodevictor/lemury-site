import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lemury: {
          green: "#062D27",
          "green-alt": "#073C32",
          "green-muted": "#164A41",
          "green-subtle": "#E6ECEA",
          cream: "#F5F2E9",
          "cream-dark": "#EAE5D7",
          white: "#FFFFFF",
          black: "#111311",
          stone: "#575B57",
          border: "#DDD8CA",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
      boxShadow: {
        subtle: "0 4px 24px -4px rgba(6, 45, 39, 0.05)",
        editorial: "0 12px 36px -8px rgba(6, 45, 39, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;

