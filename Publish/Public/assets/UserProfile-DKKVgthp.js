import { defineComponent, ref, onMounted, onUnmounted, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { Star } from "lucide-vue-next";
import "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserProfile",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      required: true
    },
    miniProfile: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const isMobile = ref(false);
    const checkMobile = () => {
      isMobile.value = window.innerWidth < 768;
    };
    onMounted(() => {
      checkMobile();
      window.addEventListener("resize", checkMobile);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", checkMobile);
    });
    const userData = computed(() => {
      var _a;
      return ((_a = props.user) == null ? void 0 : _a.data) || props.user || {};
    });
    const frameStyles = computed(() => {
      var _a;
      const level = ((_a = userData.value) == null ? void 0 : _a.level) || 1;
      if (level <= 5) {
        return {
          borderColor: "border-gray-600",
          glowEffect: "bg-gradient-to-br from-gray-500/20 to-gray-700/20",
          borderDesign: "border-2 border-gray-500/20",
          avatarBorder: "border-gray-600",
          levelBadge: "bg-gradient-to-br from-gray-500 to-gray-700 text-white/90",
          nameStyle: "text-gray-300 font-normal",
          xpBackground: "bg-gray-900/40 border-gray-700",
          xpFill: "bg-gradient-to-r from-gray-500 to-gray-700",
          xpGlow: "bg-gray-400/20",
          titleColor: "text-gray-400",
          bgPattern: "bg-game-pattern-common"
        };
      }
      if (level <= 10) {
        return {
          borderColor: "border-neutral-300",
          glowEffect: "bg-gradient-to-br from-neutral-300/30 to-neutral-400/30",
          borderDesign: "border-2 border-neutral-300/30",
          avatarBorder: "border-neutral-300",
          levelBadge: "bg-gradient-to-br from-neutral-300 to-neutral-400 text-gray-800",
          nameStyle: "text-neutral-100 font-medium",
          xpBackground: "bg-neutral-900/40 border-neutral-700",
          xpFill: "bg-gradient-to-r from-neutral-300 to-neutral-400",
          xpGlow: "bg-neutral-300/30",
          titleColor: "text-neutral-200",
          bgPattern: "bg-game-pattern-common"
        };
      }
      if (level <= 15) {
        return {
          borderColor: "border-green-500",
          glowEffect: "bg-gradient-to-br from-green-400/30 to-green-600/30 animate-pulse",
          borderDesign: "border-2 border-green-400/30",
          avatarBorder: "border-green-500 animate-float",
          levelBadge: "bg-gradient-to-br from-green-400 to-green-600 text-white",
          nameStyle: "text-green-300 font-semibold",
          xpBackground: "bg-green-900/40 border-green-700",
          xpFill: "bg-gradient-to-r from-green-400 to-green-600",
          xpGlow: "bg-green-400/30",
          titleColor: "text-green-200",
          bgPattern: "bg-game-pattern-uncommon"
        };
      }
      if (level <= 20) {
        return {
          borderColor: "border-green-600",
          glowEffect: "bg-gradient-to-br from-green-500/40 to-green-700/40 animate-pulse",
          borderDesign: "border-2 border-green-500/40 border-dashed",
          avatarBorder: "border-green-600 animate-float",
          levelBadge: "bg-gradient-to-br from-green-500 to-green-700 text-white shadow-lg",
          nameStyle: "text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500 font-bold",
          xpBackground: "bg-green-900/50 border-green-800",
          xpFill: "bg-gradient-to-r from-green-500 to-green-700",
          xpGlow: "bg-green-500/40 animate-pulse",
          titleColor: "text-green-300",
          bgPattern: "bg-game-pattern-uncommon animate-pulse"
        };
      }
      if (level <= 25) {
        return {
          borderColor: "border-blue-500",
          glowEffect: "bg-gradient-to-br from-blue-400/40 to-blue-600/40 animate-pulse",
          borderDesign: "border-2 border-blue-400/40",
          avatarBorder: "border-blue-500 animate-float",
          levelBadge: "bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg",
          nameStyle: "text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 font-bold",
          xpBackground: "bg-blue-900/40 border-blue-700",
          xpFill: "bg-gradient-to-r from-blue-400 to-blue-600",
          xpGlow: "bg-blue-400/40",
          titleColor: "text-blue-200",
          bgPattern: "bg-game-pattern-rare"
        };
      }
      if (level <= 30) {
        return {
          borderColor: "border-blue-600",
          glowEffect: "bg-gradient-to-br from-blue-500/50 to-blue-700/50 animate-pulse",
          borderDesign: "border-3 border-blue-500/50 border-double",
          avatarBorder: "border-blue-600 animate-float",
          levelBadge: "bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg",
          nameStyle: "text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 font-bold",
          xpBackground: "bg-blue-900/50 border-blue-800",
          xpFill: "bg-gradient-to-r from-blue-500 to-blue-700",
          xpGlow: "bg-blue-500/50 animate-pulse",
          titleColor: "text-blue-300",
          bgPattern: "bg-game-pattern-rare animate-pulse"
        };
      }
      if (level <= 40) {
        return {
          borderColor: "border-purple-500 border-opacity-90",
          glowEffect: "bg-gradient-to-br from-purple-400/50 to-purple-600/50 animate-pulse",
          borderDesign: "border-2 border-purple-400/50 border-opacity-90",
          avatarBorder: "border-purple-500 animate-float",
          levelBadge: "bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-lg",
          nameStyle: "text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 font-bold",
          xpBackground: "bg-purple-900/50 border-purple-700",
          xpFill: "bg-gradient-to-r from-purple-400 to-purple-600",
          xpGlow: "bg-purple-400/50 animate-pulse",
          titleColor: "text-purple-200",
          bgPattern: "bg-game-pattern-epic"
        };
      }
      if (level <= 45) {
        return {
          borderColor: "border-orange-500 legendary-border",
          glowEffect: "bg-gradient-to-br from-orange-400/60 to-orange-600/60 animate-pulse",
          borderDesign: "border-2 border-orange-400/60 legendary-border",
          avatarBorder: "border-orange-500 animate-float",
          levelBadge: "bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg",
          nameStyle: "text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 font-bold animate-pulse-slow",
          xpBackground: "bg-orange-900/60 border-orange-700",
          xpFill: "bg-gradient-to-r from-orange-400 to-orange-600",
          xpGlow: "bg-orange-400/60 animate-pulse",
          titleColor: "text-orange-200",
          bgPattern: "bg-game-pattern-legendary"
        };
      }
      if (level <= 49) {
        return {
          borderColor: "border-amber-500 artifact-border",
          glowEffect: "bg-gradient-conic from-amber-400/70 via-red-500/70 to-amber-400/70 animate-rotate-slow",
          borderDesign: "border-2 border-amber-400/70 artifact-border",
          avatarBorder: "border-amber-500 animate-float",
          levelBadge: "bg-gradient-to-br from-amber-400 to-red-500 text-white shadow-lg",
          nameStyle: "text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-red-300 to-amber-200 font-bold animate-pulse-slow",
          xpBackground: "bg-amber-900/70 border-amber-700",
          xpFill: "bg-gradient-conic from-amber-400 via-red-500 to-amber-400",
          xpGlow: "bg-amber-400/70 animate-pulse",
          titleColor: "text-amber-200",
          bgPattern: "bg-game-pattern-artifact"
        };
      }
      return {
        borderColor: "border-fuchsia-500 mythic-border",
        glowEffect: "bg-gradient-conic from-fuchsia-400/80 via-cyan-500/80 to-fuchsia-400/80 animate-rotate-slow",
        borderDesign: "border-2 border-fuchsia-400/80 mythic-border",
        avatarBorder: "border-fuchsia-500 animate-mythic-float",
        levelBadge: "bg-gradient-conic from-fuchsia-400 via-cyan-500 to-fuchsia-400 text-white shadow-lg",
        nameStyle: "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-200 via-cyan-300 to-fuchsia-200 font-bold animate-prismatic",
        xpBackground: "bg-fuchsia-900/80 border-fuchsia-700",
        xpFill: "bg-gradient-conic from-fuchsia-400 via-cyan-500 to-fuchsia-400",
        xpGlow: "bg-fuchsia-400/80 animate-pulse",
        titleColor: "text-fuchsia-200",
        bgPattern: "bg-game-pattern-mythic"
      };
    });
    const rankStars = computed(() => {
      const level = userData.value.level;
      if (level >= 48) return { count: 5, style: "animate-sparkle-rotate text-yellow-400" };
      if (level >= 45) return { count: 5, style: "animate-pulse-glow text-amber-400" };
      if (level >= 42) return { count: 4, style: "animate-floating text-orange-400" };
      if (level >= 39) return { count: 4, style: "text-rose-400" };
      if (level >= 36) return { count: 3, style: "animate-pulse text-purple-400" };
      if (level >= 33) return { count: 3, style: "text-fuchsia-400" };
      if (level >= 30) return { count: 2, style: "text-pink-400" };
      return { count: 0, style: "" };
    });
    const levelTitle = computed(() => {
      const level = userData.value.level;
      switch (level) {
        case 1:
          return "Awakened One";
        case 2:
          return "Seeker of Knowledge";
        case 3:
          return "Fledgling Adventurer";
        case 4:
          return "Aspiring Hero";
        case 5:
          return "Determined Spirit";
        case 6:
          return "Bronze Initiate";
        case 7:
          return "Iron Wayfarer";
        case 8:
          return "Steel Aspirant";
        case 9:
          return "Crystal Prospect";
        case 10:
          return "Sapphire Pioneer";
        case 11:
          return "Emerald Wanderer";
        case 12:
          return "Ruby Pathfinder";
        case 13:
          return "Diamond Seeker";
        case 14:
          return "Twilight Voyager";
        case 15:
          return "Dawn Herald";
        case 16:
          return "Dusk Sentinel";
        case 17:
          return "Celestial Walker";
        case 18:
          return "✧ Astral Nomad ✧";
        case 19:
          return "✦ Ethereal Guide ✦";
        case 20:
          return "⋆ Mystic Pathfinder ⋆";
        case 21:
          return "۞ Arcane Seeker ۞";
        case 22:
          return "✤ Eldrich Wayfarer ✤";
        case 23:
          return "❈ Planar Wanderer ❈";
        case 24:
          return "❋ Dimensional Scout ❋";
        case 25:
          return "✺ Void Tracker ✺";
        case 26:
          return "❂ Reality Shaper ❂";
        case 27:
          return "✾ Time Weaver ✾";
        case 28:
          return "❁ Cosmic Guide ❁";
        case 29:
          return "✽ Star Walker ✽";
        case 30:
          return "✬ Nova Seeker ✬";
        case 31:
          return "✫ Solar Knight ✫";
        case 32:
          return "⚝ Lunar Sage ⚝";
        case 33:
          return "✶ Stellar Mystic ✶";
        case 34:
          return "⚘ Celestial Sage ⚘";
        case 35:
          return "✵ Astral Sage ✵";
        case 36:
          return "⚜ Cosmic Elder ⚜";
        case 37:
          return "❧ Planar Master ❧";
        case 38:
          return "☙ Reality Master ☙";
        case 39:
          return "☬ Time Lord ☬";
        case 40:
          return "⚝ Void Master ⚝";
        case 41:
          return "✧ Dimensional Lord ✧";
        case 42:
          return "⚔ Ethereal Sovereign ⚔";
        case 43:
          return "☯ Celestial Emperor ☯";
        case 44:
          return "✵ Astral Sovereign ✵";
        case 45:
          return "⚡ Storm Lord ⚡";
        case 46:
          return "☄ Cosmic Emperor ☄";
        case 47:
          return "✺ Nova Lord ✺";
        case 48:
          return "⚝ Star Emperor ⚝";
        case 49:
          return "✴ Galaxy Sovereign ✴";
        case 50:
          return "★ Universal Legend ★";
        default:
          return "Unknown Rank";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["relative z-10", { "mb-12": !__props.miniProfile }]
      }, _attrs))} data-v-25110184><div class="${ssrRenderClass([
        "bg-dark-500/90 backdrop-blur-sm border-opacity-50 transition-all duration-300",
        frameStyles.value.borderColor,
        __props.miniProfile ? "rounded-xl border-2" : "rounded-3xl border-4",
        {
          "scale-[0.85] origin-left": __props.miniProfile && !isMobile.value,
          "transform-none": __props.miniProfile && isMobile.value
        }
      ])}" data-v-25110184><div class="${ssrRenderClass([{
        "p-8": !__props.miniProfile && !isMobile.value,
        "p-3": __props.miniProfile && isMobile.value,
        "p-4": __props.miniProfile && !isMobile.value || !__props.miniProfile && isMobile.value
      }, "relative shadow-2xl overflow-hidden"])}" data-v-25110184><div class="${ssrRenderClass([frameStyles.value.bgPattern, "absolute inset-0 opacity-20"])}" data-v-25110184></div><div class="${ssrRenderClass([[
        "flex items-center gap-3",
        {
          "flex-col md:flex-row md:gap-6": !__props.miniProfile,
          "flex-row": __props.miniProfile
        }
      ], "relative z-10"])}" data-v-25110184><div class="relative flex-shrink-0" data-v-25110184><div class="avatar-frame relative" data-v-25110184><div class="${ssrRenderClass([[
        frameStyles.value.glowEffect,
        __props.miniProfile ? "-inset-1" : "-inset-2"
      ], "absolute rounded-full"])}" data-v-25110184></div><div class="${ssrRenderClass([[
        frameStyles.value.borderDesign,
        __props.miniProfile ? "-inset-0.5" : "-inset-1"
      ], "absolute rounded-full"])}" data-v-25110184></div><div class="${ssrRenderClass([[
        frameStyles.value.avatarBorder,
        {
          "w-32 h-32 border-4": !__props.miniProfile && !isMobile.value,
          "w-24 h-24 border-3": !__props.miniProfile && isMobile.value,
          "w-12 h-12 border-2": __props.miniProfile && isMobile.value,
          "w-16 h-16 border-2": __props.miniProfile && !isMobile.value
        }
      ], "relative rounded-full overflow-hidden"])}" data-v-25110184><img${ssrRenderAttr("src", userData.value.avatar)}${ssrRenderAttr("alt", userData.value.full_name)} class="w-full h-full object-cover filter brightness-110 contrast-125" data-v-25110184></div><div class="${ssrRenderClass([[
        frameStyles.value.levelBadge,
        {
          "-bottom-2 -right-2 w-10 h-10 text-lg": !__props.miniProfile && !isMobile.value,
          "-bottom-1.5 -right-1.5 w-8 h-8 text-base": !__props.miniProfile && isMobile.value,
          "-bottom-1 -right-1 w-5 h-5 text-xs": __props.miniProfile
        }
      ], "absolute rounded-full flex items-center justify-center font-bold shadow-lg border-2"])}" data-v-25110184>${ssrInterpolate(userData.value.level)}</div>`);
      if (userData.value.level >= 30) {
        _push(`<div class="${ssrRenderClass([{
          "-top-2": !__props.miniProfile,
          "-top-1": __props.miniProfile
        }, "absolute left-1/2 transform -translate-x-1/2 -translate-y-full"])}" data-v-25110184><div class="flex items-center gap-0.5" data-v-25110184><!--[-->`);
        ssrRenderList(rankStars.value.count, (i) => {
          _push(ssrRenderComponent(unref(Star), {
            key: i,
            class: [
              rankStars.value.style,
              {
                "w-4 h-4": !__props.miniProfile,
                "w-3 h-3": __props.miniProfile
              }
            ]
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="${ssrRenderClass([{ "items-center md:items-start": !__props.miniProfile }, "flex flex-col min-w-0"])}" data-v-25110184>`);
      if (!__props.miniProfile) {
        _push(`<div class="${ssrRenderClass([
          "w-full",
          isMobile.value ? "text-center" : "text-center md:text-left"
        ])}" data-v-25110184><h1 class="${ssrRenderClass([[
          frameStyles.value.nameStyle,
          isMobile.value ? "text-2xl" : "text-2xl md:text-4xl"
        ], "font-extrabold mb-4 truncate"])}" data-v-25110184>${ssrInterpolate(userData.value.full_name)}</h1><div class="${ssrRenderClass([[
          frameStyles.value.xpBackground,
          isMobile.value ? "h-6" : "h-6 md:h-8"
        ], "relative rounded-full overflow-hidden border-2 shadow-lg w-full"])}" data-v-25110184><div class="absolute inset-0 flex" data-v-25110184><!--[-->`);
        ssrRenderList(5, (n) => {
          _push(`<div class="${ssrRenderClass([frameStyles.value.segmentBorder, "w-1/5 border-r opacity-50"])}" data-v-25110184></div>`);
        });
        _push(`<!--]--></div><div class="${ssrRenderClass([frameStyles.value.xpFill, "absolute inset-0 transform transition-transform duration-700 ease-out"])}" style="${ssrRenderStyle({
          transform: `scaleX(${userData.value.xp / userData.value.next_level_xp || 0})`,
          transformOrigin: "left center"
        })}" data-v-25110184><div class="${ssrRenderClass([frameStyles.value.xpGlow, "absolute inset-0 animate-pulse"])}" data-v-25110184></div></div><div class="absolute inset-0 pointer-events-none overflow-hidden" data-v-25110184><div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-move-sparkle opacity-50" data-v-25110184></div></div><span class="${ssrRenderClass([isMobile.value ? "text-xs" : "text-xs md:text-sm", "absolute inset-0 flex items-center justify-center font-bold text-white drop-shadow-md z-10"])}" data-v-25110184>${ssrInterpolate(userData.value.xp)} / ${ssrInterpolate(userData.value.next_level_xp)} XP </span></div></div>`);
      } else {
        _push(`<div class="truncate" data-v-25110184><div class="${ssrRenderClass([frameStyles.value.titleColor, "text-sm font-medium truncate"])}" data-v-25110184>${ssrInterpolate(userData.value.full_name)}</div><div class="${ssrRenderClass([frameStyles.value.titleColor, "text-xs truncate mt-0.5"])}" data-v-25110184>${ssrInterpolate(levelTitle.value)}</div></div>`);
      }
      if (!__props.miniProfile) {
        _push(`<div class="${ssrRenderClass([[
          frameStyles.value.titleColor,
          isMobile.value ? "text-xs text-center" : "text-xs md:text-sm text-center md:text-left"
        ], "mt-2 font-medium"])}" data-v-25110184>${ssrInterpolate(levelTitle.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/User/UserProfile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UserProfile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-25110184"]]);
export {
  UserProfile as U
};
