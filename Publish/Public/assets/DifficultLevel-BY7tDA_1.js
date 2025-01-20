import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DifficultLevel",
  __ssrInlineRender: true,
  props: {
    dificultLevel: {
      type: String,
      default: "intermediate"
    },
    simpleMode: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      if (!props.simpleMode) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full text-center mt-6" }, _attrs))}><div class="mb-2 text-2xs font-semibold text-white"> Dificult level ${ssrInterpolate(props.dificultLevel)}</div><div class="flex justify-center space-x-1 is-intermediate"><span class="${ssrRenderClass([
          props.dificultLevel == "beginner" ? "bg-white" : "bg-black",
          "inline-block h-2 flex-1"
        ])}"></span><span class="${ssrRenderClass([
          props.dificultLevel == "intermediate" ? "bg-white" : "bg-black",
          "inline-block h2 flex-1"
        ])}"></span><span class="${ssrRenderClass([
          props.dificultLevel == "advanced" ? "bg-white" : "bg-black",
          "inline-block h2 flex-1"
        ])}"></span></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden font-medium lg:flex" }, _attrs))}><div class="flex items-center"><div class="difficulty-meter mr-2 flex space-x-1 is-intermediate"><span class="${ssrRenderClass([
          props.dificultLevel == "beginner" ? "bg-white" : "bg-black",
          "block rounded"
        ])}" style="${ssrRenderStyle({ "width": "5px", "height": "11px" })}"></span><span class="${ssrRenderClass([
          props.dificultLevel == "intermediate" ? "bg-white" : "bg-black",
          "block rounded"
        ])}" style="${ssrRenderStyle({ "width": "5px", "height": "11px" })}"></span><span class="${ssrRenderClass([
          props.dificultLevel == "advanced" ? "bg-white" : "bg-black",
          "block rounded"
        ])}" style="${ssrRenderStyle({ "width": "5px", "height": "11px" })}"></span></div><span class="text-xs font-medium mobile:text-left capitalize">${ssrInterpolate(props.dificultLevel)}</span></div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Course/DifficultLevel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
