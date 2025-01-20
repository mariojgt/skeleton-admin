import { mergeProps, useSSRContext, ref, watch, onMounted, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import "@inertiajs/vue3";
const _sfc_main$1 = {
  __name: "TwitterPreview",
  __ssrInlineRender: true,
  props: {
    seo: {
      type: Object,
      required: true,
      default: () => ({
        twitter: {
          card: "summary_large_image",
          title: "",
          description: "",
          image: ""
        },
        og: {
          url: ""
        }
      })
    }
  },
  setup(__props) {
    const truncate = (text, length) => {
      if (!text) return "";
      return text.length > length ? text.substring(0, length) + "..." : text;
    };
    const extractDomain = (url) => {
      if (!url) return "";
      try {
        const domain = new URL(url).hostname;
        return domain.replace("www.", "");
      } catch {
        return url;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border dark:border-gray-700 rounded-xl overflow-hidden w-full max-w-[500px] font-sans bg-white dark:bg-gray-900 shadow-lg" }, _attrs))}>`);
      if (__props.seo.twitter.image) {
        _push(`<div class="relative w-full h-[250px] bg-gray-100 dark:bg-gray-800"><img${ssrRenderAttr("src", __props.seo.twitter.image)}${ssrRenderAttr("alt", __props.seo.twitter.title)} class="w-full h-full object-cover"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="p-3 space-y-1"><div class="text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(extractDomain(__props.seo.og.url))}</div><div class="font-bold text-gray-900 dark:text-white leading-tight">${ssrInterpolate(truncate(__props.seo.twitter.title, 70))}</div><div class="text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(truncate(__props.seo.twitter.description, 125))}</div><div class="flex items-center pt-2 text-xs text-gray-500 dark:text-gray-400"><svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></svg> ${ssrInterpolate(__props.seo.twitter.card === "summary_large_image" ? "Summary with large image" : "Summary")}</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Seo/TwitterPreview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "SeoManager",
  __ssrInlineRender: true,
  props: {
    seo: {
      type: Object,
      required: true
    },
    inDebugMode: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const isPanelOpen = ref(false);
    const currentTab = ref("previews");
    const window = globalThis.window;
    const tabs = [
      { id: "previews", name: "Previews" },
      { id: "meta", name: "Meta Tags" }
    ];
    const updateMetaTags = (seo) => {
      document.title = seo.title;
      updateOrCreateMetaTag("description", seo.meta.description);
      updateOrCreateMetaTag("keywords", seo.meta.keywords);
      updateOrCreateMetaTag("author", seo.meta.author);
      updateOrCreateMetaTag("robots", seo.meta.robots);
      updateOrCreateMetaTag("og:title", seo.og.title);
      updateOrCreateMetaTag("og:description", seo.og.description);
      updateOrCreateMetaTag("og:image", seo.og.image);
      updateOrCreateMetaTag("og:url", seo.og.url);
      updateOrCreateMetaTag("og:type", seo.og.type);
      updateOrCreateMetaTag("og:site_name", seo.og.site_name);
      updateOrCreateMetaTag("twitter:card", seo.twitter.card);
      updateOrCreateMetaTag("twitter:title", seo.twitter.title);
      updateOrCreateMetaTag("twitter:description", seo.twitter.description);
      updateOrCreateMetaTag("twitter:image", seo.twitter.image);
      updateOrCreateMetaTag("twitter:site", seo.twitter.site);
      updateJsonLd(seo.jsonLd);
    };
    const updateOrCreateMetaTag = (name, content) => {
      if (!content) return;
      let meta = document.querySelector(
        `meta[name="${name}"], meta[property="${name}"]`
      );
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(name.startsWith("og:") ? "property" : "name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };
    const updateJsonLd = (jsonLd) => {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    };
    watch(
      () => props.seo,
      (newSeo) => {
        updateMetaTags(newSeo);
      },
      { deep: true }
    );
    onMounted(() => {
      if (props.seo) {
        updateMetaTags(props.seo);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.inDebugMode) {
        _push(`<button class="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg z-50"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      if (isPanelOpen.value && __props.inDebugMode) {
        _push(`<div class="fixed bottom-16 right-4 w-[600px] bg-dark-blue-400 rounded-lg shadow-xl z-50 max-h-[80vh] overflow-auto"><div class="p-4"><div class="flex justify-between items-center mb-4"><h2 class="text-lg font-bold dark:text-white">SEO Preview</h2><div class="flex gap-2"><!--[-->`);
        ssrRenderList(tabs, (tab) => {
          _push(`<button class="${ssrRenderClass([
            "px-3 py-1 rounded-md text-sm",
            currentTab.value === tab.id ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          ])}">${ssrInterpolate(tab.name)}</button>`);
        });
        _push(`<!--]--><button class="text-gray-500 hover:text-gray-700 dark:text-gray-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div><div style="${ssrRenderStyle(currentTab.value === "previews" ? null : { display: "none" })}" class="space-y-6"><div class="space-y-2"><h3 class="text-sm font-semibold dark:text-white">Twitter Card Preview</h3>`);
        _push(ssrRenderComponent(_sfc_main$1, { seo: __props.seo }, null, _parent));
        _push(`</div><div class="space-y-2"><h3 class="text-sm font-semibold dark:text-white">Google Search Preview</h3><div class="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"><div class="space-y-1"><div class="text-blue-600 text-lg hover:underline cursor-pointer">${ssrInterpolate(__props.seo.title)}</div><div class="text-green-600 text-sm">${ssrInterpolate(unref(window).location.origin)}</div><div class="text-sm text-gray-600 dark:text-gray-300">${ssrInterpolate(__props.seo.meta.description)}</div></div></div></div></div><div style="${ssrRenderStyle(currentTab.value === "meta" ? null : { display: "none" })}" class="space-y-4"><div class="space-y-4"><div class="border-t pt-4 dark:border-gray-600"><h3 class="font-semibold mb-2 dark:text-white"> Basic Meta Tags </h3><div class="space-y-2 text-sm"><!--[-->`);
        ssrRenderList(__props.seo.meta, (value, key) => {
          _push(`<div class="flex"><span class="font-mono text-blue-500 mr-2">${ssrInterpolate(key)}:</span><span class="dark:text-gray-300">${ssrInterpolate(value)}</span></div>`);
        });
        _push(`<!--]--></div></div><div class="border-t pt-4 dark:border-gray-600"><h3 class="font-semibold mb-2 dark:text-white"> Open Graph </h3><div class="space-y-2 text-sm"><!--[-->`);
        ssrRenderList(__props.seo.og, (value, key) => {
          _push(`<div class="flex"><span class="font-mono text-blue-500 mr-2">og:${ssrInterpolate(key)}:</span><span class="dark:text-gray-300">${ssrInterpolate(value)}</span></div>`);
        });
        _push(`<!--]--></div></div><div class="border-t pt-4 dark:border-gray-600"><h3 class="font-semibold mb-2 dark:text-white"> Twitter Card </h3><div class="space-y-2 text-sm"><!--[-->`);
        ssrRenderList(__props.seo.twitter, (value, key) => {
          _push(`<div class="flex"><span class="font-mono text-blue-500 mr-2">twitter:${ssrInterpolate(key)}:</span><span class="dark:text-gray-300">${ssrInterpolate(value)}</span></div>`);
        });
        _push(`<!--]--></div></div><div class="border-t pt-4 dark:border-gray-600"><h3 class="font-semibold mb-2 dark:text-white"> JSON-LD </h3><pre class="text-xs dark:text-gray-300 bg-dark-100 p-2 rounded-lg">${ssrInterpolate(JSON.stringify(__props.seo.jsonLd, null, 2))}</pre></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Seo/SeoManager.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
