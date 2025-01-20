import { mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { Home, ArrowLeft, X, ChevronDown, Lock, Bookmark, Clock } from "lucide-vue-next";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: {
    course: {
      type: Object,
      default: () => ({})
    },
    sections: {
      type: Object,
      default: () => ({})
    },
    currentLesson: {
      type: Object,
      default: () => ({})
    },
    mainImageInfo: {
      type: Object,
      default: () => ({})
    },
    sideBarOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ["changeLesson", "closeSidebar"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isCurrentSection = (section) => {
      var _a, _b;
      return ((_b = (_a = props.currentLesson) == null ? void 0 : _a.data) == null ? void 0 : _b.course_section_id) === section.id;
    };
    const isCurrentEpisode = (episode) => {
      var _a, _b;
      return ((_b = (_a = props.currentLesson) == null ? void 0 : _a.data) == null ? void 0 : _b.id) === episode.id;
    };
    const lessonSwtich = (id) => {
      emit("changeLesson", id);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.sideBarOpen ? null : { display: "none" },
        class: "fixed inset-0 z-40 flex bg-dark-100/90 backdrop-blur-sm"
      }, _attrs))}><div class="relative w-full max-w-md flex flex-col bg-dark-100 shadow-2xl"><header class="flex items-center justify-between p-4 border-b border-gray-800/50"><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "group flex items-center justify-center w-10 h-10 rounded-lg bg-dark-400 hover:bg-dark-300 transition-all duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Home), { class: "w-5 h-5 text-white group-hover:text-blue-400" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Home), { class: "w-5 h-5 text-white group-hover:text-blue-400" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="group flex items-center gap-2 px-4 h-10 rounded-lg bg-dark-400 hover:bg-dark-300 transition-all duration-300">`);
      _push(ssrRenderComponent(unref(ArrowLeft), { class: "w-5 h-5 text-white group-hover:text-purple-400" }, null, _parent));
      _push(`<span class="text-white group-hover:text-purple-400 font-medium">Course Overview</span></button></div><button class="group flex items-center justify-center w-10 h-10 rounded-lg bg-dark-400 hover:bg-dark-300 transition-all duration-300">`);
      _push(ssrRenderComponent(unref(X), { class: "w-5 h-5 text-white group-hover:text-red-400" }, null, _parent));
      _push(`</button></header><div class="p-4"><div class="relative overflow-hidden rounded-xl bg-dark-400/50 backdrop-blur-sm"><div class="flex items-center gap-4 p-4"><img${ssrRenderAttr("src", __props.mainImageInfo.src)}${ssrRenderAttr("alt", __props.mainImageInfo.alt)} class="w-20 h-20 object-cover rounded-lg"><div class="flex-1 min-w-0"><h2 class="text-lg font-bold text-white truncate">${ssrInterpolate(props.course.title)}</h2><div class="mt-2 bg-dark-500 rounded-full h-2 overflow-hidden"><div class="bg-gradient-to-r from-blue-500 to-purple-500 h-full w-1/3 rounded-full"></div></div></div></div></div></div><div class="flex-1 overflow-y-auto px-4 pb-4"><!--[-->`);
      ssrRenderList(props.sections.data, (section, sectionIndex) => {
        _push(ssrRenderComponent(unref(Disclosure), {
          key: sectionIndex,
          defaultOpen: isCurrentSection(section),
          as: "div",
          class: "mt-4"
        }, {
          default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(DisclosureButton), { class: "w-full flex items-center justify-between p-4 rounded-lg bg-dark-400/50 backdrop-blur-sm hover:bg-dark-300 transition-all duration-300" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center gap-3"${_scopeId2}><span class="flex items-center justify-center w-8 h-8 rounded-lg bg-dark-500 text-white font-bold"${_scopeId2}>${ssrInterpolate(sectionIndex + 1)}</span><h3 class="text-lg font-bold text-white"${_scopeId2}>${ssrInterpolate(section.name)}</h3></div>`);
                    _push3(ssrRenderComponent(unref(ChevronDown), {
                      class: ["w-5 h-5 text-white transition-transform duration-300", { "rotate-180": open }]
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("span", { class: "flex items-center justify-center w-8 h-8 rounded-lg bg-dark-500 text-white font-bold" }, toDisplayString(sectionIndex + 1), 1),
                        createVNode("h3", { class: "text-lg font-bold text-white" }, toDisplayString(section.name), 1)
                      ]),
                      createVNode(unref(ChevronDown), {
                        class: ["w-5 h-5 text-white transition-transform duration-300", { "rotate-180": open }]
                      }, null, 8, ["class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(DisclosurePanel), { class: "mt-2 space-y-2" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(section.children, (episode, episodeIndex) => {
                      _push3(`<button class="${ssrRenderClass([[
                        isCurrentEpisode(episode) ? "bg-blue-500/20" : "hover:bg-dark-400/50",
                        episode.is_completed ? "bg-green-500/20" : "",
                        !episode.video_accessible ? "opacity-75" : ""
                      ], "group relative w-full flex items-start gap-3 p-3 rounded-lg transition-all duration-300"])}"${_scopeId2}><div class="flex items-center justify-center w-8 h-8 rounded-lg bg-dark-500/50 text-white font-medium"${_scopeId2}>`);
                      if (episode.video_accessible) {
                        _push3(`<!--[-->${ssrInterpolate(episodeIndex + 1)}<!--]-->`);
                      } else {
                        _push3(ssrRenderComponent(unref(Lock), { class: "w-4 h-4" }, null, _parent3, _scopeId2));
                      }
                      _push3(`</div><div class="flex-1 min-w-0 text-left"${_scopeId2}><h4 class="font-medium text-white group-hover:text-blue-400 transition-colors duration-300 truncate"${_scopeId2}>${ssrInterpolate(episode.name)}</h4><div class="flex items-center gap-4 mt-1"${_scopeId2}>`);
                      if (episode.watch_later) {
                        _push3(`<div class="flex items-center text-purple-400"${_scopeId2}>`);
                        _push3(ssrRenderComponent(unref(Bookmark), { class: "w-4 h-4 mr-1" }, null, _parent3, _scopeId2));
                        _push3(`<span class="text-sm"${_scopeId2}>Watch Later</span></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<div class="flex items-center text-gray-400"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(Clock), { class: "w-4 h-4 mr-1" }, null, _parent3, _scopeId2));
                      _push3(`<span class="text-sm"${_scopeId2}>${ssrInterpolate(episode.lesson_duration)}</span></div></div></div></button>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(section.children, (episode, episodeIndex) => {
                        return openBlock(), createBlock("button", {
                          key: episodeIndex,
                          onClick: ($event) => lessonSwtich(episode.id),
                          class: ["group relative w-full flex items-start gap-3 p-3 rounded-lg transition-all duration-300", [
                            isCurrentEpisode(episode) ? "bg-blue-500/20" : "hover:bg-dark-400/50",
                            episode.is_completed ? "bg-green-500/20" : "",
                            !episode.video_accessible ? "opacity-75" : ""
                          ]]
                        }, [
                          createVNode("div", { class: "flex items-center justify-center w-8 h-8 rounded-lg bg-dark-500/50 text-white font-medium" }, [
                            episode.video_accessible ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createTextVNode(toDisplayString(episodeIndex + 1), 1)
                            ], 64)) : (openBlock(), createBlock(unref(Lock), {
                              key: 1,
                              class: "w-4 h-4"
                            }))
                          ]),
                          createVNode("div", { class: "flex-1 min-w-0 text-left" }, [
                            createVNode("h4", { class: "font-medium text-white group-hover:text-blue-400 transition-colors duration-300 truncate" }, toDisplayString(episode.name), 1),
                            createVNode("div", { class: "flex items-center gap-4 mt-1" }, [
                              episode.watch_later ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "flex items-center text-purple-400"
                              }, [
                                createVNode(unref(Bookmark), { class: "w-4 h-4 mr-1" }),
                                createVNode("span", { class: "text-sm" }, "Watch Later")
                              ])) : createCommentVNode("", true),
                              createVNode("div", { class: "flex items-center text-gray-400" }, [
                                createVNode(unref(Clock), { class: "w-4 h-4 mr-1" }),
                                createVNode("span", { class: "text-sm" }, toDisplayString(episode.lesson_duration), 1)
                              ])
                            ])
                          ])
                        ], 10, ["onClick"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(DisclosureButton), { class: "w-full flex items-center justify-between p-4 rounded-lg bg-dark-400/50 backdrop-blur-sm hover:bg-dark-300 transition-all duration-300" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode("span", { class: "flex items-center justify-center w-8 h-8 rounded-lg bg-dark-500 text-white font-bold" }, toDisplayString(sectionIndex + 1), 1),
                      createVNode("h3", { class: "text-lg font-bold text-white" }, toDisplayString(section.name), 1)
                    ]),
                    createVNode(unref(ChevronDown), {
                      class: ["w-5 h-5 text-white transition-transform duration-300", { "rotate-180": open }]
                    }, null, 8, ["class"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(unref(DisclosurePanel), { class: "mt-2 space-y-2" }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(section.children, (episode, episodeIndex) => {
                      return openBlock(), createBlock("button", {
                        key: episodeIndex,
                        onClick: ($event) => lessonSwtich(episode.id),
                        class: ["group relative w-full flex items-start gap-3 p-3 rounded-lg transition-all duration-300", [
                          isCurrentEpisode(episode) ? "bg-blue-500/20" : "hover:bg-dark-400/50",
                          episode.is_completed ? "bg-green-500/20" : "",
                          !episode.video_accessible ? "opacity-75" : ""
                        ]]
                      }, [
                        createVNode("div", { class: "flex items-center justify-center w-8 h-8 rounded-lg bg-dark-500/50 text-white font-medium" }, [
                          episode.video_accessible ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createTextVNode(toDisplayString(episodeIndex + 1), 1)
                          ], 64)) : (openBlock(), createBlock(unref(Lock), {
                            key: 1,
                            class: "w-4 h-4"
                          }))
                        ]),
                        createVNode("div", { class: "flex-1 min-w-0 text-left" }, [
                          createVNode("h4", { class: "font-medium text-white group-hover:text-blue-400 transition-colors duration-300 truncate" }, toDisplayString(episode.name), 1),
                          createVNode("div", { class: "flex items-center gap-4 mt-1" }, [
                            episode.watch_later ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "flex items-center text-purple-400"
                            }, [
                              createVNode(unref(Bookmark), { class: "w-4 h-4 mr-1" }),
                              createVNode("span", { class: "text-sm" }, "Watch Later")
                            ])) : createCommentVNode("", true),
                            createVNode("div", { class: "flex items-center text-gray-400" }, [
                              createVNode(unref(Clock), { class: "w-4 h-4 mr-1" }),
                              createVNode("span", { class: "text-sm" }, toDisplayString(episode.lesson_duration), 1)
                            ])
                          ])
                        ])
                      ], 10, ["onClick"]);
                    }), 128))
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="hidden md:block flex-1 bg-black/20"></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Course/ViewComponents/Sidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
