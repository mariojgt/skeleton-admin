import { withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./App-CccoNqE7.js";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { User, Shield, KeyRound } from "lucide-vue-next";
import EditDetails from "./EditDetails-C619MRnt.js";
import PasswordUpdate from "./PasswordUpdate-D50Ukp4I.js";
import AutenticatorManager from "./AutenticatorManager-DFNiVGku.js";
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
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    autenticator: {
      type: Object,
      default: () => ({})
    },
    user: {
      type: Object,
      default: () => ({})
    },
    extraLinks: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8"${_scopeId}><div class="mb-8 bg-dark-500/90 backdrop-blur-sm rounded-xl border border-gray-800/50 overflow-hidden"${_scopeId}><div class="relative p-6"${_scopeId}><div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"${_scopeId}></div><div class="absolute inset-0 bg-[url(&#39;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+&#39;)] opacity-10"${_scopeId}></div><div class="relative flex items-center gap-6"${_scopeId}><div class="relative"${_scopeId}><div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-75 blur"${_scopeId}></div><div class="relative w-20 h-20 rounded-full overflow-hidden border-2 border-dark-400"${_scopeId}><img${ssrRenderAttr("src", props.user.data.avatar)}${ssrRenderAttr("alt", props.user.data.name)} class="w-full h-full object-cover"${_scopeId}></div></div><div${_scopeId}><h1 class="text-2xl font-bold text-white"${_scopeId}>${ssrInterpolate(props.user.data.name)}</h1><p class="text-gray-400"${_scopeId}>${ssrInterpolate(props.user.data.email)}</p></div></div></div></div><div class="bg-dark-500/90 backdrop-blur-sm rounded-xl border border-gray-800/50 overflow-hidden"${_scopeId}>`);
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
                              _push5(ssrRenderComponent(unref(User), { class: "w-4 h-4" }, null, _parent5, _scopeId4));
                              _push5(` Details </div><div class="${ssrRenderClass([selected ? "scale-x-100" : "scale-x-0", "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300"])}"${_scopeId4}></div></button>`);
                            } else {
                              return [
                                createVNode("button", {
                                  class: ["relative px-4 py-3 text-sm font-medium transition-all duration-300", selected ? "text-blue-400" : "text-gray-400 hover:text-white"]
                                }, [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode(unref(User), { class: "w-4 h-4" }),
                                    createTextVNode(" Details ")
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
                              _push5(ssrRenderComponent(unref(Shield), { class: "w-4 h-4" }, null, _parent5, _scopeId4));
                              _push5(` Security </div><div class="${ssrRenderClass([selected ? "scale-x-100" : "scale-x-0", "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300"])}"${_scopeId4}></div></button>`);
                            } else {
                              return [
                                createVNode("button", {
                                  class: ["relative px-4 py-3 text-sm font-medium transition-all duration-300", selected ? "text-blue-400" : "text-gray-400 hover:text-white"]
                                }, [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode(unref(Shield), { class: "w-4 h-4" }),
                                    createTextVNode(" Security ")
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
                              _push5(ssrRenderComponent(unref(KeyRound), { class: "w-4 h-4" }, null, _parent5, _scopeId4));
                              _push5(` 2FA </div><div class="${ssrRenderClass([selected ? "scale-x-100" : "scale-x-0", "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300"])}"${_scopeId4}></div></button>`);
                            } else {
                              return [
                                createVNode("button", {
                                  class: ["relative px-4 py-3 text-sm font-medium transition-all duration-300", selected ? "text-blue-400" : "text-gray-400 hover:text-white"]
                                }, [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode(unref(KeyRound), { class: "w-4 h-4" }),
                                    createTextVNode(" 2FA ")
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
                        _push4(`<!--[-->`);
                        ssrRenderList(__props.extraLinks, (item, index) => {
                          _push4(ssrRenderComponent(unref(Link), {
                            href: item,
                            class: "relative px-4 py-3 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(index)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(index), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(unref(Tab), null, {
                            default: withCtx(({ selected }) => [
                              createVNode("button", {
                                class: ["relative px-4 py-3 text-sm font-medium transition-all duration-300", selected ? "text-blue-400" : "text-gray-400 hover:text-white"]
                              }, [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode(unref(User), { class: "w-4 h-4" }),
                                  createTextVNode(" Details ")
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
                                  createVNode(unref(Shield), { class: "w-4 h-4" }),
                                  createTextVNode(" Security ")
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
                                  createVNode(unref(KeyRound), { class: "w-4 h-4" }),
                                  createTextVNode(" 2FA ")
                                ]),
                                createVNode("div", {
                                  class: ["absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300", selected ? "scale-x-100" : "scale-x-0"]
                                }, null, 2)
                              ], 2)
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.extraLinks, (item, index) => {
                            return openBlock(), createBlock(unref(Link), {
                              key: index,
                              href: item,
                              class: "relative px-4 py-3 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(index), 1)
                              ]),
                              _: 2
                            }, 1032, ["href"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(TabPanels), { class: "p-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(TabPanel), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(EditDetails, {
                                "user-info": props.user.data
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(EditDetails, {
                                  "user-info": props.user.data
                                }, null, 8, ["user-info"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(TabPanel), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(PasswordUpdate, {
                                "user-info": props.user.data,
                                "autenticator-info": props.autenticator
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(PasswordUpdate, {
                                  "user-info": props.user.data,
                                  "autenticator-info": props.autenticator
                                }, null, 8, ["user-info", "autenticator-info"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(TabPanel), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(AutenticatorManager, {
                                "user-info": props.user.data,
                                "autenticator-info": props.autenticator
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(AutenticatorManager, {
                                  "user-info": props.user.data,
                                  "autenticator-info": props.autenticator
                                }, null, 8, ["user-info", "autenticator-info"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(TabPanel), null, {
                            default: withCtx(() => [
                              createVNode(EditDetails, {
                                "user-info": props.user.data
                              }, null, 8, ["user-info"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabPanel), null, {
                            default: withCtx(() => [
                              createVNode(PasswordUpdate, {
                                "user-info": props.user.data,
                                "autenticator-info": props.autenticator
                              }, null, 8, ["user-info", "autenticator-info"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabPanel), null, {
                            default: withCtx(() => [
                              createVNode(AutenticatorManager, {
                                "user-info": props.user.data,
                                "autenticator-info": props.autenticator
                              }, null, 8, ["user-info", "autenticator-info"])
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
                                  createVNode(unref(User), { class: "w-4 h-4" }),
                                  createTextVNode(" Details ")
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
                                  createVNode(unref(Shield), { class: "w-4 h-4" }),
                                  createTextVNode(" Security ")
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
                                  createVNode(unref(KeyRound), { class: "w-4 h-4" }),
                                  createTextVNode(" 2FA ")
                                ]),
                                createVNode("div", {
                                  class: ["absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300", selected ? "scale-x-100" : "scale-x-0"]
                                }, null, 2)
                              ], 2)
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.extraLinks, (item, index) => {
                            return openBlock(), createBlock(unref(Link), {
                              key: index,
                              href: item,
                              class: "relative px-4 py-3 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(index), 1)
                              ]),
                              _: 2
                            }, 1032, ["href"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(unref(TabPanels), { class: "p-6" }, {
                      default: withCtx(() => [
                        createVNode(unref(TabPanel), null, {
                          default: withCtx(() => [
                            createVNode(EditDetails, {
                              "user-info": props.user.data
                            }, null, 8, ["user-info"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(TabPanel), null, {
                          default: withCtx(() => [
                            createVNode(PasswordUpdate, {
                              "user-info": props.user.data,
                              "autenticator-info": props.autenticator
                            }, null, 8, ["user-info", "autenticator-info"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(TabPanel), null, {
                          default: withCtx(() => [
                            createVNode(AutenticatorManager, {
                              "user-info": props.user.data,
                              "autenticator-info": props.autenticator
                            }, null, 8, ["user-info", "autenticator-info"])
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
                    createVNode("div", { class: "relative flex items-center gap-6" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode("div", { class: "absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-75 blur" }),
                        createVNode("div", { class: "relative w-20 h-20 rounded-full overflow-hidden border-2 border-dark-400" }, [
                          createVNode("img", {
                            src: props.user.data.avatar,
                            alt: props.user.data.name,
                            class: "w-full h-full object-cover"
                          }, null, 8, ["src", "alt"])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("h1", { class: "text-2xl font-bold text-white" }, toDisplayString(props.user.data.name), 1),
                        createVNode("p", { class: "text-gray-400" }, toDisplayString(props.user.data.email), 1)
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
                                    createVNode(unref(User), { class: "w-4 h-4" }),
                                    createTextVNode(" Details ")
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
                                    createVNode(unref(Shield), { class: "w-4 h-4" }),
                                    createTextVNode(" Security ")
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
                                    createVNode(unref(KeyRound), { class: "w-4 h-4" }),
                                    createTextVNode(" 2FA ")
                                  ]),
                                  createVNode("div", {
                                    class: ["absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300", selected ? "scale-x-100" : "scale-x-0"]
                                  }, null, 2)
                                ], 2)
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.extraLinks, (item, index) => {
                              return openBlock(), createBlock(unref(Link), {
                                key: index,
                                href: item,
                                class: "relative px-4 py-3 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(index), 1)
                                ]),
                                _: 2
                              }, 1032, ["href"]);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(unref(TabPanels), { class: "p-6" }, {
                        default: withCtx(() => [
                          createVNode(unref(TabPanel), null, {
                            default: withCtx(() => [
                              createVNode(EditDetails, {
                                "user-info": props.user.data
                              }, null, 8, ["user-info"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabPanel), null, {
                            default: withCtx(() => [
                              createVNode(PasswordUpdate, {
                                "user-info": props.user.data,
                                "autenticator-info": props.autenticator
                              }, null, 8, ["user-info", "autenticator-info"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabPanel), null, {
                            default: withCtx(() => [
                              createVNode(AutenticatorManager, {
                                "user-info": props.user.data,
                                "autenticator-info": props.autenticator
                              }, null, 8, ["user-info", "autenticator-info"])
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
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/User/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
