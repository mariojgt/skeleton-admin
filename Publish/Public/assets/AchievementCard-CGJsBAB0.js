import { ref, computed, mergeProps, createVNode, resolveDynamicComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrRenderVNode, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { Check } from "lucide-vue-next";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "AchievementCard",
  __ssrInlineRender: true,
  props: {
    title: String,
    description: String,
    icon: Object,
    progress: Number,
    unlocked: Boolean
  },
  setup(__props) {
    const mousePosition = ref({ x: 0, y: 0 });
    const isHovered = ref(false);
    const cardStyle = computed(() => {
      if (!isHovered.value) {
        return {
          transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
          transition: "transform 0.5s ease-out"
        };
      }
      const maxRotation = 10;
      const xRotation = (mousePosition.value.y - 0.5) * maxRotation;
      const yRotation = (mousePosition.value.x - 0.5) * maxRotation;
      return {
        transform: `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
        transition: "transform 0.1s ease-out"
      };
    });
    const holographicStyle = computed(() => {
      const x = mousePosition.value.x * 100;
      const y = mousePosition.value.y * 100;
      return {
        background: `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.1) 0%, transparent 50%)`
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "achievement-card group relative" }, _attrs))} data-v-0568927e><div class="card-container transition-transform duration-200 ease-out" style="${ssrRenderStyle(cardStyle.value)}" data-v-0568927e><div class="${ssrRenderClass([{
        "opacity-60 grayscale hover:opacity-80": !__props.unlocked,
        "ring-2 ring-blue-500/50": __props.unlocked
      }, "relative p-6 bg-dark-600/50 rounded-2xl border border-dark-400/30 backdrop-blur-sm shadow-xl transition-all duration-300 overflow-hidden"])}" data-v-0568927e><div class="absolute inset-0 holographic-effect opacity-20" style="${ssrRenderStyle(holographicStyle.value)}" data-v-0568927e></div><div class="${ssrRenderClass([{ "active": __props.unlocked }, "absolute inset-0 glow-effect"])}" data-v-0568927e></div><div class="mb-4 relative transform-gpu transition-transform duration-300 hover:scale-110" data-v-0568927e><div class="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300 floating-animation" data-v-0568927e>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.icon), { class: "w-6 h-6 text-white/70 group-hover:text-white/90 transition-colors" }, null), _parent);
      _push(`</div>`);
      if (__props.unlocked) {
        _push(`<div class="particles-container" data-v-0568927e><!--[-->`);
        ssrRenderList(6, (n) => {
          _push(`<div class="particle" data-v-0568927e></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="relative z-20 text-center" data-v-0568927e><h3 class="text-lg font-semibold tracking-wide mb-2 text-white/90 group-hover:text-white transition-colors" data-v-0568927e>${ssrInterpolate(__props.title)}</h3><p class="text-xs text-white/60 mb-4 line-clamp-2 group-hover:text-white/80 transition-colors" data-v-0568927e>${ssrInterpolate(__props.description)}</p>`);
      if (!__props.unlocked) {
        _push(`<div class="progress-container" data-v-0568927e><div class="bg-dark-700 rounded-full h-1.5 mt-2 overflow-hidden" data-v-0568927e><div class="progress-bar h-1.5 rounded-full transition-all duration-500" style="${ssrRenderStyle({ width: `${__props.progress}%` })}" data-v-0568927e></div></div><div class="flex items-center justify-between mt-2 text-[10px] text-white/50 uppercase tracking-wider" data-v-0568927e><span data-v-0568927e>Progress</span><span data-v-0568927e>${ssrInterpolate(__props.progress.toFixed(0))}%</span></div></div>`);
      } else {
        _push(`<div class="unlock-indicator flex items-center justify-center gap-2 text-green-400 mt-2" data-v-0568927e><div class="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center pulse-animation" data-v-0568927e>`);
        _push(ssrRenderComponent(unref(Check), { class: "w-4 h-4" }, null, _parent));
        _push(`</div><span class="text-xs font-medium uppercase tracking-wider" data-v-0568927e>Unlocked</span></div>`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/User/AchievementCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AchievementCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0568927e"]]);
export {
  AchievementCard as default
};
