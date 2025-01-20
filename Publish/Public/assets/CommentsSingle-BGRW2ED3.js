import { defineComponent, ref, onMounted, mergeProps, unref, useSSRContext, computed, isRef } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderList, ssrRenderTeleport } from "vue/server-renderer";
import "./axios-BWWnXGbF.js";
import { usePage } from "@inertiajs/vue3";
import { useMessage } from "naive-ui";
import { MessageCircle, X, AlertCircle, InfoIcon, Send, MoreVertical, Edit2, Trash2, Heart, Flag } from "lucide-vue-next";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { M as MarkdownRenderer } from "./Markdown-D1WgnuMs.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Comment",
  __ssrInlineRender: true,
  props: {
    modelClass: {
      type: String,
      default: ""
    },
    modelId: {
      type: Number,
      default: 0
    },
    keyEditor: {
      type: String,
      default: null
    },
    commentClass: {
      type: String,
      default: "w-full rounded-lg"
    }
  },
  emits: ["fresh-comments", "close"],
  setup(__props, { emit: __emit }) {
    useMessage();
    const show = ref(false);
    const showError = ref(false);
    const isSubmitting = ref(false);
    const props = __props;
    let lesson_comment = ref("");
    ref("");
    onMounted(() => {
      setTimeout(() => {
        show.value = true;
      }, 50);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 bg-dark-300/80 backdrop-blur-sm flex items-end justify-center sm:items-center p-4 z-50" }, _attrs))}><div class="${ssrRenderClass([{ "translate-y-0 opacity-100": show.value, "translate-y-8 opacity-0": !show.value }, "w-full max-w-2xl bg-dark-200 rounded-xl shadow-2xl transform transition-all duration-300 ease-out"])}"><div class="px-6 py-4 border-b border-dark-100 flex items-center justify-between"><div class="flex items-center space-x-3">`);
      _push(ssrRenderComponent(unref(MessageCircle), { class: "w-5 h-5 text-blue-400" }, null, _parent));
      _push(`<h3 class="text-lg font-medium text-white">Add Your Comment</h3></div><button class="text-gray-400 hover:text-white transition-colors duration-200">`);
      _push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent));
      _push(`</button></div>`);
      if (unref(usePage)().props.isUserAuth) {
        _push(`<form class="p-6"><div class="${ssrRenderClass(props.commentClass)}"><div class="relative"><textarea placeholder="Share your thoughts..." class="${ssrRenderClass([{ "border-red-500": showError.value }, "w-full min-h-[120px] bg-dark-300 text-gray-200 rounded-lg p-4 border border-dark-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 placeholder-gray-500"])}">${ssrInterpolate(unref(lesson_comment))}</textarea><div class="absolute bottom-3 right-3 text-sm text-gray-400">${ssrInterpolate(unref(lesson_comment).length)} / 1000 </div></div>`);
        if (showError.value) {
          _push(`<div class="mt-2 text-red-400 text-sm flex items-center space-x-1">`);
          _push(ssrRenderComponent(unref(AlertCircle), { class: "w-4 h-4" }, null, _parent));
          _push(`<span>Please enter your comment</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-6 bg-dark-300/50 rounded-lg p-4"><div class="flex items-center space-x-2 text-gray-300">`);
        _push(ssrRenderComponent(unref(InfoIcon), { class: "w-4 h-4 text-blue-400" }, null, _parent));
        _push(`<span class="text-sm">Please follow our community guidelines, you may use markdown syntax.</span></div></div><div class="mt-6 flex items-center justify-end space-x-3"><button type="button" class="px-4 py-2 bg-dark-300 hover:bg-dark-100 text-gray-300 rounded-lg transition-colors duration-200 flex items-center space-x-2">`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`<span>Cancel</span></button><button type="submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="relative group px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-200 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"><div class="flex items-center space-x-2">`);
        _push(ssrRenderComponent(unref(Send), { class: "w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" }, null, _parent));
        _push(`<span>${ssrInterpolate(isSubmitting.value ? "Sending..." : "Submit")}</span></div></button></div></div></form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Comment/Comment.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CommentsSingle",
  __ssrInlineRender: true,
  props: {
    comment: {
      type: Object,
      required: true
    },
    keyEditor: {
      type: String,
      default: null
    },
    isReply: {
      type: Boolean,
      default: false
    }
  },
  emits: ["fresh-comments"],
  setup(__props, { emit: __emit }) {
    useMessage();
    const props = __props;
    ref(false);
    let editMode = ref(false);
    let replyCommentModal = ref(false);
    computed(() => {
      return isHotComment.value || isPopular.value || isFeatured.value || isHighlighted.value;
    });
    const isHotComment = computed(() => {
      return props.comment.likes_last_hour > 5;
    });
    const isPopular = computed(() => {
      return props.comment.is_helpful >= 10;
    });
    const isFeatured = computed(() => {
      return props.comment.is_featured;
    });
    const isHighlighted = computed(() => {
      return props.comment.is_highlighted;
    });
    computed(() => {
      if (isHotComment.value) return "hot-frame";
      if (isPopular.value) return "popular-frame";
      if (isFeatured.value) return "featured-frame";
      if (isHighlighted.value) return "highlighted-frame";
      return "";
    });
    computed(() => {
      if (isHotComment.value) return "bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20";
      if (isPopular.value) return "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20";
      if (isFeatured.value) return "bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-yellow-500/20";
      if (isHighlighted.value) return "bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20";
      return "";
    });
    computed(() => {
      if (isHotComment.value) return "bg-red-500/90 text-white";
      if (isPopular.value) return "bg-purple-500/90 text-white";
      if (isFeatured.value) return "bg-yellow-500/90 text-black";
      if (isHighlighted.value) return "bg-green-500/90 text-white";
      return "";
    });
    computed(() => {
      if (isHotComment.value) return "🔥 Hot";
      if (isPopular.value) return "⭐ Popular";
      if (isFeatured.value) return "👑 Featured";
      if (isHighlighted.value) return "📌 Highlighted";
      return "";
    });
    const canEdit = computed(() => {
      var _a, _b, _c, _d;
      return ((_b = (_a = usePage().props.authUserInfo) == null ? void 0 : _a.data) == null ? void 0 : _b.id) === ((_d = (_c = props.comment) == null ? void 0 : _c.user) == null ? void 0 : _d.id);
    });
    const canDelete = computed(() => {
      return canEdit.value || usePage().props.guard === "admin";
    });
    const commentsRefresh = () => {
      replyCommentModal.value = false;
      emit("fresh-comments");
    };
    const emit = __emit;
    let reportAbuseModal = ref(false);
    let reportReason = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "relative py-4 md:py-6" }, _attrs))} data-v-d9c21e0c><div class="relative bg-dark-700/50 rounded-lg p-4 md:p-6 hover:bg-dark-600/50 transition-colors duration-200" data-v-d9c21e0c><div class="flex gap-3 md:gap-4" data-v-d9c21e0c><div class="flex flex-col items-center flex-shrink-0" data-v-d9c21e0c><div class="w-10 h-10 md:w-12 md:h-12" data-v-d9c21e0c><img${ssrRenderAttr("src", (_b = (_a = props.comment) == null ? void 0 : _a.user) == null ? void 0 : _b.avatar)}${ssrRenderAttr("alt", (_d = (_c = props.comment) == null ? void 0 : _c.user) == null ? void 0 : _d.full_name)} class="rounded-full h-full w-full object-cover" data-v-d9c21e0c></div><div class="mt-1 px-2 py-0.5 bg-dark-500/80 rounded-full text-[10px] md:text-xs text-gray-300" data-v-d9c21e0c> Level ${ssrInterpolate(((_e = props.comment.user) == null ? void 0 : _e.level) || "1")}</div>`);
      if ((_g = (_f = props.comment) == null ? void 0 : _f.user) == null ? void 0 : _g.has_subscription) {
        _push(`<div class="mt-1 px-2 py-0.5 bg-purple-500/20 rounded-full text-[10px] md:text-xs text-purple-400" data-v-d9c21e0c> Subscriber </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex-1 min-w-0" data-v-d9c21e0c><div class="flex justify-between items-start gap-2" data-v-d9c21e0c><div data-v-d9c21e0c><div class="flex items-baseline gap-2" data-v-d9c21e0c><h3 class="text-sm md:text-base font-semibold text-gray-200" data-v-d9c21e0c>${ssrInterpolate((_h = props.comment.user) == null ? void 0 : _h.full_name)}</h3><time class="text-xs text-gray-400" data-v-d9c21e0c> Posted ${ssrInterpolate(props.comment.created_at_diff)}</time></div></div>`);
      if (unref(usePage)().props.isUserAuth) {
        _push(`<div class="dropdown dropdown-left" data-v-d9c21e0c><label tabindex="0" class="btn btn-ghost btn-xs md:btn-sm p-1 h-auto min-h-0" data-v-d9c21e0c>`);
        _push(ssrRenderComponent(unref(MoreVertical), { class: "w-4 h-4 text-gray-400" }, null, _parent));
        _push(`</label><ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow-lg bg-dark-800 rounded-lg w-40" data-v-d9c21e0c>`);
        if (canEdit.value) {
          _push(`<li data-v-d9c21e0c><button class="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:bg-dark-600" data-v-d9c21e0c>`);
          _push(ssrRenderComponent(unref(Edit2), { class: "w-4 h-4" }, null, _parent));
          _push(` Edit </button></li>`);
        } else {
          _push(`<!---->`);
        }
        if (canDelete.value) {
          _push(`<li data-v-d9c21e0c><button class="flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-dark-600" data-v-d9c21e0c>`);
          _push(ssrRenderComponent(unref(Trash2), { class: "w-4 h-4" }, null, _parent));
          _push(` Delete </button></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-2" data-v-d9c21e0c>`);
      if (!unref(editMode)) {
        _push(`<div class="text-gray-300 prose prose-invert prose-sm max-w-none" data-v-d9c21e0c>`);
        _push(ssrRenderComponent(MarkdownRenderer, {
          content: props.comment.body
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<form class="space-y-2" data-v-d9c21e0c><textarea class="w-full bg-dark-800 rounded-lg p-3 text-sm text-gray-200 border border-dark-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500" rows="3" data-v-d9c21e0c>${ssrInterpolate(props.comment.body)}</textarea><div class="flex justify-end gap-2" data-v-d9c21e0c><button type="button" class="btn btn-ghost btn-xs md:btn-sm" data-v-d9c21e0c> Cancel </button><button type="submit" class="btn btn-primary btn-xs md:btn-sm" data-v-d9c21e0c> Update </button></div></form>`);
      }
      _push(`</div><div class="flex items-center gap-3 mt-3" data-v-d9c21e0c>`);
      if (unref(usePage)().props.guard === "web") {
        _push(`<button class="${ssrRenderClass([props.comment.user_helpful_Comments ? "text-purple-400" : "text-gray-400", "inline-flex items-center gap-1.5 text-sm"])}" data-v-d9c21e0c>`);
        _push(ssrRenderComponent(unref(Heart), {
          class: [props.comment.user_helpful_Comments ? "fill-current" : "", "w-4 h-4"]
        }, null, _parent));
        _push(`<span data-v-d9c21e0c>${ssrInterpolate(props.comment.is_helpful)}</span></button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(usePage)().props.isUserAuth) {
        _push(`<button class="inline-flex items-center gap-1.5 text-sm text-gray-400" data-v-d9c21e0c>`);
        _push(ssrRenderComponent(unref(MessageCircle), { class: "w-4 h-4" }, null, _parent));
        _push(`<span class="hidden md:inline" data-v-d9c21e0c>Reply</span></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="inline-flex items-center gap-1.5 text-sm text-gray-400" data-v-d9c21e0c>`);
      _push(ssrRenderComponent(unref(Flag), { class: "w-4 h-4" }, null, _parent));
      _push(`<span class="hidden md:inline" data-v-d9c21e0c>Report</span></button></div></div></div></div>`);
      if ((_i = props.comment.replies) == null ? void 0 : _i.length) {
        _push(`<div class="ml-8 md:ml-12 mt-2 space-y-2" data-v-d9c21e0c><div class="absolute left-5 md:left-6 top-16 bottom-0 w-px bg-purple-500/20" data-v-d9c21e0c></div><!--[-->`);
        ssrRenderList(props.comment.replies, (reply) => {
          _push(ssrRenderComponent(SingleComment, {
            key: reply.id,
            comment: reply,
            "key-editor": props.keyEditor,
            "is-reply": true,
            onFreshComments: commentsRefresh
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(replyCommentModal)) {
          _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4" data-v-d9c21e0c><div class="absolute inset-0 bg-black/50 backdrop-blur-sm" data-v-d9c21e0c></div><div class="relative bg-dark-700 rounded-xl p-6 max-w-lg w-full" data-v-d9c21e0c>`);
          _push2(ssrRenderComponent(_sfc_main$1, {
            "model-class": "comment",
            "model-id": props.comment.id,
            "key-editor": props.keyEditor,
            onFreshComments: commentsRefresh,
            onClose: ($event) => isRef(replyCommentModal) ? replyCommentModal.value = false : replyCommentModal = false
          }, null, _parent));
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
        if (unref(reportAbuseModal)) {
          _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4" data-v-d9c21e0c><div class="absolute inset-0 bg-black/50 backdrop-blur-sm" data-v-d9c21e0c></div><div class="relative bg-dark-700 rounded-xl p-6 max-w-lg w-full" data-v-d9c21e0c><div class="text-center" data-v-d9c21e0c>`);
          _push2(ssrRenderComponent(unref(Flag), { class: "w-12 h-12 text-yellow-400 mx-auto" }, null, _parent));
          _push2(`<h3 class="mt-4 text-xl font-medium text-gray-200" data-v-d9c21e0c>Report Comment</h3></div><form class="mt-6" data-v-d9c21e0c><textarea placeholder="Please describe why you&#39;re reporting this comment..." class="w-full bg-dark-800 rounded-lg p-4 text-sm text-gray-200 border border-dark-600 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500" rows="4" data-v-d9c21e0c>${ssrInterpolate(unref(reportReason))}</textarea><div class="mt-6 flex justify-end gap-3" data-v-d9c21e0c><button type="button" class="btn btn-ghost btn-sm" data-v-d9c21e0c> Cancel </button><button type="submit" class="btn btn-warning btn-sm" data-v-d9c21e0c> Submit Report </button></div></form></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Comment/CommentsSingle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SingleComment = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d9c21e0c"]]);
export {
  SingleComment as S,
  _sfc_main$1 as _
};
