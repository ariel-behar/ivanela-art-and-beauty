import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				creamyPink: {
					light: "#F5EAE6",
					normal: "#EAD6CF",
					dark: "#E4C6BC"
				},
				brown: "#AB8872",
				gold: "#DCB559",
				viber: "#7360F2",
				whatsapp: "#25D366"
			}
		},
	},
	plugins: [],
};
export default config;
