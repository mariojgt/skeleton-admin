import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { m as makeMoney } from "./Money-B84zS3T2.js";
import { Crown, Video, Download, MessageCircle, GraduationCap, ShoppingCart } from "lucide-vue-next";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "PremiumPrompt",
  __ssrInlineRender: true,
  props: {
    current_lesson: {
      type: Object,
      required: true
    },
    course: {
      type: Object,
      required: true
    },
    priceStartOff: {
      type: Number,
      required: true
    }
  },
  emits: ["subscribe", "courseCheckout"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden rounded-xl bg-dark-500/90 backdrop-blur-sm border border-gray-800/50" }, _attrs))} data-v-ff77d81e><div class="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10" data-v-ff77d81e></div><div class="absolute inset-0 bg-[url(&#39;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+&#39;)] opacity-10" data-v-ff77d81e></div><div class="relative p-8 md:p-12" data-v-ff77d81e><div class="flex flex-col lg:flex-row items-center gap-12" data-v-ff77d81e><div class="lg:w-1/3" data-v-ff77d81e><div class="relative group" data-v-ff77d81e><div class="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl opacity-25 group-hover:opacity-50 blur transition-opacity duration-500" data-v-ff77d81e></div><div class="relative" data-v-ff77d81e><img class="w-64 h-64 object-cover rounded-xl shadow-2xl transform transition-all duration-500 group-hover:scale-105" src="/vendor/Image/illustration/subscribe1.png" alt="Subscribe to access premium content" data-v-ff77d81e><div class="absolute inset-0 bg-gradient-to-t from-dark-500 via-transparent to-transparent opacity-30 rounded-xl" data-v-ff77d81e></div></div><div class="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-xl shadow-xl transform rotate-12" data-v-ff77d81e>`);
      _push(ssrRenderComponent(unref(Crown), { class: "w-6 h-6 text-white" }, null, _parent));
      _push(`</div></div></div><div class="lg:w-2/3 text-center lg:text-left space-y-6" data-v-ff77d81e><div class="space-y-2" data-v-ff77d81e><h2 class="text-3xl lg:text-4xl font-extrabold text-white" data-v-ff77d81e><span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400" data-v-ff77d81e> &quot;${ssrInterpolate(props.current_lesson.data.name)}&quot; </span></h2><p class="text-2xl font-bold text-white" data-v-ff77d81e> is for <span class="text-purple-400" data-v-ff77d81e>Premium</span> members only </p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-6" data-v-ff77d81e><div class="flex items-center gap-3 text-gray-300" data-v-ff77d81e><div class="p-2 rounded-lg bg-purple-500/10" data-v-ff77d81e>`);
      _push(ssrRenderComponent(unref(Video), { class: "w-5 h-5 text-purple-400" }, null, _parent));
      _push(`</div><span data-v-ff77d81e>Unlimited Course Access</span></div><div class="flex items-center gap-3 text-gray-300" data-v-ff77d81e><div class="p-2 rounded-lg bg-blue-500/10" data-v-ff77d81e>`);
      _push(ssrRenderComponent(unref(Download), { class: "w-5 h-5 text-blue-400" }, null, _parent));
      _push(`</div><span data-v-ff77d81e>Downloadable Resources</span></div><div class="flex items-center gap-3 text-gray-300" data-v-ff77d81e><div class="p-2 rounded-lg bg-purple-500/10" data-v-ff77d81e>`);
      _push(ssrRenderComponent(unref(MessageCircle), { class: "w-5 h-5 text-purple-400" }, null, _parent));
      _push(`</div><span data-v-ff77d81e>Community Support</span></div><div class="flex items-center gap-3 text-gray-300" data-v-ff77d81e><div class="p-2 rounded-lg bg-blue-500/10" data-v-ff77d81e>`);
      _push(ssrRenderComponent(unref(GraduationCap), { class: "w-5 h-5 text-blue-400" }, null, _parent));
      _push(`</div><span data-v-ff77d81e>Course Certificates</span></div></div><p class="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0" data-v-ff77d81e> For the price of a game skin, unlock hundreds of hours of premium game development tutorials. Join our community of creators and level up your skills today! </p><div class="flex flex-col sm:flex-row gap-4 pt-4" data-v-ff77d81e><button class="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/25" data-v-ff77d81e><div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" data-v-ff77d81e></div><div class="relative flex items-center justify-center gap-2 text-white font-bold" data-v-ff77d81e>`);
      _push(ssrRenderComponent(unref(Crown), { class: "w-5 h-5" }, null, _parent));
      _push(` Get Premium Access - ${ssrInterpolate(unref(makeMoney)(__props.priceStartOff))}/month </div></button><button class="px-8 py-4 bg-dark-400 text-white font-bold rounded-xl hover:bg-dark-300 transition-all duration-300 flex items-center justify-center gap-2" data-v-ff77d81e>`);
      _push(ssrRenderComponent(unref(ShoppingCart), { class: "w-5 h-5" }, null, _parent));
      _push(` Buy Course for ${ssrInterpolate(unref(makeMoney)(props.course.course_price))}</button></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Course/ViewComponents/PremiumPrompt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PremiumPrompt = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ff77d81e"]]);
export {
  PremiumPrompt as default
};
