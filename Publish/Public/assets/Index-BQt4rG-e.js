import { defineComponent, mergeProps, useSSRContext, onMounted, resolveComponent, withCtx, renderSlot, createVNode, unref, ref, isRef, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { _ as _sfc_main$4 } from "./FlashMessage-CYVaM9mM.js";
import { I as InputField, _ as _sfc_main$5, a as _sfc_main$6, b as _sfc_main$7 } from "./Input-BXi_X4mZ.js";
import "naive-ui";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@headlessui/vue";
import "dompurify";
import "marked";
import "turndown";
import "lucide-vue-next";
import "date-fns";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "UserLogo",
  __ssrInlineRender: true,
  props: {
    width: {
      type: Number,
      default: 163
    },
    height: {
      type: Number,
      default: 124
    },
    full: {
      type: String,
      default: "true"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        xmlns: "http://www.w3.org/2000/svg",
        class: props.full == "true" ? "max-w-sm rounded-lg" : "",
        viewBox: "0 0 163 124",
        width: "{{ props.width ?? 163 }}",
        height: "{{ props.height ?? 124 }}"
      }, _attrs))}><rect fill="hsla(var(--p) / var(--tw-bg-opacity))" width="120.96" height="117.96" x="0" y="0"></rect><g fill="white" color="white" transform="translate(35.48 12) scale(0.5)"><svg width="100.0" height="100.0" x="0.0" y="0.0" viewBox="0 0 100 100"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.246,10.322c19.836,0,39.672,0,59.512,0c-1.881,8.494,1.426,11.8,9.92,9.924  c0,15.583,0,31.173,0,46.754c-3.309,0-6.613,0-9.92,0c0,7.561,0,15.119,0,22.678c-4.721,0-9.445,0-14.168,0  c0-3.783,0-7.559,0-11.336c-3.305,0-6.613,0-9.921,0c-3.191,1.053-0.557,7.947-1.416,11.336c-4.247,0-8.501,0-12.753,0  c0-3.783,0-7.559,0-11.336c-2.835,0-5.671,0-8.5,0c-3.194,1.053-0.56,7.947-1.417,11.336c-3.783,0-7.561,0-11.337,0  c0-7.088,0-14.17,0-21.262c-0.614-3.168-6.988-0.57-9.924-1.416c0-15.581,0-31.171,0-46.754c3.312,0,6.618,0,9.924,0  C20.246,16.935,20.246,13.628,20.246,10.322z M21.664,57.083c7.082,0,14.165,0,21.252,0c2.899-4.653,0.766-14.347,1.42-21.254  c-8.031,0-16.06,0-24.09,0C20.898,42.736,18.767,52.43,21.664,57.083z M54.253,55.664c5.087,2.951,15.325,0.74,22.671,1.419  c0-7.083,0-14.164,0-21.254c-7.559,0-15.111,0-22.671,0C54.253,42.44,54.253,49.052,54.253,55.664z M44.336,67  c3.304,0,6.611,0,9.917,0c0-3.305,0-6.613,0-9.917c-3.306,0-6.613,0-9.917,0C44.336,60.387,44.336,63.695,44.336,67z"></path></svg></g><path fill="white" fill-rule="nonzero" d="M16.24 0.24L21.76 0.24L21.76 18.96Q21.76 23.60 18.62 26.28Q15.48 28.96 10.88 28.96Q6.28 28.96 3.14 26.28Q0 23.60 0 18.96L0 18.96L0 0.24L5.56 0.24L5.56 18.76Q5.56 21.40 7.02 22.70Q8.48 24 10.88 24Q13.28 24 14.76 22.70Q16.24 21.40 16.24 18.76L16.24 18.76L16.24 0.24ZM46.76 20.32L46.76 20.32Q46.76 24.36 43.80 26.66Q40.84 28.96 36.24 28.96L36.24 28.96Q32.60 28.96 29.20 26.96L29.20 26.96Q27.52 25.92 26.44 24.02Q25.36 22.12 25.36 19.68L25.36 19.68L30.40 19.44Q30.40 21.60 32.24 22.80Q34.08 24 36.32 24L36.32 24Q41.32 24 41.32 20.48L41.32 20.48Q41.32 17.60 37.92 17.08L37.92 17.08L33.28 16.60Q29.80 16.08 27.76 14.12Q25.72 12.16 25.72 8.48Q25.72 4.80 28.64 2.40Q31.56 0 36.02 0Q40.48 0 43.20 2.26Q45.92 4.52 45.92 8.08L45.92 8.08L40.96 8.32Q40.28 4.84 36.28 4.84L36.28 4.84Q33.84 4.84 32.46 5.88Q31.08 6.92 31.08 8.34Q31.08 9.76 32.08 10.58Q33.08 11.40 34.56 11.60L34.56 11.60L39.12 12.08Q46.76 13.12 46.76 20.32ZM69.96 23.76L69.96 28.72L59.88 28.72Q55.08 28.72 53.14 27.06Q51.20 25.40 51.20 21.20L51.20 21.20L51.20 0.24L69.96 0.24L69.96 5.20L56.76 5.20L56.76 11.88L66 11.88L65.60 16.84L56.76 16.84L56.76 20.80Q56.76 22.48 57.52 23.12Q58.28 23.76 60.28 23.76L60.28 23.76L69.96 23.76ZM90.60 17.24L96.96 28.72L90.52 28.72L84.96 18.16L80.96 18.16L80.96 28.72L75.40 28.72L75.40 6.36Q75.40 3.16 76.88 1.70Q78.36 0.24 81.84 0.24L81.84 0.24L86.56 0.24Q90.80 0.24 93.30 2.82Q95.80 5.40 95.80 9.36L95.80 9.36Q95.80 12.24 94.30 14.34Q92.80 16.44 90.60 17.24L90.60 17.24ZM86.20 13.52Q87.96 13.52 89.10 12.30Q90.24 11.08 90.24 9.26Q90.24 7.44 89.14 6.32Q88.04 5.20 86.20 5.20L86.20 5.20L83.44 5.20Q80.96 5.20 80.96 7.72L80.96 7.72L80.96 13.52L86.20 13.52Z" transform="translate(12 77) scale(1)"></path></svg>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Global/UserLogo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AuthWrap",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero min-h-screen bg-base-200" }, _attrs))}><div class="hero-content flex-col lg:flex-row-reverse"><div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"><div class="card-body text-center"><div class="avatar justify-center"><div class="w-32 rounded">`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</div></div>`);
      ssrRenderSlot(_ctx.$slots, "form", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "links", {}, null, _push, _parent);
      _push(`</div></div><div class="text-center lg:text-left"><h1 class="text-5xl font-bold">${ssrInterpolate(props.title)}</h1><p class="py-6"> Welcome to the frontend login, in here you have a very basic dashboard, with user profile management, Thank you for download skeleton-admin please don&#39;t forget to share this package, now go and create your amazing application. </p></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/Auth/AuthWrap.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Title"
    }
  },
  setup(__props) {
    const props = __props;
    const loadLocalStorageTheme = async () => {
      const html = document.querySelector("html");
      html.setAttribute("data-theme", "coffee");
      const theme = localStorage.getItem("theme-frontend");
      if (theme) {
        html.setAttribute("data-theme", theme);
      } else {
        html.setAttribute("data-theme", "dracula");
      }
    };
    onMounted(() => {
      loadLocalStorageTheme();
    });
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_loading_bar_provider = resolveComponent("n-loading-bar-provider");
      const _component_n_message_provider = resolveComponent("n-message-provider");
      const _component_n_notification_provider = resolveComponent("n-notification-provider");
      const _component_n_dialog_provider = resolveComponent("n-dialog-provider");
      const _component_n_config_provider = resolveComponent("n-config-provider");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_n_loading_bar_provider, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_message_provider, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_n_notification_provider, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_n_dialog_provider, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_n_config_provider, { theme: _ctx.darkTheme }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$4, null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_sfc_main$2, {
                                      title: props.title
                                    }, {
                                      form: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          ssrRenderSlot(_ctx.$slots, "form", {}, null, _push7, _parent7, _scopeId6);
                                        } else {
                                          return [
                                            renderSlot(_ctx.$slots, "form")
                                          ];
                                        }
                                      }),
                                      links: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          ssrRenderSlot(_ctx.$slots, "links", {}, null, _push7, _parent7, _scopeId6);
                                        } else {
                                          return [
                                            renderSlot(_ctx.$slots, "links")
                                          ];
                                        }
                                      }),
                                      _: 3
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$4),
                                      createVNode(_sfc_main$2, {
                                        title: props.title
                                      }, {
                                        form: withCtx(() => [
                                          renderSlot(_ctx.$slots, "form")
                                        ]),
                                        links: withCtx(() => [
                                          renderSlot(_ctx.$slots, "links")
                                        ]),
                                        _: 3
                                      }, 8, ["title"])
                                    ];
                                  }
                                }),
                                _: 3
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_n_config_provider, { theme: _ctx.darkTheme }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$4),
                                    createVNode(_sfc_main$2, {
                                      title: props.title
                                    }, {
                                      form: withCtx(() => [
                                        renderSlot(_ctx.$slots, "form")
                                      ]),
                                      links: withCtx(() => [
                                        renderSlot(_ctx.$slots, "links")
                                      ]),
                                      _: 3
                                    }, 8, ["title"])
                                  ]),
                                  _: 3
                                }, 8, ["theme"])
                              ];
                            }
                          }),
                          _: 3
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_n_dialog_provider, null, {
                            default: withCtx(() => [
                              createVNode(_component_n_config_provider, { theme: _ctx.darkTheme }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$4),
                                  createVNode(_sfc_main$2, {
                                    title: props.title
                                  }, {
                                    form: withCtx(() => [
                                      renderSlot(_ctx.$slots, "form")
                                    ]),
                                    links: withCtx(() => [
                                      renderSlot(_ctx.$slots, "links")
                                    ]),
                                    _: 3
                                  }, 8, ["title"])
                                ]),
                                _: 3
                              }, 8, ["theme"])
                            ]),
                            _: 3
                          })
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_n_notification_provider, null, {
                      default: withCtx(() => [
                        createVNode(_component_n_dialog_provider, null, {
                          default: withCtx(() => [
                            createVNode(_component_n_config_provider, { theme: _ctx.darkTheme }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$4),
                                createVNode(_sfc_main$2, {
                                  title: props.title
                                }, {
                                  form: withCtx(() => [
                                    renderSlot(_ctx.$slots, "form")
                                  ]),
                                  links: withCtx(() => [
                                    renderSlot(_ctx.$slots, "links")
                                  ]),
                                  _: 3
                                }, 8, ["title"])
                              ]),
                              _: 3
                            }, 8, ["theme"])
                          ]),
                          _: 3
                        })
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_n_message_provider, null, {
                default: withCtx(() => [
                  createVNode(_component_n_notification_provider, null, {
                    default: withCtx(() => [
                      createVNode(_component_n_dialog_provider, null, {
                        default: withCtx(() => [
                          createVNode(_component_n_config_provider, { theme: _ctx.darkTheme }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4),
                              createVNode(_sfc_main$2, {
                                title: props.title
                              }, {
                                form: withCtx(() => [
                                  renderSlot(_ctx.$slots, "form")
                                ]),
                                links: withCtx(() => [
                                  renderSlot(_ctx.$slots, "links")
                                ]),
                                _: 3
                              }, 8, ["title"])
                            ]),
                            _: 3
                          }, 8, ["theme"])
                        ]),
                        _: 3
                      })
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<footer class="footer footer-center p-4 bg-base-300 text-base-content"><div><p> Copyright © ${ssrInterpolate(unref(currentYear))} - All right reserved by <a target="_blank" href="https://github.com/mariojgt/skeleton-admin">Skeleton-admin</a></p></div></footer><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Layout/Login.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "mariojgt is heredude"
    }
  },
  setup(__props) {
    let email = ref("");
    let password = ref("");
    const submitForm = () => {
      const form = {
        email: email.value,
        password: password.value
      };
      router.post(route("login.user"), form);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Frontend Login" }, _attrs), {
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><form${_scopeId}><div class="px-5 py-7"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(InputField), {
              id: "email",
              modelValue: unref(email),
              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : email = $event,
              label: "Email",
              type: "email",
              name: "email",
              placeholder: "type your email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$5), {
              id: "password",
              modelValue: unref(password),
              "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : password = $event,
              label: "Password",
              name: "password",
              placeholder: "type your password"
            }, null, _parent2, _scopeId));
            _push2(`<div class="form-control pt-10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$6), { onClick: submitForm }, null, _parent2, _scopeId));
            _push2(`</div></div></form></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("form", {
                  onSubmit: withModifiers(submitForm, ["prevent"])
                }, [
                  createVNode("div", { class: "px-5 py-7" }, [
                    createVNode(unref(InputField), {
                      id: "email",
                      modelValue: unref(email),
                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : email = $event,
                      label: "Email",
                      type: "email",
                      name: "email",
                      placeholder: "type your email"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(_sfc_main$5), {
                      id: "password",
                      modelValue: unref(password),
                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : password = $event,
                      label: "Password",
                      name: "password",
                      placeholder: "type your password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "form-control pt-10" }, [
                      createVNode(unref(_sfc_main$6), { onClick: submitForm })
                    ])
                  ])
                ], 32)
              ])
            ];
          }
        }),
        links: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$7), {
              name: "Register",
              link: "register"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$7), {
              name: "Forgot password",
              link: "forgot-password"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$7), {
                name: "Register",
                link: "register"
              }),
              createVNode(unref(_sfc_main$7), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/Auth/Frontend/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
