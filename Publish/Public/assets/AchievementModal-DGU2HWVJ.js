import { ref, watch, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderVNode, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { X, Star, Trophy } from "lucide-vue-next";
import confetti from "canvas-confetti";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "AchievementModal",
  __ssrInlineRender: true,
  props: {
    modelValue: Boolean,
    title: String,
    description: String,
    icon: Object,
    progress: {
      type: Number,
      default: 0
    },
    unlocked: Boolean,
    levelRequired: {
      type: Number,
      default: 1
    },
    reward: {
      type: String,
      default: "Achievement Points +100"
    }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    ref(null);
    const shootConfetti = () => {
      const count = 200;
      const defaults = {
        origin: { y: 0.7 },
        zIndex: 100
      };
      function fire(particleRatio, opts) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
          scalar: 1.2
        });
      }
      fire(0.25, {
        spread: 26,
        startVelocity: 55,
        colors: ["#60A5FA", "#7C3AED", "#34D399"]
      });
      fire(0.2, {
        spread: 60,
        colors: ["#F59E0B", "#10B981", "#3B82F6"]
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        colors: ["#8B5CF6", "#EC4899", "#F59E0B"]
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        colors: ["#F472B6", "#34D399", "#60A5FA"]
      });
    };
    watch(() => props.modelValue, (newVal) => {
      if (newVal && props.unlocked) {
        setTimeout(() => {
          shootConfetti();
        }, 300);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.modelValue) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4" }, _attrs))} data-v-6b7b793e><div class="achievement-modal bg-dark-500/90 rounded-3xl max-w-md w-full relative transform transition-all duration-300 scale-100 overflow-hidden" data-v-6b7b793e><div class="absolute inset-0 border-4 border-purple-900/50 rounded-3xl animated-border" data-v-6b7b793e></div><div class="absolute inset-0 overflow-hidden" data-v-6b7b793e><div class="particles" data-v-6b7b793e><!--[-->`);
        ssrRenderList(20, (n) => {
          _push(`<div class="particle-star" data-v-6b7b793e></div>`);
        });
        _push(`<!--]--></div><div class="absolute inset-0 glow-effect" data-v-6b7b793e></div><div class="absolute inset-0 grid-pattern" data-v-6b7b793e></div></div><div class="relative p-8 z-10" data-v-6b7b793e><button class="absolute -top-2 -right-2 w-8 h-8 bg-dark-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group" data-v-6b7b793e><div class="absolute inset-0 bg-red-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" data-v-6b7b793e></div>`);
        _push(ssrRenderComponent(unref(X), { class: "w-5 h-5 text-gray-400 group-hover:text-white relative z-10" }, null, _parent));
        _push(`</button><div class="relative mb-8" data-v-6b7b793e><div class="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center transform hover:scale-105 transition-transform duration-300 floating" data-v-6b7b793e>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.icon), { class: "w-14 h-14 text-blue-400 achievement-icon" }, null), _parent);
        _push(`</div><div class="${ssrRenderClass([[
          __props.unlocked ? "bg-green-500/30 text-green-300 border-2 border-green-500/50 shadow-lg shadow-green-500/20" : "bg-yellow-500/30 text-yellow-300 border-2 border-yellow-500/50 shadow-lg shadow-yellow-500/20"
        ], "absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full font-medium uppercase tracking-wider text-sm shine-effect"])}" data-v-6b7b793e><span class="drop-shadow-sm" data-v-6b7b793e>${ssrInterpolate(__props.unlocked ? "Unlocked" : "In Progress")}</span></div></div><h2 class="text-3xl font-bold mb-4 text-center animated-gradient-text drop-shadow-lg" data-v-6b7b793e>${ssrInterpolate(__props.title)}</h2><p class="text-gray-200 mb-6 text-sm leading-relaxed text-center font-medium tracking-wide" data-v-6b7b793e>${ssrInterpolate(__props.description)}</p><div class="bg-dark-600/80 rounded-2xl p-6 space-y-4 stats-container backdrop-blur-sm" data-v-6b7b793e><div class="flex items-center justify-between" data-v-6b7b793e><span class="text-gray-300 font-medium" data-v-6b7b793e>Level Required</span><div class="flex items-center gap-2 pulse" data-v-6b7b793e>`);
        _push(ssrRenderComponent(unref(Star), { class: "w-5 h-5 text-blue-400" }, null, _parent));
        _push(`<span class="font-bold text-blue-300 text-lg" data-v-6b7b793e> Level ${ssrInterpolate(__props.levelRequired)}</span></div></div>`);
        if (!__props.unlocked) {
          _push(`<div class="space-y-2" data-v-6b7b793e><div class="flex justify-between text-sm" data-v-6b7b793e><span class="text-gray-300 font-medium" data-v-6b7b793e>Progress</span><span class="text-yellow-300 font-bold text-lg" data-v-6b7b793e>${ssrInterpolate(__props.progress)}% </span></div><div class="bg-dark-700 rounded-full h-3 overflow-hidden" data-v-6b7b793e><div class="progress-bar h-full rounded-full transition-all duration-500" style="${ssrRenderStyle({ width: `${__props.progress}%` })}" data-v-6b7b793e><div class="progress-glow" data-v-6b7b793e></div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex items-center gap-4 p-4 bg-dark-700/50 rounded-xl transform hover:scale-102 transition-transform" data-v-6b7b793e><div class="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center reward-icon-container" data-v-6b7b793e>`);
        _push(ssrRenderComponent(unref(Trophy), { class: "w-6 h-6 text-yellow-400" }, null, _parent));
        _push(`</div><div class="flex-1" data-v-6b7b793e><p class="text-yellow-100 font-semibold mb-1" data-v-6b7b793e>Reward</p><p class="text-yellow-200/80 text-sm font-medium" data-v-6b7b793e>${ssrInterpolate(__props.reward)}</p></div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/User/AchievementModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AchievementModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6b7b793e"]]);
export {
  AchievementModal as default
};
