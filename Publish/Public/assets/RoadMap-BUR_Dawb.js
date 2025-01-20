import { mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./App-CccoNqE7.js";
import { ChartNoAxesGantt } from "lucide-vue-next";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "naive-ui";
import "./FlashMessage-CYVaM9mM.js";
import "@inertiajs/vue3";
import "./Markdown-D1WgnuMs.js";
import "dompurify";
import "markdown-it";
import "highlight.js";
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
const _sfc_main = {
  __name: "RoadMap",
  __ssrInlineRender: true,
  setup(__props) {
    const roadmapData = [
      {
        version: "1.0.0",
        date: /* @__PURE__ */ new Date("2025-01-02"),
        type: "major",
        changes: [
          {
            type: "feature",
            description: "Initial product launch",
            details: "Core functionality and basic user interface implemented"
          },
          {
            type: "other",
            description: "Website and core services go live"
          }
        ]
      },
      {
        version: "1.1.0",
        date: /* @__PURE__ */ new Date("2025-01-03"),
        type: "minor",
        changes: [
          {
            type: "improvement",
            description: "Performance optimization",
            details: "Reduced page load times by 35%"
          },
          {
            type: "feature",
            description: "Added dark mode support",
            details: "Comprehensive theme switching capabilities"
          }
        ]
      },
      {
        version: "1.1.1",
        date: /* @__PURE__ */ new Date("2025-01-04"),
        type: "minor",
        changes: [
          {
            type: "bugfix",
            description: "Fixed critical login authentication issue",
            details: "Resolved intermittent session timeout problems"
          }
        ]
      },
      {
        version: "1.1.2",
        date: /* @__PURE__ */ new Date("2025-01-08"),
        type: "minor",
        changes: [
          {
            type: "improvement",
            description: "Performance optimization",
            details: "Reduced page load times by 35%"
          },
          {
            type: "feature",
            description: "Added dark mode support",
            details: "Comprehensive theme switching capabilities"
          },
          {
            type: "update",
            description: "Fixed critical login authentication issue",
            details: "Resolved intermittent session timeout problems"
          }
        ]
      },
      {
        version: "1.2.0",
        date: /* @__PURE__ */ new Date("2025-01-10"),
        type: "minor",
        changes: [
          {
            type: "feature",
            description: "Added support to add code to comments",
            details: "Enhanced user experience for developers"
          },
          {
            type: "improvement",
            description: "Added new desing for the forum",
            details: "Improved user interface and user experience"
          },
          {
            type: "feature",
            description: "Added new pages for the privacy policy, terms of service and comunity guidelines",
            details: "Improved user experience and legal compliance"
          }
        ]
      },
      {
        version: "1.3.0",
        date: /* @__PURE__ */ new Date("2025-01-16"),
        type: "patch",
        changes: [
          {
            type: "feature",
            description: "Added support to add code to comments",
            details: "Enhanced user experience for users"
          },
          {
            type: "improvement",
            description: "Added new desing for the forum",
            details: "Improved user interface and user experience"
          },
          {
            type: "feature",
            description: "Added new pages for the privacy policy, terms of service and comunity guidelines",
            details: "Improved user experience and legal compliance"
          },
          {
            type: "bugfix",
            description: "Fixed critical issue with the product page",
            details: "Resolved issue when user paying for the product"
          }
        ]
      }
    ];
    const formatDate = (date) => {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        backgroundFooterClass: "bg-dark-100",
        headerBackground: "bg-dark-100"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-screen bg-dark-100" data-v-51fb2c2f${_scopeId}><div class="relative overflow-hidden bg-dark-500/90 backdrop-blur-sm border-b border-gray-800/50" data-v-51fb2c2f${_scopeId}><div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5" data-v-51fb2c2f${_scopeId}></div><div class="absolute inset-0 bg-[url(&#39;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+&#39;)] opacity-10" data-v-51fb2c2f${_scopeId}></div><div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center" data-v-51fb2c2f${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ChartNoAxesGantt), { class: "w-16 h-16 text-blue-400 mx-auto mb-4" }, null, _parent2, _scopeId));
            _push2(`<h1 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl" data-v-51fb2c2f${_scopeId}>Product Roadmap</h1><p class="mt-4 max-w-3xl mx-auto text-xl text-gray-300" data-v-51fb2c2f${_scopeId}>Our journey of continuous improvement and innovation</p></div></div><div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8" data-v-51fb2c2f${_scopeId}><div class="space-y-8" data-v-51fb2c2f${_scopeId}><div class="relative" data-v-51fb2c2f${_scopeId}><div class="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-700 h-full" data-v-51fb2c2f${_scopeId}></div><div class="space-y-8" data-v-51fb2c2f${_scopeId}><!--[-->`);
            ssrRenderList(roadmapData, (version, index) => {
              _push2(`<div class="${ssrRenderClass([index % 2 === 0 ? "flex-row-reverse" : "", "relative flex items-center"])}" data-v-51fb2c2f${_scopeId}><div class="${ssrRenderClass([version.type === "major" ? "bg-blue-500" : version.type === "minor" ? "bg-green-500" : "bg-gray-500", "absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full"])}" data-v-51fb2c2f${_scopeId}></div><div class="${ssrRenderClass([index % 2 === 0 ? "mr-auto pl-12" : "ml-auto pr-12", "w-1/2 p-6 bg-dark-500/50 backdrop-blur-sm rounded-xl border border-gray-800/50 shadow-lg"])}" data-v-51fb2c2f${_scopeId}><div class="flex justify-between items-center mb-4" data-v-51fb2c2f${_scopeId}><h3 class="text-xl font-bold text-white" data-v-51fb2c2f${_scopeId}> Version ${ssrInterpolate(version.version)}</h3><span class="text-sm text-gray-400" data-v-51fb2c2f${_scopeId}>${ssrInterpolate(formatDate(version.date))}</span></div><div class="space-y-3" data-v-51fb2c2f${_scopeId}><!--[-->`);
              ssrRenderList(version.changes, (change, changeIndex) => {
                _push2(`<div class="flex items-start space-x-2" data-v-51fb2c2f${_scopeId}><div class="${ssrRenderClass([{
                  "bg-blue-400": change.type === "feature",
                  "bg-green-400": change.type === "improvement",
                  "bg-red-400": change.type === "bugfix",
                  "bg-gray-400": change.type === "other"
                }, "w-2 h-2 mt-2 rounded-full"])}" data-v-51fb2c2f${_scopeId}></div><p class="text-gray-300" data-v-51fb2c2f${_scopeId}>${ssrInterpolate(change.description)} `);
                if (change.details) {
                  _push2(`<span class="text-sm text-gray-500 block mt-1" data-v-51fb2c2f${_scopeId}>${ssrInterpolate(change.details)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</p></div>`);
              });
              _push2(`<!--]--></div></div></div>`);
            });
            _push2(`<!--]--></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-screen bg-dark-100" }, [
                createVNode("div", { class: "relative overflow-hidden bg-dark-500/90 backdrop-blur-sm border-b border-gray-800/50" }, [
                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5" }),
                  createVNode("div", { class: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" }),
                  createVNode("div", { class: "relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center" }, [
                    createVNode(unref(ChartNoAxesGantt), { class: "w-16 h-16 text-blue-400 mx-auto mb-4" }),
                    createVNode("h1", { class: "text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl" }, "Product Roadmap"),
                    createVNode("p", { class: "mt-4 max-w-3xl mx-auto text-xl text-gray-300" }, "Our journey of continuous improvement and innovation")
                  ])
                ]),
                createVNode("div", { class: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8" }, [
                  createVNode("div", { class: "space-y-8" }, [
                    createVNode("div", { class: "relative" }, [
                      createVNode("div", { class: "absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-700 h-full" }),
                      createVNode("div", { class: "space-y-8" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(roadmapData, (version, index) => {
                          return createVNode("div", {
                            key: version.version,
                            class: ["relative flex items-center", index % 2 === 0 ? "flex-row-reverse" : ""]
                          }, [
                            createVNode("div", {
                              class: ["absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full", version.type === "major" ? "bg-blue-500" : version.type === "minor" ? "bg-green-500" : "bg-gray-500"]
                            }, null, 2),
                            createVNode("div", {
                              class: ["w-1/2 p-6 bg-dark-500/50 backdrop-blur-sm rounded-xl border border-gray-800/50 shadow-lg", index % 2 === 0 ? "mr-auto pl-12" : "ml-auto pr-12"]
                            }, [
                              createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                                createVNode("h3", { class: "text-xl font-bold text-white" }, " Version " + toDisplayString(version.version), 1),
                                createVNode("span", { class: "text-sm text-gray-400" }, toDisplayString(formatDate(version.date)), 1)
                              ]),
                              createVNode("div", { class: "space-y-3" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(version.changes, (change, changeIndex) => {
                                  return openBlock(), createBlock("div", {
                                    key: changeIndex,
                                    class: "flex items-start space-x-2"
                                  }, [
                                    createVNode("div", {
                                      class: ["w-2 h-2 mt-2 rounded-full", {
                                        "bg-blue-400": change.type === "feature",
                                        "bg-green-400": change.type === "improvement",
                                        "bg-red-400": change.type === "bugfix",
                                        "bg-gray-400": change.type === "other"
                                      }]
                                    }, null, 2),
                                    createVNode("p", { class: "text-gray-300" }, [
                                      createTextVNode(toDisplayString(change.description) + " ", 1),
                                      change.details ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "text-sm text-gray-500 block mt-1"
                                      }, toDisplayString(change.details), 1)) : createCommentVNode("", true)
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ], 2)
                          ], 2);
                        }), 64))
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
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Legal/RoadMap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RoadMap = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-51fb2c2f"]]);
export {
  RoadMap as default
};
