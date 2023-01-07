/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'landing-page': "url('/src/data/images/bg_image_landing_page.svg')",
				'game-board': 'url(/src/data/images/bg_game_page.jpg)',
			},
			backgroundColor: {
				'modal-background': 'rgba(0, 0, 0, 0.7)',
				'recarnate-pink': '#FB5F5F',
				'recarnate-failure': '#F04B49',
				'recarnate-primary-300': '#1DB51D',
				'recarnate-primary-400': '#158315',
				'recarnate-secondary-400': '#FFB703',
				'recarnate-secondary-500': '#FEA302',
				'recarnate-purple': '#b51d78',
				'recarnate-bg': '#F9F2E7',
			},
			colors: {
				'recarnate-neutral-100': '#F9F2E7',
				'recarnate-neutral-200': '#D8D3C6',
				'recarnate-neutral-700': '#483004',
				'recarnate-neutral-800': '#2A1C02',
				'recarnate-primary-font-500': '#015401',
				'recarnate-secondary-font-500': '#fea302',
			},
			width: {
				365: '365px',
			},
			height: {
				360: '360px',
				336: '336px',
			},
			maxWidth: {
				120: '136px',
				280: '280px',
			},
			maxHeight: {
				210: '210px',
			},
			spacing: {
				'recarnate-1024': '21rem',
				'recarnate-1280': '270px',
				'recarnate-101': '128px',
			},
		},
	},
	plugins: [],
};
