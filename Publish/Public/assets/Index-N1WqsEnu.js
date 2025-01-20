import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, openBlock, createBlock, createTextVNode, createCommentVNode, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./App-CccoNqE7.js";
import { P as PostCard } from "./PostCard-KPdxfVV_.js";
import { _ as _sfc_main$3 } from "./Pagination-C1hOKcwe.js";
import { _ as _sfc_main$2 } from "./PostBox-RDZ1qISX.js";
import "naive-ui";
import "./FlashMessage-CYVaM9mM.js";
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
import "./CommentsSingle-BGRW2ED3.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    forumPosts: {
      type: Object,
      default: () => ({})
    },
    categories: {
      type: Array,
      default: () => []
    },
    topic: {
      type: String,
      default: "all"
    }
  },
  setup(__props) {
    let displayLogin = ref(false);
    const mobileMenuOpen = ref(false);
    const props = __props;
    const navigateToTopic = async (selectedTopic) => {
      mobileMenuOpen.value = false;
      if (selectedTopic) {
        await router.get(
          route("forum.index", { topic: selectedTopic }),
          {
            preserveState: true,
            preserveScroll: true,
            only: ["forumPosts"]
          }
        );
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        backgroundFooterClass: "bg-dark-100",
        headerBackground: "bg-dark-100",
        displayLogin: unref(displayLogin),
        onCloseLogin: ($event) => isRef(displayLogin) ? displayLogin.value = false : displayLogin = false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-dark-100 border-b border-dark-200"${_scopeId}><div class="max-w-7xl mx-auto p-4"${_scopeId}><div class="bg-dark-200 rounded-lg p-3 text-center ring-1 ring-purple-500/10"${_scopeId}><p class="text-neutral-400"${_scopeId}>Premium Ad Space</p></div></div></div><section class="bg-dark-200 py-6 px-4 lg:py-12 mx-auto"${_scopeId}><div class="max-w-7xl mx-auto"${_scopeId}><div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"${_scopeId}><div class="flex items-center gap-4"${_scopeId}><button class="lg:hidden p-2 text-white hover:bg-dark-100 rounded-lg"${_scopeId}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"${_scopeId}></path></svg></button><h2 class="text-white text-3xl lg:text-5xl font-extrabold drop-shadow-lg"${_scopeId}> Forum <span class="hidden sm:inline-block ml-2 text-sm px-3 py-1 bg-dark-100 rounded-full text-purple-400 font-normal shadow-[0_0_10px_rgba(168,85,247,0.15)]"${_scopeId}> Game Dev Hub </span></h2></div><div class="flex items-center gap-3 w-full sm:w-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              categories: __props.categories,
              class: "flex-1 sm:flex-initial",
              "post-btn-class": "btn btn-primary w-full sm:w-auto shadow-[0_0_15px_rgba(168,85,247,0.15)]",
              onDisplayLogin: ($event) => isRef(displayLogin) ? displayLogin.value = true : displayLogin = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="flex items-center gap-2"${_scopeId2}><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"${_scopeId2}></path></svg> New Discussion </span>`);
                } else {
                  return [
                    createVNode("span", { class: "flex items-center gap-2" }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-5 h-5",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M12 4v16m8-8H4"
                        })
                      ])),
                      createTextVNode(" New Discussion ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<select class="select select-bordered bg-dark-100 text-white border-dark-300 focus:border-purple-500 focus:ring-purple-500/20"${_scopeId}><option${_scopeId}>Latest</option><option${_scopeId}>Popular</option></select></div></div>`);
            if (mobileMenuOpen.value) {
              _push2(`<div class="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass([{ "-translate-x-full": !mobileMenuOpen.value, "translate-x-0": mobileMenuOpen.value }, "lg:hidden fixed inset-y-0 left-0 w-72 bg-dark-100 p-4 z-50 transform transition-transform duration-200"])}"${_scopeId}><div class="flex justify-between items-center mb-6"${_scopeId}><h3 class="text-white text-lg font-bold"${_scopeId}>Categories</h3><button class="text-white"${_scopeId}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button></div><div class="mb-4 bg-dark-200 p-3 rounded-lg text-center"${_scopeId}><p class="text-neutral-400 text-sm"${_scopeId}>Featured Ad Space</p></div><nav class="space-y-2"${_scopeId}><button class="${ssrRenderClass([{
              "bg-dark-300 text-white shadow-[0_0_10px_rgba(168,85,247,0.1)]": __props.topic === "all",
              "text-neutral-400 hover:bg-dark-300 hover:text-white": __props.topic !== "all"
            }, "w-full flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-colors"])}"${_scopeId}><span class="${ssrRenderClass([{
              "bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]": __props.topic === "all",
              "bg-dark-300": __props.topic !== "all"
            }, "w-2 h-2 rounded-full"])}"${_scopeId}></span> All Threads </button><!--[-->`);
            ssrRenderList(__props.categories, (item, index) => {
              _push2(`<button class="${ssrRenderClass([{
                "bg-dark-300 text-white shadow-[0_0_10px_rgba(168,85,247,0.1)]": __props.topic === item.slug,
                "text-neutral-400 hover:bg-dark-300 hover:text-white": __props.topic !== item.slug
              }, "w-full flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-colors"])}"${_scopeId}><span class="${ssrRenderClass([{
                "bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]": __props.topic === item.slug,
                "bg-dark-300": __props.topic !== item.slug
              }, "w-2 h-2 rounded-full"])}"${_scopeId}></span> ${ssrInterpolate(item.name)}</button>`);
            });
            _push2(`<!--]--></nav></div><div class="flex flex-col lg:flex-row gap-6"${_scopeId}><aside class="hidden lg:block w-full lg:w-1/4"${_scopeId}><div class="sticky top-6"${_scopeId}><nav class="bg-dark-100 p-4 rounded-lg ring-1 ring-purple-500/10"${_scopeId}><ul class="space-y-2"${_scopeId}><li class="${ssrRenderClass([{
              "bg-dark-300 text-white shadow-[0_0_10px_rgba(168,85,247,0.1)]": __props.topic === "all",
              "text-neutral-400 hover:bg-dark-300 hover:text-white": __props.topic !== "all"
            }, "flex items-center gap-2 text-sm font-medium rounded-lg p-3 cursor-pointer transition-colors"])}"${_scopeId}><span class="${ssrRenderClass([{
              "bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]": __props.topic === "all",
              "bg-dark-300": __props.topic !== "all"
            }, "w-2 h-2 rounded-full"])}"${_scopeId}></span> All Threads </li><!--[-->`);
            ssrRenderList(__props.categories, (item, index) => {
              _push2(`<li class="${ssrRenderClass([{
                "bg-dark-300 text-white shadow-[0_0_10px_rgba(168,85,247,0.1)]": __props.topic === item.slug,
                "text-neutral-400 hover:bg-dark-300 hover:text-white": __props.topic !== item.slug
              }, "flex items-center gap-2 text-sm font-medium rounded-lg p-3 cursor-pointer transition-colors"])}"${_scopeId}><span class="${ssrRenderClass([{
                "bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]": __props.topic === item.slug,
                "bg-dark-300": __props.topic !== item.slug
              }, "w-2 h-2 rounded-full"])}"${_scopeId}></span> ${ssrInterpolate(item.name)}</li>`);
            });
            _push2(`<!--]--></ul></nav><div class="mt-4 bg-dark-100 p-4 rounded-lg text-center ring-1 ring-purple-500/10"${_scopeId}><p class="text-neutral-400"${_scopeId}>Sponsored Content</p></div></div></aside><main class="flex-1"${_scopeId}><div class="grid grid-cols-1 gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(props.forumPosts.data, (item, index) => {
              _push2(ssrRenderComponent(PostCard, {
                key: index,
                record: item,
                class: "transition-transform hover:scale-[1.01] ring-1 ring-purple-500/10"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              pagination: props.forumPosts.meta,
              class: "mt-6"
            }, null, _parent2, _scopeId));
            _push2(`</main><aside class="hidden lg:block w-full lg:w-1/4"${_scopeId}><div class="sticky top-6 space-y-4"${_scopeId}><div class="bg-gradient-to-br from-dark-100 to-dark-200 p-6 rounded-lg text-white ring-1 ring-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.15)]"${_scopeId}><div class="flex items-center gap-2 mb-3"${_scopeId}><svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"${_scopeId}></path></svg><h3 class="text-lg font-bold"${_scopeId}>Game Dev Pro</h3></div><p class="text-neutral-300 text-sm mb-4"${_scopeId}>Get unlimited access to all our game development resources!</p><button class="w-full btn btn-primary shadow-[0_0_15px_rgba(168,85,247,0.15)]"${_scopeId}> Join for $25/month </button></div><div class="bg-dark-100 p-6 rounded-lg ring-1 ring-purple-500/10"${_scopeId}><h3 class="text-lg font-bold text-white mb-2"${_scopeId}>Unity Mastery</h3><p class="text-neutral-400 text-sm mb-4"${_scopeId}>Learn professional game development with Unity</p><button class="w-full btn btn-secondary shadow-[0_0_15px_rgba(168,85,247,0.15)]"${_scopeId}> Start Learning </button></div><div class="bg-dark-100 p-4 rounded-lg text-center ring-1 ring-purple-500/10"${_scopeId}><p class="text-neutral-400"${_scopeId}>Advertisement Space</p></div></div></aside></div></div></section>`);
          } else {
            return [
              createVNode("div", { class: "bg-dark-100 border-b border-dark-200" }, [
                createVNode("div", { class: "max-w-7xl mx-auto p-4" }, [
                  createVNode("div", { class: "bg-dark-200 rounded-lg p-3 text-center ring-1 ring-purple-500/10" }, [
                    createVNode("p", { class: "text-neutral-400" }, "Premium Ad Space")
                  ])
                ])
              ]),
              createVNode("section", { class: "bg-dark-200 py-6 px-4 lg:py-12 mx-auto" }, [
                createVNode("div", { class: "max-w-7xl mx-auto" }, [
                  createVNode("div", { class: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8" }, [
                    createVNode("div", { class: "flex items-center gap-4" }, [
                      createVNode("button", {
                        class: "lg:hidden p-2 text-white hover:bg-dark-100 rounded-lg",
                        onClick: ($event) => mobileMenuOpen.value = true
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-6 h-6",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M4 6h16M4 12h16M4 18h16"
                          })
                        ]))
                      ], 8, ["onClick"]),
                      createVNode("h2", { class: "text-white text-3xl lg:text-5xl font-extrabold drop-shadow-lg" }, [
                        createTextVNode(" Forum "),
                        createVNode("span", { class: "hidden sm:inline-block ml-2 text-sm px-3 py-1 bg-dark-100 rounded-full text-purple-400 font-normal shadow-[0_0_10px_rgba(168,85,247,0.15)]" }, " Game Dev Hub ")
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center gap-3 w-full sm:w-auto" }, [
                      createVNode(_sfc_main$2, {
                        categories: __props.categories,
                        class: "flex-1 sm:flex-initial",
                        "post-btn-class": "btn btn-primary w-full sm:w-auto shadow-[0_0_15px_rgba(168,85,247,0.15)]",
                        onDisplayLogin: ($event) => isRef(displayLogin) ? displayLogin.value = true : displayLogin = true
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "flex items-center gap-2" }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-5 h-5",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M12 4v16m8-8H4"
                              })
                            ])),
                            createTextVNode(" New Discussion ")
                          ])
                        ]),
                        _: 1
                      }, 8, ["categories", "onDisplayLogin"]),
                      createVNode("select", { class: "select select-bordered bg-dark-100 text-white border-dark-300 focus:border-purple-500 focus:ring-purple-500/20" }, [
                        createVNode("option", null, "Latest"),
                        createVNode("option", null, "Popular")
                      ])
                    ])
                  ]),
                  mobileMenuOpen.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40",
                    onClick: ($event) => mobileMenuOpen.value = false
                  }, null, 8, ["onClick"])) : createCommentVNode("", true),
                  createVNode("div", {
                    class: ["lg:hidden fixed inset-y-0 left-0 w-72 bg-dark-100 p-4 z-50 transform transition-transform duration-200", { "-translate-x-full": !mobileMenuOpen.value, "translate-x-0": mobileMenuOpen.value }]
                  }, [
                    createVNode("div", { class: "flex justify-between items-center mb-6" }, [
                      createVNode("h3", { class: "text-white text-lg font-bold" }, "Categories"),
                      createVNode("button", {
                        onClick: ($event) => mobileMenuOpen.value = false,
                        class: "text-white"
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-6 h-6",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M6 18L18 6M6 6l12 12"
                          })
                        ]))
                      ], 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "mb-4 bg-dark-200 p-3 rounded-lg text-center" }, [
                      createVNode("p", { class: "text-neutral-400 text-sm" }, "Featured Ad Space")
                    ]),
                    createVNode("nav", { class: "space-y-2" }, [
                      createVNode("button", {
                        class: ["w-full flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-colors", {
                          "bg-dark-300 text-white shadow-[0_0_10px_rgba(168,85,247,0.1)]": __props.topic === "all",
                          "text-neutral-400 hover:bg-dark-300 hover:text-white": __props.topic !== "all"
                        }],
                        onClick: ($event) => navigateToTopic("all")
                      }, [
                        createVNode("span", {
                          class: ["w-2 h-2 rounded-full", {
                            "bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]": __props.topic === "all",
                            "bg-dark-300": __props.topic !== "all"
                          }]
                        }, null, 2),
                        createTextVNode(" All Threads ")
                      ], 10, ["onClick"]),
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (item, index) => {
                        return openBlock(), createBlock("button", {
                          key: index,
                          class: ["w-full flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-colors", {
                            "bg-dark-300 text-white shadow-[0_0_10px_rgba(168,85,247,0.1)]": __props.topic === item.slug,
                            "text-neutral-400 hover:bg-dark-300 hover:text-white": __props.topic !== item.slug
                          }],
                          onClick: ($event) => navigateToTopic(item.slug)
                        }, [
                          createVNode("span", {
                            class: ["w-2 h-2 rounded-full", {
                              "bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]": __props.topic === item.slug,
                              "bg-dark-300": __props.topic !== item.slug
                            }]
                          }, null, 2),
                          createTextVNode(" " + toDisplayString(item.name), 1)
                        ], 10, ["onClick"]);
                      }), 128))
                    ])
                  ], 2),
                  createVNode("div", { class: "flex flex-col lg:flex-row gap-6" }, [
                    createVNode("aside", { class: "hidden lg:block w-full lg:w-1/4" }, [
                      createVNode("div", { class: "sticky top-6" }, [
                        createVNode("nav", { class: "bg-dark-100 p-4 rounded-lg ring-1 ring-purple-500/10" }, [
                          createVNode("ul", { class: "space-y-2" }, [
                            createVNode("li", {
                              class: ["flex items-center gap-2 text-sm font-medium rounded-lg p-3 cursor-pointer transition-colors", {
                                "bg-dark-300 text-white shadow-[0_0_10px_rgba(168,85,247,0.1)]": __props.topic === "all",
                                "text-neutral-400 hover:bg-dark-300 hover:text-white": __props.topic !== "all"
                              }],
                              onClick: ($event) => navigateToTopic("all")
                            }, [
                              createVNode("span", {
                                class: ["w-2 h-2 rounded-full", {
                                  "bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]": __props.topic === "all",
                                  "bg-dark-300": __props.topic !== "all"
                                }]
                              }, null, 2),
                              createTextVNode(" All Threads ")
                            ], 10, ["onClick"]),
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (item, index) => {
                              return openBlock(), createBlock("li", {
                                key: index,
                                class: ["flex items-center gap-2 text-sm font-medium rounded-lg p-3 cursor-pointer transition-colors", {
                                  "bg-dark-300 text-white shadow-[0_0_10px_rgba(168,85,247,0.1)]": __props.topic === item.slug,
                                  "text-neutral-400 hover:bg-dark-300 hover:text-white": __props.topic !== item.slug
                                }],
                                onClick: ($event) => navigateToTopic(item.slug)
                              }, [
                                createVNode("span", {
                                  class: ["w-2 h-2 rounded-full", {
                                    "bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]": __props.topic === item.slug,
                                    "bg-dark-300": __props.topic !== item.slug
                                  }]
                                }, null, 2),
                                createTextVNode(" " + toDisplayString(item.name), 1)
                              ], 10, ["onClick"]);
                            }), 128))
                          ])
                        ]),
                        createVNode("div", { class: "mt-4 bg-dark-100 p-4 rounded-lg text-center ring-1 ring-purple-500/10" }, [
                          createVNode("p", { class: "text-neutral-400" }, "Sponsored Content")
                        ])
                      ])
                    ]),
                    createVNode("main", { class: "flex-1" }, [
                      createVNode("div", { class: "grid grid-cols-1 gap-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(props.forumPosts.data, (item, index) => {
                          return openBlock(), createBlock(PostCard, {
                            key: index,
                            record: item,
                            class: "transition-transform hover:scale-[1.01] ring-1 ring-purple-500/10"
                          }, null, 8, ["record"]);
                        }), 128))
                      ]),
                      createVNode(_sfc_main$3, {
                        pagination: props.forumPosts.meta,
                        class: "mt-6"
                      }, null, 8, ["pagination"])
                    ]),
                    createVNode("aside", { class: "hidden lg:block w-full lg:w-1/4" }, [
                      createVNode("div", { class: "sticky top-6 space-y-4" }, [
                        createVNode("div", { class: "bg-gradient-to-br from-dark-100 to-dark-200 p-6 rounded-lg text-white ring-1 ring-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.15)]" }, [
                          createVNode("div", { class: "flex items-center gap-2 mb-3" }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-5 h-5 text-purple-400",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                              })
                            ])),
                            createVNode("h3", { class: "text-lg font-bold" }, "Game Dev Pro")
                          ]),
                          createVNode("p", { class: "text-neutral-300 text-sm mb-4" }, "Get unlimited access to all our game development resources!"),
                          createVNode("button", { class: "w-full btn btn-primary shadow-[0_0_15px_rgba(168,85,247,0.15)]" }, " Join for $25/month ")
                        ]),
                        createVNode("div", { class: "bg-dark-100 p-6 rounded-lg ring-1 ring-purple-500/10" }, [
                          createVNode("h3", { class: "text-lg font-bold text-white mb-2" }, "Unity Mastery"),
                          createVNode("p", { class: "text-neutral-400 text-sm mb-4" }, "Learn professional game development with Unity"),
                          createVNode("button", { class: "w-full btn btn-secondary shadow-[0_0_15px_rgba(168,85,247,0.15)]" }, " Start Learning ")
                        ]),
                        createVNode("div", { class: "bg-dark-100 p-4 rounded-lg text-center ring-1 ring-purple-500/10" }, [
                          createVNode("p", { class: "text-neutral-400" }, "Advertisement Space")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Forum/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
