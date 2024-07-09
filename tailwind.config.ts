import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'themeStone': '#687864',
        'themeWater': '#31708E',
        'themeBlue': '#5085A5',
        'themeAcqua': '#8FC1E3',
        'themeWhite': '#F7F9FB',
      }
    },
  },
  darkMode: "class",
  plugins: [
    require('flowbite/plugin'),
    nextui(),
    function ({addUtilities, theme}: {addUtilities: any, theme: any}) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: 'thin',
          scrollbarColor: "rgba(0, 0, 0, 0.5) transparent",
          scrollbarGutter: 'stable',
          paddingRight: '0px',
        },
        ".scrollbar-webkit": {
          position: 'absolute',
          right: 0,
          paddingRight: '0px',
          "&::-webkit-scrollbar": {
            width: "0px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "20px",
            border: "1px solid transparent"
          },
        },
        [`@media (max-device-width: ${theme('screens.sm')})`]: {
          ".scrollbar-thin": {
            paddingRight: '8px',
            scrollbarGutter: 'stable'
          },
          ".scrollbar-webkit": {
            paddingRight: '8px'
          },
        }
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
};
export default config;
