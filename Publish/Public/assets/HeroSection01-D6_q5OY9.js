import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { ChevronRight, Play, Code, BookOpen } from "lucide-vue-next";
import "@inertiajs/vue3";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HeroSection01",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden bg-dark-300 min-h-screen" }, _attrs))}><div class="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-800 opacity-10"></div><div class="absolute inset-0 bg-[url(&#39;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+&#39;)] opacity-10"></div><div class="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8"><div class="flex flex-col lg:flex-row items-center justify-between gap-16"><div class="flex-1 text-center lg:text-left"><h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-8xl font-extrabold drop-shadow-lg"> Master <span class="block text-blue-400">Game</span> Development </h1><p class="mt-6 text-lg lg:text-xl leading-8 text-neutral-100 font-bold drop-shadow-lg"> Learn game development through practical, project-based tutorials. From beginners to advanced developers, level up your skills with our comprehensive courses. </p><div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"><button class="flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-600 transition-all"> Start Learning `);
      _push(ssrRenderComponent(unref(ChevronRight), { class: "h-5 w-5" }, null, _parent));
      _push(`</button><button class="flex items-center justify-center gap-2 rounded-lg bg-dark-500 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-dark-400 transition-all"> View Courses `);
      _push(ssrRenderComponent(unref(Play), { class: "h-5 w-5" }, null, _parent));
      _push(`</button></div><div class="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"><div class="flex flex-col items-center lg:items-start gap-2"><div class="rounded-full bg-blue-500/10 p-3">`);
      _push(ssrRenderComponent(unref(Code), { class: "h-6 w-6 text-blue-400" }, null, _parent));
      _push(`</div><h3 class="font-semibold text-white">Practical Projects</h3><p class="text-sm text-neutral-100">Learn by building real games</p></div><div class="flex flex-col items-center lg:items-start gap-2"><div class="rounded-full bg-blue-500/10 p-3">`);
      _push(ssrRenderComponent(unref(BookOpen), { class: "h-6 w-6 text-blue-400" }, null, _parent));
      _push(`</div><h3 class="font-semibold text-white">Structured Learning</h3><p class="text-sm text-neutral-100">Step-by-step guidance</p></div><div class="flex flex-col items-center lg:items-start gap-2"><div class="rounded-full bg-blue-500/10 p-3">`);
      _push(ssrRenderComponent(unref(Play), { class: "h-6 w-6 text-blue-400" }, null, _parent));
      _push(`</div><h3 class="font-semibold text-white">Video Tutorials</h3><p class="text-sm text-neutral-100">Clear, concise explanations</p></div></div></div><div class="flex-1 w-full max-w-xl"><div class="relative aspect-video rounded-lg bg-dark-500 shadow-2xl hover:shadow-3xl transition-transform duration-300"><iframe class="absolute inset-0 w-full h-full rounded-lg" src="https://www.youtube.com/embed/x1VtX6dWUDY?si=5QgG2p3K9URv9jo9" title="Featured Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><div class="absolute -top-6 -right-6 bg-blue-500 rounded-lg p-4 shadow-lg">`);
      _push(ssrRenderComponent(unref(Code), { class: "h-8 w-8 text-white" }, null, _parent));
      _push(`</div><div class="absolute -bottom-6 -left-6 bg-purple-500 rounded-lg p-4 shadow-lg">`);
      _push(ssrRenderComponent(unref(Play), { class: "h-8 w-8 text-white" }, null, _parent));
      _push(`</div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Home/HeroSection01.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
