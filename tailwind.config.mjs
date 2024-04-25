import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#b3c7ff' /* Dark theme highlights */, 600: '#293f58' /* Light theme highlights */, 900: '#182775', 950: '#131e4f' };
const gray = { 100: '#e3e3e3' /* Light Theme Header*/ , 200: '#eceef2' /* Dark theme theme text */, 300: '#c7bdd5' /* Dark theme text */, 400: '#888b96', 500: '#545861', 700: '#353841' /* Light theme Text - Dark theme borders*/, 800: '#24272f' /* Dark mode header/nav & light mode theme text */, 900: '#17181c' /* Light theme headers, dark theme body */ };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	fontFamily: {
        action: ['Font-Action', 'Georgia', 'Times New Roman', 'Times', 'serif'],
        main: [
          'Font-Main',
          'Arial',
          'Helvetica Neue',
          'Helvetica',
          'sans-serif',
        ],
      },
	plugins: [starlightPlugin()],
};
