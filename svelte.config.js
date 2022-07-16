import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
const dev = process.env.NODE_ENV === 'development';
//let's goo

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			path: {
				base: dev ? '' : 'https://github.com/ABSTRAC7ION/egypt-main'
			},
			appDir: 'internal',
			assets: 'build',
			fallback: null,
			precompress: false
		}),

		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		}
	}
};



export default config;
