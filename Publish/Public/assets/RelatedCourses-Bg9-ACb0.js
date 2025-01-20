import { mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import { Scroll } from "lucide-vue-next";
import { m as makeMoney } from "./Money-B84zS3T2.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "RelatedCourses",
  __ssrInlineRender: true,
  props: {
    relatedCourses: {
      type: Object,
      required: true
    }
  },
  emits: ["openCourse"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden rounded-xl bg-dark-500/90 backdrop-blur-sm border border-gray-800/50 p-8 mt-8" }, _attrs))} data-v-90ed78e2><div class="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10" data-v-90ed78e2></div><div class="absolute inset-0 bg-[url(&#39;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+&#39;)] opacity-5" data-v-90ed78e2></div><div class="relative" data-v-90ed78e2><div class="text-center mb-8" data-v-90ed78e2><div class="inline-block" data-v-90ed78e2><h2 class="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2" data-v-90ed78e2> Available Quests </h2><div class="flex items-center justify-center gap-2 text-purple-400/80" data-v-90ed78e2>`);
      _push(ssrRenderComponent(unref(Scroll), { class: "h-5 w-5" }, null, _parent));
      _push(`<div class="h-0.5 w-24 bg-gradient-to-r from-purple-400/50 to-blue-400/50 rounded-full" data-v-90ed78e2></div>`);
      _push(ssrRenderComponent(unref(Scroll), { class: "h-5 w-5" }, null, _parent));
      _push(`</div></div><p class="text-gray-400 mt-2" data-v-90ed78e2>Choose your next adventure</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-90ed78e2><!--[-->`);
      ssrRenderList(props.relatedCourses.data, (item, index) => {
        _push(`<button class="${ssrRenderClass([{
          "premium-quest": !item.is_free,
          "free-quest": item.is_free
        }, "group relative overflow-hidden rounded-lg bg-dark-400/30 hover:bg-dark-300/30 transition-all duration-300 text-left quest-card"])}" data-v-90ed78e2>`);
        if (!item.is_free) {
          _push(`<div class="absolute -inset-[2px] rounded-lg premium-border" data-v-90ed78e2><div class="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-purple-500/20 animate-gradient" data-v-90ed78e2></div><div class="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-amber-500/10 animate-shine" data-v-90ed78e2></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="relative p-4 flex gap-4 z-10" data-v-90ed78e2><div class="${ssrRenderClass([{ "premium-image-frame": !item.is_free }, "relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden quest-image-frame"])}" data-v-90ed78e2><div class="${ssrRenderClass([!item.is_free ? "border-amber-500/30" : "border-purple-500/20", "absolute inset-0 border-2 rounded-lg"])}" data-v-90ed78e2></div><img${ssrRenderAttr("src", item.media[0].url.default)}${ssrRenderAttr("alt", item.media[0].alt)} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-v-90ed78e2><div class="absolute inset-0 bg-gradient-to-t from-dark-500 via-transparent to-transparent opacity-50" data-v-90ed78e2></div>`);
        if (!item.is_free) {
          _push(`<!--[--><div class="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-amber-500/50" data-v-90ed78e2></div><div class="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-purple-500/50" data-v-90ed78e2></div><div class="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-purple-500/50" data-v-90ed78e2></div><div class="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-amber-500/50" data-v-90ed78e2></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex-1 min-w-0" data-v-90ed78e2><h3 class="${ssrRenderClass([{ "premium-title": !item.is_free }, "font-bold text-white group-hover:text-amber-400 transition-colors duration-300 line-clamp-2"])}" data-v-90ed78e2>${ssrInterpolate(item.title)}</h3><div class="mt-2 flex items-center gap-2" data-v-90ed78e2><span class="${ssrRenderClass([item.is_free ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400 premium-badge", "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium quest-reward"])}" data-v-90ed78e2>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.is_free ? "Sparkles" : "GemIcon"), { class: "w-4 h-4 mr-1.5" }, null), _parent);
        _push(` ${ssrInterpolate(item.is_free ? "Free Quest" : unref(makeMoney)(item.course_price) + " Premium")}</span></div></div></div><div class="${ssrRenderClass([item.is_free ? "bg-gradient-to-r from-purple-500/50 to-blue-500/50" : "bg-gradient-to-r from-amber-500/50 via-purple-500/50 to-amber-500/50", "absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"])}" data-v-90ed78e2></div></button>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Course/ViewComponents/RelatedCourses.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RelatedCourses = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-90ed78e2"]]);
export {
  RelatedCourses as default
};
