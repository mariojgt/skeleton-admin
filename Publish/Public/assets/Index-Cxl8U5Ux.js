import { defineComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./App-CccoNqE7.js";
import { P as PostCard } from "./PostCard-KPdxfVV_.js";
import { _ as _sfc_main$2 } from "./Pagination-C1hOKcwe.js";
import "naive-ui";
import "./FlashMessage-CYVaM9mM.js";
import "@inertiajs/vue3";
import "lucide-vue-next";
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
import "./axios-BWWnXGbF.js";
import "axios";
import "../Frontend_js.js";
import "./index-koWuargk.js";
import "./Money-B84zS3T2.js";
import "./SeoManager-ytA6mF8s.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    blogPosts: {
      type: Object,
      default: () => ({})
    },
    courses: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        backgroundFooterClass: "bg-dark-100",
        headerBackground: "bg-dark-100"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="bg-dark-200 py-8 px-4 mx-auto lg:py-16 lg:px-6"${_scopeId}><div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16"${_scopeId}><h2 class="text-white text-6xl lg:text-8xl mb-4 font-extrabold drop-shadow-lg"${_scopeId}> News </h2><p class="font-light text-neutral text-sm lg:text-xl"${_scopeId}> Check out our latest news and articles, we have a lot of interesting topics for you. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"${_scopeId}><!--[-->`);
            ssrRenderList(props.blogPosts.data, (item) => {
              _push2(ssrRenderComponent(PostCard, {
                key: item.id,
                record: item
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            if (props.blogPosts.meta.last_page > 1) {
              _push2(`<div class="max-w-3xl mx-auto px-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                pagination: props.blogPosts.meta,
                class: "pt-8 border-t border-dark-700"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</section><hr class="theme-divider"${_scopeId}>`);
          } else {
            return [
              createVNode("section", { class: "bg-dark-200 py-8 px-4 mx-auto lg:py-16 lg:px-6" }, [
                createVNode("div", { class: "mx-auto max-w-screen-sm text-center mb-8 lg:mb-16" }, [
                  createVNode("h2", { class: "text-white text-6xl lg:text-8xl mb-4 font-extrabold drop-shadow-lg" }, " News "),
                  createVNode("p", { class: "font-light text-neutral text-sm lg:text-xl" }, " Check out our latest news and articles, we have a lot of interesting topics for you. ")
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(props.blogPosts.data, (item) => {
                    return openBlock(), createBlock(PostCard, {
                      key: item.id,
                      record: item
                    }, null, 8, ["record"]);
                  }), 128))
                ]),
                props.blogPosts.meta.last_page > 1 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "max-w-3xl mx-auto px-4"
                }, [
                  createVNode(_sfc_main$2, {
                    pagination: props.blogPosts.meta,
                    class: "pt-8 border-t border-dark-700"
                  }, null, 8, ["pagination"])
                ])) : createCommentVNode("", true)
              ]),
              createVNode("hr", { class: "theme-divider" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Blog/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
