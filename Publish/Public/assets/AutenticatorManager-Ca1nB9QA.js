import { ref, onMounted, unref, isRef, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { I as InputField, a as _sfc_main$1 } from "./Input-BXi_X4mZ.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@headlessui/vue";
import "dompurify";
import "marked";
import "turndown";
import "lucide-vue-next";
import "date-fns";
const _sfc_main = {
  __name: "AutenticatorManager",
  __ssrInlineRender: true,
  props: {
    adminInfo: {
      type: Object,
      default: () => ({})
    },
    autenticator: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    let adminInformation = ref([]);
    onMounted(() => {
      adminInformation.value = props.adminInfo;
    });
    let code = ref("");
    const submitForm = () => {
      const form = {
        code: code.value
      };
      router.post(route("admin.2fa.enable"), form);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="px-5 py-7">`);
      if (props.autenticator.is_enable === false) {
        _push(`<div class="card shadow-lg compact side bg-base-100"><div class="flex-row items-center space-x-4 card-body"><div><div class="w-full shadow border-primary border"><div>${props.autenticator.codeinfo.qr_code ?? ""}</div></div></div><div class="w-full"><h2 class="card-title"> Scan the qr code and enter the code to activate your two factor authentication. </h2><p class="text-base-content text-opacity-40"> Case you can,t use the qr code, you can enter the code manually. <strong>${ssrInterpolate(props.autenticator.codeinfo.secret)}</strong></p><div>`);
        _push(ssrRenderComponent(unref(InputField), {
          modelValue: unref(code),
          "onUpdate:modelValue": ($event) => isRef(code) ? code.value = $event : code = $event,
          label: "Code",
          type: "text",
          placeholder: "type your code"
        }, null, _parent));
        _push(`<div class="form-control pt-10">`);
        _push(ssrRenderComponent(unref(_sfc_main$1), {
          name: "activate",
          onClick: submitForm
        }, null, _parent));
        _push(`</div></div></div></div></div>`);
      } else {
        _push(`<div><div class="card col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-100"><div class="card-body"><h2 class="my-4 text-4xl font-bold card-title"> Two Factor Autenticator Backup Codes <div class="flex items-center justify-end gap-3"><button class="btn btn-primary"> Download Csv </button><label for="my-modal-2" class="btn btn-primary modal-button">Remove Autenticator</label><input type="checkbox" id="my-modal-2" class="modal-toggle"><div class="modal"><div class="modal-box">`);
        _push(ssrRenderComponent(unref(InputField), {
          modelValue: unref(code),
          "onUpdate:modelValue": ($event) => isRef(code) ? code.value = $event : code = $event,
          label: "Two Factor Autenticator Code",
          type: "text",
          placeholder: "type your code"
        }, null, _parent));
        _push(`<div class="modal-action"><label for="my-modal-2" class="btn btn-primary">Remove</label><label for="my-modal-2" class="btn">Close</label></div></div></div></div></h2></div></div></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/BackEnd/Admin/Components/AutenticatorManager.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
