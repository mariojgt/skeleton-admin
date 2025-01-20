import { defineComponent, ref, computed, mergeProps, withCtx, unref, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { CreditCard, ShoppingBag } from "lucide-vue-next";
import { _ as _sfc_main$1 } from "./App-CccoNqE7.js";
import _sfc_main$2 from "./SubscriptionManagement-C8RVr8em.js";
import _sfc_main$3 from "./PaidItemsList-CP8Yq6pa.js";
import { usePage } from "@inertiajs/vue3";
import "naive-ui";
import "./FlashMessage-CYVaM9mM.js";
import "./Markdown-D1WgnuMs.js";
import "dompurify";
import "markdown-it";
import "highlight.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./Input-BXi_X4mZ.js";
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
    subscriptions: {
      type: Object,
      default: () => ({})
    },
    paidItems: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const isLoading = ref(false);
    const displaySubscription = ref(false);
    const props = __props;
    const subscription = computed(() => {
      var _a, _b;
      return (_b = (_a = usePage().props.authUserInfo) == null ? void 0 : _a.data) == null ? void 0 : _b.subscription;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        "background-footer-class": "bg-dark-100",
        "header-background": "bg-dark-100",
        "display-loading": isLoading.value,
        "display-subscription": displaySubscription.value,
        onCloseSubscription: ($event) => displaySubscription.value = false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8"${_scopeId}><div class="mb-8 bg-dark-500/90 backdrop-blur-sm rounded-xl border border-gray-800/50 overflow-hidden"${_scopeId}><div class="relative p-6"${_scopeId}><div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"${_scopeId}></div><div class="absolute inset-0 bg-[url(&#39;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+&#39;)] opacity-10"${_scopeId}></div><div class="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6"${_scopeId}><div${_scopeId}><h1 class="text-2xl font-bold text-white"${_scopeId}>My Dashboard</h1><p class="text-gray-400"${_scopeId}>Manage your subscriptions and purchases</p></div><div class="flex gap-3"${_scopeId}>`);
            if (!((_a = subscription.value) == null ? void 0 : _a.plan)) {
              _push2(`<button class="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(CreditCard), { class: "w-4 h-4" }, null, _parent2, _scopeId));
              _push2(` Upgrade Plan </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div><div class="bg-dark-500/90 backdrop-blur-sm rounded-xl border border-gray-800/50 overflow-hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(TabGroup), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="border-b border-gray-800/50"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(TabList), { class: "flex items-center gap-1 px-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Tab), null, {
                          default: withCtx(({ selected }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<button class="${ssrRenderClass([selected ? "text-blue-400" : "text-gray-400 hover:text-white", "relative px-4 py-3 text-sm font-medium transition-all duration-300"])}"${_scopeId4}><div class="flex items-center gap-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(CreditCard), { class: "w-4 h-4" }, null, _parent5, _scopeId4));
                              _push5(` Subscription </div><div class="${ssrRenderClass([selected ? "scale-x-100" : "scale-x-0", "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300"])}"${_scopeId4}></div></button>`);
                            } else {
                              return [
                                createVNode("button", {
                                  class: ["relative px-4 py-3 text-sm font-medium transition-all duration-300", selected ? "text-blue-400" : "text-gray-400 hover:text-white"]
                                }, [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode(unref(CreditCard), { class: "w-4 h-4" }),
                                    createTextVNode(" Subscription ")
                                  ]),
                                  createVNode("div", {
                                    class: ["absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300", selected ? "scale-x-100" : "scale-x-0"]
                                  }, null, 2)
                                ], 2)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Tab), null, {
                          default: withCtx(({ selected }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<button class="${ssrRenderClass([selected ? "text-blue-400" : "text-gray-400 hover:text-white", "relative px-4 py-3 text-sm font-medium transition-all duration-300"])}"${_scopeId4}><div class="flex items-center gap-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(ShoppingBag), { class: "w-4 h-4" }, null, _parent5, _scopeId4));
                              _push5(` Purchases </div><div class="${ssrRenderClass([selected ? "scale-x-100" : "scale-x-0", "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300"])}"${_scopeId4}></div></button>`);
                            } else {
                              return [
                                createVNode("button", {
                                  class: ["relative px-4 py-3 text-sm font-medium transition-all duration-300", selected ? "text-blue-400" : "text-gray-400 hover:text-white"]
                                }, [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode(unref(ShoppingBag), { class: "w-4 h-4" }),
                                    createTextVNode(" Purchases ")
                                  ]),
                                  createVNode("div", {
                                    class: ["absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300", selected ? "scale-x-100" : "scale-x-0"]
                                  }, null, 2)
                                ], 2)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Tab), null, {
                            default: withCtx(({ selected }) => [
                              createVNode("button", {
                                class: ["relative px-4 py-3 text-sm font-medium transition-all duration-300", selected ? "text-blue-400" : "text-gray-400 hover:text-white"]
                              }, [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode(unref(CreditCard), { class: "w-4 h-4" }),
                                  createTextVNode(" Subscription ")
                                ]),
                                createVNode("div", {
                                  class: ["absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300", selected ? "scale-x-100" : "scale-x-0"]
                                }, null, 2)
                              ], 2)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Tab), null, {
                            default: withCtx(({ selected }) => [
                              createVNode("button", {
                                class: ["relative px-4 py-3 text-sm font-medium transition-all duration-300", selected ? "text-blue-400" : "text-gray-400 hover:text-white"]
                              }, [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode(unref(ShoppingBag), { class: "w-4 h-4" }),
                                  createTextVNode(" Purchases ")
                                ]),
                                createVNode("div", {
                                  class: ["absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300", selected ? "scale-x-100" : "scale-x-0"]
                                }, null, 2)
                              ], 2)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(TabPanels), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(TabPanel), { class: "p-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$2, {
                                subscriptions: props.subscriptions,
                                onIsLoading: ($event) => isLoading.value = $event,
                                onDisplaySubscription: ($event) => displaySubscription.value = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$2, {
                                  subscriptions: props.subscriptions,
                                  onIsLoading: ($event) => isLoading.value = $event,
                                  onDisplaySubscription: ($event) => displaySubscription.value = $event
                                }, null, 8, ["subscriptions", "onIsLoading", "onDisplaySubscription"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(TabPanel), { class: "p-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$3, {
                                "paid-items": props.paidItems
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$3, {
                                  "paid-items": props.paidItems
                                }, null, 8, ["paid-items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(TabPanel), { class: "p-6" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2, {
                                subscriptions: props.subscriptions,
                                onIsLoading: ($event) => isLoading.value = $event,
                                onDisplaySubscription: ($event) => displaySubscription.value = $event
                              }, null, 8, ["subscriptions", "onIsLoading", "onDisplaySubscription"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabPanel), { class: "p-6" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$3, {
                                "paid-items": props.paidItems
                              }, null, 8, ["paid-items"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "border-b border-gray-800/50" }, [
                      createVNode(unref(TabList), { class: "flex items-center gap-1 px-4" }, {
                        default: withCtx(() => [
                          createVNode(unref(Tab), null, {
                            default: withCtx(({ selected }) => [
                              createVNode("button", {
                                class: ["relative px-4 py-3 text-sm font-medium transition-all duration-300", selected ? "text-blue-400" : "text-gray-400 hover:text-white"]
                              }, [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode(unref(CreditCard), { class: "w-4 h-4" }),
                                  createTextVNode(" Subscription ")
                                ]),
                                createVNode("div", {
                                  class: ["absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300", selected ? "scale-x-100" : "scale-x-0"]
                                }, null, 2)
                              ], 2)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Tab), null, {
                            default: withCtx(({ selected }) => [
                              createVNode("button", {
                                class: ["relative px-4 py-3 text-sm font-medium transition-all duration-300", selected ? "text-blue-400" : "text-gray-400 hover:text-white"]
                              }, [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode(unref(ShoppingBag), { class: "w-4 h-4" }),
                                  createTextVNode(" Purchases ")
                                ]),
                                createVNode("div", {
                                  class: ["absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300", selected ? "scale-x-100" : "scale-x-0"]
                                }, null, 2)
                              ], 2)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(unref(TabPanels), null, {
                      default: withCtx(() => [
                        createVNode(unref(TabPanel), { class: "p-6" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2, {
                              subscriptions: props.subscriptions,
                              onIsLoading: ($event) => isLoading.value = $event,
                              onDisplaySubscription: ($event) => displaySubscription.value = $event
                            }, null, 8, ["subscriptions", "onIsLoading", "onDisplaySubscription"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(TabPanel), { class: "p-6" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$3, {
                              "paid-items": props.paidItems
                            }, null, 8, ["paid-items"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "mb-8 bg-dark-500/90 backdrop-blur-sm rounded-xl border border-gray-800/50 overflow-hidden" }, [
                  createVNode("div", { class: "relative p-6" }, [
                    createVNode("div", { class: "absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" }),
                    createVNode("div", { class: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" }),
                    createVNode("div", { class: "relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6" }, [
                      createVNode("div", null, [
                        createVNode("h1", { class: "text-2xl font-bold text-white" }, "My Dashboard"),
                        createVNode("p", { class: "text-gray-400" }, "Manage your subscriptions and purchases")
                      ]),
                      createVNode("div", { class: "flex gap-3" }, [
                        !((_b = subscription.value) == null ? void 0 : _b.plan) ? (openBlock(), createBlock("button", {
                          key: 0,
                          onClick: ($event) => displaySubscription.value = true,
                          class: "px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"
                        }, [
                          createVNode(unref(CreditCard), { class: "w-4 h-4" }),
                          createTextVNode(" Upgrade Plan ")
                        ], 8, ["onClick"])) : createCommentVNode("", true)
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-dark-500/90 backdrop-blur-sm rounded-xl border border-gray-800/50 overflow-hidden" }, [
                  createVNode(unref(TabGroup), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "border-b border-gray-800/50" }, [
                        createVNode(unref(TabList), { class: "flex items-center gap-1 px-4" }, {
                          default: withCtx(() => [
                            createVNode(unref(Tab), null, {
                              default: withCtx(({ selected }) => [
                                createVNode("button", {
                                  class: ["relative px-4 py-3 text-sm font-medium transition-all duration-300", selected ? "text-blue-400" : "text-gray-400 hover:text-white"]
                                }, [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode(unref(CreditCard), { class: "w-4 h-4" }),
                                    createTextVNode(" Subscription ")
                                  ]),
                                  createVNode("div", {
                                    class: ["absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300", selected ? "scale-x-100" : "scale-x-0"]
                                  }, null, 2)
                                ], 2)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Tab), null, {
                              default: withCtx(({ selected }) => [
                                createVNode("button", {
                                  class: ["relative px-4 py-3 text-sm font-medium transition-all duration-300", selected ? "text-blue-400" : "text-gray-400 hover:text-white"]
                                }, [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode(unref(ShoppingBag), { class: "w-4 h-4" }),
                                    createTextVNode(" Purchases ")
                                  ]),
                                  createVNode("div", {
                                    class: ["absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300", selected ? "scale-x-100" : "scale-x-0"]
                                  }, null, 2)
                                ], 2)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(unref(TabPanels), null, {
                        default: withCtx(() => [
                          createVNode(unref(TabPanel), { class: "p-6" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2, {
                                subscriptions: props.subscriptions,
                                onIsLoading: ($event) => isLoading.value = $event,
                                onDisplaySubscription: ($event) => displaySubscription.value = $event
                              }, null, 8, ["subscriptions", "onIsLoading", "onDisplaySubscription"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabPanel), { class: "p-6" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$3, {
                                "paid-items": props.paidItems
                              }, null, 8, ["paid-items"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/User/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
