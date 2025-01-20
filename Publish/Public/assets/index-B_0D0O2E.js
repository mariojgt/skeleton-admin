import { ref, withCtx, createVNode, openBlock, createBlock, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./App-DeZIQ0nQ.js";
import "naive-ui";
import "./FlashMessage-C9hwciIU.js";
import "axios";
import "lucide-vue-next";
import "lodash/debounce.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "mariojgt is heredude"
    }
  },
  setup(__props) {
    ref("");
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 gap-6 lg:p-10 xl:grid-cols-3 lg:bg-base-200 rounded-box"${_scopeId}><div class="card shadow-lg compact side bg-base-100"${_scopeId}><div class="flex-row items-center space-x-4 card-body"${_scopeId}><div${_scopeId}><div class="avatar"${_scopeId}><div class="rounded-full w-14 h-14 shadow"${_scopeId}><img src="https://i.pravatar.cc/500?img=32"${_scopeId}></div></div></div><div${_scopeId}><h2 class="card-title"${_scopeId}>Janis Johnson</h2><p class="text-base-content text-opacity-40"${_scopeId}> Accounts Agent </p></div></div></div><div class="card shadow-lg compact side bg-base-100"${_scopeId}><div class="flex-row items-center space-x-4 card-body"${_scopeId}><div class="flex-1"${_scopeId}><h2 class="card-title"${_scopeId}>Meredith Mayer</h2><p class="text-base-content text-opacity-40"${_scopeId}> Data Liaison </p></div><div class="flex-0"${_scopeId}><button class="btn btn-sm"${_scopeId}>Follow</button></div></div></div><div class="card row-span-3 shadow-lg compact bg-base-100"${_scopeId}><figure${_scopeId}><img src="https://picsum.photos/id/1005/600/400"${_scopeId}></figure><div class="flex-row items-center space-x-4 card-body"${_scopeId}><div${_scopeId}><h2 class="card-title"${_scopeId}>Karolann Collins</h2><p class="text-base-content text-opacity-40"${_scopeId}> Direct Interactions Liaison </p></div></div></div><div class="card shadow-lg compact side bg-base-100"${_scopeId}><div class="flex-row items-center space-x-4 card-body"${_scopeId}><div class="flex-1"${_scopeId}><h2 class="card-title text-primary"${_scopeId}>4,600</h2><p class="text-base-content text-opacity-40"${_scopeId}> Page views </p></div><div class="flex space-x-2 flex-0"${_scopeId}><button class="btn btn-sm btn-square"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId}></path></svg></button><button class="btn btn-sm btn-square"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"${_scopeId}></path></svg></button></div></div></div><div class="card shadow-lg compact side bg-base-100"${_scopeId}><div class="flex-row items-center space-x-4 card-body"${_scopeId}><label class="flex-0"${_scopeId}><input type="checkbox" checked="checked" class="toggle toggle-primary" data-com.bitwarden.browser.user-edited="yes"${_scopeId}></label><div class="flex-1"${_scopeId}><h2 class="card-title"${_scopeId}>Enable Notifications</h2><p class="text-base-content text-opacity-40"${_scopeId}> To get latest updates </p></div></div></div><div class="card col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-100"${_scopeId}><div class="card-body"${_scopeId}><h2 class="my-4 text-4xl font-bold card-title"${_scopeId}> Welcome to the backend </h2><div class="mb-4 space-x-2 card-actions"${_scopeId}><div class="badge badge-ghost"${_scopeId}>Colors</div><div class="badge badge-ghost"${_scopeId}>UI Design</div><div class="badge badge-ghost"${_scopeId}>Creativity</div></div><p${_scopeId}> Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente. </p><div class="justify-end space-x-2 card-actions"${_scopeId}><button class="btn btn-primary"${_scopeId}>Login</button><button class="btn"${_scopeId}>Register</button></div></div></div><div class="card shadow-lg compact side bg-base-100"${_scopeId}><div class="flex-row items-center space-x-4 card-body"${_scopeId}><div class="flex-1"${_scopeId}><h2 class="flex card-title"${_scopeId}><button class="btn btn-ghost btn-sm btn-circle loading"${_scopeId}></button> Downloading... </h2><progress value="70" max="100" class="progress progress-secondary"${_scopeId}></progress></div><div class="flex-0"${_scopeId}><button class="btn btn-circle"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button></div></div></div><div class="card shadow-lg compact side bg-base-100"${_scopeId}><div class="flex-row items-center space-x-4 card-body"${_scopeId}><label class="cursor-pointer label"${_scopeId}><input type="checkbox" checked="checked" class="checkbox checkbox-accent"${_scopeId}><span class="mx-4 label-text"${_scopeId}>Enable Autosave</span></label></div></div><ul class="menu row-span-3 p-4 shadow-lg bg-base-100 text-base-content text-opacity-40 rounded-box"${_scopeId}><li class="menu-title"${_scopeId}><span${_scopeId}> Menu Title </span></li><li${_scopeId}><a${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 mr-2 stroke-current"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId}></path></svg> Item with icon </a></li><li${_scopeId}><a${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 mr-2 stroke-current"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"${_scopeId}></path></svg> Item with icon </a></li><li${_scopeId}><a${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 mr-2 stroke-current"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"${_scopeId}></path></svg> Item with icon </a></li></ul><div class="alert col-span-1 xl:col-span-2 bg-base-100"${_scopeId}><div class="flex-1"${_scopeId}><label class="mx-3"${_scopeId}>Lorem ipsum dolor sit amet, consectetur adip!</label></div><div class="flex-none"${_scopeId}><button class="btn btn-sm btn-ghost mr-2"${_scopeId}>Cancel</button><button class="btn btn-sm btn-primary"${_scopeId}>Apply</button></div></div><div class="alert col-span-1 xl:col-span-2 alert-info"${_scopeId}><div class="flex-1"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg><label${_scopeId}>Lorem ipsum dolor sit amet, consectetur adip!</label></div></div><div class="alert col-span-1 xl:col-span-2 alert-success"${_scopeId}><div class="flex-1"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"${_scopeId}></path></svg><label${_scopeId}>Lorem ipsum dolor sit amet, consectetur adip!</label></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 gap-6 lg:p-10 xl:grid-cols-3 lg:bg-base-200 rounded-box" }, [
                createVNode("div", { class: "card shadow-lg compact side bg-base-100" }, [
                  createVNode("div", { class: "flex-row items-center space-x-4 card-body" }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "avatar" }, [
                        createVNode("div", { class: "rounded-full w-14 h-14 shadow" }, [
                          createVNode("img", { src: "https://i.pravatar.cc/500?img=32" })
                        ])
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("h2", { class: "card-title" }, "Janis Johnson"),
                      createVNode("p", { class: "text-base-content text-opacity-40" }, " Accounts Agent ")
                    ])
                  ])
                ]),
                createVNode("div", { class: "card shadow-lg compact side bg-base-100" }, [
                  createVNode("div", { class: "flex-row items-center space-x-4 card-body" }, [
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("h2", { class: "card-title" }, "Meredith Mayer"),
                      createVNode("p", { class: "text-base-content text-opacity-40" }, " Data Liaison ")
                    ]),
                    createVNode("div", { class: "flex-0" }, [
                      createVNode("button", { class: "btn btn-sm" }, "Follow")
                    ])
                  ])
                ]),
                createVNode("div", { class: "card row-span-3 shadow-lg compact bg-base-100" }, [
                  createVNode("figure", null, [
                    createVNode("img", { src: "https://picsum.photos/id/1005/600/400" })
                  ]),
                  createVNode("div", { class: "flex-row items-center space-x-4 card-body" }, [
                    createVNode("div", null, [
                      createVNode("h2", { class: "card-title" }, "Karolann Collins"),
                      createVNode("p", { class: "text-base-content text-opacity-40" }, " Direct Interactions Liaison ")
                    ])
                  ])
                ]),
                createVNode("div", { class: "card shadow-lg compact side bg-base-100" }, [
                  createVNode("div", { class: "flex-row items-center space-x-4 card-body" }, [
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("h2", { class: "card-title text-primary" }, "4,600"),
                      createVNode("p", { class: "text-base-content text-opacity-40" }, " Page views ")
                    ]),
                    createVNode("div", { class: "flex space-x-2 flex-0" }, [
                      createVNode("button", { class: "btn btn-sm btn-square" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          class: "inline-block w-6 h-6 stroke-current"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          }),
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          })
                        ]))
                      ]),
                      createVNode("button", { class: "btn btn-sm btn-square" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          class: "inline-block w-6 h-6 stroke-current"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                          })
                        ]))
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "card shadow-lg compact side bg-base-100" }, [
                  createVNode("div", { class: "flex-row items-center space-x-4 card-body" }, [
                    createVNode("label", { class: "flex-0" }, [
                      createVNode("input", {
                        type: "checkbox",
                        checked: "checked",
                        class: "toggle toggle-primary",
                        "data-com.bitwarden.browser.user-edited": "yes"
                      })
                    ]),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("h2", { class: "card-title" }, "Enable Notifications"),
                      createVNode("p", { class: "text-base-content text-opacity-40" }, " To get latest updates ")
                    ])
                  ])
                ]),
                createVNode("div", { class: "card col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-100" }, [
                  createVNode("div", { class: "card-body" }, [
                    createVNode("h2", { class: "my-4 text-4xl font-bold card-title" }, " Welcome to the backend "),
                    createVNode("div", { class: "mb-4 space-x-2 card-actions" }, [
                      createVNode("div", { class: "badge badge-ghost" }, "Colors"),
                      createVNode("div", { class: "badge badge-ghost" }, "UI Design"),
                      createVNode("div", { class: "badge badge-ghost" }, "Creativity")
                    ]),
                    createVNode("p", null, " Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente. "),
                    createVNode("div", { class: "justify-end space-x-2 card-actions" }, [
                      createVNode("button", { class: "btn btn-primary" }, "Login"),
                      createVNode("button", { class: "btn" }, "Register")
                    ])
                  ])
                ]),
                createVNode("div", { class: "card shadow-lg compact side bg-base-100" }, [
                  createVNode("div", { class: "flex-row items-center space-x-4 card-body" }, [
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("h2", { class: "flex card-title" }, [
                        createVNode("button", { class: "btn btn-ghost btn-sm btn-circle loading" }),
                        createTextVNode(" Downloading... ")
                      ]),
                      createVNode("progress", {
                        value: "70",
                        max: "100",
                        class: "progress progress-secondary"
                      })
                    ]),
                    createVNode("div", { class: "flex-0" }, [
                      createVNode("button", { class: "btn btn-circle" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          class: "inline-block w-6 h-6 stroke-current"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M6 18L18 6M6 6l12 12"
                          })
                        ]))
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "card shadow-lg compact side bg-base-100" }, [
                  createVNode("div", { class: "flex-row items-center space-x-4 card-body" }, [
                    createVNode("label", { class: "cursor-pointer label" }, [
                      createVNode("input", {
                        type: "checkbox",
                        checked: "checked",
                        class: "checkbox checkbox-accent"
                      }),
                      createVNode("span", { class: "mx-4 label-text" }, "Enable Autosave")
                    ])
                  ])
                ]),
                createVNode("ul", { class: "menu row-span-3 p-4 shadow-lg bg-base-100 text-base-content text-opacity-40 rounded-box" }, [
                  createVNode("li", { class: "menu-title" }, [
                    createVNode("span", null, " Menu Title ")
                  ]),
                  createVNode("li", null, [
                    createVNode("a", null, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        class: "inline-block w-5 h-5 mr-2 stroke-current"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        }),
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        })
                      ])),
                      createTextVNode(" Item with icon ")
                    ])
                  ]),
                  createVNode("li", null, [
                    createVNode("a", null, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        class: "inline-block w-5 h-5 mr-2 stroke-current"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        })
                      ])),
                      createTextVNode(" Item with icon ")
                    ])
                  ]),
                  createVNode("li", null, [
                    createVNode("a", null, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        class: "inline-block w-5 h-5 mr-2 stroke-current"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        })
                      ])),
                      createTextVNode(" Item with icon ")
                    ])
                  ])
                ]),
                createVNode("div", { class: "alert col-span-1 xl:col-span-2 bg-base-100" }, [
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("label", { class: "mx-3" }, "Lorem ipsum dolor sit amet, consectetur adip!")
                  ]),
                  createVNode("div", { class: "flex-none" }, [
                    createVNode("button", { class: "btn btn-sm btn-ghost mr-2" }, "Cancel"),
                    createVNode("button", { class: "btn btn-sm btn-primary" }, "Apply")
                  ])
                ]),
                createVNode("div", { class: "alert col-span-1 xl:col-span-2 alert-info" }, [
                  createVNode("div", { class: "flex-1" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      class: "w-6 h-6 mx-2 stroke-current"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      })
                    ])),
                    createVNode("label", null, "Lorem ipsum dolor sit amet, consectetur adip!")
                  ])
                ]),
                createVNode("div", { class: "alert col-span-1 xl:col-span-2 alert-success" }, [
                  createVNode("div", { class: "flex-1" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      class: "w-6 h-6 mx-2 stroke-current"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      })
                    ])),
                    createVNode("label", null, "Lorem ipsum dolor sit amet, consectetur adip!")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/Vendor/skeleton-store/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
