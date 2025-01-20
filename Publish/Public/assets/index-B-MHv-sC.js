import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./App-DeZIQ0nQ.js";
import { T as Table } from "./Table-CVCewQpu.js";
import "naive-ui";
import "./FlashMessage-C9hwciIU.js";
import "axios";
import "lucide-vue-next";
import "lodash/debounce.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./Input-BXi_X4mZ.js";
import "@headlessui/vue";
import "dompurify";
import "marked";
import "turndown";
import "date-fns";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    endpoint: {
      type: String,
      default: ""
    },
    columns: {
      type: Object,
      default: () => ({})
    },
    model: {
      type: String,
      default: ""
    },
    endpointDelete: {
      type: String,
      default: ""
    },
    endpointCreate: {
      type: String,
      default: ""
    },
    endpointEdit: {
      type: String,
      default: ""
    },
    permission: {
      type: String,
      default: ""
    },
    custom_edit_route: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Table, {
              columns: props.columns,
              model: props.model,
              endpoint: props.endpoint,
              "endpoint-delete": props.endpointDelete,
              "endpoint-create": props.endpointCreate,
              "endpoint-edit": props.endpointEdit,
              "table-title": "Product Category",
              permission: props.permission,
              custom_edit_route: props.custom_edit_route
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Table, {
                columns: props.columns,
                model: props.model,
                endpoint: props.endpoint,
                "endpoint-delete": props.endpointDelete,
                "endpoint-create": props.endpointCreate,
                "endpoint-edit": props.endpointEdit,
                "table-title": "Product Category",
                permission: props.permission,
                custom_edit_route: props.custom_edit_route
              }, null, 8, ["columns", "model", "endpoint", "endpoint-delete", "endpoint-create", "endpoint-edit", "permission", "custom_edit_route"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/BackEnd/Vendor/skeleton-store/productCategory/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
