import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'

export default defineConfig({
    resolve: {
        alias: {
            '@': '/resources/vendor/SkeletonAdmin/js',
            '@frontend_components': '/resources/vendor/SkeletonAdmin/js/frontend/Components',
            '@backend_components': '/resources/vendor/SkeletonAdmin/js/backend/Components',
            '@frontend_layout': '/resources/vendor/SkeletonAdmin/js/frontend/Layout',
            '@backend_layout': '/resources/vendor/SkeletonAdmin/js/backend/Layout',
        },
    },
    plugins: [
        laravel([
            'resources/vendor/SkeletonAdmin/js/backend/app.js', // Backend
            'resources/vendor/SkeletonAdmin/sass/backend/backendApp.scss', // Backend
            'resources/vendor/SkeletonAdmin/js/frontend/app.js', // Frontend
            'resources/vendor/SkeletonAdmin/sass/frontend/frontendApp.scss', // Frontend
        ]),
          vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            }
        }),
        ReactivityTransform()
    ],
    build: {
        outDir: 'public/vendor/Skeleton',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                Backend_js:'resources/vendor/SkeletonAdmin/js/backend/app.js',
                Backend_scss:'resources/vendor/SkeletonAdmin/sass/backend/backendApp.scss',
                Frontend_js:'resources/vendor/SkeletonAdmin/js/frontend/app.js',
                Frontend_scss:'resources/vendor/SkeletonAdmin/sass/frontend/frontendApp.scss',
            },
        },
    }
});
