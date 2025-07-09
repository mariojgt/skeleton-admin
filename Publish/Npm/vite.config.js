import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import ReactivityTransform from '@vue-macros/reactivity-transform/vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig(({ command, mode }) => {
    const ssrBuild = mode === 'ssr';

    console.log(`Building for SSR: ${ssrBuild}`);

    const config = {
        resolve: {
            alias: {
                '@': '/resources/vendor/SkeletonAdmin/js',
                '@frontend_components': '/resources/vendor/SkeletonAdmin/js/frontend/Components',
                '@backend_components': '/resources/vendor/SkeletonAdmin/js/backend/Components',
                '@frontend_layout': '/resources/vendor/SkeletonAdmin/js/frontend/Layout',
                '@backend_layout': '/resources/vendor/SkeletonAdmin/js/backend/Layout',
                '@frontend_types': '/resources/vendor/SkeletonAdmin/js/frontend/Types',
                '@frontend_composable': '/resources/vendor/SkeletonAdmin/js/frontend/Composable',
                '@builder': '/resources/vendor/Builder/Table',
                '@css': path.resolve(__dirname, './resources/vendor/SkeletonAdmin/css/frontend'),
            },
        },
        plugins: [
            tailwindcss(),
            laravel({
                input: [
                    'resources/vendor/SkeletonAdmin/js/backend/app.js',
                    'resources/vendor/SkeletonAdmin/css/backend/app.css',
                    'resources/vendor/SkeletonAdmin/js/frontend/app.js',
                    'resources/vendor/SkeletonAdmin/css/frontend/app.css',
                ],
                ssr: 'resources/vendor/SkeletonAdmin/js/frontend/ssr.js',
                refresh: true,
                buildDirectory: ssrBuild ? 'vendor/Skeleton/ssr' : 'vendor/Skeleton',
            }),
            vue({
                template: {
                    transformAssetUrls: {
                        base: null,
                        includeAbsolute: false,
                    },
                },
            }),
            ReactivityTransform(),
        ],
        build: {
            outDir: ssrBuild ? 'bootstrap/ssr' : 'public/vendor/Skeleton',
            emptyOutDir: true,
            ssr: ssrBuild,
        },
        ssr: {
            noExternal: [
                '@mariojgt/masterui',
                '@mariojgt/wind-notify'
            ],
        },
    };

    if (!ssrBuild) {
        config.server = {
            host: '0.0.0.0',
            port: 5173,
            hmr: {
                host: '0.0.0.0',
                protocol: 'ws',
            },
            watch: {
                usePolling: true,
            },
        };
    }

    return config;
});
