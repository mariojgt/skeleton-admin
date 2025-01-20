import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createTextVNode, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { BookOpen, Clock, ShoppingBag, Calendar, Package } from "lucide-vue-next";
import { m as makeMoney } from "./Money-B84zS3T2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PaidItemsList",
  __ssrInlineRender: true,
  props: {
    paidItems: {}
  },
  setup(__props) {
    const props = __props;
    const currentFilter = ref("all");
    const filters = [
      { label: "All Items", value: "all" },
      { label: "Courses", value: "Course" },
      { label: "Products", value: "Product" }
    ];
    const filteredItems = computed(() => {
      if (currentFilter.value === "all") return props.paidItems.data;
      return props.paidItems.data.filter(
        (item) => getItemType(item.item_type) === currentFilter.value
      );
    });
    const getItemType = (itemType) => {
      if (itemType.includes("Product")) return "Product";
      if (itemType.includes("Course")) return "Course";
      return "Other";
    };
    const getItemRoute = (item) => {
      const type = getItemType(item.item_type);
      return type === "Product" ? route("store.view", { slug: item.item.data.slug }) : route("course.view", { slug: item.item.data.slug });
    };
    const getItemImage = (item) => {
      var _a, _b, _c, _d;
      const type = getItemType(item.item_type);
      const media = item.item.data.media;
      if (!(media == null ? void 0 : media.length)) return null;
      if (type === "Product") {
        return (_b = (_a = media[0]) == null ? void 0 : _a.url) == null ? void 0 : _b.default;
      } else if (type === "Course") {
        return ((_d = (_c = media[0]) == null ? void 0 : _c.url) == null ? void 0 : _d.default) || item.item.data.thumbnail;
      }
      return null;
    };
    const getItemDetails = (item) => {
      const type = getItemType(item.item_type);
      if (type === "Product") {
        return {
          name: item.item.data.name,
          price: item.item.data.price,
          type: item.item.data.type,
          isPurchased: item.item.data.is_purchase
        };
      }
      return {
        name: item.item.data.title,
        price: item.item.data.course_price,
        type: item.item.data.difficulty_level,
        isPurchased: true,
        lessons: item.item.data.lessons,
        courseLength: item.item.data.course_length
      };
    };
    const getItemBadges = (item) => {
      const badges = [];
      const type = getItemType(item.item_type);
      badges.push({ type, text: type });
      if (type === "Course") {
        badges.push({
          type: getItemDetails(item).type,
          text: getItemDetails(item).type
        });
      }
      badges.push({
        type: item.order.status === "Completed" ? "completed" : "pending",
        text: item.order.status
      });
      return badges;
    };
    const getBadgeStyle = (type) => {
      const styles = {
        "Product": "bg-blue-500/10 text-blue-500",
        "Course": "bg-purple-500/10 text-purple-500",
        "beginner": "bg-green-500/10 text-green-500",
        "intermediate": "bg-yellow-500/10 text-yellow-500",
        "advanced": "bg-red-500/10 text-red-500",
        "completed": "bg-green-500/10 text-green-500",
        "pending": "bg-blue-500/10 text-blue-500"
      };
      return styles[type.toLowerCase()] || "bg-gray-500/10 text-gray-500";
    };
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"><h2 class="text-2xl font-bold text-white">My Purchases</h2><div class="flex gap-2 p-1 bg-dark-300 rounded-lg"><!--[-->`);
      ssrRenderList(filters, (filter) => {
        _push(`<button class="${ssrRenderClass([
          "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
          currentFilter.value === filter.value ? "bg-blue-500 text-white shadow-lg" : "text-gray-400 hover:text-white"
        ])}">${ssrInterpolate(filter.label)}</button>`);
      });
      _push(`<!--]--></div></div><div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(filteredItems.value, (item) => {
        _push(`<div class="group bg-dark-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">`);
        _push(ssrRenderComponent(unref(Link), {
          href: getItemRoute(item),
          class: "block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative aspect-video bg-dark-300"${_scopeId}>`);
              if (getItemImage(item)) {
                _push2(`<img${ssrRenderAttr("src", getItemImage(item))}${ssrRenderAttr("alt", getItemDetails(item).name)} class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"${_scopeId}>`);
              } else {
                _push2(`<div class="w-full h-full flex items-center justify-center"${_scopeId}><span class="text-4xl opacity-50"${_scopeId}>${ssrInterpolate(getItemType(item.item_type) === "Product" ? "📚" : "🎮")}</span></div>`);
              }
              _push2(`<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"${_scopeId}><div class="absolute bottom-0 left-0 right-0 p-4"${_scopeId}><span class="text-white text-sm font-medium"${_scopeId}> View Details </span></div></div>`);
              if (getItemType(item.item_type) === "Course") {
                _push2(`<div class="absolute top-4 left-4 flex gap-2"${_scopeId}><span class="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-white text-xs flex items-center gap-1"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(BookOpen), { class: "w-3 h-3" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(getItemDetails(item).lessons)} Lessons </span><span class="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-white text-xs flex items-center gap-1"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Clock), { class: "w-3 h-3" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(getItemDetails(item).courseLength)}</span></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="p-4"${_scopeId}><div class="flex flex-wrap gap-2 mb-3"${_scopeId}><!--[-->`);
              ssrRenderList(getItemBadges(item), (badge) => {
                _push2(`<span class="${ssrRenderClass([
                  "px-2 py-1 rounded-full text-xs font-medium",
                  getBadgeStyle(badge.type)
                ])}"${_scopeId}>${ssrInterpolate(badge.text)}</span>`);
              });
              _push2(`<!--]--></div><div class="space-y-3"${_scopeId}><h3 class="text-white font-medium line-clamp-2 group-hover:text-blue-400 transition-colors"${_scopeId}>${ssrInterpolate(getItemDetails(item).name)}</h3><div class="flex items-center justify-between text-sm"${_scopeId}><span class="text-gray-400 flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(ShoppingBag), { class: "w-4 h-4" }, null, _parent2, _scopeId));
              _push2(` Order #${ssrInterpolate(item.order_id)}</span><span class="text-white font-medium"${_scopeId}>${ssrInterpolate(unref(makeMoney)(item.price))}</span></div><div class="text-xs text-gray-500 flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Calendar), { class: "w-3 h-3" }, null, _parent2, _scopeId));
              _push2(` Purchased ${ssrInterpolate(formatDate(item.created_at))}</div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "relative aspect-video bg-dark-300" }, [
                  getItemImage(item) ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: getItemImage(item),
                    alt: getItemDetails(item).name,
                    class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "w-full h-full flex items-center justify-center"
                  }, [
                    createVNode("span", { class: "text-4xl opacity-50" }, toDisplayString(getItemType(item.item_type) === "Product" ? "📚" : "🎮"), 1)
                  ])),
                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }, [
                    createVNode("div", { class: "absolute bottom-0 left-0 right-0 p-4" }, [
                      createVNode("span", { class: "text-white text-sm font-medium" }, " View Details ")
                    ])
                  ]),
                  getItemType(item.item_type) === "Course" ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "absolute top-4 left-4 flex gap-2"
                  }, [
                    createVNode("span", { class: "px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-white text-xs flex items-center gap-1" }, [
                      createVNode(unref(BookOpen), { class: "w-3 h-3" }),
                      createTextVNode(" " + toDisplayString(getItemDetails(item).lessons) + " Lessons ", 1)
                    ]),
                    createVNode("span", { class: "px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-white text-xs flex items-center gap-1" }, [
                      createVNode(unref(Clock), { class: "w-3 h-3" }),
                      createTextVNode(" " + toDisplayString(getItemDetails(item).courseLength), 1)
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "p-4" }, [
                  createVNode("div", { class: "flex flex-wrap gap-2 mb-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(getItemBadges(item), (badge) => {
                      return openBlock(), createBlock("span", {
                        key: badge.text,
                        class: [
                          "px-2 py-1 rounded-full text-xs font-medium",
                          getBadgeStyle(badge.type)
                        ]
                      }, toDisplayString(badge.text), 3);
                    }), 128))
                  ]),
                  createVNode("div", { class: "space-y-3" }, [
                    createVNode("h3", { class: "text-white font-medium line-clamp-2 group-hover:text-blue-400 transition-colors" }, toDisplayString(getItemDetails(item).name), 1),
                    createVNode("div", { class: "flex items-center justify-between text-sm" }, [
                      createVNode("span", { class: "text-gray-400 flex items-center gap-1" }, [
                        createVNode(unref(ShoppingBag), { class: "w-4 h-4" }),
                        createTextVNode(" Order #" + toDisplayString(item.order_id), 1)
                      ]),
                      createVNode("span", { class: "text-white font-medium" }, toDisplayString(unref(makeMoney)(item.price)), 1)
                    ]),
                    createVNode("div", { class: "text-xs text-gray-500 flex items-center gap-1" }, [
                      createVNode(unref(Calendar), { class: "w-3 h-3" }),
                      createTextVNode(" Purchased " + toDisplayString(formatDate(item.created_at)), 1)
                    ])
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
      if (!filteredItems.value.length) {
        _push(`<div class="text-center py-16 bg-dark-200 rounded-xl">`);
        _push(ssrRenderComponent(unref(Package), { class: "w-16 h-16 mx-auto text-gray-500 mb-4" }, null, _parent));
        _push(`<h3 class="text-white font-medium mb-2">No purchases found</h3><p class="text-gray-400 text-sm">${ssrInterpolate(currentFilter.value === "all" ? "Start your learning journey by exploring our courses and products" : `No ${currentFilter.value} items found in your purchases`)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_a = _ctx.paidItems.links) == null ? void 0 : _a.length) > 3) {
        _push(`<div class="flex justify-center gap-2"><!--[-->`);
        ssrRenderList(_ctx.paidItems.links, (link) => {
          _push(ssrRenderComponent(unref(Link), {
            key: link.label,
            href: link.url,
            class: ["px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200", [
              link.active ? "bg-blue-500 text-white shadow-lg" : "bg-dark-200 text-gray-400 hover:bg-dark-300 hover:text-white"
            ]]
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/User/Components/PaidItemsList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
