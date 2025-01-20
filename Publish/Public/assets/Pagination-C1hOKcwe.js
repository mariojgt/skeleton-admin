import { toRefs, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import "@inertiajs/vue3";
import { Database, ChevronLeft, ChevronRight } from "lucide-vue-next";
const _sfc_main = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    pagination: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { pagination } = toRefs(props);
    const links = computed(() => pagination.value.links);
    const showPrevious = computed(() => pagination.value.current_page > 1);
    const showNext = computed(() => pagination.value.current_page < pagination.value.last_page);
    const visibleLinks = computed(() => {
      const allLinks = links.value.slice(1, -1);
      const currentPage = pagination.value.current_page;
      const lastPage = pagination.value.last_page;
      if (lastPage <= 7) {
        return allLinks;
      }
      let visibleLinks2 = [];
      visibleLinks2.push(allLinks[0]);
      if (currentPage > 3) {
        visibleLinks2.push({ label: "..." });
      }
      for (let i = Math.max(1, currentPage - 1); i <= Math.min(lastPage, currentPage + 1); i++) {
        visibleLinks2.push(allLinks[i - 1]);
      }
      if (currentPage < lastPage - 2) {
        visibleLinks2.push({ label: "..." });
      }
      if (lastPage > 1) {
        visibleLinks2.push(allLinks[allLinks.length - 1]);
      }
      return visibleLinks2;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="flex items-center justify-between mb-6"><div class="flex items-center gap-2 text-sm text-gray-400">`);
      _push(ssrRenderComponent(unref(Database), { class: "w-4 h-4" }, null, _parent));
      _push(`<span> Showing ${ssrInterpolate(unref(pagination).from)} to ${ssrInterpolate(unref(pagination).to)} of ${ssrInterpolate(unref(pagination).total)} results </span></div><div class="text-sm text-gray-400"> Page ${ssrInterpolate(unref(pagination).current_page)} of ${ssrInterpolate(unref(pagination).last_page)}</div></div><nav class="flex flex-col sm:flex-row items-center justify-between gap-4"><div class="flex items-center gap-2 sm:hidden w-full"><button${ssrIncludeBooleanAttr(!links.value[0].url) ? " disabled" : ""} class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-dark-700 hover:bg-dark-600 disabled:bg-dark-800 disabled:opacity-50 rounded-lg text-white transition-colors">`);
      _push(ssrRenderComponent(unref(ChevronLeft), { class: "w-4 h-4" }, null, _parent));
      _push(`<span>Previous</span></button><div class="px-4 py-2 bg-dark-700 rounded-lg text-white font-medium">${ssrInterpolate(unref(pagination).current_page)}/${ssrInterpolate(unref(pagination).last_page)}</div><button${ssrIncludeBooleanAttr(!links.value[links.value.length - 1].url) ? " disabled" : ""} class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-dark-700 hover:bg-dark-600 disabled:bg-dark-800 disabled:opacity-50 rounded-lg text-white transition-colors"><span>Next</span>`);
      _push(ssrRenderComponent(unref(ChevronRight), { class: "w-4 h-4" }, null, _parent));
      _push(`</button></div><div class="hidden sm:flex items-center gap-1">`);
      if (showPrevious.value) {
        _push(`<button${ssrIncludeBooleanAttr(!links.value[0].url) ? " disabled" : ""} class="flex items-center gap-1 px-3 py-1.5 text-sm bg-dark-700 hover:bg-dark-600 disabled:bg-dark-800 disabled:opacity-50 rounded-lg text-white transition-colors">`);
        _push(ssrRenderComponent(unref(ChevronLeft), { class: "w-4 h-4" }, null, _parent));
        _push(`<span>Previous</span></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center gap-1"><!--[-->`);
      ssrRenderList(visibleLinks.value, (link) => {
        _push(`<!--[-->`);
        if (link.label === "...") {
          _push(`<span class="px-3 py-1.5 text-gray-500"> ••• </span>`);
        } else {
          _push(`<button${ssrIncludeBooleanAttr(!link.url) ? " disabled" : ""} class="${ssrRenderClass([
            "min-w-[40px] px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
            link.active ? "bg-blue-500 text-white" : "bg-dark-700 text-white hover:bg-dark-600"
          ])}">${ssrInterpolate(link.label)}</button>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
      if (showNext.value) {
        _push(`<button${ssrIncludeBooleanAttr(!links.value[links.value.length - 1].url) ? " disabled" : ""} class="flex items-center gap-1 px-3 py-1.5 text-sm bg-dark-700 hover:bg-dark-600 disabled:bg-dark-800 disabled:opacity-50 rounded-lg text-white transition-colors"><span>Next</span>`);
        _push(ssrRenderComponent(unref(ChevronRight), { class: "w-4 h-4" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></nav></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Utility/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
