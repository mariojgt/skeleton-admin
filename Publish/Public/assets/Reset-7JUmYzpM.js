import { ref, mergeProps, withCtx, unref, isRef, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./Login-BfjLFcyv.js";
import { I as InputField, a as _sfc_main$2, b as _sfc_main$3 } from "./Input-BXi_X4mZ.js";
import "./FlashMessage-C9hwciIU.js";
import "naive-ui";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@headlessui/vue";
import "dompurify";
import "marked";
import "turndown";
import "lucide-vue-next";
import "date-fns";
const _sfc_main = {
  __name: "Reset",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "mariojgt is heredude"
    }
  },
  setup(__props) {
    const registerLink = route("skeleton.register");
    const loginLink = route("skeleton.login");
    let email = ref("");
    ref("");
    const submitForm = () => {
      const form = {
        email: email.value
      };
      router.post(route("skeleton.password-reset"), form);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Backend Reset Password" }, _attrs), {
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(InputField), {
              modelValue: unref(email),
              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : email = $event,
              label: "Email",
              type: "email",
              name: "email",
              id: "email",
              placeholder: "Type your email"
            }, null, _parent2, _scopeId));
            _push2(`<div class="form-control pt-10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              onClick: submitForm,
              name: "Request Password",
              class: "btn btn-secondary"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(submitForm, ["prevent"])
              }, [
                createVNode("div", { class: "w-full" }, [
                  createVNode(unref(InputField), {
                    modelValue: unref(email),
                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : email = $event,
                    label: "Email",
                    type: "email",
                    name: "email",
                    id: "email",
                    placeholder: "Type your email"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("div", { class: "form-control pt-10" }, [
                    createVNode(unref(_sfc_main$2), {
                      onClick: submitForm,
                      name: "Request Password",
                      class: "btn btn-secondary"
                    })
                  ])
                ])
              ], 32)
            ];
          }
        }),
        links: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              name: "Register",
              link: unref(registerLink)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              name: "Login",
              link: unref(loginLink)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$3), {
                name: "Register",
                link: unref(registerLink)
              }, null, 8, ["link"]),
              createVNode(unref(_sfc_main$3), {
                name: "Login",
                link: unref(loginLink)
              }, null, 8, ["link"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/Auth/Backend/Reset.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
