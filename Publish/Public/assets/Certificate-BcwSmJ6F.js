import { defineComponent, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { Trophy, Shield, Gamepad2, Timer, Award, Download } from "lucide-vue-next";
import { _ as _sfc_main$1 } from "./SeoManager-ytA6mF8s.js";
import { usePage } from "@inertiajs/vue3";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Certificate",
  __ssrInlineRender: true,
  props: {
    certificate: { default: () => ({
      data: {
        user: { name: "" },
        course: { title: "" },
        certificate_number: "",
        completed_at: ""
      }
    }) }
  },
  setup(__props) {
    const generateParticleStyle = () => {
      const size = Math.random() * 4 + 2;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = (Math.random() * 20 + 10).toFixed(2);
      const delay = (Math.random() * -20).toFixed(2);
      return {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        top: `${top}%`,
        animation: `float ${duration}s ${delay}s infinite linear`
      };
    };
    const generateCertificateParticleStyle = () => {
      const size = Math.random() * 3 + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = (Math.random() * 15 + 10).toFixed(2);
      const delay = (Math.random() * -10).toFixed(2);
      const opacity = (Math.random() * 0.3 + 0.1).toFixed(2);
      return {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        top: `${top}%`,
        opacity,
        animation: `certificate-float ${duration}s ${delay}s infinite linear`
      };
    };
    ref(null);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        seo: unref(usePage)().props.seo,
        inDebugMode: unref(usePage)().props.app_env === "local"
      }, null, _parent));
      _push(`<div class="certificate-wrapper"><div class="fixed inset-0 bg-dark-900 overflow-hidden"><div class="absolute inset-0 bg-[url(&#39;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2NiwgMTUzLCAyMjUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==&#39;)] opacity-20"></div><div class="absolute inset-0"><div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-dark-900/0 animate-drift"></div><div class="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-purple-500/10 via-blue-500/5 to-dark-900/0 animate-drift-reverse"></div></div><div class="particles absolute inset-0"><!--[-->`);
      ssrRenderList(20, (n) => {
        _push(`<div class="particle absolute rounded-full bg-blue-500/30 backdrop-blur-sm" style="${ssrRenderStyle(generateParticleStyle())}"></div>`);
      });
      _push(`<!--]--></div><div class="absolute inset-0 bg-radial-dark pointer-events-none"></div></div><div class="min-h-screen relative flex items-center justify-center p-4">`);
      if (_ctx.certificate.data) {
        _push(`<div class="w-full max-w-4xl relative"><div class="absolute inset-0 bg-dark-800/40 backdrop-blur-xl rounded-2xl border-2 border-dark-900/80 shadow-[0_0_15px_rgba(0,0,0,0.3)]"></div><div class="absolute -top-12 right-12 w-24 h-24 animate-float-slow"><div class="relative w-full h-full"><div class="absolute inset-0 bg-blue-500/20 rounded-full blur-md animate-pulse"></div><div class="relative w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-full p-0.5 rotate-3 hover:rotate-6 transition-transform duration-300"><div class="w-full h-full rounded-full bg-dark-800 p-4 backdrop-blur-sm"><div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">`);
        _push(ssrRenderComponent(unref(Trophy), { class: "w-8 h-8 text-white" }, null, _parent));
        _push(`</div></div></div><!--[-->`);
        ssrRenderList(4, (n) => {
          _push(`<div class="${ssrRenderClass([
            "absolute w-2 h-2 rounded-full bg-blue-500/50 animate-badge-particle",
            `badge-particle-${n}`
          ])}"></div>`);
        });
        _push(`<!--]--></div></div><div class="relative bg-gradient-to-b from-dark-800/90 to-dark-800/70 rounded-2xl overflow-hidden p-12 border border-dark-900/60"><div class="absolute inset-0 overflow-hidden pointer-events-none"><!--[-->`);
        ssrRenderList(15, (n) => {
          _push(`<div class="certificate-particle absolute rounded-full" style="${ssrRenderStyle(generateCertificateParticleStyle())}"></div>`);
        });
        _push(`<!--]--></div><div class="text-center space-y-6 mb-12"><div class="inline-flex flex-col items-center">`);
        _push(ssrRenderComponent(unref(Shield), { class: "w-12 h-12 text-blue-400 mb-4" }, null, _parent));
        _push(`<h1 class="text-4xl font-display tracking-wide text-white"> ACHIEVEMENT UNLOCKED </h1><div class="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mt-4"></div></div></div><div class="space-y-8"><div class="text-center"><p class="text-blue-400 text-lg mb-2 font-medium">CONGRATULATIONS</p><h2 class="text-3xl font-display text-white mb-4">${ssrInterpolate(_ctx.certificate.data.user.name)}</h2><p class="text-gray-400 font-medium">has successfully completed</p><p class="text-2xl font-display text-blue-400 mt-2">${ssrInterpolate(_ctx.certificate.data.course.title)}</p></div><div class="grid grid-cols-3 gap-6 my-12"><div class="stat-card group"><div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 group-hover:from-blue-600/10 group-hover:to-purple-600/10 rounded-lg transition-all duration-300"></div>`);
        _push(ssrRenderComponent(unref(Gamepad2), { class: "w-6 h-6 text-blue-400 mb-2 group-hover:scale-110 transition-transform" }, null, _parent));
        _push(`<span class="text-gray-400 text-sm">SKILL LEVEL</span><span class="text-xl font-display text-white group-hover:text-blue-400 transition-colors"> MASTER </span></div><div class="stat-card group"><div class="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 group-hover:from-purple-600/10 group-hover:to-blue-600/10 rounded-lg transition-all duration-300"></div>`);
        _push(ssrRenderComponent(unref(Timer), { class: "w-6 h-6 text-purple-400 mb-2 group-hover:scale-110 transition-transform" }, null, _parent));
        _push(`<span class="text-gray-400 text-sm">COMPLETED</span><span class="text-xl font-display text-white group-hover:text-purple-400 transition-colors">${ssrInterpolate(_ctx.certificate.data.completed_at)}</span></div><div class="stat-card group"><div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 group-hover:from-blue-600/10 group-hover:to-purple-600/10 rounded-lg transition-all duration-300"></div>`);
        _push(ssrRenderComponent(unref(Award), { class: "w-6 h-6 text-blue-400 mb-2 group-hover:scale-110 transition-transform" }, null, _parent));
        _push(`<span class="text-gray-400 text-sm">ACHIEVEMENT ID</span><span class="text-xl font-display text-white group-hover:text-blue-400 transition-colors"> #${ssrInterpolate(_ctx.certificate.data.certificate_number)}</span></div></div><div class="text-center pt-6"><button class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium transition-all duration-300 hover:from-blue-600 hover:to-purple-600 hover:scale-105 hover:shadow-lg">`);
        _push(ssrRenderComponent(unref(Download), { class: "w-5 h-5 mr-2" }, null, _parent));
        _push(` Share Certificate </button></div></div></div></div>`);
      } else {
        _push(`<div class="relative text-center space-y-4 p-8 bg-dark-800/40 backdrop-blur-xl rounded-2xl"><div class="inline-flex flex-col items-center">`);
        _push(ssrRenderComponent(unref(Gamepad2), { class: "w-16 h-16 text-gray-600 mb-4" }, null, _parent));
        _push(`<h3 class="text-2xl font-display text-white">Quest Incomplete</h3><p class="text-gray-400 mt-2"> Complete all levels to unlock your achievement </p></div></div>`);
      }
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Course/Certificate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
