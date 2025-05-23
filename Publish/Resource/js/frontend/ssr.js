import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h, provide } from 'vue' // Import provide
import route from 'ziggy-js' // Import route helper
import { Ziggy } from '../../../../js/ziggy'

createServer((page) =>
  createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
      return pages[`./Pages/${name}.vue`]
    },
    setup({ App, props, plugin }) {
      const app = createSSRApp({
        render: () => h(App, props),
      }).use(plugin)

      // Provide route globally
      app.config.globalProperties.route = (name, params, absolute) =>
        route(name, params, absolute, Ziggy)

      // Provide it explicitly for components using inject()
      app.provide('route', (name, params, absolute) =>
        route(name, params, absolute, Ziggy)
      )

      return app
    },
  }),
)
