import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";
import { addDynamicIconSelectors } from "@iconify/tailwind";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-black": "#202124",
        "secondary-black": "#28292a",
        "tertiary-black": "#3c4043",
        "main-color": "#3fbfd5",
        "main-white": "#d3d3d3",
      },
      fontFamily: {
        raleway: "var(--font-raleway)",
        montserrat: "var(--font-montserrat)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), addDynamicIconSelectors()],
};
export default config;
