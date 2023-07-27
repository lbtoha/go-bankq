/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
        "3xl": "1600px",
        "4xl": "1800px",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      "3xl": "1600px",
      "4xl": "1800px",
    },

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
        "border-color": "var(--border-color)",
      },
      fontFamily: {
        inter: ["var(--body-font)"],
        montserrat: ["var(--head-font)"],
      },

      keyframes: {
        previewShapeY: {
          "0%, 100%": { transform: "translateY(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateY(-10px)" },
          "20%, 40%, 60%, 80%": { transform: "translateY(10px)" },
        },

        previewShape: {
          "0%": {
            transform: "translateX(-30px) translateY(0)",
          },
          "50%": {
            transform: "translateX(0px) translateY(5px)",
          },
          "100%": {
            transform: "translateX(-30px) translateY(0)",
          },
        },

        pulse: {
          "0%": {
            "-webkit-transform": "scale(1)",
            "-ms-transform": "scale(1)",
            transform: "scale(1)",
          },
          "50%": {
            "-webkit-transform": "scale(1.1)",
            "-ms-transform": "scale(1.1)",
            transform: "scale(1.1)",
          },
          "100%": {
            "-webkit-transform": "scale(1)",
            "-ms-transform": "scale(1)",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        previewShapeY: "previewShapeY 15s linear infinite",
        previewShape: "previewShape 5s infinite",
        pulse: "pulse 5s linear infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      const customComponent = {
        ".custom-transition": {
          transition: "all 0.35s ease-in-out",
        },

        ".dropdown-menu": {
          "inset-block-start": "100%",
          "pointer-events": "unset",
          visibility: "visible",
          opacity: "1",
          "border-bottom-left-radius": "5px",
          "border-bottom-right-radius": "5px",
        },

        ".dropdown-menu-sm": {
          "inset-block-start": "100%",
          "pointer-events": "unset",
          visibility: "visible",
          opacity: "1",
          border: "none",
          "box-shadow": "none",
          padding: "0px 0px 0px 25px",
        },

        ".dropdown-menu-sub-item": {
          "inset-block-start": "100%",
          "pointer-events": "unset",
          visibility: "visible",
          opacity: "1",
          "border-bottom-left-radius": "5px",
          "border-bottom-right-radius": "5px",
        },
      };
      [require("tw-elements/dist/plugin.cjs")];
      addComponents(customComponent);
    }),
  ],
};
