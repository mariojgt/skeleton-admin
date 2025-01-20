import { defineComponent, mergeProps, withCtx, unref, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./App-CccoNqE7.js";
import { I as InputField, _ as _sfc_main$2, a as _sfc_main$3 } from "./Input-BXi_X4mZ.js";
import "naive-ui";
import "./FlashMessage-CYVaM9mM.js";
import "lucide-vue-next";
import "./Markdown-D1WgnuMs.js";
import "dompurify";
import "markdown-it";
import "highlight.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./SearchSidebar-BPNZMEZb.js";
import "lodash";
import "./dynamicIcon-DKOdjdPH.js";
import "./axios-BWWnXGbF.js";
import "axios";
import "../Frontend_js.js";
import "./index-koWuargk.js";
import "./Money-B84zS3T2.js";
import "./SeoManager-ytA6mF8s.js";
import "@headlessui/vue";
import "marked";
import "turndown";
import "date-fns";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    token: {
      type: String,
      default: ""
    },
    email: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      email: props.email,
      token: props.token,
      password: ""
    });
    const submitForm = () => {
      form.post(route("password.change.user"), {
        preserveState: true,
        onSuccess: () => {
        },
        onError: () => {
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Frontend Reset" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<hr class="theme-divider"${_scopeId}><section class="fancy-background03"${_scopeId}><div class="grid max-w-screen-xl px-4 py-8 mx-auto bg-secondary rounded-lg mt-10"${_scopeId}><form class="mt-2"${_scopeId}><div class="px-5 py-7"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(InputField), {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              label: "Email",
              type: "email",
              name: "email",
              placeholder: "Type your email",
              messageClass: "text-red-500 text-xl bg-primary mt-1 rounded-lg p-2 opacity-90",
              labelClass: "text-3xl font-bold text-left",
              inputClass: "w-full p-5 text-2xl input input-primary input-bordered"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              id: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              label: "Password",
              name: "password",
              placeholder: "Type your password",
              labelClass: "text-3xl font-bold text-left",
              messageClass: "text-red-500 text-xl bg-primary mt-1 rounded-lg p-2 opacity-90",
              inputClass: "w-full p-5 text-2xl input input-primary input-bordered",
              showPasswordClass: "absolute top-0 right-0 rounded-l-none btn btn-secondary"
            }, null, _parent2, _scopeId));
            _push2(`<div class="form-control pt-10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              name: "Reset",
              onClick: submitForm
            }, null, _parent2, _scopeId));
            _push2(`</div></div></form></div></section>`);
          } else {
            return [
              createVNode("hr", { class: "theme-divider" }),
              createVNode("section", { class: "fancy-background03" }, [
                createVNode("div", { class: "grid max-w-screen-xl px-4 py-8 mx-auto bg-secondary rounded-lg mt-10" }, [
                  createVNode("form", {
                    class: "mt-2",
                    onSubmit: withModifiers(submitForm, ["prevent"])
                  }, [
                    createVNode("div", { class: "px-5 py-7" }, [
                      createVNode(unref(InputField), {
                        id: "email",
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        label: "Email",
                        type: "email",
                        name: "email",
                        placeholder: "Type your email",
                        messageClass: "text-red-500 text-xl bg-primary mt-1 rounded-lg p-2 opacity-90",
                        labelClass: "text-3xl font-bold text-left",
                        inputClass: "w-full p-5 text-2xl input input-primary input-bordered"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(unref(_sfc_main$2), {
                        id: "password",
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        label: "Password",
                        name: "password",
                        placeholder: "Type your password",
                        labelClass: "text-3xl font-bold text-left",
                        messageClass: "text-red-500 text-xl bg-primary mt-1 rounded-lg p-2 opacity-90",
                        inputClass: "w-full p-5 text-2xl input input-primary input-bordered",
                        showPasswordClass: "absolute top-0 right-0 rounded-l-none btn btn-secondary"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "form-control pt-10" }, [
                        createVNode(unref(_sfc_main$3), {
                          name: "Reset",
                          onClick: submitForm
                        })
                      ])
                    ])
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
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/Auth/Frontend/ResetPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
