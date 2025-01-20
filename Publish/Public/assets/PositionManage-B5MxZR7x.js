import { defineComponent, computed, mergeProps, createVNode, resolveDynamicComponent, useSSRContext, withCtx, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderVNode, ssrInterpolate, ssrRenderAttr, ssrRenderSlot, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./App-DeZIQ0nQ.js";
import axios from "axios";
import Sortable from "sortablejs/modular/sortable.complete.esm.js";
import "naive-ui";
import "./FlashMessage-C9hwciIU.js";
import "lucide-vue-next";
import "lodash/debounce.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    // Menu item name
    itemId: {
      type: Number,
      default: 0
    },
    // Menu item name
    itemName: {
      type: String,
      default: "Menu item name"
    },
    // Sub title just for display
    subTitle: {
      type: String,
      default: null
    },
    // The icon name
    icon: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const DynamicIcon = computed(() => {
      if (props.icon) {
        return icons[props.icon];
      }
      return null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "card bg-base-300 border border-gray-300 shadow-xl",
        "data-itemid": props.itemId
      }, _attrs))}><div class="card-body"><h2 class="card-title">`);
      if (DynamicIcon.value) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(DynamicIcon.value), null, null), _parent);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(props.itemName)}</h2>`);
      if (props.subTitle) {
        _push(`<p>${ssrInterpolate(props.subTitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p>Item id:${ssrInterpolate(props.itemId)}</p><div id="menu-item" class="grid w-full grid-cols-1 gap-4 p-7"${ssrRenderAttr("data-itemid", props.itemId)}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="card-actions justify-end"><button class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path></svg> Move </button></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Components/TreeItem/Item.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "PositionManage",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    navigation: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    setTimeout(() => {
      const el = document.querySelectorAll("#menu-item");
      for (const [key, value] of Object.entries(el)) {
        Sortable.create(value, {
          group: {
            name: "shared",
            pull: true,
            put: false
            // If true, items can be put in the list.
          },
          // sort: '{{ $sort ?? false }}',
          sort: true,
          ghostClass: "bg-primary",
          // Class name for the drop placeholder
          chosenClass: "on-selected",
          // Class name for the chosen item
          dragClass: "bg-primary",
          // Class name for the dragging item
          animation: 150,
          fallbackOnBody: true,
          swapThreshold: 0.65,
          // Called when dragging element changes position
          onChange: function(evt) {
          },
          // Element dragging ended
          onEnd: function(evt) {
            var itemEl = evt.item;
            evt.to;
            evt.from;
            evt.oldIndex;
            evt.newIndex;
            evt.oldDraggableIndex;
            evt.newDraggableIndex;
            evt.clone;
            evt.pullMode;
            const parentId = evt.to.dataset.itemid;
            const itemId = itemEl.dataset.itemid;
            const sortOrder = evt.newIndex + 1;
            axios.put(route("admin.api.navigation.update", itemId), {
              parent_id: parentId ?? null,
              item_id: itemId ?? null,
              sort_order: sortOrder ?? null
            }).then((response) => {
              console.log(response);
            });
            console.log("Parent id:" + parentId);
            console.log("Current item id:" + itemId);
            console.log("Sort Order:" + sortOrder);
          }
        });
      }
    }, 500);
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-base-100 text-base-content rounded-box col-span-3 row-span-4 mx-2 grid w-72 flex-shrink-0 shadow-xl xl:mx-0 xl:w-auto xl:place-self-stretch svelte-1n6ue57"${_scopeId}><div class="grid w-full grid-cols-1 gap-4 p-4" id="menu-item"${_scopeId}><!--[-->`);
            ssrRenderList(props.navigation.data, (item, index) => {
              _push2(ssrRenderComponent(_sfc_main$1, {
                key: index,
                icon: item.icon,
                itemName: item.menu_label,
                itemId: item.id
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-base-100 text-base-content rounded-box col-span-3 row-span-4 mx-2 grid w-72 flex-shrink-0 shadow-xl xl:mx-0 xl:w-auto xl:place-self-stretch svelte-1n6ue57" }, [
                createVNode("div", {
                  class: "grid w-full grid-cols-1 gap-4 p-4",
                  id: "menu-item"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(props.navigation.data, (item, index) => {
                    return openBlock(), createBlock(_sfc_main$1, {
                      key: index,
                      icon: item.icon,
                      itemName: item.menu_label,
                      itemId: item.id
                    }, null, 8, ["icon", "itemName", "itemId"]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/BackEnd/Navigation/PositionManage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
