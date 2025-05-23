// app.js
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import recaptchaPlugin from './Plugins/recaptcha';
import { ZiggyVue } from '../../../../../vendor/tightenco/ziggy/dist/vue.m';

// Load reCAPTCHA site key from meta tag or window.__INITIAL_STATE__
const RECAPTCHA_SITE_KEY = document.querySelector('meta[name="recaptcha-key"]')?.getAttribute('content');

createInertiaApp({
    progress: {
        // The delay after which the progress bar will appear, in milliseconds...
        delay: 250,
        // The color of the progress bar...
        color: '#fff',
        // Whether to include the default NProgress styles...
        includeCSS: true,
        // Whether the NProgress spinner will be shown...
        showSpinner: false,
    },
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });

        // Initialize plugins
        app.use(plugin);
        app.use(recaptchaPlugin, {
            siteKey: RECAPTCHA_SITE_KEY,
        });

        // Add Ziggy Vue plugin
        app.use(ZiggyVue);

        // Mount the app
        app.mount(el);
    },
});
