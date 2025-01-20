import { defineComponent, resolveComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./App-CccoNqE7.js";
import { a as _sfc_main$4, _ as _sfc_main$5 } from "./CourseTopic-xkoJuEob.js";
import { P as PostCard } from "./PostCard-KPdxfVV_.js";
import _sfc_main$2 from "./HeroSection01-D6_q5OY9.js";
import _sfc_main$3 from "./HeroSection02-HPHfBzEF.js";
import { BookOpen, Newspaper } from "lucide-vue-next";
import "naive-ui";
import "./FlashMessage-CYVaM9mM.js";
import "@inertiajs/vue3";
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
    },
    sliders: {
      type: Object,
      default: () => ({})
    },
    blogPosts: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Pagination = resolveComponent("Pagination");
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        backgroundFooterClass: "bg-dark-100",
        headerBackground: "bg-dark-100"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-screen bg-gradient-to-b from-dark-100 to-dark-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(`<div class="relative"${_scopeId}><div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-800/5"${_scopeId}></div><div class="absolute inset-0 bg-[url(&#39;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+&#39;)] opacity-10"${_scopeId}></div><div class="relative"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            _push2(`<section class="py-20"${_scopeId}><div class="container px-6 mx-auto"${_scopeId}><div class="bg-dark-400/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-800/50"${_scopeId}><div class="p-10 space-y-12"${_scopeId}><div class="text-center space-y-4"${_scopeId}><h2 class="text-white text-4xl lg:text-6xl font-extrabold drop-shadow-lg inline-flex flex-col items-center gap-2"${_scopeId}> Popular Courses <div class="flex items-center gap-2 text-blue-400"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(BookOpen), { class: "h-8 w-8" }, null, _parent2, _scopeId));
            _push2(`<div class="h-1 w-24 bg-blue-400 rounded-full"${_scopeId}></div></div></h2><p class="text-lg text-neutral-100 max-w-2xl mx-auto"${_scopeId}> Explore our most popular game development courses and start your journey today </p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"${_scopeId}><!--[-->`);
            ssrRenderList(props.courses.data, (course) => {
              _push2(ssrRenderComponent(_sfc_main$4, {
                key: course.id,
                record: course,
                displayDifficulty: false
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></div></div></section>`);
            _push2(ssrRenderComponent(_sfc_main$5, { class: "py-20" }, null, _parent2, _scopeId));
            _push2(`<section class="py-20"${_scopeId}><div class="container mx-auto px-6"${_scopeId}><div class="space-y-12"${_scopeId}><div class="text-center space-y-4"${_scopeId}><h2 class="text-white text-4xl lg:text-6xl font-extrabold drop-shadow-lg inline-flex flex-col items-center gap-2"${_scopeId}> Latest News <div class="flex items-center gap-2 text-green-400"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Newspaper), { class: "h-8 w-8" }, null, _parent2, _scopeId));
            _push2(`<div class="h-1 w-24 bg-green-400 rounded-full"${_scopeId}></div></div></h2><p class="text-lg text-neutral-100 max-w-2xl mx-auto"${_scopeId}> Explore the latest news and updates from the game development world </p></div><div class="grid gap-8 lg:grid-cols-2"${_scopeId}><!--[-->`);
            ssrRenderList(props.blogPosts.data, (item, index) => {
              _push2(ssrRenderComponent(PostCard, {
                key: index,
                record: item,
                class: "bg-dark-500/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer border border-gray-800/50 rounded-xl"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Pagination, {
              pagination: props.blogPosts.meta
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></section></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-screen bg-gradient-to-b from-dark-100 to-dark-300" }, [
                createVNode(_sfc_main$2),
                createVNode("div", { class: "relative" }, [
                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-800/5" }),
                  createVNode("div", { class: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" }),
                  createVNode("div", { class: "relative" }, [
                    createVNode(_sfc_main$3),
                    createVNode("section", { class: "py-20" }, [
                      createVNode("div", { class: "container px-6 mx-auto" }, [
                        createVNode("div", { class: "bg-dark-400/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-800/50" }, [
                          createVNode("div", { class: "p-10 space-y-12" }, [
                            createVNode("div", { class: "text-center space-y-4" }, [
                              createVNode("h2", { class: "text-white text-4xl lg:text-6xl font-extrabold drop-shadow-lg inline-flex flex-col items-center gap-2" }, [
                                createTextVNode(" Popular Courses "),
                                createVNode("div", { class: "flex items-center gap-2 text-blue-400" }, [
                                  createVNode(unref(BookOpen), { class: "h-8 w-8" }),
                                  createVNode("div", { class: "h-1 w-24 bg-blue-400 rounded-full" })
                                ])
                              ]),
                              createVNode("p", { class: "text-lg text-neutral-100 max-w-2xl mx-auto" }, " Explore our most popular game development courses and start your journey today ")
                            ]),
                            createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-8" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(props.courses.data, (course) => {
                                return openBlock(), createBlock(_sfc_main$4, {
                                  key: course.id,
                                  record: course,
                                  displayDifficulty: false
                                }, null, 8, ["record"]);
                              }), 128))
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode(_sfc_main$5, { class: "py-20" }),
                    createVNode("section", { class: "py-20" }, [
                      createVNode("div", { class: "container mx-auto px-6" }, [
                        createVNode("div", { class: "space-y-12" }, [
                          createVNode("div", { class: "text-center space-y-4" }, [
                            createVNode("h2", { class: "text-white text-4xl lg:text-6xl font-extrabold drop-shadow-lg inline-flex flex-col items-center gap-2" }, [
                              createTextVNode(" Latest News "),
                              createVNode("div", { class: "flex items-center gap-2 text-green-400" }, [
                                createVNode(unref(Newspaper), { class: "h-8 w-8" }),
                                createVNode("div", { class: "h-1 w-24 bg-green-400 rounded-full" })
                              ])
                            ]),
                            createVNode("p", { class: "text-lg text-neutral-100 max-w-2xl mx-auto" }, " Explore the latest news and updates from the game development world ")
                          ]),
                          createVNode("div", { class: "grid gap-8 lg:grid-cols-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(props.blogPosts.data, (item, index) => {
                              return openBlock(), createBlock(PostCard, {
                                key: index,
                                record: item,
                                class: "bg-dark-500/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer border border-gray-800/50 rounded-xl"
                              }, null, 8, ["record"]);
                            }), 128))
                          ]),
                          createVNode("div", { class: "flex justify-center" }, [
                            createVNode(_component_Pagination, {
                              pagination: props.blogPosts.meta
                            }, null, 8, ["pagination"])
                          ])
                        ])
                      ])
                    ])
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
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Home/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
