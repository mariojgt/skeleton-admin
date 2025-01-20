import { withCtx, unref, createVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./App-DeZIQ0nQ.js";
import { I as InputField, a as _sfc_main$2 } from "./Input-BXi_X4mZ.js";
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
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    admin: {
      type: Object,
      default: () => ({}),
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    const submitForm = () => {
      const form = {
        work_title: props.admin.data.work_title,
        about: props.admin.data.about,
        facebook: props.admin.data.facebook,
        twitter: props.admin.data.twitter,
        linkedin: props.admin.data.linkedin,
        github: props.admin.data.github,
        instagram: props.admin.data.instagram,
        website: props.admin.data.website
      };
      router.patch(route("gamedev.instructor.edit"), form);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-5 py-7 w-full bg-base-300"${_scopeId}><form${_scopeId}>`);
            _push2(ssrRenderComponent(unref(InputField), {
              modelValue: __props.admin.data.work_title,
              "onUpdate:modelValue": ($event) => __props.admin.data.work_title = $event,
              label: "Work title",
              type: "text",
              placeholder: "type your Work title"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(InputField), {
              modelValue: __props.admin.data.facebook,
              "onUpdate:modelValue": ($event) => __props.admin.data.facebook = $event,
              label: "Facebook",
              type: "text",
              placeholder: "type your Facebook"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(InputField), {
              modelValue: __props.admin.data.twitter,
              "onUpdate:modelValue": ($event) => __props.admin.data.twitter = $event,
              label: "Twitter",
              type: "text",
              placeholder: "type your Twitter"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(InputField), {
              modelValue: __props.admin.data.linkedin,
              "onUpdate:modelValue": ($event) => __props.admin.data.linkedin = $event,
              label: "Linkedin",
              type: "text",
              placeholder: "type your Linkedin"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(InputField), {
              modelValue: __props.admin.data.github,
              "onUpdate:modelValue": ($event) => __props.admin.data.github = $event,
              label: "Github",
              type: "text",
              placeholder: "type your github"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(InputField), {
              modelValue: __props.admin.data.instagram,
              "onUpdate:modelValue": ($event) => __props.admin.data.instagram = $event,
              label: "Instagram",
              type: "text",
              placeholder: "type your Instagram"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(InputField), {
              modelValue: __props.admin.data.website,
              "onUpdate:modelValue": ($event) => __props.admin.data.website = $event,
              label: "Website",
              type: "text",
              placeholder: "type your Website"
            }, null, _parent2, _scopeId));
            _push2(`<textarea class="textarea textarea-bordered w-full mt-5" rows="5" placeholder="Type your about"${_scopeId}>${ssrInterpolate(__props.admin.data.about)}</textarea><div class="form-control pt-10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              name: "update",
              onClick: submitForm
            }, null, _parent2, _scopeId));
            _push2(`</div></form></div>`);
          } else {
            return [
              createVNode("div", { class: "px-5 py-7 w-full bg-base-300" }, [
                createVNode("form", {
                  onSubmit: withModifiers(submitForm, ["prevent"])
                }, [
                  createVNode(unref(InputField), {
                    modelValue: __props.admin.data.work_title,
                    "onUpdate:modelValue": ($event) => __props.admin.data.work_title = $event,
                    label: "Work title",
                    type: "text",
                    placeholder: "type your Work title"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(unref(InputField), {
                    modelValue: __props.admin.data.facebook,
                    "onUpdate:modelValue": ($event) => __props.admin.data.facebook = $event,
                    label: "Facebook",
                    type: "text",
                    placeholder: "type your Facebook"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(unref(InputField), {
                    modelValue: __props.admin.data.twitter,
                    "onUpdate:modelValue": ($event) => __props.admin.data.twitter = $event,
                    label: "Twitter",
                    type: "text",
                    placeholder: "type your Twitter"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(unref(InputField), {
                    modelValue: __props.admin.data.linkedin,
                    "onUpdate:modelValue": ($event) => __props.admin.data.linkedin = $event,
                    label: "Linkedin",
                    type: "text",
                    placeholder: "type your Linkedin"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(unref(InputField), {
                    modelValue: __props.admin.data.github,
                    "onUpdate:modelValue": ($event) => __props.admin.data.github = $event,
                    label: "Github",
                    type: "text",
                    placeholder: "type your github"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(unref(InputField), {
                    modelValue: __props.admin.data.instagram,
                    "onUpdate:modelValue": ($event) => __props.admin.data.instagram = $event,
                    label: "Instagram",
                    type: "text",
                    placeholder: "type your Instagram"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(unref(InputField), {
                    modelValue: __props.admin.data.website,
                    "onUpdate:modelValue": ($event) => __props.admin.data.website = $event,
                    label: "Website",
                    type: "text",
                    placeholder: "type your Website"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  withDirectives(createVNode("textarea", {
                    class: "textarea textarea-bordered w-full mt-5",
                    "onUpdate:modelValue": ($event) => __props.admin.data.about = $event,
                    rows: "5",
                    placeholder: "Type your about"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, __props.admin.data.about]
                  ]),
                  createVNode("div", { class: "form-control pt-10" }, [
                    createVNode(unref(_sfc_main$2), {
                      name: "update",
                      onClick: submitForm
                    })
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/BackEnd/Vendor/GameDev/Instructor/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
