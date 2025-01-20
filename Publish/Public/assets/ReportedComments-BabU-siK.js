import { ref, resolveComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, unref, isRef, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./App-DeZIQ0nQ.js";
import _sfc_main$2 from "./CommentComponent-C_JKWbES.js";
import { g as _sfc_main$3 } from "./Input-BXi_X4mZ.js";
import "naive-ui";
import "./FlashMessage-C9hwciIU.js";
import "axios";
import "lucide-vue-next";
import "lodash/debounce.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./dynamicIcon-DKOdjdPH.js";
import "@headlessui/vue";
import "dompurify";
import "marked";
import "turndown";
import "date-fns";
const _sfc_main = {
  __name: "ReportedComments",
  __ssrInlineRender: true,
  props: {
    reportedComments: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    let deleteModal = ref(false);
    let aprroveModal = ref(false);
    let disproveModal = ref(false);
    let modalCommentAction = ref(null);
    const confirmModal = (modalAction) => {
      const action = modalAction.type;
      const comment = modalAction.comment;
      modalCommentAction.value = comment;
      if (action === "delete") {
        deleteModal.value = true;
      } else if (action === "disprove") {
        disproveModal.value = true;
      } else if (action === "approve") {
        aprroveModal.value = true;
      }
    };
    const deleteComment = async () => {
      await router.delete(
        route("gamedev.comment.reported.delete", modalCommentAction.value),
        {},
        {
          preserveState: true,
          preserveScroll: true,
          only: ["reportedComments"]
        }
      );
      deleteModal.value = false;
    };
    const disproveComment = async () => {
      await router.delete(
        route("gamedev.comment.reported.disprove", modalCommentAction.value),
        {},
        {
          preserveState: true,
          preserveScroll: true,
          only: ["reportedComments"]
        }
      );
      disproveModal.value = false;
    };
    const aprroveComment = async () => {
      await router.post(
        route("gamedev.comment.reported.approve", modalCommentAction.value),
        {},
        {
          preserveState: true,
          preserveScroll: true,
          only: ["reportedComments"]
        }
      );
      aprroveModal.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_card = resolveComponent("n-card");
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_card, {
              title: "Reported Comments",
              class: "col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(props.reportedComments.data, (item, index) => {
                    _push3(ssrRenderComponent(_sfc_main$2, {
                      comment: item,
                      key: index,
                      onCommentAction: confirmModal
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.reportedComments.data, (item, index) => {
                        return openBlock(), createBlock(_sfc_main$2, {
                          comment: item,
                          key: index,
                          onCommentAction: confirmModal
                        }, null, 8, ["comment"]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              show: unref(deleteModal),
              onClose: ($event) => isRef(deleteModal) ? deleteModal.value = false : deleteModal = false,
              onConfirm: deleteComment,
              isLarge: true,
              showFooter: true,
              showHeader: false,
              modalClass: "bg-red-400 text-black"
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<header class="text-center md:px-12 text-neutral"${_scopeId2}><h2 class="text-4xl font-semibold"${_scopeId2}>Delete Comment</h2></header>`);
                } else {
                  return [
                    createVNode("header", { class: "text-center md:px-12 text-neutral" }, [
                      createVNode("h2", { class: "text-4xl font-semibold" }, "Delete Comment")
                    ])
                  ];
                }
              }),
              body: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="px-5 py-7"${_scopeId2}><h2 class="text-2xl font-semibold"${_scopeId2}> Are you sure you want to delete this comment? </h2></div>`);
                } else {
                  return [
                    createVNode("div", { class: "px-5 py-7" }, [
                      createVNode("h2", { class: "text-2xl font-semibold" }, " Are you sure you want to delete this comment? ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              show: unref(aprroveModal),
              onClose: ($event) => isRef(aprroveModal) ? aprroveModal.value = false : aprroveModal = false,
              onConfirm: aprroveComment,
              isLarge: true,
              showFooter: true,
              showHeader: false,
              modalClass: "bg-green-500 text-black"
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<header class="text-center md:px-12 text-neutral"${_scopeId2}><h2 class="text-4xl font-semibold"${_scopeId2}>Approve Comment</h2></header>`);
                } else {
                  return [
                    createVNode("header", { class: "text-center md:px-12 text-neutral" }, [
                      createVNode("h2", { class: "text-4xl font-semibold" }, "Approve Comment")
                    ])
                  ];
                }
              }),
              body: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="px-5 py-7"${_scopeId2}><h2 class="text-2xl font-semibold"${_scopeId2}> Are you sure you want to approve this comment? </h2></div>`);
                } else {
                  return [
                    createVNode("div", { class: "px-5 py-7" }, [
                      createVNode("h2", { class: "text-2xl font-semibold" }, " Are you sure you want to approve this comment? ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              show: unref(disproveModal),
              onClose: ($event) => isRef(disproveModal) ? disproveModal.value = false : disproveModal = false,
              onConfirm: disproveComment,
              isLarge: true,
              showFooter: true,
              showHeader: false,
              modalClass: "bg-warning text-black"
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<header class="text-center md:px-12"${_scopeId2}><h2 class="text-4xl font-semibold text-black"${_scopeId2}>Disprove Comment</h2></header>`);
                } else {
                  return [
                    createVNode("header", { class: "text-center md:px-12" }, [
                      createVNode("h2", { class: "text-4xl font-semibold text-black" }, "Disprove Comment")
                    ])
                  ];
                }
              }),
              body: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="px-5 py-7"${_scopeId2}><h2 class="text-2xl font-semibold"${_scopeId2}> Are you sure you want to disprove this comment? </h2></div>`);
                } else {
                  return [
                    createVNode("div", { class: "px-5 py-7" }, [
                      createVNode("h2", { class: "text-2xl font-semibold" }, " Are you sure you want to disprove this comment? ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_n_card, {
                title: "Reported Comments",
                class: "col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-300"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(props.reportedComments.data, (item, index) => {
                      return openBlock(), createBlock(_sfc_main$2, {
                        comment: item,
                        key: index,
                        onCommentAction: confirmModal
                      }, null, 8, ["comment"]);
                    }), 128))
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$3), {
                show: unref(deleteModal),
                onClose: ($event) => isRef(deleteModal) ? deleteModal.value = false : deleteModal = false,
                onConfirm: deleteComment,
                isLarge: true,
                showFooter: true,
                showHeader: false,
                modalClass: "bg-red-400 text-black"
              }, {
                title: withCtx(() => [
                  createVNode("header", { class: "text-center md:px-12 text-neutral" }, [
                    createVNode("h2", { class: "text-4xl font-semibold" }, "Delete Comment")
                  ])
                ]),
                body: withCtx(() => [
                  createVNode("div", { class: "px-5 py-7" }, [
                    createVNode("h2", { class: "text-2xl font-semibold" }, " Are you sure you want to delete this comment? ")
                  ])
                ]),
                _: 1
              }, 8, ["show", "onClose"]),
              createVNode(unref(_sfc_main$3), {
                show: unref(aprroveModal),
                onClose: ($event) => isRef(aprroveModal) ? aprroveModal.value = false : aprroveModal = false,
                onConfirm: aprroveComment,
                isLarge: true,
                showFooter: true,
                showHeader: false,
                modalClass: "bg-green-500 text-black"
              }, {
                title: withCtx(() => [
                  createVNode("header", { class: "text-center md:px-12 text-neutral" }, [
                    createVNode("h2", { class: "text-4xl font-semibold" }, "Approve Comment")
                  ])
                ]),
                body: withCtx(() => [
                  createVNode("div", { class: "px-5 py-7" }, [
                    createVNode("h2", { class: "text-2xl font-semibold" }, " Are you sure you want to approve this comment? ")
                  ])
                ]),
                _: 1
              }, 8, ["show", "onClose"]),
              createVNode(unref(_sfc_main$3), {
                show: unref(disproveModal),
                onClose: ($event) => isRef(disproveModal) ? disproveModal.value = false : disproveModal = false,
                onConfirm: disproveComment,
                isLarge: true,
                showFooter: true,
                showHeader: false,
                modalClass: "bg-warning text-black"
              }, {
                title: withCtx(() => [
                  createVNode("header", { class: "text-center md:px-12" }, [
                    createVNode("h2", { class: "text-4xl font-semibold text-black" }, "Disprove Comment")
                  ])
                ]),
                body: withCtx(() => [
                  createVNode("div", { class: "px-5 py-7" }, [
                    createVNode("h2", { class: "text-2xl font-semibold" }, " Are you sure you want to disprove this comment? ")
                  ])
                ]),
                _: 1
              }, 8, ["show", "onClose"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/BackEnd/Vendor/GameDev/Comments/ReportedComments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
