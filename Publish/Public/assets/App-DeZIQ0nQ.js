import { unref, mergeProps, useSSRContext, defineComponent, ref, onMounted, onUnmounted, createVNode, resolveDynamicComponent, computed, withCtx, toDisplayString, createTextVNode, watch, resolveComponent, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderVNode, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { useMessage, darkTheme } from "naive-ui";
import { _ as _sfc_main$b } from "./FlashMessage-C9hwciIU.js";
import { usePage, Link } from "@inertiajs/vue3";
import axios from "axios";
import { Bell, BellOff, Trash, RefreshCw, CheckCircle, AlertCircle, AlertTriangle, Info, Loader2, Search as Search$1, FileQuestion, Folder, FileText, History, ArrowRight } from "lucide-vue-next";
import debounce from "lodash/debounce.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$a = {
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(usePage)().props.breadcrumb) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-lg breadcrumbs p-3 bg-primary text-neutral-50 mb-3 font-bold rounded-2xl" }, _attrs))}><ul><li><a>Home</a></li><!--[-->`);
        ssrRenderList(unref(usePage)().props.breadcrumb, (item, index) => {
          _push(`<li><a${ssrRenderAttr("href", item.url)}>${ssrInterpolate(item.label)}</a></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Components/Backend/App/Breadcrumb.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const api = axios.create({});
api.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
api.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    const status = error.response.status;
    if (status === 401) {
      console.log("401");
    } else if (status === 402) {
      console.log("402");
    } else if (status === 403) {
      console.log("403");
    } else if (status === 400) {
      console.log("400");
    }
    return Promise.reject(error);
  }
);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Notifications",
  __ssrInlineRender: true,
  setup(__props) {
    const notifications = ref([]);
    const notificationCount = ref(0);
    const isLoading = ref(false);
    const message = useMessage();
    let pollingInterval;
    const fetchNotifications = async () => {
      try {
        isLoading.value = true;
        const response = await api.get(route("admin.api.notifications", 5));
        notifications.value = response.data.data;
        notificationCount.value = notifications.value.length;
        if (notificationCount.value > 0) {
          message.success("You have new notifications");
        }
      } catch (error) {
        message.error("Failed to fetch notifications");
      } finally {
        isLoading.value = false;
      }
    };
    const getNotificationIcon = (type) => {
      const icons = {
        success: CheckCircle,
        error: AlertCircle,
        warning: AlertTriangle,
        info: Info,
        default: Bell
      };
      return icons[type] || icons.default;
    };
    const getIconBgClass = (type) => {
      const classes = {
        success: "bg-success/10",
        error: "bg-error/10",
        warning: "bg-warning/10",
        info: "bg-info/10",
        default: "bg-primary/10"
      };
      return classes[type] || classes.default;
    };
    const getIconClass = (type) => {
      const classes = {
        success: "text-success",
        error: "text-error",
        warning: "text-warning",
        info: "text-info",
        default: "text-primary"
      };
      return classes[type] || classes.default;
    };
    const formatTimestamp = (timestamp) => {
      const date = new Date(timestamp);
      const now = /* @__PURE__ */ new Date();
      const diff = now.getTime() - date.getTime();
      const minutes = Math.floor(diff / 6e4);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      if (minutes < 60) {
        return `${minutes} minutes ago`;
      } else if (hours < 24) {
        return `${hours} hours ago`;
      } else {
        return `${days} days ago`;
      }
    };
    onMounted(() => {
      fetchNotifications();
      pollingInterval = setInterval(fetchNotifications, 25e3);
    });
    onUnmounted(() => {
      clearInterval(pollingInterval);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dropdown dropdown-end" }, _attrs))}><button class="btn btn-ghost btn-circle relative" aria-label="Notifications">`);
      _push(ssrRenderComponent(unref(Bell), { class: "h-5 w-5" }, null, _parent));
      if (notificationCount.value > 0) {
        _push(`<div class="absolute -top-1 -right-1 flex items-center justify-center"><div class="badge badge-primary badge-sm">${ssrInterpolate(notificationCount.value)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button><div tabindex="0" class="dropdown-content z-30 shadow-lg menu bg-base-100 rounded-box w-96 overflow-hidden">`);
      if (notifications.value.length > 0) {
        _push(`<div class="max-h-[70vh] overflow-y-auto"><!--[-->`);
        ssrRenderList(notifications.value, (notification) => {
          _push(`<div class="border-b border-base-200 last:border-none"><div class="flex items-start p-4 hover:bg-base-200 transition-colors duration-200"><div class="flex-shrink-0"><div class="${ssrRenderClass([getIconBgClass(notification.data.type), "w-10 h-10 rounded-full flex items-center justify-center"])}">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getNotificationIcon(notification.data.type)), {
            class: ["w-5 h-5", getIconClass(notification.data.type)]
          }, null), _parent);
          _push(`</div></div><div class="ml-4 flex-1"><p class="text-sm font-medium text-base-content">${ssrInterpolate(notification.data.title)}</p><p class="mt-1 text-sm text-base-content/70">${ssrInterpolate(notification.data.content)}</p><p class="mt-2 text-xs text-base-content/50">${ssrInterpolate(formatTimestamp(notification.created_at))}</p></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="p-6 text-center text-base-content/70">`);
        _push(ssrRenderComponent(unref(BellOff), { class: "w-8 h-8 mx-auto mb-3 opacity-50" }, null, _parent));
        _push(`<p>No new notifications</p></div>`);
      }
      _push(`<div class="border-t border-base-200">`);
      if (notificationCount.value > 0) {
        _push(`<button class="flex items-center justify-center w-full gap-2 px-4 py-3 text-sm text-base-content/70 hover:bg-base-200 transition-colors duration-200">`);
        _push(ssrRenderComponent(unref(Trash), { class: "w-4 h-4" }, null, _parent));
        _push(` Clear All Notifications </button>`);
      } else {
        _push(`<button class="flex items-center justify-center w-full gap-2 px-4 py-3 text-sm text-base-content/70 hover:bg-base-200 transition-colors duration-200">`);
        _push(ssrRenderComponent(unref(RefreshCw), {
          class: ["w-4 h-4", { "animate-spin": isLoading.value }]
        }, null, _parent));
        _push(` Refresh </button>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Components/Backend/App/Notifications.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "ThemeSwich",
  __ssrInlineRender: true,
  setup(__props) {
    const avaliablesThemes = usePage().props.themes;
    let selectedTheme = ref(null);
    const loadLocalStorageTheme = async () => {
      const html = document.querySelector("html");
      html.setAttribute("data-theme", "dark");
      const theme = localStorage.getItem("theme-backend");
      html.setAttribute("data-theme", theme ?? "admin");
      selectedTheme.value = theme;
    };
    onMounted(() => {
      loadLocalStorageTheme();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        title: "Change Theme",
        class: "dropdown dropdown-end p-6"
      }, _attrs))}><div tabindex="0" class="btn gap-1 normal-case btn-primary"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg><span class="hidden md:inline">Theme</span><svg width="12px" height="12px" class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg></div><div class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16"><div class="grid grid-cols-1 gap-3 p-3" tabindex="0"><!--[-->`);
      ssrRenderList(unref(avaliablesThemes), (item, index) => {
        _push(`<div class="outline-base-content overflow-hidden rounded-lg outline outline-2 outline-offset-2"${ssrRenderAttr("data-set-theme", item)} data-act-class="outline"><div${ssrRenderAttr("data-theme", item)} class="bg-base-100 text-base-content w-full cursor-pointer font-sans"><div class="grid grid-cols-5 grid-rows-3"><div class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">`);
        if (unref(selectedTheme) == item) {
          _push(`<div class="badge badge-outline">${ssrInterpolate(item)}</div>`);
        } else {
          _push(`<div class="flex-grow text-sm font-bold">${ssrInterpolate(item)}</div>`);
        }
        _push(`<div class="flex flex-shrink-0 flex-wrap gap-1"><div class="bg-primary w-2 rounded"></div><div class="bg-secondary w-2 rounded"></div><div class="bg-accent w-2 rounded"></div><div class="bg-neutral w-2 rounded"></div></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Components/Backend/Global/ThemeSwich.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Search",
  __ssrInlineRender: true,
  props: {
    minChars: { default: 3 },
    debounceTime: { default: 300 }
  },
  setup(__props) {
    const props = __props;
    const searchQuery = ref("");
    const searchResults = ref({ status: false, data: {} });
    const isLoading = ref(false);
    const hasError = ref(false);
    const showDropdown = ref(false);
    const selectedIndex = ref(-1);
    const searchContainer = ref(null);
    const hasResults = computed(() => {
      return searchResults.value.status && Object.keys(searchResults.value.data).length > 0;
    });
    const hasNoResults = computed(() => {
      return !isLoading.value && searchQuery.value.length >= props.minChars && !hasResults.value;
    });
    computed(() => {
      if (!hasResults.value) return 0;
      return Object.values(searchResults.value.data).reduce((total, category) => {
        return total + category.search.length;
      }, 0);
    });
    const debouncedSearch = debounce(async () => {
      if (searchQuery.value.length < props.minChars) {
        searchResults.value = { status: false, data: {} };
        isLoading.value = false;
        return;
      }
      try {
        isLoading.value = true;
        hasError.value = false;
        const response = await api.get(
          route("admin.api.search", { search: searchQuery.value })
        );
        searchResults.value = response.data;
        showDropdown.value = true;
      } catch (error) {
        hasError.value = true;
        searchResults.value = { status: false, data: {} };
      } finally {
        isLoading.value = false;
      }
    }, props.debounceTime);
    const clearSearch = () => {
      searchQuery.value = "";
      searchResults.value = { status: false, data: {} };
      showDropdown.value = false;
      selectedIndex.value = -1;
    };
    const getItemIndex = (category, itemIndex) => {
      let index = 0;
      for (const [categoryName, categoryData] of Object.entries(searchResults.value.data)) {
        if (categoryName === category) {
          return index + itemIndex;
        }
        index += categoryData.search.length;
      }
      return -1;
    };
    const handleItemClick = (item) => {
      clearSearch();
    };
    const handleClickOutside = (event) => {
      if (searchContainer.value && !searchContainer.value.contains(event.target)) {
        showDropdown.value = false;
      }
    };
    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });
    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
      debouncedSearch.cancel();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1 lg:flex-none" }, _attrs))} data-v-a15989e3><div class="form-control p-6" data-v-a15989e3><div class="relative" data-v-a15989e3><div class="relative" data-v-a15989e3><input type="text"${ssrRenderAttr("value", searchQuery.value)} placeholder="Search..." class="${ssrRenderClass([{ "input-error": hasError.value }, "w-full pr-16 input input-primary input-bordered"])}" data-v-a15989e3><button class="absolute top-0 right-0 rounded-l-none btn btn-primary" data-v-a15989e3>`);
      if (isLoading.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "w-5 h-5 animate-spin" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Search$1), { class: "w-5 h-5" }, null, _parent));
      }
      _push(`</button></div><div style="${ssrRenderStyle(showDropdown.value ? null : { display: "none" })}" class="absolute z-50 w-full mt-2 bg-base-100 rounded-box shadow-lg" data-v-a15989e3>`);
      if (searchQuery.value.length < _ctx.minChars) {
        _push(`<div class="p-4 text-center text-base-content/60" data-v-a15989e3>`);
        _push(ssrRenderComponent(unref(Search$1), { class: "w-5 h-5 mx-auto mb-2" }, null, _parent));
        _push(` Type at least ${ssrInterpolate(_ctx.minChars)} characters to search </div>`);
      } else if (isLoading.value) {
        _push(`<div class="p-4 text-center" data-v-a15989e3><div class="flex items-center justify-center space-x-2" data-v-a15989e3>`);
        _push(ssrRenderComponent(unref(Loader2), { class: "w-5 h-5 animate-spin" }, null, _parent));
        _push(`<span data-v-a15989e3>Searching...</span></div></div>`);
      } else if (hasNoResults.value) {
        _push(`<div class="p-4 text-center text-base-content/60" data-v-a15989e3>`);
        _push(ssrRenderComponent(unref(FileQuestion), { class: "w-6 h-6 mx-auto mb-2" }, null, _parent));
        _push(` No results found for &quot;${ssrInterpolate(searchQuery.value)}&quot; </div>`);
      } else if (hasResults.value) {
        _push(`<div class="max-h-[400px] overflow-y-auto" data-v-a15989e3><!--[-->`);
        ssrRenderList(searchResults.value.data, (category, categoryName) => {
          _push(`<div data-v-a15989e3><div class="px-4 py-2 text-sm font-semibold bg-base-200 flex items-center space-x-2" data-v-a15989e3>`);
          _push(ssrRenderComponent(unref(Folder), { class: "w-4 h-4" }, null, _parent));
          _push(`<span data-v-a15989e3>${ssrInterpolate(categoryName)}</span></div><!--[-->`);
          ssrRenderList(category.search, (item, index) => {
            _push(`<div data-v-a15989e3>`);
            _push(ssrRenderComponent(unref(Link), {
              href: item.route,
              class: ["block px-4 py-3 hover:bg-base-200 transition-colors duration-150", { "bg-primary/10": selectedIndex.value === getItemIndex(categoryName, index) }],
              onClick: ($event) => handleItemClick()
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="flex items-center justify-between" data-v-a15989e3${_scopeId}><div class="flex items-center space-x-3 flex-1" data-v-a15989e3${_scopeId}><div class="flex-shrink-0" data-v-a15989e3${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(FileText), { class: "w-5 h-5 text-primary" }, null, _parent2, _scopeId));
                  _push2(`</div><div class="min-w-0" data-v-a15989e3${_scopeId}><div class="font-medium truncate" data-v-a15989e3${_scopeId}>${ssrInterpolate(item.result)}</div><div class="text-sm text-base-content/60 flex items-center space-x-1" data-v-a15989e3${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(History), { class: "w-3 h-3" }, null, _parent2, _scopeId));
                  _push2(`<span class="truncate" data-v-a15989e3${_scopeId}>${ssrInterpolate(item.last_route)}</span></div></div></div><div class="flex-shrink-0 ml-4" data-v-a15989e3${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4" }, null, _parent2, _scopeId));
                  _push2(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", { class: "flex items-center space-x-3 flex-1" }, [
                        createVNode("div", { class: "flex-shrink-0" }, [
                          createVNode(unref(FileText), { class: "w-5 h-5 text-primary" })
                        ]),
                        createVNode("div", { class: "min-w-0" }, [
                          createVNode("div", { class: "font-medium truncate" }, toDisplayString(item.result), 1),
                          createVNode("div", { class: "text-sm text-base-content/60 flex items-center space-x-1" }, [
                            createVNode(unref(History), { class: "w-3 h-3" }),
                            createVNode("span", { class: "truncate" }, toDisplayString(item.last_route), 1)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex-shrink-0 ml-4" }, [
                        createVNode(unref(ArrowRight), { class: "w-4 h-4" })
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Components/Backend/App/Search.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Search = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-a15989e3"]]);
const _sfc_main$6 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  props: {
    homePage: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const homeRoute = route("skeleton-admin.home");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "navbar sticky top-0 z-30 shadow-lg bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content border-b border-primary" }, _attrs))}>`);
      if (!__props.homePage) {
        _push(`<div class="flex-none"><button class="btn btn-square btn-ghost"><label for="my-drawer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex-1 hidden lg:flex">`);
      _push(ssrRenderComponent(unref(Link), { href: unref(homeRoute) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="/" aria-current="page" aria-label="Homepage" class="flex-0 btn btn-ghost px-2" data-svelte-h="svelte-pw6yxt"${_scopeId}><div class="font-title inline-flex text-lg md:text-2xl"${_scopeId}><span class="lowercase"${_scopeId}>Skeleton </span>-<span class="text-primary"${_scopeId}>Backend</span></div></a>`);
          } else {
            return [
              createVNode("a", {
                href: "/",
                "aria-current": "page",
                "aria-label": "Homepage",
                class: "flex-0 btn btn-ghost px-2",
                "data-svelte-h": "svelte-pw6yxt"
              }, [
                createVNode("div", { class: "font-title inline-flex text-lg md:text-2xl" }, [
                  createVNode("span", { class: "lowercase" }, "Skeleton "),
                  createTextVNode("-"),
                  createVNode("span", { class: "text-primary" }, "Backend")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(Search, null, null, _parent));
      _push(`<div class="flex-none">`);
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(`</div><div class="flex-none">`);
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(`</div><div class="flex-none"><div class="dropdown dropdown-end"><div tabindex="0"><div class="avatar"><div class="rounded-full w-10 h-10 m-1"><img${ssrRenderAttr("src", unref(usePage)().props.avatar)}></div></div></div><ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"><!--[-->`);
      ssrRenderList(unref(usePage)().props.navbar.data, (item, index) => {
        _push(`<li>`);
        _push(ssrRenderComponent(unref(Link), {
          href: item.route
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}>${item.icon ?? ""}</div> ${ssrInterpolate(item.menu_label)}`);
            } else {
              return [
                createVNode("div", {
                  innerHTML: item.icon
                }, null, 8, ["innerHTML"]),
                createTextVNode(" " + toDisplayString(item.menu_label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Components/Backend/App/Navbar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer bottom-0 footer-center p-4 bg-base-300 text-base-content" }, _attrs))}><div><p>Copyright © ${ssrInterpolate(unref(currentYear))} - All right reserved by ${ssrInterpolate(unref(usePage)().props.app)}</p></div></footer>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Components/Backend/App/Footer.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MenuSingle",
  __ssrInlineRender: true,
  props: {
    menuItem: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      route(props.menuItem.route);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(_attrs)}><span class="capitalize">${ssrInterpolate(props.menuItem.menu_label)}</span></li>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Components/Menu/MenuSingle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "MenuMultiple",
  __ssrInlineRender: true,
  props: {
    menuItem: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    let routeLink = route(props.menuItem.route);
    const makeRoute = (routeString) => {
      return route(routeString);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "dropdown dropdown-hover" }, _attrs))}><label tabindex="0" class="capitalize font-bold">${ssrInterpolate(props.menuItem.menu_label)}</label><ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: unref(routeLink),
        class: "capitalize font-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.menuItem.menu_label)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.menuItem.menu_label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li tabindex="0"><ul class="bg-base-100"><!--[-->`);
      ssrRenderList(props.menuItem.collection, (item, index) => {
        _push(`<li>`);
        _push(ssrRenderComponent(unref(Link), {
          href: makeRoute(item.route),
          class: "capitalize font-bold"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.menu_label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.menu_label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></li></ul></li>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Components/Menu/MenuMultiple.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MenuHandle",
  __ssrInlineRender: true,
  props: {
    menuItem: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (!props.menuItem.collection) {
        _push(ssrRenderComponent(_sfc_main$4, {
          "menu-item": props.menuItem
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_sfc_main$3, {
          "menu-item": props.menuItem
        }, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Components/Menu/MenuHandle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MenuDrawer",
  __ssrInlineRender: true,
  setup(__props) {
    const menu = usePage().props.navigation.data;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "bg-base-100 flex flex-col h-screen w-80" }, _attrs))}><div class="h-4"></div><ul class="menu menu-sm lg:menu-md px-4 py-0 flex-grow"><li></li><li class="menu-title flex flex-row gap-4"><span class="text-neutral-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-neutral-content"><path fill-rule="evenodd" d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z" clip-rule="evenodd"></path></svg></span><span>Menu</span></li><!--[-->`);
      ssrRenderList(unref(menu), (item, index) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          key: index,
          menuItem: item
        }, null, _parent));
      });
      _push(`<!--]--></ul><div class="bg-base-100 pointer-events-none sticky bottom-0 flex h-40 [mask-image:linear-gradient(transparent,#000000)]"></div></aside>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Components/Backend/App/MenuDrawer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  props: {
    homePage: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    watch(
      () => usePage().props.title,
      (v) => {
        pageTitleUpdate(v);
      }
    );
    const pageTitleUpdate = async (newTitle) => {
      document.title = newTitle;
    };
    setTimeout(() => {
      pageTitleUpdate(usePage().props.title ?? "Skeleton Admin");
    }, 500);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_message_provider = resolveComponent("n-message-provider");
      const _component_n_loading_bar_provider = resolveComponent("n-loading-bar-provider");
      const _component_n_notification_provider = resolveComponent("n-notification-provider");
      const _component_n_dialog_provider = resolveComponent("n-dialog-provider");
      const _component_n_config_provider = resolveComponent("n-config-provider");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "drawer grid min-h-screen" }, _attrs))}><input id="my-drawer" type="checkbox" class="drawer-toggle"><div class="drawer-content">`);
      _push(ssrRenderComponent(_component_n_message_provider, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, { homePage: __props.homePage }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$6, { homePage: __props.homePage }, null, 8, ["homePage"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass([__props.homePage ? "" : "h-full p-10", "bg-neutral"])}">`);
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
                                    _push6(ssrRenderComponent(_sfc_main$b, null, null, _parent6, _scopeId5));
                                    _push6(`<div${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_sfc_main$a, null, null, _parent6, _scopeId5));
                                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push6, _parent6, _scopeId5);
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode(_sfc_main$b),
                                      createVNode("div", null, [
                                        createVNode(_sfc_main$a),
                                        renderSlot(_ctx.$slots, "default")
                                      ])
                                    ];
                                  }
                                }),
                                _: 3
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_n_config_provider, { theme: unref(darkTheme) }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$b),
                                    createVNode("div", null, [
                                      createVNode(_sfc_main$a),
                                      renderSlot(_ctx.$slots, "default")
                                    ])
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
                                  createVNode(_sfc_main$b),
                                  createVNode("div", null, [
                                    createVNode(_sfc_main$a),
                                    renderSlot(_ctx.$slots, "default")
                                  ])
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
                                createVNode(_sfc_main$b),
                                createVNode("div", null, [
                                  createVNode(_sfc_main$a),
                                  renderSlot(_ctx.$slots, "default")
                                ])
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
                              createVNode(_sfc_main$b),
                              createVNode("div", null, [
                                createVNode(_sfc_main$a),
                                renderSlot(_ctx.$slots, "default")
                              ])
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
      _push(ssrRenderComponent(_sfc_main$5, { style: { "grid-row": "3" } }, null, _parent));
      _push(`</div><div class="drawer-side z-40" style="${ssrRenderStyle({ "scroll-behavior": "smooth", "scroll-padding-top": "5rem" })}"><label for="my-drawer" class="drawer-overlay"></label>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Layout/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  api as a
};
