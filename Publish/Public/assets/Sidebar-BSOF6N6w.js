import { mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { _ as _sfc_main$1 } from "./dynamicIcon-DKOdjdPH.js";
import "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
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
    const lessonSwtich = async (id) => {
      emit("changeLesson", id);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.sideBarOpen ? null : { display: "none" },
        class: ["fixed overflow-y-auto top-0 left-0 z-40 p-4 w-full max-w-lg h-screen bg-dark-100 master-shadow-lesson-03", {
          "transform translate-x-[width-of-sidebar] transition-transform duration-300": __props.sideBarOpen
        }],
        tabindex: "-1",
        "aria-labelledby": "drawer-label",
        "aria-hidden": "true"
      }, _attrs))}><header class="mb-2.5 h-10 md:h-8 flex gap-x-1 flex-shrink-0 justify-between"><div><a class="btn bg-dark-blue-100 px-0 md:w-8 md:h-8 w-10 h-10 rounded-lg hover:bg-blue/25" href="/">`);
      _push(ssrRenderComponent(_sfc_main$1, { componentId: "home" }, null, _parent));
      _push(`</a></div><div class="mr-auto"><a class="btn bg-dark-blue-100 inline-flex items-center px-3 text-2xs h-full rounded-lg bg-blue-15 hover:bg-blue/25 font-normal" href="#"><div class="flex items-center space-x-1">`);
      _push(ssrRenderComponent(_sfc_main$1, { componentId: "leftArrow" }, null, _parent));
      _push(`<span class="flex-center h-full flex-shrink-0 text-wrap leading-none"> Course Overview </span></div></a></div><div><button class="btn bg-dark-blue-100 is-solid leading-none has-icon rounded-lg rounded-lg px-0 md:w-8 md:h-8 w-10 h-10" title="Tip: press the &#39;s&#39; key to open this search window.">`);
      _push(ssrRenderComponent(_sfc_main$1, { componentId: "magnifier" }, null, _parent));
      _push(`</button></div><div><button class="btn bg-dark-blue-100 px-0 rounded-lg md:w-8 md:h-8 w-10 h-10" title="Close Sidebar">`);
      _push(ssrRenderComponent(_sfc_main$1, { componentId: "leftArrowDouble" }, null, _parent));
      _push(`</button></div></header><a class="panel transition-colors duration-300 bg-dark-blue-100 sticky top-0 z-10 flex flex-shrink-0 cursor-pointer items-center overflow-hidden rounded-md px-0 pr-2 py-0 mt-6" href="#"><img loading="lazy" class="mr-7 scale-125"${ssrRenderAttr("src", __props.mainImageInfo.src)}${ssrRenderAttr("alt", __props.mainImageInfo.alt)} style="${ssrRenderStyle({ "margin-left": "-25px" })}" width="75" height="75"><div><h2 class="line-clamp-2 text-lg font-semibold leading-tight text-balance"${ssrRenderAttr("title", props.course.title)}>${ssrInterpolate(props.course.title)}</h2><progress class="progress w-56 progress-accent" value="10" max="100"></progress></div></a><!--[-->`);
      ssrRenderList(props.sections.data, (item, index) => {
        _push(ssrRenderComponent(unref(Disclosure), {
          key: index,
          defaultOpen: props.currentLesson && props.currentLesson.data.course_section_id === item.id || !props.currentLesson && index === 0
        }, {
          default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(DisclosureButton), { class: "panel relative transition-colors duration-300 flex w-full cursor-pointer items-center my-[5px] h-[45px] rounded-md px-4 py-1 bg-dark-blue-300" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3 class="flex items-center pr-4 text-xl font-medium"${ssrRenderAttr("title", item.name)}${_scopeId2}><span class="border-r mr-3 pr-3"${_scopeId2}>${ssrInterpolate(index + 1)}</span><span class="line-clamp-1 inline-block text-lg font-normal"${_scopeId2}>${ssrInterpolate(item.name)}</span></h3><div class="absolute right-0 flex items-center space-x-3"${_scopeId2}><button class="p-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$1, { componentId: "arrowDown" }, null, _parent3, _scopeId2));
                    _push3(`</button></div>`);
                  } else {
                    return [
                      createVNode("h3", {
                        class: "flex items-center pr-4 text-xl font-medium",
                        title: item.name
                      }, [
                        createVNode("span", { class: "border-r mr-3 pr-3" }, toDisplayString(index + 1), 1),
                        createVNode("span", { class: "line-clamp-1 inline-block text-lg font-normal" }, toDisplayString(item.name), 1)
                      ], 8, ["title"]),
                      createVNode("div", { class: "absolute right-0 flex items-center space-x-3" }, [
                        createVNode("button", { class: "p-3" }, [
                          createVNode(_sfc_main$1, { componentId: "arrowDown" })
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(DisclosurePanel), null, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<ul class="w-full p-2 bg-dark-200 rounded-lg"${_scopeId2}><!--[-->`);
                    ssrRenderList(item.children, (item2, index2) => {
                      _push3(`<li class="${ssrRenderClass([{
                        "bg-dark-blue-900": props.currentLesson && item2.id === props.currentLesson.data.id,
                        "bg-green-600": item2.is_completed,
                        "bg-gray-600 opacity-50": !item2.video_accessible
                      }, "px-2 pr-4 py-0 rounded-lg bg-dark-blue-200 w-full hover:bg-dark-blue-400 text-neutral relative inline-flex items-center overflow-hidden my-1"])}"${_scopeId2}><div class="items-center px-4 py-2 space-x-3 text-sm text-white rounded-full md:flex bg-dark-100"${_scopeId2}>`);
                      if (item2.video_accessible) {
                        _push3(`<!--[-->${ssrInterpolate(index2 + 1)}<!--]-->`);
                      } else {
                        _push3(ssrRenderComponent(_sfc_main$1, { componentId: "lock" }, null, _parent3, _scopeId2));
                      }
                      _push3(`</div><div class="flex-shrink-0 p-3"${_scopeId2}><p class="text-sm font-bold"${_scopeId2}>${ssrInterpolate(item2.name)}</p><div class="flex justify-start"${_scopeId2}><div class="tooltip" data-tip="Watch Later"${_scopeId2}>`);
                      if (item2.watch_later) {
                        _push3(`<span class="mr-3 inline-flex items-center"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_sfc_main$1, { componentId: "eye" }, null, _parent3, _scopeId2));
                        _push3(`</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div><span class="mr-3 inline-flex items-center"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_sfc_main$1, { componentId: "clock" }, null, _parent3, _scopeId2));
                      _push3(`<span class="ml-1 text-sm text-grey-600/75 font-semibold"${_scopeId2}>${ssrInterpolate(item2.lesson_duration)}</span></span></div></div></li>`);
                    });
                    _push3(`<!--]--></ul>`);
                  } else {
                    return [
                      createVNode("ul", { class: "w-full p-2 bg-dark-200 rounded-lg" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.children, (item2, index2) => {
                          return openBlock(), createBlock("li", {
                            class: ["px-2 pr-4 py-0 rounded-lg bg-dark-blue-200 w-full hover:bg-dark-blue-400 text-neutral relative inline-flex items-center overflow-hidden my-1", {
                              "bg-dark-blue-900": props.currentLesson && item2.id === props.currentLesson.data.id,
                              "bg-green-600": item2.is_completed,
                              "bg-gray-600 opacity-50": !item2.video_accessible
                            }],
                            key: index2,
                            onClick: ($event) => lessonSwtich(item2.id)
                          }, [
                            createVNode("div", { class: "items-center px-4 py-2 space-x-3 text-sm text-white rounded-full md:flex bg-dark-100" }, [
                              item2.video_accessible ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createTextVNode(toDisplayString(index2 + 1), 1)
                              ], 64)) : (openBlock(), createBlock(_sfc_main$1, {
                                key: 1,
                                componentId: "lock"
                              }))
                            ]),
                            createVNode("div", { class: "flex-shrink-0 p-3" }, [
                              createVNode("p", { class: "text-sm font-bold" }, toDisplayString(item2.name), 1),
                              createVNode("div", { class: "flex justify-start" }, [
                                createVNode("div", {
                                  class: "tooltip",
                                  "data-tip": "Watch Later"
                                }, [
                                  item2.watch_later ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "mr-3 inline-flex items-center"
                                  }, [
                                    createVNode(_sfc_main$1, { componentId: "eye" })
                                  ])) : createCommentVNode("", true)
                                ]),
                                createVNode("span", { class: "mr-3 inline-flex items-center" }, [
                                  createVNode(_sfc_main$1, { componentId: "clock" }),
                                  createVNode("span", { class: "ml-1 text-sm text-grey-600/75 font-semibold" }, toDisplayString(item2.lesson_duration), 1)
                                ])
                              ])
                            ])
                          ], 10, ["onClick"]);
                        }), 128))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(DisclosureButton), { class: "panel relative transition-colors duration-300 flex w-full cursor-pointer items-center my-[5px] h-[45px] rounded-md px-4 py-1 bg-dark-blue-300" }, {
                  default: withCtx(() => [
                    createVNode("h3", {
                      class: "flex items-center pr-4 text-xl font-medium",
                      title: item.name
                    }, [
                      createVNode("span", { class: "border-r mr-3 pr-3" }, toDisplayString(index + 1), 1),
                      createVNode("span", { class: "line-clamp-1 inline-block text-lg font-normal" }, toDisplayString(item.name), 1)
                    ], 8, ["title"]),
                    createVNode("div", { class: "absolute right-0 flex items-center space-x-3" }, [
                      createVNode("button", { class: "p-3" }, [
                        createVNode(_sfc_main$1, { componentId: "arrowDown" })
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024),
                createVNode(unref(DisclosurePanel), null, {
                  default: withCtx(() => [
                    createVNode("ul", { class: "w-full p-2 bg-dark-200 rounded-lg" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.children, (item2, index2) => {
                        return openBlock(), createBlock("li", {
                          class: ["px-2 pr-4 py-0 rounded-lg bg-dark-blue-200 w-full hover:bg-dark-blue-400 text-neutral relative inline-flex items-center overflow-hidden my-1", {
                            "bg-dark-blue-900": props.currentLesson && item2.id === props.currentLesson.data.id,
                            "bg-green-600": item2.is_completed,
                            "bg-gray-600 opacity-50": !item2.video_accessible
                          }],
                          key: index2,
                          onClick: ($event) => lessonSwtich(item2.id)
                        }, [
                          createVNode("div", { class: "items-center px-4 py-2 space-x-3 text-sm text-white rounded-full md:flex bg-dark-100" }, [
                            item2.video_accessible ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createTextVNode(toDisplayString(index2 + 1), 1)
                            ], 64)) : (openBlock(), createBlock(_sfc_main$1, {
                              key: 1,
                              componentId: "lock"
                            }))
                          ]),
                          createVNode("div", { class: "flex-shrink-0 p-3" }, [
                            createVNode("p", { class: "text-sm font-bold" }, toDisplayString(item2.name), 1),
                            createVNode("div", { class: "flex justify-start" }, [
                              createVNode("div", {
                                class: "tooltip",
                                "data-tip": "Watch Later"
                              }, [
                                item2.watch_later ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "mr-3 inline-flex items-center"
                                }, [
                                  createVNode(_sfc_main$1, { componentId: "eye" })
                                ])) : createCommentVNode("", true)
                              ]),
                              createVNode("span", { class: "mr-3 inline-flex items-center" }, [
                                createVNode(_sfc_main$1, { componentId: "clock" }),
                                createVNode("span", { class: "ml-1 text-sm text-grey-600/75 font-semibold" }, toDisplayString(item2.lesson_duration), 1)
                              ])
                            ])
                          ])
                        ], 10, ["onClick"]);
                      }), 128))
                    ])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Store/ViewComponents/Sidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
