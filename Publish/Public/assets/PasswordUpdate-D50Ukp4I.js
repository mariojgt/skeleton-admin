import { ref, onMounted, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderDynamicModel, ssrRenderAttr, ssrRenderVNode } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { Lock, Shield, CheckCircle, Key, EyeOff, Eye, KeyRound, ShieldCheck, Save } from "lucide-vue-next";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "PasswordUpdate",
  __ssrInlineRender: true,
  props: {
    userInfo: {
      type: Object,
      default: {}
    },
    autenticatorInfo: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["isLoading"],
  setup(__props, { emit: __emit }) {
    const form = useForm({
      password: "",
      password_confirmation: "",
      code: ""
    });
    const props = __props;
    const showPassword = ref(false);
    const showConfirmPassword = ref(false);
    let userInformation = ref([]);
    onMounted(() => {
      userInformation.value = props.userInfo;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-dark-500/90 backdrop-blur-sm rounded-xl border border-gray-800/50 overflow-hidden" }, _attrs))} data-v-13584418><div class="relative p-6 text-center border-b border-gray-800/50" data-v-13584418><div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" data-v-13584418></div><div class="relative" data-v-13584418><div class="inline-flex items-center gap-3 mb-4" data-v-13584418><div class="relative" data-v-13584418><div class="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur" data-v-13584418></div>`);
      _push(ssrRenderComponent(unref(Lock), { class: "w-10 h-10 text-blue-400 relative" }, null, _parent));
      _push(`</div><h2 class="text-2xl font-bold text-white" data-v-13584418>Update Password</h2></div><p class="text-gray-400" data-v-13584418>Ensure your account stays secure with a strong password</p></div></div><form class="p-6 space-y-6" data-v-13584418><div class="bg-dark-400/30 rounded-lg p-4" data-v-13584418><div class="flex items-start gap-3" data-v-13584418>`);
      _push(ssrRenderComponent(unref(Shield), { class: "w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<div class="space-y-2" data-v-13584418><p class="text-sm text-gray-300" data-v-13584418>Password requirements:</p><ul class="text-sm text-gray-400 space-y-1" data-v-13584418><li class="flex items-center gap-2" data-v-13584418>`);
      _push(ssrRenderComponent(unref(CheckCircle), { class: "w-4 h-4 text-green-400" }, null, _parent));
      _push(` Minimum 8 characters </li><li class="flex items-center gap-2" data-v-13584418>`);
      _push(ssrRenderComponent(unref(CheckCircle), { class: "w-4 h-4 text-green-400" }, null, _parent));
      _push(` Mix of uppercase &amp; lowercase letters </li><li class="flex items-center gap-2" data-v-13584418>`);
      _push(ssrRenderComponent(unref(CheckCircle), { class: "w-4 h-4 text-green-400" }, null, _parent));
      _push(` At least one number and symbol </li></ul></div></div></div><div class="space-y-2" data-v-13584418><label for="password" class="block text-sm font-medium text-gray-300" data-v-13584418>New Password</label><div class="relative" data-v-13584418><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-13584418>`);
      _push(ssrRenderComponent(unref(Key), { class: "w-5 h-5 text-gray-400" }, null, _parent));
      _push(`</div><input id="password"${ssrRenderDynamicModel(showPassword.value ? "text" : "password", unref(form).password, null)}${ssrRenderAttr("type", showPassword.value ? "text" : "password")} placeholder="Enter new password" class="w-full pl-10 pr-20 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300" data-v-13584418><button type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center" data-v-13584418>`);
      if (showPassword.value) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(EyeOff)), { class: "w-5 h-5 text-gray-400 hover:text-gray-300 transition-colors duration-300" }, null), _parent);
      } else {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(Eye)), { class: "w-5 h-5 text-gray-400 hover:text-gray-300 transition-colors duration-300" }, null), _parent);
      }
      _push(`</button></div></div><div class="space-y-2" data-v-13584418><label for="password_confirmation" class="block text-sm font-medium text-gray-300" data-v-13584418>Confirm Password</label><div class="relative" data-v-13584418><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-13584418>`);
      _push(ssrRenderComponent(unref(KeyRound), { class: "w-5 h-5 text-gray-400" }, null, _parent));
      _push(`</div><input id="password_confirmation"${ssrRenderDynamicModel(showConfirmPassword.value ? "text" : "password", unref(form).password_confirmation, null)}${ssrRenderAttr("type", showConfirmPassword.value ? "text" : "password")} placeholder="Confirm new password" class="w-full pl-10 pr-20 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300" data-v-13584418><button type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center" data-v-13584418>`);
      if (showConfirmPassword.value) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(EyeOff)), { class: "w-5 h-5 text-gray-400 hover:text-gray-300 transition-colors duration-300" }, null), _parent);
      } else {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(Eye)), { class: "w-5 h-5 text-gray-400 hover:text-gray-300 transition-colors duration-300" }, null), _parent);
      }
      _push(`</button></div></div>`);
      if (props.autenticatorInfo.is_enable) {
        _push(`<div class="space-y-2" data-v-13584418><label for="code" class="block text-sm font-medium text-gray-300" data-v-13584418>2FA Code</label><div class="relative" data-v-13584418><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-13584418>`);
        _push(ssrRenderComponent(unref(ShieldCheck), { class: "w-5 h-5 text-gray-400" }, null, _parent));
        _push(`</div><input id="code"${ssrRenderAttr("value", unref(form).code)} type="text" placeholder="Enter your 2FA code" class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300" data-v-13584418></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit" class="group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600" data-v-13584418><div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" data-v-13584418></div>`);
      _push(ssrRenderComponent(unref(Save), { class: "w-5 h-5" }, null, _parent));
      _push(`<span data-v-13584418>Update Password</span></button></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/User/Components/PasswordUpdate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PasswordUpdate = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-13584418"]]);
export {
  PasswordUpdate as default
};
