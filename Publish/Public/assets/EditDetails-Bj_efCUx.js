import { ref, onMounted, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { I as InputField, c as _sfc_main$1, a as _sfc_main$2 } from "./Input-BXi_X4mZ.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@headlessui/vue";
import "dompurify";
import "marked";
import "turndown";
import "lucide-vue-next";
import "date-fns";
const _sfc_main = {
  __name: "EditDetails",
  __ssrInlineRender: true,
  props: {
    adminInfo: {
      type: Object,
      default: {}
    },
    roles: {
      type: Object,
      default: () => ({}),
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    let adminInformation = ref([]);
    onMounted(() => {
      adminInformation.value = props.adminInfo;
    });
    const submitForm = () => {
      const form = {
        first_name: adminInformation.value.first_name,
        last_name: adminInformation.value.last_name,
        email: adminInformation.value.email,
        role: adminInformation.value.role.id
      };
      router.patch(route("admin.update", adminInformation.value.id), form);
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="px-5 py-7"><div class="grid"><div class="avatar justify-center"><div class="mb-8 rounded-full w-24 h-24"><img${ssrRenderAttr("src", unref(adminInformation).avatar)}></div></div></div><form>`);
      _push(ssrRenderComponent(unref(InputField), {
        modelValue: unref(adminInformation).first_name,
        "onUpdate:modelValue": ($event) => unref(adminInformation).first_name = $event,
        label: "First Name",
        type: "text",
        placeholder: "type your first name"
      }, null, _parent));
      _push(ssrRenderComponent(unref(InputField), {
        modelValue: unref(adminInformation).last_name,
        "onUpdate:modelValue": ($event) => unref(adminInformation).last_name = $event,
        label: "Last Name",
        type: "text",
        placeholder: "type your last name"
      }, null, _parent));
      _push(ssrRenderComponent(unref(InputField), {
        modelValue: unref(adminInformation).email,
        "onUpdate:modelValue": ($event) => unref(adminInformation).email = $event,
        label: "Email",
        type: "email",
        placeholder: "type your email"
      }, null, _parent));
      if ((_a = unref(adminInformation).role) == null ? void 0 : _a.id) {
        _push(ssrRenderComponent(unref(_sfc_main$1), {
          label: "Role",
          options: props.roles,
          modelValue: unref(adminInformation).role.id,
          "onUpdate:modelValue": ($event) => unref(adminInformation).role.id = $event
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="form-control pt-10">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), {
        name: "update",
        onClick: submitForm
      }, null, _parent));
      _push(`</div></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/BackEnd/Admin/Components/EditDetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
