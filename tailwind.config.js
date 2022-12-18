/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'landing-page': "url('/src/data/images/bg_landing_page.svg')",
			},
			backgroundColor: {
				'footer-bg-color': '#158315',
				'secondary-color-light': '#FFB703',
				'secondary-color-dark': '#FFC73B',
			},
			colors: {
				'play-btn-font-color': '#2A1C02',
			},
			height: {
				360: '360px',
				336: '336px',
			},
		},
	},
	plugins: [],
};
