import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import './index.css';
import App from './App';
import { storyblokInit, apiPlugin } from '@storyblok/react';

import Page from './storyblok/Page';
import Teaser from './storyblok/Teaser';
import Feature from './storyblok/Feature';
import Grid from './storyblok/Grid';
import TextBlock from './storyblok/TextBlock';

storyblokInit({
    accessToken: import.meta.env.STORYBLOK_DELIVERY_API_TOKEN,
    apiOptions: {
        region: 'eu',
        endpoint: import.meta.env.STORYBLOK_API_BASE_URL
            ? `${new URL(import.meta.env.STORYBLOK_API_BASE_URL).origin}/v2`
            : undefined,
    },
    use: [apiPlugin],
    components: {
        page: Page,
        teaser: Teaser,
        feature: Feature,
        grid: Grid,
        textblock: TextBlock,
    },
    enableFallbackComponent: true
});
const router = createBrowserRouter([
    {
        path: '/*',
        Component: App,
    },
]);
const root = document.getElementById('root')!;

createRoot(root).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
