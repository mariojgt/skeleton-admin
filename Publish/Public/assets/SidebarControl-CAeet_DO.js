import { mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Home, ListVideo, Search } from "lucide-vue-next";
import { Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./SearchSidebar-BPNZMEZb.js";
import "lodash";
import "./dynamicIcon-DKOdjdPH.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./axios-BWWnXGbF.js";
import "axios";
import "naive-ui";
import "./Markdown-D1WgnuMs.js";
import "dompurify";
import "markdown-it";
import "highlight.js";
const _sfc_main = {
  __name: "SidebarControl",
  __ssrInlineRender: true,
  props: {
    sideBarOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ["openSidebar"],
  setup(__props, { emit: __emit }) {
    const homeRoute = route("home");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bottom-6 left-6 z-50" }, _attrs))}><div class="relative flex items-center gap-3 p-2 bg-dark-500/90 rounded-xl border border-gray-800/50 shadow-lg hover:shadow-blue-500/10 transition-all duration-300">`);
      _push(ssrRenderComponent(unref(Link), {
        href: unref(homeRoute),
        class: "group relative flex items-center justify-center w-12 h-12 rounded-lg bg-dark-400 hover:bg-dark-300 transition-all duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute inset-0 bg-blue-500/10 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300"${_scopeId}></div>`);
            _push2(ssrRenderComponent(unref(Home), { class: "w-5 h-5 text-white group-hover:text-blue-400 transition-colors duration-300" }, null, _parent2, _scopeId));
            _push2(`<span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm font-medium text-white bg-dark-600/90 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"${_scopeId}> Home </span>`);
          } else {
            return [
              createVNode("div", { class: "absolute inset-0 bg-blue-500/10 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300" }),
              createVNode(unref(Home), { class: "w-5 h-5 text-white group-hover:text-blue-400 transition-colors duration-300" }),
              createVNode("span", { class: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm font-medium text-white bg-dark-600/90 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap" }, " Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="group relative flex items-center gap-2 px-4 h-12 rounded-lg bg-dark-400 hover:bg-dark-300 transition-all duration-300"><div class="absolute inset-0 bg-purple-500/10 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>`);
      _push(ssrRenderComponent(unref(ListVideo), { class: "w-5 h-5 text-white group-hover:text-purple-400 transition-colors duration-300" }, null, _parent));
      _push(`<span class="text-white group-hover:text-purple-400 font-medium transition-colors duration-300"> Episodes </span></button>`);
      _push(ssrRenderComponent(_sfc_main$1, { buttonClass: "group relative flex items-center justify-center w-12 h-12 rounded-lg bg-dark-400 hover:bg-dark-300 transition-all duration-300" }, {
        "button-content": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute inset-0 bg-green-500/10 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300"${_scopeId}></div>`);
            _push2(ssrRenderComponent(unref(Search), { class: "w-5 h-5 text-white group-hover:text-green-400 transition-colors duration-300" }, null, _parent2, _scopeId));
            _push2(`<span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm font-medium text-white bg-dark-600/90 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"${_scopeId}> Search </span>`);
          } else {
            return [
              createVNode("div", { class: "absolute inset-0 bg-green-500/10 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300" }),
              createVNode(unref(Search), { class: "w-5 h-5 text-white group-hover:text-green-400 transition-colors duration-300" }),
              createVNode("span", { class: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm font-medium text-white bg-dark-600/90 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap" }, " Search ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="absolute -inset-px bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 rounded-xl -z-10"></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Course/ViewComponents/SidebarControl.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
