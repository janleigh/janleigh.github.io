/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Poppins", "sans-serif"]
		},
		extend: {
			colors: {
				"verdant-green": "#56966e",
				"verdant-orange": "#dc8c61",
				"verdant-red": "#c14d53",
				"verdant-blue": "#6e95bd",
				"verdant-purple": "#a56db1",
				"verdant-bg": "#0c0c0c",
				"verdant-bg-light": "#131313",
				"verdant-bg-light-2": "#1b1b1b",
				"verdant-bg-light-3": "#272727",
				"verdant-fg": "#dfdddd",
				"verdant-fg-dark": "#b7b7b7",
				"verdant-fg-dark-2": "#a4b5b5",
				"verdant-fg-dark-3": "#5a5858"
			}
		}
	},
	plugins: []
};
