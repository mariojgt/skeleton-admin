import { ref, mergeProps, withCtx, unref, isRef, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./Login-BfjLFcyv.js";
import { I as InputField, _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4 } from "./Input-BXi_X4mZ.js";
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
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    token: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const registerLink = route("skeleton.register");
    const forgotPasswordLink = route("skeleton.forgot-password");
    let email = ref("");
    let password = ref("");
    let password_confirmation = ref("");
    const props = __props;
    console.log(props);
    const submitForm = () => {
      const form = {
        email: email.value,
        password: password.value,
        password_confirmation: password_confirmation.value,
        token: props.token
      };
      router.post(route("skeleton.password.change"), form);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Backend Reset" }, _attrs), {
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><form${_scopeId}><div class="px-5 py-7"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(InputField), {
              modelValue: unref(email),
              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : email = $event,
              label: "Email",
              type: "email",
              name: "email",
              id: "email",
              placeholder: "Type your email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              modelValue: unref(password),
              "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : password = $event,
              label: "Password",
              name: "password",
              id: "password",
              placeholder: "Type your password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              modelValue: unref(password_confirmation),
              "onUpdate:modelValue": ($event) => isRef(password_confirmation) ? password_confirmation.value = $event : password_confirmation = $event,
              label: "Password Confirm",
              name: "password_confirmation",
              id: "password_confirmation",
              placeholder: "Type your Password Confirmation"
            }, null, _parent2, _scopeId));
            _push2(`<div class="form-control pt-10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              onClick: submitForm,
              name: "Reset",
              class: "btn btn-secondary"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></form></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("form", {
                  onSubmit: withModifiers(submitForm, ["prevent"])
                }, [
                  createVNode("div", { class: "px-5 py-7" }, [
                    createVNode(unref(InputField), {
                      modelValue: unref(email),
                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : email = $event,
                      label: "Email",
                      type: "email",
                      name: "email",
                      id: "email",
                      placeholder: "Type your email"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(_sfc_main$2), {
                      modelValue: unref(password),
                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : password = $event,
                      label: "Password",
                      name: "password",
                      id: "password",
                      placeholder: "Type your password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(_sfc_main$2), {
                      modelValue: unref(password_confirmation),
                      "onUpdate:modelValue": ($event) => isRef(password_confirmation) ? password_confirmation.value = $event : password_confirmation = $event,
                      label: "Password Confirm",
                      name: "password_confirmation",
                      id: "password_confirmation",
                      placeholder: "Type your Password Confirmation"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "form-control pt-10" }, [
                      createVNode(unref(_sfc_main$3), {
                        onClick: submitForm,
                        name: "Reset",
                        class: "btn btn-secondary"
                      })
                    ])
                  ])
                ], 32)
              ])
            ];
          }
        }),
        links: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              name: "Register",
              link: unref(registerLink)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              name: "Forgot password",
              link: unref(forgotPasswordLink)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$4), {
                name: "Register",
                link: unref(registerLink)
              }, null, 8, ["link"]),
              createVNode(unref(_sfc_main$4), {
                name: "Forgot password",
                link: unref(forgotPasswordLink)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/Auth/Backend/ResetPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
