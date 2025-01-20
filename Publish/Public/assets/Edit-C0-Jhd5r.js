import { resolveComponent, withCtx, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import "@inertiajs/vue3";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { _ as _sfc_main$1 } from "./App-DeZIQ0nQ.js";
import _sfc_main$2 from "./EditDetails-Bj_efCUx.js";
import _sfc_main$3 from "./PasswordUpdate-DeEjaJep.js";
import _sfc_main$4 from "./AutenticatorManager-Ca1nB9QA.js";
import "naive-ui";
import "./FlashMessage-C9hwciIU.js";
import "axios";
import "lucide-vue-next";
import "lodash/debounce.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./Input-BXi_X4mZ.js";
import "dompurify";
import "marked";
import "turndown";
import "date-fns";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    autenticator: {
      type: Object,
      default: () => ({})
    },
    admin: {
      type: Object,
      default: () => ({}),
      default: {}
    },
    roles: {
      type: Object,
      default: () => ({}),
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_card = resolveComponent("n-card");
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_card, {
              title: "User Profile",
              class: "card col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TabGroup), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(TabList), { class: "flex space-x-1 rounded-xl p-1 tabs" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Tab), null, {
                                default: withCtx(({ selected }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<a class="${ssrRenderClass([selected ? "tab-active" : "", "tab tab-lg tab-bordered"])}"${_scopeId5}>Deatils</a>`);
                                  } else {
                                    return [
                                      createVNode("a", {
                                        class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                                      }, "Deatils", 2)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Tab), null, {
                                default: withCtx(({ selected }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<a class="${ssrRenderClass([selected ? "tab-active" : "", "tab tab-lg tab-bordered"])}"${_scopeId5}>Security</a>`);
                                  } else {
                                    return [
                                      createVNode("a", {
                                        class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                                      }, "Security", 2)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Tab), null, {
                                default: withCtx(({ selected }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<a class="${ssrRenderClass([selected ? "tab-active" : "", "tab tab-lg tab-bordered"])}"${_scopeId5}>2fa</a>`);
                                  } else {
                                    return [
                                      createVNode("a", {
                                        class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                                      }, "2fa", 2)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Tab), null, {
                                  default: withCtx(({ selected }) => [
                                    createVNode("a", {
                                      class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                                    }, "Deatils", 2)
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Tab), null, {
                                  default: withCtx(({ selected }) => [
                                    createVNode("a", {
                                      class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                                    }, "Security", 2)
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Tab), null, {
                                  default: withCtx(({ selected }) => [
                                    createVNode("a", {
                                      class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                                    }, "2fa", 2)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(TabPanels), { class: "mt-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(TabPanel), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$2, {
                                      "admin-info": props.admin.data,
                                      roles: props.roles
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$2, {
                                        "admin-info": props.admin.data,
                                        roles: props.roles
                                      }, null, 8, ["admin-info", "roles"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(TabPanel), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$3, {
                                      "admin-info": props.admin.data,
                                      "autenticator-info": props.autenticator
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$3, {
                                        "admin-info": props.admin.data,
                                        "autenticator-info": props.autenticator
                                      }, null, 8, ["admin-info", "autenticator-info"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(TabPanel), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$4, {
                                      "admin-info": props.admin.data,
                                      autenticator: props.autenticator
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$4, {
                                        "admin-info": props.admin.data,
                                        autenticator: props.autenticator
                                      }, null, 8, ["admin-info", "autenticator"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(TabPanel), null, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$2, {
                                      "admin-info": props.admin.data,
                                      roles: props.roles
                                    }, null, 8, ["admin-info", "roles"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(TabPanel), null, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$3, {
                                      "admin-info": props.admin.data,
                                      "autenticator-info": props.autenticator
                                    }, null, 8, ["admin-info", "autenticator-info"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(TabPanel), null, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$4, {
                                      "admin-info": props.admin.data,
                                      autenticator: props.autenticator
                                    }, null, 8, ["admin-info", "autenticator"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(TabList), { class: "flex space-x-1 rounded-xl p-1 tabs" }, {
                            default: withCtx(() => [
                              createVNode(unref(Tab), null, {
                                default: withCtx(({ selected }) => [
                                  createVNode("a", {
                                    class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                                  }, "Deatils", 2)
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Tab), null, {
                                default: withCtx(({ selected }) => [
                                  createVNode("a", {
                                    class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                                  }, "Security", 2)
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Tab), null, {
                                default: withCtx(({ selected }) => [
                                  createVNode("a", {
                                    class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                                  }, "2fa", 2)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabPanels), { class: "mt-2" }, {
                            default: withCtx(() => [
                              createVNode(unref(TabPanel), null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$2, {
                                    "admin-info": props.admin.data,
                                    roles: props.roles
                                  }, null, 8, ["admin-info", "roles"])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(TabPanel), null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$3, {
                                    "admin-info": props.admin.data,
                                    "autenticator-info": props.autenticator
                                  }, null, 8, ["admin-info", "autenticator-info"])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(TabPanel), null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$4, {
                                    "admin-info": props.admin.data,
                                    autenticator: props.autenticator
                                  }, null, 8, ["admin-info", "autenticator"])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(TabGroup), null, {
                      default: withCtx(() => [
                        createVNode(unref(TabList), { class: "flex space-x-1 rounded-xl p-1 tabs" }, {
                          default: withCtx(() => [
                            createVNode(unref(Tab), null, {
                              default: withCtx(({ selected }) => [
                                createVNode("a", {
                                  class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                                }, "Deatils", 2)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Tab), null, {
                              default: withCtx(({ selected }) => [
                                createVNode("a", {
                                  class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                                }, "Security", 2)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Tab), null, {
                              default: withCtx(({ selected }) => [
                                createVNode("a", {
                                  class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                                }, "2fa", 2)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(TabPanels), { class: "mt-2" }, {
                          default: withCtx(() => [
                            createVNode(unref(TabPanel), null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$2, {
                                  "admin-info": props.admin.data,
                                  roles: props.roles
                                }, null, 8, ["admin-info", "roles"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(TabPanel), null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$3, {
                                  "admin-info": props.admin.data,
                                  "autenticator-info": props.autenticator
                                }, null, 8, ["admin-info", "autenticator-info"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(TabPanel), null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$4, {
                                  "admin-info": props.admin.data,
                                  autenticator: props.autenticator
                                }, null, 8, ["admin-info", "autenticator"])
                              ]),
                              _: 1
                            })
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
          } else {
            return [
              createVNode(_component_n_card, {
                title: "User Profile",
                class: "card col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-300"
              }, {
                default: withCtx(() => [
                  createVNode(unref(TabGroup), null, {
                    default: withCtx(() => [
                      createVNode(unref(TabList), { class: "flex space-x-1 rounded-xl p-1 tabs" }, {
                        default: withCtx(() => [
                          createVNode(unref(Tab), null, {
                            default: withCtx(({ selected }) => [
                              createVNode("a", {
                                class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                              }, "Deatils", 2)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Tab), null, {
                            default: withCtx(({ selected }) => [
                              createVNode("a", {
                                class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                              }, "Security", 2)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Tab), null, {
                            default: withCtx(({ selected }) => [
                              createVNode("a", {
                                class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                              }, "2fa", 2)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(TabPanels), { class: "mt-2" }, {
                        default: withCtx(() => [
                          createVNode(unref(TabPanel), null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2, {
                                "admin-info": props.admin.data,
                                roles: props.roles
                              }, null, 8, ["admin-info", "roles"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabPanel), null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$3, {
                                "admin-info": props.admin.data,
                                "autenticator-info": props.autenticator
                              }, null, 8, ["admin-info", "autenticator-info"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabPanel), null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4, {
                                "admin-info": props.admin.data,
                                autenticator: props.autenticator
                              }, null, 8, ["admin-info", "autenticator"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
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
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/BackEnd/Admin/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
