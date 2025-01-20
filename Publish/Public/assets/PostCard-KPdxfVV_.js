import { computed, mergeProps, createVNode, resolveDynamicComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderVNode, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { Flame, Star, Gamepad2, Eye, MessageSquare, Edit2, Newspaper, Zap, Medal, Swords } from "lucide-vue-next";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "PostCard",
  __ssrInlineRender: true,
  props: {
    record: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const isHotPost = computed(() => (props.record.comments_count || 0) >= 5);
    const isTrendingPost = computed(() => (props.record.views_count || 0) >= 20);
    const isPopularPost = computed(() => (props.record.views_count || 0) >= 50);
    const isSpecialUser = computed(() => {
      var _a;
      return props.record.admin || ((_a = props.record.user) == null ? void 0 : _a.has_subscription);
    });
    const getEngagementClass = computed(() => {
      if (isHotPost.value) return "hover:bg-dark-700/90";
      if (isTrendingPost.value) return "hover:bg-dark-700/90";
      if (isPopularPost.value) return "hover:bg-dark-700/90";
      return "hover:bg-dark-700/80";
    });
    const getBorderClass = computed(() => {
      if (isHotPost.value) return "border-red-500/30 animate-pulse";
      if (isTrendingPost.value) return "border-blue-500/30";
      if (isPopularPost.value) return "border-purple-500/30";
      return "";
    });
    const getEngagementBadge = computed(() => {
      if (isHotPost.value) return {
        icon: Flame,
        text: "Hot",
        class: "bg-gradient-to-r from-orange-500 to-red-500"
      };
      if (isTrendingPost.value) return {
        icon: Trending,
        text: "Trending",
        class: "bg-gradient-to-r from-blue-500 to-cyan-500"
      };
      if (isPopularPost.value) return {
        icon: Star,
        text: "Popular",
        class: "bg-gradient-to-r from-purple-500 to-pink-500"
      };
      return null;
    });
    const getBadgeClass = computed(() => {
      var _a;
      const baseClasses = "flex items-center gap-1 px-2 py-0.5 text-xs font-bold text-white rounded-full shadow-lg";
      return `${baseClasses} ${((_a = getEngagementBadge.value) == null ? void 0 : _a.class) || ""}`;
    });
    const getBadgeGlowClass = computed(() => {
      const baseClasses = "absolute -inset-1 blur-sm rounded-full";
      if (isHotPost.value) return `${baseClasses} bg-red-500/30`;
      if (isTrendingPost.value) return `${baseClasses} bg-blue-500/30`;
      if (isPopularPost.value) return `${baseClasses} bg-purple-500/30`;
      return "";
    });
    const getAuthorGlowClass = computed(() => {
      var _a;
      if (props.record.admin) return "bg-purple-500/50";
      if ((_a = props.record.user) == null ? void 0 : _a.has_subscription) return "bg-yellow-500/50";
      return "";
    });
    const getAvatarRingClass = computed(() => {
      var _a;
      if (props.record.admin) return "ring-purple-500/50";
      if ((_a = props.record.user) == null ? void 0 : _a.has_subscription) return "ring-yellow-500/50";
      return "ring-gray-700";
    });
    const getAuthorStyle = computed(() => {
      var _a;
      if (props.record.admin) return "text-purple-400";
      if ((_a = props.record.user) == null ? void 0 : _a.has_subscription) return "text-yellow-400";
      return "text-blue-400";
    });
    const getViewsStyle = computed(() => {
      if (props.record.views_count >= 50) return "text-purple-400";
      if (props.record.views_count >= 20) return "text-blue-400";
      return "text-gray-400";
    });
    const getCommentsStyle = computed(() => {
      if (props.record.comments_count >= 5) return "text-red-400";
      if (props.record.comments_count >= 3) return "text-orange-400";
      return "text-gray-400";
    });
    const getCategoryIcon = computed(() => {
      var _a;
      const categoryIcons = {
        "News": Newspaper,
        "Updates": Zap,
        "Tournaments": Medal,
        "Reviews": Gamepad2,
        "Battles": Swords
      };
      return categoryIcons[(_a = props.record.category) == null ? void 0 : _a.name] || Gamepad2;
    });
    const getCategoryStyle = computed(() => {
      var _a;
      const styles = {
        "News": "bg-purple-500/20 text-purple-400",
        "Updates": "bg-blue-500/20 text-blue-400",
        "Tournaments": "bg-yellow-500/20 text-yellow-400",
        "Reviews": "bg-green-500/20 text-green-400",
        "Battles": "bg-red-500/20 text-red-400"
      };
      return styles[(_a = props.record.category) == null ? void 0 : _a.name] || "bg-blue-500/20 text-blue-400";
    });
    const getAuthorAvatar = computed(() => {
      var _a, _b;
      return ((_a = props.record.admin) == null ? void 0 : _a.avatar) || ((_b = props.record.user) == null ? void 0 : _b.avatar);
    });
    const getAuthorName = computed(() => {
      var _a, _b;
      return ((_a = props.record.admin) == null ? void 0 : _a.full_name) || ((_b = props.record.user) == null ? void 0 : _b.full_name);
    });
    const formatNumber = (num) => {
      if (num >= 1e6) return (num / 1e6).toFixed(1) + "M";
      if (num >= 1e3) return (num / 1e3).toFixed(1) + "K";
      return num.toString();
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: [
          "group relative bg-dark-800/80 rounded-lg transition-all duration-300 cursor-pointer overflow-hidden",
          getEngagementClass.value
        ]
      }, _attrs))} data-v-c8e6f9e4>`);
      if (isHotPost.value || isTrendingPost.value || isPopularPost.value) {
        _push(`<div class="${ssrRenderClass([getBorderClass.value, "absolute inset-0 border rounded-lg transition-all duration-300"])}" data-v-c8e6f9e4></div>`);
      } else {
        _push(`<!---->`);
      }
      if (getEngagementBadge.value) {
        _push(`<div class="absolute -top-1 -right-1 z-10" data-v-c8e6f9e4><div class="relative" data-v-c8e6f9e4><div class="${ssrRenderClass(getBadgeGlowClass.value)}" data-v-c8e6f9e4></div><span class="${ssrRenderClass(getBadgeClass.value)}" data-v-c8e6f9e4>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getEngagementBadge.value.icon), { class: "w-3 h-3" }, null), _parent);
        _push(` ${ssrInterpolate(getEngagementBadge.value.text)}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative flex gap-4 p-4" data-v-c8e6f9e4><div class="flex-shrink-0 w-14" data-v-c8e6f9e4><div class="relative" data-v-c8e6f9e4>`);
      if (isSpecialUser.value) {
        _push(`<div class="${ssrRenderClass([getAuthorGlowClass.value, "absolute -inset-1 rounded-lg blur-sm"])}" data-v-c8e6f9e4></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<img${ssrRenderAttr("src", getAuthorAvatar.value)}${ssrRenderAttr("alt", getAuthorName.value)} class="${ssrRenderClass([getAvatarRingClass.value, "relative w-14 h-14 rounded-lg object-cover ring-2"])}" data-v-c8e6f9e4></div></div><div class="flex-1 min-w-0" data-v-c8e6f9e4><div class="flex items-start justify-between gap-4" data-v-c8e6f9e4><h2 class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1" data-v-c8e6f9e4>${ssrInterpolate(__props.record.title)}</h2><div class="flex-shrink-0" data-v-c8e6f9e4><span class="${ssrRenderClass([getCategoryStyle.value, "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium shadow-lg"])}" data-v-c8e6f9e4>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getCategoryIcon.value), { class: "w-4 h-4" }, null), _parent);
      _push(` ${ssrInterpolate((_a = __props.record.category) == null ? void 0 : _a.name)}</span></div></div><p class="mt-1 text-gray-300 text-sm line-clamp-2" data-v-c8e6f9e4>${__props.record.short_description ?? ""}</p><div class="mt-3 flex items-center gap-4 text-sm" data-v-c8e6f9e4><div class="flex items-center gap-2" data-v-c8e6f9e4><span class="${ssrRenderClass([getAuthorStyle.value, "font-medium"])}" data-v-c8e6f9e4>${ssrInterpolate(getAuthorName.value)}</span><span class="text-gray-500" data-v-c8e6f9e4>${ssrInterpolate(__props.record.created_at_human)}</span></div><div class="flex items-center gap-3" data-v-c8e6f9e4><div class="${ssrRenderClass([getViewsStyle.value, "flex items-center gap-1.5"])}" data-v-c8e6f9e4>`);
      _push(ssrRenderComponent(unref(Eye), { class: "w-4 h-4" }, null, _parent));
      _push(` ${ssrInterpolate(formatNumber(__props.record.views_count || 0))}</div><div class="${ssrRenderClass([getCommentsStyle.value, "flex items-center gap-1.5"])}" data-v-c8e6f9e4>`);
      _push(ssrRenderComponent(unref(MessageSquare), { class: "w-4 h-4" }, null, _parent));
      _push(` ${ssrInterpolate(formatNumber(__props.record.comments_count || 0))}</div></div></div></div>`);
      if (unref(usePage)().props.isAdminAuth) {
        _push(`<button class="flex items-center gap-1.5 px-3 py-1.5 text-blue-400 hover:text-blue-300 hover:bg-dark-600 rounded-lg text-sm transition-colors" data-v-c8e6f9e4>`);
        _push(ssrRenderComponent(unref(Edit2), { class: "w-4 h-4" }, null, _parent));
        _push(`<span class="hidden sm:inline" data-v-c8e6f9e4>Edit</span></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Blog/PostCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PostCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c8e6f9e4"]]);
export {
  PostCard as P
};
