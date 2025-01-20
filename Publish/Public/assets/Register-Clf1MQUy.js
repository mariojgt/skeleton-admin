import { ref, mergeProps, withCtx, unref, isRef, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./App-CccoNqE7.js";
import { I as InputField, _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4 } from "./Input-BXi_X4mZ.js";
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
const _sfc_main = {
  __name: "Register",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "mariojgt is heredude"
    }
  },
  setup(__props) {
    let first_name = ref("");
    let last_name = ref("");
    let email = ref("");
    let password = ref("");
    let password_confirmation = ref("");
    const submitForm = () => {
      const form = {
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        password: password.value,
        password_confirmation: password_confirmation.value
      };
      router.post(route("register.user"), form);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Frontend Register" }, _attrs), {
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><form${_scopeId}><div class="px-5 py-7"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(InputField), {
              modelValue: unref(first_name),
              "onUpdate:modelValue": ($event) => isRef(first_name) ? first_name.value = $event : first_name = $event,
              label: "First Name",
              type: "text",
              name: "first_name",
              id: "first_name",
              placeholder: "type your First Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(InputField), {
              modelValue: unref(last_name),
              "onUpdate:modelValue": ($event) => isRef(last_name) ? last_name.value = $event : last_name = $event,
              label: "Last Name",
              type: "text",
              name: "last_name",
              id: "last_name",
              placeholder: "type your Last Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(InputField), {
              modelValue: unref(email),
              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : email = $event,
              label: "Email",
              type: "email",
              name: "email",
              id: "email",
              placeholder: "type your email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              modelValue: unref(password),
              "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : password = $event,
              label: "Password",
              name: "password",
              id: "password",
              placeholder: "type your password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              modelValue: unref(password_confirmation),
              "onUpdate:modelValue": ($event) => isRef(password_confirmation) ? password_confirmation.value = $event : password_confirmation = $event,
              label: "Password Confirm",
              name: "password_confirmation",
              id: "password_confirmation",
              placeholder: "type your Password Confirmation"
            }, null, _parent2, _scopeId));
            _push2(`<div class="form-control pt-10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              name: "Register",
              onClick: submitForm
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
                      modelValue: unref(first_name),
                      "onUpdate:modelValue": ($event) => isRef(first_name) ? first_name.value = $event : first_name = $event,
                      label: "First Name",
                      type: "text",
                      name: "first_name",
                      id: "first_name",
                      placeholder: "type your First Name"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(InputField), {
                      modelValue: unref(last_name),
                      "onUpdate:modelValue": ($event) => isRef(last_name) ? last_name.value = $event : last_name = $event,
                      label: "Last Name",
                      type: "text",
                      name: "last_name",
                      id: "last_name",
                      placeholder: "type your Last Name"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(InputField), {
                      modelValue: unref(email),
                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : email = $event,
                      label: "Email",
                      type: "email",
                      name: "email",
                      id: "email",
                      placeholder: "type your email"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(_sfc_main$2), {
                      modelValue: unref(password),
                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : password = $event,
                      label: "Password",
                      name: "password",
                      id: "password",
                      placeholder: "type your password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(_sfc_main$2), {
                      modelValue: unref(password_confirmation),
                      "onUpdate:modelValue": ($event) => isRef(password_confirmation) ? password_confirmation.value = $event : password_confirmation = $event,
                      label: "Password Confirm",
                      name: "password_confirmation",
                      id: "password_confirmation",
                      placeholder: "type your Password Confirmation"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "form-control pt-10" }, [
                      createVNode(unref(_sfc_main$3), {
                        name: "Register",
                        onClick: submitForm
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
              name: "Login",
              link: "login"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              name: "Forgot password",
              link: "forgot-password"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$4), {
                name: "Login",
                link: "login"
              }),
              createVNode(unref(_sfc_main$4), {
                name: "Forgot password",
                link: "forgot-password"
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/Auth/Frontend/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
