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
				'play-game-btn-bg-color': '#FFB703',
			},
			colors: {
				'play-btn-font-color': '#2A1C02',
			},
		},
	},
	plugins: [],
};
