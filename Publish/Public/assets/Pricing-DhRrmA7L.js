import { ref, onMounted, mergeProps, unref, isRef, withCtx, openBlock, createBlock, createCommentVNode, createVNode, resolveDynamicComponent, Fragment, renderList, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrRenderVNode, ssrInterpolate } from "vue/server-renderer";
import { a as api } from "./axios-BWWnXGbF.js";
import { _ as _sfc_main$1, S as SubscriptionCard } from "./App-CccoNqE7.js";
import { usePage } from "@inertiajs/vue3";
import { Crown, ExternalLink, Check, BookOpen, Bot, Store, Users } from "lucide-vue-next";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "axios";
import "naive-ui";
import "./FlashMessage-CYVaM9mM.js";
import "./Markdown-D1WgnuMs.js";
import "dompurify";
import "markdown-it";
import "highlight.js";
import "./Input-BXi_X4mZ.js";
import "@headlessui/vue";
import "marked";
import "turndown";
import "date-fns";
import "./SearchSidebar-BPNZMEZb.js";
import "lodash";
import "./dynamicIcon-DKOdjdPH.js";
import "../Frontend_js.js";
import "./index-koWuargk.js";
import "./Money-B84zS3T2.js";
import "./SeoManager-ytA6mF8s.js";
const _sfc_main = {
  __name: "Pricing",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = ref({
      activeUsers: 0,
      courses: 0,
      aiResponses: 0
    });
    const features = [
      {
        title: "Premium Courses",
        subtitle: "Learn from industry experts",
        icon: BookOpen,
        iconColor: "text-blue-400",
        iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
        gradientClass: "from-blue-500/5 to-blue-600/5",
        badge: "Most Popular",
        badgeClass: "bg-blue-500/10 text-blue-400",
        items: [
          "Access all premium courses",
          "Downloadable resources",
          "Project files included",
          "Course completion certificates"
        ]
      },
      {
        title: "AI Assistant",
        subtitle: "24/7 development support",
        icon: Bot,
        iconColor: "text-purple-400",
        iconBg: "bg-purple-500/10 group-hover:bg-purple-500/20",
        gradientClass: "from-purple-500/5 to-purple-600/5",
        badge: "Premium",
        badgeClass: "bg-purple-500/10 text-purple-400",
        items: [
          "Instant code reviews",
          "Best practices guidance",
          "Performance optimization tips",
          "Custom learning paths"
        ]
      },
      {
        title: "Store Access",
        subtitle: "Premium game assets",
        icon: Store,
        iconColor: "text-emerald-400",
        iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
        gradientClass: "from-emerald-500/5 to-emerald-600/5",
        items: [
          "Free store items",
          "Premium assets library",
          "Early access to new items",
          "Exclusive developer tools"
        ]
      },
      {
        title: "Community Access",
        subtitle: "Connect with developers",
        icon: Users,
        iconColor: "text-amber-400",
        iconBg: "bg-amber-500/10 group-hover:bg-amber-500/20",
        gradientClass: "from-amber-500/5 to-amber-600/5",
        items: [
          "Community events",
          "Networking opportunities",
          "Private Discord access",
          "Member-only workshops"
        ]
      }
    ];
    const faqs = [
      {
        question: "Can I cancel my subscription anytime?",
        answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period."
      },
      {
        question: "Do I get access to future courses?",
        answer: "Yes! You get access to all current and future courses as long as your subscription is active."
      },
      {
        question: "How does the AI assistant work?",
        answer: "Our AI assistant is available 24/7 to help with coding questions, best practices, and problem-solving in game development."
      },
      {
        question: "What's included in the community access?",
        answer: "You get access to exclusive store items, community events, networking opportunities, and direct interaction with other developers."
      },
      {
        question: "Do you have a trial period?",
        answer: "We don't offer a trial period, but you can cancel your subscription at any time if you're not satisfied."
      },
      {
        question: "What's your refund policy?",
        answer: "We don't offer refunds for partial periods, but you can cancel your subscription at any time and continue to have access until the end of your billing period, If you're not satisfied, just let us know we can help, Why we do not offer refunds?, our courses and products are digital and orfer immediate access to content and the nature of digital products means that they cannot be returned or exchanged."
      }
    ];
    let displayLogin = ref(false);
    let openSubscribeModal = ref(false);
    let isLoading = ref(false);
    const submitForm = (plan) => {
      if (!usePage().props.isUserAuth) {
        login();
        return;
      }
      isLoading.value = true;
      api.post(route("stripe.subscribe"), {
        plan_id: plan.id
      }).then((response) => {
        window.location.href = response.data.session;
      }).catch((error) => {
        console.error("Subscription error:", error);
      });
    };
    const login = () => {
      displayLogin.value = true;
    };
    onMounted(() => {
      const animateCounter = (target, finalValue, duration = 2e3) => {
        const startTime = Date.now();
        const updateCounter = () => {
          const currentTime = Date.now();
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const value = Math.floor(progress * finalValue);
          if (target === "activeUsers") {
            stats.value.activeUsers = value;
          } else if (target === "courses") {
            stats.value.courses = value;
          } else if (target === "aiResponses") {
            stats.value.aiResponses = value;
          }
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        };
        requestAnimationFrame(updateCounter);
      };
      animateCounter("activeUsers", 5e3);
      animateCounter("courses", 200);
      animateCounter("aiResponses", 1e4);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        backgroundFooterClass: "bg-dark-100",
        headerBackground: "bg-dark-100",
        displaySubscription: unref(openSubscribeModal),
        onCloseSubscription: ($event) => isRef(openSubscribeModal) ? openSubscribeModal.value = false : openSubscribeModal = false,
        displayLogin: unref(displayLogin),
        onCloseLogin: ($event) => isRef(displayLogin) ? displayLogin.value = false : displayLogin = false,
        displayLoading: unref(isLoading),
        onCloseLoading: ($event) => isRef(isLoading) ? isLoading.value = false : isLoading = false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-screen bg-dark-100" data-v-5c82af4f${_scopeId}><div class="relative overflow-hidden bg-dark-500/90 backdrop-blur-sm border-b border-gray-800/50" data-v-5c82af4f${_scopeId}><div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5" data-v-5c82af4f${_scopeId}></div><div class="absolute inset-0 bg-[url(&#39;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+&#39;)] opacity-10" data-v-5c82af4f${_scopeId}></div><div class="absolute inset-0 pointer-events-none" data-v-5c82af4f${_scopeId}><!--[-->`);
            ssrRenderList(20, (n) => {
              _push2(`<div class="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-floating" style="${ssrRenderStyle(`left: ${Math.random() * 100}%; top: ${Math.random() * 100}%; animation-delay: -${Math.random() * 3}s`)}" data-v-5c82af4f${_scopeId}></div>`);
            });
            _push2(`<!--]--></div><div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center" data-v-5c82af4f${_scopeId}><div class="relative inline-block" data-v-5c82af4f${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Crown), { class: "w-16 h-16 text-blue-400 mx-auto mb-4 animate-float" }, null, _parent2, _scopeId));
            _push2(`<div class="absolute -inset-2 bg-blue-500/20 blur-xl animate-pulse rounded-full" data-v-5c82af4f${_scopeId}></div></div><h1 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient" data-v-5c82af4f${_scopeId}> Level Up Your Game Dev Journey </h1><p class="mt-4 max-w-3xl mx-auto text-xl text-gray-300" data-v-5c82af4f${_scopeId}> One subscription unlocks your complete game development toolkit </p></div></div><div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8" data-v-5c82af4f${_scopeId}><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" data-v-5c82af4f${_scopeId}><!--[-->`);
            ssrRenderList(unref(usePage)().props.subscriptionsProducts.data, (item, index) => {
              _push2(ssrRenderComponent(SubscriptionCard, {
                key: index,
                plan: item,
                "is-popular": index === 1,
                onSelectPlan: submitForm,
                class: "relative transform transition-all duration-300 hover:scale-105"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (index === 1) {
                      _push3(`<div class="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg -z-10 animate-pulse" data-v-5c82af4f${_scopeId2}></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      index === 1 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg -z-10 animate-pulse"
                      })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="text-sm text-gray-400" data-v-5c82af4f${_scopeId}><p class="flex items-center justify-center gap-2" data-v-5c82af4f${_scopeId}> By subscribing, you agree to our <a href="/terms-of-service" class="text-blue-400 hover:text-blue-300 underline transition-colors duration-200 inline-flex items-center gap-1" target="_blank" data-v-5c82af4f${_scopeId}> Terms of Service `);
            _push2(ssrRenderComponent(unref(ExternalLink), { class: "w-3 h-3" }, null, _parent2, _scopeId));
            _push2(`</a> and <a href="/privacy-policy" class="text-blue-400 hover:text-blue-300 underline transition-colors duration-200 inline-flex items-center gap-1" target="_blank" data-v-5c82af4f${_scopeId}> Privacy Policy `);
            _push2(ssrRenderComponent(unref(ExternalLink), { class: "w-3 h-3" }, null, _parent2, _scopeId));
            _push2(`</a></p></div><div class="relative mt-16" data-v-5c82af4f${_scopeId}><div class="text-center mb-12" data-v-5c82af4f${_scopeId}><h2 class="text-3xl font-bold text-white mb-4" data-v-5c82af4f${_scopeId}>Everything You Need to Succeed</h2><p class="text-xl text-gray-300" data-v-5c82af4f${_scopeId}>Your premium membership includes all these powerful features </p></div><div class="grid md:grid-cols-2 gap-6" data-v-5c82af4f${_scopeId}><!--[-->`);
            ssrRenderList(features, (feature, index) => {
              _push2(`<div class="feature-card bg-dark-400/30 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 group" data-v-5c82af4f${_scopeId}><div class="flex items-center space-x-4 mb-4" data-v-5c82af4f${_scopeId}><div class="${ssrRenderClass([feature.iconBg, "p-3 rounded-lg transition-colors duration-300"])}" data-v-5c82af4f${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(feature.icon), {
                class: ["w-6 h-6 transition-transform duration-300 group-hover:scale-110", feature.iconColor]
              }, null), _parent2, _scopeId);
              _push2(`</div><div data-v-5c82af4f${_scopeId}><h3 class="text-xl font-bold text-white" data-v-5c82af4f${_scopeId}>${ssrInterpolate(feature.title)}</h3><p class="text-gray-400" data-v-5c82af4f${_scopeId}>${ssrInterpolate(feature.subtitle)}</p></div></div><ul class="space-y-3 text-gray-300" data-v-5c82af4f${_scopeId}><!--[-->`);
              ssrRenderList(feature.items, (item, itemIndex) => {
                _push2(`<li class="flex items-center transform transition-transform duration-300 group-hover:translate-x-2" data-v-5c82af4f${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Check), { class: "w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" }, null, _parent2, _scopeId));
                _push2(`<span data-v-5c82af4f${_scopeId}>${ssrInterpolate(item)}</span></li>`);
              });
              _push2(`<!--]--></ul>`);
              if (feature.badge) {
                _push2(`<div class="${ssrRenderClass([feature.badgeClass, "absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium"])}" data-v-5c82af4f${_scopeId}>${ssrInterpolate(feature.badge)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div><div class="mt-16" data-v-5c82af4f${_scopeId}><h2 class="text-2xl font-bold text-white mb-8 text-center" data-v-5c82af4f${_scopeId}>Frequently Asked Questions</h2><div class="grid md:grid-cols-2 gap-6" data-v-5c82af4f${_scopeId}><!--[-->`);
            ssrRenderList(faqs, (faq, index) => {
              _push2(`<div class="bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-colors duration-300" data-v-5c82af4f${_scopeId}><h3 class="text-lg font-bold text-white mb-2" data-v-5c82af4f${_scopeId}>${ssrInterpolate(faq.question)}</h3><p class="text-gray-300" data-v-5c82af4f${_scopeId}>${ssrInterpolate(faq.answer)}</p></div>`);
            });
            _push2(`<!--]--></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-screen bg-dark-100" }, [
                createVNode("div", { class: "relative overflow-hidden bg-dark-500/90 backdrop-blur-sm border-b border-gray-800/50" }, [
                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5" }),
                  createVNode("div", { class: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" }),
                  createVNode("div", { class: "absolute inset-0 pointer-events-none" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(20, (n) => {
                      return createVNode("div", {
                        key: n,
                        class: "absolute w-1 h-1 bg-blue-400/30 rounded-full animate-floating",
                        style: `left: ${Math.random() * 100}%; top: ${Math.random() * 100}%; animation-delay: -${Math.random() * 3}s`
                      }, null, 4);
                    }), 64))
                  ]),
                  createVNode("div", { class: "relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center" }, [
                    createVNode("div", { class: "relative inline-block" }, [
                      createVNode(unref(Crown), { class: "w-16 h-16 text-blue-400 mx-auto mb-4 animate-float" }),
                      createVNode("div", { class: "absolute -inset-2 bg-blue-500/20 blur-xl animate-pulse rounded-full" })
                    ]),
                    createVNode("h1", { class: "text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient" }, " Level Up Your Game Dev Journey "),
                    createVNode("p", { class: "mt-4 max-w-3xl mx-auto text-xl text-gray-300" }, " One subscription unlocks your complete game development toolkit ")
                  ])
                ]),
                createVNode("div", { class: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8" }, [
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(usePage)().props.subscriptionsProducts.data, (item, index) => {
                      return openBlock(), createBlock(SubscriptionCard, {
                        key: index,
                        plan: item,
                        "is-popular": index === 1,
                        onSelectPlan: submitForm,
                        class: "relative transform transition-all duration-300 hover:scale-105"
                      }, {
                        default: withCtx(() => [
                          index === 1 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg -z-10 animate-pulse"
                          })) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["plan", "is-popular"]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "text-sm text-gray-400" }, [
                    createVNode("p", { class: "flex items-center justify-center gap-2" }, [
                      createTextVNode(" By subscribing, you agree to our "),
                      createVNode("a", {
                        href: "/terms-of-service",
                        class: "text-blue-400 hover:text-blue-300 underline transition-colors duration-200 inline-flex items-center gap-1",
                        target: "_blank"
                      }, [
                        createTextVNode(" Terms of Service "),
                        createVNode(unref(ExternalLink), { class: "w-3 h-3" })
                      ]),
                      createTextVNode(" and "),
                      createVNode("a", {
                        href: "/privacy-policy",
                        class: "text-blue-400 hover:text-blue-300 underline transition-colors duration-200 inline-flex items-center gap-1",
                        target: "_blank"
                      }, [
                        createTextVNode(" Privacy Policy "),
                        createVNode(unref(ExternalLink), { class: "w-3 h-3" })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "relative mt-16" }, [
                    createVNode("div", { class: "text-center mb-12" }, [
                      createVNode("h2", { class: "text-3xl font-bold text-white mb-4" }, "Everything You Need to Succeed"),
                      createVNode("p", { class: "text-xl text-gray-300" }, "Your premium membership includes all these powerful features ")
                    ]),
                    createVNode("div", { class: "grid md:grid-cols-2 gap-6" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(features, (feature, index) => {
                        return createVNode("div", {
                          key: index,
                          class: "feature-card bg-dark-400/30 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 group"
                        }, [
                          createVNode("div", { class: "flex items-center space-x-4 mb-4" }, [
                            createVNode("div", {
                              class: ["p-3 rounded-lg transition-colors duration-300", feature.iconBg]
                            }, [
                              (openBlock(), createBlock(resolveDynamicComponent(feature.icon), {
                                class: ["w-6 h-6 transition-transform duration-300 group-hover:scale-110", feature.iconColor]
                              }, null, 8, ["class"]))
                            ], 2),
                            createVNode("div", null, [
                              createVNode("h3", { class: "text-xl font-bold text-white" }, toDisplayString(feature.title), 1),
                              createVNode("p", { class: "text-gray-400" }, toDisplayString(feature.subtitle), 1)
                            ])
                          ]),
                          createVNode("ul", { class: "space-y-3 text-gray-300" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(feature.items, (item, itemIndex) => {
                              return openBlock(), createBlock("li", {
                                key: itemIndex,
                                class: "flex items-center transform transition-transform duration-300 group-hover:translate-x-2"
                              }, [
                                createVNode(unref(Check), { class: "w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" }),
                                createVNode("span", null, toDisplayString(item), 1)
                              ]);
                            }), 128))
                          ]),
                          feature.badge ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: ["absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium", feature.badgeClass]
                          }, toDisplayString(feature.badge), 3)) : createCommentVNode("", true)
                        ]);
                      }), 64))
                    ])
                  ]),
                  createVNode("div", { class: "mt-16" }, [
                    createVNode("h2", { class: "text-2xl font-bold text-white mb-8 text-center" }, "Frequently Asked Questions"),
                    createVNode("div", { class: "grid md:grid-cols-2 gap-6" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(faqs, (faq, index) => {
                        return createVNode("div", {
                          key: index,
                          class: "bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-colors duration-300"
                        }, [
                          createVNode("h3", { class: "text-lg font-bold text-white mb-2" }, toDisplayString(faq.question), 1),
                          createVNode("p", { class: "text-gray-300" }, toDisplayString(faq.answer), 1)
                        ]);
                      }), 64))
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Legal/Pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Pricing = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5c82af4f"]]);
export {
  Pricing as default
};
