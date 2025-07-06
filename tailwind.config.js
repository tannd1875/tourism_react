/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slideIn: "slideIn .3s ease 1",
        appear: "appear 1s 1",
      },
    },
    keyframes: {
      slideIn: {
        "0%": {
          transform: "translateX(-1rem)",
        },
        "100%": {
          transform: "translateX(0)",
        },
      },
      appear: {
        "0%": {
          "background-color": "none",
        },
        "100%": {
          "background-color": "transparent",
        },
      },
    },
  },
  plugins: [],
};
