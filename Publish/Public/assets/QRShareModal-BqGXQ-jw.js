import { ref, unref, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import { QrCode, X, Check, Copy } from "lucide-vue-next";
import VueQrcode from "@chenfengyuan/vue-qrcode";
const _sfc_main = {
  __name: "QRShareModal",
  __ssrInlineRender: true,
  props: {
    shareUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: "Share Link"
    },
    buttonText: {
      type: String,
      default: "Share"
    }
  },
  setup(__props) {
    const isOpen = ref(false);
    const copied = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><button class="flex items-center gap-2 px-4 py-2 bg-dark-600/50 rounded-full hover:bg-dark-500/50 transition-all duration-300">`);
      _push(ssrRenderComponent(unref(QrCode), { class: "w-4 h-4 text-blue-400" }, null, _parent));
      _push(`<span class="text-sm text-white/70">${ssrInterpolate(__props.buttonText)}</span></button>`);
      if (isOpen.value) {
        _push(`<div class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"><div class="bg-dark-500/90 rounded-3xl max-w-sm w-full p-8 relative transform shadow-2xl border border-purple-900/50"><button class="absolute -top-2 -right-2 w-8 h-8 bg-dark-600 rounded-full border-2 border-purple-900/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors">`);
        _push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent));
        _push(`</button><div class="text-center"><h3 class="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">${ssrInterpolate(__props.title)}</h3><div class="bg-white p-4 rounded-xl mx-auto overflow-hidden mb-6 border-2 border-purple-900/50">`);
        _push(ssrRenderComponent(unref(VueQrcode), {
          value: __props.shareUrl,
          options: {
            width: 200,
            margin: 1,
            color: {
              dark: "#000000",
              light: "#FFFFFF"
            }
          },
          tag: "img",
          class: "mx-auto"
        }, null, _parent));
        _push(`</div><div class="mb-4 px-4 py-2 bg-dark-600/30 rounded-lg"><p class="text-xs text-white/50 truncate">${ssrInterpolate(__props.shareUrl)}</p></div><button class="flex items-center justify-center gap-2 w-full px-4 py-3 bg-dark-600/50 rounded-xl hover:bg-dark-700/50 transition-all duration-300 group">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(copied.value ? unref(Check) : unref(Copy)), {
          class: ["w-4 h-4", copied.value ? "text-green-400" : "text-blue-400"]
        }, null), _parent);
        _push(`<span class="text-sm font-medium text-white/70 group-hover:text-white/90">${ssrInterpolate(copied.value ? "Copied!" : "Copy URL")}</span></button>`);
        if (copied.value) {
          _push(`<div class="mt-4 p-3 rounded-lg bg-green-500/20 border border-green-500/30"><p class="text-sm text-green-400">URL copied to clipboard!</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/User/QRShareModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
