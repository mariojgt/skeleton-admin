import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'

// Create separate configs for client and SSR builds
export default defineConfig(({ command, mode, ssrBuild }) => {
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
            }
        },
        plugins: [
            laravel({
                input: [
                    'resources/vendor/SkeletonAdmin/js/backend/app.js',
                    'resources/vendor/SkeletonAdmin/sass/backend/backendApp.scss',
                    'resources/vendor/SkeletonAdmin/js/frontend/app.js',
                    'resources/vendor/SkeletonAdmin/sass/frontend/frontendApp.scss',
                ],
                ssr: 'resources/vendor/SkeletonAdmin/js/frontend/ssr.js',
                buildDirectory: 'vendor/Skeleton',
            }),
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
            outDir: ssrBuild ? 'bootstrap/ssr' : 'public/vendor/Skeleton',
            emptyOutDir: true,
        },
        ssr: {
            noExternal: ['@mariojgt/masterui']
        }
    };

    // Add rollupOptions only for client build
    if (!ssrBuild) {
        config.build.rollupOptions = {
            input: {
                Backend_js: 'resources/vendor/SkeletonAdmin/js/backend/app.js',
                Backend_scss: 'resources/vendor/SkeletonAdmin/sass/backend/backendApp.scss',
                Frontend_js: 'resources/vendor/SkeletonAdmin/js/frontend/app.js',
                Frontend_scss: 'resources/vendor/SkeletonAdmin/sass/frontend/frontendApp.scss',
            },
        };
    }

    // Add server config only for client build
    if (!ssrBuild) {
        config.server = {
            host: '0.0.0.0',
            port: 5173,
            hmr: {
                host: '0.0.0.0',
                protocol: 'ws'
            },
            watch: {
                usePolling: true
            }
        };
    }

    return config;
});
