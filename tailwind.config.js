/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'landing-page': "url('/src/data/images/bg_landing_page.svg')",
			},
			backgroundColor: {
				'modal-background': 'rgba(0, 0, 0, 0.7)',
				'recarnate-pink': '#FB5F5F',
				'recarnate-primary-300': '#1DB51D',
				'recarnate-primary-400': '#158315',
				'recarnate-secondary-400': '#FFB703',
				'recarnate-secondary-500': '#FEA302',
			},
			colors: {
				'recarnate-neutral-800': '#2A1C02',
				'recarnate-primary-font-500': '#015401',
				'recarnate-secondary-font-500': '#fea302',
			},
			height: {
				360: '360px',
				336: '336px',
			},
		},
	},
	plugins: [],
};
