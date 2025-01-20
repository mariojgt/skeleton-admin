import { defineComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./App-CccoNqE7.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./CourseTopic-xkoJuEob.js";
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
import "./DifficultLevel-BY7tDA_1.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
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
            _push2(`<section class="bg-dark-100"${_scopeId}><div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { routeReload: "course.index" }, null, _parent2, _scopeId));
            if (props.courses.data[0]) {
              _push2(`<div class="grid gap-8 mb-6 lg:mb-16 grid-cols-1 md:md:grid-cols-2 lg:md:grid-cols-3"${_scopeId}><!--[-->`);
              ssrRenderList(props.courses.data, (course) => {
                _push2(ssrRenderComponent(_sfc_main$3, {
                  key: course.id,
                  record: course
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="flex justify-center items-center h-28 bg-dark-300"${_scopeId}><p class="text-2xl font-bold text-neutral"${_scopeId}>No courses found</p></div>`);
            }
            _push2(`</div></section>`);
          } else {
            return [
              createVNode("section", { class: "bg-dark-100" }, [
                createVNode("div", { class: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6" }, [
                  createVNode(_sfc_main$2, { routeReload: "course.index" }),
                  props.courses.data[0] ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "grid gap-8 mb-6 lg:mb-16 grid-cols-1 md:md:grid-cols-2 lg:md:grid-cols-3"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(props.courses.data, (course) => {
                      return openBlock(), createBlock(_sfc_main$3, {
                        key: course.id,
                        record: course
                      }, null, 8, ["record"]);
                    }), 128))
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex justify-center items-center h-28 bg-dark-300"
                  }, [
                    createVNode("p", { class: "text-2xl font-bold text-neutral" }, "No courses found")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Course/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
