import { ref, onMounted, resolveComponent, withCtx, unref, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, toDisplayString, withDirectives, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./App-DeZIQ0nQ.js";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { I as InputField, a as _sfc_main$2 } from "./Input-BXi_X4mZ.js";
import "naive-ui";
import "./FlashMessage-C9hwciIU.js";
import "axios";
import "lucide-vue-next";
import "lodash/debounce.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "dompurify";
import "marked";
import "turndown";
import "date-fns";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    role: {
      type: Object,
      default: () => ({})
    },
    permissions: {
      type: Object,
      default: () => ({})
    },
    rolePermissions: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    let roleInformation = ref([]);
    let rolePer = ref([]);
    onMounted(() => {
      roleInformation.value = props.role;
      rolePer.value = props.rolePermissions;
    });
    const submitForm = () => {
      const form = {
        name: roleInformation.value.name,
        guard_name: roleInformation.value.guard_name
      };
      router.patch(route("admin.role.update", roleInformation.value.id), form);
    };
    const autoSubmitPer = () => {
      const form = {
        permissions: rolePer.value
      };
      router.patch(route("admin.role.perm.update", roleInformation.value.id), form);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_card = resolveComponent("n-card");
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_card, {
              title: "User Profile",
              class: "col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-300"
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
                                    _push6(`<a class="${ssrRenderClass([selected ? "tab-active" : "", "tab tab-lg tab-bordered"])}"${_scopeId5}>Permissions</a>`);
                                  } else {
                                    return [
                                      createVNode("a", {
                                        class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                                      }, "Permissions", 2)
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
                                    }, "Permissions", 2)
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
                                    _push6(`<form${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(InputField), {
                                      modelValue: unref(roleInformation).name,
                                      "onUpdate:modelValue": ($event) => unref(roleInformation).name = $event,
                                      label: "Name",
                                      type: "text",
                                      placeholder: "Name"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(InputField), {
                                      modelValue: unref(roleInformation).guard_name,
                                      "onUpdate:modelValue": ($event) => unref(roleInformation).guard_name = $event,
                                      label: "Guard Name",
                                      type: "text",
                                      placeholder: "type your Guard Name"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<div class="form-control pt-10"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(_sfc_main$2), {
                                      name: "update",
                                      onClick: submitForm
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div></form>`);
                                  } else {
                                    return [
                                      createVNode("form", {
                                        onSubmit: withModifiers(submitForm, ["prevent"])
                                      }, [
                                        createVNode(unref(InputField), {
                                          modelValue: unref(roleInformation).name,
                                          "onUpdate:modelValue": ($event) => unref(roleInformation).name = $event,
                                          label: "Name",
                                          type: "text",
                                          placeholder: "Name"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(unref(InputField), {
                                          modelValue: unref(roleInformation).guard_name,
                                          "onUpdate:modelValue": ($event) => unref(roleInformation).guard_name = $event,
                                          label: "Guard Name",
                                          type: "text",
                                          placeholder: "type your Guard Name"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("div", { class: "form-control pt-10" }, [
                                          createVNode(unref(_sfc_main$2), {
                                            name: "update",
                                            onClick: submitForm
                                          })
                                        ])
                                      ], 32)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(TabPanel), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(props.permissions, (item, index) => {
                                      _push6(`<div${_scopeId5}><div class="flex flex-col mb-7"${_scopeId5}><h3 class="text-2xl font-bold"${_scopeId5}>${ssrInterpolate(index)}</h3><div class="flex justify-between"${_scopeId5}><!--[-->`);
                                      ssrRenderList(item, (itemLoop, key) => {
                                        _push6(`<div${_scopeId5}><div class="form-control"${_scopeId5}><span class="label-text"${_scopeId5}>${ssrInterpolate(itemLoop.name)}</span><label class="label cursor-pointer"${_scopeId5}><input${ssrIncludeBooleanAttr(
                                          Array.isArray(
                                            unref(rolePer)[index][itemLoop.name]
                                          ) ? ssrLooseContain(
                                            unref(rolePer)[index][itemLoop.name],
                                            null
                                          ) : unref(rolePer)[index][itemLoop.name]
                                        ) ? " checked" : ""} type="checkbox" checked="checked" class="${ssrRenderClass([unref(rolePer)[index][itemLoop.name] ? "toggle-success" : "toggle-error", "toggle"])}"${_scopeId5}></label></div></div>`);
                                      });
                                      _push6(`<!--]--></div></div></div>`);
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(props.permissions, (item, index) => {
                                        return openBlock(), createBlock("div", { key: index }, [
                                          createVNode("div", { class: "flex flex-col mb-7" }, [
                                            createVNode("h3", { class: "text-2xl font-bold" }, toDisplayString(index), 1),
                                            createVNode("div", { class: "flex justify-between" }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(item, (itemLoop, key) => {
                                                return openBlock(), createBlock("div", { key }, [
                                                  createVNode("div", { class: "form-control" }, [
                                                    createVNode("span", { class: "label-text" }, toDisplayString(itemLoop.name), 1),
                                                    createVNode("label", { class: "label cursor-pointer" }, [
                                                      withDirectives(createVNode("input", {
                                                        onChange: autoSubmitPer,
                                                        "onUpdate:modelValue": ($event) => unref(rolePer)[index][itemLoop.name] = $event,
                                                        type: "checkbox",
                                                        checked: "checked",
                                                        class: ["toggle", unref(rolePer)[index][itemLoop.name] ? "toggle-success" : "toggle-error"]
                                                      }, null, 42, ["onUpdate:modelValue"]), [
                                                        [
                                                          vModelCheckbox,
                                                          unref(rolePer)[index][itemLoop.name]
                                                        ]
                                                      ])
                                                    ])
                                                  ])
                                                ]);
                                              }), 128))
                                            ])
                                          ])
                                        ]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(TabPanel), null, {
                                  default: withCtx(() => [
                                    createVNode("form", {
                                      onSubmit: withModifiers(submitForm, ["prevent"])
                                    }, [
                                      createVNode(unref(InputField), {
                                        modelValue: unref(roleInformation).name,
                                        "onUpdate:modelValue": ($event) => unref(roleInformation).name = $event,
                                        label: "Name",
                                        type: "text",
                                        placeholder: "Name"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(unref(InputField), {
                                        modelValue: unref(roleInformation).guard_name,
                                        "onUpdate:modelValue": ($event) => unref(roleInformation).guard_name = $event,
                                        label: "Guard Name",
                                        type: "text",
                                        placeholder: "type your Guard Name"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("div", { class: "form-control pt-10" }, [
                                        createVNode(unref(_sfc_main$2), {
                                          name: "update",
                                          onClick: submitForm
                                        })
                                      ])
                                    ], 32)
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(TabPanel), null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(props.permissions, (item, index) => {
                                      return openBlock(), createBlock("div", { key: index }, [
                                        createVNode("div", { class: "flex flex-col mb-7" }, [
                                          createVNode("h3", { class: "text-2xl font-bold" }, toDisplayString(index), 1),
                                          createVNode("div", { class: "flex justify-between" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item, (itemLoop, key) => {
                                              return openBlock(), createBlock("div", { key }, [
                                                createVNode("div", { class: "form-control" }, [
                                                  createVNode("span", { class: "label-text" }, toDisplayString(itemLoop.name), 1),
                                                  createVNode("label", { class: "label cursor-pointer" }, [
                                                    withDirectives(createVNode("input", {
                                                      onChange: autoSubmitPer,
                                                      "onUpdate:modelValue": ($event) => unref(rolePer)[index][itemLoop.name] = $event,
                                                      type: "checkbox",
                                                      checked: "checked",
                                                      class: ["toggle", unref(rolePer)[index][itemLoop.name] ? "toggle-success" : "toggle-error"]
                                                    }, null, 42, ["onUpdate:modelValue"]), [
                                                      [
                                                        vModelCheckbox,
                                                        unref(rolePer)[index][itemLoop.name]
                                                      ]
                                                    ])
                                                  ])
                                                ])
                                              ]);
                                            }), 128))
                                          ])
                                        ])
                                      ]);
                                    }), 128))
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
                                  }, "Permissions", 2)
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
                                  createVNode("form", {
                                    onSubmit: withModifiers(submitForm, ["prevent"])
                                  }, [
                                    createVNode(unref(InputField), {
                                      modelValue: unref(roleInformation).name,
                                      "onUpdate:modelValue": ($event) => unref(roleInformation).name = $event,
                                      label: "Name",
                                      type: "text",
                                      placeholder: "Name"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(unref(InputField), {
                                      modelValue: unref(roleInformation).guard_name,
                                      "onUpdate:modelValue": ($event) => unref(roleInformation).guard_name = $event,
                                      label: "Guard Name",
                                      type: "text",
                                      placeholder: "type your Guard Name"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "form-control pt-10" }, [
                                      createVNode(unref(_sfc_main$2), {
                                        name: "update",
                                        onClick: submitForm
                                      })
                                    ])
                                  ], 32)
                                ]),
                                _: 1
                              }),
                              createVNode(unref(TabPanel), null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(props.permissions, (item, index) => {
                                    return openBlock(), createBlock("div", { key: index }, [
                                      createVNode("div", { class: "flex flex-col mb-7" }, [
                                        createVNode("h3", { class: "text-2xl font-bold" }, toDisplayString(index), 1),
                                        createVNode("div", { class: "flex justify-between" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item, (itemLoop, key) => {
                                            return openBlock(), createBlock("div", { key }, [
                                              createVNode("div", { class: "form-control" }, [
                                                createVNode("span", { class: "label-text" }, toDisplayString(itemLoop.name), 1),
                                                createVNode("label", { class: "label cursor-pointer" }, [
                                                  withDirectives(createVNode("input", {
                                                    onChange: autoSubmitPer,
                                                    "onUpdate:modelValue": ($event) => unref(rolePer)[index][itemLoop.name] = $event,
                                                    type: "checkbox",
                                                    checked: "checked",
                                                    class: ["toggle", unref(rolePer)[index][itemLoop.name] ? "toggle-success" : "toggle-error"]
                                                  }, null, 42, ["onUpdate:modelValue"]), [
                                                    [
                                                      vModelCheckbox,
                                                      unref(rolePer)[index][itemLoop.name]
                                                    ]
                                                  ])
                                                ])
                                              ])
                                            ]);
                                          }), 128))
                                        ])
                                      ])
                                    ]);
                                  }), 128))
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
                                }, "Permissions", 2)
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
                                createVNode("form", {
                                  onSubmit: withModifiers(submitForm, ["prevent"])
                                }, [
                                  createVNode(unref(InputField), {
                                    modelValue: unref(roleInformation).name,
                                    "onUpdate:modelValue": ($event) => unref(roleInformation).name = $event,
                                    label: "Name",
                                    type: "text",
                                    placeholder: "Name"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(unref(InputField), {
                                    modelValue: unref(roleInformation).guard_name,
                                    "onUpdate:modelValue": ($event) => unref(roleInformation).guard_name = $event,
                                    label: "Guard Name",
                                    type: "text",
                                    placeholder: "type your Guard Name"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "form-control pt-10" }, [
                                    createVNode(unref(_sfc_main$2), {
                                      name: "update",
                                      onClick: submitForm
                                    })
                                  ])
                                ], 32)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(TabPanel), null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(props.permissions, (item, index) => {
                                  return openBlock(), createBlock("div", { key: index }, [
                                    createVNode("div", { class: "flex flex-col mb-7" }, [
                                      createVNode("h3", { class: "text-2xl font-bold" }, toDisplayString(index), 1),
                                      createVNode("div", { class: "flex justify-between" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item, (itemLoop, key) => {
                                          return openBlock(), createBlock("div", { key }, [
                                            createVNode("div", { class: "form-control" }, [
                                              createVNode("span", { class: "label-text" }, toDisplayString(itemLoop.name), 1),
                                              createVNode("label", { class: "label cursor-pointer" }, [
                                                withDirectives(createVNode("input", {
                                                  onChange: autoSubmitPer,
                                                  "onUpdate:modelValue": ($event) => unref(rolePer)[index][itemLoop.name] = $event,
                                                  type: "checkbox",
                                                  checked: "checked",
                                                  class: ["toggle", unref(rolePer)[index][itemLoop.name] ? "toggle-success" : "toggle-error"]
                                                }, null, 42, ["onUpdate:modelValue"]), [
                                                  [
                                                    vModelCheckbox,
                                                    unref(rolePer)[index][itemLoop.name]
                                                  ]
                                                ])
                                              ])
                                            ])
                                          ]);
                                        }), 128))
                                      ])
                                    ])
                                  ]);
                                }), 128))
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
                class: "col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-300"
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
                              }, "Permissions", 2)
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
                              createVNode("form", {
                                onSubmit: withModifiers(submitForm, ["prevent"])
                              }, [
                                createVNode(unref(InputField), {
                                  modelValue: unref(roleInformation).name,
                                  "onUpdate:modelValue": ($event) => unref(roleInformation).name = $event,
                                  label: "Name",
                                  type: "text",
                                  placeholder: "Name"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(unref(InputField), {
                                  modelValue: unref(roleInformation).guard_name,
                                  "onUpdate:modelValue": ($event) => unref(roleInformation).guard_name = $event,
                                  label: "Guard Name",
                                  type: "text",
                                  placeholder: "type your Guard Name"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "form-control pt-10" }, [
                                  createVNode(unref(_sfc_main$2), {
                                    name: "update",
                                    onClick: submitForm
                                  })
                                ])
                              ], 32)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabPanel), null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(props.permissions, (item, index) => {
                                return openBlock(), createBlock("div", { key: index }, [
                                  createVNode("div", { class: "flex flex-col mb-7" }, [
                                    createVNode("h3", { class: "text-2xl font-bold" }, toDisplayString(index), 1),
                                    createVNode("div", { class: "flex justify-between" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item, (itemLoop, key) => {
                                        return openBlock(), createBlock("div", { key }, [
                                          createVNode("div", { class: "form-control" }, [
                                            createVNode("span", { class: "label-text" }, toDisplayString(itemLoop.name), 1),
                                            createVNode("label", { class: "label cursor-pointer" }, [
                                              withDirectives(createVNode("input", {
                                                onChange: autoSubmitPer,
                                                "onUpdate:modelValue": ($event) => unref(rolePer)[index][itemLoop.name] = $event,
                                                type: "checkbox",
                                                checked: "checked",
                                                class: ["toggle", unref(rolePer)[index][itemLoop.name] ? "toggle-success" : "toggle-error"]
                                              }, null, 42, ["onUpdate:modelValue"]), [
                                                [
                                                  vModelCheckbox,
                                                  unref(rolePer)[index][itemLoop.name]
                                                ]
                                              ])
                                            ])
                                          ])
                                        ]);
                                      }), 128))
                                    ])
                                  ])
                                ]);
                              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/BackEnd/Role/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
