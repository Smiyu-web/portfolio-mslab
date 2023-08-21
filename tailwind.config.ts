// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/**/*.{html,js}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        meddon: ["Meddon", "sans-serif"],
      },
      fontSize: {
        tiny: ".5em",
        smC: ["0.875rem", "2rem"],
        baseC: ["1rem", "2rem"],
        lgC: ["1.25rem", "2rem"],
      },
      height: {
        "20rem": "20rem",
        "24rem": "24rem",
        "28rem": "28rem",
        "30rem": "30rem",
        "40rem": "40rem",
        "50vh": "50vh",
        "70vh": "70vh",
        "95vh": "95vh",
      },
      width: {
        "24rem": "24rem",
        "28rem": "28rem",
        "30rem": "30rem",
        "40rem": "40rem",
        "60vw": "60vw",
      },
      inset: {
        18: "4.5rem",
        88: "22rem",
        lg: "36rem",
        xl: "48rem",
        5: "5%",
        100: "10%",
        150: "15%",
        200: "20%",
        300: "30%",
        400: "40%",
        500: "50%",
      },
      borderWidth: {
        30: "30%",
      },
      padding: {
        100: "10%",
        150: "15%",
        200: "20%",
        300: "30%",
        400: "40%",
        500: "50%",
      },
      margin: {
        100: "10%",
        200: "20%",
        300: "30%",
        400: "40%",
        500: "50%",
        screen: "100vh",
      },
      letterSpacing: {
        widest: ".25em",
        widest2: ".3rem",
      },
      colors: {
        bg: "#222222",
        bg2: "#111111",
        gy: "#858585",
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
      },
    },
    screens: {
      all: "0px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
