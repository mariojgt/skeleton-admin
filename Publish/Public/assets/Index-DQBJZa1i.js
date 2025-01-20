import { defineComponent, mergeProps, unref, useSSRContext, ref, isRef, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./App-CccoNqE7.js";
import "./axios-BWWnXGbF.js";
import { usePage } from "@inertiajs/vue3";
import { m as makeMoney } from "./Money-B84zS3T2.js";
import { ShoppingCart, Store, Tags } from "lucide-vue-next";
import "naive-ui";
import "./FlashMessage-CYVaM9mM.js";
import "./Markdown-D1WgnuMs.js";
import "dompurify";
import "markdown-it";
import "highlight.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./Input-BXi_X4mZ.js";
import "@headlessui/vue";
import "marked";
import "turndown";
import "date-fns";
import "./SearchSidebar-BPNZMEZb.js";
import "lodash";
import "./dynamicIcon-DKOdjdPH.js";
import "../Frontend_js.js";
import "./index-koWuargk.js";
import "./SeoManager-ytA6mF8s.js";
import "axios";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "StoreCardGrid",
  __ssrInlineRender: true,
  props: {
    record: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  emits: ["loading", "displayLogin"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group relative bg-dark-500/90 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1" }, _attrs))}><div class="relative aspect-[4/3] overflow-hidden"><a href="#" class="block w-full h-full"><img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"${ssrRenderAttr("src", (_b = (_a = __props.record.media[0]) == null ? void 0 : _a.url) == null ? void 0 : _b.default)}${ssrRenderAttr("alt", __props.record.name)}><div class="absolute inset-0 bg-gradient-to-t from-dark-500 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></a>`);
      if (!__props.record.free_with_subscription) {
        _push(`<div class="absolute top-3 right-3"><span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-orange-500 text-white shadow-lg"> New </span></div>`);
      } else {
        _push(`<div class="absolute top-3 right-3"><span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-green-500 text-white shadow-lg"> Free with Premium </span></div>`);
      }
      _push(`</div><div class="p-6 space-y-4"><a href="#" class="block text-lg font-bold text-white hover:text-purple-400 transition-colors duration-300 line-clamp-2">${ssrInterpolate(__props.record.name)}</a><div class="flex items-center justify-between"><div class="space-y-1">`);
      if (__props.record.price > 0) {
        _push(`<p class="text-2xl font-extrabold text-white">${ssrInterpolate(unref(makeMoney)(__props.record.price))}</p>`);
      } else {
        _push(`<p class="text-2xl font-extrabold text-green-400"> Free </p>`);
      }
      if (__props.record.free_with_subscription) {
        _push(`<span class="text-sm text-purple-400 font-medium"> Free with Premium </span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.record.is_purchase) {
        _push(`<span class="text-sm text-green-400 font-medium"> Purchased </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if ((!((_d = (_c = unref(usePage)().props.authUserInfo) == null ? void 0 : _c.data) == null ? void 0 : _d.has_subscription) || !__props.record.free_with_subscription) && !__props.record.is_purchase) {
        _push(`<button class="inline-flex items-center gap-2 px-6 py-2 rounded-lg font-semibold bg-purple-500 text-white hover:bg-purple-600 transition-colors duration-300 shadow-lg hover:shadow-purple-500/25">`);
        _push(ssrRenderComponent(unref(ShoppingCart), { class: "h-5 w-5" }, null, _parent));
        _push(` Buy Now </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Store/StoreCardGrid.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "StoreTopic",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative py-16 px-4" }, _attrs))}><div class="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-800/5"></div><div class="absolute inset-0 bg-[url(&#39;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+&#39;)] opacity-10"></div><div class="relative max-w-7xl mx-auto"><div class="text-center mb-12"><h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 flex flex-col items-center gap-2"> Store <div class="flex items-center gap-2 text-purple-400">`);
      _push(ssrRenderComponent(unref(Store), { class: "h-8 w-8" }, null, _parent));
      _push(`<div class="h-1 w-24 bg-purple-400 rounded-full"></div></div></h2><p class="text-lg text-neutral-100 max-w-2xl mx-auto"> Explore the whole collection of our store assets and resources </p></div><div class="mb-8 bg-dark-500/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"><h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Tags), { class: "h-6 w-6 text-purple-400" }, null, _parent));
      _push(` All Categories </h3><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4"><!--[-->`);
      ssrRenderList(unref(usePage)().props.storeCategories.data, (item, index) => {
        _push(`<div class="group bg-dark-400/90 backdrop-blur-sm rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1 border border-gray-800/50 hover:border-purple-500/50 overflow-hidden"><div class="p-6 text-center"><div class="h-14 w-14 mx-auto bg-dark-300 p-3 rounded-xl mb-4 transition-colors duration-300 group-hover:bg-purple-500/10">${item.icon ?? ""}</div><h3 class="font-bold text-white text-lg group-hover:text-purple-400 transition-colors duration-300 mb-2">${ssrInterpolate(item.name)}</h3><span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-dark-500 text-neutral-300 group-hover:bg-purple-500/10 transition-colors duration-300">${ssrInterpolate(item.product_count)} Products </span></div><div class="h-1 w-full bg-gradient-to-r from-purple-500/50 to-pink-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Store/StoreTopic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    products: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    let isLoading = ref(false);
    let displayLogin = ref(false);
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({
        backgroundFooterClass: "bg-dark-100",
        headerBackground: "bg-dark-100",
        displayLoading: unref(isLoading),
        onCloseLoading: ($event) => isRef(isLoading) ? isLoading.value = false : isLoading = false,
        displayLogin: unref(displayLogin),
        onCloseLogin: ($event) => isRef(displayLogin) ? displayLogin.value = false : displayLogin = false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="bg-dark-100"${_scopeId}><div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, { routeReload: "course.index" }, null, _parent2, _scopeId));
            if (props.products.data[0]) {
              _push2(`<div class="grid gap-8 mb-6 lg:mb-16 grid-cols-1 md:md:grid-cols-2 lg:md:grid-cols-3"${_scopeId}><!--[-->`);
              ssrRenderList(props.products.data, (course) => {
                _push2(ssrRenderComponent(_sfc_main$2, {
                  key: course.id,
                  record: course,
                  onLoading: ($event) => isRef(isLoading) ? isLoading.value = $event : isLoading = $event,
                  onDisplayLogin: ($event) => isRef(displayLogin) ? displayLogin.value = $event : displayLogin = $event
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="flex justify-center items-center h-28 bg-dark-300"${_scopeId}><p class="text-2xl font-bold text-neutral"${_scopeId}>No Products Found</p></div>`);
            }
            _push2(`</div></section>`);
          } else {
            return [
              createVNode("section", { class: "bg-dark-100" }, [
                createVNode("div", { class: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6" }, [
                  createVNode(_sfc_main$1, { routeReload: "course.index" }),
                  props.products.data[0] ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "grid gap-8 mb-6 lg:mb-16 grid-cols-1 md:md:grid-cols-2 lg:md:grid-cols-3"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(props.products.data, (course) => {
                      return openBlock(), createBlock(_sfc_main$2, {
                        key: course.id,
                        record: course,
                        onLoading: ($event) => isRef(isLoading) ? isLoading.value = $event : isLoading = $event,
                        onDisplayLogin: ($event) => isRef(displayLogin) ? displayLogin.value = $event : displayLogin = $event
                      }, null, 8, ["record", "onLoading", "onDisplayLogin"]);
                    }), 128))
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex justify-center items-center h-28 bg-dark-300"
                  }, [
                    createVNode("p", { class: "text-2xl font-bold text-neutral" }, "No Products Found")
                  ]))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Store/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
