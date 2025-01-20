import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./dynamicIcon-DKOdjdPH.js";
import { _ as _sfc_main$2 } from "./DifficultLevel-BY7tDA_1.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "EpisodeGuide",
  __ssrInlineRender: true,
  props: {
    course: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "panel relative transition-colors duration-300 bg-dark-300 border-dark-300 border py-4 rounded-xl px-8 mt-3" }, _attrs))}><div class="container"><div class="left flex flex-1 gap-x-4"><div class="flex items-center text-xs font-medium">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        componentId: "book",
        class: "mr-2"
      }, null, _parent));
      _push(` ${ssrInterpolate(props.course.lessons)} episodes </div><div class="flex items-center font-medium">`);
      _push(ssrRenderComponent(_sfc_main$1, { componentId: "clock" }, null, _parent));
      _push(`<span class="text-xs ml-2">${ssrInterpolate(props.course.course_length)}</span></div><div class="hidden font-medium lg:flex">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        "dificult-level": props.course.difficulty_level,
        simpleMode: true
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Course/ViewComponents/EpisodeGuide.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
