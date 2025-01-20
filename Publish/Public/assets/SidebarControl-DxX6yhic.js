import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./dynamicIcon-DKOdjdPH.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed top-3 left-3 z-100" }, _attrs))}><div class="panel relative transition-colors duration-300 dark has-custom-bg hoverable rounded-xl bg-dark-blue-500 flex gap-x-2 shadow-lg px-2 py-3"><div><a class="btn bg-dark-blue-200 h-12 w-12 px-0 bg-blue/15 hover:bg-blue/20" href="/">`);
      _push(ssrRenderComponent(_sfc_main$1, { componentId: "home" }, null, _parent));
      _push(`</a></div><div><button class="btn bg-dark-blue-100 px-3 h-full bg-blue/15 hover:bg-blue/20 flex items-center text-lg"><div class="flex items-center space-x-1">`);
      _push(ssrRenderComponent(_sfc_main$1, { componentId: "bars" }, null, _parent));
      _push(`<span class="flex-center h-full flex-shrink-0 text-wrap leading-none"> Episodes </span></div></button></div><div><button class="btn btn-base bg-dark-blue-100 is-solid leading-none has-icon rounded-lg h-12 w-12" title="Tip: press the &#39;s&#39; key to open this search window.">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        componentId: "magnifier",
        class: "w-full"
      }, null, _parent));
      _push(`</button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Store/ViewComponents/SidebarControl.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
