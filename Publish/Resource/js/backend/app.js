import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import naive from "naive-ui";
import { useMessage } from 'naive-ui'

InertiaProgress.init();

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(naive)
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
