import { defineComponent, onMounted, mergeProps, useSSRContext, ref, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./App-DeZIQ0nQ.js";
import "naive-ui";
import "./FlashMessage-C9hwciIU.js";
import "axios";
import "lucide-vue-next";
import "lodash/debounce.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppMenuSingle",
  __ssrInlineRender: true,
  props: {
    menuItem: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      route(props.menuItem.route);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu-item-container" }, _attrs))}><div class="ios-icon-wrapper"><div class="ios-icon"><div class="icon-content">${props.menuItem.icon ?? ""}</div></div><div class="icon-reflection"></div></div><p class="icon-label">${ssrInterpolate(props.menuItem.menu_label)}</p></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Components/Menu/AppMenuSingle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Logout",
  __ssrInlineRender: true,
  setup(__props) {
    route("skeleton.logout");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu-item-container" }, _attrs))}><div class="ios-icon-wrapper"><div class="ios-icon"><div class="icon-content"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"></path></svg></div></div><div class="icon-reflection"></div></div><p class="icon-label">Sing Out</p></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Components/HomepageApp/Logout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "add title"
    },
    system_version: {
      type: Object,
      default: []
    }
  },
  setup(__props) {
    const menu = usePage().props.navigation.data;
    ref("");
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({ homePage: true }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-screen flex"${_scopeId}><div class="w-full skeleton-bg2 pt-20"${_scopeId}><div class="grid sm:grid-cols-6 grid-cols-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(menu), (item, index) => {
              _push2(ssrRenderComponent(_sfc_main$2, {
                key: index,
                menuItem: item,
                class: "opacity-90"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "h-screen flex" }, [
                createVNode("div", { class: "w-full skeleton-bg2 pt-20" }, [
                  createVNode("div", { class: "grid sm:grid-cols-6 grid-cols-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(menu), (item, index) => {
                      return openBlock(), createBlock(_sfc_main$2, {
                        key: index,
                        menuItem: item,
                        class: "opacity-90"
                      }, null, 8, ["menuItem"]);
                    }), 128)),
                    createVNode(_sfc_main$1)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/BackEnd/Dashboard/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
