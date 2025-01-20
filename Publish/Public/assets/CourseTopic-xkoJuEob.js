import { defineComponent, computed, ref, unref, useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { GraduationCap, Clock, PenSquare, Compass } from "lucide-vue-next";
import { usePage, useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./DifficultLevel-BY7tDA_1.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CourseCardGrid",
  __ssrInlineRender: true,
  props: {
    record: {
      type: Object,
      required: true,
      default: () => ({})
    },
    displayDifficulty: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const props = __props;
    const cardStyleClasses = computed(() => {
      const baseClasses = "border border-gray-800/50";
      switch (props.record.card_style) {
        case "featured":
          return `${baseClasses} hover:border-yellow-500/50`;
        case "popular":
          return `${baseClasses} hover:border-purple-500/50`;
        case "new":
          return `${baseClasses} hover:border-green-500/50`;
        default:
          return `${baseClasses} hover:border-blue-500/50`;
      }
    });
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><a class="${ssrRenderClass([[cardStyleClasses.value], "group relative bg-dark-500/90 backdrop-blur-sm rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 block cursor-pointer"])}"><div class="absolute top-3 right-3 z-10 flex flex-col gap-2">`);
      if (!__props.record.is_free) {
        _push(`<div class="px-3 py-1 rounded-full text-sm font-bold bg-blue-500 text-white shadow-lg"> PREMIUM </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.record.card_style === "new") {
        _push(`<div class="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold bg-green-500 text-white shadow-lg"><div class="w-2 h-2 bg-white rounded-full animate-pulse"></div> NEW </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative aspect-video overflow-hidden"><img${ssrRenderAttr("src", __props.record.media[0].url.default)}${ssrRenderAttr("alt", __props.record.title)} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"><div class="absolute inset-0 bg-gradient-to-t from-dark-500 via-transparent to-transparent opacity-60"></div><div class="absolute bottom-3 left-3 right-3 flex justify-between items-center text-sm text-white"><div class="flex items-center gap-2 bg-dark-500/60 px-3 py-1 rounded-lg">`);
      _push(ssrRenderComponent(unref(GraduationCap), { class: "h-4 w-4 text-blue-400" }, null, _parent));
      _push(`<span>${ssrInterpolate(__props.record.lessons)} lessons</span></div><div class="flex items-center gap-2 bg-dark-500/60 px-3 py-1 rounded-lg">`);
      _push(ssrRenderComponent(unref(Clock), { class: "h-4 w-4 text-purple-400" }, null, _parent));
      _push(`<span>${ssrInterpolate(__props.record.course_length)}</span></div></div></div><div class="p-6 space-y-4">`);
      if (__props.displayDifficulty) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$2, {
          "dificult-level": __props.record.difficulty_level,
          simpleMode: true
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h3 class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">${ssrInterpolate(__props.record.title)}</h3>`);
      if (unref(usePage)().props.isAdminAuth) {
        _push(`<button class="w-full inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors duration-300">`);
        _push(ssrRenderComponent(unref(PenSquare), { class: "h-4 w-4" }, null, _parent));
        _push(` Edit Course </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass([{
        "bg-yellow-500": __props.record.card_style === "featured",
        "bg-purple-500": __props.record.card_style === "popular",
        "bg-blue-500": !__props.record.card_style || __props.record.card_style === "normal",
        "bg-green-500": __props.record.card_style === "new"
      }, "absolute bottom-0 left-0 w-full h-1 transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100"])}"></div></a></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Course/CourseCardGrid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CourseTopic",
  __ssrInlineRender: true,
  props: {
    routeReload: {
      type: String,
      default: "home"
    }
  },
  setup(__props) {
    const topicForm = useForm({
      topic: "all"
    });
    computed(() => {
      return window.location.search.replace("?", "").split("&").filter((item) => item.includes("tag=")).map((item) => item.split("=")[1]);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative py-16 px-4" }, _attrs))}><div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-800/5"></div><div class="absolute inset-0 bg-[url(&#39;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+&#39;)] opacity-10"></div><div class="relative max-w-7xl mx-auto"><div class="text-center mb-12"><h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 flex flex-col items-center gap-2"> Topics <div class="flex items-center gap-2 text-blue-400">`);
      _push(ssrRenderComponent(unref(Compass), { class: "h-8 w-8" }, null, _parent));
      _push(`<div class="h-1 w-24 bg-blue-400 rounded-full"></div></div></h2><p class="text-lg text-neutral-100 max-w-2xl mx-auto"> Explore the whole collection of high quality and fun lessons and boost your game development skills. </p></div><div class="mb-8 bg-dark-500/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"><div class="flex flex-col md:flex-row items-center justify-between gap-4"><h3 class="text-xl font-bold text-white">All Topics</h3><div class="w-full md:w-auto overflow-x-auto"><div class="flex gap-2 p-1"><button class="${ssrRenderClass([[
        unref(topicForm).topic === "all" ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25" : "bg-dark-400 text-neutral-300 hover:bg-dark-300"
      ], "px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap"])}"> All Topics </button><!--[-->`);
      ssrRenderList(unref(usePage)().props.tagsTopics, (item, index) => {
        _push(`<button class="${ssrRenderClass([[
          item === unref(topicForm).topic ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25" : "bg-dark-400 text-neutral-300 hover:bg-dark-300"
        ], "px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap"])}">${ssrInterpolate(item)}</button>`);
      });
      _push(`<!--]--></div></div></div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4"><!--[-->`);
      ssrRenderList(unref(usePage)().props.tags.data, (item, index) => {
        _push(`<div class="group bg-dark-500/90 backdrop-blur-sm rounded-xl p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 border border-gray-800/50 hover:border-blue-500/50"><div class="flex items-center gap-3">`);
        if (item.icon) {
          _push(`<div class="h-12 w-12 bg-neutral-100 p-2 rounded-lg transition-colors duration-300 group-hover:bg-neutral-200">${item.icon ?? ""}</div>`);
        } else {
          _push(`<div class="h-12 w-12 bg-dark-400 p-2 rounded-lg flex items-center justify-center"><img class="w-full h-full object-contain" src="/vendor/Image/illustration/FuryIO.png" alt="Topic icon"></div>`);
        }
        _push(`<div class="flex-1"><h3 class="font-bold text-white group-hover:text-blue-400 transition-colors duration-300">${ssrInterpolate(item.name)}</h3><p class="text-sm text-neutral-300 mt-1">${ssrInterpolate(item.course_count)} Series • ${ssrInterpolate(item.lessons_count)} Videos </p></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Course/CourseTopic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$1 as a
};
