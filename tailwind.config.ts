import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        tomato: 'hsl(4, 100%, 67%)',
        // Neutral
        darkSlate: 'hsl(234, 29%, 20%)',
        charcoalGrey: 'hsl(235, 18%, 26%)',
        grey: 'hsl(231, 7%, 60%)',
      }
    },
  },
  plugins: [],
};
export default config;
