/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkblue: "#0050ff",
        lightblue: "#ebf1ff",
        blue: "#d1e0ff",
      },
      screens: {
        "hero-sm": "1200px",
        lg: "1076px",
        "mobile-lg": "645px",
        "mobile-md": "595px",
        "mobile-sm": "445px",
        xs: "320px",
      },
    },
  },
  plugins: [],
};
