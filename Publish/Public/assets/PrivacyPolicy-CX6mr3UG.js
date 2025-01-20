import { mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./App-CccoNqE7.js";
import { Link } from "@inertiajs/vue3";
import { Shield, Database, ChartBar, Settings, Wallet, ShieldCheck, Mail } from "lucide-vue-next";
import "naive-ui";
import "./FlashMessage-CYVaM9mM.js";
import "./Markdown-D1WgnuMs.js";
import "dompurify";
import "markdown-it";
import "highlight.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./Input-BXi_X4mZ.js";
import "@headlessui/vue";
import "marked";
import "turndown";
import "date-fns";
import "./SearchSidebar-BPNZMEZb.js";
import "lodash";
import "./dynamicIcon-DKOdjdPH.js";
import "./axios-BWWnXGbF.js";
import "axios";
import "../Frontend_js.js";
import "./index-koWuargk.js";
import "./Money-B84zS3T2.js";
import "./SeoManager-ytA6mF8s.js";
const _sfc_main = {
  __name: "PrivacyPolicy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        backgroundFooterClass: "bg-dark-100",
        headerBackground: "bg-dark-100"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-screen bg-dark-100"${_scopeId}><div class="relative overflow-hidden bg-dark-500/90 backdrop-blur-sm border-b border-gray-800/50"${_scopeId}><div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"${_scopeId}></div><div class="absolute inset-0 bg-[url(&#39;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+&#39;)] opacity-10"${_scopeId}></div><div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Shield), { class: "w-16 h-16 text-blue-400 mx-auto mb-4" }, null, _parent2, _scopeId));
            _push2(`<h1 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"${_scopeId}>Privacy Policy</h1><p class="mt-4 max-w-3xl mx-auto text-xl text-gray-300"${_scopeId}>Understanding how we protect your data and respect your privacy</p></div></div><div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"${_scopeId}><div class="space-y-8"${_scopeId}><section class="prose prose-invert max-w-none"${_scopeId}><p class="text-lg text-gray-300"${_scopeId}> Last updated: ${ssrInterpolate((/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }))}</p><p class="text-gray-300"${_scopeId}> At TheDevRealm, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information when you use our website and services. </p></section><div class="grid gap-8 md:grid-cols-2"${_scopeId}><div class="bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50"${_scopeId}><div class="flex items-center gap-3 mb-4"${_scopeId}><div class="p-2 rounded-lg bg-blue-500/10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Database), { class: "w-6 h-6 text-blue-400" }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="text-xl font-bold text-white"${_scopeId}>Information Collection</h2></div><div class="space-y-4 text-gray-300"${_scopeId}><p${_scopeId}>We collect information that you provide directly to us, including:</p><ul class="list-disc pl-5 space-y-2"${_scopeId}><li${_scopeId}>Name and email address when you create an account</li><li${_scopeId}>Payment information for course purchases</li><li${_scopeId}>Course progress and completion data</li><li${_scopeId}>Comments and interactions within our platform</li></ul></div></div><div class="bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50"${_scopeId}><div class="flex items-center gap-3 mb-4"${_scopeId}><div class="p-2 rounded-lg bg-purple-500/10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ChartBar), { class: "w-6 h-6 text-purple-400" }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="text-xl font-bold text-white"${_scopeId}>Analytics</h2></div><div class="space-y-4 text-gray-300"${_scopeId}><p${_scopeId}>We use Google Analytics to understand how users interact with our website. This includes:</p><ul class="list-disc pl-5 space-y-2"${_scopeId}><li${_scopeId}>Pages visited and time spent on the site</li><li${_scopeId}>Browser and device information</li><li${_scopeId}>Geographic location (country/region level)</li><li${_scopeId}>Referral sources</li></ul></div></div><div class="bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50"${_scopeId}><div class="flex items-center gap-3 mb-4"${_scopeId}><div class="p-2 rounded-lg bg-green-500/10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Settings), { class: "w-6 h-6 text-green-400" }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="text-xl font-bold text-white"${_scopeId}>How We Use Your Data</h2></div><div class="space-y-4 text-gray-300"${_scopeId}><p${_scopeId}>We use your information to:</p><ul class="list-disc pl-5 space-y-2"${_scopeId}><li${_scopeId}>Provide access to our courses and services</li><li${_scopeId}>Process payments and maintain records</li><li${_scopeId}>Send important updates about your courses</li><li${_scopeId}>Improve our platform and content</li><li${_scopeId}>Respond to your questions and support requests</li></ul></div></div><div class="bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50"${_scopeId}><div class="flex items-center gap-3 mb-4"${_scopeId}><div class="p-2 rounded-lg bg-red-500/10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Wallet), { class: "w-6 h-6 text-red-400" }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="text-xl font-bold text-white"${_scopeId}>Refund Policy</h2></div><div class="space-y-4 text-gray-300"${_scopeId}><p class="font-medium"${_scopeId}>All sales are final. We do not offer refunds for our products.</p><p${_scopeId}>This policy is in place because:</p><ul class="list-disc pl-5 space-y-2"${_scopeId}><li${_scopeId}>Our courses provide immediate access to digital content</li><li${_scopeId}>Course previews are available before purchase</li><li${_scopeId}>We maintain high-quality standards for all our content</li><li${_scopeId}>Why we do not offer refunds?, our courses and products are digital and orfer immediate access to content and the nature of digital products means that they cannot be returned or exchanged.</li></ul></div></div><div class="bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50"${_scopeId}><div class="flex items-center gap-3 mb-4"${_scopeId}><div class="p-2 rounded-lg bg-yellow-500/10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ShieldCheck), { class: "w-6 h-6 text-yellow-400" }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="text-xl font-bold text-white"${_scopeId}>Security &amp; reCAPTCHA</h2></div><div class="space-y-4 text-gray-300"${_scopeId}><p${_scopeId}>We use Google reCAPTCHA Enterprise to protect our website and our users from:</p><ul class="list-disc pl-5 space-y-2"${_scopeId}><li${_scopeId}>Automated spam submissions</li><li${_scopeId}>Malicious login attempts</li><li${_scopeId}>Fraudulent account creation</li><li${_scopeId}>Other forms of automated abuse</li></ul><p class="text-sm mt-4"${_scopeId}>By using our website, you acknowledge that data collected by Google reCAPTCHA may include:</p><ul class="list-disc pl-5 space-y-2 text-sm"${_scopeId}><li${_scopeId}>Browser information</li><li${_scopeId}>Interaction patterns</li><li${_scopeId}>Device characteristics</li><li${_scopeId}>Time spent on site</li></ul><p class="text-sm mt-4"${_scopeId}>This information is processed in accordance with <a href="https://policies.google.com/privacy" target="_blank" class="text-blue-400 hover:underline"${_scopeId}>Google&#39;s Privacy Policy</a>.</p></div></div></div><div class="bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 text-center"${_scopeId}><h2 class="text-xl font-bold text-white mb-4"${_scopeId}>Questions About Our Privacy Policy?</h2><p class="text-gray-300 mb-6"${_scopeId}> If you have any questions or concerns about our privacy policy, please don&#39;t hesitate to contact us. </p>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/contact",
              class: "inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Mail), { class: "w-5 h-5" }, null, _parent3, _scopeId2));
                  _push3(` Contact Us `);
                } else {
                  return [
                    createVNode(unref(Mail), { class: "w-5 h-5" }),
                    createTextVNode(" Contact Us ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-screen bg-dark-100" }, [
                createVNode("div", { class: "relative overflow-hidden bg-dark-500/90 backdrop-blur-sm border-b border-gray-800/50" }, [
                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5" }),
                  createVNode("div", { class: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" }),
                  createVNode("div", { class: "relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center" }, [
                    createVNode(unref(Shield), { class: "w-16 h-16 text-blue-400 mx-auto mb-4" }),
                    createVNode("h1", { class: "text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl" }, "Privacy Policy"),
                    createVNode("p", { class: "mt-4 max-w-3xl mx-auto text-xl text-gray-300" }, "Understanding how we protect your data and respect your privacy")
                  ])
                ]),
                createVNode("div", { class: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8" }, [
                  createVNode("div", { class: "space-y-8" }, [
                    createVNode("section", { class: "prose prose-invert max-w-none" }, [
                      createVNode("p", { class: "text-lg text-gray-300" }, " Last updated: " + toDisplayString((/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })), 1),
                      createVNode("p", { class: "text-gray-300" }, " At TheDevRealm, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information when you use our website and services. ")
                    ]),
                    createVNode("div", { class: "grid gap-8 md:grid-cols-2" }, [
                      createVNode("div", { class: "bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50" }, [
                        createVNode("div", { class: "flex items-center gap-3 mb-4" }, [
                          createVNode("div", { class: "p-2 rounded-lg bg-blue-500/10" }, [
                            createVNode(unref(Database), { class: "w-6 h-6 text-blue-400" })
                          ]),
                          createVNode("h2", { class: "text-xl font-bold text-white" }, "Information Collection")
                        ]),
                        createVNode("div", { class: "space-y-4 text-gray-300" }, [
                          createVNode("p", null, "We collect information that you provide directly to us, including:"),
                          createVNode("ul", { class: "list-disc pl-5 space-y-2" }, [
                            createVNode("li", null, "Name and email address when you create an account"),
                            createVNode("li", null, "Payment information for course purchases"),
                            createVNode("li", null, "Course progress and completion data"),
                            createVNode("li", null, "Comments and interactions within our platform")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50" }, [
                        createVNode("div", { class: "flex items-center gap-3 mb-4" }, [
                          createVNode("div", { class: "p-2 rounded-lg bg-purple-500/10" }, [
                            createVNode(unref(ChartBar), { class: "w-6 h-6 text-purple-400" })
                          ]),
                          createVNode("h2", { class: "text-xl font-bold text-white" }, "Analytics")
                        ]),
                        createVNode("div", { class: "space-y-4 text-gray-300" }, [
                          createVNode("p", null, "We use Google Analytics to understand how users interact with our website. This includes:"),
                          createVNode("ul", { class: "list-disc pl-5 space-y-2" }, [
                            createVNode("li", null, "Pages visited and time spent on the site"),
                            createVNode("li", null, "Browser and device information"),
                            createVNode("li", null, "Geographic location (country/region level)"),
                            createVNode("li", null, "Referral sources")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50" }, [
                        createVNode("div", { class: "flex items-center gap-3 mb-4" }, [
                          createVNode("div", { class: "p-2 rounded-lg bg-green-500/10" }, [
                            createVNode(unref(Settings), { class: "w-6 h-6 text-green-400" })
                          ]),
                          createVNode("h2", { class: "text-xl font-bold text-white" }, "How We Use Your Data")
                        ]),
                        createVNode("div", { class: "space-y-4 text-gray-300" }, [
                          createVNode("p", null, "We use your information to:"),
                          createVNode("ul", { class: "list-disc pl-5 space-y-2" }, [
                            createVNode("li", null, "Provide access to our courses and services"),
                            createVNode("li", null, "Process payments and maintain records"),
                            createVNode("li", null, "Send important updates about your courses"),
                            createVNode("li", null, "Improve our platform and content"),
                            createVNode("li", null, "Respond to your questions and support requests")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50" }, [
                        createVNode("div", { class: "flex items-center gap-3 mb-4" }, [
                          createVNode("div", { class: "p-2 rounded-lg bg-red-500/10" }, [
                            createVNode(unref(Wallet), { class: "w-6 h-6 text-red-400" })
                          ]),
                          createVNode("h2", { class: "text-xl font-bold text-white" }, "Refund Policy")
                        ]),
                        createVNode("div", { class: "space-y-4 text-gray-300" }, [
                          createVNode("p", { class: "font-medium" }, "All sales are final. We do not offer refunds for our products."),
                          createVNode("p", null, "This policy is in place because:"),
                          createVNode("ul", { class: "list-disc pl-5 space-y-2" }, [
                            createVNode("li", null, "Our courses provide immediate access to digital content"),
                            createVNode("li", null, "Course previews are available before purchase"),
                            createVNode("li", null, "We maintain high-quality standards for all our content"),
                            createVNode("li", null, "Why we do not offer refunds?, our courses and products are digital and orfer immediate access to content and the nature of digital products means that they cannot be returned or exchanged.")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50" }, [
                        createVNode("div", { class: "flex items-center gap-3 mb-4" }, [
                          createVNode("div", { class: "p-2 rounded-lg bg-yellow-500/10" }, [
                            createVNode(unref(ShieldCheck), { class: "w-6 h-6 text-yellow-400" })
                          ]),
                          createVNode("h2", { class: "text-xl font-bold text-white" }, "Security & reCAPTCHA")
                        ]),
                        createVNode("div", { class: "space-y-4 text-gray-300" }, [
                          createVNode("p", null, "We use Google reCAPTCHA Enterprise to protect our website and our users from:"),
                          createVNode("ul", { class: "list-disc pl-5 space-y-2" }, [
                            createVNode("li", null, "Automated spam submissions"),
                            createVNode("li", null, "Malicious login attempts"),
                            createVNode("li", null, "Fraudulent account creation"),
                            createVNode("li", null, "Other forms of automated abuse")
                          ]),
                          createVNode("p", { class: "text-sm mt-4" }, "By using our website, you acknowledge that data collected by Google reCAPTCHA may include:"),
                          createVNode("ul", { class: "list-disc pl-5 space-y-2 text-sm" }, [
                            createVNode("li", null, "Browser information"),
                            createVNode("li", null, "Interaction patterns"),
                            createVNode("li", null, "Device characteristics"),
                            createVNode("li", null, "Time spent on site")
                          ]),
                          createVNode("p", { class: "text-sm mt-4" }, [
                            createTextVNode("This information is processed in accordance with "),
                            createVNode("a", {
                              href: "https://policies.google.com/privacy",
                              target: "_blank",
                              class: "text-blue-400 hover:underline"
                            }, "Google's Privacy Policy"),
                            createTextVNode(".")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-dark-500/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 text-center" }, [
                      createVNode("h2", { class: "text-xl font-bold text-white mb-4" }, "Questions About Our Privacy Policy?"),
                      createVNode("p", { class: "text-gray-300 mb-6" }, " If you have any questions or concerns about our privacy policy, please don't hesitate to contact us. "),
                      createVNode(unref(Link), {
                        href: "/contact",
                        class: "inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-300"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Mail), { class: "w-5 h-5" }),
                          createTextVNode(" Contact Us ")
                        ]),
                        _: 1
                      })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Pages/FrontEnd/Vendor/GameDev/Legal/PrivacyPolicy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
