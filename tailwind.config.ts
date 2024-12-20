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
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      colors: {
        "main-black": "#202124",
        "secondary-black": "#28292a",
        "tertiary-black": "#3c4043",
        "main-color": "#b5cff8",
        "main-white": "#d3d3d3",
        "secondary-white": "#b1b3b6",
      },
      fontFamily: {
        raleway: "var(--font-raleway)",
        montserrat: "var(--font-montserrat)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), addDynamicIconSelectors()],
};
export default config;
