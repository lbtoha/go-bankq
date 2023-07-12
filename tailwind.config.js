/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color-1": "var(--primary-color-1)",
        "primary-color-2": "var(--primary-color-2)",
        "primary-color-2.1": "var(--primary-color-2-1)",
        "primary-color-2.2": "var(--primary-color-2-2)",
        "primary-text-1": "var(--primary-text-1)",
        "primary-text-2": "var(--primary-text-2)",
        "sub-title-color": "var(--sub-title-color)",
        "section-bg": "var(--section-bg)",
      },
      fontFamily: {
        inter: ["var(--body-font)"],
        montserrat: ["var(--head-font)"],
      },
    },
  },
  plugins: [],
};
