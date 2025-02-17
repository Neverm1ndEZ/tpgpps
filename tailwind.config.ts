import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
			dm: "var(--font-dm)",
			raleway: "var(--font-raleway)",
			outfit: "var(--font-outfit)",
			roboto: "var(--font-roboto)",
		},
    extend: {},
  },
  plugins: [],
} satisfies Config;
