import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';
import process from 'process'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    console.log(mode);
	const env = loadEnv(mode, process.cwd(), '');
	return {
		plugins: [react(), mkcert()],
        envDir: '.',
		define: {
			'import.meta.env.STORYBLOK_DELIVERY_API_TOKEN': JSON.stringify(
				env.STORYBLOK_DELIVERY_API_TOKEN,
			),
			'import.meta.env.STORYBLOK_API_BASE_URL': JSON.stringify(
				env.STORYBLOK_API_BASE_URL,
			),
		},
	};
});
