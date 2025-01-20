import { computed, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext, ref } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderVNode, ssrRenderSlot, ssrRenderTeleport } from "vue/server-renderer";
import { CheckCircle, MessageSquare, UserPlus, Globe, Github, Linkedin, Instagram, Twitter, Gamepad2, Shield } from "lucide-vue-next";
import { usePage, router } from "@inertiajs/vue3";
import { S as SingleComment, _ as _sfc_main$2 } from "./CommentsSingle-BGRW2ED3.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {
  __name: "InstructorDisplay",
  __ssrInlineRender: true,
  props: {
    admin: {
      type: Object,
      required: true
    },
    size: {
      type: String,
      default: "large",
      validator: (value) => ["large", "medium", "compact"].includes(value)
    },
    transparent: {
      type: Boolean,
      default: false
    },
    hoverable: {
      type: Boolean,
      default: true
    },
    showBio: {
      type: Boolean,
      default: true
    },
    showSocial: {
      type: Boolean,
      default: true
    },
    showStats: {
      type: Boolean,
      default: false
    },
    showQuickActions: {
      type: Boolean,
      default: false
    }
  },
  emits: ["message", "follow"],
  setup(__props) {
    const props = __props;
    const socialLinks = [
      {
        platform: "github",
        icon: Github,
        hoverClass: "text-gray-400 hover:text-white hover:bg-dark-400/50"
      },
      {
        platform: "linkedin",
        icon: Linkedin,
        hoverClass: "text-gray-400 hover:text-blue-400 hover:bg-blue-500/10"
      },
      {
        platform: "instagram",
        icon: Instagram,
        hoverClass: "text-gray-400 hover:text-pink-400 hover:bg-pink-500/10"
      },
      {
        platform: "twitter",
        icon: Twitter,
        hoverClass: "text-gray-400 hover:text-blue-400 hover:bg-blue-500/10"
      }
    ];
    const stats = computed(() => [
      {
        label: "Courses",
        value: props.admin.courses_count || 0
      },
      {
        label: "Students",
        value: props.admin.students_count || 0
      },
      {
        label: "Rating",
        value: props.admin.rating || "4.8"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: [
          "relative overflow-hidden rounded-xl transition-all duration-300",
          __props.size === "large" ? "p-6" : "p-4",
          __props.transparent ? "bg-dark-200/50 backdrop-blur-sm" : "bg-dark-200",
          __props.hoverable && "hover:bg-dark-300/50 hover:scale-[1.01]"
        ]
      }, _attrs))}><div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div><div class="${ssrRenderClass([__props.size === "compact" && "gap-4", "relative flex items-start gap-6"])}"><div class="relative flex-shrink-0 group"><div class="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div><img${ssrRenderAttr("src", props.admin.avatar)}${ssrRenderAttr("alt", `${props.admin.full_name}'s avatar`)} class="${ssrRenderClass([
        "relative object-cover rounded-xl",
        __props.size === "large" ? "w-32 h-32" : "w-20 h-20"
      ])}">`);
      if (props.admin.is_online) {
        _push(`<div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-dark-200"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex-1 min-w-0"><div class="flex justify-between items-start gap-4"><header><h2 class="${ssrRenderClass([
        "font-bold text-white truncate",
        __props.size === "large" ? "text-2xl" : "text-xl"
      ])}">${ssrInterpolate(props.admin.full_name)} `);
      if (props.admin.verified) {
        _push(`<span class="inline-flex items-center justify-center w-5 h-5 bg-blue-500/20 rounded-full ml-2">`);
        _push(ssrRenderComponent(unref(CheckCircle), { class: "w-4 h-4 text-blue-400" }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h2><p class="text-blue-400 font-medium">${ssrInterpolate(props.admin.work_title)}</p></header>`);
      if (__props.showQuickActions) {
        _push(`<div class="flex gap-2">`);
        if (props.admin.can_message) {
          _push(`<button class="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-dark-400/50 transition-colors">`);
          _push(ssrRenderComponent(unref(MessageSquare), { class: "w-5 h-5" }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        if (props.admin.can_follow) {
          _push(`<button class="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-dark-400/50 transition-colors">`);
          _push(ssrRenderComponent(unref(UserPlus), { class: "w-5 h-5" }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.showBio) {
        _push(`<div class="${ssrRenderClass([
          "text-gray-300 mt-2",
          __props.size === "large" ? "text-base" : "text-sm line-clamp-2"
        ])}">${props.admin.about ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.showStats) {
        _push(`<div class="flex gap-4 mt-3"><!--[-->`);
        ssrRenderList(stats.value, (stat) => {
          _push(`<div class="flex flex-col items-center px-3 py-1 bg-dark-300/50 rounded-lg"><span class="text-white font-semibold">${ssrInterpolate(stat.value)}</span><span class="text-xs text-gray-400">${ssrInterpolate(stat.label)}</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.showSocial) {
        _push(`<div class="${ssrRenderClass([{ "flex-wrap": __props.size !== "large" }, "flex items-center gap-4 mt-4"])}"><div class="flex gap-3"><!--[-->`);
        ssrRenderList(socialLinks, (link) => {
          _push(`<a style="${ssrRenderStyle(props.admin[link.platform] ? null : { display: "none" })}"${ssrRenderAttr("href", props.admin[link.platform])} target="_blank" class="${ssrRenderClass([
            "p-2 rounded-lg transition-colors",
            link.hoverClass
          ])}">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(link.icon), { class: "w-5 h-5" }, null), _parent);
          _push(`</a>`);
        });
        _push(`<!--]--></div>`);
        if (props.admin.website) {
          _push(`<a${ssrRenderAttr("href", props.admin.website)} target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg transition-colors">`);
          _push(ssrRenderComponent(unref(Globe), { class: "w-4 h-4" }, null, _parent));
          _push(`<span class="text-sm font-medium">Website</span></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Admin/InstructorDisplay.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "CommentBox",
  __ssrInlineRender: true,
  props: {
    modelId: {
      type: Number,
      required: true
    },
    modelClass: {
      type: String,
      required: true
    },
    editor_key: {
      type: [String, Number],
      required: false,
      default: null
    }
  },
  setup(__props) {
    const postCommentToogle = ref(false);
    const isWiggling = ref(false);
    ref(false);
    const props = __props;
    const refreshComments = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      router.reload({ only: ["comments"] });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))} data-v-e7cf7a62><div class="w-full mx-auto" data-v-e7cf7a62><div class="bg-dark-300/50 backdrop-blur-sm rounded-xl border border-dark-200 p-6 lg:p-8" data-v-e7cf7a62><div class="space-y-8 mb-12" data-v-e7cf7a62><div class="flex items-center justify-center space-x-3" data-v-e7cf7a62>`);
      _push(ssrRenderComponent(unref(MessageSquare), { class: "w-6 h-6 text-blue-400" }, null, _parent));
      _push(`<h2 class="text-2xl font-medium text-white" data-v-e7cf7a62>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`Discuss this lesson`);
      }, _push, _parent);
      _push(`</h2></div>`);
      if (unref(usePage)().props.isUserAuth) {
        _push(`<div class="space-y-4" data-v-e7cf7a62><div class="flex items-start space-x-4" data-v-e7cf7a62><div class="relative group" data-v-e7cf7a62><div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity duration-300" data-v-e7cf7a62></div><img${ssrRenderAttr("src", unref(usePage)().props.authUserInfo.data.avatar)} alt="Your avatar" class="relative w-12 h-12 rounded-lg object-cover flex-shrink-0" data-v-e7cf7a62></div><button class="flex-grow relative group overflow-hidden" data-v-e7cf7a62><div class="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-90 transition-opacity duration-700" data-v-e7cf7a62></div><div class="relative bg-dark-200 group-hover:bg-transparent rounded-lg p-6 text-gray-400 transition-all duration-500 group-hover:scale-[1.01] group-hover:text-white" data-v-e7cf7a62><div class="flex items-center justify-between" data-v-e7cf7a62><div class="flex items-center space-x-3" data-v-e7cf7a62>`);
        _push(ssrRenderComponent(unref(Gamepad2), {
          class: ["w-6 h-6 transition-transform duration-300", { "animate-wiggle": isWiggling.value }]
        }, null, _parent));
        _push(`<span class="text-lg font-medium" data-v-e7cf7a62>Join the discussion!</span></div><div class="flex items-center space-x-2 text-sm opacity-75" data-v-e7cf7a62>`);
        _push(ssrRenderComponent(unref(MessageSquare), { class: "w-4 h-4" }, null, _parent));
        _push(`<span data-v-e7cf7a62>Press Start</span></div></div></div><div class="absolute inset-0 pointer-events-none" data-v-e7cf7a62><!--[-->`);
        ssrRenderList(2, (n) => {
          _push(`<div class="absolute w-16 h-16 bg-white opacity-0 group-hover:animate-particle-effect rounded-full" style="${ssrRenderStyle({
            left: `${n * 40}%`,
            top: "50%",
            animationDelay: `${n * 0.3}s`
          })}" data-v-e7cf7a62></div>`);
        });
        _push(`<!--]--></div></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-6" data-v-e7cf7a62><div${ssrRenderAttrs({
        name: "comment-list",
        class: "space-y-6"
      })} data-v-e7cf7a62>`);
      ssrRenderList(unref(usePage)().props.comments.data, (item, index) => {
        _push(`<div class="relative group" data-v-e7cf7a62><div class="absolute bg-gradient-to-r from-dark-200/0 via-dark-200/50 to-dark-200/0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" data-v-e7cf7a62></div>`);
        _push(ssrRenderComponent(SingleComment, {
          comment: item,
          onFreshComments: refreshComments,
          keyEditor: props.editor_key,
          class: "relative"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`</div></div></div><div class="text-center border-t border-dark-200 pt-6" data-v-e7cf7a62><div class="flex items-center justify-center space-x-2 text-sm text-gray-400" data-v-e7cf7a62>`);
      _push(ssrRenderComponent(unref(Shield), { class: "w-4 h-4" }, null, _parent));
      _push(`<p data-v-e7cf7a62> Remember, contributions should follow our <span class="text-blue-400 hover:text-blue-300 transition-colors duration-200 hover:underline cursor-pointer" data-v-e7cf7a62> Community Guidelines </span></p></div></div></div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(postCommentToogle)) {
          _push2(ssrRenderComponent(_sfc_main$2, {
            "model-class": props.modelClass,
            "model-id": props.modelId,
            onFreshComments: refreshComments,
            onClose: ($event) => postCommentToogle.value = false
          }, null, _parent));
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Comment/CommentBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CommentBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e7cf7a62"]]);
export {
  CommentBox as C,
  _sfc_main$1 as _
};
