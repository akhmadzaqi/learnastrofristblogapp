/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				figtree: ['Figtree', 'sans-serif'],
			  },
			  keyframes: {
				wiggleVertical: {
				  '0%, 100%': { transform: 'translateY(-2px)' },
				  '50%': { transform: 'translateY(4px)' },
				},
			  },
			  animation: {
				wiggleVertical: 'wiggleVertical 2s ease-in-out infinite',
			  },
			  keyframes: {
				wave: {
				  '0%': { transform: 'rotate(0.0deg)' },
				  '10%': { transform: 'rotate(14deg)' },
				  '20%': { transform: 'rotate(-8deg)' },
				  '30%': { transform: 'rotate(14deg)' },
				  '40%': { transform: 'rotate(-4deg)' },
				  '50%': { transform: 'rotate(10.0deg)' },
				  '60%': { transform: 'rotate(0.0deg)' },
				  '100%': { transform: 'rotate(0.0deg)' },
				},
			  },
			  animation: {
				'waving-hand': 'wave 2s linear infinite',
			  },
			},
	},
	plugins: [],
}