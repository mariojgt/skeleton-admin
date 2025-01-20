import { ref, onMounted, resolveComponent, mergeProps, createVNode, resolveDynamicComponent, useSSRContext, unref, withCtx, openBlock, createBlock, createTextVNode, toDisplayString, defineComponent, computed, withModifiers, withDirectives, vModelText, createCommentVNode, watch, Fragment, renderList, onBeforeMount, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderVNode, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderSlot } from "vue/server-renderer";
import { darkTheme } from "naive-ui";
import { _ as _sfc_main$j } from "./FlashMessage-CYVaM9mM.js";
import * as LucideIcons from "lucide-vue-next";
import { User, LogOut, Mail, Loader2, AlertCircle, CheckCircle, Youtube, Twitter, Github, MessagesSquare, Gamepad2, Home, BookOpen, Store, Newspaper, Crown, Lock, LogIn, UserPlus, Star, KeyRound, Send, Info, ArrowLeft, Shield, Unlock, Key, Clock, Check, Rocket, Download, MessageCircle, ShieldCheck, Repeat, ExternalLink } from "lucide-vue-next";
import { M as MarkdownRenderer } from "./Markdown-D1WgnuMs.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { g as _sfc_main$h } from "./Input-BXi_X4mZ.js";
import { usePage, Link, useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$i } from "./SearchSidebar-BPNZMEZb.js";
import { u as useRecaptcha } from "../Frontend_js.js";
import { a as api } from "./axios-BWWnXGbF.js";
import { m as makeMoney } from "./Money-B84zS3T2.js";
import { _ as _sfc_main$k } from "./SeoManager-ytA6mF8s.js";
const _sfc_main$g = {
  __name: "AlertSystem",
  __ssrInlineRender: true,
  props: {
    alerts: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const visibleAlerts = ref([]);
    onMounted(() => {
      visibleAlerts.value = props.alerts.filter((alert) => {
        const dismissedData = localStorage.getItem(`alert-dismissed-${alert.id}`);
        if (!dismissedData) return true;
        const parsed = JSON.parse(dismissedData);
        return parsed.scheduled_at !== alert.scheduled_at;
      });
    });
    const getAlertIcon = (alert) => {
      if (alert.icon && LucideIcons[alert.icon]) {
        return LucideIcons[alert.icon];
      }
      const icons = {
        info: LucideIcons.AlertCircle,
        warning: LucideIcons.AlertTriangle,
        error: LucideIcons.AlertOctagon,
        maintenance: LucideIcons.Clock
      };
      return icons[alert.type] || icons.info;
    };
    const getButtonIcon = (alert) => {
      if (alert.button_icon && LucideIcons[alert.button_icon]) {
        return LucideIcons[alert.button_icon];
      }
      return LucideIcons.Eye;
    };
    const formatDateTime = (datetime) => {
      const date = new Date(datetime);
      return new Intl.DateTimeFormat("en-US", {
        dateStyle: "full",
        timeStyle: "long"
      }).format(date);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_X = resolveComponent("X");
      const _component_Clock = resolveComponent("Clock");
      _push(`<div${ssrRenderAttrs(mergeProps({
        name: "alert",
        class: "relative z-[9999]"
      }, _attrs))} data-v-7baa2b94>`);
      ssrRenderList(visibleAlerts.value, (alert) => {
        if (alert.is_full_screen) {
          _push(`<div class="fixed inset-0 z-[9999] bg-dark-500/90 backdrop-blur-md flex items-center justify-center p-4 overflow-hidden" data-v-7baa2b94><div class="bg-dark-400 rounded-2xl shadow-2xl border border-yellow-500/30 max-w-2xl w-full p-8 relative animate-bounce-in transform transition-all duration-500 ease-in-out" data-v-7baa2b94>`);
          if (alert.is_dismissible) {
            _push(`<div class="absolute top-4 right-4" data-v-7baa2b94><button class="text-gray-400 hover:text-white transition-colors duration-300 group" data-v-7baa2b94>`);
            _push(ssrRenderComponent(_component_X, { class: "w-8 h-8 group-hover:rotate-90 transition-transform" }, null, _parent));
            _push(`</button></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="flex flex-col items-center space-y-6" data-v-7baa2b94><div class="relative" data-v-7baa2b94>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getAlertIcon(alert)), {
            class: "w-24 h-24 text-yellow-400 animate-pulse",
            strokeWidth: "1.5"
          }, null), _parent);
          _push(`<div class="absolute inset-0 bg-yellow-500/30 rounded-full animate-ping-slow opacity-75" data-v-7baa2b94></div></div><div class="text-center space-y-4" data-v-7baa2b94><h2 class="text-4xl font-bold text-white tracking-tight" data-v-7baa2b94>${ssrInterpolate(alert.title)}</h2>`);
          _push(ssrRenderComponent(MarkdownRenderer, {
            content: alert.html_content
          }, null, _parent));
          _push(`</div>`);
          if (alert.scheduled_at) {
            _push(`<div class="bg-dark-500 rounded-xl p-4 border border-yellow-500/20 shadow-inner" data-v-7baa2b94><div class="flex items-center space-x-4" data-v-7baa2b94>`);
            _push(ssrRenderComponent(_component_Clock, { class: "w-8 h-8 text-yellow-400" }, null, _parent));
            _push(`<div data-v-7baa2b94><p class="text-lg font-semibold text-white" data-v-7baa2b94> Scheduled Time </p><p class="text-gray-400" data-v-7baa2b94>${ssrInterpolate(formatDateTime(alert.scheduled_at))}</p></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="flex space-x-4 w-full justify-center" data-v-7baa2b94>`);
          if (alert.is_dismissible) {
            _push(`<button class="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300 flex items-center space-x-2" data-v-7baa2b94>`);
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getButtonIcon(alert)), { class: "w-5 h-5" }, null), _parent);
            _push(`<span data-v-7baa2b94>${ssrInterpolate(alert.button_text)}</span></button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div></div>`);
        } else {
          _push(`<div class="fixed inset-x-0 top-4 z-[9999] flex justify-center px-4" data-v-7baa2b94><div class="max-w-2xl w-full" data-v-7baa2b94><div class="bg-dark-400 rounded-lg shadow-lg border border-yellow-500/30 p-4 relative animate-bounce-in" data-v-7baa2b94></div></div></div>`);
        }
      });
      _push(`</div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Global/AlertSystem.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const AlertSystem = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-7baa2b94"]]);
const _sfc_main$f = {
  __name: "Loading",
  __ssrInlineRender: true,
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:reload"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$h), mergeProps({
        show: __props.isLoading,
        onClose: _ctx.close,
        isLarge: false,
        showFooter: false,
        showHeader: false,
        showModalBox: false
      }, _attrs), {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center"${_scopeId}><div class="loader mx-auto"${_scopeId}></div><p class="mt-4 text-3xl font-mono uppercase tracking-widest"${_scopeId}>Loading...</p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode("div", { class: "loader mx-auto" }),
                createVNode("p", { class: "mt-4 text-3xl font-mono uppercase tracking-widest" }, "Loading...")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Global/Loading.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  props: {
    backgroundClass: {
      type: String,
      default: "magicpattern"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(usePage)().props.breadcrumb) {
        _push(`<div${ssrRenderAttrs(_attrs)}><hr class="theme-divider"><nav class="${ssrRenderClass([__props.backgroundClass, "breadcrumb-nav w-full flex justify-center items-left py-3"])}" aria-label="Breadcrumb"><ol class="flex items-center"><li>`);
        _push(ssrRenderComponent(unref(Link), {
          href: "/",
          class: "breadcrumb-link flex items-center hover:text-neutral transition-colors duration-300 ease-in-out text-4xl"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg aria-hidden="true" class="breadcrumb-icon w-8 h-8 mr-2 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"${_scopeId}></path></svg></svg> Home `);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  "aria-hidden": "true",
                  class: "breadcrumb-icon w-8 h-8 mr-2 fill-current",
                  viewBox: "0 0 20 20",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor",
                    class: "w-6 h-6"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    })
                  ]))
                ])),
                createTextVNode(" Home ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><!--[-->`);
        ssrRenderList(unref(usePage)().props.breadcrumb, (item, index) => {
          _push(`<li class="breadcrumb-item flex items-center ml-4"><svg aria-hidden="true" class="breadcrumb-separator w-6 h-6 mr-2 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path></svg>`);
          _push(ssrRenderComponent(unref(Link), {
            href: item.url,
            class: "breadcrumb-link hover:text-accent text-4xl transition-colors duration-300 ease-in-out"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ol></nav></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/App/Breadcrumb.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "Notifications",
  __ssrInlineRender: true,
  emits: ["open-notification"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        tabindex: "0",
        class: "m-1 btn btn-square btn-primary"
      }, _attrs))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current text-neutral"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg></div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/App/Notifications.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "logoSimple",
  __ssrInlineRender: true,
  props: {
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 200
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: __props.width,
        height: __props.height,
        viewBox: "0 0 200 200",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><circle cx="100" cy="100" r="90" stroke="#001f3f" stroke-width="8" fill="#0074D9"></circle><circle cx="100" cy="100" r="50" stroke="#001f3f" stroke-width="4" fill="white"></circle><polygon points="100,20 105,95 100,100 95,95" fill="#001f3f"></polygon><polygon points="180,100 105,105 100,100 105,95" fill="#001f3f"></polygon><polygon points="100,180 95,105 100,100 105,105" fill="#001f3f"></polygon><polygon points="20,100 95,95 100,100 95,105" fill="#001f3f"></polygon><circle cx="100" cy="100" r="15" stroke="#001f3f" stroke-width="4" fill="#001f3f"></circle></svg>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Icons/logoSimple.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ThemeSwich",
  __ssrInlineRender: true,
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const avaliablesThemes = ["master"];
    let selectedTheme = ref(null);
    const loadLocalStorageTheme = async () => {
      const html = document.querySelector("html");
      html.setAttribute("data-theme", "coffee");
      const theme = localStorage.getItem("theme-frontend") ?? "master";
      html.setAttribute("data-theme", theme);
      selectedTheme.value = theme;
    };
    onMounted(() => {
      loadLocalStorageTheme();
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (!__props.disabled) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          title: "Change Theme",
          class: "dropdown dropdown-end p-6"
        }, _attrs))}><div tabindex="0" class="btn gap-1 normal-case btn-ghost"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg><span class="hidden md:inline">Theme</span><svg width="12px" height="12px" class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg></div><div class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 w-52 overflow-y-auto shadow-2xl mt-16"><div class="grid grid-cols-1 gap-3 p-3" tabindex="0"><!--[-->`);
        ssrRenderList(avaliablesThemes, (item, index) => {
          _push(`<div class="outline-base-content overflow-hidden rounded-lg outline outline-2 outline-offset-2"${ssrRenderAttr("data-set-theme", item)} data-act-class="outline"><div${ssrRenderAttr("data-theme", item)} class="bg-base-100 text-base-content w-full cursor-pointer font-sans"><div class="grid grid-cols-5 grid-rows-3"><div class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">`);
          if (unref(selectedTheme) == item) {
            _push(`<div class="badge badge-outline">${ssrInterpolate(item)}</div>`);
          } else {
            _push(`<div class="flex-grow text-sm font-bold">${ssrInterpolate(item)}</div>`);
          }
          _push(`<div class="flex flex-shrink-0 flex-wrap gap-1"><div class="bg-primary w-2 rounded"></div><div class="bg-secondary w-2 rounded"></div><div class="bg-accent w-2 rounded"></div><div class="bg-neutral w-2 rounded"></div></div></div></div></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Global/ThemeSwich.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "Navbar",
  __ssrInlineRender: true,
  props: {
    headerBackground: {
      type: String,
      default: "magicpattern"
    }
  },
  emits: ["login", "register"],
  setup(__props, { emit: __emit }) {
    let isAuth = ref(false);
    const userInfo = computed(() => {
      var _a;
      ((_a = usePage().props.authUserInfo) == null ? void 0 : _a.data) || {};
      return {
        // hasLevel: userData.has_subscription || false,
        hasLevel: true,
        level: usePage().props.authUserInfo.data.level || 25,
        currentXp: usePage().props.authUserInfo.data.xp || 50,
        nextLevelXp: usePage().props.authUserInfo.data.next_level_xp || 100
      };
    });
    const circumference = computed(() => 2 * Math.PI * 45);
    const dashOffset = computed(() => {
      if (!userInfo.value.hasLevel) return 0;
      const progress = userInfo.value.currentXp / userInfo.value.nextLevelXp;
      return circumference.value * (1 - progress);
    });
    const searchComponentRef = ref(null);
    const openNotification = () => {
      searchComponentRef.value.openNotifications();
    };
    const profileLink = route("user.edit");
    const achievements = route("profile.achievements");
    const logoutRoute = route("logout.user");
    onMounted(() => {
      if (usePage().props.isUserAuth) {
        isAuth.value = usePage().props.isUserAuth;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="${ssrRenderClass([__props.headerBackground, "absolute inset-0 bg-gradient-to-r from-dark-600/98 to-dark-500/98 backdrop-blur-sm border-b border-gray-800/50"])}"></div><div class="relative navbar z-30 flex justify-between items-center px-4 py-2"><div class="flex items-center gap-3"><label for="my-drawer" class="flex items-center gap-4 cursor-pointer group"><div class="relative"><div class="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-25 group-hover:opacity-75 blur transition-opacity duration-300"></div>`);
      _push(ssrRenderComponent(_sfc_main$c, { class: "relative h-16 w-16 transform transition-all duration-500 group-hover:rotate-180" }, null, _parent));
      _push(`</div><span class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 hidden lg:block"> The Dev Realm </span></label></div><div class="flex items-center gap-6">`);
      _push(ssrRenderComponent(_sfc_main$b, { disabled: true }, null, _parent));
      if (!unref(isAuth)) {
        _push(`<!--[--><button class="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300"> Sign in </button><button class="px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-medium transition-all duration-300"> Get Started for Free </button><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isAuth)) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_sfc_main$i, {
          ref_key: "searchComponentRef",
          ref: searchComponentRef
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$d, { onOpenNotification: openNotification }, null, _parent));
        _push(`<div class="dropdown dropdown-end"><div class="relative group cursor-pointer" tabindex="0"><div class="relative w-12 h-12 rounded-full overflow-hidden border-2 border-dark-500"><img${ssrRenderAttr("src", unref(usePage)().props.authUserInfo.data.avatar)} class="w-full h-full object-cover"></div>`);
        if (userInfo.value.hasLevel) {
          _push(`<!--[--><div class="absolute -inset-3 rounded-full"><svg class="w-full h-full" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" stroke="rgba(0,0,0,0.5)" stroke-width="5" fill="none" class="text-dark-800"></circle><circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="5" fill="none" class="text-blue-500/20"></circle><circle cx="50" cy="50" r="45" stroke="url(#gradient)" stroke-width="5" fill="none"${ssrRenderAttr("stroke-dasharray", circumference.value)}${ssrRenderAttr("stroke-dashoffset", dashOffset.value)} class="transform -rotate-90 origin-center transition-all duration-300"></circle><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="${ssrRenderStyle({ "stop-color": "rgb(59, 130, 246)" })}"></stop><stop offset="100%" style="${ssrRenderStyle({ "stop-color": "rgb(168, 85, 247)" })}"></stop></linearGradient></defs></svg></div><div class="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-sm font-bold text-white shadow-lg border-2 border-dark-800">${ssrInterpolate(userInfo.value.level)}</div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><ul tabindex="0" class="p-2 shadow-lg menu dropdown-content bg-dark-200/90 backdrop-blur-sm rounded-xl border border-gray-800/50 w-72 mt-4"><div class="p-4 border-b border-gray-800/50"><div class="flex items-center gap-4"><div class="w-16 h-16 rounded-lg overflow-hidden"><img${ssrRenderAttr("src", unref(usePage)().props.authUserInfo.data.avatar)} class="w-full h-full object-cover"></div><div class="flex-1"><div class="font-bold text-white text-lg">${ssrInterpolate(unref(usePage)().props.authUserInfo.data.name)}</div>`);
        if (userInfo.value.hasLevel) {
          _push(`<!--[--><div class="text-sm text-gray-400">Level ${ssrInterpolate(userInfo.value.level)}</div><div class="text-sm text-gray-400">${ssrInterpolate(userInfo.value.currentXp)}/${ssrInterpolate(userInfo.value.nextLevelXp)} XP to next level</div><!--]-->`);
        } else {
          _push(`<div class="text-sm text-gray-400"> Free Account </div>`);
        }
        _push(`</div></div>`);
        if (userInfo.value.hasLevel) {
          _push(`<div class="mt-4 h-2 w-full bg-dark-500 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300" style="${ssrRenderStyle({ width: `${userInfo.value.currentXp / userInfo.value.nextLevelXp * 100}%` })}"></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><li>`);
        _push(ssrRenderComponent(unref(Link), {
          href: unref(profileLink),
          class: "flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-dark-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(User), { class: "w-5 h-5" }, null, _parent2, _scopeId));
              _push2(` My Profile `);
            } else {
              return [
                createVNode(unref(User), { class: "w-5 h-5" }),
                createTextVNode(" My Profile ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li>`);
        _push(ssrRenderComponent(unref(Link), {
          href: unref(achievements),
          class: "flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-dark-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(User), { class: "w-5 h-5" }, null, _parent2, _scopeId));
              _push2(` Achievements `);
            } else {
              return [
                createVNode(unref(User), { class: "w-5 h-5" }),
                createTextVNode(" Achievements ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li>`);
        _push(ssrRenderComponent(unref(Link), {
          href: unref(logoutRoute),
          class: "flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-dark-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(LogOut), { class: "w-5 h-5" }, null, _parent2, _scopeId));
              _push2(` Logout `);
            } else {
              return [
                createVNode(unref(LogOut), { class: "w-5 h-5" }),
                createTextVNode(" Logout ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/App/Navbar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "Footer",
  __ssrInlineRender: true,
  props: {
    backgroundClass: {
      type: String,
      default: "bg-dark-100"
    }
  },
  setup(__props) {
    useRecaptcha();
    const email = ref("");
    const errors = ref({});
    const processing = ref(false);
    const successMessage = ref("");
    let appName = ref("The Dev Realm");
    onMounted(() => {
      if (usePage().props.app) {
        appName.value = usePage().props.app;
      }
    });
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: [__props.backgroundClass, "relative overflow-hidden border-t border-gray-800/50"]
      }, _attrs))}><div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div><div class="absolute inset-0 bg-[url(&#39;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+&#39;)] opacity-10"></div><div class="relative mx-auto max-w-screen-xl px-4 py-16"><div class="mx-auto max-w-xl mb-16"><div class="text-center space-y-4"><h2 class="text-3xl font-bold text-white"> Level Up Your Game Dev Skills </h2><p class="text-gray-400"> Subscribe to our newsletter for the latest tutorials, tips, and updates. </p></div><form class="mt-6"><div class="relative"><label class="sr-only" for="email">Email</label><input${ssrRenderAttr("value", email.value)} class="${ssrRenderClass([{ "border-red-500 focus:border-red-500 focus:ring-red-500/20": errors.value.email }, "w-full rounded-xl bg-dark-400/50 border border-gray-800/50 p-4 pe-32 text-sm font-medium text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"])}" id="email" type="email" placeholder="Enter your email"><button type="submit"${ssrIncludeBooleanAttr(processing.value) ? " disabled" : ""} class="absolute end-2 top-1/2 -translate-y-1/2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50"><span class="flex items-center gap-2">`);
      if (!processing.value) {
        _push(ssrRenderComponent(unref(Mail), { class: "w-4 h-4" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Loader2), { class: "w-4 h-4 animate-spin" }, null, _parent));
      }
      _push(` ${ssrInterpolate(processing.value ? "Subscribing..." : "Subscribe")}</span></button></div>`);
      if (errors.value.email) {
        _push(`<p class="mt-2 text-sm text-red-400 flex items-center gap-1">`);
        _push(ssrRenderComponent(unref(AlertCircle), { class: "w-4 h-4" }, null, _parent));
        _push(` ${ssrInterpolate(errors.value.email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (successMessage.value) {
        _push(`<p class="mt-2 text-sm text-green-400 flex items-center gap-1">`);
        _push(ssrRenderComponent(unref(CheckCircle), { class: "w-4 h-4" }, null, _parent));
        _push(` ${ssrInterpolate(successMessage.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div><div class="grid grid-cols-1 gap-8 lg:grid-cols-4 mb-16"><div class="space-y-4">`);
      _push(ssrRenderComponent(_sfc_main$c, { class: "h-8 w-8" }, null, _parent));
      _push(`<p class="text-gray-400 max-w-xs"> Your journey to becoming a game developer starts here. Learn, create, and level up your skills. </p><div class="flex gap-4"><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">`);
      _push(ssrRenderComponent(unref(Youtube), { class: "w-5 h-5" }, null, _parent));
      _push(`</a><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">`);
      _push(ssrRenderComponent(unref(Twitter), { class: "w-5 h-5" }, null, _parent));
      _push(`</a><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">`);
      _push(ssrRenderComponent(unref(Github), { class: "w-5 h-5" }, null, _parent));
      _push(`</a><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">`);
      _push(ssrRenderComponent(unref(MessagesSquare), { class: "w-5 h-5" }, null, _parent));
      _push(`</a></div></div><div><p class="font-bold text-white mb-4">Quick Links</p><ul class="space-y-2"><li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Home</a></li><li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Courses</a></li><li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">News</a></li><li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Forum</a></li></ul></div><div><p class="font-bold text-white mb-4">Resources</p><ul class="space-y-2"><li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Shop</a></li><li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Contact</a></li><li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Pricing</a></li><li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Leaderboard</a></li></ul></div><div><p class="font-bold text-white mb-4">Legal</p><ul class="space-y-2"><li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Privacy Policy</a></li><li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Roadmap</a></li><li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Guidelines</a></li><li><a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Terms of Service</a></li></ul></div></div><div class="border-t border-gray-800/50 pt-8"><div class="flex flex-col sm:flex-row justify-between items-center gap-4"><p class="text-gray-400 text-sm"> © ${ssrInterpolate(unref(currentYear))} ${ssrInterpolate(unref(appName))}. All rights reserved. </p><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Gamepad2), { class: "w-5 h-5 text-blue-400" }, null, _parent));
      _push(`<span class="text-gray-400 text-sm">Made with ♥ for Game Developers</span></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/App/Footer.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "MenuDrawer",
  __ssrInlineRender: true,
  emits: ["pricing"],
  setup(__props, { emit: __emit }) {
    const homeRoute = route("home");
    const courses = route("course.index");
    const store = route("store.index");
    const news = route("news");
    const currentRoute = computed(() => usePage().url);
    const regularNavItems = computed(() => [
      {
        name: "Home",
        icon: Home,
        route: homeRoute,
        isActive: currentRoute.value === homeRoute
      },
      {
        name: "Courses",
        icon: BookOpen,
        route: courses,
        isActive: currentRoute.value === courses
      },
      {
        name: "Store",
        icon: Store,
        route: store,
        isActive: currentRoute.value === store
      },
      {
        name: "News",
        icon: Newspaper,
        route: news,
        isActive: currentRoute.value === news
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "w-80 min-h-full bg-dark-500/90 backdrop-blur-sm border-r border-gray-800/50 relative overflow-hidden" }, _attrs))}><div class="absolute inset-0 bg-[url(&#39;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc&gt;&#39;)] opacity-5"></div><div class="relative p-6 space-y-3"><!--[-->`);
      ssrRenderList(regularNavItems.value, (item) => {
        _push(ssrRenderComponent(unref(Link), {
          key: item.name,
          href: item.route,
          class: ["group relative flex items-center gap-4 p-4 rounded-lg transition-all duration-300", [
            item.isActive ? "bg-blue-500/20 text-blue-400 shadow-[inset_0_0_20px_rgba(59,130,246,0.15)]" : "text-gray-400 hover:bg-dark-400/50 hover:text-white"
          ]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([{ "opacity-100": item.isActive }, "absolute inset-0 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100"])}"${_scopeId}><div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"${_scopeId}></div><div class="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"${_scopeId}></div></div><div class="relative"${_scopeId}><div class="${ssrRenderClass([{ "bg-blue-500/20": item.isActive }, "absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 rounded-lg blur-md transition-all duration-300"])}"${_scopeId}></div>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(item.icon), {
                class: ["w-6 h-6 relative z-10", item.isActive ? "text-blue-400" : "text-gray-400 group-hover:text-blue-400"]
              }, null), _parent2, _scopeId);
              _push2(`</div><span class="${ssrRenderClass([item.isActive ? "text-blue-400" : "group-hover:text-blue-400", "text-lg font-medium relative z-10 transition-all duration-300"])}"${_scopeId}>${ssrInterpolate(item.name)}</span><div class="${ssrRenderClass([{ "opacity-100": item.isActive }, "absolute -right-6 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-0 transition-all duration-300 rounded-l"])}"${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["absolute inset-0 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100", { "opacity-100": item.isActive }]
                }, [
                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" }),
                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" })
                ], 2),
                createVNode("div", { class: "relative" }, [
                  createVNode("div", {
                    class: ["absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 rounded-lg blur-md transition-all duration-300", { "bg-blue-500/20": item.isActive }]
                  }, null, 2),
                  (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                    class: ["w-6 h-6 relative z-10", item.isActive ? "text-blue-400" : "text-gray-400 group-hover:text-blue-400"]
                  }, null, 8, ["class"]))
                ]),
                createVNode("span", {
                  class: ["text-lg font-medium relative z-10 transition-all duration-300", item.isActive ? "text-blue-400" : "group-hover:text-blue-400"]
                }, toDisplayString(item.name), 3),
                createVNode("div", {
                  class: ["absolute -right-6 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-0 transition-all duration-300 rounded-l", { "opacity-100": item.isActive }]
                }, null, 2)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><button class="group relative w-full flex items-center gap-4 p-4 rounded-lg transition-all duration-300 text-gray-400 hover:text-purple-400"><div class="absolute inset-0 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100"><div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div><div class="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div></div><div class="relative"><div class="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20 rounded-lg blur-md transition-all duration-300"></div>`);
      _push(ssrRenderComponent(unref(Crown), { class: "w-6 h-6 relative z-10 transition-colors duration-300 group-hover:text-purple-400" }, null, _parent));
      _push(`</div><span class="text-lg font-medium relative z-10 transition-colors duration-300 group-hover:text-purple-400"> Pricing </span><div class="ml-auto relative"><div class="absolute -inset-1 bg-purple-500/20 rounded-full blur animate-pulse"></div><div class="relative w-2 h-2 rounded-full bg-purple-400"></div></div></button></div></nav>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/App/MenuDrawer.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ["closeModal", "register", "forgotPassword", "isLoading"],
  setup(__props, { emit: __emit }) {
    const { getToken, isLoading, error } = useRecaptcha();
    const emit = __emit;
    const form = useForm({
      email: "",
      password: "",
      recaptcha_token: ""
    });
    const close = () => {
      emit("closeModal");
    };
    const register = () => {
      emit("register");
    };
    const forgotPassword = () => {
      emit("forgotPassword");
    };
    const submitForm = async () => {
      form.recaptcha_token = await getToken("submit");
      emit("isLoading", true);
      form.post(route("login.user"), {
        preserveState: false,
        onSuccess: () => {
          emit("isLoading", false);
          emit("closeModal");
        },
        onError: () => {
          emit("isLoading", false);
        }
      });
    };
    const socialLiteRegister = async (provider) => {
      window.location.href = route("social.redirect", provider);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$h), mergeProps({
        show: __props.isOpen,
        onClose: close,
        isLarge: false,
        showFooter: false,
        modalClass: "bg-dark-500/95 backdrop-blur-sm border border-gray-800/50",
        showModalBox: false,
        closeOnClick: "",
        showClose: true
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<header class="relative text-center px-8 py-6" data-v-3bc8be93${_scopeId}><div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" data-v-3bc8be93${_scopeId}></div><h2 class="text-4xl font-bold text-white" data-v-3bc8be93${_scopeId}>Welcome Back</h2><p class="mt-2 text-gray-400" data-v-3bc8be93${_scopeId}>Sign in to continue your journey</p></header>`);
          } else {
            return [
              createVNode("header", { class: "relative text-center px-8 py-6" }, [
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" }),
                createVNode("h2", { class: "text-4xl font-bold text-white" }, "Welcome Back"),
                createVNode("p", { class: "mt-2 text-gray-400" }, "Sign in to continue your journey")
              ])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="p-6 space-y-6" data-v-3bc8be93${_scopeId}><div class="space-y-2" data-v-3bc8be93${_scopeId}><label for="email" class="block text-sm font-medium text-gray-300" data-v-3bc8be93${_scopeId}>Email Address</label><div class="relative" data-v-3bc8be93${_scopeId}><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-3bc8be93${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Mail), { class: "h-5 w-5 text-gray-400" }, null, _parent2, _scopeId));
            _push2(`</div><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" placeholder="Enter your email" class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300" data-v-3bc8be93${_scopeId}></div></div><div class="space-y-2" data-v-3bc8be93${_scopeId}><label for="password" class="block text-sm font-medium text-gray-300" data-v-3bc8be93${_scopeId}>Password</label><div class="relative" data-v-3bc8be93${_scopeId}><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-3bc8be93${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Lock), { class: "h-5 w-5 text-gray-400" }, null, _parent2, _scopeId));
            _push2(`</div><input id="password"${ssrRenderAttr("value", unref(form).password)} type="password" placeholder="Enter your password" class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300" data-v-3bc8be93${_scopeId}></div></div><div class="space-y-4" data-v-3bc8be93${_scopeId}><button type="submit" class="group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600" data-v-3bc8be93${_scopeId}><div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" data-v-3bc8be93${_scopeId}></div>`);
            _push2(ssrRenderComponent(unref(LogIn), { class: "w-5 h-5" }, null, _parent2, _scopeId));
            _push2(`<span data-v-3bc8be93${_scopeId}>Sign In</span></button><button type="button" class="relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-dark-400/50 hover:bg-dark-300/50 text-white font-medium rounded-lg border border-gray-800/50 transition-all duration-300" data-v-3bc8be93${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Github), { class: "w-5 h-5" }, null, _parent2, _scopeId));
            _push2(`<span data-v-3bc8be93${_scopeId}>Continue with GitHub</span></button><button type="button" class="relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-dark-400/50 hover:bg-dark-300/50 text-white font-medium rounded-lg border border-gray-800/50 transition-all duration-300" data-v-3bc8be93${_scopeId}><svg class="w-5 h-5" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" style="${ssrRenderStyle({ "display": "block" })}" data-v-3bc8be93${_scopeId}><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-3bc8be93${_scopeId}></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-3bc8be93${_scopeId}></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-3bc8be93${_scopeId}></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" data-v-3bc8be93${_scopeId}></path><path fill="none" d="M0 0h48v48H0z" data-v-3bc8be93${_scopeId}></path></svg><span data-v-3bc8be93${_scopeId}>Continue with Google</span></button></div><div class="flex items-center justify-between pt-4 border-t border-gray-800/50" data-v-3bc8be93${_scopeId}><button type="button" class="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300" data-v-3bc8be93${_scopeId}> Forgot Password? </button><button type="button" class="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300" data-v-3bc8be93${_scopeId}> Create Account </button></div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(submitForm, ["prevent"]),
                class: "p-6 space-y-6"
              }, [
                createVNode("div", { class: "space-y-2" }, [
                  createVNode("label", {
                    for: "email",
                    class: "block text-sm font-medium text-gray-300"
                  }, "Email Address"),
                  createVNode("div", { class: "relative" }, [
                    createVNode("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
                      createVNode(unref(Mail), { class: "h-5 w-5 text-gray-400" })
                    ]),
                    withDirectives(createVNode("input", {
                      id: "email",
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      type: "email",
                      placeholder: "Enter your email",
                      class: "w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).email]
                    ])
                  ])
                ]),
                createVNode("div", { class: "space-y-2" }, [
                  createVNode("label", {
                    for: "password",
                    class: "block text-sm font-medium text-gray-300"
                  }, "Password"),
                  createVNode("div", { class: "relative" }, [
                    createVNode("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
                      createVNode(unref(Lock), { class: "h-5 w-5 text-gray-400" })
                    ]),
                    withDirectives(createVNode("input", {
                      id: "password",
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      type: "password",
                      placeholder: "Enter your password",
                      class: "w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).password]
                    ])
                  ])
                ]),
                createVNode("div", { class: "space-y-4" }, [
                  createVNode("button", {
                    type: "submit",
                    class: "group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600"
                  }, [
                    createVNode("div", { class: "absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" }),
                    createVNode(unref(LogIn), { class: "w-5 h-5" }),
                    createVNode("span", null, "Sign In")
                  ]),
                  createVNode("button", {
                    type: "button",
                    onClick: ($event) => socialLiteRegister("github"),
                    class: "relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-dark-400/50 hover:bg-dark-300/50 text-white font-medium rounded-lg border border-gray-800/50 transition-all duration-300"
                  }, [
                    createVNode(unref(Github), { class: "w-5 h-5" }),
                    createVNode("span", null, "Continue with GitHub")
                  ], 8, ["onClick"]),
                  createVNode("button", {
                    type: "button",
                    onClick: ($event) => socialLiteRegister("google"),
                    class: "relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-dark-400/50 hover:bg-dark-300/50 text-white font-medium rounded-lg border border-gray-800/50 transition-all duration-300"
                  }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-5 h-5",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 48 48",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      style: { "display": "block" }
                    }, [
                      createVNode("path", {
                        fill: "#EA4335",
                        d: "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                      }),
                      createVNode("path", {
                        fill: "#4285F4",
                        d: "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                      }),
                      createVNode("path", {
                        fill: "#FBBC05",
                        d: "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                      }),
                      createVNode("path", {
                        fill: "#34A853",
                        d: "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                      }),
                      createVNode("path", {
                        fill: "none",
                        d: "M0 0h48v48H0z"
                      })
                    ])),
                    createVNode("span", null, "Continue with Google")
                  ], 8, ["onClick"])
                ]),
                createVNode("div", { class: "flex items-center justify-between pt-4 border-t border-gray-800/50" }, [
                  createVNode("button", {
                    type: "button",
                    onClick: forgotPassword,
                    class: "text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  }, " Forgot Password? "),
                  createVNode("button", {
                    type: "button",
                    onClick: register,
                    class: "text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  }, " Create Account ")
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/Auth/FloatPages/Login.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const loginModal = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-3bc8be93"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Register",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ["closeModal", "alreadyHaveAccount", "isLoading"],
  setup(__props, { emit: __emit }) {
    const { getToken, isLoading, error } = useRecaptcha();
    const emit = __emit;
    const form = useForm({
      username: "",
      email: "",
      password: "",
      recaptcha_token: ""
    });
    const close = () => {
      emit("closeModal");
    };
    const alreadyHaveAccount = () => {
      emit("alreadyHaveAccount");
    };
    const submitForm = async () => {
      form.recaptcha_token = await getToken("submit");
      emit("isLoading", true);
      form.post(route("register.user"), {
        preserveState: true,
        onSuccess: () => {
          emit("isLoading", false);
          emit("closeModal");
        },
        onError: () => {
          emit("isLoading", false);
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$h), mergeProps({
        show: __props.isOpen,
        onClose: close,
        isLarge: false,
        showFooter: false,
        modalClass: "bg-dark-500/95 backdrop-blur-sm border border-gray-800/50",
        showModalBox: false,
        closeOnClick: "",
        showClose: true
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<header class="relative text-center px-8 py-6" data-v-098470ea${_scopeId}><div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5" data-v-098470ea${_scopeId}></div><h2 class="text-4xl font-bold text-white" data-v-098470ea${_scopeId}>Create Account</h2><p class="mt-2 text-gray-400" data-v-098470ea${_scopeId}>Begin your game development journey</p></header>`);
          } else {
            return [
              createVNode("header", { class: "relative text-center px-8 py-6" }, [
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5" }),
                createVNode("h2", { class: "text-4xl font-bold text-white" }, "Create Account"),
                createVNode("p", { class: "mt-2 text-gray-400" }, "Begin your game development journey")
              ])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="p-6 space-y-6" data-v-098470ea${_scopeId}><div class="space-y-2" data-v-098470ea${_scopeId}><label for="username" class="block text-sm font-medium text-gray-300" data-v-098470ea${_scopeId}>Username</label><div class="relative" data-v-098470ea${_scopeId}><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-098470ea${_scopeId}>`);
            _push2(ssrRenderComponent(unref(User), { class: "h-5 w-5 text-gray-400" }, null, _parent2, _scopeId));
            _push2(`</div><input id="username"${ssrRenderAttr("value", unref(form).username)} type="text" placeholder="Choose a username" class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300" data-v-098470ea${_scopeId}></div></div><div class="space-y-2" data-v-098470ea${_scopeId}><label for="email" class="block text-sm font-medium text-gray-300" data-v-098470ea${_scopeId}>Email Address</label><div class="relative" data-v-098470ea${_scopeId}><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-098470ea${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Mail), { class: "h-5 w-5 text-gray-400" }, null, _parent2, _scopeId));
            _push2(`</div><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" placeholder="Enter your email" class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300" data-v-098470ea${_scopeId}></div></div><div class="space-y-2" data-v-098470ea${_scopeId}><label for="password" class="block text-sm font-medium text-gray-300" data-v-098470ea${_scopeId}>Password</label><div class="relative" data-v-098470ea${_scopeId}><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-098470ea${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Lock), { class: "h-5 w-5 text-gray-400" }, null, _parent2, _scopeId));
            _push2(`</div><input id="password"${ssrRenderAttr("value", unref(form).password)} type="password" placeholder="Create a strong password" class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300" data-v-098470ea${_scopeId}></div></div><div class="space-y-4 pt-4" data-v-098470ea${_scopeId}><button type="submit" class="group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-blue-600" data-v-098470ea${_scopeId}><div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" data-v-098470ea${_scopeId}></div>`);
            _push2(ssrRenderComponent(unref(UserPlus), { class: "w-5 h-5" }, null, _parent2, _scopeId));
            _push2(`<span data-v-098470ea${_scopeId}>Create Account</span></button><div class="p-4 bg-dark-400/30 rounded-lg" data-v-098470ea${_scopeId}><h3 class="font-medium text-white mb-3 flex items-center gap-2" data-v-098470ea${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Star), { class: "w-4 h-4 text-yellow-400" }, null, _parent2, _scopeId));
            _push2(` Account Benefits </h3><ul class="space-y-2 text-sm text-gray-400" data-v-098470ea${_scopeId}><li class="flex items-center gap-2" data-v-098470ea${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckCircle), { class: "w-4 h-4 text-green-400" }, null, _parent2, _scopeId));
            _push2(` Track your learning progress </li><li class="flex items-center gap-2" data-v-098470ea${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckCircle), { class: "w-4 h-4 text-green-400" }, null, _parent2, _scopeId));
            _push2(` Access free tutorials </li><li class="flex items-center gap-2" data-v-098470ea${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckCircle), { class: "w-4 h-4 text-green-400" }, null, _parent2, _scopeId));
            _push2(` Join our community </li></ul></div></div><div class="flex justify-center pt-4 border-t border-gray-800/50" data-v-098470ea${_scopeId}><button type="button" class="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300" data-v-098470ea${_scopeId}> Already have an account? Sign in </button></div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(submitForm, ["prevent"]),
                class: "p-6 space-y-6"
              }, [
                createVNode("div", { class: "space-y-2" }, [
                  createVNode("label", {
                    for: "username",
                    class: "block text-sm font-medium text-gray-300"
                  }, "Username"),
                  createVNode("div", { class: "relative" }, [
                    createVNode("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
                      createVNode(unref(User), { class: "h-5 w-5 text-gray-400" })
                    ]),
                    withDirectives(createVNode("input", {
                      id: "username",
                      "onUpdate:modelValue": ($event) => unref(form).username = $event,
                      type: "text",
                      placeholder: "Choose a username",
                      class: "w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).username]
                    ])
                  ])
                ]),
                createVNode("div", { class: "space-y-2" }, [
                  createVNode("label", {
                    for: "email",
                    class: "block text-sm font-medium text-gray-300"
                  }, "Email Address"),
                  createVNode("div", { class: "relative" }, [
                    createVNode("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
                      createVNode(unref(Mail), { class: "h-5 w-5 text-gray-400" })
                    ]),
                    withDirectives(createVNode("input", {
                      id: "email",
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      type: "email",
                      placeholder: "Enter your email",
                      class: "w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).email]
                    ])
                  ])
                ]),
                createVNode("div", { class: "space-y-2" }, [
                  createVNode("label", {
                    for: "password",
                    class: "block text-sm font-medium text-gray-300"
                  }, "Password"),
                  createVNode("div", { class: "relative" }, [
                    createVNode("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
                      createVNode(unref(Lock), { class: "h-5 w-5 text-gray-400" })
                    ]),
                    withDirectives(createVNode("input", {
                      id: "password",
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      type: "password",
                      placeholder: "Create a strong password",
                      class: "w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).password]
                    ])
                  ])
                ]),
                createVNode("div", { class: "space-y-4 pt-4" }, [
                  createVNode("button", {
                    type: "submit",
                    class: "group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-blue-600"
                  }, [
                    createVNode("div", { class: "absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" }),
                    createVNode(unref(UserPlus), { class: "w-5 h-5" }),
                    createVNode("span", null, "Create Account")
                  ]),
                  createVNode("div", { class: "p-4 bg-dark-400/30 rounded-lg" }, [
                    createVNode("h3", { class: "font-medium text-white mb-3 flex items-center gap-2" }, [
                      createVNode(unref(Star), { class: "w-4 h-4 text-yellow-400" }),
                      createTextVNode(" Account Benefits ")
                    ]),
                    createVNode("ul", { class: "space-y-2 text-sm text-gray-400" }, [
                      createVNode("li", { class: "flex items-center gap-2" }, [
                        createVNode(unref(CheckCircle), { class: "w-4 h-4 text-green-400" }),
                        createTextVNode(" Track your learning progress ")
                      ]),
                      createVNode("li", { class: "flex items-center gap-2" }, [
                        createVNode(unref(CheckCircle), { class: "w-4 h-4 text-green-400" }),
                        createTextVNode(" Access free tutorials ")
                      ]),
                      createVNode("li", { class: "flex items-center gap-2" }, [
                        createVNode(unref(CheckCircle), { class: "w-4 h-4 text-green-400" }),
                        createTextVNode(" Join our community ")
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex justify-center pt-4 border-t border-gray-800/50" }, [
                  createVNode("button", {
                    type: "button",
                    onClick: alreadyHaveAccount,
                    class: "text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  }, " Already have an account? Sign in ")
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/Auth/FloatPages/Register.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const registerModal = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-098470ea"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ForgetPassword",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ["closeModal"],
  setup(__props, { emit: __emit }) {
    const { getToken, isLoading, error } = useRecaptcha();
    const emit = __emit;
    const form = useForm({
      email: "",
      recaptcha_token: ""
    });
    const close = () => {
      emit("closeModal", "isLoading");
    };
    const submitForm = async () => {
      form.recaptcha_token = await getToken("submit");
      emit("isLoading", true);
      form.post(route("password-reset.user"), {
        preserveState: true,
        onSuccess: () => {
          emit("isLoading", false);
          emit("closeModal");
        },
        onError: () => {
          emit("isLoading", false);
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$h), mergeProps({
        show: __props.isOpen,
        onClose: close,
        isLarge: false,
        showFooter: false,
        modalClass: "bg-dark-500/95 backdrop-blur-sm border border-gray-800/50",
        showModalBox: false,
        closeOnClick: "",
        showClose: true
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<header class="relative text-center px-8 py-6" data-v-f78da33a${_scopeId}><div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" data-v-f78da33a${_scopeId}></div><div class="flex flex-col items-center" data-v-f78da33a${_scopeId}><div class="relative mb-4" data-v-f78da33a${_scopeId}><div class="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur" data-v-f78da33a${_scopeId}></div>`);
            _push2(ssrRenderComponent(unref(KeyRound), { class: "w-12 h-12 text-blue-400 relative" }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="text-3xl font-bold text-white" data-v-f78da33a${_scopeId}>Password Reset</h2><p class="mt-2 text-gray-400 max-w-sm" data-v-f78da33a${_scopeId}> Enter your email address and we&#39;ll send you a link to reset your password </p></div></header>`);
          } else {
            return [
              createVNode("header", { class: "relative text-center px-8 py-6" }, [
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" }),
                createVNode("div", { class: "flex flex-col items-center" }, [
                  createVNode("div", { class: "relative mb-4" }, [
                    createVNode("div", { class: "absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur" }),
                    createVNode(unref(KeyRound), { class: "w-12 h-12 text-blue-400 relative" })
                  ]),
                  createVNode("h2", { class: "text-3xl font-bold text-white" }, "Password Reset"),
                  createVNode("p", { class: "mt-2 text-gray-400 max-w-sm" }, " Enter your email address and we'll send you a link to reset your password ")
                ])
              ])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="p-6 space-y-6" data-v-f78da33a${_scopeId}><div class="space-y-2" data-v-f78da33a${_scopeId}><label for="email" class="block text-sm font-medium text-gray-300" data-v-f78da33a${_scopeId}>Email Address</label><div class="relative" data-v-f78da33a${_scopeId}><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-f78da33a${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Mail), { class: "h-5 w-5 text-gray-400" }, null, _parent2, _scopeId));
            _push2(`</div><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" placeholder="Enter your registered email" class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300" data-v-f78da33a${_scopeId}></div></div><div class="space-y-4" data-v-f78da33a${_scopeId}><button type="submit" class="group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600" data-v-f78da33a${_scopeId}><div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" data-v-f78da33a${_scopeId}></div>`);
            _push2(ssrRenderComponent(unref(Send), { class: "w-5 h-5" }, null, _parent2, _scopeId));
            _push2(`<span data-v-f78da33a${_scopeId}>Send Reset Link</span></button><div class="p-4 bg-dark-400/30 rounded-lg" data-v-f78da33a${_scopeId}><div class="flex items-start gap-3" data-v-f78da33a${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" }, null, _parent2, _scopeId));
            _push2(`<p class="text-sm text-gray-400" data-v-f78da33a${_scopeId}> Make sure to check your spam folder if you don&#39;t receive the email within a few minutes. The reset link will be valid for 60 minutes. </p></div></div></div><div class="flex justify-center pt-4 border-t border-gray-800/50" data-v-f78da33a${_scopeId}><button class="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2" data-v-f78da33a${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ArrowLeft), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(` Back to login </button></div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(submitForm, ["prevent"]),
                class: "p-6 space-y-6"
              }, [
                createVNode("div", { class: "space-y-2" }, [
                  createVNode("label", {
                    for: "email",
                    class: "block text-sm font-medium text-gray-300"
                  }, "Email Address"),
                  createVNode("div", { class: "relative" }, [
                    createVNode("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
                      createVNode(unref(Mail), { class: "h-5 w-5 text-gray-400" })
                    ]),
                    withDirectives(createVNode("input", {
                      id: "email",
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      type: "email",
                      placeholder: "Enter your registered email",
                      class: "w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).email]
                    ])
                  ])
                ]),
                createVNode("div", { class: "space-y-4" }, [
                  createVNode("button", {
                    type: "submit",
                    class: "group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600"
                  }, [
                    createVNode("div", { class: "absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" }),
                    createVNode(unref(Send), { class: "w-5 h-5" }),
                    createVNode("span", null, "Send Reset Link")
                  ]),
                  createVNode("div", { class: "p-4 bg-dark-400/30 rounded-lg" }, [
                    createVNode("div", { class: "flex items-start gap-3" }, [
                      createVNode(unref(Info), { class: "w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" }),
                      createVNode("p", { class: "text-sm text-gray-400" }, " Make sure to check your spam folder if you don't receive the email within a few minutes. The reset link will be valid for 60 minutes. ")
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex justify-center pt-4 border-t border-gray-800/50" }, [
                  createVNode("button", {
                    onClick: close,
                    class: "text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
                  }, [
                    createVNode(unref(ArrowLeft), { class: "w-4 h-4" }),
                    createTextVNode(" Back to login ")
                  ])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/Auth/FloatPages/ForgetPassword.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const forgetPassword = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-f78da33a"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "codeWall",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ["closeModal"],
  setup(__props, { emit: __emit }) {
    const { getToken, isLoading, error } = useRecaptcha();
    const emit = __emit;
    const form = useForm({
      code: "",
      recaptcha_token: ""
    });
    const close = () => {
      emit("closeModal", "isLoading");
    };
    const submitForm = async () => {
      form.recaptcha_token = await getToken("submit");
      emit("isLoading", true);
      form.post(route("castle.validate"), {
        preserveState: false,
        onSuccess: () => {
          emit("isLoading", false);
          emit("closeModal");
        },
        onError: () => {
          emit("isLoading", false);
        }
      });
    };
    const submitFormRecovery = () => {
      emit("isLoading", true);
      form.post(route("castle.unlock.backup.code"), {
        preserveState: false,
        onSuccess: () => {
          emit("isLoading", false);
          emit("closeModal");
        },
        onError: () => {
          emit("isLoading", false);
        }
      });
    };
    let recoveryMode = ref(false);
    const enableRecoveryMode = (enable = false) => {
      recoveryMode.value = enable;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$h), mergeProps({
        show: __props.isOpen,
        onClose: close,
        isLarge: false,
        showFooter: false,
        modalClass: "bg-dark-500/95 backdrop-blur-sm border border-gray-800/50",
        showModalBox: false,
        closeOnClick: "",
        showClose: true
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<header class="relative text-center px-8 py-6" data-v-5438f7f5${_scopeId}><div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" data-v-5438f7f5${_scopeId}></div><div class="flex flex-col items-center" data-v-5438f7f5${_scopeId}><div class="relative mb-4" data-v-5438f7f5${_scopeId}><div class="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur" data-v-5438f7f5${_scopeId}></div>`);
            _push2(ssrRenderComponent(unref(Shield), { class: "w-12 h-12 text-blue-400 relative" }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="text-3xl font-bold text-white" data-v-5438f7f5${_scopeId}>Two-Factor Authentication</h2><p class="mt-2 text-gray-400 max-w-sm" data-v-5438f7f5${_scopeId}>${ssrInterpolate(unref(recoveryMode) ? "Enter your backup recovery code" : "Enter the authentication code from your authenticator app")}</p></div></header>`);
          } else {
            return [
              createVNode("header", { class: "relative text-center px-8 py-6" }, [
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" }),
                createVNode("div", { class: "flex flex-col items-center" }, [
                  createVNode("div", { class: "relative mb-4" }, [
                    createVNode("div", { class: "absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur" }),
                    createVNode(unref(Shield), { class: "w-12 h-12 text-blue-400 relative" })
                  ]),
                  createVNode("h2", { class: "text-3xl font-bold text-white" }, "Two-Factor Authentication"),
                  createVNode("p", { class: "mt-2 text-gray-400 max-w-sm" }, toDisplayString(unref(recoveryMode) ? "Enter your backup recovery code" : "Enter the authentication code from your authenticator app"), 1)
                ])
              ])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 space-y-6" data-v-5438f7f5${_scopeId}>`);
            if (!unref(recoveryMode)) {
              _push2(`<form class="space-y-6" data-v-5438f7f5${_scopeId}><div class="space-y-2" data-v-5438f7f5${_scopeId}><label for="code" class="block text-sm font-medium text-gray-300" data-v-5438f7f5${_scopeId}>Authentication Code</label><div class="relative" data-v-5438f7f5${_scopeId}><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-5438f7f5${_scopeId}>`);
              _push2(ssrRenderComponent(unref(KeyRound), { class: "h-5 w-5 text-gray-400" }, null, _parent2, _scopeId));
              _push2(`</div><input id="code"${ssrRenderAttr("value", unref(form).code)} type="text" placeholder="Enter your 6-digit code" class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300" data-v-5438f7f5${_scopeId}></div></div><button type="submit" class="group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600" data-v-5438f7f5${_scopeId}><div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" data-v-5438f7f5${_scopeId}></div>`);
              _push2(ssrRenderComponent(unref(Unlock), { class: "w-5 h-5" }, null, _parent2, _scopeId));
              _push2(`<span data-v-5438f7f5${_scopeId}>Authenticate</span></button></form>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(recoveryMode)) {
              _push2(`<form class="space-y-6" data-v-5438f7f5${_scopeId}><div class="space-y-2" data-v-5438f7f5${_scopeId}><label for="recovery-code" class="block text-sm font-medium text-gray-300" data-v-5438f7f5${_scopeId}>Recovery Code</label><div class="relative" data-v-5438f7f5${_scopeId}><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-5438f7f5${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Key), { class: "h-5 w-5 text-gray-400" }, null, _parent2, _scopeId));
              _push2(`</div><input id="recovery-code"${ssrRenderAttr("value", unref(form).code)} type="text" placeholder="Enter your recovery code" class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300" data-v-5438f7f5${_scopeId}></div></div><button type="submit" class="group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600" data-v-5438f7f5${_scopeId}><div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" data-v-5438f7f5${_scopeId}></div>`);
              _push2(ssrRenderComponent(unref(KeyRound), { class: "w-5 h-5" }, null, _parent2, _scopeId));
              _push2(`<span data-v-5438f7f5${_scopeId}>Recover Access</span></button></form>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="p-4 bg-dark-400/30 rounded-lg" data-v-5438f7f5${_scopeId}><div class="flex items-start gap-3" data-v-5438f7f5${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Info), { class: "w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" }, null, _parent2, _scopeId));
            _push2(`<p class="text-sm text-gray-400" data-v-5438f7f5${_scopeId}>${ssrInterpolate(unref(recoveryMode) ? "Recovery codes are single-use emergency codes. Make sure to generate new ones after using them." : "Use the authentication code from your authenticator app. The code refreshes every 30 seconds.")}</p></div></div><button class="w-full px-4 py-3 bg-dark-400/50 hover:bg-dark-300/50 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2" data-v-5438f7f5${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(recoveryMode) ? "ArrowLeft" : "Key"), { class: "w-4 h-4" }, null), _parent2, _scopeId);
            _push2(` ${ssrInterpolate(unref(recoveryMode) ? "Back to Authentication" : "Use Recovery Code")}</button></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 space-y-6" }, [
                !unref(recoveryMode) ? (openBlock(), createBlock("form", {
                  key: 0,
                  onSubmit: withModifiers(submitForm, ["prevent"]),
                  class: "space-y-6"
                }, [
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode("label", {
                      for: "code",
                      class: "block text-sm font-medium text-gray-300"
                    }, "Authentication Code"),
                    createVNode("div", { class: "relative" }, [
                      createVNode("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
                        createVNode(unref(KeyRound), { class: "h-5 w-5 text-gray-400" })
                      ]),
                      withDirectives(createVNode("input", {
                        id: "code",
                        "onUpdate:modelValue": ($event) => unref(form).code = $event,
                        type: "text",
                        placeholder: "Enter your 6-digit code",
                        class: "w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).code]
                      ])
                    ])
                  ]),
                  createVNode("button", {
                    type: "submit",
                    class: "group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600"
                  }, [
                    createVNode("div", { class: "absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" }),
                    createVNode(unref(Unlock), { class: "w-5 h-5" }),
                    createVNode("span", null, "Authenticate")
                  ])
                ], 32)) : createCommentVNode("", true),
                unref(recoveryMode) ? (openBlock(), createBlock("form", {
                  key: 1,
                  onSubmit: withModifiers(submitFormRecovery, ["prevent"]),
                  class: "space-y-6"
                }, [
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode("label", {
                      for: "recovery-code",
                      class: "block text-sm font-medium text-gray-300"
                    }, "Recovery Code"),
                    createVNode("div", { class: "relative" }, [
                      createVNode("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
                        createVNode(unref(Key), { class: "h-5 w-5 text-gray-400" })
                      ]),
                      withDirectives(createVNode("input", {
                        id: "recovery-code",
                        "onUpdate:modelValue": ($event) => unref(form).code = $event,
                        type: "text",
                        placeholder: "Enter your recovery code",
                        class: "w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).code]
                      ])
                    ])
                  ]),
                  createVNode("button", {
                    type: "submit",
                    class: "group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600"
                  }, [
                    createVNode("div", { class: "absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" }),
                    createVNode(unref(KeyRound), { class: "w-5 h-5" }),
                    createVNode("span", null, "Recover Access")
                  ])
                ], 32)) : createCommentVNode("", true),
                createVNode("div", { class: "p-4 bg-dark-400/30 rounded-lg" }, [
                  createVNode("div", { class: "flex items-start gap-3" }, [
                    createVNode(unref(Info), { class: "w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" }),
                    createVNode("p", { class: "text-sm text-gray-400" }, toDisplayString(unref(recoveryMode) ? "Recovery codes are single-use emergency codes. Make sure to generate new ones after using them." : "Use the authentication code from your authenticator app. The code refreshes every 30 seconds."), 1)
                  ])
                ]),
                createVNode("button", {
                  onClick: ($event) => enableRecoveryMode(!unref(recoveryMode)),
                  class: "w-full px-4 py-3 bg-dark-400/50 hover:bg-dark-300/50 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(recoveryMode) ? "ArrowLeft" : "Key"), { class: "w-4 h-4" })),
                  createTextVNode(" " + toDisplayString(unref(recoveryMode) ? "Back to Authentication" : "Use Recovery Code"), 1)
                ], 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/Auth/FloatPages/codeWall.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const codeWall = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-5438f7f5"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AuthComponent",
  __ssrInlineRender: true,
  props: {
    showLogin: {
      type: Boolean,
      default: false
    },
    showRegister: {
      type: Boolean,
      default: false
    },
    showCodeWall: {
      type: Boolean,
      default: false
    }
  },
  emits: ["closeModal", "isLoading"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    let loginModalisOpen = ref(false);
    const closeLoginModal = () => {
      loginModalisOpen.value = false;
      emit("closeModal");
    };
    const register = () => {
      loginModalisOpen.value = false;
      registerModalisOpen.value = true;
    };
    const forgotPassword = () => {
      loginModalisOpen.value = false;
      forgetPasswordModalisOpen.value = true;
    };
    let registerModalisOpen = ref(false);
    const closeRegisterModal = () => {
      registerModalisOpen.value = false;
      emit("closeModal");
    };
    const alreadyHaveAccount = () => {
      registerModalisOpen.value = false;
      loginModalisOpen.value = true;
    };
    let forgetPasswordModalisOpen = ref(false);
    const closeForgetPasswordModal = () => {
      forgetPasswordModalisOpen.value = false;
      emit("closeModal");
    };
    let codeWallModal = ref(false);
    const closecodeWall = () => {
      codeWallModal.value = false;
      emit("closeModal");
    };
    const isLoading = (isLoading2) => {
      emit("isLoading", isLoading2);
    };
    const props = __props;
    watch(() => props.showLogin, (value) => {
      if (value) {
        loginModalisOpen.value = value;
      }
    });
    watch(() => props.showRegister, (value) => {
      if (value) {
        registerModalisOpen.value = value;
      }
    });
    watch(() => props.showCodeWall, (value) => {
      if (value) {
        codeWallModal.value = value;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(loginModal, {
        isOpen: unref(loginModalisOpen),
        onCloseModal: closeLoginModal,
        onRegister: register,
        onForgotPassword: forgotPassword,
        onIsLoading: isLoading
      }, null, _parent));
      _push(ssrRenderComponent(registerModal, {
        isOpen: unref(registerModalisOpen),
        onCloseModal: closeRegisterModal,
        onAlreadyHaveAccount: alreadyHaveAccount,
        onIsLoading: isLoading
      }, null, _parent));
      _push(ssrRenderComponent(forgetPassword, {
        isOpen: unref(forgetPasswordModalisOpen),
        onCloseModal: closeForgetPasswordModal,
        onIsLoading: isLoading
      }, null, _parent));
      _push(ssrRenderComponent(codeWall, {
        isOpen: unref(codeWallModal),
        onCloseModal: closecodeWall,
        onIsLoading: isLoading
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/Auth/AuthComponent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "subscribeCard",
  __ssrInlineRender: true,
  props: {
    plan: {
      type: Object,
      required: true
    },
    isPopular: {
      type: Boolean,
      default: false
    }
  },
  emits: ["selectPlan"],
  setup(__props, { emit: __emit }) {
    const parseFeatures = (description) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(description, "text/html");
      const items = doc.querySelectorAll("li");
      return Array.from(items).map((item) => item.textContent);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative group" }, _attrs))} data-v-f956da09><div class="${ssrRenderClass([[
        __props.isPopular ? "from-purple-500 via-blue-500 to-purple-500 animate-gradient-x" : "from-blue-500/50 to-purple-500/50"
      ], "absolute -inset-[2px] rounded-xl bg-gradient-to-r opacity-75 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur-md"])}" data-v-f956da09></div><div class="${ssrRenderClass([[
        __props.isPopular ? "bg-dark-400/90" : "bg-dark-500/90"
      ], "relative rounded-xl backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1"])}" data-v-f956da09>`);
      if (__props.isPopular) {
        _push(`<div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium shadow-lg" data-v-f956da09> MOST POPULAR </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="p-6 xl:p-8" data-v-f956da09><div class="space-y-4" data-v-f956da09><div class="flex items-center gap-3" data-v-f956da09>`);
      if (__props.isPopular) {
        _push(ssrRenderComponent(unref(Crown), { class: "w-6 h-6 text-purple-400" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<h3 class="text-2xl font-bold text-white" data-v-f956da09>${ssrInterpolate(__props.plan.name)}</h3></div><div class="p-4 rounded-lg bg-dark-300/50" data-v-f956da09><div class="flex items-baseline gap-2" data-v-f956da09><span class="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-v-f956da09>${ssrInterpolate(unref(makeMoney)(__props.plan.price))}</span><span class="text-gray-400" data-v-f956da09>${ssrInterpolate(__props.plan.auto_renew ? "/month" : "one-time")}</span></div><p class="mt-2 text-sm text-gray-400 flex items-center gap-2" data-v-f956da09>`);
      _push(ssrRenderComponent(unref(Clock), { class: "w-4 h-4" }, null, _parent));
      _push(` ${ssrInterpolate(__props.plan.auto_renew ? "Cancel anytime" : "One time payment")}</p></div></div><div class="mt-8 space-y-4" data-v-f956da09><div class="prose prose-invert max-w-none" data-v-f956da09><ul class="space-y-3" data-v-f956da09><!--[-->`);
      ssrRenderList(parseFeatures(__props.plan.description), (feature, index) => {
        _push(`<li class="flex items-start gap-3 text-gray-300" data-v-f956da09><div class="flex-shrink-0 p-1 rounded-full bg-blue-500/10" data-v-f956da09>`);
        _push(ssrRenderComponent(unref(Check), { class: "w-4 h-4 text-blue-400" }, null, _parent));
        _push(`</div><span data-v-f956da09>${ssrInterpolate(feature)}</span></li>`);
      });
      _push(`<!--]--></ul></div></div><button class="${ssrRenderClass([[
        __props.isPopular ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600" : "bg-dark-400 hover:bg-dark-300"
      ], "mt-8 w-full px-6 py-4 rounded-lg font-medium text-white transition-all duration-300 relative group/btn overflow-hidden"])}" data-v-f956da09><div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover/btn:animate-shine" data-v-f956da09></div><span class="relative z-10 flex items-center justify-center gap-2" data-v-f956da09>`);
      _push(ssrRenderComponent(unref(Rocket), { class: "w-5 h-5" }, null, _parent));
      _push(` Get Started </span></button></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/Payment/Subscription/subscribeCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SubscriptionCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f956da09"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "subscribe",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ["closeModal"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const close = () => {
      emit("closeModal", "isLoading", "login");
    };
    const login = () => {
      emit("login");
    };
    const submitForm = (plan) => {
      if (!usePage().props.isUserAuth) {
        login();
        return;
      }
      emit("isLoading", true);
      api.post(route("stripe.subscribe"), {
        plan_id: plan.id
      }).then(function(response) {
        window.location.href = response.data.session;
      }).catch(function(error) {
        console.error("Subscription error:", error);
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$h), mergeProps({
        show: __props.isOpen,
        onClose: close,
        showFooter: false,
        modalClass: "bg-dark-100 border border-gray-800/50 w-full max-w-7xl rounded-xl overflow-hidden",
        showModalBox: false
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<header class="relative text-center px-8 py-12 overflow-hidden"${_scopeId}><div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"${_scopeId}></div><div class="absolute inset-0 bg-[url(&#39;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+&#39;)] opacity-10"${_scopeId}></div><div class="relative"${_scopeId}><div class="flex justify-center mb-6"${_scopeId}><div class="relative"${_scopeId}><div class="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 opacity-25 blur-lg"${_scopeId}></div>`);
            _push2(ssrRenderComponent(unref(Crown), { class: "w-16 h-16 text-blue-400" }, null, _parent2, _scopeId));
            _push2(`</div></div><h2 class="text-4xl md:text-5xl font-bold text-white mb-4"${_scopeId}> Level Up Your Game Development Journey </h2><p class="text-xl text-gray-300 max-w-2xl mx-auto"${_scopeId}> Join thousands of developers who&#39;ve transformed their skills with premium access. Unlock everything you need to become a game development pro. </p></div></header>`);
          } else {
            return [
              createVNode("header", { class: "relative text-center px-8 py-12 overflow-hidden" }, [
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5" }),
                createVNode("div", { class: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" }),
                createVNode("div", { class: "relative" }, [
                  createVNode("div", { class: "flex justify-center mb-6" }, [
                    createVNode("div", { class: "relative" }, [
                      createVNode("div", { class: "absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 opacity-25 blur-lg" }),
                      createVNode(unref(Crown), { class: "w-16 h-16 text-blue-400" })
                    ])
                  ]),
                  createVNode("h2", { class: "text-4xl md:text-5xl font-bold text-white mb-4" }, " Level Up Your Game Development Journey "),
                  createVNode("p", { class: "text-xl text-gray-300 max-w-2xl mx-auto" }, " Join thousands of developers who've transformed their skills with premium access. Unlock everything you need to become a game development pro. ")
                ])
              ])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-8 space-y-8"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"${_scopeId}><div class="flex items-start gap-4 p-4 rounded-lg bg-dark-500/50"${_scopeId}><div class="p-2 rounded-lg bg-blue-500/10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(BookOpen), { class: "w-6 h-6 text-blue-400" }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h3 class="font-semibold text-white mb-1"${_scopeId}>All Courses</h3><p class="text-gray-400"${_scopeId}>Access our entire library of premium tutorials</p></div></div><div class="flex items-start gap-4 p-4 rounded-lg bg-dark-500/50"${_scopeId}><div class="p-2 rounded-lg bg-purple-500/10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Download), { class: "w-6 h-6 text-purple-400" }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h3 class="font-semibold text-white mb-1"${_scopeId}>Source Files</h3><p class="text-gray-400"${_scopeId}>Download project files and resources</p></div></div><div class="flex items-start gap-4 p-4 rounded-lg bg-dark-500/50"${_scopeId}><div class="p-2 rounded-lg bg-green-500/10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(MessageCircle), { class: "w-6 h-6 text-green-400" }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h3 class="font-semibold text-white mb-1"${_scopeId}>Community</h3><p class="text-gray-400"${_scopeId}>Join our exclusive developer community</p></div></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"${_scopeId}><!--[-->`);
            ssrRenderList(unref(usePage)().props.subscriptionsProducts.data, (item, index) => {
              _push2(ssrRenderComponent(SubscriptionCard, {
                key: index,
                plan: item,
                "is-popular": index === 1,
                onSelectPlan: submitForm
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="mt-12 text-center space-y-6"${_scopeId}><div class="flex items-center justify-center gap-8 text-gray-400"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ShieldCheck), { class: "w-5 h-5 text-blue-400" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Secure Payment</span></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Clock), { class: "w-5 h-5 text-purple-400" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Instant Access</span></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Repeat), { class: "w-5 h-5 text-green-400" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Cancel Anytime</span></div></div><div class="text-sm text-gray-400"${_scopeId}><p class="flex items-center justify-center gap-2"${_scopeId}> By subscribing, you agree to our <a href="/terms-of-service" class="text-blue-400 hover:text-blue-300 underline transition-colors duration-200 inline-flex items-center gap-1" target="_blank"${_scopeId}> Terms of Service `);
            _push2(ssrRenderComponent(unref(ExternalLink), { class: "w-3 h-3" }, null, _parent2, _scopeId));
            _push2(`</a> and <a href="/privacy-policy" class="text-blue-400 hover:text-blue-300 underline transition-colors duration-200 inline-flex items-center gap-1" target="_blank"${_scopeId}> Privacy Policy `);
            _push2(ssrRenderComponent(unref(ExternalLink), { class: "w-3 h-3" }, null, _parent2, _scopeId));
            _push2(`</a></p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-8 space-y-8" }, [
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" }, [
                  createVNode("div", { class: "flex items-start gap-4 p-4 rounded-lg bg-dark-500/50" }, [
                    createVNode("div", { class: "p-2 rounded-lg bg-blue-500/10" }, [
                      createVNode(unref(BookOpen), { class: "w-6 h-6 text-blue-400" })
                    ]),
                    createVNode("div", null, [
                      createVNode("h3", { class: "font-semibold text-white mb-1" }, "All Courses"),
                      createVNode("p", { class: "text-gray-400" }, "Access our entire library of premium tutorials")
                    ])
                  ]),
                  createVNode("div", { class: "flex items-start gap-4 p-4 rounded-lg bg-dark-500/50" }, [
                    createVNode("div", { class: "p-2 rounded-lg bg-purple-500/10" }, [
                      createVNode(unref(Download), { class: "w-6 h-6 text-purple-400" })
                    ]),
                    createVNode("div", null, [
                      createVNode("h3", { class: "font-semibold text-white mb-1" }, "Source Files"),
                      createVNode("p", { class: "text-gray-400" }, "Download project files and resources")
                    ])
                  ]),
                  createVNode("div", { class: "flex items-start gap-4 p-4 rounded-lg bg-dark-500/50" }, [
                    createVNode("div", { class: "p-2 rounded-lg bg-green-500/10" }, [
                      createVNode(unref(MessageCircle), { class: "w-6 h-6 text-green-400" })
                    ]),
                    createVNode("div", null, [
                      createVNode("h3", { class: "font-semibold text-white mb-1" }, "Community"),
                      createVNode("p", { class: "text-gray-400" }, "Join our exclusive developer community")
                    ])
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-6" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(usePage)().props.subscriptionsProducts.data, (item, index) => {
                    return openBlock(), createBlock(SubscriptionCard, {
                      key: index,
                      plan: item,
                      "is-popular": index === 1,
                      onSelectPlan: submitForm
                    }, null, 8, ["plan", "is-popular"]);
                  }), 128))
                ]),
                createVNode("div", { class: "mt-12 text-center space-y-6" }, [
                  createVNode("div", { class: "flex items-center justify-center gap-8 text-gray-400" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(unref(ShieldCheck), { class: "w-5 h-5 text-blue-400" }),
                      createVNode("span", null, "Secure Payment")
                    ]),
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(unref(Clock), { class: "w-5 h-5 text-purple-400" }),
                      createVNode("span", null, "Instant Access")
                    ]),
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(unref(Repeat), { class: "w-5 h-5 text-green-400" }),
                      createVNode("span", null, "Cancel Anytime")
                    ])
                  ]),
                  createVNode("div", { class: "text-sm text-gray-400" }, [
                    createVNode("p", { class: "flex items-center justify-center gap-2" }, [
                      createTextVNode(" By subscribing, you agree to our "),
                      createVNode("a", {
                        href: "/terms-of-service",
                        class: "text-blue-400 hover:text-blue-300 underline transition-colors duration-200 inline-flex items-center gap-1",
                        target: "_blank"
                      }, [
                        createTextVNode(" Terms of Service "),
                        createVNode(unref(ExternalLink), { class: "w-3 h-3" })
                      ]),
                      createTextVNode(" and "),
                      createVNode("a", {
                        href: "/privacy-policy",
                        class: "text-blue-400 hover:text-blue-300 underline transition-colors duration-200 inline-flex items-center gap-1",
                        target: "_blank"
                      }, [
                        createTextVNode(" Privacy Policy "),
                        createVNode(unref(ExternalLink), { class: "w-3 h-3" })
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/Payment/Subscription/subscribe.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  props: {
    showHeader: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    displayLogin: {
      type: Boolean,
      default: false
    },
    backgroundFooterClass: {
      type: String,
      default: "bg-dark-100"
    },
    headerBackground: {
      type: String,
      default: "magicpattern"
    },
    backgroundBreadcrumbClass: {
      type: String,
      default: "bg-dark-100"
    },
    displayLoading: {
      type: Boolean,
      default: false
    },
    displaySubscription: {
      type: Boolean,
      default: false
    }
  },
  emits: ["closeLogin", "closeRegister", "closeLoading", "closeSubscription"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    let showLogin = ref(false);
    const openLogin = () => {
      showLogin.value = true;
    };
    const closeLogin = () => {
      showLogin.value = false;
      showRegister.value = false;
      emit("closeLogin");
    };
    let showRegister = ref(false);
    const openRegister = () => {
      showRegister.value = true;
    };
    watch(() => props.displayLogin, (value) => {
      if (value) {
        openLogin();
      } else {
        closeLogin();
      }
    });
    let isLoading = ref(false);
    const loading = (isLoading2) => {
      if (isLoading2) {
        openLoading();
      } else {
        closeLoading();
      }
    };
    const openLoading = () => {
      isLoading.value = true;
    };
    const closeLoading = () => {
      isLoading.value = false;
    };
    watch(() => props.displayLoading, (value) => {
      if (value) {
        openLoading();
      } else {
        closeLoading();
      }
    });
    let displaySubscription = ref(false);
    watch(() => props.displaySubscription, (value) => {
      if (value) {
        displaySubscription.value = true;
      } else {
        displaySubscription.value = false;
      }
    });
    const closeSubscription = () => {
      emit("closeSubscription");
      displaySubscription.value = false;
    };
    const openSubscription = () => {
      displaySubscription.value = true;
      const element = document.getElementById("my-drawer");
      if (element) {
        element.click();
      }
    };
    onBeforeMount(() => {
      if (usePage().props.title) {
        const document2 = window.document;
        document2.title = usePage().props.title;
      }
      if (props.showHeader === false) {
        document.querySelector("html").setAttribute("data-theme", "master");
      }
    });
    let showWall = ref(false);
    const showWallOpen = () => {
      showWall.value = true;
    };
    onMounted(() => {
      const url = new URL(window.location.href);
      const showWall2 = url.searchParams.get("show_wall");
      if (showWall2) {
        showWallOpen();
      }
    });
    let isMobile = ref(false);
    onMounted(() => {
      if (window.innerWidth < 1024) {
        isMobile.value = true;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_message_provider = resolveComponent("n-message-provider");
      const _component_n_loading_bar_provider = resolveComponent("n-loading-bar-provider");
      const _component_n_notification_provider = resolveComponent("n-notification-provider");
      const _component_n_dialog_provider = resolveComponent("n-dialog-provider");
      const _component_n_config_provider = resolveComponent("n-config-provider");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["drawer", unref(isMobile) ? "drawer-end" : ""]
      }, _attrs))}><input id="my-drawer" type="checkbox" class="drawer-toggle"><div class="drawer-content">`);
      _push(ssrRenderComponent(_component_n_message_provider, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.showHeader) {
              _push2(ssrRenderComponent(_sfc_main$a, {
                onLogin: openLogin,
                headerBackground: __props.headerBackground,
                onRegister: openRegister
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.showHeader ? (openBlock(), createBlock(_sfc_main$a, {
                key: 0,
                onLogin: openLogin,
                headerBackground: __props.headerBackground,
                onRegister: openRegister
              }, null, 8, ["headerBackground"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$e, { backgroundClass: __props.backgroundBreadcrumbClass }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(AlertSystem, {
        alerts: unref(usePage)().props.activeAlerts
      }, null, _parent));
      _push(ssrRenderComponent(_component_n_loading_bar_provider, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_message_provider, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_n_notification_provider, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_n_dialog_provider, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_n_config_provider, { theme: unref(darkTheme) }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$j, null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_sfc_main$k, {
                                      seo: unref(usePage)().props.seo,
                                      inDebugMode: unref(usePage)().props.app_env === "local"
                                    }, null, _parent6, _scopeId5));
                                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push6, _parent6, _scopeId5);
                                    _push6(ssrRenderComponent(_sfc_main$f, { isLoading: unref(isLoading) }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_sfc_main$3, {
                                      showLogin: unref(showLogin),
                                      showRegister: unref(showRegister),
                                      showCodeWall: unref(showWall),
                                      onCloseModal: closeLogin,
                                      onIsLoading: loading
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_sfc_main$1, {
                                      "is-open": unref(displaySubscription),
                                      onCloseModal: closeSubscription,
                                      onIsLoading: loading,
                                      onLogin: openLogin
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$j),
                                      createVNode(_sfc_main$k, {
                                        seo: unref(usePage)().props.seo,
                                        inDebugMode: unref(usePage)().props.app_env === "local"
                                      }, null, 8, ["seo", "inDebugMode"]),
                                      renderSlot(_ctx.$slots, "default"),
                                      createVNode(_sfc_main$f, { isLoading: unref(isLoading) }, null, 8, ["isLoading"]),
                                      createVNode(_sfc_main$3, {
                                        showLogin: unref(showLogin),
                                        showRegister: unref(showRegister),
                                        showCodeWall: unref(showWall),
                                        onCloseModal: closeLogin,
                                        onIsLoading: loading
                                      }, null, 8, ["showLogin", "showRegister", "showCodeWall"]),
                                      createVNode(_sfc_main$1, {
                                        "is-open": unref(displaySubscription),
                                        onCloseModal: closeSubscription,
                                        onIsLoading: loading,
                                        onLogin: openLogin
                                      }, null, 8, ["is-open"])
                                    ];
                                  }
                                }),
                                _: 3
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_n_config_provider, { theme: unref(darkTheme) }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$j),
                                    createVNode(_sfc_main$k, {
                                      seo: unref(usePage)().props.seo,
                                      inDebugMode: unref(usePage)().props.app_env === "local"
                                    }, null, 8, ["seo", "inDebugMode"]),
                                    renderSlot(_ctx.$slots, "default"),
                                    createVNode(_sfc_main$f, { isLoading: unref(isLoading) }, null, 8, ["isLoading"]),
                                    createVNode(_sfc_main$3, {
                                      showLogin: unref(showLogin),
                                      showRegister: unref(showRegister),
                                      showCodeWall: unref(showWall),
                                      onCloseModal: closeLogin,
                                      onIsLoading: loading
                                    }, null, 8, ["showLogin", "showRegister", "showCodeWall"]),
                                    createVNode(_sfc_main$1, {
                                      "is-open": unref(displaySubscription),
                                      onCloseModal: closeSubscription,
                                      onIsLoading: loading,
                                      onLogin: openLogin
                                    }, null, 8, ["is-open"])
                                  ]),
                                  _: 3
                                }, 8, ["theme"])
                              ];
                            }
                          }),
                          _: 3
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_n_dialog_provider, null, {
                            default: withCtx(() => [
                              createVNode(_component_n_config_provider, { theme: unref(darkTheme) }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$j),
                                  createVNode(_sfc_main$k, {
                                    seo: unref(usePage)().props.seo,
                                    inDebugMode: unref(usePage)().props.app_env === "local"
                                  }, null, 8, ["seo", "inDebugMode"]),
                                  renderSlot(_ctx.$slots, "default"),
                                  createVNode(_sfc_main$f, { isLoading: unref(isLoading) }, null, 8, ["isLoading"]),
                                  createVNode(_sfc_main$3, {
                                    showLogin: unref(showLogin),
                                    showRegister: unref(showRegister),
                                    showCodeWall: unref(showWall),
                                    onCloseModal: closeLogin,
                                    onIsLoading: loading
                                  }, null, 8, ["showLogin", "showRegister", "showCodeWall"]),
                                  createVNode(_sfc_main$1, {
                                    "is-open": unref(displaySubscription),
                                    onCloseModal: closeSubscription,
                                    onIsLoading: loading,
                                    onLogin: openLogin
                                  }, null, 8, ["is-open"])
                                ]),
                                _: 3
                              }, 8, ["theme"])
                            ]),
                            _: 3
                          })
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_n_notification_provider, null, {
                      default: withCtx(() => [
                        createVNode(_component_n_dialog_provider, null, {
                          default: withCtx(() => [
                            createVNode(_component_n_config_provider, { theme: unref(darkTheme) }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$j),
                                createVNode(_sfc_main$k, {
                                  seo: unref(usePage)().props.seo,
                                  inDebugMode: unref(usePage)().props.app_env === "local"
                                }, null, 8, ["seo", "inDebugMode"]),
                                renderSlot(_ctx.$slots, "default"),
                                createVNode(_sfc_main$f, { isLoading: unref(isLoading) }, null, 8, ["isLoading"]),
                                createVNode(_sfc_main$3, {
                                  showLogin: unref(showLogin),
                                  showRegister: unref(showRegister),
                                  showCodeWall: unref(showWall),
                                  onCloseModal: closeLogin,
                                  onIsLoading: loading
                                }, null, 8, ["showLogin", "showRegister", "showCodeWall"]),
                                createVNode(_sfc_main$1, {
                                  "is-open": unref(displaySubscription),
                                  onCloseModal: closeSubscription,
                                  onIsLoading: loading,
                                  onLogin: openLogin
                                }, null, 8, ["is-open"])
                              ]),
                              _: 3
                            }, 8, ["theme"])
                          ]),
                          _: 3
                        })
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_n_message_provider, null, {
                default: withCtx(() => [
                  createVNode(_component_n_notification_provider, null, {
                    default: withCtx(() => [
                      createVNode(_component_n_dialog_provider, null, {
                        default: withCtx(() => [
                          createVNode(_component_n_config_provider, { theme: unref(darkTheme) }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$j),
                              createVNode(_sfc_main$k, {
                                seo: unref(usePage)().props.seo,
                                inDebugMode: unref(usePage)().props.app_env === "local"
                              }, null, 8, ["seo", "inDebugMode"]),
                              renderSlot(_ctx.$slots, "default"),
                              createVNode(_sfc_main$f, { isLoading: unref(isLoading) }, null, 8, ["isLoading"]),
                              createVNode(_sfc_main$3, {
                                showLogin: unref(showLogin),
                                showRegister: unref(showRegister),
                                showCodeWall: unref(showWall),
                                onCloseModal: closeLogin,
                                onIsLoading: loading
                              }, null, 8, ["showLogin", "showRegister", "showCodeWall"]),
                              createVNode(_sfc_main$1, {
                                "is-open": unref(displaySubscription),
                                onCloseModal: closeSubscription,
                                onIsLoading: loading,
                                onLogin: openLogin
                              }, null, 8, ["is-open"])
                            ]),
                            _: 3
                          }, 8, ["theme"])
                        ]),
                        _: 3
                      })
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
      if (__props.showFooter) {
        _push(ssrRenderComponent(_sfc_main$9, { backgroundClass: __props.backgroundFooterClass }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="drawer-side z-50"><label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>`);
      _push(ssrRenderComponent(_sfc_main$8, { onPricing: openSubscription }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Layout/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  SubscriptionCard as S,
  _sfc_main as _
};
