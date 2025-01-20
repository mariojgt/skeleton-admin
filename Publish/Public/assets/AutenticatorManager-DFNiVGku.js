import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import "@inertiajs/vue3";
import { Shield, Key, Download, AlertTriangle } from "lucide-vue-next";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "AutenticatorManager",
  __ssrInlineRender: true,
  props: {
    userInfo: Object,
    autenticatorInfo: Object
  },
  setup(__props) {
    const props = __props;
    let code = ref("");
    let showModal = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-2xl mx-auto" }, _attrs))} data-v-520fc27f><div class="bg-dark-500/90 backdrop-blur-sm rounded-xl border border-gray-800/50 overflow-hidden" data-v-520fc27f><div class="relative p-6 text-center border-b border-gray-800/50" data-v-520fc27f><div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" data-v-520fc27f></div><div class="relative" data-v-520fc27f><div class="inline-flex items-center gap-3 mb-4" data-v-520fc27f><div class="relative" data-v-520fc27f><div class="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur" data-v-520fc27f></div>`);
      _push(ssrRenderComponent(unref(Shield), { class: "w-10 h-10 text-blue-400 relative" }, null, _parent));
      _push(`</div><h2 class="text-2xl font-bold text-white" data-v-520fc27f>Two-Factor Authentication</h2></div><p class="text-gray-400" data-v-520fc27f>${ssrInterpolate(!props.autenticatorInfo.is_enable ? "Enhance your account security with 2FA authentication" : "Manage your two-factor authentication settings and backup codes")}</p></div></div><div class="p-6" data-v-520fc27f>`);
      if (!props.autenticatorInfo.is_enable) {
        _push(`<div class="space-y-8" data-v-520fc27f><div class="flex flex-col items-center" data-v-520fc27f><div class="p-4 bg-white rounded-xl" data-v-520fc27f><div data-v-520fc27f>${props.autenticatorInfo.codeinfo.qr_code ?? ""}</div></div><div class="mt-4 text-center max-w-md" data-v-520fc27f><p class="text-gray-400 mb-2" data-v-520fc27f> Scan this QR code with your authenticator app or enter the code manually: </p><div class="bg-dark-400/50 px-4 py-2 rounded-lg font-mono text-sm text-blue-400 break-all" data-v-520fc27f>${ssrInterpolate(props.autenticatorInfo.codeinfo.secret)}</div></div></div><form class="space-y-6" data-v-520fc27f><div class="space-y-2" data-v-520fc27f><label class="block text-sm font-medium text-gray-300" data-v-520fc27f> Authentication Code </label><div class="relative" data-v-520fc27f><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-520fc27f>`);
        _push(ssrRenderComponent(unref(Key), { class: "h-5 w-5 text-gray-400" }, null, _parent));
        _push(`</div><input${ssrRenderAttr("value", unref(code))} type="text" placeholder="Enter the 6-digit code" class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300" data-v-520fc27f></div></div><button type="submit" class="group relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600" data-v-520fc27f><div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" data-v-520fc27f></div>`);
        _push(ssrRenderComponent(unref(Shield), { class: "w-5 h-5" }, null, _parent));
        _push(`<span data-v-520fc27f>Activate 2FA</span></button></form></div>`);
      } else {
        _push(`<div class="space-y-8" data-v-520fc27f><div class="space-y-4" data-v-520fc27f><div class="flex items-center justify-between" data-v-520fc27f><h3 class="text-xl font-bold text-white" data-v-520fc27f>Backup Codes</h3><div class="flex gap-2" data-v-520fc27f><button class="flex items-center gap-2 px-4 py-2 bg-dark-400/50 hover:bg-dark-300/50 text-gray-300 hover:text-white rounded-lg transition-all duration-300" data-v-520fc27f>`);
        _push(ssrRenderComponent(unref(Download), { class: "w-4 h-4" }, null, _parent));
        _push(` Download CSV </button></div></div><div class="bg-dark-400/30 rounded-lg overflow-hidden" data-v-520fc27f><div class="overflow-x-auto" data-v-520fc27f><table class="w-full text-left" data-v-520fc27f><thead class="border-b border-gray-800/50" data-v-520fc27f><tr data-v-520fc27f><th class="px-6 py-3 text-sm font-medium text-gray-400" data-v-520fc27f>Code</th><th class="px-6 py-3 text-sm font-medium text-gray-400" data-v-520fc27f>Status</th></tr></thead><tbody class="divide-y divide-gray-800/30" data-v-520fc27f><!--[-->`);
        ssrRenderList(__props.autenticatorInfo.backup_codes, (item, index) => {
          _push(`<tr class="hover:bg-dark-300/30 transition-colors duration-200" data-v-520fc27f><td class="px-6 py-4 font-mono text-gray-300" data-v-520fc27f>${ssrInterpolate(item.code)}</td><td class="px-6 py-4" data-v-520fc27f><span class="${ssrRenderClass([item.used ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400", "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"])}" data-v-520fc27f>${ssrInterpolate(item.used ? "Used" : "Available")}</span></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div></div><div class="pt-6 border-t border-gray-800/50" data-v-520fc27f><button class="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-all duration-300" data-v-520fc27f>`);
        _push(ssrRenderComponent(unref(Shield), { class: "w-4 h-4" }, null, _parent));
        _push(` Disable 2FA </button></div></div>`);
      }
      _push(`</div></div>`);
      if (unref(showModal)) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center" data-v-520fc27f><div class="absolute inset-0 bg-black/80 backdrop-blur-sm" data-v-520fc27f></div><div class="relative w-full max-w-md bg-dark-500 rounded-xl border border-gray-800/50 shadow-2xl" data-v-520fc27f><div class="p-6 space-y-6" data-v-520fc27f><div class="text-center" data-v-520fc27f>`);
        _push(ssrRenderComponent(unref(AlertTriangle), { class: "w-12 h-12 text-red-400 mx-auto mb-4" }, null, _parent));
        _push(`<h3 class="text-xl font-bold text-white mb-2" data-v-520fc27f>Disable 2FA Authentication</h3><p class="text-gray-400" data-v-520fc27f>Please enter your authentication code to confirm disabling 2FA.</p></div><div class="space-y-4" data-v-520fc27f><div class="relative" data-v-520fc27f><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-520fc27f>`);
        _push(ssrRenderComponent(unref(Key), { class: "h-5 w-5 text-gray-400" }, null, _parent));
        _push(`</div><input${ssrRenderAttr("value", unref(code))} type="text" placeholder="Enter authentication code" class="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-300" data-v-520fc27f></div><div class="flex gap-3" data-v-520fc27f><button class="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors duration-300" data-v-520fc27f> Disable 2FA </button><button class="flex-1 px-4 py-3 bg-dark-400 hover:bg-dark-300 text-gray-300 font-medium rounded-lg transition-colors duration-300" data-v-520fc27f> Cancel </button></div></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/User/Components/AutenticatorManager.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AutenticatorManager = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-520fc27f"]]);
export {
  AutenticatorManager as default
};
