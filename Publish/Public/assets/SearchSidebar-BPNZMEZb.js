import { useSSRContext, mergeProps, unref, ref, onMounted, onUnmounted, resolveComponent, defineComponent, watch, computed, createVNode, resolveDynamicComponent, nextTick, isRef } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderVNode, ssrRenderStyle, ssrIncludeBooleanAttr } from "vue/server-renderer";
import lodash from "lodash";
import { _ as _sfc_main$5 } from "./dynamicIcon-DKOdjdPH.js";
import { a as api } from "./axios-BWWnXGbF.js";
import { usePage } from "@inertiajs/vue3";
import { Search, MessageSquare, Bell, X, Bot, Trash2, ArrowDown, User, Hash, Code, Send, FileCode, MessagesSquare, Braces, Code2, Zap, Sparkles, Crown, ArrowRight } from "lucide-vue-next";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { useMessage } from "naive-ui";
import { M as MarkdownRenderer } from "./Markdown-D1WgnuMs.js";
const _sfc_main$4 = {
  __name: "SearchTab",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: "search"
    }
  },
  emits: ["update:modelValue", "close", "tab-changed"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-dark-500/90 backdrop-blur-sm border-b border-gray-800/50" }, _attrs))} data-v-a09d5c22><div class="flex items-center justify-between px-4 py-3 sm:px-6" data-v-a09d5c22><div class="flex items-center gap-2 sm:gap-6 overflow-x-auto hide-scrollbar" data-v-a09d5c22><button class="${ssrRenderClass([__props.modelValue === "search" ? "text-white bg-dark-400" : "text-gray-400 hover:text-gray-300", "flex items-center gap-2 min-w-max px-3 py-2 rounded-lg transition-all duration-300 relative group"])}" data-v-a09d5c22>`);
      _push(ssrRenderComponent(unref(Search), { class: "w-4 h-4" }, null, _parent));
      _push(`<span class="text-sm font-medium" data-v-a09d5c22>Search</span><div class="${ssrRenderClass([{ "scale-x-100": __props.modelValue === "search" }, "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300 scale-x-0"])}" data-v-a09d5c22></div></button><button class="${ssrRenderClass([__props.modelValue === "chat" ? "text-white bg-dark-400" : "text-gray-400 hover:text-gray-300", "flex items-center gap-2 min-w-max px-3 py-2 rounded-lg transition-all duration-300 relative group"])}" data-v-a09d5c22>`);
      _push(ssrRenderComponent(unref(MessageSquare), { class: "w-4 h-4" }, null, _parent));
      _push(`<span class="text-sm font-medium" data-v-a09d5c22>Chat with Bob</span><div class="${ssrRenderClass([{ "scale-x-100": __props.modelValue === "chat" }, "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300 scale-x-0"])}" data-v-a09d5c22></div></button><button class="${ssrRenderClass([__props.modelValue === "notifications" ? "text-white bg-dark-400" : "text-gray-400 hover:text-gray-300", "flex items-center gap-2 min-w-max px-3 py-2 rounded-lg transition-all duration-300 relative group"])}" data-v-a09d5c22>`);
      _push(ssrRenderComponent(unref(Bell), { class: "w-4 h-4" }, null, _parent));
      _push(`<span class="text-sm font-medium" data-v-a09d5c22>Notifications</span><div class="${ssrRenderClass([{ "scale-x-100": __props.modelValue === "notifications" }, "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300 scale-x-0"])}" data-v-a09d5c22></div></button></div><button class="flex items-center justify-center w-8 h-8 rounded-lg bg-dark-400 text-gray-400 hover:text-white transition-colors duration-300" data-v-a09d5c22>`);
      _push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent));
      _push(`</button></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Search/SearchTab.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SearchTab = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-a09d5c22"]]);
const _sfc_main$3 = {
  __name: "NotificationIcon",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: "success"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (props.icon == "success") {
        _push(`<div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>`);
      } else if (props.icon == "error") {
        _push(`<div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>`);
      } else if (props.icon == "info") {
        _push(`<div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>`);
      } else {
        _push(`<div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Search/NotificationIcon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Notification",
  __ssrInlineRender: true,
  setup(__props) {
    const message = useMessage();
    const notifications = ref([]);
    const notificationsCount = ref(0);
    const fetchNotifications = async () => {
      try {
        const response = await api.get(route("user.api.notifications", 5));
        notifications.value = response.data.data;
        notificationsCount.value = notifications.value.length;
        if (notificationsCount.value > 0) {
          message.success(`You have ${notificationsCount.value} new notification${notificationsCount.value > 1 ? "s" : ""}`);
        }
      } catch (error) {
        console.error("Failed to fetch notifications", error);
      }
    };
    let intervalId;
    onMounted(() => {
      fetchNotifications();
      intervalId = setInterval(fetchNotifications, 25e3);
    });
    onUnmounted(() => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Trash2 = resolveComponent("Trash2");
      const _component_BellOff = resolveComponent("BellOff");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "relative w-full sm:w-auto",
        tabindex: "0"
      }, _attrs))} data-v-b5b3b892>`);
      if (notifications.value.length > 0) {
        _push(`<div class="absolute right-0 top-full mt-2 w-full bg-gray-900 rounded-xl shadow-2xl border border-gray-800 overflow-hidden" data-v-b5b3b892><div class="max-h-96 overflow-y-auto" data-v-b5b3b892><!--[-->`);
        ssrRenderList(notifications.value, (item, index) => {
          _push(`<div class="px-4 py-3 border-b border-gray-800 last:border-b-0 hover:bg-gray-800 transition-colors duration-200" data-v-b5b3b892><div class="flex items-center space-x-4" data-v-b5b3b892><div class="flex-shrink-0" data-v-b5b3b892>`);
          if (item.data.type === "image") {
            _push(`<div class="w-12 h-12 rounded-full overflow-hidden" data-v-b5b3b892><img${ssrRenderAttr("src", item.data.icon)} alt="Notification Icon" class="w-full h-full object-cover" data-v-b5b3b892></div>`);
          } else {
            _push(`<div class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center" data-v-b5b3b892>`);
            _push(ssrRenderComponent(_sfc_main$3, {
              icon: item.data.icon
            }, null, _parent));
            _push(`</div>`);
          }
          _push(`</div><div class="flex-1 min-w-0" data-v-b5b3b892><p class="text-sm font-semibold text-white truncate" data-v-b5b3b892>${ssrInterpolate(item.data.title)}</p><p class="text-sm text-gray-400 truncate" data-v-b5b3b892>${ssrInterpolate(item.data.content)}</p></div><div class="text-xs text-gray-500" data-v-b5b3b892>${ssrInterpolate(item.date)}</div></div></div>`);
        });
        _push(`<!--]--></div>`);
        if (notifications.value.length > 0) {
          _push(`<div class="sticky bottom-0 bg-gray-900 border-t border-gray-800" data-v-b5b3b892><button class="w-full px-4 py-3 flex items-center justify-center space-x-2 text-red-500 hover:bg-red-500/10 transition-colors duration-200" data-v-b5b3b892>`);
          _push(ssrRenderComponent(_component_Trash2, {
            size: 20,
            class: "text-red-500"
          }, null, _parent));
          _push(`<span class="text-sm" data-v-b5b3b892>Clear All Notifications</span></button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="absolute right-0 top-full mt-2 w-full bg-gray-900 rounded-xl shadow-2xl border border-gray-800 p-6 text-center" data-v-b5b3b892>`);
        _push(ssrRenderComponent(_component_BellOff, {
          size: 64,
          class: "text-gray-700 mx-auto mb-4"
        }, null, _parent));
        _push(`<p class="text-gray-500" data-v-b5b3b892> No new notifications </p></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Search/Notification.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const notification = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b5b3b892"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BobAI",
  __ssrInlineRender: true,
  setup(__props) {
    useMessage();
    const messages = ref([
      {
        role: "assistant",
        content: "👋 Hello! I'm your Game Development Assistant, specialized in Unreal Engine and Unity. \n\nI can help you with:\n- Code examples\n- Best practices\n- Performance optimization\n- Game design patterns\n- Asset management\n\nHow can I assist you with your game project today?",
        timestamp: Date.now()
      }
    ]);
    const userInput = ref("");
    const isLoading = ref(false);
    const chatContainer = ref(null);
    const autoScroll = ref(true);
    const formatTime = (timestamp) => {
      return new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit"
      }).format(timestamp);
    };
    const scrollToBottom = async () => {
      if (!autoScroll.value) return;
      await nextTick();
      if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
      }
    };
    watch(messages, scrollToBottom, { deep: true });
    onMounted(scrollToBottom);
    ref(null);
    const showMarkdownHelp = ref(false);
    const showCommands = ref(false);
    const isTyping = ref(false);
    let typingTimeout;
    const commands = [
      {
        id: "code",
        label: "Code Block",
        description: "Insert a code block",
        icon: FileCode,
        template: "```\n// Your code here\n```"
      },
      {
        id: "question",
        label: "Ask Question",
        description: "Structure a clear question",
        icon: MessagesSquare,
        template: "I need help with: \n1. Context: \n2. Problem: \n3. What I've tried: "
      },
      {
        id: "bug",
        label: "Report Bug",
        description: "Describe a bug or issue",
        icon: Braces,
        template: "**Bug Description:**\n\n**Steps to Reproduce:**\n1. \n2. \n\n**Expected Behavior:**\n\n**Actual Behavior:**"
      }
    ];
    const characterCountColor = computed(() => {
      const length = userInput.value.length;
      if (length > 1800) return "text-red-400";
      if (length > 1500) return "text-yellow-400";
      return "text-gray-400";
    });
    onUnmounted(() => {
      clearTimeout(typingTimeout);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HelpCircle = resolveComponent("HelpCircle");
      const _component_Lightbulb = resolveComponent("Lightbulb");
      const _component_Terminal = resolveComponent("Terminal");
      const _component_ListOrdered = resolveComponent("ListOrdered");
      const _component_Sparkles = resolveComponent("Sparkles");
      const _component_Copy = resolveComponent("Copy");
      const _component_Circle = resolveComponent("Circle");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full max-w-4xl bg-dark-200/95 backdrop-blur-sm rounded-xl shadow-2xl border border-dark-100/50 overflow-hidden" }, _attrs))} data-v-db05673a><div class="px-6 py-4 border-b border-dark-100/50 bg-gradient-to-r from-dark-300/50 to-dark-200/50" data-v-db05673a><div class="flex items-center justify-between" data-v-db05673a><div class="flex items-center space-x-4" data-v-db05673a><div class="relative" data-v-db05673a><div class="absolute inset-0 bg-blue-500/20 rounded-xl animate-pulse" data-v-db05673a></div><div class="relative w-12 h-12 bg-blue-500/10 backdrop-blur-sm rounded-xl flex items-center justify-center group" data-v-db05673a>`);
      _push(ssrRenderComponent(unref(Bot), { class: "w-7 h-7 text-blue-400 transition-transform duration-300 group-hover:scale-110" }, null, _parent));
      _push(`</div></div><div class="space-y-1" data-v-db05673a><div class="flex items-center space-x-2" data-v-db05673a><h2 class="text-xl font-bold text-white" data-v-db05673a>Game Dev Assistant</h2><div class="flex space-x-1 items-center text-emerald-400 text-xs" data-v-db05673a><span class="relative flex h-2 w-2" data-v-db05673a><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" data-v-db05673a></span><span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" data-v-db05673a></span></span><span data-v-db05673a>Online</span></div></div><p class="text-sm text-gray-400" data-v-db05673a>Specialized in Unreal Engine &amp; Unity</p></div></div><div class="flex items-center space-x-2" data-v-db05673a><button class="p-2 text-gray-400 hover:text-white hover:bg-dark-300/50 rounded-lg transition-all duration-200 group relative" title="Usage tips" data-v-db05673a>`);
      _push(ssrRenderComponent(_component_HelpCircle, { class: "w-5 h-5 transition-transform duration-200 group-hover:rotate-12" }, null, _parent));
      _push(`</button><button class="p-2 text-gray-400 hover:text-white hover:bg-dark-300/50 rounded-lg transition-all duration-200 group" title="Clear chat" data-v-db05673a>`);
      _push(ssrRenderComponent(unref(Trash2), { class: "w-5 h-5 transition-transform duration-200 group-hover:scale-110" }, null, _parent));
      _push(`</button><button class="${ssrRenderClass([[
        autoScroll.value ? "text-blue-400 bg-blue-500/10" : "text-gray-400 hover:text-white hover:bg-dark-300/50"
      ], "p-2 rounded-lg transition-all duration-200 group relative"])}" title="Toggle auto-scroll" data-v-db05673a>`);
      _push(ssrRenderComponent(unref(ArrowDown), {
        class: ["w-5 h-5 transition-transform duration-200", { "group-hover:-translate-y-1": !autoScroll.value, "group-hover:translate-y-1": autoScroll.value }]
      }, null, _parent));
      _push(`</button></div></div></div>`);
      if (_ctx.showTips) {
        _push(`<div class="bg-dark-300/50 border-b border-dark-100/50 px-6 py-4" data-v-db05673a><div class="flex items-start space-x-4" data-v-db05673a><div class="p-2 bg-blue-500/10 rounded-lg" data-v-db05673a>`);
        _push(ssrRenderComponent(_component_Lightbulb, { class: "w-5 h-5 text-blue-400" }, null, _parent));
        _push(`</div><div class="flex-1 space-y-2" data-v-db05673a><h3 class="text-sm font-medium text-white" data-v-db05673a>Pro Tips:</h3><ul class="text-sm text-gray-400 space-y-1" data-v-db05673a><li class="flex items-center space-x-2" data-v-db05673a>`);
        _push(ssrRenderComponent(_component_Terminal, { class: "w-4 h-4" }, null, _parent));
        _push(`<span data-v-db05673a>Use \`code blocks\` for code snippets</span></li><li class="flex items-center space-x-2" data-v-db05673a>`);
        _push(ssrRenderComponent(_component_ListOrdered, { class: "w-4 h-4" }, null, _parent));
        _push(`<span data-v-db05673a>Structure your questions clearly</span></li><li class="flex items-center space-x-2" data-v-db05673a>`);
        _push(ssrRenderComponent(_component_Sparkles, { class: "w-4 h-4" }, null, _parent));
        _push(`<span data-v-db05673a>Press Enter to send, Shift+Enter for new line</span></li></ul></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="min-h-[400px] max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-dark-100 scrollbar-track-dark-300/50" data-v-db05673a><!--[-->`);
      ssrRenderList(messages.value, (message2, index) => {
        _push(`<div class="${ssrRenderClass([
          "px-6 py-4 border-b border-dark-100/50 transition-colors duration-300",
          message2.role === "user" ? "bg-dark-300/30 hover:bg-dark-300/40" : "hover:bg-dark-300/10"
        ])}" data-v-db05673a><div class="flex space-x-4" data-v-db05673a><div class="flex-shrink-0" data-v-db05673a><div class="${ssrRenderClass([
          "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group",
          message2.role === "user" ? "bg-blue-500/20 hover:bg-blue-500/30" : "bg-blue-500/10 hover:bg-blue-500/20"
        ])}" data-v-db05673a>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(message2.role === "user" ? unref(User) : unref(Bot)), { class: "w-5 h-5 text-blue-400 transition-transform duration-300 group-hover:scale-110" }, null), _parent);
        _push(`</div></div><div class="flex-1 min-w-0 space-y-1" data-v-db05673a><div class="flex items-center justify-between" data-v-db05673a><div class="flex items-center space-x-2" data-v-db05673a><p class="text-sm font-medium text-white" data-v-db05673a>${ssrInterpolate(message2.role === "user" ? "You" : "Game Dev Assistant")}</p><span class="text-xs text-gray-500" data-v-db05673a>${ssrInterpolate(formatTime(message2.timestamp))}</span></div><button class="p-1 text-gray-500 hover:text-white rounded transition-colors duration-200 opacity-0 group-hover:opacity-100" title="Copy message" data-v-db05673a>`);
        _push(ssrRenderComponent(_component_Copy, { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div>`);
        _push(ssrRenderComponent(MarkdownRenderer, {
          content: message2.content,
          class: "text-sm text-gray-300"
        }, null, _parent));
        _push(`</div></div></div>`);
      });
      if (isLoading.value) {
        _push(`<div class="px-6 py-4 border-b border-dark-100/50" data-v-db05673a><div class="flex space-x-4" data-v-db05673a><div class="flex-shrink-0" data-v-db05673a><div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center" data-v-db05673a><div class="animate-spin" data-v-db05673a>`);
        _push(ssrRenderComponent(_component_Circle, { class: "w-5 h-5 text-blue-400" }, null, _parent));
        _push(`</div></div></div><div class="flex-1 min-w-0 space-y-1" data-v-db05673a><p class="text-sm font-medium text-white" data-v-db05673a>Game Dev Assistant</p><div class="flex space-x-2 items-center text-gray-400" data-v-db05673a><span class="text-sm" data-v-db05673a>Generating response</span><div class="flex space-x-1" data-v-db05673a><div class="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style="${ssrRenderStyle({ "animation-delay": "0s" })}" data-v-db05673a></div><div class="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}" data-v-db05673a></div><div class="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style="${ssrRenderStyle({ "animation-delay": "0.4s" })}" data-v-db05673a></div></div></div></div></div></div>`);
      }
      _push(`<!--]--></div><div class="border-t border-dark-100/50 p-4 bg-gradient-to-b from-transparent to-dark-300/20" data-v-db05673a><form class="space-y-4" data-v-db05673a><div class="flex items-center space-x-2 px-2" data-v-db05673a><button type="button" class="${ssrRenderClass([{ "bg-blue-500/10 text-blue-400": showMarkdownHelp.value }, "p-1.5 text-gray-400 hover:text-white rounded-lg transition-all duration-200 relative group"])}" data-v-db05673a>`);
      _push(ssrRenderComponent(unref(Hash), { class: "w-4 h-4" }, null, _parent));
      _push(`<span class="absolute -top-8 -left-1 bg-dark-400/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap" data-v-db05673a> Markdown Support </span></button><button type="button" class="p-1.5 text-gray-400 hover:text-white rounded-lg transition-all duration-200 relative group" data-v-db05673a>`);
      _push(ssrRenderComponent(unref(Code), { class: "w-4 h-4" }, null, _parent));
      _push(`<span class="absolute -top-8 -left-1 bg-dark-400/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap" data-v-db05673a> Insert Code Block </span></button><div class="ml-auto flex items-center space-x-2" data-v-db05673a><span class="${ssrRenderClass([characterCountColor.value, "text-xs transition-colors duration-200"])}" data-v-db05673a>${ssrInterpolate(userInput.value.length)}/2000 </span></div></div>`);
      if (showMarkdownHelp.value) {
        _push(`<div class="bg-dark-400/30 rounded-lg p-3 text-sm space-y-2 animate-fadeIn" data-v-db05673a><div class="flex items-center justify-between text-gray-300" data-v-db05673a><span class="font-medium" data-v-db05673a>Markdown Shortcuts</span><button class="text-gray-400 hover:text-white" data-v-db05673a>`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div><div class="grid grid-cols-2 gap-2 text-xs" data-v-db05673a><div class="space-y-1" data-v-db05673a><div class="flex items-center space-x-2 text-gray-400" data-v-db05673a><kbd class="px-1.5 py-0.5 bg-dark-300 rounded" data-v-db05673a>**text**</kbd><span data-v-db05673a>Bold</span></div><div class="flex items-center space-x-2 text-gray-400" data-v-db05673a><kbd class="px-1.5 py-0.5 bg-dark-300 rounded" data-v-db05673a>*text*</kbd><span data-v-db05673a>Italic</span></div></div><div class="space-y-1" data-v-db05673a><div class="flex items-center space-x-2 text-gray-400" data-v-db05673a><kbd class="px-1.5 py-0.5 bg-dark-300 rounded" data-v-db05673a>\\\`code\\\`</kbd><span data-v-db05673a>Inline Code</span></div><div class="flex items-center space-x-2 text-gray-400" data-v-db05673a><kbd class="px-1.5 py-0.5 bg-dark-300 rounded" data-v-db05673a>\\\`\`\`code\\\`\`\`</kbd><span data-v-db05673a>Code Block</span></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative group" data-v-db05673a><textarea rows="3" placeholder="Type your message... (Use &#39;/&#39; for commands)" class="w-full bg-dark-300/50 text-gray-200 rounded-xl p-4 pr-24 border border-dark-100/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 placeholder-gray-500 resize-none backdrop-blur-sm group-focus-within:bg-dark-300/70"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} data-v-db05673a>${ssrInterpolate(userInput.value)}</textarea>`);
      if (showCommands.value) {
        _push(`<div class="absolute bottom-full mb-2 left-0 w-64 bg-dark-300/95 backdrop-blur-sm border border-dark-100/50 rounded-lg shadow-xl" data-v-db05673a><div class="p-2 space-y-1" data-v-db05673a><!--[-->`);
        ssrRenderList(commands, (cmd) => {
          _push(`<button class="w-full flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-dark-200/50 text-left transition-colors duration-200" data-v-db05673a>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(cmd.icon), { class: "w-4 h-4 text-blue-400" }, null), _parent);
          _push(`<div data-v-db05673a><div class="text-sm text-white" data-v-db05673a>${ssrInterpolate(cmd.label)}</div><div class="text-xs text-gray-400" data-v-db05673a>${ssrInterpolate(cmd.description)}</div></div></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="absolute bottom-3 right-3 flex items-center space-x-3" data-v-db05673a>`);
      if (isTyping.value) {
        _push(`<div class="flex items-center space-x-1 text-xs text-gray-400" data-v-db05673a><span class="w-1 h-1 bg-blue-400 rounded-full animate-typing" data-v-db05673a></span><span class="w-1 h-1 bg-blue-400 rounded-full animate-typing" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}" data-v-db05673a></span><span class="w-1 h-1 bg-blue-400 rounded-full animate-typing" style="${ssrRenderStyle({ "animation-delay": "0.4s" })}" data-v-db05673a></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center space-x-2 text-xs text-gray-500" data-v-db05673a><kbd class="px-2 py-1 bg-dark-400/50 rounded text-gray-400" data-v-db05673a>⌘</kbd><kbd class="px-2 py-1 bg-dark-400/50 rounded text-gray-400" data-v-db05673a>↵</kbd></div><button type="submit" class="p-2 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:hover:bg-blue-500 text-white rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 group relative overflow-hidden"${ssrIncludeBooleanAttr(isLoading.value || !userInput.value.trim()) ? " disabled" : ""} data-v-db05673a><div class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" data-v-db05673a></div>`);
      _push(ssrRenderComponent(unref(Send), { class: "w-4 h-4 relative transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" }, null, _parent));
      _push(`</button></div></div></form></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Search/BobAI.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const bobAI = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-db05673a"]]);
const _sfc_main = {
  __name: "SearchSidebar",
  __ssrInlineRender: true,
  props: {
    buttonClass: {
      type: String,
      default: "m-1 btn btn-square btn-primary"
    },
    openNotification: {
      type: Function,
      default: () => {
      }
    }
  },
  setup(__props, { expose: __expose }) {
    const { debounce } = lodash;
    const hasSubscription = computed(() => {
      var _a, _b;
      return ((_b = (_a = usePage().props.authUserInfo) == null ? void 0 : _a.data) == null ? void 0 : _b.has_subscription) || false;
    });
    const isOpen = ref(false);
    const searchQuery = ref("");
    const searchInput = ref(null);
    let suggestedSearches = ref([]);
    let courseSearch = ref([]);
    let productSearch = ref([]);
    let activeTab = ref("search");
    const props = __props;
    const openSearch = () => {
      isOpen.value = true;
      nextTick(() => {
        var _a;
        (_a = searchInput.value) == null ? void 0 : _a.focus();
        debouncedSearch();
      });
    };
    const handleKeydown = (event) => {
      var _a;
      if (event.key === "/" && !["INPUT", "TEXTAREA"].includes((_a = document.activeElement) == null ? void 0 : _a.tagName)) {
        event.preventDefault();
        openSearch();
      }
      if (event.key === "Escape" && isOpen.value) {
        isOpen.value = false;
      }
    };
    onMounted(() => {
      document.addEventListener("keydown", handleKeydown);
    });
    onUnmounted(() => {
      document.removeEventListener("keydown", handleKeydown);
    });
    const highlightSearch = (text, searchInput2) => {
      if (!searchInput2 || !text) return text;
      const escapedSearchString = searchInput2.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      );
      return text.replace(
        new RegExp(escapedSearchString, "gi"),
        (match) => `<span class="text-blue-500 font-bold">${match}</span>`
      );
    };
    watch(searchQuery, () => {
      debouncedSearch();
    });
    const debouncedSearch = debounce(async () => {
      try {
        const response = await api.post(route("app.search"), {
          q: searchQuery.value
        });
        suggestedSearches.value = response.data.suggestions;
        courseSearch.value = response.data.courses;
        productSearch.value = response.data.products;
      } catch (error) {
        console.error("Search error:", error);
      }
    }, 300);
    const openNotifications = () => {
      isOpen.value = true;
      activeTab.value = "notifications";
      debouncedSearch();
    };
    __expose({
      openNotifications
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><button tabindex="0" class="${ssrRenderClass(props.buttonClass)}">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        componentId: "magnifier",
        class: "size-6"
      }, null, _parent));
      _push(`</button>`);
      if (isOpen.value) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-50" style="${ssrRenderStyle({ "z-index": "9999" })}">`);
        if (isOpen.value) {
          _push(`<div class="fixed inset-y-0 right-0 max-w-full flex overflow-hidden bg-gray-900 shadow-xl"><div class="w-screen max-w-5xl">`);
          _push(ssrRenderComponent(SearchTab, {
            modelValue: unref(activeTab),
            "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : activeTab = $event,
            onClose: ($event) => isOpen.value = false
          }, null, _parent));
          if (unref(activeTab) === "notifications") {
            _push(ssrRenderComponent(notification, null, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (unref(activeTab) === "chat") {
            _push(`<div class="h-full">`);
            if (hasSubscription.value) {
              _push(ssrRenderComponent(bobAI, null, null, _parent));
            } else {
              _push(`<div class="h-full flex items-center justify-center p-6"><div class="max-w-lg w-full"><div class="relative overflow-hidden rounded-2xl bg-dark-500/50 border border-gray-800/50"><div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div><div class="absolute inset-0 bg-[url(&#39;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+&#39;)] opacity-10"></div><div class="relative p-8"><div class="text-center mb-6"><div class="flex justify-center mb-4"><div class="relative"><div class="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"></div><div class="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">`);
              _push(ssrRenderComponent(unref(Bot), { class: "w-8 h-8 text-white" }, null, _parent));
              _push(`</div></div></div><h3 class="text-2xl font-bold text-white mb-2"> Unlock AI Game Development Assistant </h3><p class="text-gray-400 max-w-sm mx-auto"> Get personalized help with coding, optimization, and best practices from our advanced AI assistant. </p></div><div class="grid grid-cols-2 gap-4 mb-8"><div class="flex items-center space-x-3 bg-dark-400/30 rounded-lg p-3"><div class="flex-shrink-0 w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">`);
              _push(ssrRenderComponent(unref(Code2), { class: "w-4 h-4 text-blue-400" }, null, _parent));
              _push(`</div><span class="text-sm text-gray-300">Code Examples &amp; Review</span></div><div class="flex items-center space-x-3 bg-dark-400/30 rounded-lg p-3"><div class="flex-shrink-0 w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">`);
              _push(ssrRenderComponent(unref(Zap), { class: "w-4 h-4 text-purple-400" }, null, _parent));
              _push(`</div><span class="text-sm text-gray-300">Performance Tips</span></div><div class="flex items-center space-x-3 bg-dark-400/30 rounded-lg p-3"><div class="flex-shrink-0 w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">`);
              _push(ssrRenderComponent(unref(Sparkles), { class: "w-4 h-4 text-emerald-400" }, null, _parent));
              _push(`</div><span class="text-sm text-gray-300">Best Practices</span></div><div class="flex items-center space-x-3 bg-dark-400/30 rounded-lg p-3"><div class="flex-shrink-0 w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center">`);
              _push(ssrRenderComponent(unref(MessagesSquare), { class: "w-4 h-4 text-amber-400" }, null, _parent));
              _push(`</div><span class="text-sm text-gray-300">Code analysis &amp; Suggestions</span></div></div><div class="text-center"><a href="\\" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 group"><div class="flex items-center space-x-2">`);
              _push(ssrRenderComponent(unref(Crown), { class: "w-5 h-5" }, null, _parent));
              _push(`<span>Upgrade to Premium</span>`);
              _push(ssrRenderComponent(unref(ArrowRight), { class: "w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" }, null, _parent));
              _push(`</div></a></div></div><div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" style="${ssrRenderStyle({ "background-size": "200% 100%" })}"></div></div></div></div>`);
            }
            _push(`</div>`);
          } else if (unref(activeTab) === "search") {
            _push(`<div class="h-full flex flex-col bg-gray-900 shadow-xl"><div class="px-4 py-6 sm:px-6 border-b border-gray-800 flex-shrink-0"><div class="mt-4"><div class="relative rounded-lg bg-gray-800/50"><div class="absolute inset-y-0 left-3 flex items-center"><svg class="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div><input type="text"${ssrRenderAttr("value", searchQuery.value)} class="block w-full bg-transparent border-0 rounded-lg py-2 pl-10 pr-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search..."></div></div></div><div class="flex-1 overflow-y-auto"><div class="px-4 py-6 sm:px-6"><!--[-->`);
            ssrRenderList(unref(suggestedSearches), (item, index) => {
              _push(`<!--[-->`);
              if (item.length) {
                _push(`<div class="mb-8"><h3 class="text-lg text-white mb-3 font-bold"> Suggested ${ssrInterpolate(index)}</h3><div class="flex flex-wrap gap-2"><!--[-->`);
                ssrRenderList(item, (tag) => {
                  _push(`<button class="px-4 py-1.5 rounded-full font-bold text-sm bg-gray-800/50 text-gray-300 hover:bg-blue-700 transition-colors">${ssrInterpolate(tag)}</button>`);
                });
                _push(`<!--]--></div></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<!--]-->`);
            });
            _push(`<!--]-->`);
            if (unref(courseSearch).length) {
              _push(`<div class="mb-8"><h3 class="text-lg text-white mb-3 font-bold"> Courses </h3><div class="space-y-2"><!--[-->`);
              ssrRenderList(unref(courseSearch), (result) => {
                _push(`<div class="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors cursor-pointer"><button><div class="flex items-center space-x-4 w-full"><img class="h-12 w-12 rounded-lg object-cover"${ssrRenderAttr(
                  "src",
                  result.media[0].url.default
                )}${ssrRenderAttr("alt", result.title)}><div class="flex-1 min-w-0"><h4 class="text-base font-medium text-gray-200 truncate">${highlightSearch(
                  result.title,
                  searchQuery.value
                ) ?? ""}</h4></div></div></button></div>`);
              });
              _push(`<!--]--></div></div>`);
            } else {
              _push(`<!---->`);
            }
            if (unref(productSearch).length) {
              _push(`<div class="mb-8"><h3 class="text-lg text-white mb-3 font-bold"> Products </h3><div class="space-y-2"><!--[-->`);
              ssrRenderList(unref(productSearch), (product) => {
                _push(`<div class="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors cursor-pointer"><button class="w-full"><div class="flex items-center space-x-4 w-full"><img class="h-12 w-12 rounded-lg object-cover"${ssrRenderAttr(
                  "src",
                  product.media[0].url.default
                )}${ssrRenderAttr("alt", product.title)}><h4 class="text-base font-medium text-gray-200 truncate">${highlightSearch(
                  product.name,
                  searchQuery.value
                ) ?? ""}</h4></div></button></div>`);
              });
              _push(`<!--]--></div></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Search/SearchSidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
