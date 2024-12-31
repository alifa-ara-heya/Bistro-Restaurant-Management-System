import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter, serif",
        cinzel: "Cinzel, serif",
      }
    },
  },
  plugins: [daisyui,
    // eslint-disable-next-line no-undef
    require("@designbycode/tailwindcss-text-shadow"),
  ],

}

