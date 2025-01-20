import { defineComponent, ref, mergeProps, withCtx, unref, isRef, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./App-CccoNqE7.js";
import { I as InputField, a as _sfc_main$2, b as _sfc_main$3 } from "./Input-BXi_X4mZ.js";
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
  __name: "Reset",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "mariojgt is heredude"
    }
  },
  setup(__props) {
    let email = ref("");
    const submitForm = () => {
      const form = {
        email: email.value
      };
      router.post(route("password-reset.user"), form);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Frontend Reset Password" }, _attrs), {
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
              placeholder: "type your email"
            }, null, _parent2, _scopeId));
            _push2(`<div class="form-control pt-10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { onClick: submitForm }, null, _parent2, _scopeId));
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
                      placeholder: "type your email"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "form-control pt-10" }, [
                      createVNode(unref(_sfc_main$2), { onClick: submitForm })
                    ])
                  ])
                ], 32)
              ])
            ];
          }
        }),
        links: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              name: "Register",
              link: "register"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              name: "Forgot password",
              link: "forgot-password"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$3), {
                name: "Register",
                link: "register"
              }),
              createVNode(unref(_sfc_main$3), {
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
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/Auth/Frontend/Reset.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
