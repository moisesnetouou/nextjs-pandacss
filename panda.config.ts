import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          blue: {
            10: {value: "#EDF4FF"},
            100: {value: "#dbeafe"},
            300: {value: "#77ADFF"},
            500: {value: "#1C77ff"},
            600: {value: "#004FC7"},
          },
          gray: {
            100: {value: "#F6F6F6"},
            200: {value: "#EFEFEF"},
            300: {value: "#D9D9D9"},
            400: {value: "#959595"},
            500: {value: "#C9C9C9"},
            700: {value: "#979797"},
            800: {value: "#565656"},
          },
          green: {
            500: {value: "#00CC76"},
          },
          red: {
            500: {value: "#FF5F6D"},
          },
        }
      }
    },
  },
  

  jsxFramework: "react",
  // The output directory for your css system
  outdir: "styled-system",
});
