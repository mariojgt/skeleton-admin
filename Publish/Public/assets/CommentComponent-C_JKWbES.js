import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./dynamicIcon-DKOdjdPH.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "CommentComponent",
  __ssrInlineRender: true,
  props: {
    comment: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["commentAction"],
  setup(__props, { emit: __emit }) {
    let showReports = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card bg-dark-100 border border-white shadow-md" }, _attrs))}><div class="card-body"><div class="flex items-center gap-4"><div class="avatar"><div class="w-24 rounded-xl"><img${ssrRenderAttr("src", __props.comment.user.avatar)}></div></div><h2 class="card-title">${ssrInterpolate(__props.comment.user.full_name)}</h2></div><span class="bg-warning p-2 rounded-lg font-bold text-black text-center text-2xl"> Report count: ${ssrInterpolate(__props.comment.report_counts)}</span><div class="text-lg font-bold p-5 bg-dark-300 rounded-lg">${ssrInterpolate(__props.comment.body)}</div><div class="flex justify-end"><div class="join"><a class="join-item btn btn-info btn-sm"> Show Reports `);
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "size-6",
        componentId: "eye"
      }, null, _parent));
      _push(`</a><a class="join-item btn btn-success btn-sm"> Aprove `);
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "size-6",
        componentId: "thumpUp"
      }, null, _parent));
      _push(`</a><a class="join-item btn btn-warning btn-sm"> Disaprove `);
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "size-6",
        componentId: "thumpDown"
      }, null, _parent));
      _push(`</a><a class="join-item btn btn-error btn-sm"> Delete `);
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "size-6",
        componentId: "trash"
      }, null, _parent));
      _push(`</a></div></div></div>`);
      if (unref(showReports)) {
        _push(`<div class="p-2"><!--[-->`);
        ssrRenderList(__props.comment.reports, (item, index) => {
          _push(`<div class="bg-dark-300 p-2 rounded-lg m-1"><div class="flex justify-start gap-4 text-lg font-bold"><div class="avatar"><div class="w-8 rounded"><img${ssrRenderAttr("src", __props.comment.user.avatar)} alt="Tailwind-CSS-Avatar-component"></div></div><h1 class="font-serif">${ssrInterpolate(__props.comment.user.full_name)}</h1></div><div class="flex flex-col justify-center bg-primary p-2 rounded-md mt-1"><span class="font-bold">Reason</span><div class="textarea w-full text-lg font-bold p-10" placeholder="Bio">${ssrInterpolate(__props.comment.body)}</div></div></div>`);
        });
        _push(`<!--]--></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/BackEnd/Vendor/GameDev/Comments/CommentComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
