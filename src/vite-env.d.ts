/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly STORYBLOK_API_TOKEN: string;
	readonly STORYBLOK_API_BASE_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
