import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Gamepad2, ArrowRight, Code, FolderOpen } from "lucide-vue-next";
import "@inertiajs/vue3";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HeroSection02",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden py-20" }, _attrs))}><div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-800/5"></div><div class="absolute inset-0 bg-[url(&#39;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+&#39;)] opacity-10"></div><div class="relative w-10/12 mx-auto space-y-12"><div class="flex flex-col lg:flex-row items-center p-10 transform w-full bg-dark-500/90 backdrop-blur-sm rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 gap-8 border border-gray-800/50"><div class="flex items-center justify-center w-full lg:w-1/2 h-full"><div class="relative w-full h-64 lg:h-96"><iframe class="absolute inset-0 w-full h-full rounded-lg" src="https://www.youtube.com/embed/SReZMevg_Tc?si=KDaqgZBSTfGlYdss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><div class="absolute -top-6 -right-6 bg-blue-500 rounded-lg p-4 shadow-lg">`);
      _push(ssrRenderComponent(unref(Gamepad2), { class: "h-8 w-8 text-white" }, null, _parent));
      _push(`</div></div></div><div class="w-full lg:w-1/2 space-y-6"><div class="relative z-10"><h2 class="text-white text-4xl lg:text-6xl font-extrabold drop-shadow-lg"> Learn in the most <span class="text-blue-400">exciting way</span></h2></div><p class="text-lg lg:text-xl leading-8 text-neutral-100 font-bold"> Start your journey to become a game developer with our fun and high quality courses. </p><button class="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all"> Get Started `);
      _push(ssrRenderComponent(unref(ArrowRight), { class: "h-5 w-5" }, null, _parent));
      _push(`</button></div></div><div class="flex flex-col lg:flex-row-reverse items-center p-10 transform w-full bg-dark-500/90 backdrop-blur-sm rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 gap-8 border border-gray-800/50"><div class="flex items-center justify-center w-full lg:w-1/2 h-full"><div class="relative w-full h-64 lg:h-96"><iframe class="absolute inset-0 w-full h-full rounded-lg" src="https://www.youtube.com/embed/LowNBy2b3Bs?si=_7SWDVqa5EmhwzZc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><div class="absolute -bottom-6 -left-6 bg-purple-500 rounded-lg p-4 shadow-lg">`);
      _push(ssrRenderComponent(unref(Code), { class: "h-8 w-8 text-white" }, null, _parent));
      _push(`</div></div></div><div class="w-full lg:w-1/2 space-y-6"><div class="relative z-10"><h2 class="text-white text-4xl lg:text-6xl font-extrabold drop-shadow-lg"> Learn by building <span class="text-purple-400">real projects</span></h2></div><p class="text-lg lg:text-xl leading-8 text-neutral-100 font-bold"> We bring to you the best tutorials with the most unique and fun way to learn, don&#39;t waste your time with boring tutorials. </p><button class="flex items-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-all"> View Projects `);
      _push(ssrRenderComponent(unref(FolderOpen), { class: "h-5 w-5" }, null, _parent));
      _push(`</button></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Home/HeroSection02.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
