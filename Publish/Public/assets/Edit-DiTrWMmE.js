import { ref, withCtx, unref, createVNode, toDisplayString, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./App-DeZIQ0nQ.js";
import { router } from "@inertiajs/vue3";
import { I as InputField, f as _sfc_main$2, d as _sfc_main$3 } from "./Input-BXi_X4mZ.js";
import { _ as _sfc_main$4 } from "./Editor-BBpbDuzg.js";
import "naive-ui";
import "./FlashMessage-C9hwciIU.js";
import "axios";
import "lucide-vue-next";
import "lodash/debounce.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@headlessui/vue";
import "dompurify";
import "marked";
import "turndown";
import "date-fns";
import "@tinymce/tinymce-vue";
import "form-data";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    blog: {
      type: Object,
      default: () => []
    },
    editor_key: {
      type: String,
      default: null
    },
    edit_route: {
      type: String,
      default: null
    },
    dynamicCategorySearch: {
      type: Object,
      default: () => []
    },
    selected_category: {
      type: Object,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const form = ref({
      title: props.blog.title,
      slug: props.blog.slug,
      content: props.blog.content,
      short_description: props.blog.short_description,
      is_published: props.blog.is_published,
      category_id: props.blog.category_id
    });
    const submit = async () => {
      router.post(props.edit_route, form.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="bg-base-300"${_scopeId}><div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md"${_scopeId}><h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-neutral"${_scopeId}>Edit ${ssrInterpolate(props.blog.title)}</h2><form class="space-y-8"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(InputField), {
              type: "text",
              modelValue: form.value.title,
              "onUpdate:modelValue": ($event) => form.value.title = $event,
              label: "Title"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(InputField), {
              type: "text",
              modelValue: form.value.slug,
              "onUpdate:modelValue": ($event) => form.value.slug = $event,
              label: "Slug"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              label: props.dynamicCategorySearch.label,
              placeholder: "search",
              model: props.dynamicCategorySearch.model,
              columns: props.dynamicCategorySearch.columns,
              singleMode: props.dynamicCategorySearch.singleSearch,
              modelValue: form.value.category_id,
              "onUpdate:modelValue": ($event) => form.value.category_id = $event,
              loadData: __props.selected_category.data,
              endpoint: props.dynamicCategorySearch.endpoint
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              modelValue: form.value.is_published,
              "onUpdate:modelValue": ($event) => form.value.is_published = $event,
              label: "Is published"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              "api-key": props.editor_key,
              modelValue: form.value.content,
              "onUpdate:modelValue": ($event) => form.value.content = $event
            }, null, _parent2, _scopeId));
            _push2(`<label class="label"${_scopeId}><span class="label-text"${_scopeId}>Short Description</span></label>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              "api-key": props.editor_key,
              modelValue: form.value.short_description,
              "onUpdate:modelValue": ($event) => form.value.short_description = $event
            }, null, _parent2, _scopeId));
            _push2(`<button type="submit" class="btn btn-primary"${_scopeId}>Submit</button></form></div></section>`);
          } else {
            return [
              createVNode("section", { class: "bg-base-300" }, [
                createVNode("div", { class: "py-8 lg:py-16 px-4 mx-auto max-w-screen-md" }, [
                  createVNode("h2", { class: "mb-4 text-4xl tracking-tight font-extrabold text-center text-neutral" }, "Edit " + toDisplayString(props.blog.title), 1),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    class: "space-y-8"
                  }, [
                    createVNode(unref(InputField), {
                      type: "text",
                      modelValue: form.value.title,
                      "onUpdate:modelValue": ($event) => form.value.title = $event,
                      label: "Title"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(InputField), {
                      type: "text",
                      modelValue: form.value.slug,
                      "onUpdate:modelValue": ($event) => form.value.slug = $event,
                      label: "Slug"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(_sfc_main$2), {
                      label: props.dynamicCategorySearch.label,
                      placeholder: "search",
                      model: props.dynamicCategorySearch.model,
                      columns: props.dynamicCategorySearch.columns,
                      singleMode: props.dynamicCategorySearch.singleSearch,
                      modelValue: form.value.category_id,
                      "onUpdate:modelValue": ($event) => form.value.category_id = $event,
                      loadData: __props.selected_category.data,
                      endpoint: props.dynamicCategorySearch.endpoint
                    }, null, 8, ["label", "model", "columns", "singleMode", "modelValue", "onUpdate:modelValue", "loadData", "endpoint"]),
                    createVNode(unref(_sfc_main$3), {
                      modelValue: form.value.is_published,
                      "onUpdate:modelValue": ($event) => form.value.is_published = $event,
                      label: "Is published"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$4, {
                      "api-key": props.editor_key,
                      modelValue: form.value.content,
                      "onUpdate:modelValue": ($event) => form.value.content = $event
                    }, null, 8, ["api-key", "modelValue", "onUpdate:modelValue"]),
                    createVNode("label", { class: "label" }, [
                      createVNode("span", { class: "label-text" }, "Short Description")
                    ]),
                    createVNode(_sfc_main$4, {
                      "api-key": props.editor_key,
                      modelValue: form.value.short_description,
                      "onUpdate:modelValue": ($event) => form.value.short_description = $event
                    }, null, 8, ["api-key", "modelValue", "onUpdate:modelValue"]),
                    createVNode("button", {
                      type: "submit",
                      class: "btn btn-primary"
                    }, "Submit")
                  ], 32)
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/BackEnd/Vendor/GameDev/Blog/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
