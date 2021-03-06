import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel([
            'resources/vendor/SkeletonAdmin/js/backend/app.js', // Backend
            'resources/vendor/SkeletonAdmin/sass/backend/app.scss', // Backend
            'resources/vendor/SkeletonAdmin/js/frontend/app.js', // Frontend
            'resources/vendor/SkeletonAdmin/sass/frontend/app.scss', // Frontend
        ]),
          vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
            reactivityTransform: true
        }),
    ],
});
