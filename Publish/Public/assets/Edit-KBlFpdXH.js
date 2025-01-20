import { ref, withCtx, unref, createVNode, toDisplayString, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./App-DeZIQ0nQ.js";
import "./Table-CVCewQpu.js";
import { _ as _sfc_main$3 } from "./Editor-BBpbDuzg.js";
import { I as InputField, d as _sfc_main$2 } from "./Input-BXi_X4mZ.js";
import "naive-ui";
import "./FlashMessage-C9hwciIU.js";
import "axios";
import "lucide-vue-next";
import "lodash/debounce.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@headlessui/vue";
import "date-fns";
import "@tinymce/tinymce-vue";
import "form-data";
import "dompurify";
import "marked";
import "turndown";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    editor_key: {
      type: String,
      default: null
    },
    slider: {
      type: Object,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const submit = async () => {
      router.post(route("gamedev.slider.update", props.slider.id), form.value);
    };
    const form = ref(props.slider);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-5 py-7 w-full bg-base-300"${_scopeId}><h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-neutral"${_scopeId}> Edit ${ssrInterpolate(props.slider.title)}</h2><form class="bg-secondary bg-opacity-80 backdrop-blur transition-all duration-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(InputField), {
              type: "text",
              modelValue: form.value.title,
              "onUpdate:modelValue": ($event) => form.value.title = $event,
              label: "Title"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(InputField), {
              type: "text",
              modelValue: form.value.class,
              "onUpdate:modelValue": ($event) => form.value.class = $event,
              label: "Class"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(InputField), {
              type: "number",
              modelValue: form.value.order,
              "onUpdate:modelValue": ($event) => form.value.order = $event,
              label: "Order"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              modelValue: form.value.active,
              "onUpdate:modelValue": ($event) => form.value.active = $event,
              label: "Is published"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><label class="label"${_scopeId}><span class="label-text"${_scopeId}>Slider Body</span></label>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              "api-key": props.editor_key,
              init: {
                plugins: "lists link image table code help wordcount"
              },
              modelValue: form.value.body,
              "onUpdate:modelValue": ($event) => form.value.body = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><button type="submit" class="btn btn-accent mt-10 block w-full"${_scopeId}> Update </button></form></div>`);
          } else {
            return [
              createVNode("div", { class: "px-5 py-7 w-full bg-base-300" }, [
                createVNode("h2", { class: "mb-4 text-4xl tracking-tight font-extrabold text-center text-neutral" }, " Edit " + toDisplayString(props.slider.title), 1),
                createVNode("form", {
                  onSubmit: withModifiers(submit, ["prevent"]),
                  class: "bg-secondary bg-opacity-80 backdrop-blur transition-all duration-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
                }, [
                  createVNode(unref(InputField), {
                    type: "text",
                    modelValue: form.value.title,
                    "onUpdate:modelValue": ($event) => form.value.title = $event,
                    label: "Title"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(unref(InputField), {
                    type: "text",
                    modelValue: form.value.class,
                    "onUpdate:modelValue": ($event) => form.value.class = $event,
                    label: "Class"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(unref(InputField), {
                    type: "number",
                    modelValue: form.value.order,
                    "onUpdate:modelValue": ($event) => form.value.order = $event,
                    label: "Order"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(unref(_sfc_main$2), {
                    modelValue: form.value.active,
                    "onUpdate:modelValue": ($event) => form.value.active = $event,
                    label: "Is published"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("div", null, [
                    createVNode("label", { class: "label" }, [
                      createVNode("span", { class: "label-text" }, "Slider Body")
                    ]),
                    createVNode(_sfc_main$3, {
                      "api-key": props.editor_key,
                      init: {
                        plugins: "lists link image table code help wordcount"
                      },
                      modelValue: form.value.body,
                      "onUpdate:modelValue": ($event) => form.value.body = $event
                    }, null, 8, ["api-key", "modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("button", {
                    type: "submit",
                    class: "btn btn-accent mt-10 block w-full"
                  }, " Update ")
                ], 32)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/BackEnd/Vendor/GameDev/Slider/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
