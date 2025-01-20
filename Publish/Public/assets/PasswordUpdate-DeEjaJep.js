import { ref, onMounted, unref, isRef, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { _ as _sfc_main$1, I as InputField, a as _sfc_main$2 } from "./Input-BXi_X4mZ.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@headlessui/vue";
import "dompurify";
import "marked";
import "turndown";
import "lucide-vue-next";
import "date-fns";
const _sfc_main = {
  __name: "PasswordUpdate",
  __ssrInlineRender: true,
  props: {
    adminInfo: {
      type: Object,
      default: {}
    },
    autenticatorInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    let password = ref("");
    let password_confirmation = ref("");
    let code = ref("");
    const props = __props;
    let adminInformation = ref([]);
    onMounted(() => {
      adminInformation.value = props.adminInfo;
    });
    const submitForm = () => {
      const form = {
        password: password.value,
        password_confirmation: password_confirmation.value,
        code: code.value
      };
      router.patch(route("admin.update-password", adminInformation.value.id), form);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="px-5 py-7"><form>`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : password = $event,
        label: "Password",
        name: "password",
        id: "password",
        placeholder: "type your password"
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        modelValue: unref(password_confirmation),
        "onUpdate:modelValue": ($event) => isRef(password_confirmation) ? password_confirmation.value = $event : password_confirmation = $event,
        label: "Password Confirm",
        name: "password_confirmation",
        id: "password_confirmation",
        placeholder: "type your Password Confirmation"
      }, null, _parent));
      if (props.autenticatorInfo.is_enable) {
        _push(ssrRenderComponent(unref(InputField), {
          modelValue: unref(code),
          "onUpdate:modelValue": ($event) => isRef(code) ? code.value = $event : code = $event,
          label: "Two Factor Autenticator Code",
          type: "text",
          placeholder: "type your code"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/BackEnd/Admin/Components/PasswordUpdate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
